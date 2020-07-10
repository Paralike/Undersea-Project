using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Undersea.DAL.Models;

namespace Undersea.DAL.Repositories.Interfaces
{
    public interface IUpgradeRepository : IBaseRepository<Upgrade>
    {
        Task AddUpgrade(Upgrade upgrade);
    }
}
