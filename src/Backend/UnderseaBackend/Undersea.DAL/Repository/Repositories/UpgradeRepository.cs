using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Undersea.DAL.Enums;
using Undersea.DAL.Models;
using Undersea.DAL.Repositories.Interfaces;

namespace Undersea.DAL.Repositories
{
    public class UpgradeRepository : BaseRepository<Upgrade>, IUpgradeRepository
    {
        public UpgradeRepository(AppDbContext context) : base(context) { }

        public async Task AddUpgrade(/*Guid CityId,*/ int UpgradeType)
        {
            var c = new Upgrade()
            {
                /*CityId = CityId,*/
            };
            await c.setType(UpgradeType);

            await Add(c);
            
        }
    }
}
