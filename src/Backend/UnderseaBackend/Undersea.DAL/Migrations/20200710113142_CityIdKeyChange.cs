using Microsoft.EntityFrameworkCore.Migrations;

namespace Undersea.DAL.Migrations
{
    public partial class CityIdKeyChange : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Attacks_Cities_AttackerCityId",
                table: "Attacks");

            migrationBuilder.DropForeignKey(
                name: "FK_Attacks_Cities_DefenderCityId",
                table: "Attacks");

            migrationBuilder.DropForeignKey(
                name: "FK_Building_Cities_CityId",
                table: "Building");

            migrationBuilder.DropForeignKey(
                name: "FK_Upgrades_Cities_CityId",
                table: "Upgrades");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Cities",
                table: "Cities");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Cities",
                table: "Cities",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_Cities_UserId",
                table: "Cities",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Attacks_Cities_AttackerCityId",
                table: "Attacks",
                column: "AttackerCityId",
                principalTable: "Cities",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Attacks_Cities_DefenderCityId",
                table: "Attacks",
                column: "DefenderCityId",
                principalTable: "Cities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Building_Cities_CityId",
                table: "Building",
                column: "CityId",
                principalTable: "Cities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Upgrades_Cities_CityId",
                table: "Upgrades",
                column: "CityId",
                principalTable: "Cities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Attacks_Cities_AttackerCityId",
                table: "Attacks");

            migrationBuilder.DropForeignKey(
                name: "FK_Attacks_Cities_DefenderCityId",
                table: "Attacks");

            migrationBuilder.DropForeignKey(
                name: "FK_Building_Cities_CityId",
                table: "Building");

            migrationBuilder.DropForeignKey(
                name: "FK_Upgrades_Cities_CityId",
                table: "Upgrades");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Cities",
                table: "Cities");

            migrationBuilder.DropIndex(
                name: "IX_Cities_UserId",
                table: "Cities");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Cities",
                table: "Cities",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Attacks_Cities_AttackerCityId",
                table: "Attacks",
                column: "AttackerCityId",
                principalTable: "Cities",
                principalColumn: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Attacks_Cities_DefenderCityId",
                table: "Attacks",
                column: "DefenderCityId",
                principalTable: "Cities",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Building_Cities_CityId",
                table: "Building",
                column: "CityId",
                principalTable: "Cities",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Upgrades_Cities_CityId",
                table: "Upgrades",
                column: "CityId",
                principalTable: "Cities",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
