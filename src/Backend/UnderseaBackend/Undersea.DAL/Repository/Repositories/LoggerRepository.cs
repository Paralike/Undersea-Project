using Undersea.DAL.Models;
using Undersea.DAL.Repositories;
namespace Undersea.DAL.Repository.Repositories
{
    public class LoggerRepository : BaseRepository<ApplicationLog>, ILoggerRepository
    {
        public LoggerRepository(AppDbContext context) : base(context)
        {

        }
    }
}
