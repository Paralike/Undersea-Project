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
            builder.HasOne(a => a.City)
                .WithOne(c => c.Upgrades)
                .HasForeignKey<Upgrade>(u=>u.CityId);
        }
    }
}
