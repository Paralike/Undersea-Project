using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Undersea.DAL.Migrations
{
    public partial class Spy : Migration
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
                values: new object[] { new Guid("821af3e0-e5a7-4f4a-9a8f-9cbfb61c8825"), 1 });

            migrationBuilder.UpdateData(
                table: "UpgradeAttributes",
                keyColumn: "UpgradeType",
                keyValue: 5,
                column: "Id",
                value: new Guid("30bd9a33-7853-4312-846a-a30ca175f657"));

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
                keyValue: new Guid("821af3e0-e5a7-4f4a-9a8f-9cbfb61c8825"));

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
