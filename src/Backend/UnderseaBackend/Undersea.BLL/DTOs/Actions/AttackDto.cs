using System;
using System.Collections.Generic;
using Undersea.BLL.DTOs.GameElemens;

namespace Undersea.BLL.DTOs
{
    public class AttackDto
    {
        public Guid DefenderCityId { get; set; }
        public List<ArmyUnitDto> Units { get; set; }
    }
}
