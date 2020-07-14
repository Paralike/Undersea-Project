using System;
using System.Collections.Generic;
using System.Text;
using Undersea.DAL.Enums;
using Undersea.DAL.Models;

namespace Undersea.BLL.DTOs.GameElemens
{
    public class UpgradeAttributeDto
    {
        public UpgradeType UpgradeType { get; set; }
        public int CoralProduction { get; set; }
        public int DefensePoints { get; set; }
        public int AttackPoints { get; set; }
        public int TaxIncrease { get; set; }
        public string Name { get; set; }
    }
}
