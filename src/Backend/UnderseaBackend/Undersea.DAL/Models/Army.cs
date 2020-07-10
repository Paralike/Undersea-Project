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
        public virtual ICollection<ArmyUnitJoin> Units { get; set; }
        public virtual ICollection<Attack> Attacks { get; set; }

        public Army()
        {
            Id = Guid.NewGuid();

            Units = new List<ArmyUnitJoin>() {
                new ArmyUnitJoin
            {
                UnitType = UnitType.Csatacsiko,
                UnitCount = 10,
            },

                new ArmyUnitJoin
            {
                UnitType = UnitType.Lezercapa,
                UnitCount = 10,
            },
                new ArmyUnitJoin
            {
                UnitType = UnitType.Rohamfoka,
                UnitCount = 10,
            },
            };
        }

        public Army(int csatacsikoCount, int lezercapaCount, int rohamfokaCount)
        {
            Id = Guid.NewGuid();

            Units = new List<ArmyUnitJoin>() {
                new ArmyUnitJoin
            {
                UnitType = UnitType.Csatacsiko,
                UnitCount = csatacsikoCount,
            },

                new ArmyUnitJoin
            {
                UnitType = UnitType.Lezercapa,
                UnitCount = lezercapaCount,
            },
                new ArmyUnitJoin
            {
                UnitType = UnitType.Rohamfoka,
                UnitCount = rohamfokaCount,
            },
            };
        }
    }
}
