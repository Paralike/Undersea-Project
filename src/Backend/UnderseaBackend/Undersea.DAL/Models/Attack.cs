using System;

namespace Undersea.DAL.Models
{
    public class Attack : IDbEntity
    {
        public Guid Id { get; set; }
        public virtual City AttackerCity { get; set; }
        public virtual City DefenderCity { get; set; }
        public Guid AttackerCityId { get; set; }
        public Guid DefenderCityId { get; set; }
        public virtual Army Army { get; set; }
        public Guid ArmyId { get; set; }
    }
}
