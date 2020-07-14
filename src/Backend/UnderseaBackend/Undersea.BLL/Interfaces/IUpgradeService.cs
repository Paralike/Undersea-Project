using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.DTOs.GameElemens;

namespace Undersea.BLL.Interfaces
{
    public interface IUpgradeService
    {
        public Task<ActionResult<ICollection<UpgradeDto>>> GetUpgrade(Guid id);
        public Task PurchaseUpgrade(Guid id, UpgradeDto upgrade);
        public Task<ICollection<UpgradeAttributeDto>> GetUpgrades();

    }
}
