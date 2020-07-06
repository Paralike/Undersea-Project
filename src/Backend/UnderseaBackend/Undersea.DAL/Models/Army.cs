using System.Collections.Generic;

namespace Undersea.DAL.Models
{
    public class Army
    {
        public string Id { get; set; }
        public City City { get; set; }
        public string CityId { get; set; }
        public virtual ICollection<Unit> Units { get; set; }
        public virtual ICollection<Attack> Attacks { get; set; }
    }
}
