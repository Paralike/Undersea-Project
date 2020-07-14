﻿using System;
using System.Collections.Generic;
using System.Reflection.Metadata.Ecma335;

namespace Undersea.DAL.Models
{
    public class City : IDbEntity
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public User User { get; set; }
        public Guid UserId { get; set; }
        public int Inhabitants { get; set; } = 10;
        public int PearlCount { get; set; } = 1000;
        public int PearlProduction
        {
            get
            {
                return Inhabitants * 25;
            }

            set
            {
                PearlProduction = value;
            }
        }
        public int CoralCount { get; set; } = 1000;
        public int CoralProduction { get; set; } = 200;
        public int Points { get; set; }
        public virtual Army AvailableArmy { get; set; }
        public Guid AvailableArmyId { get; set; }
        public virtual Upgrade Upgrades { get; set; }
        public Guid UpgradesId { get; set; }
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
            //UpgradesId = Upgrades.Id;
            Upgrades.City = this;
            Upgrades.CityId = Id;
            Inhabitants = 10;
        }
    }
}
