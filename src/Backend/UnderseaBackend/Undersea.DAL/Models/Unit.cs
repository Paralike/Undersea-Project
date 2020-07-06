using Undersea.DAL.Enums;

namespace Undersea.DAL.Models
{
    public class Unit
    {
        public UnitType UnitType { get; set; }
        public int Price { get; set; }
        public int FoodNecessity { get; set; }
        public int Damage { get; set; }
        public int Defense { get; set; }
    }
}
