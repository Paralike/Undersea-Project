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
        public Task DeleteProfile(int id)
        {
            throw new NotImplementedException();
        }


        /*       private readonly AppDbContext _dbContext;
               public ProfileService(AppDbContext dbContext)
               {
                   _dbContext = dbContext;
             private readonly IUserRepository _userRepository;

               private readonly ICityRepository _cityRepository;


               private readonly ICityRepository _cityRepository;

               private readonly IMapper _mapper;

               public ProfileService(ICityRepository cityRepository, IMapper mapper)
               {
                   _cityRepository = cityRepository;
                   _mapper = mapper;

               }
               public Task DeleteProfile(int id)
               {

                   _cityRepository.Delete(id);
                   _cityRepository.Delete(id);
               }
        */
        public Task<ProfileDto> GetProfile(User user)
        {
            throw new NotImplementedException();
        }
    }
}
