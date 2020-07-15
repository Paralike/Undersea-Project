using System.Collections.Generic;

namespace Undersea.BLL.DTOs.Actions
{
    public class UpgradePurchseDto
    {
        public Dictionary<UpgradeDto, int> PurchasedBuildings { get; set; }
    }
}
