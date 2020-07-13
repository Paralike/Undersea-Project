using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Undersea.DAL.Models;

namespace Undersea.DAL.Repositories.Interfaces
{
    public interface ICityRepository : IBaseRepository<City>
    {
        Task<City> GetCityByUserId(Guid Id);
        Task<ICollection<City>> GetAllCityWithUser();
    }
}
