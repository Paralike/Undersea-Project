using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace Undersea.BLL.DTOs
{
    class LoginDto
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
