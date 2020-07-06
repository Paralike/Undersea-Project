using System.Collections.Generic;
using Undersea.DAL.Enums;

namespace Undersea.DAL.Models
{
    public class Building
    {
        public string Id { get; set; }
        public BuildingType BuildingType { get; set; }
        public virtual ICollection<BuildingAttributeJoin> BuildingAttributes { get; set; }
        public City City { get; set; }
        public string CityId { get; set; }
        public int CurrentTurn { get; set; }
    }
}
