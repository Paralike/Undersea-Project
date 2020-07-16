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
        public virtual Attack Attack { get; set; }


        public Army()
        {
            Id = Guid.NewGuid();

            Units = new List<ArmyUnit>();
        }

        public Army(int csatacsikoCount, int lezercapaCount, int rohamfokaCount, int hadvezer)
        {
            Id = Guid.NewGuid();

            Units = new List<ArmyUnit>() {
                new ArmyUnit
            {
                ArmyId = Id,
                UnitType = UnitType.Csatacsiko,
                UnitCount = csatacsikoCount,
            },

                new ArmyUnit
            {
                    ArmyId = Id,
                UnitType = UnitType.Lezercapa,
                UnitCount = lezercapaCount,
            },
                new ArmyUnit
            {
                  ArmyId = Id,
                UnitType = UnitType.Rohamfoka,
                UnitCount = rohamfokaCount,
            },

                                new ArmyUnit
            {
                  ArmyId = Id,
                UnitType = UnitType.Hadvezer,
                UnitCount = hadvezer,
            },
            };
        }
    }
}
