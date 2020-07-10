using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;
using Undersea.DAL.Enums;
using Undersea.DAL.Models;
using Undersea.DAL.Repositories.Interfaces;

namespace Undersea.DAL.Repositories
{
    public class ArmyRepository : BaseRepository<Army>, IArmyRepository
    {
        public ArmyRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<Army> BuyUnitsAsync(Guid id)
        {
            var army = await _context
                  .Armies
                  .Include(a => a.Units).ThenInclude(au => au.UnitType)
                  .Include(a => a.Units).ThenInclude(au => au.UnitCount)
                  .Where(a => a.Id == id)
                  .FirstOrDefaultAsync();

            return army;
        }

        public async Task<int> GetFoodNecessity(Guid id)
        {
            //var army = await _context
            //      .Armies
            //      .Include(a => a.Units)
            //        .ThenInclude(au => au.UnitType)
            //      .Include(a => a.Units).
            //        ThenInclude(au => au.UnitCount)

            var query = from units in _context.Units
                        join unitArmy in _context.ArmyUnitJoins on units.UnitType equals unitArmy.UnitType
                        where unitArmy.ArmyId == id
                        select new { unitArmy.UnitCount, units.FoodNecessity };

            var sum = await query.SumAsync(a => a.FoodNecessity * a.UnitCount);

            return sum;
        }

        public async Task<int> GetPearlNecessity(Guid id)
        {
            var query = from units in _context.Units
                        join unitArmy in _context.ArmyUnitJoins on units.UnitType equals unitArmy.UnitType
                        where unitArmy.ArmyId == id
                        select new { unitArmy.UnitCount, units.PearlNecessity };

            var sum = await query.SumAsync(a => a.PearlNecessity * a.UnitCount);

            return sum;
        }

        public async Task<int> GetArmyPrice(Guid id)
        {
            var query = from units in _context.Units
                        join unitArmy in _context.ArmyUnitJoins on units.UnitType equals unitArmy.UnitType
                        where unitArmy.ArmyId == id
                        select new { unitArmy.UnitCount, units.Price };

            var sum = await query.SumAsync(a => a.Price * a.UnitCount);

            return sum;
        }
    }
}
