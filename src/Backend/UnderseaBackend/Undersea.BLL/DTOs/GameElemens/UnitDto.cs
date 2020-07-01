using System;
using System.Collections.Generic;
using System.Text;
using Undersea.DAL.Enums;

namespace Undersea.BLL.DTOs
{
    public class UnitDto
    {
        public string Name { get; set; }
        public int Price { get; set; }
        public string FoodNeccesity { get; set; }
        public int Damage { get; set; }
        public int Defense { get; set; }
        public UnitType UnitType { get; set; }
    }
}
