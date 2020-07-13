using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Undersea.DAL.Configurations
{
    public class GameConfiguration : IEntityTypeConfiguration<Game>
    {
        public void Configure(EntityTypeBuilder<Game> entity)
        {
            entity.HasData(
                new Game
                {
                    Id = Guid.NewGuid(),
                    CurrentTurn = 1
                }); 

            entity.HasKey(g => g.Id);
        }
    }
}