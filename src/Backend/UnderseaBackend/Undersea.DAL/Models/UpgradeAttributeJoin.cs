using Microsoft.AspNetCore.Identity;
using System;
using Undersea.DAL.Enums;
using System.Collections.Generic;

namespace Undersea.DAL.Models
{
    public class UpgradeAttributeJoin : IDbEntity
    {
        /*public Guid UpgradeAttributeId { get; set; }
        public virtual UpgradeAttribute UpgradeAttribute { get; set; }*/
        public Guid UpgradeId { get; set; }
        public virtual Upgrade Upgrade { get; set; }
        public UpgradeType UpgradeType { get; set; }
        public int CurrentTurn { get; set; }
        public Status Status { get; set; }
        public Guid Id { get; set; }

    }
}
