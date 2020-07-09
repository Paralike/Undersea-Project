using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.Services;

namespace Undersea.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UpgradesController : ControllerBase
    {
        UpgradeService _upgradeService;

        public UpgradesController(UpgradeService upgradeService)
        {
            _upgradeService = upgradeService;
        }

        [HttpGet]
        public async Task<ActionResult<UpgradeDto>> GetUpgrades()
        {
            return Ok(await _upgradeService.GetUpgrade());
        }
        [HttpPost]
        public async Task<ActionResult> PurchaseUpgrade(UpgradeDto upgrade)
        {
            return Ok(_upgradeService.PurchaseUpgrade(upgrade));
        }
    }
}
