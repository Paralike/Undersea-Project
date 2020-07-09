using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Undersea.DAL.Models;

namespace Undersea.DAL.Repositories.Interfaces
{
    public interface ICityRepository : IBaseRepository<City>
    {
        public Task<City> GetCity(Guid Id);
    }
}
