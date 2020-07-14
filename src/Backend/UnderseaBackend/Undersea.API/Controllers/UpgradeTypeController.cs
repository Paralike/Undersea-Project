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
    public class UpgradeTypeController : ControllerBase
    {
        IUpgradeService _upgradeService;

        public UpgradeTypeController(IUpgradeService upgradeService)
        {
            _upgradeService = upgradeService;
        }

        [HttpGet]
        public async Task<ActionResult<List<UpgradeAttributeDto>>> GetUpgrades()
        {
            return Ok(await _upgradeService.GetUpgrades());
        }
    }
}
