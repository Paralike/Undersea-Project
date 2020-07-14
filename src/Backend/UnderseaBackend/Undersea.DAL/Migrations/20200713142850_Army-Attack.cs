using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Undersea.DAL.Migrations
{
    public partial class ArmyAttack : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Game",
                keyColumn: "Id",
                keyValue: new Guid("f88a3ad4-a5e0-4e5c-9d09-d35a02d87df5"));

            migrationBuilder.InsertData(
                table: "Game",
                columns: new[] { "Id", "CurrentTurn" },
                values: new object[] { new Guid("30320220-ba48-4fed-a0fa-86de429f63c4"), 1 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Game",
                keyColumn: "Id",
                keyValue: new Guid("30320220-ba48-4fed-a0fa-86de429f63c4"));

            migrationBuilder.InsertData(
                table: "Game",
                columns: new[] { "Id", "CurrentTurn" },
                values: new object[] { new Guid("f88a3ad4-a5e0-4e5c-9d09-d35a02d87df5"), 1 });
        }
    }
}
