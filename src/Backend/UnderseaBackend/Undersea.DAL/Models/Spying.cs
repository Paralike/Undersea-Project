using System;
using System.Collections.Generic;
using System.Text;

namespace Undersea.DAL.Models
{
    public class Spying: IDbEntity
    {
        public Guid Id { get; set; }
        public virtual City AttackerCity { get; set; }
        public virtual City DefenderCity { get; set; }
        public Guid AttackerCityId { get; set; }
        public Guid DefenderCityId { get; set; }
        public int SpyCount { get; set; }
        public bool? WasSpyingSuccesful { get; set; }

        public Spying()
        {
            Id = Guid.NewGuid();
        }
    }
}
