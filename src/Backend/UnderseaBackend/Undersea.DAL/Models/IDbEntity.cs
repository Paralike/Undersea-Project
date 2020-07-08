using System;

namespace Undersea.DAL.Models
{
    public interface IDbEntity
    {
        public Guid Id { get; set; }
    }
}
