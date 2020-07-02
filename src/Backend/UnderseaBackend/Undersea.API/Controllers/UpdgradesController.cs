using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Undersea.BLL.DTOs;

namespace Undersea.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UpdgradesController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<UpgradeDto>> GetUpgrades()
        {
            return Ok();
        }
    }
}
