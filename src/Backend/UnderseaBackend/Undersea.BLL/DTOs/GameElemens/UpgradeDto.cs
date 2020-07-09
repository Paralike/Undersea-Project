using System;
using Undersea.DAL.Enums;

namespace Undersea.BLL.DTOs
{
    public class UpgradeDto
    {
        public Guid Id { get; set; }

        public int TurnCount { get; set; }

        public Status Status { get; set; }

        public Guid CityId { get; set; }

    }
}
