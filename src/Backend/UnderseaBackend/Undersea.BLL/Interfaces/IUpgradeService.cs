using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;

namespace Undersea.BLL.Interfaces
{
    public interface IUpgradeService
    {
        public Task<ActionResult<ICollection<UpgradeDto>>> GetUpgrade();
        public Task PurchaseUpgrade(UpgradeDto upgrade);
    }
}
