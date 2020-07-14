using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.Services;

namespace Undersea.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuildingsController : ControllerBase
    {
        BuildingService _buildingService;

        public BuildingsController(BuildingService buildingService)
        {
            _buildingService = buildingService;
        }

        [HttpGet]
        public async Task<ActionResult<List<BuildingDto>>> GetBuilding()
        {
            Guid id = Guid.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
            return Ok(await _buildingService.GetBuilding(id));
        }
        [HttpPost]
        public async Task PurchaseBuilding(BuildingDto building)
        {
            Guid id = Guid.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
            await _buildingService.PurchaseBuilding(id, building);
        }
    }
}
