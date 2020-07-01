using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace Undersea.BLL.DTOs
{
    class LoginDto
    {
        public JwtSecurityToken Token { get; set; }
    }
}
