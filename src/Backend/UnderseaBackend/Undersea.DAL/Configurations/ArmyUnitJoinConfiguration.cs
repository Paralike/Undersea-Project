using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Undersea.DAL.Models;

namespace Undersea.DAL.Configurations
{
    class ArmyUnitJoinConfiguration : IEntityTypeConfiguration<ArmyUnitJoin>
    {
        public void Configure(EntityTypeBuilder<ArmyUnitJoin> entity)
        {
            entity.HasKey(a => new { a.ArmyId, a.UnitType });
        }
    }
}
