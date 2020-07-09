using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Undersea.DAL.Models;
using Undersea.DAL.Repositories.Interfaces;

namespace Undersea.DAL.Repositories
{
    public class CityRepository : BaseRepository<City>, ICityRepository
    {
        public CityRepository(AppDbContext context) : base(context) {   }

        public async Task<City> GetCityByUserId(Guid Id)
        {
            var city = await _context
                .Cities
                .Include(b => b.Buildings)
                .Include(u => u.Upgrades)
                .Where(a => a.UserId == Id)
                .FirstOrDefaultAsync();
            return city;
        }

        public async Task<ICollection<City>> GetAllCityWithUser()
        {
            return await GetAllWith().Include(a => a.User).ToListAsync();
        }

    }
}
