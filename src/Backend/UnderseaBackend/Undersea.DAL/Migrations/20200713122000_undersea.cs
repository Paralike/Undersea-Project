using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Undersea.DAL.Migrations
{
    public partial class undersea : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ApplicationLog",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    StackTrace = table.Column<string>(nullable: true),
                    DateTime = table.Column<DateTime>(nullable: false),
                    Message = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApplicationLog", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Armies",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CityId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Armies", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    UserName = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(maxLength: 256, nullable: true),
                    Email = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(nullable: false),
                    PasswordHash = table.Column<string>(nullable: true),
                    SecurityStamp = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(nullable: false),
                    TwoFactorEnabled = table.Column<bool>(nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(nullable: true),
                    LockoutEnabled = table.Column<bool>(nullable: false),
                    AccessFailedCount = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BuildingAttributes",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Resident = table.Column<int>(nullable: false),
                    Coral = table.Column<int>(nullable: false),
                    HostCapacity = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BuildingAttributes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Units",
                columns: table => new
                {
                    UnitType = table.Column<int>(nullable: false),
                    Price = table.Column<int>(nullable: false),
                    FoodNecessity = table.Column<int>(nullable: false),
                    PearlNecessity = table.Column<int>(nullable: false),
                    Damage = table.Column<int>(nullable: false),
                    Defense = table.Column<int>(nullable: false),
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Units", x => x.UnitType);
                });

            migrationBuilder.CreateTable(
                name: "UpgradeAttributes",
                columns: table => new
                {
                    upgradeType = table.Column<int>(nullable: false),
                    Id = table.Column<Guid>(nullable: false),
                    CoralProduction = table.Column<int>(nullable: false),
                    DefensePoints = table.Column<int>(nullable: false),
                    AttackPoints = table.Column<int>(nullable: false),
                    TaxIncrease = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UpgradeAttributes", x => x.upgradeType);
                });

            migrationBuilder.CreateTable(
                name: "ArmyUnitJoins",
                columns: table => new
                {
                    ArmyId = table.Column<Guid>(nullable: false),
                    UnitType = table.Column<int>(nullable: false),
                    UnitCount = table.Column<int>(nullable: false),
                    Id = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ArmyUnitJoins", x => new { x.ArmyId, x.UnitType });
                    table.ForeignKey(
                        name: "FK_ArmyUnitJoins_Armies_ArmyId",
                        column: x => x.ArmyId,
                        principalTable: "Armies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleId = table.Column<Guid>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<Guid>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(nullable: false),
                    ProviderKey = table.Column<string>(nullable: false),
                    ProviderDisplayName = table.Column<string>(nullable: true),
                    UserId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<Guid>(nullable: false),
                    RoleId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<Guid>(nullable: false),
                    LoginProvider = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Cities",
                columns: table => new
                {
                    UserId = table.Column<Guid>(nullable: false),
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    PearlCount = table.Column<int>(nullable: false),
                    PearlProduction = table.Column<int>(nullable: false),
                    CoralCount = table.Column<int>(nullable: false),
                    CoralProduction = table.Column<int>(nullable: false),
                    Points = table.Column<int>(nullable: false),
                    AvailableArmyId = table.Column<Guid>(nullable: false),
                    UpgradesId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cities", x => x.UserId);
                    table.ForeignKey(
                        name: "FK_Cities_Armies_AvailableArmyId",
                        column: x => x.AvailableArmyId,
                        principalTable: "Armies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Cities_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Attacks",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    AttackerCityId = table.Column<Guid>(nullable: false),
                    DefenderCityId = table.Column<Guid>(nullable: false),
                    ArmyId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Attacks", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Attacks_Armies_ArmyId",
                        column: x => x.ArmyId,
                        principalTable: "Armies",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Attacks_Cities_AttackerCityId",
                        column: x => x.AttackerCityId,
                        principalTable: "Cities",
                        principalColumn: "UserId");
                    table.ForeignKey(
                        name: "FK_Attacks_Cities_DefenderCityId",
                        column: x => x.DefenderCityId,
                        principalTable: "Cities",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Building",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    BuildingType = table.Column<int>(nullable: false),
                    CityId = table.Column<Guid>(nullable: false),
                    CurrentTurn = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Building", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Building_Cities_CityId",
                        column: x => x.CityId,
                        principalTable: "Cities",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Upgrades",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CityId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Upgrades", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Upgrades_Cities_CityId",
                        column: x => x.CityId,
                        principalTable: "Cities",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CityBuildingsJoin",
                columns: table => new
                {
                    BuildingAttributeId = table.Column<Guid>(nullable: false),
                    BuildingId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CityBuildingsJoin", x => new { x.BuildingId, x.BuildingAttributeId });
                    table.ForeignKey(
                        name: "FK_CityBuildingsJoin_BuildingAttributes_BuildingAttributeId",
                        column: x => x.BuildingAttributeId,
                        principalTable: "BuildingAttributes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CityBuildingsJoin_Building_BuildingId",
                        column: x => x.BuildingId,
                        principalTable: "Building",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CityUpgradesJoin",
                columns: table => new
                {
                    UpgradeAttributeId = table.Column<Guid>(nullable: false),
                    UpgradeId = table.Column<Guid>(nullable: false),
                    UpgradeAttributeupgradeType = table.Column<int>(nullable: false),
                    upgradeType = table.Column<int>(nullable: false),
                    CurrentTurn = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CityUpgradesJoin", x => new { x.UpgradeId, x.UpgradeAttributeId });
                    table.ForeignKey(
                        name: "FK_CityUpgradesJoin_UpgradeAttributes_UpgradeAttributeupgradeType",
                        column: x => x.UpgradeAttributeupgradeType,
                        principalTable: "UpgradeAttributes",
                        principalColumn: "upgradeType",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CityUpgradesJoin_Upgrades_UpgradeId",
                        column: x => x.UpgradeId,
                        principalTable: "Upgrades",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Units",
                columns: new[] { "UnitType", "Damage", "Defense", "FoodNecessity", "Id", "Name", "PearlNecessity", "Price" },
                values: new object[,]
                {
                    { 1, 2, 6, 1, new Guid("00000000-0000-0000-0000-000000000000"), "Csatacsikó", 1, 50 },
                    { 0, 6, 2, 1, new Guid("00000000-0000-0000-0000-000000000000"), "Rohamfóka", 1, 50 },
                    { 2, 5, 5, 2, new Guid("00000000-0000-0000-0000-000000000000"), "Lézercápa", 3, 100 }
                });

            migrationBuilder.InsertData(
                table: "UpgradeAttributes",
                columns: new[] { "upgradeType", "AttackPoints", "CoralProduction", "DefensePoints", "Id", "TaxIncrease" },
                values: new object[] { 5, 0, 10, 0, new Guid("00000000-0000-0000-0000-000000000000"), 0 });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Attacks_ArmyId",
                table: "Attacks",
                column: "ArmyId");

            migrationBuilder.CreateIndex(
                name: "IX_Attacks_AttackerCityId",
                table: "Attacks",
                column: "AttackerCityId");

            migrationBuilder.CreateIndex(
                name: "IX_Attacks_DefenderCityId",
                table: "Attacks",
                column: "DefenderCityId");

            migrationBuilder.CreateIndex(
                name: "IX_Building_CityId",
                table: "Building",
                column: "CityId");

            migrationBuilder.CreateIndex(
                name: "IX_Cities_AvailableArmyId",
                table: "Cities",
                column: "AvailableArmyId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_CityBuildingsJoin_BuildingAttributeId",
                table: "CityBuildingsJoin",
                column: "BuildingAttributeId");

            migrationBuilder.CreateIndex(
                name: "IX_CityUpgradesJoin_UpgradeAttributeupgradeType",
                table: "CityUpgradesJoin",
                column: "UpgradeAttributeupgradeType");

            migrationBuilder.CreateIndex(
                name: "IX_Upgrades_CityId",
                table: "Upgrades",
                column: "CityId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ApplicationLog");

            migrationBuilder.DropTable(
                name: "ArmyUnitJoins");

            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "Attacks");

            migrationBuilder.DropTable(
                name: "CityBuildingsJoin");

            migrationBuilder.DropTable(
                name: "CityUpgradesJoin");

            migrationBuilder.DropTable(
                name: "Units");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "BuildingAttributes");

            migrationBuilder.DropTable(
                name: "Building");

            migrationBuilder.DropTable(
                name: "UpgradeAttributes");

            migrationBuilder.DropTable(
                name: "Upgrades");

            migrationBuilder.DropTable(
                name: "Cities");

            migrationBuilder.DropTable(
                name: "Armies");

            migrationBuilder.DropTable(
                name: "AspNetUsers");
        }
    }
}
