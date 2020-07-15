using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;
using Undersea.DAL.Models;
using Undersea.DAL.Repositories.Interfaces;

namespace Undersea.DAL.Repositories
{
    public class ArmyRepository : BaseRepository<Army>, IArmyRepository
    {
        public ArmyRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<int> GetFoodNecessity(Guid armyId)
        {
            // TODO átírni lambdásra

            var query = from units in _context.Units
                        join unitArmy in _context.ArmyUnitJoins on units.UnitType equals unitArmy.UnitType
                        where unitArmy.ArmyId == armyId
                        select new { unitArmy.UnitCount, units.FoodNecessity };

            var sum = await query.SumAsync(a => a.FoodNecessity * a.UnitCount);

            return sum;
        }

        public async Task<int> GetPearlNecessity(Guid armyId)
        {
            var query = from units in _context.Units
                        join armyUnit in _context.ArmyUnitJoins on units.UnitType equals armyUnit.UnitType
                        where armyUnit.ArmyId == armyId
                        select new { armyUnit.UnitCount, units.PearlNecessity };

            var sum = await query.SumAsync(a => a.PearlNecessity * a.UnitCount);

            return sum;
        }

        public async Task<int> GetArmyPrice(Guid armyId)
        {
            var query = from units in _context.Units
                        join armyUnit in _context.ArmyUnitJoins on units.UnitType equals armyUnit.UnitType
                        where armyUnit.ArmyId == armyId
                        select new { armyUnit.UnitCount, units.Price };

            var sum = await query.SumAsync(a => a.Price * a.UnitCount);

            return sum;
        }
    }
}
