using System;
using System.Collections.Generic;
using System.Text;

namespace Undersea.BLL.DTOs.Actions
{
    class UpgradePurchseDto
    {
        public Dictionary<UpgradeDto, int> PurchasedBuildings { get; set; }
    }
}
