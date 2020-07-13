using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Undersea.DAL.Models;

namespace Undersea.DAL.Configurations
{
    class UpgradeConfiguration : IEntityTypeConfiguration<Upgrade>
    {
        public void Configure(EntityTypeBuilder<Upgrade> builder)
        {
            builder.HasMany(e => e.UpgradeAttributes).WithOne(c => c.Upgrade);
            builder.HasOne(u => u.City).WithMany(c => c.Upgrades);
        }
    }
}
