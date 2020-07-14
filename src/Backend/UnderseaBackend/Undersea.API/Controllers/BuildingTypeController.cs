using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Undersea.BLL.DTOs.GameElemens;
using Undersea.BLL.Interfaces;

namespace Undersea.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuildingTypeController : ControllerBase
    {
        IBuildingService _buildingService;

        public BuildingTypeController(IBuildingService buildingService)
        {
            _buildingService = buildingService;
        }
        [HttpGet]
        public async Task<List<BuildingAttributeDto>> GetUpgrades()
        {
            return await _buildingService.GetBuilding();
        }
    }
}
