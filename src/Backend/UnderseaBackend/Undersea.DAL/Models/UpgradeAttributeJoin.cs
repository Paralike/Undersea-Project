using System;

namespace Undersea.DAL.Models
{
    public class UpgradeAttributeJoin
    {
        public Guid UpgradeAttributeId { get; set; }
        public virtual UpgradeAttribute UpgradeAttribute { get; set; }
        public Guid UpgradeId { get; set; }
        public virtual Upgrade Upgrade { get; set; }
    }
}
