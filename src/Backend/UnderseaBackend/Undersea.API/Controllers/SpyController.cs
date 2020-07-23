using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Undersea.BLL.DTOs.Actions;
using Undersea.BLL.Interfaces;

namespace Undersea.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class SpyController : ControllerBase
    {
        private readonly ISpyService _spyService;
        Guid id;

        public SpyController(ISpyService spyService, IHttpContextAccessor httpContextAccessor)
        {
            _spyService = spyService;
            id = Guid.Parse(httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value);
        }

        [HttpPost]
        public async Task<ActionResult> StartSpying([FromBody] SpyingDto spying)
        {
            await _spyService.StartSpying(spying);
            return Ok();
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<SpyingResponseDto>>> GetAllAttacks()
        {
            return Ok(await _spyService.GetSpyings());
        }

    }
}
