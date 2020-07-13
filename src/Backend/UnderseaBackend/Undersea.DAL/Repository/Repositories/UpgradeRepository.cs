using Undersea.DAL.Models;
using Undersea.DAL.Repositories.Interfaces;

namespace Undersea.DAL.Repositories
{
    public class UpgradeRepository : BaseRepository<Upgrade>, IUpgradeRepository
    {
        public UpgradeRepository(AppDbContext context) : base(context) { }
    }
}
