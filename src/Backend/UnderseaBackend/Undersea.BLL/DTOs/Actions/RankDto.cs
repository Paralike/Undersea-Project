using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace Undersea.BLL.DTOs
{
    class RankDto
    {
        public string Username { get; set; }
        public int Point { get; set; }
    }
}
