using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.DTOs.GameElemens;
using Undersea.BLL.Interfaces;
using Undersea.DAL.Enums;
using Undersea.DAL.Repositories.Interfaces;

namespace Undersea.BLL.Services
{
    public class ArmyService : IArmyService
    {
        private readonly IArmyRepository _armyRepository;
        private readonly IArmyUnitJoinRepository _armyUnitRepository;

        private readonly IMapper _mapper;

        public ArmyService(IArmyRepository armyRepository, IArmyUnitJoinRepository armyUnitRepository, IMapper mapper)
        {
            _armyRepository = armyRepository;
            _armyUnitRepository = armyUnitRepository;
            _mapper = mapper;
        }

        // TODO Action result kivenni
        public async Task<ActionResult<ArmyDto>> GetArmy(Guid id)
        {
            // nincs HTTP interceptor, null lesz 
            var army = await _armyRepository.GetById(id);

            var list = await _armyUnitRepository.GetWhere(u => u.ArmyId == army.Id);

            var unitList = list.Select(x => new ArmyUnitDto
            {
                UnitType = x.UnitType,
                UnitCount = x.UnitCount
            }).ToList();

            ArmyDto newDto = new ArmyDto()
            {
                UnitList = unitList,
                //ArmyFoodNecessity =  list.Sum(x => x.UnitType),
                //ArmySumCost = 0              
                              
            };

            return newDto;
        }

        public async Task PurchaseUnits(Guid id, UnitPurchaseDto dto)
        {
            // TODO átírni szebbre
            var unitCsatacsiko = await _armyUnitRepository.FirstOrDefault(au => au.ArmyId == id && au.UnitType == UnitType.Csatacsiko);
            var unitRohamfoka = await _armyUnitRepository.FirstOrDefault(au => au.ArmyId == id && au.UnitType == UnitType.Rohamfoka);
            var unitLezercapa = await _armyUnitRepository.FirstOrDefault(au => au.ArmyId == id && au.UnitType == UnitType.Lezercapa);

            // TODO validation logika

            unitCsatacsiko.UnitCount += dto.PurchasedUnits[UnitType.Csatacsiko];
            unitRohamfoka.UnitCount += dto.PurchasedUnits[UnitType.Rohamfoka];
            unitLezercapa.UnitCount += dto.PurchasedUnits[UnitType.Lezercapa];

            await _armyUnitRepository.Update(unitCsatacsiko);
            await _armyUnitRepository.Update(unitRohamfoka);
            await _armyUnitRepository.Update(unitLezercapa);
        }

    }
}