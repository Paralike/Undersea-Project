using System;
using System.Collections.Generic;
using System.Text;

namespace Undersea.BLL.DTOs
{
    public class UnitPurchaseDto
    {
        public Dictionary<UnitDto, int> PurchasedUnits { get; set; }
    }
}
