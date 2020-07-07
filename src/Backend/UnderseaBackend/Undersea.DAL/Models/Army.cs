using System;
using System.Collections.Generic;

namespace Undersea.DAL.Models
{
    public class Army : IDbEntity
    {
        public Guid Id { get; set; }
        public City City { get; set; }
        public Guid CityId { get; set; }
        public virtual ICollection<Unit> Units { get; set; }
        public virtual ICollection<Attack> Attacks { get; set; }
    }
}
