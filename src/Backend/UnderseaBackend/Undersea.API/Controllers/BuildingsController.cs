using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;

namespace Undersea.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuildingsController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<BuildingDto>> GetBuilding()
        {
            return Ok();
        }

    }
}
