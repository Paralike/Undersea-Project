using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Undersea.DAL.Migrations
{
    public partial class newAttackColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Game",
                keyColumn: "Id",
                keyValue: new Guid("3ca9aca0-ba85-4eda-958c-b0eca127943f"));

            migrationBuilder.AddColumn<bool>(
                name: "WasAttackSuccesful",
                table: "Attacks",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "WasSpyingSuccesful",
                table: "Attacks",
                nullable: true);

            migrationBuilder.InsertData(
                table: "Game",
                columns: new[] { "Id", "CurrentTurn" },
                values: new object[] { new Guid("bb5c5f5f-f241-4a2e-a0f1-399a1924150e"), 1 });

            migrationBuilder.UpdateData(
                table: "UpgradeAttributes",
                keyColumn: "UpgradeType",
                keyValue: 5,
                column: "Id",
                value: new Guid("eb90ec32-48a1-4d53-bc5f-2d150725342a"));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Game",
                keyColumn: "Id",
                keyValue: new Guid("bb5c5f5f-f241-4a2e-a0f1-399a1924150e"));

            migrationBuilder.DropColumn(
                name: "WasAttackSuccesful",
                table: "Attacks");

            migrationBuilder.DropColumn(
                name: "WasSpyingSuccesful",
                table: "Attacks");

            migrationBuilder.InsertData(
                table: "Game",
                columns: new[] { "Id", "CurrentTurn" },
                values: new object[] { new Guid("3ca9aca0-ba85-4eda-958c-b0eca127943f"), 1 });

            migrationBuilder.UpdateData(
                table: "UpgradeAttributes",
                keyColumn: "UpgradeType",
                keyValue: 5,
                column: "Id",
                value: new Guid("a8dcca94-4d82-4c8e-8e44-d09a57915c22"));
        }
    }
}
