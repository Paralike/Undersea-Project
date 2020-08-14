using System;
using System.Collections.Generic;

namespace Undersea.DAL.Models
{
    public partial class UserUpgrade
    {
        public int Id { get; set; }
        public int? UserId { get; set; }
        public int? UpgradeId { get; set; }
        public string Status { get; set; }
        public int? TurnCount { get; set; }

        public virtual Profile User { get; set; }
    }
}
