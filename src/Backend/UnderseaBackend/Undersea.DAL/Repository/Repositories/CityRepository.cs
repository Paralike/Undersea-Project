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
    class CityRepository : BaseRepository<City>, ICityRepository
    {
        public CityRepository(AppDbContext context) : base(context) {   }

        public async Task<City> GetCity(Guid Id)
        {
            var city = await _context
                .Cities
                .Include(b => b.Buildings).ThenInclude(c => c.CityId)
                .Include(u => u.Upgrades).ThenInclude(d => d.CityId)
                .Where(a => a.Id == Id)
                .FirstOrDefaultAsync();
            return city;
        }
    }
}
