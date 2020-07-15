using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.DTOs.GameElemens;
using Undersea.BLL.Interfaces;
using Undersea.DAL.Enums;
using Undersea.DAL.Models;
using Undersea.DAL.Repositories.Interfaces;
using Undersea.DAL.Repository.Interfaces;

namespace Undersea.BLL.Services
{
    public class BuildingService : IBuildingService
    {
        private readonly IBuildingRepository _buildingRepository;
        private readonly IMapper _mapper;
        private readonly ICityRepository _cityRepository;
        private readonly IBuildingJoinRepository _buildingJoin;
        private readonly IBuildingAttributeRepository _buildingAttributeRepository;

        public BuildingService(IBuildingRepository buildingRepository, IMapper mapper, ICityRepository cityRepository, IBuildingJoinRepository buildingJoin, IBuildingAttributeRepository buildingAttributeRepository)
        {
            _buildingRepository = buildingRepository;
            _mapper = mapper;
            _cityRepository = cityRepository;
            _buildingJoin = buildingJoin;
            _buildingAttributeRepository = buildingAttributeRepository;
        }

        public async Task<ICollection<BuildingDto>> GetBuilding(Guid id) {
            var cities = await _cityRepository.GetWhere(c => c.UserId == id);
            var firstCity = cities.First();
            var BuildingId = firstCity.BuildingId;
            //var list = await _buildingRepository.GetAll();
            var list = await _buildingJoin.GetWhere(u => u.BuildingId == BuildingId);
            return _mapper.Map<List<BuildingDto>>(list);

        }

        public async Task PurchaseBuilding(Guid id, BuildingType building)
        {
            var cities = await _cityRepository.GetWhere(c => c.UserId == id);
            var firstCity = cities.First();
            var result = await _buildingJoin.FirstOrDefault(a => a.BuildingId == firstCity.UpgradesId && a.BuildingType == building);
            //TODO validitáció
            result.Status = DAL.Enums.Status.InProgress;
            await _cityRepository.Update(firstCity);

        }
        public async Task<ICollection<BuildingAttributeDto>> GetGeneralBuildings()
        {
            var list = await _buildingAttributeRepository.GetAll();
            return _mapper.Map<List<BuildingAttributeDto>>(list);
        }
    }
}
