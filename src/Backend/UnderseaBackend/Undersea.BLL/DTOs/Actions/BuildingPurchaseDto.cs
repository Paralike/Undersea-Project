using System.Collections.Generic;
using Undersea.BLL.DTOs.GameElemens;

namespace Undersea.BLL.DTOs.Actions
{
    public class BuildingPurchaseDto
    {
        //public Dictionary<BuildingDto, int> PurchasedBuildings { get; set; }
        public List<BuildingUnitDto> BuildingUnits;
    }
}
