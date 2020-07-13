using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Undersea.DAL.Models;

namespace Undersea.DAL.Configurations
{
    class UpgradeAttributeConfiguration : IEntityTypeConfiguration<UpgradeAttribute>
    {
        public void Configure(EntityTypeBuilder<UpgradeAttribute> builder)
        {
            builder.HasKey(u => u.upgradeType);

            builder.HasData(
                new UpgradeAttribute
                {
                    upgradeType = Enums.UpgradeType.Alkimia,
                    CoralProduction = 0,
                    DefensePoints = 0,
                    AttackPoints = 0,
                    TaxIncrease = 30,
                    Name = "Alkímia"
                },
                new UpgradeAttribute
                {
                    upgradeType = Enums.UpgradeType.Iszapkombajn,
                    CoralProduction=15,
                    DefensePoints =0,
                    AttackPoints=0,
                    TaxIncrease = 0,
                    Name = "Iszapkombájn"
                },
                new UpgradeAttribute
                {
                    upgradeType = Enums.UpgradeType.Korallfal,
                    CoralProduction=0,
                    DefensePoints =20,
                    AttackPoints=0,
                    TaxIncrease = 0,
                    Name = "Korallfal"
                },
                new UpgradeAttribute
                {
                    upgradeType = Enums.UpgradeType.Szonaragyu,
                    CoralProduction=0,
                    DefensePoints =0,
                    AttackPoints=20,
                    TaxIncrease = 0,
                    Name = "Szonárágyú"
                },
                new UpgradeAttribute
                {
                    upgradeType = Enums.UpgradeType.VizalattiHarcmuveszetek,
                    CoralProduction=0,
                    DefensePoints =10,
                    AttackPoints=10,
                    TaxIncrease = 0,
                    Name = "Vízalatti Harcműveszetek"
                }
                );
        }
    }
}
