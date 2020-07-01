using System;
using System.Collections.Generic;
using System.Text;
using Undersea.DAL.Enums;

namespace Undersea.BLL.DTOs
{
    class UpgradeDto
    {
        public int Id { get; set; }

        public int TurnCount { get; set; }

        public Status Status { get; set; }

        // TODO enum melyik fejlesztés

    }
}
