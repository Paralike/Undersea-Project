using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Undersea.DAL.Models;

namespace Undersea.DAL.Configurations
{
    class BuildingAttributeJoinConfiguration : IEntityTypeConfiguration<BuildingAttributeJoin>
    {
        public void Configure(EntityTypeBuilder<BuildingAttributeJoin> entity)
        {
            entity.HasKey(ba => new { ba.BuildingId, ba.BuildingAttributeId });
        }
    }
}
