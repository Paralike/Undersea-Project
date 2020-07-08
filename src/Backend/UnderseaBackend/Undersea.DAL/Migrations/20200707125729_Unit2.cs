using Microsoft.EntityFrameworkCore.Migrations;
using System;

namespace Undersea.DAL.Migrations
{
    public partial class Unit2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UnitCounts");

            migrationBuilder.CreateTable(
                name: "ArmyUnitJoins",
                columns: table => new
                {
                    ArmyId = table.Column<Guid>(nullable: false),
                    UnitType = table.Column<int>(nullable: false),
                    UnitCount = table.Column<int>(nullable: false)
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
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ArmyUnitJoins");

            migrationBuilder.CreateTable(
                name: "UnitCounts",
                columns: table => new
                {
                    Type = table.Column<int>(type: "int", nullable: false),
                    ArmyId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    Count = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UnitCounts", x => x.Type);
                    table.ForeignKey(
                        name: "FK_UnitCounts_Armies_ArmyId",
                        column: x => x.ArmyId,
                        principalTable: "Armies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_UnitCounts_ArmyId",
                table: "UnitCounts",
                column: "ArmyId");
        }
    }
}
