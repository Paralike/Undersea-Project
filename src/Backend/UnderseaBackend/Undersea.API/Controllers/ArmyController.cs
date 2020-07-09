﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Security.Claims;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.Interfaces;

namespace Undersea.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    // [Authorize]
    public class ArmyController : ControllerBase
    {
        private readonly IArmyService _armyService;

        public ArmyController(IArmyService armyService)
        {
            _armyService = armyService;
        }

        [HttpGet]
        public async Task<ActionResult<ArmyDto>> GetArmy()
        {
            //Guid id = Guid.Parse(User.FindFirst("Id")?.Value);
            Guid id =  Guid.Parse("11bd1661-da71-40cc-a00f-3e2e19a1ca4a");
            return Ok(await _armyService.GetArmy(id));        }

        [HttpPost]
        public async Task<ActionResult> PurchaseUnits([FromBody] UnitPurchaseDto purchase)
        {
            Guid id = Guid.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
            await _armyService.PurchaseUnits(id, purchase);

            return Ok();

        }
    }
}
