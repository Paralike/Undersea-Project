using System;
using System.Collections.Generic;
using Undersea.DAL.Enums;

namespace Undersea.DAL.Models
{
    public class Building : IDbEntity
    {
        public Guid Id { get; set; }
        //public BuildingType BuildingType { get; set; }
        public virtual ICollection<BuildingAttributeJoin> BuildingAttributes { get; set; }
        public virtual City City { get; set; }
        public Guid CityId { get; set; }
        //public int CurrentTurn { get; set; }

        public Building()
        {
            Id = Guid.NewGuid();
            BuildingAttributes = new List<BuildingAttributeJoin>()
            {
                new BuildingAttributeJoin
                {
                    BuildingType = BuildingType.Aramlasiranyito,
                    Status = Status.UnBuilt,
                    BuildingId = Id
                },
                new BuildingAttributeJoin
                {
                    BuildingType = BuildingType.Zatonyvar,
                    Status = Status.UnBuilt,
                    BuildingId = Id
                }
            };
        }
    }
}
