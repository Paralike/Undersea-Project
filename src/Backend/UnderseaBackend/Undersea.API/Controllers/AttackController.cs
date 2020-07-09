using AutoMapper;
using Microsoft.AspNetCore.Http;
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
        Guid id;

        public AttackController(IAttackService attackService, IHttpContextAccessor httpContextAccessor, IMapper mapper)
        {
            _attackService = attackService;
            id = Guid.Parse(httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value);

        }

        [HttpPost]
        public async Task<ActionResult> StartAttack([FromBody] AttackDto attack)
        {
            //Guid id = Guid.Parse(User.FindFirst("Id")?.Value);

            var id = Guid.Parse("e0346624-c14e-4395-84a4-692bd9ee3b5d");
            await _attackService.StartAttack(id, attack);

            return Ok();
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AttackableUsersDto>>> GetAttackableUsers()
        {
           // var id = Guid.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            return Ok(await _attackService.GetAttackableUsers(id));
        }
    }
}
