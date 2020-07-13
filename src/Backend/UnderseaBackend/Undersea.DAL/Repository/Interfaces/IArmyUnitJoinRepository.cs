using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Undersea.DAL.Models;

namespace Undersea.DAL.Repositories.Interfaces
{
    public interface IArmyUnitJoinRepository : IBaseRepository<ArmyUnit>
    {
        public Task<List<ArmyUnit>> GetTypeCountAsync(Guid id);
    }
}
