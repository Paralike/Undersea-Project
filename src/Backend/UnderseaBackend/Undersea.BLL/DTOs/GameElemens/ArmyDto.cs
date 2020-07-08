using System.Collections.Generic;
using Undersea.DAL.Enums;
using Undersea.DAL.Models;

namespace Undersea.BLL.DTOs
{
    public class ArmyDto
    {
        public Dictionary<UnitType, int> UnitDictionary { get; set; }
            = new Dictionary<UnitType, int>();

        public int ArmyFoodNecessity { get; set; }
        public int ArmySumCost { get; set; }

        public static ArmyDto FromModel(Army army)
        {
            ArmyDto dto = new ArmyDto();

            //foreach (Unit u in dto.UnitD)
            //{
            //    switch (u.UnitType)
            //    {
            //        case UnitType.Rohamfoka:
            //            dto.UnitDictionary[UnitType.Rohamfoka]++;
            //            break;
            //        case UnitType.Csatacsiko:
            //            dto.UnitDictionary[UnitType.Csatacsiko]++;
            //            break;
            //        case UnitType.Lezercapa:
            //            dto.UnitDictionary[UnitType.Lezercapa]++;
            //            break;
            //    }

            //    dto.ArmyFoodNecessity += u.FoodNecessity;
            //    dto.ArmyFoodNecessity += u.PearlNecessity;
            //}

            return null;
        }
    }
}
