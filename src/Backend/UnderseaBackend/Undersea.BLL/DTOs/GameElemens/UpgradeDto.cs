using System;
using Undersea.DAL.Enums;

namespace Undersea.BLL.DTOs
{
    public class UpgradeDto
    {

        public UpgradeType UpgradeType { get; set; }

        public Guid CityId { get; set; }

    }
}
