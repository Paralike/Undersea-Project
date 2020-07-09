using System;

namespace Undersea.DAL.Models
{
    public class BuildingAttributeJoin
    {
        public Guid BuildingAttributeId { get; set; }
        public virtual BuildingAttribute BuildingAttribute { get; set; }
        public Guid BuildingId { get; set; }
        public virtual Building Building { get; set; }

    }
}
