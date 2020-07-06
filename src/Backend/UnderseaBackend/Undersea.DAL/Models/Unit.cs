using System;
using System.Collections.Generic;

namespace Undersea.DAL.Models
{
    public partial class Unit
    {
        public Unit()
        {
            UnitSwitch = new HashSet<UnitSwitch>();
        }

        public int Id { get; set; }
        public int? Price { get; set; }
        public int? FoodNecessity { get; set; }
        public int? Damage { get; set; }
        public int? Def { get; set; }
        public string UnitType { get; set; }

        public virtual ICollection<UnitSwitch> UnitSwitch { get; set; }
    }
}
