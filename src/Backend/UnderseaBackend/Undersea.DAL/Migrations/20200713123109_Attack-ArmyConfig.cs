using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Undersea.DAL.Migrations
{
    public partial class AttackArmyConfig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Attacks_ArmyId",
                table: "Attacks");

            migrationBuilder.DeleteData(
                table: "Game",
                keyColumn: "Id",
                keyValue: new Guid("8235f8e6-aa4e-4998-90f1-33e44afc529d"));

            migrationBuilder.InsertData(
                table: "Game",
                columns: new[] { "Id", "CurrentTurn" },
                values: new object[] { new Guid("f9caaade-8489-4e14-8be9-d11d05ec56ac"), 1 });

            migrationBuilder.CreateIndex(
                name: "IX_Attacks_ArmyId",
                table: "Attacks",
                column: "ArmyId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Attacks_ArmyId",
                table: "Attacks");

            migrationBuilder.DeleteData(
                table: "Game",
                keyColumn: "Id",
                keyValue: new Guid("f9caaade-8489-4e14-8be9-d11d05ec56ac"));

            migrationBuilder.InsertData(
                table: "Game",
                columns: new[] { "Id", "CurrentTurn" },
                values: new object[] { new Guid("8235f8e6-aa4e-4998-90f1-33e44afc529d"), 1 });

            migrationBuilder.CreateIndex(
                name: "IX_Attacks_ArmyId",
                table: "Attacks",
                column: "ArmyId");
        }
    }
}
