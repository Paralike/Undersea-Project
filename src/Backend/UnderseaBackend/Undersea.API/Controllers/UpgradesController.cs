using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.Interfaces;
using Undersea.BLL.Services;

namespace Undersea.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UpgradesController : ControllerBase
    {
        IUpgradeService _upgradeService;

        public UpgradesController(IUpgradeService upgradeService)
        {
            _upgradeService = upgradeService;
        }

        [HttpGet]
        public async Task<ActionResult<UpgradeDto>> GetUpgrades()
        {
            return Ok(await _upgradeService.GetUpgrade());
        }
        [HttpPost]
        public async Task PurchaseUpgrade(UpgradeDto upgrade)
        {
            await _upgradeService.PurchaseUpgrade(upgrade);
        }
    }
}
