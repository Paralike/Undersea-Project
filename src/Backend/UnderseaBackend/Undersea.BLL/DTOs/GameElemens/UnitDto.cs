using Undersea.DAL.Enums;

namespace Undersea.BLL.DTOs
{
    public class UnitDto
    {
        public int Price { get; set; }
        public int FoodNecessity { get; set; }
        public int Damage { get; set; }
        public int Defense { get; set; }
        public UnitType UnitType { get; set; }
    }
}
