using System;

namespace Undersea.DAL.Models
{
    public class UpgradeAttributeJoin
    {
        public Guid UpgradeAttributeId { get; set; }
        public UpgradeAttribute UpgradeAttribute { get; set; }
        public Guid UpgradeId { get; set; }
        public Upgrade Upgrade { get; set; }
    }
}
