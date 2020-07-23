using System;

namespace Undersea.DAL.Models
{
    public interface IDbEntity
    {
        // TODO class és konstruktorban Guid beállítás
        public Guid Id { get; set; }
    }
}
