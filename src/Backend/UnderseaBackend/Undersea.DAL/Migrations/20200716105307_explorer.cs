using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Undersea.DAL.Migrations
{
    public partial class explorer : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Game",
                keyColumn: "Id",
                keyValue: new Guid("31458f40-83f8-44ec-9b6e-81d97d479a14"));

            migrationBuilder.AddColumn<Guid>(
                name: "CityId",
                table: "Units",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "Units",
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "Game",
                columns: new[] { "Id", "CurrentTurn" },
                values: new object[] { new Guid("21fdd58e-a619-4e6f-934f-d38663dbb384"), 1 });

            migrationBuilder.UpdateData(
                table: "Units",
                keyColumn: "UnitType",
                keyValue: 0,
                column: "Discriminator",
                value: "Unit");

            migrationBuilder.UpdateData(
                table: "Units",
                keyColumn: "UnitType",
                keyValue: 1,
                column: "Discriminator",
                value: "Unit");

            migrationBuilder.UpdateData(
                table: "Units",
                keyColumn: "UnitType",
                keyValue: 2,
                column: "Discriminator",
                value: "Unit");

            migrationBuilder.UpdateData(
                table: "Units",
                keyColumn: "UnitType",
                keyValue: 3,
                column: "Discriminator",
                value: "Unit");

            migrationBuilder.UpdateData(
                table: "UpgradeAttributes",
                keyColumn: "UpgradeType",
                keyValue: 5,
                column: "Id",
                value: new Guid("ce54572a-5444-48e8-9087-61b86ad0c345"));

            migrationBuilder.CreateIndex(
                name: "IX_Units_CityId",
                table: "Units",
                column: "CityId");

            migrationBuilder.AddForeignKey(
                name: "FK_Units_Cities_CityId",
                table: "Units",
                column: "CityId",
                principalTable: "Cities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Units_Cities_CityId",
                table: "Units");

            migrationBuilder.DropIndex(
                name: "IX_Units_CityId",
                table: "Units");

            migrationBuilder.DeleteData(
                table: "Game",
                keyColumn: "Id",
                keyValue: new Guid("21fdd58e-a619-4e6f-934f-d38663dbb384"));

            migrationBuilder.DropColumn(
                name: "CityId",
                table: "Units");

            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "Units");

            migrationBuilder.InsertData(
                table: "Game",
                columns: new[] { "Id", "CurrentTurn" },
                values: new object[] { new Guid("31458f40-83f8-44ec-9b6e-81d97d479a14"), 1 });

            migrationBuilder.UpdateData(
                table: "UpgradeAttributes",
                keyColumn: "UpgradeType",
                keyValue: 5,
                column: "Id",
                value: new Guid("1f6747cd-449e-4ebd-8aa8-aff3b593ac15"));
        }
    }
}
