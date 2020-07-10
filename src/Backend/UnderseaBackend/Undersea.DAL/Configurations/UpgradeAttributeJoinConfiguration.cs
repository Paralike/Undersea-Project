﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Runtime.CompilerServices;
using Undersea.DAL.Models;

namespace Undersea.DAL.Configurations
{
    class UpgradeAttributeJoinConfiguration : IEntityTypeConfiguration<UpgradeAttributeJoin>
    {
        public void Configure(EntityTypeBuilder<UpgradeAttributeJoin> entity)
        {
            entity.HasKey(ua => new { ua.UpgradeId, ua.UpgradeAttributeId });
            entity.HasOne(e => e.Upgrade).WithMany(c => c.UpgradeAttributes);
        }
    }
}
