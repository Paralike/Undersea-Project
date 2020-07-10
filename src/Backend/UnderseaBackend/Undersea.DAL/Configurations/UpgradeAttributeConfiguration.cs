﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Undersea.DAL.Models;

namespace Undersea.DAL.Configurations
{
    class UpgradeAttributeConfiguration : IEntityTypeConfiguration<UpgradeAttribute>
    {
        public void Configure(EntityTypeBuilder<UpgradeAttribute> builder)
        {
            builder.HasKey(u => u.Id);
        }
    }
}