using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;

namespace Undersea.BLL.Services
{
    public class AuthService: IAuthService
    {
        private UserManager<IdentityUser> _userManager;
        private SignInManager<IdentityUser> _signInManager;

        public AuthService(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public async Task<IdentityUser> GetUser(LoginDto user)
        {
            var user1 = await _userManager.FindByNameAsync(user.Username);
            var result = await _signInManager.PasswordSignInAsync(user1, user.Password, false, false);

            if (result.Succeeded)
                return user1;

            else
                return null;            
        }

        public async Task RegisterUser(RegisterDto newUser)
        {
            var user = new IdentityUser(newUser.Username);
            user.PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(user, newUser.Password);

            await _userManager.CreateAsync(user);
        }


    }
}
