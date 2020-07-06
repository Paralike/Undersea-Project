using System;

namespace Undersea.DAL.Models
{
    public class BuildingAttributeJoin
    {
        public Guid BuildingAttributeId { get; set; }
        public BuildingAttribute BuildingAttribute { get; set; }
        public Guid BuildingId { get; set; }
        public Building Building { get; set; }

    }
}
