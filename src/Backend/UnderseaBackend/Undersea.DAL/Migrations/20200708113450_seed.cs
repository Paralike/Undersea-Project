using Microsoft.EntityFrameworkCore.Migrations;
using System;

using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Undersea.DAL.Migrations
{
    public partial class seed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Armies_Cities_CityId",
                table: "Armies");

            migrationBuilder.DropIndex(
                name: "IX_Armies_CityId",
                table: "Armies");

            migrationBuilder.AddColumn<Guid>(
                name: "Id",
                table: "Units",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<int>(
                name: "PearlNecessity",
                table: "Units",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<Guid>(
                name: "AvailableArmyId",
                table: "Cities",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<Guid>(
                name: "Id",
                table: "ArmyUnitJoins",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_Cities_AvailableArmyId",
                table: "Cities",
                column: "AvailableArmyId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Cities_Armies_AvailableArmyId",
                table: "Cities",
                column: "AvailableArmyId",
                principalTable: "Armies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cities_Armies_AvailableArmyId",
                table: "Cities");

            migrationBuilder.DropIndex(
                name: "IX_Cities_AvailableArmyId",
                table: "Cities");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Units");

            migrationBuilder.DropColumn(
                name: "PearlNecessity",
                table: "Units");

            migrationBuilder.DropColumn(
                name: "AvailableArmyId",
                table: "Cities");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "ArmyUnitJoins");

            migrationBuilder.CreateIndex(
                name: "IX_Armies_CityId",
                table: "Armies",
                column: "CityId");

            migrationBuilder.AddForeignKey(
                name: "FK_Armies_Cities_CityId",
                table: "Armies",
                column: "CityId",
                principalTable: "Cities",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
