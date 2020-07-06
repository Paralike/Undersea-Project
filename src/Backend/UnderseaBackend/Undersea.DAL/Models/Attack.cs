using System;
using System.Collections.Generic;

namespace Undersea.DAL.Models
{
    public partial class Attack
    {
        public int Id { get; set; }
        public int? TamadoUserId { get; set; }
        public int? Army { get; set; }
        public int? VedoUserId { get; set; }

        public virtual Army ArmyNavigation { get; set; }
    }
}
