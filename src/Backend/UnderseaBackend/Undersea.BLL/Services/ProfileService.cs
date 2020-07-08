using System;
using System.Collections.Generic;
using System.Text;
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
      private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public ProfileService(IUserRepository userRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;

        }
        public Task DeleteProfile(int id)
        {

        }

        public Task<ProfileDto> GetProfile(User user)
        {
            throw new NotImplementedException();
        }

        //public Task<ProfileDto> GetProfile(User user)
        //{
        //       var profile 
        //}
    }
}
