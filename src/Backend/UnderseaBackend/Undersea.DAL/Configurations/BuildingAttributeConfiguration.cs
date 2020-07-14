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
            builder.HasKey(u => u.BuildingType);
            builder.HasData(
                new BuildingAttribute
                {
                    BuildingType = Enums.BuildingType.Aramlasiranyito,
                    Resident = 50,
                    Coral = 200,
                    HostCapacity = 0,
                    Name= "Áramlásírányító"
                },
                new BuildingAttribute
                {
                    BuildingType = Enums.BuildingType.Zatonyvar,
                    Resident = 0,
                    Coral = 0,
                    HostCapacity = 200,
                    Name = "Zátonyvár"
                }
                );
        }
    }
}
