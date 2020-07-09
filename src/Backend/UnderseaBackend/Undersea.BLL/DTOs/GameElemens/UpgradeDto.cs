using System;
using Undersea.DAL.Enums;

namespace Undersea.BLL.DTOs
{
    public class UpgradeDto
    {
        public int TurnCount { get; set; }

        public UpgradeType upgradeType { get; set; }

        public Guid CityId { get; set; }

    }
}
