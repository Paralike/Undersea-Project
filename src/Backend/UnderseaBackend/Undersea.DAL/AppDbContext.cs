using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Undersea.DAL.Models;

namespace Undersea.DAL
{
    public class AppDbContext : IdentityDbContext<User>
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
          : base(options)
        {
        }

        public DbSet<Army> Army { get; set; }
        public DbSet<Attack> Attack { get; set; }
        public DbSet<BuildingAttributes> BuildingAttributes { get; set; }
        public DbSet<City> Profile { get; set; }
        public DbSet<Unit> Unit { get; set; }
        public DbSet<Upgrade> Upgrade { get; set; }
        public DbSet<UpgradeAttributes> UpgradeAttributes { get; set; }
        public DbSet<BuildingAttributeJoin> CityBuildings { get; set; }
        public DbSet<UpgradeAttributeJoin> CityUpgrades { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=localhost\\SQLEXPRESS;Database=undersea;Trusted_Connection=True;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Army>(entity =>
            {
                entity.HasOne(a => a.City)
                    .WithMany(c => c.Armies)
                    .HasForeignKey(a => a.CityId);
            });

            modelBuilder.Entity<Attack>(entity =>
            {
                entity.HasOne(a => a.Army)
                    .WithMany(a => a.Attacks)
                    .HasForeignKey(a => a.ArmyId);

                entity.HasOne(a => a.AttackerCity)
                .WithMany(c => c.Attacks)
                .HasForeignKey(a => a.AttackerCityId);
            });

            modelBuilder.Entity<City>(entity =>
            {
                entity.HasKey(c => c.UserId);

                entity.HasOne(c => c.User)
                .WithMany(u => u.Cities)
                .HasForeignKey(u => u.UserId);

                entity.HasMany(c => c.Armies)
                .WithOne(a => a.City)
                .HasForeignKey(a => a.CityId);

                entity.HasMany(c => c.Upgrades)
                .WithOne(u => u.City)
                .HasForeignKey(u => u.CityId);

                entity.HasMany(c => c.Buildings)
                .WithOne(b => b.City)
                .HasForeignKey(b => b.CityId);
            });

            modelBuilder.Entity<Unit>(entity =>
            {
                entity.HasKey(e => e.UnitType);
            });

            modelBuilder.Entity<BuildingAttributeJoin>()
                .HasKey(ba => new { ba.BuildingId, ba.BuildingAttributeId });

            modelBuilder.Entity<UpgradeAttributeJoin>()
                .HasKey(ua => new { ua.UpgradeId, ua.UpgradeAttributeId });

        }
    }
}
