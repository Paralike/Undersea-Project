using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Undersea.DAL.Enums;

namespace Undersea.DAL.Models
{
    public class Upgrade : IDbEntity
    {
        public Guid Id { get; set; }
        public virtual int UpgradeType { get; set; }
        //public virtual ICollection<UpgradeAttributeJoin> UpgradeAttributes { get; set; }
       // public virtual City City { get; set; }
        //public Guid CityId { get; set; }
        public int CurrentTurn { get; set; } = 0;
        public Upgrade()
        {
            UpgradeType = 0;
            CurrentTurn = 0;
        }
        public async Task setType(int UT )
        {
            UpgradeType = UT;
            CurrentTurn = 15;
        }
    }
}
