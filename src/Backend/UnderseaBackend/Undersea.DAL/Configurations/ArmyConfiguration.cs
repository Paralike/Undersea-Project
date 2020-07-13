using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using Undersea.DAL.Models;

namespace Undersea.DAL.Configurations
{
    class ArmyConfiguration : IEntityTypeConfiguration<Army>
    {
        public void Configure(EntityTypeBuilder<Army> entity)
        {
            entity.HasOne(a => a.City)
            .WithOne(c => c.AvailableArmy)
            .HasForeignKey<Army>(a => a.CityId);
        }
    }
}
