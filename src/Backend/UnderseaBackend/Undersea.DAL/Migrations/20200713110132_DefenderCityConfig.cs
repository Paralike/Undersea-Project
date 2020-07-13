using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Undersea.DAL.Migrations
{
    public partial class DefenderCityConfig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Attacks_Cities_DefenderCityId",
                table: "Attacks");

            migrationBuilder.DeleteData(
                table: "Game",
                keyColumn: "Id",
                keyValue: new Guid("369f7f0e-1120-4b41-8587-dc9236d3dd18"));

            migrationBuilder.InsertData(
                table: "Game",
                columns: new[] { "Id", "CurrentTurn" },
                values: new object[] { new Guid("8235f8e6-aa4e-4998-90f1-33e44afc529d"), 1 });

            migrationBuilder.UpdateData(
                table: "Units",
                keyColumn: "UnitType",
                keyValue: 0,
                columns: new[] { "Damage", "Defense", "FoodNecessity", "Name", "PearlNecessity", "Price" },
                values: new object[] { 5, 5, 2, "Lézercápa", 3, 100 });

            migrationBuilder.UpdateData(
                table: "Units",
                keyColumn: "UnitType",
                keyValue: 1,
                columns: new[] { "Damage", "Defense", "Name" },
                values: new object[] { 6, 2, "Rohamfóka" });

            migrationBuilder.UpdateData(
                table: "Units",
                keyColumn: "UnitType",
                keyValue: 2,
                columns: new[] { "Damage", "Defense", "FoodNecessity", "Name", "PearlNecessity", "Price" },
                values: new object[] { 2, 6, 1, "Csatacsikó", 1, 50 });

            migrationBuilder.AddForeignKey(
                name: "FK_Attacks_Cities_DefenderCityId",
                table: "Attacks",
                column: "DefenderCityId",
                principalTable: "Cities",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Attacks_Cities_DefenderCityId",
                table: "Attacks");

            migrationBuilder.DeleteData(
                table: "Game",
                keyColumn: "Id",
                keyValue: new Guid("8235f8e6-aa4e-4998-90f1-33e44afc529d"));

            migrationBuilder.InsertData(
                table: "Game",
                columns: new[] { "Id", "CurrentTurn" },
                values: new object[] { new Guid("369f7f0e-1120-4b41-8587-dc9236d3dd18"), 1 });

            migrationBuilder.UpdateData(
                table: "Units",
                keyColumn: "UnitType",
                keyValue: 0,
                columns: new[] { "Damage", "Defense", "FoodNecessity", "Name", "PearlNecessity", "Price" },
                values: new object[] { 6, 2, 1, "Rohamfóka", 1, 50 });

            migrationBuilder.UpdateData(
                table: "Units",
                keyColumn: "UnitType",
                keyValue: 1,
                columns: new[] { "Damage", "Defense", "Name" },
                values: new object[] { 2, 6, "Csatacsikó" });

            migrationBuilder.UpdateData(
                table: "Units",
                keyColumn: "UnitType",
                keyValue: 2,
                columns: new[] { "Damage", "Defense", "FoodNecessity", "Name", "PearlNecessity", "Price" },
                values: new object[] { 5, 5, 2, "Lézercápa", 3, 100 });

            migrationBuilder.AddForeignKey(
                name: "FK_Attacks_Cities_DefenderCityId",
                table: "Attacks",
                column: "DefenderCityId",
                principalTable: "Cities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
