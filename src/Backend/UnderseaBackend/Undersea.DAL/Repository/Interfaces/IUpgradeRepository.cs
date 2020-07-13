using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Undersea.DAL.Enums;
using Undersea.DAL.Models;

namespace Undersea.DAL.Repositories.Interfaces
{
    public interface IUpgradeRepository : IBaseRepository<Upgrade>
    {
        public Task AddUpgrade(/*Guid CityId, */int UpgradeType);
    }
}
