using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
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
        private readonly IUserService _userService;
        private readonly IMapper _mapper;

        public ArmyService()
        {

        }

        public ArmyService(IArmyRepository armyRepository, IArmyUnitJoinRepository armyUnitRepository,
            IMapper mapper, ICityRepository cityRepository, IUnitRepository unitRepository, IUserService userService)
        {
            _armyRepository = armyRepository;
            _armyUnitRepository = armyUnitRepository;
            _cityRepository = cityRepository;
            _unitRepository = unitRepository;
            _mapper = mapper;
            _userService = userService;
        }

        public async Task<ArmyDto> GetArmy(Guid id)
        {
            Guid userId = _userService.GetCurrentUserId();
            var firstCity = await _cityRepository.GetCityByUserId(userId);

            var armyUnits = (await _armyUnitRepository.GetWhere(u => u.ArmyId == firstCity.AvailableArmyId))
                            .Select(armyUnit =>
                                new ArmyUnitDto
                                {
                                    UnitType = armyUnit.UnitType,
                                    UnitCount = armyUnit.UnitCount
                                }).ToList();

            return new ArmyDto()
            {
                UnitList = armyUnits,
                ArmyFoodNecessity = await _armyRepository.GetFoodNecessity(firstCity.AvailableArmyId),
                ArmyPearlNecessity = await _armyRepository.GetPearlNecessity(firstCity.AvailableArmyId)
            };
        }


        public async Task FillArmy(Guid userId)
        {
            // TODO userId átadása nélkül megy-e?

            var firstCity = await _cityRepository.GetCityByUserId(userId);
            var army = firstCity.AvailableArmy;

            foreach (UnitType type in Enum.GetValues(typeof(UnitType)))
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
            var firstCity = await _cityRepository.GetCityByUserId(id);
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

            var result = units.Join(unitList,
                unit1 => unit1.UnitType,
                unit2 => unit2.UnitType,
                (unit1, unit2) => new
                {
                    unit1.Price,
                    Count = unit2.UnitCount
                }
              );

            return result.Sum(u => u.Count * u.Price);
        }

        public async Task<int> GetArmyCoralNecessity(List<ArmyUnitDto> unitList)
        {
            var units = await _unitRepository.GetAll();

            var result = units.Join(unitList,
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
            var unitList = (await _armyUnitRepository.GetWhere(u => u.ArmyId == id))
				.Select(x => new ArmyUnitDto
				{
					UnitType = x.UnitType,
					UnitCount = x.UnitCount
				}).ToList();

            return  new ArmyDto()
            {
                UnitList = unitList
            };
        }

        public async Task<int> GetArmyAttackingPower(Guid armyId)
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

            return result.Sum(u => u.Count * u.Damage);
        }

        public async Task<int> GetArmyDefensePower(Guid armyId)
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

            return result.Sum(u => u.Count * u.Defense);
        }

        public async Task<ArmyDto> GetAllArmy(Guid cityId)
        {
            var cities = await _cityRepository.GetWhere(c => c.Id == cityId);
            var firstCity = cities.First();

            var armyUnitList = await _armyUnitRepository.
                GetWhere(u => u.ArmyId == firstCity.AvailableArmyId);

            var armyUnitDtoList = armyUnitList.Select(au => new ArmyUnitDto
            {
                UnitType = au.UnitType,
                UnitCount = au.UnitCount
            }).ToList();

            foreach (Attack a in firstCity.Attacks.ToList())
            {
                foreach (ArmyUnit armyUnit in a.Army.Units)
                {
                    armyUnitDtoList.Single(u => u.UnitType == armyUnit.UnitType).UnitCount += armyUnit.UnitCount;
                }
            }

            return new ArmyDto()
            {
                UnitList = armyUnitDtoList
            };
        }

    }
}