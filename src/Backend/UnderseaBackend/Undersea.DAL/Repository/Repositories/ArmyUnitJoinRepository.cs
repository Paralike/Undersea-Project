using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Undersea.BLL.DTOs.GameElemens;
using Undersea.DAL.Enums;
using Undersea.DAL.Models;
using Undersea.DAL.Repositories.Interfaces;

namespace Undersea.DAL.Repositories.Repositories
{
    public class ArmyUnitJoinRepository : BaseRepository<ArmyUnitJoin>, IArmyUnitJoinRepository
    {
        public ArmyUnitJoinRepository(AppDbContext context) : base(context)
        {

        }

        public async Task<List<ArmyUnitDto>> GetTypeCountAsync(Guid id)
        {
            var groupBy = await _context.
                ArmyUnitJoins
               .Where(au => au.ArmyId == id)
               .Select(a => new ArmyUnitDto
               {
                   UnitType = a.UnitType,
                   UnitCount = a.UnitCount
               })
               .ToListAsync();               

            return groupBy;
        }
    }
}
