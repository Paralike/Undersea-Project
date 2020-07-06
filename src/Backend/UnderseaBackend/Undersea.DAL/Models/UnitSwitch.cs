using System;
using System.Collections.Generic;

namespace Undersea.DAL.Models
{
    public partial class UnitSwitch
    {
        public int Id { get; set; }
        public int? UnitId { get; set; }
        public int? ArmyId { get; set; }

        public virtual Unit Unit { get; set; }
    }
}
