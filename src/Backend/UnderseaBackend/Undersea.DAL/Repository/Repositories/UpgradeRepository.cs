using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Undersea.DAL.Models;
using Undersea.DAL.Repositories.Interfaces;

namespace Undersea.DAL.Repositories
{
    public class UpgradeRepository : BaseRepository<Upgrade>, IUpgradeRepository
    {
        public UpgradeRepository(AppDbContext context) : base(context) { }

        public async Task AddUpgrade(Upgrade upgrade)
        {
            //var city = await _context.Cities.SingleOrDefaultAsync(c => c.UserId == upgrade.CityId);
            _context.Upgrades.Add(upgrade);
            await _context.SaveChangesAsync();
        }
    }
}
