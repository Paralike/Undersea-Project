using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using Undersea.DAL.Models;

namespace Undersea.DAL.Configurations
{
    class UpgradeAttributeConfiguration : IEntityTypeConfiguration<UpgradeAttribute>
    {
        public void Configure(EntityTypeBuilder<UpgradeAttribute> builder)
        {
            builder.HasKey(u => u.UpgradeType);

            builder.HasData(
                new UpgradeAttribute
                {
                    UpgradeType = Enums.UpgradeType.Iszaptraktor,
                    CoralProduction = 10,
                    DefensePoints = 0,
                    AttackPoints = 0,
                    TaxIncrease = 0,
                    Name = "Iszaptraktor"
                },
                new UpgradeAttribute
                {
                    UpgradeType = Enums.UpgradeType.Alkimia,
                    CoralProduction = 0,
                    DefensePoints = 0,
                    AttackPoints = 0,
                    TaxIncrease = 30,
                    Name = "Alkímia",
                    Id = Guid.NewGuid()
                },
                new UpgradeAttribute
                {
                    UpgradeType = Enums.UpgradeType.Iszapkombajn,
                    CoralProduction=15,
                    DefensePoints =0,
                    AttackPoints=0,
                    TaxIncrease = 0,
                    Name = "Iszapkombájn"
                },
                new UpgradeAttribute
                {
                    UpgradeType = Enums.UpgradeType.Korallfal,
                    CoralProduction=0,
                    DefensePoints =20,
                    AttackPoints=0,
                    TaxIncrease = 0,
                    Name = "Korallfal"
                },
                new UpgradeAttribute
                {
                    UpgradeType = Enums.UpgradeType.Szonaragyu,
                    CoralProduction=0,
                    DefensePoints =0,
                    AttackPoints=20,
                    TaxIncrease = 0,
                    Name = "Szonárágyú"
                },
                new UpgradeAttribute
                {
                    UpgradeType = Enums.UpgradeType.VizalattiHarcmuveszetek,
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
