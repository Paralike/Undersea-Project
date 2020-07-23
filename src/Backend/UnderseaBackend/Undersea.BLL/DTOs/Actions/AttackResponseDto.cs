namespace Undersea.BLL.DTOs.Actions
{
    public class AttackResponseDto
    {
        public string CityName { get; set; }
        public ArmyDto UnitList { get; set; }
        public bool? WasSuccessful { get; set; }
    }
}
