using System;
using System.Collections.Generic;
using System.Text;

namespace Undersea.BLL.DTOs
{
    public class ProfileDto
    {        
        public int PearlCount { get; set; }
        public int PearlProduction { get; set; }
        public int CoralCount { get; set; }
        public int CoralProduction { get; set; }
        public List<BuildingDto> Buildings { get; set; }
        public List<UpgradeDto> Upgrades { get; set; }
        public ArmyDto Army { get; set; }
    }
}
