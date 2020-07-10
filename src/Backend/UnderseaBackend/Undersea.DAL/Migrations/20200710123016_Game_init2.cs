using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Undersea.DAL.Migrations
{
    public partial class Game_init2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_CurrentTurn",
                table: "CurrentTurn");

            migrationBuilder.RenameTable(
                name: "CurrentTurn",
                newName: "Game");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Game",
                table: "Game",
                column: "Id");

            migrationBuilder.InsertData(
                table: "Game",
                columns: new[] { "Id", "CurrentTurn" },
                values: new object[] { new Guid("369f7f0e-1120-4b41-8587-dc9236d3dd18"), 1 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Game",
                table: "Game");

            migrationBuilder.DeleteData(
                table: "Game",
                keyColumn: "Id",
                keyValue: new Guid("369f7f0e-1120-4b41-8587-dc9236d3dd18"));

            migrationBuilder.RenameTable(
                name: "Game",
                newName: "CurrentTurn");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CurrentTurn",
                table: "CurrentTurn",
                column: "Id");
        }
    }
}
