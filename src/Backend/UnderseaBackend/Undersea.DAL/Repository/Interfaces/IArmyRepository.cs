using System;
using System.Threading.Tasks;
using Undersea.DAL.Models;

namespace Undersea.DAL.Repositories.Interfaces
{
    public interface IArmyRepository : IBaseRepository<Army>
    {
        public Task<int> GetFoodNecessity(Guid armyId);
        public Task<int> GetPearlNecessity(Guid armyId);
    }
}
