using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace Undersea.BLL.DTOs
{
    class AttackDto
    {
        public Dictionary<int, ArmyDto> Battles { get; set; }        
    }
}
