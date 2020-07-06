using System.Collections.Generic;

namespace Undersea.BLL.DTOs
{
    public class UnitPurchaseDto
    {
        public Dictionary<UnitDto, int> PurchasedUnits { get; set; }
    }
}
