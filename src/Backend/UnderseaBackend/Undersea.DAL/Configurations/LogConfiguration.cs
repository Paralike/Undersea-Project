﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Undersea.DAL.Models;

namespace Undersea.DAL.Configurations
{
    class LogConfiguration : IEntityTypeConfiguration<ApplicationLog>
    {
        public void Configure(EntityTypeBuilder<ApplicationLog> builder)
        {
            builder.HasKey(e => e.Id);
        }
    }
}
