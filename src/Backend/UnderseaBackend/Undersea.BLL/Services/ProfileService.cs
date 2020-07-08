using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.Interfaces;
using Undersea.DAL;
using Undersea.DAL.Models;
using Undersea.DAL.Repositories.Interfaces;

namespace Undersea.BLL.Services
{
    public class ProfileService : IProfileService
    {
        private readonly ICityRepository _cityRepository;
        private readonly IMapper _mapper;

        public ProfileService(ICityRepository cityRepository, IMapper mapper)
        {
            _cityRepository = cityRepository;
            _mapper = mapper;
        }

        public async Task DeleteProfile(Guid id)
        {
            _cityRepository.Delete(id);
        }

        public Task<CityDto> GetProfile(User user)
        {
            throw new NotImplementedException();
        }
    }
}
