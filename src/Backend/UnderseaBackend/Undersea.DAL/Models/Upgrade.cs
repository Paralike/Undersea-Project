using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Undersea.DAL.Enums;

namespace Undersea.DAL.Models
{
    public class Upgrade : IDbEntity
    {
        public Guid Id { get; set; }
        //public virtual int UpgradeType { get; set; }
        public virtual ICollection<UpgradeAttributeJoin> UpgradeAttributes { get; set; }
        public virtual City City { get; set; }
        public Guid CityId { get; set; }
        //public int CurrentTurn { get; set; } = 0;
        public Upgrade()
        {
            Id = Guid.NewGuid();
            UpgradeAttributes = new List<UpgradeAttributeJoin>()
            {
                new UpgradeAttributeJoin
                {
                    UpgradeType = UpgradeType.Alkimia,
                    CurrentTurn = 0,
                    Status = Status.UnBuilt,
                    UpgradeId = Id                
                },
                new UpgradeAttributeJoin
                {
                    UpgradeType = UpgradeType.Iszapkombajn,
                    CurrentTurn = 0,
                    Status = Status.UnBuilt,
                    UpgradeId = Id
                },
                new UpgradeAttributeJoin
                {
                    UpgradeType = UpgradeType.Iszaptraktor,
                    CurrentTurn = 0,
                    Status = Status.UnBuilt,
                    UpgradeId = Id
                },
                new UpgradeAttributeJoin
                {
                    UpgradeType = UpgradeType.Korallfal,
                    CurrentTurn = 0,
                    Status = Status.UnBuilt,
                    UpgradeId = Id
                },
                new UpgradeAttributeJoin
                {
                    UpgradeType = UpgradeType.Szonaragyu,
                    CurrentTurn = 0,
                    Status = Status.UnBuilt,
                    UpgradeId = Id
                },
                new UpgradeAttributeJoin
                {
                    UpgradeType = UpgradeType.VizalattiHarcmuveszetek,
                    CurrentTurn = 0,
                    Status = Status.UnBuilt,
                    UpgradeId = Id
                }
            };
        }
    }
}
