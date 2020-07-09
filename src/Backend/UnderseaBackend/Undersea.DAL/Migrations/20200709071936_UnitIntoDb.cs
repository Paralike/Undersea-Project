using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Undersea.DAL.Migrations
{
    public partial class UnitIntoDb : Migration
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

            migrationBuilder.InsertData(
                table: "Units",
                columns: new[] { "UnitType", "Damage", "Defense", "FoodNecessity", "Id", "PearlNecessity", "Price" },
                values: new object[] { 1, 2, 6, 1, new Guid("00000000-0000-0000-0000-000000000000"), 1, 50 });

            migrationBuilder.InsertData(
                table: "Units",
                columns: new[] { "UnitType", "Damage", "Defense", "FoodNecessity", "Id", "PearlNecessity", "Price" },
                values: new object[] { 0, 6, 2, 1, new Guid("00000000-0000-0000-0000-000000000000"), 1, 50 });

            migrationBuilder.InsertData(
                table: "Units",
                columns: new[] { "UnitType", "Damage", "Defense", "FoodNecessity", "Id", "PearlNecessity", "Price" },
                values: new object[] { 2, 5, 5, 2, new Guid("00000000-0000-0000-0000-000000000000"), 3, 100 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ApplicationLog");

            migrationBuilder.DeleteData(
                table: "Units",
                keyColumn: "UnitType",
                keyValue: 0);

            migrationBuilder.DeleteData(
                table: "Units",
                keyColumn: "UnitType",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Units",
                keyColumn: "UnitType",
                keyValue: 2);
        }
    }
}
