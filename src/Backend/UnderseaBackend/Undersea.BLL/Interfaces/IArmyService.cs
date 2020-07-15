using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.DTOs.GameElemens;

namespace Undersea.BLL.Interfaces
{
    public interface IArmyService
    {
        public Task<ArmyDto> GetArmy(Guid id);
        public Task PurchaseUnits(Guid id, List<ArmyUnitDto> dto);
        public Task<List<UnitDto>> GetUnitInfo();
        public Task<ArmyDto> GetArmyById(Guid id);
        public Task<int> GetArmyDefensePower(Guid armyId,Guid defenderCityId);
        public Task<int> GetArmyAttackingPower(Guid armyId, Guid attackerCityId);
        public Task FillArmy(Guid userId);
        public Task<ArmyDto> GetAllArmy(Guid cityId);

    }
}
