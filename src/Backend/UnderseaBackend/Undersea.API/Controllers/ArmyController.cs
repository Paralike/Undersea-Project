using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;

namespace Undersea.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ArmyController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<UnitDto>> GetArmy()
        {
            return Ok(new UnitDto());
        }

        [HttpPost]
        public async Task<ActionResult> PurchaseUnits([FromBody] UnitPurchaseDto purchase)
        {
            return Ok();
        }
    }
}
