using System.Collections.Generic;

namespace Undersea.BLL.DTOs
{
    public class CityDto
    {
        //TODO ID
        public int PearlCount { get; set; }
        public int PearlProduction { get; set; }
        public int CoralCount { get; set; }
        public int CoralProduction { get; set; }
        public List<BuildingDto> Buildings { get; set; } ///TODO itt ne küldjük az összeset!
        public List<UpgradeDto> Upgrades { get; set; }
        public ArmyDto Army { get; set; }
        //TODO Zsold, Össz army le
        //Upgrade building hez + DTO
    }
}
