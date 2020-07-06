﻿using System.Collections.Generic;
using Undersea.DAL.Enums;

namespace Undersea.DAL.Models
{
    public class Upgrade
    {
        public string Id { get; set; }
        public UpgradeType UpgradeType { get; set; }
        public virtual ICollection<UpgradeAttributeJoin> UpgradeAttributes { get; set; }
        public City City { get; set; }
        public string CityId { get; set; }
        public int CurrentTurn { get; set; }
    }
}
