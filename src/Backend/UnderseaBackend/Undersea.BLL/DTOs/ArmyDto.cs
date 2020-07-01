using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace Undersea.BLL.DTOs
{
    class ArmyDto
    {
        public List<UnitDto> UnitList { get; set; }

        private int armyFoodNeccesity;

        public int ArmyFoodNeccesity
        {
            get {
                armyFoodNeccesity = 0;
                foreach(var unit in UnitList)
                    armyFoodNeccesity += unit.Price;
                return armyFoodNeccesity; 
            }
        }

    }
}
