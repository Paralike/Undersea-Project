﻿using System;
using System.Collections.Generic;
using Undersea.DAL.Enums;

namespace Undersea.DAL.Models
{
    public class Upgrade : IDbEntity
    {
        public Upgrade()
        {
            UpgradeAttributes = new HashSet<UpgradeAttributeJoin>();
        }

        public Guid Id { get; set; }
        public UpgradeType UpgradeType { get; set; }
        public virtual ICollection<UpgradeAttributeJoin> UpgradeAttributes { get; set; }
        //public virtual City City { get; set; }
        //public Guid CityId { get; set; }
        public int CurrentTurn { get; set; } = 0;
    }
}
