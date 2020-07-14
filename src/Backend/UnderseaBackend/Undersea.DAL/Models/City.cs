﻿using System;
using System.Collections.Generic;

namespace Undersea.DAL.Models
{
    public class City : IDbEntity
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public virtual User User { get; set; }
        public Guid UserId { get; set; }
        public int PearlCount { get; set; } = 1000;
        public int PearlProduction { get; set; } = 25;
        public int CoralCount { get; set; } = 1000;
        public int CoralProduction { get; set; } = 200;
        public int Points { get; set; }
        public virtual Army AvailableArmy { get; set; }
        public Guid AvailableArmyId { get; set; }
        public virtual Upgrade Upgrades { get; set; }
        public Guid UpgradesId { get; set; }
        public virtual Building Buildings { get; set; }
        public Guid BuildingId { get; set; }
        //public virtual ICollection<Building> Buildings { get; set; }
        public virtual ICollection<Attack> Attacks { get; set; }
        public virtual ICollection<Attack> Defenses { get; set; }

        public City()
        {
            Id = Guid.NewGuid();
            AvailableArmy = new Army();
            AvailableArmyId = AvailableArmy.Id;
            AvailableArmy.CityId = Id;
            Upgrades = new Upgrade();
            UpgradesId = Upgrades.Id;
            Upgrades.City = this;
            Upgrades.CityId = Id;
            Buildings = new Building();
            BuildingId = Buildings.Id;
            Buildings.City = this;
            Buildings.CityId = Id;
        
        }
    }
}
