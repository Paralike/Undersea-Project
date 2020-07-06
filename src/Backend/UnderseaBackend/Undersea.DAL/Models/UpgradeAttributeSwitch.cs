using System;
using System.Collections.Generic;

namespace Undersea.DAL.Models
{
    public partial class UpgradeAttributeSwitch
    {
        public int Id { get; set; }
        public int? UpgradeId { get; set; }
        public int? Attribute { get; set; }

        public virtual UpgradeAttributes AttributeNavigation { get; set; }
        public virtual Upgrade Upgrade { get; set; }
    }
}
