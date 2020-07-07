using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Undersea.DAL.Models;

namespace Undersea.DAL.Configurations
{
    class ArmyConfiguration : IEntityTypeConfiguration<Army>
    {
        public void Configure(EntityTypeBuilder<Army> builder)
        {
            builder.HasOne(a => a.City)
                    .WithMany(c => c.Armies)
                    .HasForeignKey(a => a.CityId);
        }
    }
}
