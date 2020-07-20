using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Undersea.DAL.Migrations
{
    public partial class spy : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Game",
                keyColumn: "Id",
                keyValue: new Guid("a98f4724-4b41-4185-aa6b-867a4569b273"));

            migrationBuilder.DropColumn(
                name: "WasSpyingSuccesful",
                table: "Attacks");

            migrationBuilder.CreateTable(
                name: "Spyings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    AttackerCityId = table.Column<Guid>(nullable: false),
                    DefenderCityId = table.Column<Guid>(nullable: false),
                    SpyCount = table.Column<int>(nullable: false),
                    WasSpyingSuccesful = table.Column<bool>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Spyings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Spyings_Cities_AttackerCityId",
                        column: x => x.AttackerCityId,
                        principalTable: "Cities",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Spyings_Cities_DefenderCityId",
                        column: x => x.DefenderCityId,
                        principalTable: "Cities",
                        principalColumn: "Id");
                });

            migrationBuilder.InsertData(
                table: "Game",
                columns: new[] { "Id", "CurrentTurn" },
                values: new object[] { new Guid("0a52953e-1e77-487e-89be-2b9c9e3a7116"), 1 });

            migrationBuilder.UpdateData(
                table: "UpgradeAttributes",
                keyColumn: "UpgradeType",
                keyValue: 5,
                column: "Id",
                value: new Guid("fb001802-493e-470d-aa82-f7d3e90e6105"));

            migrationBuilder.CreateIndex(
                name: "IX_Spyings_AttackerCityId",
                table: "Spyings",
                column: "AttackerCityId");

            migrationBuilder.CreateIndex(
                name: "IX_Spyings_DefenderCityId",
                table: "Spyings",
                column: "DefenderCityId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Spyings");

            migrationBuilder.DeleteData(
                table: "Game",
                keyColumn: "Id",
                keyValue: new Guid("0a52953e-1e77-487e-89be-2b9c9e3a7116"));

            migrationBuilder.AddColumn<bool>(
                name: "WasSpyingSuccesful",
                table: "Attacks",
                type: "bit",
                nullable: true);

            migrationBuilder.InsertData(
                table: "Game",
                columns: new[] { "Id", "CurrentTurn" },
                values: new object[] { new Guid("a98f4724-4b41-4185-aa6b-867a4569b273"), 1 });

            migrationBuilder.UpdateData(
                table: "UpgradeAttributes",
                keyColumn: "UpgradeType",
                keyValue: 5,
                column: "Id",
                value: new Guid("dfe8ed14-b885-4a8e-841d-627db5f5cf9d"));
        }
    }
}
