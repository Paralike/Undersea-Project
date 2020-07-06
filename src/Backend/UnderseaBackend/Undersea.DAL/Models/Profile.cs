using System;
using System.Collections.Generic;

namespace Undersea.DAL.Models
{
    public partial class Profile
    {
        public Profile()
        {
            Army = new HashSet<Army>();
            UserUpgrade = new HashSet<UserUpgrade>();
        }

        public int UserId { get; set; }
        public int? Pearlcount { get; set; }
        public int? Pearlprod { get; set; }
        public int? Coralcount { get; set; }
        public int? Coralprod { get; set; }
        public int? Point { get; set; }

        public virtual ICollection<Army> Army { get; set; }
        public virtual ICollection<UserUpgrade> UserUpgrade { get; set; }
    }
}
