using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.DTOs.Auth;
using Undersea.DAL.Models;

namespace Undersea.BLL.Services
{
    public interface IAuthService
    {
        public Task<User> GetUser(LoginDto user);
        public Task<AuthResponseDto> RegisterUser(RegisterDto newUser);

        public AuthResponseDto GetToken(User user);
    }
}
