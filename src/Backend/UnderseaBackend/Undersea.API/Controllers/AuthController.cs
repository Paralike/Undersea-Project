using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.DTOs.Auth;
using Undersea.BLL.Services;

namespace Undersea.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class AuthController : ControllerBase
    {
        IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("login")]

        public async Task<ActionResult<AuthResponseDto>> AuthenticateUser([FromBody] LoginDto login)

        {
            if (login == null)
            {
                return BadRequest("Invalid client request");
            }

            var user = await _authService.GetUser(login);

            var response = _authService.GetToken(user);

            if (response != null)
            {
                return Ok(response);
            }

            else
            {
                return Unauthorized();
            }

        }

        [HttpPost("register")]
        public async Task<ActionResult<AuthResponseDto>> RegisterUser([FromBody] RegisterDto registration)
        {
            var result = await _authService.RegisterUser(registration);

            if (result != null)
            {
                return Ok(result);
            }

            else
            {
                return BadRequest();
            }

        }

    }
}
