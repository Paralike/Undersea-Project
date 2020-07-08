using Microsoft.EntityFrameworkCore.Migrations;
using System;

namespace Undersea.DAL.Migrations
{
    public partial class Unit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Units_Armies_ArmyId",
                table: "Units");

            migrationBuilder.DropIndex(
                name: "IX_Units_ArmyId",
                table: "Units");

            migrationBuilder.DropColumn(
                name: "ArmyId",
                table: "Units");

            migrationBuilder.CreateTable(
                name: "UnitCounts",
                columns: table => new
                {
                    Type = table.Column<int>(nullable: false),
                    Count = table.Column<int>(nullable: false),
                    ArmyId = table.Column<Guid>(nullable: true)
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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UnitCounts");

            migrationBuilder.AddColumn<Guid>(
                name: "ArmyId",
                table: "Units",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Units_ArmyId",
                table: "Units",
                column: "ArmyId");

            migrationBuilder.AddForeignKey(
                name: "FK_Units_Armies_ArmyId",
                table: "Units",
                column: "ArmyId",
                principalTable: "Armies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
