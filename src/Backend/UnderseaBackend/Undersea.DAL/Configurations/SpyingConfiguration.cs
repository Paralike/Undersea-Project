using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Undersea.DAL.Models;

namespace Undersea.DAL.Configurations
{
    class SpyingConfiguration : IEntityTypeConfiguration<Spying>
    {
        public void Configure(EntityTypeBuilder<Spying> entity)
        {
            entity.HasOne(s => s.AttackerCity)
                    .WithMany(c => c.SpyingsFor)
                    .HasForeignKey(s => s.AttackerCityId)
                    .OnDelete(DeleteBehavior.NoAction);

            entity.HasOne(s => s.DefenderCity)
                    .WithMany(c => c.SpyingsAgainst)
                    .HasForeignKey(s => s.DefenderCityId)
                    .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
