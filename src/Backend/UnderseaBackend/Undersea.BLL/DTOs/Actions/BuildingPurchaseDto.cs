using System.Collections.Generic;

namespace Undersea.BLL.DTOs.Actions
{
    class BuildingPurchaseDto
    {
        public Dictionary<BuildingDto, int> PurchasedBuildings { get; set; }
    }
}
