using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.Interfaces;
using Undersea.DAL.Repositories.Interfaces;

namespace Undersea.BLL.Services
{
    public class CityService : ICityService
    {
        private readonly ICityRepository _cityRepository;
        private readonly IMapper _mapper;

        public CityService(ICityRepository cityRepository, IMapper mapper)
        {
            _cityRepository = cityRepository;
            _mapper = mapper;
        }

        public async Task<CityDto> GetCity()
        {
            // identity service . id
            // Get where(userId = identity service)
            return _mapper.Map<CityDto>(await _cityRepository.GetAll());
            //return null;
        }
        public async Task AddUpgrade()
        {
            

        }
    }
}
