using System;
using System.Collections.Generic;
using System.Text;
using Undersea.DAL.Models;
using Undersea.DAL.Repositories.Interfaces;

namespace Undersea.DAL.Repositories
{
    public class UserRepository: BaseRepository<User>, IUserRepository
    {

        public UserRepository(AppDbContext context) : base(context)
        {
        }
    }
}
