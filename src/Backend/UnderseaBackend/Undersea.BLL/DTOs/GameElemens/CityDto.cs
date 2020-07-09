using System;
using System.Collections.Generic;

namespace Undersea.BLL.DTOs
{
    public class CityDto
    {
        public Guid Id;
        public int PearlCount { get; set; }
        public int PearlProduction { get; set; }
        public int CoralCount { get; set; }
        public int CoralProduction { get; set; }
        public List<BuildingDto> Buildings { get; set; } ///TODO itt ne küldjük az összeset!
        //public Dictionary<BuildingDto, int> Buildings { get; set; }
        public List<UpgradeDto> Upgrades { get; set; }
        //public Dictionary<UpgradeDto,int> Upgrades { get; set; }
        public ArmyDto Army { get; set; }
        public int ServicePay { get; set; }
        // Össz army le
        //Upgrade building hez + DTO
    }
}
