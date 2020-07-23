using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Undersea.DAL.Models;
using Undersea.DAL.Repositories;
using Undersea.DAL.Repository.Interfaces;

namespace Undersea.DAL.Repository.Repositories
{
    public class AttackRepository : BaseRepository<Attack>, IAttackRepository
    {
        public AttackRepository(AppDbContext context) : base(context)
        {
        }

        override
        public async Task<IEnumerable<Attack>> GetAll()
        {
            return await _context.Set<Attack>()
                .Include(atk => atk.Army)
                    .ThenInclude(ar => ar.Units)
                 .Include(atk => atk.DefenderCity)
                    .ThenInclude(c => c.AvailableArmy)
                        .ThenInclude(ar => ar.Units)
                .Include(atk => atk.AttackerCity)
                    .ThenInclude(c => c.AvailableArmy)
                        .ThenInclude(ar => ar.Units)
                .ToListAsync();
        }

        override
        public async Task<IEnumerable<Attack>> GetWhere(Expression<Func<Attack, bool>> predicate)
        {
            return await _context.Set<Attack>()
                .Include(atk => atk.DefenderCity)
                    .ThenInclude(c=> c.AvailableArmy)
                        .ThenInclude(ar => ar.Units)
                 .Include(atk => atk.AttackerCity)
                    .ThenInclude(c => c.AvailableArmy)
                        .ThenInclude(ar => ar.Units)
                .Include(a => a.Army)
                    .ThenInclude(a => a.Units)
                .Where(predicate).ToListAsync();
        }

    }
}