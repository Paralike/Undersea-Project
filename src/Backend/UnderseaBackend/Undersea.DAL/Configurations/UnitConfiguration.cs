using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Undersea.DAL.Enums;
using Undersea.DAL.Models;

namespace Undersea.DAL.Configurations
{
    class UnitConfiguration : IEntityTypeConfiguration<Unit>
    {
        public void Configure(EntityTypeBuilder<Unit> entity)
        {
            entity.HasKey(e => e.UnitType);

            entity.HasData(
                new Unit
                {
                    UnitType = UnitType.Csatacsiko,
                    Damage = 2,
                    Defense = 6,
                    Price = 50,
                    FoodNecessity = 1,
                    PearlNecessity = 1,
                    Name = "Csatacsikó"
                },
                new Unit
                {
                    UnitType = UnitType.Rohamfoka,
                    Damage = 6,
                    Defense = 2,
                    Price = 50,
                    FoodNecessity = 1,
                    PearlNecessity = 1,
                    Name = "Rohamfóka"
                },
                new Unit
                {
                    UnitType = UnitType.Lezercapa,
                    Damage = 5,
                    Defense = 5,
                    Price = 100,
                    FoodNecessity = 2,
                    PearlNecessity = 3,
                    Name = "Lézercápa"
                },
                new Unit
                {
                    UnitType = UnitType.Hadvezer,
                    Damage = 0,
                    Defense = 0,
                    Price = 200,
                    FoodNecessity = 2,
                    PearlNecessity = 4,
                    Name = "Hadvezér"
                }
                );


        }
    }
}
