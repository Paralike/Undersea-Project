using System;
using System.Collections.Generic;

namespace Undersea.DAL.Models
{
    public partial class Upgrade
    {
        public Upgrade()
        {
            UpgradeAttributeSwitch = new HashSet<UpgradeAttributeSwitch>();
        }

        public int? UpgradeType { get; set; }
        public int Id { get; set; }

        public virtual ICollection<UpgradeAttributeSwitch> UpgradeAttributeSwitch { get; set; }
    }
}
