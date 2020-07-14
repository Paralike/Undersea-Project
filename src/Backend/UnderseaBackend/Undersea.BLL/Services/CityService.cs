using AutoMapper;
using System;
using System.Drawing;
using System.Linq;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.Interfaces;
using Undersea.DAL.Enums;
using Undersea.DAL.Models;
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
                AvailableArmy = await _armyservice.GetArmy(id),
                CoralCount = cityPre.CoralCount,
                PearlCount = cityPre.PearlCount,
                CoralProduction = cityPre.CoralProduction,
                PearlProduction = cityPre.PearlProduction,
                AllArmy = await _armyservice.GetAllArmy(cityPre.Id)
            };

            return city;

        }
        public async Task AddUpgrade()
        {


        }

        public async Task<int> CalculatePoints(Guid userId)
        {
            int points = 0;

            var firstCity = await _cityRepository.GetCityByUserId(userId);

            points += firstCity.Inhabitants
                    + firstCity.AvailableArmy.Units.Single(u => u.UnitType == UnitType.Csatacsiko).UnitCount * 5
                    + firstCity.AvailableArmy.Units.Single(u => u.UnitType == UnitType.Rohamfoka).UnitCount * 5
                    + firstCity.AvailableArmy.Units.Single(u => u.UnitType == UnitType.Lezercapa).UnitCount * 10;

            return points;
        }


    }
}
