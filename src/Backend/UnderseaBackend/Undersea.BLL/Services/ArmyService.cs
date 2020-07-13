using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.DTOs.GameElemens;
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
        private readonly IMapper _mapper;

        public ArmyService()
        {

        }

        public ArmyService(IArmyRepository armyRepository, IArmyUnitJoinRepository armyUnitRepository,
            IMapper mapper, ICityRepository cityRepository, IUnitRepository unitRepository)
        {
            _armyRepository = armyRepository;
            _armyUnitRepository = armyUnitRepository;
            _cityRepository = cityRepository;
            _unitRepository = unitRepository;
            _mapper = mapper;
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

        public async Task PurchaseUnits(Guid id, List<ArmyUnitDto> dto)
        {
            var cities = await _cityRepository.GetWhere(c => c.UserId == id);
            var firstCity = cities.First();

            var list = await _armyUnitRepository.GetWhere(u => u.ArmyId == firstCity.AvailableArmyId);

            int price = await GetArmyPrice(dto);
            if (price > firstCity.PearlCount)
            {
                throw new Exception("Not enough money");
            }

            foreach (ArmyUnit au in list)
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
                    Price = unit1.Price,
                    Count = unit2.UnitCount
                }
              );

            return result.Sum(u => u.Count * u.Price);
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

        public async Task<int> GetArmyAttackingPower(Guid armyId)
        {
            var units = await _unitRepository.GetAll();

            var army = await _armyUnitRepository.GetWhere(u => u.ArmyId == armyId);

            var result = units.Join(army,
                unit1 => unit1.UnitType,
                unit2 => unit2.UnitType,
                (unit1, unit2) => new
                {
                    unit1.Damage,
                    Count = unit2.UnitCount
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
    }
}