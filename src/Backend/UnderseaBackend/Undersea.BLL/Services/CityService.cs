using AutoMapper;
using System;
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
        private readonly IArmyService _armyservice;

        public CityService()
        {

        }

        public CityService(ICityRepository cityRepository, IMapper mapper, IArmyService armyservice)
        {
            _cityRepository = cityRepository;
            _mapper = mapper;
            _armyservice = armyservice;
        }

        public async Task<CityDto> GetCity(Guid id)
        {
            // identity service . id
            // Get where(userId = identity service)
            // return _mapper.Map<CityDto>(await _cityRepository.GetCityByUserId(id));
            var cityPre = await _cityRepository.GetCityByUserId(id);
            CityDto city = new CityDto()
            {
                Army = await _armyservice.GetArmy(id),
                CoralCount = cityPre.CoralCount,
                PearlCount = cityPre.PearlCount,
                CoralProduction = cityPre.CoralProduction,
                PearlProduction = cityPre.PearlProduction,

            };

            return city;

        }
        public async Task AddUpgrade()
        {


        }


    }
}
