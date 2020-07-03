using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Undersea.BLL.DTOs;

namespace Undersea.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfileController : ControllerBase
    {
        [HttpDelete("{id}")]
        public async Task<ActionResult<ProfileDto>> DeleteProfile(int id)
        {
            return Ok();
        }

        [HttpGet]
        public async Task<ActionResult<ProfileDto>> GetProfile()
        {
            return Ok();
        }

        [HttpGet("ranks")]
        public async Task<ActionResult> GetRanks()
        {
            return Ok();
        }

    }
}
