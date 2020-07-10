using System;
using System.Collections.Generic;

namespace Undersea.DAL.Models
{
    public class City : IDbEntity
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public virtual User User { get; set; }
        public Guid UserId { get; set; }
        public int PearlCount { get; set; } = 1000;
        public int PearlProduction { get; set; } = 200;
        public int CoralCount { get; set; } = 1000;
        public int CoralProduction { get; set; } = 200;
        public int Points { get; set; }
        public virtual Army AvailableArmy { get; set; } 
        public Guid AvailableArmyId { get; set; }
        //public virtual ICollection<Upgrade> Upgrades { get; set; }
        //public virtual ICollection<Building> Buildings { get; set; }
        public virtual ICollection<Attack> Attacks { get; set; }

        public City()
        {
            Id = Guid.NewGuid();
            AvailableArmy = new Army();
            AvailableArmyId = AvailableArmy.Id;
            AvailableArmy.CityId = Id;
        }
    }
}
