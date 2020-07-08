using System;
using Undersea.DAL.Enums;

namespace Undersea.DAL.Models
{
    public class ArmyUnitJoin : IDbEntity
    {
        public Army Army { get; set; }
        public Guid ArmyId { get; set; }
        public UnitType UnitType { get; set; }
        public int UnitCount { get; set; }
        public Guid Id { get; set; }
    }
}
