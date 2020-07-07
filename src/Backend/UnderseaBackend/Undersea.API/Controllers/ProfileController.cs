using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
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
        public async Task<ActionResult<RankDto>> GetRanks()
        {
            return Ok();
        }

    }
}
