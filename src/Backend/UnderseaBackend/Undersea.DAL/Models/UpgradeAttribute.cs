using System;
using Undersea.DAL.Enums;

namespace Undersea.DAL.Models
{
    public class UpgradeAttribute : IDbEntity
    {
        public UpgradeType upgradeType {get;set;}
        public Guid Id { get; set; }
        public int CoralProduction { get; set; }
        public int DefensePoints { get; set; }
        public int AttackPoints { get; set; }
        public int TaxIncrease { get; set; }
        public string Name { get; set; }
    }
}
