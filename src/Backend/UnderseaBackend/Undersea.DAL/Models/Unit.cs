using System;
using Undersea.DAL.Enums;

namespace Undersea.DAL.Models
{
    public class Unit : IDbEntity
    {
        public virtual UnitType UnitType { get; set; }
        public int Price { get; set; }
        public int FoodNecessity { get; set; }
        public int PearlNecessity { get; set; }
        public int Damage { get; set; }
        public int Defense { get; set; }
        public Guid Id { get; set; }
        public string Name { get; set; }
    }
}
