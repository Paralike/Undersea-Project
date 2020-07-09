using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.DTOs.GameElemens;
using Undersea.BLL.Interfaces;
using Undersea.DAL.Enums;

namespace Undersea.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class ArmyController : ControllerBase
    {
        private readonly IArmyService _armyService;
        Guid id;

        public ArmyController(IArmyService armyService, IHttpContextAccessor httpContextAccessor)
        {
            _armyService = armyService;
            id = Guid.Parse(httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value);
        }

        [HttpGet]
        public async Task<ActionResult<ArmyDto>> GetArmy()
        {
            //return Ok(await _armyService.GetArmy(id));

            return Ok(await _armyService.GetUnitInfo());
        }

        [HttpPost]
        public async Task<ActionResult> PurchaseUnits([FromBody] List<ArmyUnitDto> purchase)
        {
            Guid id = Guid.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
            await _armyService.PurchaseUnits(id, purchase);

            return Ok();

        }
    }
}
