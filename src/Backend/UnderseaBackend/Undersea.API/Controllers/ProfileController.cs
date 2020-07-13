using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.Interfaces;

namespace Undersea.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class ProfileController : ControllerBase
    {
        IProfileService _profileService;


        public ProfileController(IProfileService profileService)
        {
            _profileService = profileService;

        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteProfile(Guid id)
        {
            return Ok(_profileService.DeleteProfile(id));
        }

        [HttpGet("ranks")]
        public async Task<ActionResult<List<RankDto>>> GetRanks()
        {
            return Ok(await _profileService.GetRank());
        }

    }
}
