using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
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
                .ToListAsync();
        }

    }
}