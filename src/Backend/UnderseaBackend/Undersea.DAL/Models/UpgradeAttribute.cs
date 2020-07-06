using System;

namespace Undersea.DAL.Models
{
    public class UpgradeAttribute
    {
        public Guid Id { get; set; }
        public int CoralProduction { get; set; }
        public int DefensePoints { get; set; }
        public int AttackPoints { get; set; }
        public int TaxIncrease { get; set; }
    }
}
