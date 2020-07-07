using System;
using System.Collections.Generic;
using System.Text;

namespace Undersea.DAL.Models
{
   public interface IDbEntity
    {
        public Guid Id { get; set; }
    }
}
