using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Undersea.DAL.Migrations
{
    public partial class hangfire : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CityBuildingsJoin_BuildingAttributes_BuildingAttributeId",
                table: "CityBuildingsJoin");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CityBuildingsJoin",
                table: "CityBuildingsJoin");

            migrationBuilder.DropIndex(
                name: "IX_CityBuildingsJoin_BuildingAttributeId",
                table: "CityBuildingsJoin");

            migrationBuilder.DropPrimaryKey(
                name: "PK_BuildingAttributes",
                table: "BuildingAttributes");

            migrationBuilder.DropIndex(
                name: "IX_Building_CityId",
                table: "Building");

            migrationBuilder.DeleteData(
                table: "Game",
                keyColumn: "Id",
                keyValue: new Guid("2981af6e-94ef-4ff1-a858-631d7bfdaa61"));

            migrationBuilder.DropColumn(
                name: "BuildingAttributeId",
                table: "CityBuildingsJoin");

            migrationBuilder.AddColumn<int>(
                name: "BuildingType",
                table: "CityBuildingsJoin",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<Guid>(
                name: "Id",
                table: "CityBuildingsJoin",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<int>(
                name: "Status",
                table: "CityBuildingsJoin",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<Guid>(
                name: "BuildingId",
                table: "Cities",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<int>(
                name: "BuildingType",
                table: "BuildingAttributes",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "BuildingAttributes",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Price",
                table: "BuildingAttributes",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_CityBuildingsJoin",
                table: "CityBuildingsJoin",
                columns: new[] { "BuildingId", "BuildingType" });

            migrationBuilder.AddPrimaryKey(
                name: "PK_BuildingAttributes",
                table: "BuildingAttributes",
                column: "BuildingType");

            migrationBuilder.InsertData(
                table: "BuildingAttributes",
                columns: new[] { "BuildingType", "Coral", "HostCapacity", "Id", "Name", "Price", "Resident" },
                values: new object[,]
                {
                    { 0, 200, 0, new Guid("00000000-0000-0000-0000-000000000000"), "Áramlásírányító", 1000, 50 },
                    { 1, 0, 200, new Guid("00000000-0000-0000-0000-000000000000"), "Zátonyvár", 1000, 0 }
                });

            migrationBuilder.InsertData(
                table: "Game",
                columns: new[] { "Id", "CurrentTurn" },
                values: new object[] { new Guid("1b185ce1-a8bb-417f-be3d-9d7c75a2a762"), 1 });

            migrationBuilder.UpdateData(
                table: "UpgradeAttributes",
                keyColumn: "UpgradeType",
                keyValue: 0,
                column: "AttackPoints",
                value: 0);

            migrationBuilder.UpdateData(
                table: "UpgradeAttributes",
                keyColumn: "UpgradeType",
                keyValue: 5,
                column: "Id",
                value: new Guid("4a7b197e-0cf5-4c2a-a2d8-0e847169bfb6"));

            migrationBuilder.CreateIndex(
                name: "IX_Building_CityId",
                table: "Building",
                column: "CityId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_CityBuildingsJoin",
                table: "CityBuildingsJoin");

            migrationBuilder.DropPrimaryKey(
                name: "PK_BuildingAttributes",
                table: "BuildingAttributes");

            migrationBuilder.DropIndex(
                name: "IX_Building_CityId",
                table: "Building");

            migrationBuilder.DeleteData(
                table: "BuildingAttributes",
                keyColumn: "BuildingType",
                keyValue: 0);

            migrationBuilder.DeleteData(
                table: "BuildingAttributes",
                keyColumn: "BuildingType",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Game",
                keyColumn: "Id",
                keyValue: new Guid("1b185ce1-a8bb-417f-be3d-9d7c75a2a762"));

            migrationBuilder.DropColumn(
                name: "BuildingType",
                table: "CityBuildingsJoin");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "CityBuildingsJoin");

            migrationBuilder.DropColumn(
                name: "Status",
                table: "CityBuildingsJoin");

            migrationBuilder.DropColumn(
                name: "BuildingId",
                table: "Cities");

            migrationBuilder.DropColumn(
                name: "BuildingType",
                table: "BuildingAttributes");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "BuildingAttributes");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "BuildingAttributes");

            migrationBuilder.AddColumn<Guid>(
                name: "BuildingAttributeId",
                table: "CityBuildingsJoin",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddPrimaryKey(
                name: "PK_CityBuildingsJoin",
                table: "CityBuildingsJoin",
                columns: new[] { "BuildingId", "BuildingAttributeId" });

            migrationBuilder.AddPrimaryKey(
                name: "PK_BuildingAttributes",
                table: "BuildingAttributes",
                column: "Id");

            migrationBuilder.InsertData(
                table: "Game",
                columns: new[] { "Id", "CurrentTurn" },
                values: new object[] { new Guid("2981af6e-94ef-4ff1-a858-631d7bfdaa61"), 1 });

            migrationBuilder.UpdateData(
                table: "UpgradeAttributes",
                keyColumn: "UpgradeType",
                keyValue: 0,
                column: "AttackPoints",
                value: 10);

            migrationBuilder.UpdateData(
                table: "UpgradeAttributes",
                keyColumn: "UpgradeType",
                keyValue: 5,
                column: "Id",
                value: new Guid("05cf0602-37e6-44e8-8af3-ea3cb2944c29"));

            migrationBuilder.CreateIndex(
                name: "IX_CityBuildingsJoin_BuildingAttributeId",
                table: "CityBuildingsJoin",
                column: "BuildingAttributeId");

            migrationBuilder.CreateIndex(
                name: "IX_Building_CityId",
                table: "Building",
                column: "CityId");

            migrationBuilder.AddForeignKey(
                name: "FK_CityBuildingsJoin_BuildingAttributes_BuildingAttributeId",
                table: "CityBuildingsJoin",
                column: "BuildingAttributeId",
                principalTable: "BuildingAttributes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
