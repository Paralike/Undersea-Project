using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Undersea.DAL.Models;

namespace Undersea.DAL.Configurations
{
    class CityConfiguration : IEntityTypeConfiguration<City>
    {
        public void Configure(EntityTypeBuilder<City> entity)
        {
            entity.HasKey(c => c.UserId);

            entity.HasOne(c => c.User)
            .WithMany(u => u.Cities)
            .HasForeignKey(u => u.UserId);

            entity.HasMany(c => c.Armies)
            .WithOne(a => a.City)
            .HasForeignKey(a => a.CityId);

            entity.HasMany(c => c.Upgrades)
            .WithOne(u => u.City)
            .HasForeignKey(u => u.CityId);

            entity.HasMany(c => c.Buildings)
            .WithOne(b => b.City)
            .HasForeignKey(b => b.CityId);
        }
    }
}
