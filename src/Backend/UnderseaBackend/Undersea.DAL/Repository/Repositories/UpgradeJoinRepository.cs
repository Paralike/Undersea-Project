using System;
using System.Collections.Generic;
using System.Text;
using Undersea.DAL.Models;
using Undersea.DAL.Repositories;
using Undersea.DAL.Repositories.Interfaces;
using Undersea.DAL.Repository.Interfaces;

namespace Undersea.DAL.Repository.Repositories
{
    public class UpgradeJoinRepository : BaseRepository<UpgradeAttributeJoin>, IUpgradeJoinRepository
    {
        public UpgradeJoinRepository(AppDbContext context) : base(context)
        {
        }
    }
}
