using System;
using System.Collections.Generic;

namespace Undersea.DAL.Models
{
    public partial class BuildingAttributes
    {
        public BuildingAttributes()
        {
            BuildingAttributeSwitch = new HashSet<BuildingAttributeSwitch>();
        }

        public int Id { get; set; }
        public int? RezIdent { get; set; }
        public int? Coral { get; set; }
        public int? Host { get; set; }

        public virtual ICollection<BuildingAttributeSwitch> BuildingAttributeSwitch { get; set; }
    }
}
