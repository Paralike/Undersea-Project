using System;
using System.Collections.Generic;
using System.Text;

namespace Undersea.BLL.DTOs
{
    class UnitDto
    {
        public string Name { get; set; }
        public int Price { get; set; }
        public string FoodNeccesity { get; set; }
        public int Damage { get; set; }
        public int Defense { get; set; }
        public UnitType UnitType { get; set; }
    }
    enum UnitType
    {
        Rohamfoka,
        Csatacsiko,
        Lezercsapa
    }
}
