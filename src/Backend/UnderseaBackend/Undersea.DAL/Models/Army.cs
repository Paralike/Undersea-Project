using System;
using System.Collections.Generic;

namespace Undersea.DAL.Models
{
    public partial class Army
    {
        public Army()
        {
            Attack = new HashSet<Attack>();
        }

        public int Id { get; set; }
        public int? UserId { get; set; }
        public int? Units { get; set; }

        public virtual Profile User { get; set; }
        public virtual ICollection<Attack> Attack { get; set; }
    }
}
