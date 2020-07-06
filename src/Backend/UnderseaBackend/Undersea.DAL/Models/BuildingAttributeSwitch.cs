using System;
using System.Collections.Generic;

namespace Undersea.DAL.Models
{
    public partial class BuildingAttributeSwitch
    {
        public int Id { get; set; }
        public int? BuildingId { get; set; }
        public int? Attribute { get; set; }

        public virtual BuildingAttributes AttributeNavigation { get; set; }
    }
}
