using System.Collections.Generic;

namespace Undersea.BLL.DTOs.Actions
{
    class UpgradePurchseDto
    {
        public Dictionary<UpgradeDto, int> PurchasedBuildings { get; set; }
    }
}
