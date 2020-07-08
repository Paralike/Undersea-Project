using System;
using System.Collections.Generic;
using System.Text;

namespace Undersea.BLL.DTOs.Actions
{
    class BuildingPurchaseDto
    {
        public Dictionary<BuildingDto, int> PurchasedBuildings { get; set; }
    }
}
