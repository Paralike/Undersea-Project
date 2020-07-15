using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.DTOs.GameElemens;
using Undersea.BLL.Exceptions;
using Undersea.BLL.Interfaces;
using Undersea.DAL.Enums;
using Undersea.DAL.Models;
using Undersea.DAL.Repositories.Interfaces;
using Undersea.DAL.Repository.Interfaces;

namespace Undersea.BLL.Services
{
    public class ArmyService : IArmyService
    {
        private readonly IArmyRepository _armyRepository;
        private readonly IArmyUnitJoinRepository _armyUnitRepository;
        private readonly ICityRepository _cityRepository;
        private readonly IUnitRepository _unitRepository;
        private readonly IUpgradeJoinRepository _upgradeJoinRepository;
        private readonly IBuildingJoinRepository _buildingJoinRepository;
        private readonly IUpgradeAttributeRepository _upgradeAttributeRepository;
        private readonly IMapper _mapper;

        public ArmyService()
        {

        }

        public ArmyService(IArmyRepository armyRepository, IArmyUnitJoinRepository armyUnitRepository,
            IMapper mapper, ICityRepository cityRepository, IUnitRepository unitRepository, IBuildingJoinRepository buildingJoinRepository, IUpgradeJoinRepository upgradeJoinRepository, IUpgradeAttributeRepository upgradeAttributeRepository)
        {
            _armyRepository = armyRepository;
            _armyUnitRepository = armyUnitRepository;
            _cityRepository = cityRepository;
            _unitRepository = unitRepository;
            _mapper = mapper;
            _buildingJoinRepository = buildingJoinRepository;
            _upgradeJoinRepository = upgradeJoinRepository;
            _upgradeAttributeRepository = upgradeAttributeRepository;
        }

        public async Task<ArmyDto> GetArmy(Guid id)
        {
            var cities = await _cityRepository.GetWhere(c => c.UserId == id);
            var firstCity = cities.First();

            var list = await _armyUnitRepository.GetWhere(u => u.ArmyId == firstCity.AvailableArmyId);

            var unitList = list.Select(x => new ArmyUnitDto
            {
                UnitType = x.UnitType,
                UnitCount = x.UnitCount
            }).ToList();

            ArmyDto newDto = new ArmyDto()
            {
                UnitList = unitList,
                ArmyFoodNecessity = await _armyRepository.GetFoodNecessity(firstCity.AvailableArmyId),
                ArmyPearlNecessity = await _armyRepository.GetPearlNecessity(firstCity.AvailableArmyId)
            };

            return newDto;
        }


        public async Task FillArmy(Guid userId)
        {
            var cities = await _cityRepository.GetWhere(c => c.UserId == userId);
            var firstCity = cities.First();

            var army = firstCity.AvailableArmy;

            foreach(UnitType type in Enum.GetValues(typeof(UnitType)))
            {
                await _armyUnitRepository.Add(new ArmyUnit()
                {
                    ArmyId = army.Id,
                    Army = army,
                    UnitType = type,
                    UnitCount = 10,
                });
            }

            await _armyRepository.Update(firstCity.AvailableArmy);
            await _cityRepository.Update(firstCity);
        }

        public async Task PurchaseUnits(Guid id, List<ArmyUnitDto> dto)
        {
            var cities = await _cityRepository.GetWhere(c => c.UserId == id);
            var firstCity = cities.First();

            var armyUnits = await _armyUnitRepository.GetWhere(u => u.ArmyId == firstCity.AvailableArmyId);

            int price = await GetArmyPrice(dto);
            int food = await GetArmyCoralNecessity(dto);

            if (price > firstCity.PearlCount || food > firstCity.CoralCount)
            {
                throw new NotEnoughMoneyException();
            }

            foreach (ArmyUnit au in armyUnits)
            {
                au.UnitCount += dto.Single(d => d.UnitType == au.UnitType).UnitCount;
                await _armyUnitRepository.Update(au);
            }

            firstCity.PearlCount -= price;
            await _cityRepository.Update(firstCity);
        }

        public async Task<List<UnitDto>> GetUnitInfo()
        {
            var units = await _unitRepository.GetAll();

            return _mapper.Map<List<UnitDto>>(units);
        }

        public async Task<int> GetArmyPrice(List<ArmyUnitDto> unitList)
        {
            var units = await _unitRepository.GetAll();

            var priceList = units.Select(u => new
            {
                UnitType = u.UnitType,
                Price = u.Price
            }).ToList();

            var result = priceList.Join(unitList,
                unit1 => unit1.UnitType,
                unit2 => unit2.UnitType,
                (unit1, unit2) => new
                {
                    unit1.Price,
                    Count = unit2.UnitCount
                }
              );

            var list = result.ToList();
            return result.Sum(u => u.Count * u.Price);
        }

        public async Task<int> GetArmyCoralNecessity(List<ArmyUnitDto> unitList)
        {
            var units = await _unitRepository.GetAll();

            var priceList = units.Select(u => new
            {
                u.UnitType,
                u.FoodNecessity
            }).ToList();

            var result = priceList.Join(unitList,
                unit1 => unit1.UnitType,
                unit2 => unit2.UnitType,
                (unit1, unit2) => new
                {
                    unit1.FoodNecessity,
                    unit2.UnitCount
                }
              );

            return result.Sum(u => u.UnitCount * u.FoodNecessity);
        }

        public async Task<ArmyDto> GetArmyById(Guid id)
        {
            var list = await _armyUnitRepository.GetWhere(u => u.ArmyId == id);

            var unitList = list.Select(x => new ArmyUnitDto
            {
                UnitType = x.UnitType,
                UnitCount = x.UnitCount
            }).ToList();

            ArmyDto newDto = new ArmyDto()
            {
                UnitList = unitList
            };

            return newDto;
        }

        public async Task<int> GetArmyAttackingPower(Guid armyId, Guid attackingCityId)
        {
            var units = await _unitRepository.GetAll();

            var armyUnits = await _armyUnitRepository.GetWhere(u => u.ArmyId == armyId);

            var result = units.Join(armyUnits,
                unit => unit.UnitType,
                armyUnit => armyUnit.UnitType,
                (unit, armyUnit) => new
                {
                    unit.Damage,
                    Count = armyUnit.UnitCount
                }
              );
            //TODO szebben átírni de szükség törvényt bont.
            var cities = await _cityRepository.GetWhere(c => c.Id==attackingCityId);
            var firstCity = cities.First();
            var upgrade = firstCity.Upgrades.UpgradeAttributes;
            int sum = 0;
            foreach (UpgradeAttributeJoin u in upgrade)
            {
                if (u.Status == Status.Done)
                {
                    var upgrades = await _upgradeAttributeRepository.GetWhere(c => c.UpgradeType == u.UpgradeType);
                    sum += upgrades.ElementAt(0).AttackPoints;
                }
            }

            return result.Sum(u => u.Count * u.Damage)+sum;
        }

        public async Task<int> GetArmyDefensePower(Guid armyId, Guid defendingCityId)
        {
            var units = await _unitRepository.GetAll();

            var army = await _armyUnitRepository.GetWhere(u => u.ArmyId == armyId);

            var result = units.Join(army,
                unit1 => unit1.UnitType,
                unit2 => unit2.UnitType,
                (unit1, unit2) => new
                {
                    unit1.Defense,
                    Count = unit2.UnitCount
                }
              );

            //TODO szebben átírni
            var cities = await _cityRepository.GetWhere(c => c.Id == defendingCityId);
            var firstCity = cities.First();
            var upgrade = firstCity.Upgrades.UpgradeAttributes;
            int sum = 0;
            foreach (UpgradeAttributeJoin u in upgrade)
            {
                if (u.Status == Status.Done)
                {
                    var upgrades = await _upgradeAttributeRepository.GetWhere(c => c.UpgradeType == u.UpgradeType);
                    sum += upgrades.ElementAt(0).DefensePoints;
                }
            }

            return result.Sum(u => u.Count * u.Defense);
        }

        public async Task<ArmyDto> GetAllArmy(Guid cityId)
        {
            var cities = await _cityRepository.GetWhere(c => c.Id == cityId);
            var firstCity = cities.First();

            var list = await _armyUnitRepository.GetWhere(u => u.ArmyId == firstCity.AvailableArmyId);

            var unitList = list.Select(x => new ArmyUnitDto
            {
                UnitType = x.UnitType,
                UnitCount = x.UnitCount
            }).ToList();

            var attacks = firstCity.Attacks.ToList();

            foreach(Attack a in attacks)
            {
                foreach(ArmyUnit armyUnit in a.Army.Units)
                {
                    unitList.Single(u => u.UnitType == armyUnit.UnitType).UnitCount += armyUnit.UnitCount;
                }
            }

            ArmyDto newDto = new ArmyDto()
            {
                UnitList = unitList
            };

            return newDto;
        }

    }
}