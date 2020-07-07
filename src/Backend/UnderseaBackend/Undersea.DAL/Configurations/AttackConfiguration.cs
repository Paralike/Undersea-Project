using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Undersea.DAL.Models;

namespace Undersea.DAL.Configurations
{
    class AttackConfiguration : IEntityTypeConfiguration<Attack>
    {
        public void Configure(EntityTypeBuilder<Attack> entity)
        {
            entity.HasOne(a => a.Army)
                    .WithMany(a => a.Attacks)
                    .HasForeignKey(a => a.ArmyId)
                    .OnDelete(DeleteBehavior.NoAction);

            entity.HasOne(a => a.AttackerCity)
                .WithMany(c => c.Attacks)
                .HasForeignKey(a => a.AttackerCityId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
