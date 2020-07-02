using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;

namespace Undersea.BLL.Services
{
    public interface IAuthService
    {
        public Task<IdentityUser> GetUser(LoginDto user);
        public Task RegisterUser(RegisterDto newUser);
    }
}
