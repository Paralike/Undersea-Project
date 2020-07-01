using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace Undersea.BLL.DTOs
{
    class AttackDto
    {
        public JwtSecurityToken Attacker { get; set; }
        public Dictionary<JwtSecurityToken, ArmyDto> Battles { get; set; }

        
    }
}
