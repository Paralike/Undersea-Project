using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Undersea.DAL.Models;
using Undersea.DAL.Repositories;
using Undersea.DAL.Repository.Interfaces;

namespace Undersea.DAL.Repository.Repositories
{
    public class SpyRepository : BaseRepository<Spying>, ISpyRepository
    {
        public SpyRepository(AppDbContext context) : base(context)
        {
        }

        override
        public async Task<IEnumerable<Spying>> GetAll()
        {
            return await _context.Set<Spying>()
                 .Include(atk => atk.DefenderCity)
                    .ThenInclude(c => c.AvailableArmy)
                        .ThenInclude(ar => ar.Units)
                .Include(atk => atk.AttackerCity)
                    .ThenInclude(c => c.AvailableArmy)
                        .ThenInclude(ar => ar.Units)
                .ToListAsync();
        }

        override
        public async Task<IEnumerable<Spying>> GetWhere(Expression<Func<Spying, bool>> predicate)
        {
            return await _context.Set<Spying>()
                .Include(atk => atk.DefenderCity)
                    .ThenInclude(c => c.AvailableArmy)
                        .ThenInclude(ar => ar.Units)
                 .Include(atk => atk.AttackerCity)
                    .ThenInclude(c => c.AvailableArmy)
                        .ThenInclude(ar => ar.Units)
                .Where(predicate).ToListAsync();
        }
    }
}
