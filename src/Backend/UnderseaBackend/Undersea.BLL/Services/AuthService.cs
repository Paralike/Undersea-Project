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
using Undersea.DAL.Models;

namespace Undersea.BLL.Services
{
    public class AuthService : IAuthService
    {
        private UserManager<User> _userManager;
        private SignInManager<User> _signInManager;

        public AuthService(UserManager<User> userManager, SignInManager<User> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public AuthResponseDto GetToken(User user)
        {
            if (user == null)
                return null;

            var claims = new[] {
                    new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                    new Claim(ClaimTypes.Name, user.UserName),
                   };

            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

            var tokenOptions = new JwtSecurityToken(
                issuer: "http://localhost:5000",
                audience: "http://localhost:5000",
                claims: claims,
                expires: DateTime.Now.AddMinutes(5),
                signingCredentials: signinCredentials
            );

            return new AuthResponseDto
            {
                Token = new JwtSecurityTokenHandler().WriteToken(tokenOptions)
            };
        }

        public async Task<User> GetUser(LoginDto user)
        {
            var _user = await _userManager.FindByNameAsync(user.Username);

            if (_user == null)
            {
                return null;
            }

            var result = await _signInManager.PasswordSignInAsync(_user, user.Password, true, false);

            if (result.Succeeded)
                return _user;

            else
                return null;
        }

        public async Task<AuthResponseDto> RegisterUser(RegisterDto newUser)
        {
            var user = new User(newUser.Username, newUser.City);
            user.PasswordHash = new PasswordHasher<User>().HashPassword(user, newUser.Password);

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
