using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.DTOs.GameElemens;
using Undersea.DAL.Enums;

namespace Undersea.BLL.Interfaces
{
    public interface IUpgradeService
    {
        public Task<ICollection<UpgradeDto>> GetUpgrade(Guid id);
        public Task PurchaseUpgrade(Guid id, UpgradeType upgradeType);
        public Task<ICollection<UpgradeAttributeDto>> GetUpgrades();

    }
}
