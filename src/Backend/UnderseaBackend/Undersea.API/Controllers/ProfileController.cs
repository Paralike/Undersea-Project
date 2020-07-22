using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
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
    [Authorize]
    public class ProfileController : ControllerBase
    {
        readonly IProfileService _profileService;
        Guid id;

        public ProfileController(IProfileService profileService, IHttpContextAccessor httpContextAccessor)
        {
            _profileService = profileService;
            id = Guid.Parse(httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteProfile(Guid id)
        {
            return Ok(_profileService.DeleteProfile(id));
        }

        [HttpGet("ranks")]
        public async Task<ActionResult<List<RankDto>>> GetRanks(string name)
        {
            return Ok(await _profileService.GetRank(name));
        }

        [HttpGet]
        public async Task<ActionResult<RankDto>> GetProfile()
        {
            return Ok(await _profileService.GetProfile(id));
        }

    }
}
