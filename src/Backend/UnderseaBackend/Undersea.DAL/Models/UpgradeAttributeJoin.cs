using System;
using Undersea.DAL.Enums;

namespace Undersea.DAL.Models
{
    public class UpgradeAttributeJoin
    {
        public Guid UpgradeAttributeId { get; set; }
        public virtual UpgradeAttribute UpgradeAttribute { get; set; }
        public Guid UpgradeId { get; set; }
        public virtual Upgrade Upgrade { get; set; }
        public UpgradeType upgradeType { get; set; }
        public int CurrentTurn { get; set; }
    }
}
