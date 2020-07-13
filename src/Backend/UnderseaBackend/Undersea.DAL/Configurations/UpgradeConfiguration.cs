using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;
using Undersea.DAL.Models;

namespace Undersea.DAL.Configurations
{
    class UpgradeConfiguration : IEntityTypeConfiguration<Upgrade>
    {
        public void Configure(EntityTypeBuilder<Upgrade> builder)
        {
            builder.HasKey(u => u.Id);
            //builder.HasMany(e => e.UpgradeAttributes).WithOne(c => c.Upgrade);
            builder.HasMany(e => e.UpgradeAttributes).WithOne(c => c.upgradeType);
            builder.HasOne(u => u.City).WithMany(c => c.Upgrades);
            builder.HasData(
                new UpgradeAttribute
                {
                    upgradeType = Enums.UpgradeType.Alkimia,
                    CoralProduction = 10,
                    DefensePoints = 0,
                    AttackPoints = 0,
                    TaxIncrease =0
                });
        }
    }
}
