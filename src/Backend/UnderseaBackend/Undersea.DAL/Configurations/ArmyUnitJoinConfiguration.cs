using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Undersea.DAL.Models;

namespace Undersea.DAL.Configurations
{
    class ArmyUnitJoinConfiguration : IEntityTypeConfiguration<ArmyUnit>
    {
        public void Configure(EntityTypeBuilder<ArmyUnit> entity)
        {
            entity.HasKey(a => new { a.ArmyId, a.UnitType });

            entity.HasOne(au => au.Army)
                .WithMany(a => a.Units)
                .HasForeignKey(au => au.ArmyId);
        }
    }
}
