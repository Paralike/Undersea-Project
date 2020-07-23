using Undersea.DAL.Enums;

namespace Undersea.BLL.DTOs
{

    public class BuildingDto
    {
        public Status Status { get; set; }
        public int Price { get; set; }
        public int TurnCount { get; set; }
        public BuildingType BuildingType { get; set; }
        public int Quantity { get; set; }
        public int CurrentTurn { get; set; }
    }
}
