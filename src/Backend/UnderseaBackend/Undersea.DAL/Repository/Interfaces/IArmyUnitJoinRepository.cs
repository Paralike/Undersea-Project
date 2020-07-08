using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Undersea.BLL.DTOs.GameElemens;
using Undersea.DAL.Models;

namespace Undersea.DAL.Repositories.Interfaces
{
    public interface IArmyUnitJoinRepository : IBaseRepository<ArmyUnitJoin>
    {
        public Task<List<ArmyUnitDto>> GetTypeCountAsync(Guid id);
    }
}
