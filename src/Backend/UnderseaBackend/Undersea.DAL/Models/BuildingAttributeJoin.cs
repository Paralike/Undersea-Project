using System;
using Undersea.DAL.Enums;

namespace Undersea.DAL.Models
{
    public class BuildingAttributeJoin : IDbEntity
    {
        /*public Guid BuildingAttributeId { get; set; }
        public virtual BuildingAttribute BuildingAttribute { get; set; }*/
        public Guid BuildingId { get; set; }
        public virtual Building Building { get; set; }
        public BuildingType BuildingType { get; set; }
        public Status Status { get; set; }
        public Guid Id { get; set; }

    }
}
