using System;
using Undersea.DAL.Enums;

namespace Undersea.BLL.DTOs
{
    public class UpgradeDto
    {

        public UpgradeType UpgradeType { get; set; }
        public int CurrentTurn { get; set; }
        public Status Status { get; set; }

    }
}
