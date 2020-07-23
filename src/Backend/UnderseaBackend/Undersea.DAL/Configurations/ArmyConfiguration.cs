using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
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

            entity.HasOne(ar => ar.Attack)
                .WithOne(atk => atk.Army);

            entity.HasMany(a => a.Units)
                .WithOne(au => au.Army)
                .HasForeignKey(a => a.ArmyId);
                
        }
    }
}
