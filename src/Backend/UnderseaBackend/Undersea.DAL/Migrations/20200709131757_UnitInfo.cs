using Microsoft.EntityFrameworkCore.Migrations;

namespace Undersea.DAL.Migrations
{
    public partial class UnitInfo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Units",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Units",
                keyColumn: "UnitType",
                keyValue: 0,
                column: "Name",
                value: "Rohamfóka");

            migrationBuilder.UpdateData(
                table: "Units",
                keyColumn: "UnitType",
                keyValue: 1,
                column: "Name",
                value: "Csatacsikó");

            migrationBuilder.UpdateData(
                table: "Units",
                keyColumn: "UnitType",
                keyValue: 2,
                column: "Name",
                value: "Lézercápa");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "Units");
        }
    }
}
