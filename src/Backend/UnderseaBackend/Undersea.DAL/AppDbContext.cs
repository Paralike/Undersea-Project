using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using Undersea.DAL.Configurations;
using Undersea.DAL.Models;

namespace Undersea.DAL
{
    public class AppDbContext : IdentityDbContext<User, IdentityRole<Guid>, Guid>
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
          : base(options)
        {
            
        }

        public DbSet<Army> Armies { get; set; }
        public DbSet<Attack> Attacks { get; set; }
        public DbSet<BuildingAttribute> BuildingAttributes { get; set; }
        public DbSet<City> Cities { get; set; }
        public DbSet<Unit> Units { get; set; }
        public DbSet<Upgrade> Upgrades { get; set; }
        public DbSet<UpgradeAttribute> UpgradeAttributes { get; set; }
        public DbSet<BuildingAttributeJoin> CityBuildings { get; set; }
        public DbSet<UpgradeAttributeJoin> CityUpgrades { get; set; }
        public DbSet<ArmyUnitJoin> ArmyUnitJoins { get; set; }
        public DbSet<ApplicationLog> ApplicationLog { get; set; }
        public DbSet<Game> CurrentTurn { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new ArmyConfiguration());
            modelBuilder.ApplyConfiguration(new AttackConfiguration());
            modelBuilder.ApplyConfiguration(new CityConfiguration());
            modelBuilder.ApplyConfiguration(new UnitConfiguration());
            modelBuilder.ApplyConfiguration(new ArmyUnitJoinConfiguration());
            modelBuilder.ApplyConfiguration(new BuildingAttributeJoinConfiguration());
            modelBuilder.ApplyConfiguration(new UpgradeAttributeJoinConfiguration());
            modelBuilder.ApplyConfiguration(new LogConfiguration());
            
            
        }
    }
}
