using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Undersea.DAL.Models;

namespace Undersea.DAL.Configurations
{
    public class ExplorerConfiguration : IEntityTypeConfiguration<Explorer>
    {
        public void Configure(EntityTypeBuilder<Explorer> entity)
        {
            entity.HasOne(e => e.City)
                .WithMany(c => c.Explorers)
                .HasForeignKey(e => e.CityId);

            entity.HasData(new Explorer());
        }
    }
}
