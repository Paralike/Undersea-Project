using System.Collections.Generic;

namespace Undersea.BLL.DTOs
{
    public class AttackDto
    {
        public Dictionary<int, ArmyDto> Battles { get; set; }
    }
}
