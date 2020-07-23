using System.Collections.Generic;
using Undersea.DAL.Enums;

namespace Undersea.BLL.DTOs
{
    public class UnitPurchaseDto
    {
        public Dictionary<UnitType, int> PurchasedUnits { get; set; }
    }
}
