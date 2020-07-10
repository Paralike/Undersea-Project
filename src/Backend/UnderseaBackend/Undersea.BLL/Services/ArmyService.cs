using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
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

        // TODO Action result kivenni
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

            // TODO átírni 
            var unitRohamfoka = await _armyUnitRepository.FirstOrDefault(au => au.ArmyId == firstCity.AvailableArmyId && au.UnitType == UnitType.Rohamfoka);
            var unitCsatacsiko = await _armyUnitRepository.FirstOrDefault(au => au.ArmyId == firstCity.AvailableArmyId && au.UnitType == UnitType.Csatacsiko);
            var unitLezercapa = await _armyUnitRepository.FirstOrDefault(au => au.ArmyId == firstCity.AvailableArmyId && au.UnitType == UnitType.Lezercapa);

            // TODO validation logika

            unitRohamfoka.UnitCount += dto.ElementAt(0).UnitCount;
            unitCsatacsiko.UnitCount += dto.ElementAt(1).UnitCount;
            unitLezercapa.UnitCount += dto.ElementAt(2).UnitCount;

            await _armyUnitRepository.Update(unitCsatacsiko);
            await _armyUnitRepository.Update(unitRohamfoka);
            await _armyUnitRepository.Update(unitLezercapa);
        }

        public async Task<List<UnitDto>> GetUnitInfo()
        {
            var units = await _unitRepository.GetAll();

            return _mapper.Map<List<UnitDto>>(units);
        }

        public async Task<int> GetArmyPrice(List<ArmyUnitDto> dto)
        {
            var units = await _unitRepository.GetAll();

            var price = units.Select(u => new
            {
                UnitType = u.UnitType,
                Price = u.Price
            }).ToList();

            //price.Join(dto,
            //   );

            return 0;
        }

    }
}