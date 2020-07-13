using System;
using System.Collections.Generic;
using Undersea.DAL.Enums;

namespace Undersea.DAL.Models
{
    public class Army : IDbEntity
    {
        public Guid Id { get; set; }
        public virtual City City { get; set; }
        public Guid CityId { get; set; }
        public virtual ICollection<ArmyUnit> Units { get; set; }
        public virtual ICollection<Attack> Attacks { get; set; }

        public Army()
        {
            Id = Guid.NewGuid();

            Units = new List<ArmyUnit>() {
                new ArmyUnit
            {
                UnitType = UnitType.Csatacsiko,
                UnitCount = 10,
            },

                new ArmyUnit
            {
                UnitType = UnitType.Lezercapa,
                UnitCount = 10,
            },
                new ArmyUnit
            {
                UnitType = UnitType.Rohamfoka,
                UnitCount = 10,
            },
            };
        }

        public Army(int csatacsikoCount, int lezercapaCount, int rohamfokaCount)
        {
            Id = Guid.NewGuid();

            Units = new List<ArmyUnit>() {
                new ArmyUnit
            {
                UnitType = UnitType.Csatacsiko,
                UnitCount = csatacsikoCount,
            },

                new ArmyUnit
            {
                UnitType = UnitType.Lezercapa,
                UnitCount = lezercapaCount,
            },
                new ArmyUnit
            {
                UnitType = UnitType.Rohamfoka,
                UnitCount = rohamfokaCount,
            },
            };
        }
    }
}
