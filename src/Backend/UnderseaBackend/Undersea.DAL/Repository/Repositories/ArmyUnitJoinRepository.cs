﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Undersea.DAL.Models;
using Undersea.DAL.Repositories.Interfaces;

namespace Undersea.DAL.Repositories.Repositories
{
    public class ArmyUnitJoinRepository : BaseRepository<ArmyUnit>, IArmyUnitJoinRepository
    {
        public ArmyUnitJoinRepository(AppDbContext context) : base(context)
        {

        }

        public async Task<List<ArmyUnit>> GetTypeCountAsync(Guid id)
        {
            var groupBy = await _context.
                ArmyUnits
               .Where(au => au.ArmyId == id)
               .ToListAsync();

            return groupBy;
        }
    }
}
