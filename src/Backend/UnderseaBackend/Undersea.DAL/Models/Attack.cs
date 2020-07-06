namespace Undersea.DAL.Models
{
    public class Attack
    {
        public string Id { get; set; }
        public City AttackerCity { get; set; }
        public City DefenderCity { get; set; }
        public string AttackerCityId { get; set; }
        public string DefenderCityId { get; set; }
        public Army Army { get; set; }
        public string ArmyId { get; set; }
    }
}
