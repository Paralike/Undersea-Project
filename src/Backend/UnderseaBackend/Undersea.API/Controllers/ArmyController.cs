using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
            // TODO id alapján

            return Ok(new UnitDto());
        }

        [HttpPost]
        public async Task<ActionResult> PurchaseUnits([FromBody] UnitPurchaseDto purchase)
        {
            return Ok();
        }
    }
}
