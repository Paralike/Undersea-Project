using System;
using System.Collections.Generic;

namespace Undersea.DAL.Models
{
    public partial class UpgradeAttributes
    {
        public UpgradeAttributes()
        {
            UpgradeAttributeSwitch = new HashSet<UpgradeAttributeSwitch>();
        }

        public int Id { get; set; }
        public int? CoralProduction { get; set; }
        public int? DefensePoints { get; set; }
        public int? AttackPoints { get; set; }
        public int? TaxIncrese { get; set; }

        public virtual ICollection<UpgradeAttributeSwitch> UpgradeAttributeSwitch { get; set; }
    }
}
