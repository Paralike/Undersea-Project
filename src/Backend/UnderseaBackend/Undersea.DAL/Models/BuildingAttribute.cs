using System;
using System.Collections.Generic;
using Undersea.DAL.Enums;

namespace Undersea.DAL.Models
{
    public class BuildingAttribute : IDbEntity
    {
        public BuildingType BuildingType { get; set; }
        public Guid Id { get; set; }
        public int Resident { get; set; }
        public int Coral { get; set; }
        public int HostCapacity { get; set; }
        public string Name { get; set; }
        //public virtual ICollection<BuildingAttributeJoin> BuildingAttributes { get; set; }
    }
}
