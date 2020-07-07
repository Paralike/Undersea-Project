using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.Interfaces;
using Undersea.DAL.Models;

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
            string id = User.FindFirst("Id")?.Value;
            return Ok();
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AttackableUsersDto>>> GetAttackableUsers()
        {
            return Ok(await _attackService.GetAttackableUsers());
        }
    }
}
