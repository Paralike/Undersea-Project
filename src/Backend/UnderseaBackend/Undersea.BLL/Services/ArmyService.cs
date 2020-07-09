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

namespace Undersea.BLL.Services
{
    public class ArmyService : IArmyService
    {
        private readonly IArmyRepository _armyRepository;
        private readonly IArmyUnitJoinRepository _armyUnitRepository;
        private readonly ICityRepository _cityRepository;

        public ArmyService()
        {
            
        }

        private readonly UserManager<User> _userManager;
        private readonly IMapper _mapper;

        public ArmyService(IArmyRepository armyRepository, IArmyUnitJoinRepository armyUnitRepository, UserManager<User> userManager, IMapper mapper, ICityRepository cityRepository)
        {
            _armyRepository = armyRepository;
            _armyUnitRepository = armyUnitRepository;
            _userManager = userManager;
            _mapper = mapper;
            _cityRepository = cityRepository;
        }

        // TODO Action result kivenni
        public async Task<ActionResult<ArmyDto>> GetArmy(Guid id)
        {
            var user = await _cityRepository.GetWhere(c => c.UserId == id);

            var army = user.FirstOrDefault().AvailableArmy;

            var list = await _armyUnitRepository.GetWhere(u => u.ArmyId == army.Id);

            var unitList = list.Select(x => new ArmyUnitDto
            {
                UnitType = x.UnitType,
                UnitCount = x.UnitCount
            }).ToList();

            ArmyDto newDto = new ArmyDto()
            {
                UnitList = unitList,
                ArmyFoodNecessity = await _armyRepository.GetFoodNecessity(army.Id)
                //ArmySumCost = 0                              
            };

            return newDto;
        }

        public async Task PurchaseUnits(Guid id, List<ArmyUnitDto> dto)
        {
            var cities = await _cityRepository.GetWhere(c => c.UserId == id);
            var firstCity = cities.First();
            var army = firstCity.AvailableArmy;

            // TODO átírni szebbre
            var unitCsatacsiko = await _armyUnitRepository.FirstOrDefault(au => au.ArmyId == firstCity.AvailableArmyId && au.UnitType == UnitType.Csatacsiko);
            var unitRohamfoka = await _armyUnitRepository.FirstOrDefault(au => au.ArmyId == firstCity.AvailableArmyId && au.UnitType == UnitType.Rohamfoka);
            var unitLezercapa = await _armyUnitRepository.FirstOrDefault(au => au.ArmyId == firstCity.AvailableArmyId && au.UnitType == UnitType.Lezercapa);

            // TODO validation logika

            unitCsatacsiko.UnitCount += dto.ElementAt(0).UnitCount;
            unitRohamfoka.UnitCount += dto.ElementAt(1).UnitCount;
            unitLezercapa.UnitCount += dto.ElementAt(2).UnitCount;

            await _armyUnitRepository.Update(unitCsatacsiko);
            await _armyUnitRepository.Update(unitRohamfoka);
            await _armyUnitRepository.Update(unitLezercapa);
        }

    }
}