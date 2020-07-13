using System.Collections.Generic;
using Undersea.BLL.DTOs.GameElemens;
using Undersea.DAL.Models;

namespace Undersea.BLL.DTOs
{
    public class ArmyDto
    {
        public List<ArmyUnitDto> UnitList { get; set; }

        public int ArmyFoodNecessity { get; set; }
        public int ArmyPearlNecessity { get; set; }

        public static ArmyDto FromModel(Army army)
        {
            ArmyDto dto = new ArmyDto();

            return null;
        }
    }
}
