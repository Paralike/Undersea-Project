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
<<<<<<< HEAD

        private readonly AppDbContext _dbContext;
        public ProfileService(AppDbContext dbContext)
        {
            _dbContext = dbContext;
      private readonly IUserRepository _userRepository;
=======
        private readonly ICityRepository _cityRepository;
>>>>>>> parent of badbb1c... Add city service
        private readonly IMapper _mapper;

        public ProfileService(ICityRepository cityRepository, IMapper mapper)
        {
            _cityRepository = cityRepository;
            _mapper = mapper;

        }
        public Task DeleteProfile(int id)
        {
<<<<<<< HEAD

=======
            _cityRepository.Delete(id);
>>>>>>> parent of badbb1c... Add city service
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
