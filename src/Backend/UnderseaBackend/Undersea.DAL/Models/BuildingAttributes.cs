using System.Collections.Generic;

namespace Undersea.DAL.Models
{
    public class BuildingAttributes
    {
        public string Id { get; set; }
        public int Resident { get; set; }
        public int Coral { get; set; }
        public int HostCapacity { get; set; }
        public virtual ICollection<BuildingAttributeJoin> BuildingAttribute { get; set; }
    }
}
