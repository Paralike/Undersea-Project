using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.Interfaces;
using Undersea.BLL.Services;

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
        public async Task<ActionResult<RankDto>> GetRanks()
        {
            return Ok(_profileService.GetRank());
        }

    }
}
