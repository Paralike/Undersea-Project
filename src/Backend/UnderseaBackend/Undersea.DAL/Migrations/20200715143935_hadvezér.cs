using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Undersea.DAL.Migrations
{
    public partial class hadvezér : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Game",
                keyColumn: "Id",
                keyValue: new Guid("ad528c9c-ffb2-477b-84d8-82885cf21371"));

            migrationBuilder.InsertData(
                table: "Game",
                columns: new[] { "Id", "CurrentTurn" },
                values: new object[] { new Guid("31458f40-83f8-44ec-9b6e-81d97d479a14"), 1 });

            migrationBuilder.InsertData(
                table: "Units",
                columns: new[] { "UnitType", "Damage", "Defense", "FoodNecessity", "Id", "Name", "PearlNecessity", "Price" },
                values: new object[] { 3, 0, 0, 2, new Guid("00000000-0000-0000-0000-000000000000"), "Hadvezér", 4, 200 });

            migrationBuilder.UpdateData(
                table: "UpgradeAttributes",
                keyColumn: "UpgradeType",
                keyValue: 5,
                column: "Id",
                value: new Guid("1f6747cd-449e-4ebd-8aa8-aff3b593ac15"));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Game",
                keyColumn: "Id",
                keyValue: new Guid("31458f40-83f8-44ec-9b6e-81d97d479a14"));

            migrationBuilder.DeleteData(
                table: "Units",
                keyColumn: "UnitType",
                keyValue: 3);

            migrationBuilder.InsertData(
                table: "Game",
                columns: new[] { "Id", "CurrentTurn" },
                values: new object[] { new Guid("ad528c9c-ffb2-477b-84d8-82885cf21371"), 1 });

            migrationBuilder.UpdateData(
                table: "UpgradeAttributes",
                keyColumn: "UpgradeType",
                keyValue: 5,
                column: "Id",
                value: new Guid("ffcc2b21-bde5-49ad-b23f-a5f594589c28"));
        }
    }
}
