using System;

namespace Undersea.DAL.Models
{
    public class Attack
    {
        public Guid Id { get; set; }
        public City AttackerCity { get; set; }
        public City DefenderCity { get; set; }
        public Guid AttackerCityId { get; set; }
        public Guid DefenderCityId { get; set; }
        public Army Army { get; set; }
        public Guid ArmyId { get; set; }
    }
}
