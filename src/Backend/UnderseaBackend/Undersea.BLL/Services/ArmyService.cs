using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.Interfaces;
using Undersea.DAL.Enums;
using Undersea.DAL.Repositories.Interfaces;

namespace Undersea.BLL.Services
{
    public class ArmyService : IArmyService
    {
        private readonly IArmyRepository _armyRepository;
        private readonly IArmyUnitJoinRepository _armyUnitJoinRepository;

        private readonly IMapper _mapper;

        public ArmyService(IArmyRepository armyRepository, IMapper mapper)
        {
            _armyRepository = armyRepository;
            _mapper = mapper;
        }

        public async Task<ActionResult<ArmyDto>> GetArmy(Guid id)
        {
            // nincs HTTP interceptor, null lesz 
            var army = await _armyRepository.GetById(id);

            Dictionary<UnitType, int> unitDictionary = new Dictionary<UnitType, int>();

            // TODO átírni szebbre
            var count = _armyUnitJoinRepository.GetTypeCountAsync(id);

            unitDictionary[UnitType.Csatacsiko] = await _armyUnitJoinRepository.CountWhere(u => u.UnitType == UnitType.Csatacsiko && u.ArmyId == army.Id);
            unitDictionary[UnitType.Lezercapa] = await _armyUnitJoinRepository.CountWhere(u => u.UnitType == UnitType.Lezercapa && u.ArmyId == army.Id);
            unitDictionary[UnitType.Rohamfoka] = await _armyUnitJoinRepository.CountWhere(u => u.UnitType == UnitType.Rohamfoka && u.ArmyId == army.Id);

            ArmyDto newDto = new ArmyDto()
            {
                UnitDictionary = unitDictionary,
                // TODO kaja szükséglet                
            };

            return newDto;
        }

        public async Task PurchaseUnits(Guid id, UnitPurchaseDto dto)
        {
            // TODO átírni szebbre
            var unitCsatacsiko = await _armyUnitJoinRepository.FirstOrDefault(au => au.ArmyId == id && au.UnitType == UnitType.Csatacsiko);
            var unitRohamfoka = await _armyUnitJoinRepository.FirstOrDefault(au => au.ArmyId == id && au.UnitType == UnitType.Rohamfoka);
            var unitLezercapa = await _armyUnitJoinRepository.FirstOrDefault(au => au.ArmyId == id && au.UnitType == UnitType.Lezercapa);

            // TODO validation logika

            unitCsatacsiko.UnitCount += dto.PurchasedUnits[UnitType.Csatacsiko];
            unitRohamfoka.UnitCount += dto.PurchasedUnits[UnitType.Rohamfoka];
            unitLezercapa.UnitCount += dto.PurchasedUnits[UnitType.Lezercapa];

            await _armyUnitJoinRepository.Update(unitCsatacsiko);
            await _armyUnitJoinRepository.Update(unitRohamfoka);
            await _armyUnitJoinRepository.Update(unitLezercapa);
        }

    }
}