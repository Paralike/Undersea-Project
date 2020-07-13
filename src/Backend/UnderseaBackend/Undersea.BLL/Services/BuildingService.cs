using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.Interfaces;
using Undersea.DAL.Models;
using Undersea.DAL.Repositories.Interfaces;

namespace Undersea.BLL.Services
{
    public class BuildingService : IBuildingService
    {
        private readonly IBuildingRepository _buildingRepository;
        private readonly IMapper _mapper;

        public BuildingService(IBuildingRepository buildingRepository, IMapper mapper)
        {
            _buildingRepository = buildingRepository;
            _mapper = mapper;
        }

        public async Task<ActionResult<ICollection<BuildingDto>>> GetBuilding()
        {
            var list = _buildingRepository.GetAll();
            return _mapper.Map<List<BuildingDto>>(list);
        }

        public async Task PurchaseBuilding(BuildingDto building)
        {
            await _buildingRepository.Add(_mapper.Map<Building>(building));
        }
    }
}
