using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using Undersea.DAL.Enums;

namespace Undersea.BLL.DTOs
{
    public class ArmyDto
    {
        public Dictionary<UnitType,int> UnitList { get; set; }

        public int ArmyFoodNecessity { get; set; }
    }
}
