using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;
using Undersea.DAL.Models;

namespace Undersea.DAL.Configurations
{
    class BuildingAttributeConfiguration : IEntityTypeConfiguration<BuildingAttribute>
    {
        public void Configure(EntityTypeBuilder<BuildingAttribute> builder)
        {
           // builder.HasKey(u => u.);

        }
    }
}
