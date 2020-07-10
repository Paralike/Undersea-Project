using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Undersea.DAL.Models;

namespace Undersea.DAL.Configurations
{
    class BuildingConfiguration : IEntityTypeConfiguration<Building>
    {
        public void Configure(EntityTypeBuilder<Building> builder)
        {
            //builder.HasMany(e => e.BuildingAttributes).WithOne(c => c.Building);
            //builder.HasOne(u => u.City).WithMany(c => c.Upgrades);
        }
    }
}
