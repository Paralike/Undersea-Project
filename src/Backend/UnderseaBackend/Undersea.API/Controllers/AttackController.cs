using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.Interfaces;

namespace Undersea.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AttackController : ControllerBase
    {
        private readonly IAttackService _attackService;

        public AttackController(IAttackService attackService, IMapper mapper)
        {
            _attackService = attackService;
        }

        [HttpPost]
        public async Task<ActionResult> StartAttack([FromBody] AttackDto attack)
        {
            Guid id = Guid.Parse(User.FindFirst("Id")?.Value);

            await _attackService.StartAttack(id, attack);

            return Ok();
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AttackableUsersDto>>> GetAttackableUsers()
        {
            var id = User.FindFirst(ClaimTypes.NameIdentifier).Value;

            return Ok(await _attackService.GetAttackableUsers());
        }
    }
}
