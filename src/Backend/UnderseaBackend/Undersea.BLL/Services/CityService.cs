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
        private readonly IUpgradeService _upgradeService;
        private readonly IBuildingService _buildingService;

        public CityService()
        {

        }

        public CityService(ICityRepository cityRepository, IMapper mapper, IArmyService armyservice, IUpgradeService upgradeService, IBuildingService buildingService)
        {
            _cityRepository = cityRepository;
            _mapper = mapper;
            _armyservice = armyservice;
            _upgradeService = upgradeService;
            _buildingService = buildingService;
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
                AllArmy = await _armyservice.GetAllArmy(cityPre.Id),
                Buildings = await _buildingService.GetBuilding(id),
                Upgrades = await _upgradeService.GetUpgrade(id)

            };

            return city;

        }

        public async Task<int> CalculatePoints(Guid userId)
        {
            int points = 0;

            var firstCity = await _cityRepository.GetCityByUserId(userId);

            points += firstCity.Inhabitants
                    + firstCity.AvailableArmy.Units.Single(u => u.UnitType == UnitType.Csatacsiko).UnitCount * 5
                    + firstCity.AvailableArmy.Units.Single(u => u.UnitType == UnitType.Rohamfoka).UnitCount * 5
                    + firstCity.AvailableArmy.Units.Single(u => u.UnitType == UnitType.Lezercapa).UnitCount * 10
                    + firstCity.Buildings.BuildingAttributes.Single(u => u.BuildingType == BuildingType.Aramlasiranyito).Quantity * 50
                    + firstCity.Buildings.BuildingAttributes.Single(u => u.BuildingType == BuildingType.Zatonyvar).Quantity * 50;
                    //+ firstCity.Upgrades.UpgradeAttributes.Single(u=>u.UpgradeType == UpgradeType.Alkimia);

            return points;
        }


    }
}
