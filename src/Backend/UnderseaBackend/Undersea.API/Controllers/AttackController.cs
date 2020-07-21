using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.DTOs.Actions;
using Undersea.BLL.Interfaces;

namespace Undersea.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class AttackController : ControllerBase
    {
        private readonly IAttackService _attackService;
        Guid id;

        public AttackController(IAttackService attackService, IHttpContextAccessor httpContextAccessor, IMapper mapper)
        {
            _attackService = attackService;
            id = Guid.Parse(httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value);
        }

        [HttpPost]
        public async Task<ActionResult> StartAttack([FromBody] AttackDto attack)
        {
            await _attackService.StartAttack(id, attack);
            return Ok();
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AttackableUsersDto>>> GetAttackableUsers(string name)
        {
            return Ok(await _attackService.GetAttackableUsers(id,name));
        }

        [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<AttackResponseDto>>> GetAllAttacks()
        {
            return Ok(await _attackService.GetAttacks(id));
        }

    }
}
