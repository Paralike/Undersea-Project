using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;

namespace Undersea.BLL.Interfaces
{
    public interface IArmyService
    {
        public Task<ActionResult<ArmyDto>> GetArmy(Guid id);
        public Task PurchaseUnits(Guid id, UnitPurchaseDto dto);
    }
}
