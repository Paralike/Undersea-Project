﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Undersea.DAL.Models;

namespace Undersea.DAL.Configurations
{
    class CityConfiguration : IEntityTypeConfiguration<City>
    {
        public void Configure(EntityTypeBuilder<City> entity)
        {
            //entity.HasKey(c => c.UserId);

            entity.HasOne(c => c.User)
            .WithMany(u => u.Cities)
            .HasForeignKey(u => u.UserId);

            entity.HasOne(c => c.AvailableArmy)
            .WithOne(a => a.City)
            .HasForeignKey<City>(c => c.AvailableArmyId);

            entity.HasOne(c => c.Upgrades)
                .WithOne(a => a.City)
                .HasForeignKey<City>(c => c.UpgradesId);


            /*entity.HasMany(c => c.Buildings)
            .WithOne(b => b.City)
            .HasForeignKey(b => b.CityId);*/
        }
    }
}
