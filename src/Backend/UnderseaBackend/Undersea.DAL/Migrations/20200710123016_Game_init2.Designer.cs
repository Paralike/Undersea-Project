﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Undersea.DAL;

namespace Undersea.DAL.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20200710123016_Game_init2")]
    partial class Game_init2
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole<System.Guid>", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(256)")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasColumnType("nvarchar(256)")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<System.Guid>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("RoleId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<System.Guid>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<System.Guid>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<System.Guid>", b =>
                {
                    b.Property<Guid>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("RoleId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<System.Guid>", b =>
                {
                    b.Property<Guid>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Value")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("Undersea.DAL.Game", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("CurrentTurn")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Game");

                    b.HasData(
                        new
                        {
                            Id = new Guid("369f7f0e-1120-4b41-8587-dc9236d3dd18"),
                            CurrentTurn = 1
                        });
                });

            modelBuilder.Entity("Undersea.DAL.Models.ApplicationLog", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("DateTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("Message")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("StackTrace")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("ApplicationLog");
                });

            modelBuilder.Entity("Undersea.DAL.Models.Army", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("CityId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.ToTable("Armies");
                });

            modelBuilder.Entity("Undersea.DAL.Models.ArmyUnitJoin", b =>
                {
                    b.Property<Guid>("ArmyId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("UnitType")
                        .HasColumnType("int");

                    b.Property<Guid>("Id")
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("UnitCount")
                        .HasColumnType("int");

                    b.HasKey("ArmyId", "UnitType");

                    b.ToTable("ArmyUnitJoins");
                });

            modelBuilder.Entity("Undersea.DAL.Models.Attack", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("ArmyId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("AttackerCityId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("DefenderCityId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("ArmyId");

                    b.HasIndex("AttackerCityId");

                    b.HasIndex("DefenderCityId");

                    b.ToTable("Attacks");
                });

            modelBuilder.Entity("Undersea.DAL.Models.Building", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("BuildingType")
                        .HasColumnType("int");

                    b.Property<Guid>("CityId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("CurrentTurn")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("CityId");

                    b.ToTable("Building");
                });

            modelBuilder.Entity("Undersea.DAL.Models.BuildingAttribute", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("Coral")
                        .HasColumnType("int");

                    b.Property<int>("HostCapacity")
                        .HasColumnType("int");

                    b.Property<int>("Resident")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("BuildingAttributes");
                });

            modelBuilder.Entity("Undersea.DAL.Models.BuildingAttributeJoin", b =>
                {
                    b.Property<Guid>("BuildingId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("BuildingAttributeId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("BuildingId", "BuildingAttributeId");

                    b.HasIndex("BuildingAttributeId");

                    b.ToTable("CityBuildings");
                });

            modelBuilder.Entity("Undersea.DAL.Models.City", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("AvailableArmyId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("CoralCount")
                        .HasColumnType("int");

                    b.Property<int>("CoralProduction")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PearlCount")
                        .HasColumnType("int");

                    b.Property<int>("PearlProduction")
                        .HasColumnType("int");

                    b.Property<int>("Points")
                        .HasColumnType("int");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("AvailableArmyId")
                        .IsUnique();

                    b.HasIndex("UserId");

                    b.ToTable("Cities");
                });

            modelBuilder.Entity("Undersea.DAL.Models.Unit", b =>
                {
                    b.Property<int>("UnitType")
                        .HasColumnType("int");

                    b.Property<int>("Damage")
                        .HasColumnType("int");

                    b.Property<int>("Defense")
                        .HasColumnType("int");

                    b.Property<int>("FoodNecessity")
                        .HasColumnType("int");

                    b.Property<Guid>("Id")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PearlNecessity")
                        .HasColumnType("int");

                    b.Property<int>("Price")
                        .HasColumnType("int");

                    b.HasKey("UnitType");

                    b.ToTable("Units");

                    b.HasData(
                        new
                        {
                            UnitType = 1,
                            Damage = 2,
                            Defense = 6,
                            FoodNecessity = 1,
                            Id = new Guid("00000000-0000-0000-0000-000000000000"),
                            Name = "Csatacsikó",
                            PearlNecessity = 1,
                            Price = 50
                        },
                        new
                        {
                            UnitType = 0,
                            Damage = 6,
                            Defense = 2,
                            FoodNecessity = 1,
                            Id = new Guid("00000000-0000-0000-0000-000000000000"),
                            Name = "Rohamfóka",
                            PearlNecessity = 1,
                            Price = 50
                        },
                        new
                        {
                            UnitType = 2,
                            Damage = 5,
                            Defense = 5,
                            FoodNecessity = 2,
                            Id = new Guid("00000000-0000-0000-0000-000000000000"),
                            Name = "Lézercápa",
                            PearlNecessity = 3,
                            Price = 100
                        });
                });

            modelBuilder.Entity("Undersea.DAL.Models.Upgrade", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("CityId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("CurrentTurn")
                        .HasColumnType("int");

                    b.Property<int>("UpgradeType")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("CityId");

                    b.ToTable("Upgrades");
                });

            modelBuilder.Entity("Undersea.DAL.Models.UpgradeAttribute", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("AttackPoints")
                        .HasColumnType("int");

                    b.Property<int>("CoralProduction")
                        .HasColumnType("int");

                    b.Property<int>("DefensePoints")
                        .HasColumnType("int");

                    b.Property<int>("TaxIncrease")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("UpgradeAttributes");
                });

            modelBuilder.Entity("Undersea.DAL.Models.UpgradeAttributeJoin", b =>
                {
                    b.Property<Guid>("UpgradeId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("UpgradeAttributeId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("UpgradeId", "UpgradeAttributeId");

                    b.HasIndex("UpgradeAttributeId");

                    b.ToTable("CityUpgrades");
                });

            modelBuilder.Entity("Undersea.DAL.Models.User", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("int");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(256)")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("bit");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("bit");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("datetimeoffset");

                    b.Property<string>("NormalizedEmail")
                        .HasColumnType("nvarchar(256)")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .HasColumnType("nvarchar(256)")
                        .HasMaxLength(256);

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("bit");

                    b.Property<string>("UserName")
                        .HasColumnType("nvarchar(256)")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<System.Guid>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole<System.Guid>", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<System.Guid>", b =>
                {
                    b.HasOne("Undersea.DAL.Models.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<System.Guid>", b =>
                {
                    b.HasOne("Undersea.DAL.Models.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<System.Guid>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole<System.Guid>", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Undersea.DAL.Models.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<System.Guid>", b =>
                {
                    b.HasOne("Undersea.DAL.Models.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Undersea.DAL.Models.ArmyUnitJoin", b =>
                {
                    b.HasOne("Undersea.DAL.Models.Army", "Army")
                        .WithMany("Units")
                        .HasForeignKey("ArmyId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Undersea.DAL.Models.Attack", b =>
                {
                    b.HasOne("Undersea.DAL.Models.Army", "Army")
                        .WithMany("Attacks")
                        .HasForeignKey("ArmyId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("Undersea.DAL.Models.City", "AttackerCity")
                        .WithMany("Attacks")
                        .HasForeignKey("AttackerCityId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("Undersea.DAL.Models.City", "DefenderCity")
                        .WithMany()
                        .HasForeignKey("DefenderCityId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Undersea.DAL.Models.Building", b =>
                {
                    b.HasOne("Undersea.DAL.Models.City", "City")
                        .WithMany("Buildings")
                        .HasForeignKey("CityId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Undersea.DAL.Models.BuildingAttributeJoin", b =>
                {
                    b.HasOne("Undersea.DAL.Models.BuildingAttribute", "BuildingAttribute")
                        .WithMany("BuildingAttributes")
                        .HasForeignKey("BuildingAttributeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Undersea.DAL.Models.Building", "Building")
                        .WithMany("BuildingAttributes")
                        .HasForeignKey("BuildingId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Undersea.DAL.Models.City", b =>
                {
                    b.HasOne("Undersea.DAL.Models.Army", "AvailableArmy")
                        .WithOne("City")
                        .HasForeignKey("Undersea.DAL.Models.City", "AvailableArmyId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Undersea.DAL.Models.User", "User")
                        .WithMany("Cities")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Undersea.DAL.Models.Upgrade", b =>
                {
                    b.HasOne("Undersea.DAL.Models.City", "City")
                        .WithMany("Upgrades")
                        .HasForeignKey("CityId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Undersea.DAL.Models.UpgradeAttributeJoin", b =>
                {
                    b.HasOne("Undersea.DAL.Models.UpgradeAttribute", "UpgradeAttribute")
                        .WithMany()
                        .HasForeignKey("UpgradeAttributeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Undersea.DAL.Models.Upgrade", "Upgrade")
                        .WithMany("UpgradeAttributes")
                        .HasForeignKey("UpgradeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}