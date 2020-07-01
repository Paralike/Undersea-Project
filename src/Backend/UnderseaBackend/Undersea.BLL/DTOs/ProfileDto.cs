using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace Undersea.BLL.DTOs
{
    class ProfileDto
    {
        public JwtSecurityToken Token { get; set; }
        public int PearlCount { get; set; }
        public int PearlProduction { get; set; }
        public int CoralCount { get; set; }
        public int CoralProduction { get; set; }
        public List<BuildingDto> Buildings { get; set; }
        public List<UpgradeDto> Upgrades { get; set; }
        public ArmyDto Army { get; set; }
    }
}
