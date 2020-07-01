using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace Undersea.BLL.DTOs
{
    class RankDto
    {
        public JwtSecurityToken Token { get; set; }
        public int Point { get; set; }
    }
}
