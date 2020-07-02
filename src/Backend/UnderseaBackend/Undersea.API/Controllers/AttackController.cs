using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Security.Claims;
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
    public class AttackController : ControllerBase
    {
        [HttpPost]
        // TODO FromBody csak egy paraméterhez lehet
        public async Task<ActionResult> StartAttack([FromBody] AttackDto attack)
        {
            int id = int.Parse(User.FindFirst("Id")?.Value);
            //User-ből id-t ki lehet szedni
            return Ok();
        }

        [HttpGet]
        public async Task<ActionResult<AttackableUsersDto>> GetAttackableUsers()
        {
            return Ok(new AttackableUsersDto());
        }
    }
}
