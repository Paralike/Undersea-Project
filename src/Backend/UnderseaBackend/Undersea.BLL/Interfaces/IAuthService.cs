using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.DTOs.Auth;

namespace Undersea.BLL.Services
{
    public interface IAuthService
    {
        public Task<IdentityUser> GetUser(LoginDto user);
        public Task<AuthResponseDto> RegisterUser(RegisterDto newUser);

        public AuthResponseDto GetToken(IdentityUser user);
    }
}
