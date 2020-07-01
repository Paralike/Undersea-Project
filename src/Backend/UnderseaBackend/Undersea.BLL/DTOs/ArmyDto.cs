using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace Undersea.BLL.DTOs
{
    class ArmyDto
    {
        public List<UnitDto> UnitList { get; set; }

        public int ArmyFoodNeccesity { get; set; }

        public static ArmyDto FromModel()
        {
            return new ArmyDto()
            {
                //  armyFoodNeccesity = 
            };
        }
    }
}
