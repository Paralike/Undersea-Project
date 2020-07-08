using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Undersea.DAL.Models;

namespace Undersea.DAL.Configurations
{
    class UpgradeAttributeJoinConfiguration : IEntityTypeConfiguration<UpgradeAttributeJoin>
    {
        public void Configure(EntityTypeBuilder<UpgradeAttributeJoin> entity)
        {
            entity.HasKey(ua => new { ua.UpgradeId, ua.UpgradeAttributeId });
        }
    }
}
