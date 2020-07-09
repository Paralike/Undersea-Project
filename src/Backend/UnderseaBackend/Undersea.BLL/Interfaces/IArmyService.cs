using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.DTOs.GameElemens;
using Undersea.DAL.Enums;

namespace Undersea.BLL.Interfaces
{
    public interface IArmyService
    {
        public Task<ArmyDto> GetArmy(Guid id);
        public Task PurchaseUnits(Guid id, List<ArmyUnitDto> dto);

        public Task<List<UnitDto>> GetUnitInfo();
    }
}
