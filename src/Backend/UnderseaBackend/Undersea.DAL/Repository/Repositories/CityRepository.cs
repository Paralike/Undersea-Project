using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Undersea.DAL.Models;
using Undersea.DAL.Repositories.Interfaces;

namespace Undersea.DAL.Repositories
{
    public class CityRepository : BaseRepository<City>, ICityRepository
    {
        public CityRepository(AppDbContext context) : base(context) { }

        public async Task<City> GetCityByUserId(Guid Id)
        {
            var city = await _context.Cities
                    .Where(c => c.UserId == Id)
                    .Include(c => c.AvailableArmy)
                        .ThenInclude(ar => ar.Units)
                    .SingleAsync();

            return city;
        }

        public async Task<ICollection<City>> GetAllCityWithUser()
        {
            return await GetAllWith()
                .Include(a => a.User)
                .Include(c => c.AvailableArmy)
                    .ThenInclude(ar => ar.Units)
                .ToListAsync();
        }

        public override async Task<IEnumerable<City>> GetWhere(Expression<Func<City, bool>> predicate)
        {
            return await _context.Set<City>()
                 .Include(c => c.AvailableArmy)
                 .Include(c => c.User)
                 .Where(predicate).ToListAsync();
        }

    }
}
