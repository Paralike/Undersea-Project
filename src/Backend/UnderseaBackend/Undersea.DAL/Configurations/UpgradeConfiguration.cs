using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Undersea.DAL.Models;

namespace Undersea.DAL.Configurations
{
    class UpgradeConfiguration : IEntityTypeConfiguration<Upgrade>
    {
        public void Configure(EntityTypeBuilder<Upgrade> builder)
        {
            builder.HasMany(e => e.UpgradeAttributes).WithOne(c => c.Upgrade);
           /* builder.HasOne(c => c.City)
                .WithMany(u => u.Upgrades)
                .HasForeignKey(f => f.CityId);*/
        }
    }
}
