using System;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.Interfaces;
using Undersea.DAL;
using Undersea.DAL.Models;

namespace Undersea.BLL.Services
{
    class ProfileService : IProfileService
    {
        private readonly AppDbContext _dbContext;
        public ProfileService(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public Task DeleteProfile(int id)
        {
            throw new NotImplementedException();
        }

        public Task<ProfileDto> GetProfile(User user)
        {
            throw new NotImplementedException();
        }
    }
}
