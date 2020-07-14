using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Undersea.DAL.Migrations
{
    public partial class iszaptraktor : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Game",
                keyColumn: "Id",
                keyValue: new Guid("855849d9-4d10-4eca-b4dc-5bd49732ff88"));

            migrationBuilder.InsertData(
                table: "Game",
                columns: new[] { "Id", "CurrentTurn" },
                values: new object[] { new Guid("6ceda248-80e7-4377-a68a-032c773f3df1"), 1 });

            migrationBuilder.UpdateData(
                table: "UpgradeAttributes",
                keyColumn: "UpgradeType",
                keyValue: 5,
                column: "Id",
                value: new Guid("1f9e357f-e978-4380-8c83-66f973687e69"));

            migrationBuilder.InsertData(
                table: "UpgradeAttributes",
                columns: new[] { "UpgradeType", "AttackPoints", "CoralProduction", "DefensePoints", "Id", "Name", "TaxIncrease" },
                values: new object[] { 0, 10, 10, 0, new Guid("00000000-0000-0000-0000-000000000000"), "Iszaptraktor", 0 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Game",
                keyColumn: "Id",
                keyValue: new Guid("6ceda248-80e7-4377-a68a-032c773f3df1"));

            migrationBuilder.DeleteData(
                table: "UpgradeAttributes",
                keyColumn: "UpgradeType",
                keyValue: 0);

            migrationBuilder.InsertData(
                table: "Game",
                columns: new[] { "Id", "CurrentTurn" },
                values: new object[] { new Guid("855849d9-4d10-4eca-b4dc-5bd49732ff88"), 1 });

            migrationBuilder.UpdateData(
                table: "UpgradeAttributes",
                keyColumn: "UpgradeType",
                keyValue: 5,
                column: "Id",
                value: new Guid("1102d2de-5b15-4e74-adc6-917568586640"));
        }
    }
}
