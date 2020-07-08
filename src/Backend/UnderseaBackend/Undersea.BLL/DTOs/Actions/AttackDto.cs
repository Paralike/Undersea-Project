using System;

namespace Undersea.BLL.DTOs
{
    public class AttackDto
    {
        public Guid AttackerArmyId { get; set; }

        public Guid DefenderCityId { get; set; }
    }
}
