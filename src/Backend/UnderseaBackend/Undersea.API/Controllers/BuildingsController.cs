using Microsoft.AspNetCore.Mvc;
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
        public async Task<ActionResult<BuildingDto>> GetBuilding()
        {
            return Ok(await _buildingService.GetBuilding());
        }
        [HttpPost]
        public async Task<ActionResult> PurchaseBuilding(BuildingDto building)
        {
            return Ok(_buildingService.PurchaseBuilding(building));
        }
    }
}
