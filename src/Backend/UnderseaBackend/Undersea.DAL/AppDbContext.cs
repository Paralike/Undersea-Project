using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Undersea.DAL.Models;

namespace Undersea.DAL
{
    public class AppDbContext : IdentityDbContext<IdentityUser>
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
          : base(options)
        {
            Database.EnsureCreated();
        }


        //public virtual DbSet<Army> Army { get; set; }
        //public virtual DbSet<Attack> Attack { get; set; }
        //public virtual DbSet<BuildingAttributeSwitch> BuildingAttributeSwitch { get; set; }
        //public virtual DbSet<BuildingAttributes> BuildingAttributes { get; set; }
        //public virtual DbSet<Profile> Profile { get; set; }
        //public virtual DbSet<Unit> Unit { get; set; }
        //public virtual DbSet<UnitSwitch> UnitSwitch { get; set; }
        //public virtual DbSet<Upgrade> Upgrade { get; set; }
        //public virtual DbSet<UpgradeAttributeSwitch> UpgradeAttributeSwitch { get; set; }
        //public virtual DbSet<UpgradeAttributes> UpgradeAttributes { get; set; }
        //public virtual DbSet<UserUpgrade> UserUpgrade { get; set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Army>(entity =>
        //    {
        //        entity.Property(e => e.UserId).HasColumnName("User_Id");

        //        entity.HasOne(d => d.User)
        //            .WithMany(p => p.Army)
        //            .HasForeignKey(d => d.UserId)
        //            .HasConstraintName("FK__Army__User_Id__284DF453");
        //    });


        //    modelBuilder.Entity<Attack>(entity =>
        //    {
        //        entity.Property(e => e.TamadoUserId).HasColumnName("Tamado_User_Id");

        //        entity.Property(e => e.VedoUserId).HasColumnName("Vedo_User_Id");

        //        entity.HasOne(d => d.ArmyNavigation)
        //            .WithMany(p => p.Attack)
        //            .HasForeignKey(d => d.Army)
        //            .HasConstraintName("FK__Attack__Army__2942188C");
        //    });

        //    modelBuilder.Entity<BuildingAttributeSwitch>(entity =>
        //    {
        //        entity.ToTable("Building_Attribute_Switch");

        //        entity.Property(e => e.BuildingId).HasColumnName("Building_Id");

        //        entity.HasOne(d => d.AttributeNavigation)
        //            .WithMany(p => p.BuildingAttributeSwitch)
        //            .HasForeignKey(d => d.Attribute)
        //            .HasConstraintName("FK__Building___Attri__23893F36");
        //    });

        //    modelBuilder.Entity<BuildingAttributes>(entity =>
        //    {
        //        entity.ToTable("Building_Attributes");

        //        entity.Property(e => e.Coral).HasColumnName("coral");

        //        entity.Property(e => e.Host).HasColumnName("host");

        //        entity.Property(e => e.RezIdent).HasColumnName("rezIdent");
        //    });

        //    modelBuilder.Entity<Profile>(entity =>
        //    {
        //        entity.HasKey(e => e.UserId)
        //            .HasName("PK__Profile__206D9170132CF046");

        //        entity.Property(e => e.UserId).HasColumnName("User_Id");

        //        entity.Property(e => e.Coralcount).HasColumnName("coralcount");

        //        entity.Property(e => e.Coralprod).HasColumnName("coralprod");

        //        entity.Property(e => e.Pearlcount).HasColumnName("pearlcount");

        //        entity.Property(e => e.Pearlprod).HasColumnName("pearlprod");

        //        entity.Property(e => e.Point).HasColumnName("point");
        //    });

        //    modelBuilder.Entity<Unit>(entity =>
        //    {
        //        entity.Property(e => e.Damage).HasColumnName("damage");

        //        entity.Property(e => e.Def).HasColumnName("def");

        //        entity.Property(e => e.FoodNecessity).HasColumnName("food_necessity");

        //        entity.Property(e => e.Price).HasColumnName("price");

        //        entity.Property(e => e.UnitType)
        //            .HasColumnName("Unit_type")
        //            .HasMaxLength(255);
        //    });

        //    modelBuilder.Entity<UnitSwitch>(entity =>
        //    {
        //        entity.ToTable("Unit_Switch");

        //        entity.Property(e => e.ArmyId).HasColumnName("Army_Id");

        //        entity.Property(e => e.UnitId).HasColumnName("Unit_Id");

        //        entity.HasOne(d => d.Unit)
        //            .WithMany(p => p.UnitSwitch)
        //            .HasForeignKey(d => d.UnitId)
        //            .HasConstraintName("FK__Unit_Swit__Unit___2D12A970");
        //    });

        //    modelBuilder.Entity<Upgrade>(entity =>
        //    {
        //        entity.Property(e => e.UpgradeType).HasColumnName("Upgrade_type");
        //    });

        //    modelBuilder.Entity<UpgradeAttributeSwitch>(entity =>
        //    {
        //        entity.ToTable("Upgrade_Attribute_Switch");

        //        entity.Property(e => e.UpgradeId).HasColumnName("Upgrade_Id");

        //        entity.HasOne(d => d.AttributeNavigation)
        //            .WithMany(p => p.UpgradeAttributeSwitch)
        //            .HasForeignKey(d => d.Attribute)
        //            .HasConstraintName("FK__Upgrade_A__Attri__2759D01A");

        //        entity.HasOne(d => d.Upgrade)
        //            .WithMany(p => p.UpgradeAttributeSwitch)
        //            .HasForeignKey(d => d.UpgradeId)
        //            .HasConstraintName("FK__Upgrade_A__Upgra__2665ABE1");
        //    });

        //    modelBuilder.Entity<UpgradeAttributes>(entity =>
        //    {
        //        entity.ToTable("Upgrade_Attributes");

        //        entity.Property(e => e.AttackPoints).HasColumnName("Attack_points");

        //        entity.Property(e => e.CoralProduction).HasColumnName("coral_production");

        //        entity.Property(e => e.DefensePoints).HasColumnName("defense_points");

        //        entity.Property(e => e.TaxIncrese).HasColumnName("tax_increse");
        //    });

        //    modelBuilder.Entity<UserUpgrade>(entity =>
        //    {
        //        entity.ToTable("User_Upgrade");

        //        entity.Property(e => e.Status)
        //            .HasColumnName("status")
        //            .HasMaxLength(255);

        //        entity.Property(e => e.TurnCount).HasColumnName("turn_count");

        //        entity.Property(e => e.UpgradeId).HasColumnName("Upgrade_Id");

        //        entity.Property(e => e.UserId).HasColumnName("User_Id");

        //        entity.HasOne(d => d.User)
        //            .WithMany(p => p.UserUpgrade)
        //            .HasForeignKey(d => d.UserId)
        //            .HasConstraintName("FK__User_Upgr__User___247D636F");
        //    });

        //}


    }
}
