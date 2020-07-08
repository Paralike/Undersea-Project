using System;
using System.Threading.Tasks;
using Undersea.DAL.Models;

namespace Undersea.DAL.Repositories.Interfaces
{
    public interface IArmyRepository : IBaseRepository<Army>
    {
        public Task<Army> BuyUnitsAsync(Guid id);
    }
}
