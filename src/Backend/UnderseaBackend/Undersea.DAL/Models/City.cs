using System.Collections.Generic;

namespace Undersea.DAL.Models
{
    public class City
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public User User { get; set; }
        public string UserId { get; set; }
        public int PearlCount { get; set; }
        public int PearlProduction { get; set; }
        public int CoralCount { get; set; }
        public int CoralProduction { get; set; }
        public int Points { get; set; }
        public virtual ICollection<Army> Armies { get; set; }
        public virtual ICollection<Upgrade> Upgrades { get; set; }
        public virtual ICollection<Building> Buildings { get; set; }
        public virtual ICollection<Attack> Attacks { get; set; }


    }
}
