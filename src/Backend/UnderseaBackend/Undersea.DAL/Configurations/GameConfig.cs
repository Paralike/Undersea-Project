using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Undersea.DAL.Configurations
{
    class GameConfig : IEntityTypeConfiguration<Game>
    {
        public void Configure(EntityTypeBuilder<Game> entity)
        {

            entity.HasData(
                new Game
                {
                    CurrentTurn = 1
                }); 
        }
    }
}