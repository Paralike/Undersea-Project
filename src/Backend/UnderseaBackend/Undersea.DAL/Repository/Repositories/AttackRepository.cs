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
                .Include(a => a.Army)
                .Include(a => a.DefenderCity)
                .ToListAsync();
        }

        override
        public async Task<IEnumerable<Attack>> GetWhere(Expression<Func<Attack, bool>> predicate)
        {
            return await _context.Set<Attack>()
                .Include(a => a.DefenderCity)
                .Include(a => a.Army)
                .Where(predicate).ToListAsync();
        }

    }
}