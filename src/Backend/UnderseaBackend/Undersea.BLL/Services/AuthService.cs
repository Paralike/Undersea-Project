using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.DTOs.Auth;

namespace Undersea.BLL.Services
{
    public class AuthService : IAuthService
    {
        private UserManager<IdentityUser> _userManager;
        private SignInManager<IdentityUser> _signInManager;

        public AuthService(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public AuthResponseDto GetToken(IdentityUser user)
        {
            if (user == null)
                return null;

            var claims = new[] {
                    new Claim("Id", user.Id.ToString()),
                    new Claim("Username", user.UserName),
                   };

            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

            var tokenOptions = new JwtSecurityToken(
                issuer: "http://localhost:5000",
                audience: "http://localhost:5000",
                claims: new List<Claim>(),
                expires: DateTime.Now.AddMinutes(5),
                signingCredentials: signinCredentials
            );

            return new AuthResponseDto
            {
                Token = new JwtSecurityTokenHandler().WriteToken(tokenOptions)
            };
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

        public async Task<AuthResponseDto> RegisterUser(RegisterDto newUser)
        {
            var user = new IdentityUser(newUser.Username);
            user.PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(user, newUser.Password);

            var result = await _userManager.CreateAsync(user);

            if (result.Succeeded)
                return GetToken(user);

            else
            {
                foreach (IdentityError e in result.Errors)
                    Console.WriteLine(e.Description);

                return null;
            }

        }


    }
}
