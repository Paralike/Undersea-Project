﻿using System;
using System.Collections.Generic;
using System.Text;
using Undersea.DAL.Enums;

namespace Undersea.DAL.Models
{
    public class Explorer : Unit
    {
        public Explorer()
        {
            UnitType = UnitType.Felfedezo;
            Price = 50;
            PearlNecessity = 1;
            FoodNecessity = 1;
            Damage = 0;
            Defense = 0;
            Name = "Felfedező";
        }

        public City City { get; set; }
        public Guid CityId { get; set; }
    }
}
