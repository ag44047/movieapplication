using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class InitialCreatee : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Movies",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    title = table.Column<string>(type: "TEXT", nullable: true),
                    desc = table.Column<string>(type: "TEXT", nullable: true),
                    img = table.Column<string>(type: "TEXT", nullable: true),
                    imgTitle = table.Column<string>(type: "TEXT", nullable: true),
                    imgSm = table.Column<string>(type: "TEXT", nullable: true),
                    trailer = table.Column<string>(type: "TEXT", nullable: true),
                    video = table.Column<string>(type: "TEXT", nullable: true),
                    year = table.Column<string>(type: "TEXT", nullable: true),
                    limit = table.Column<int>(type: "INTEGER", nullable: false),
                    genre = table.Column<string>(type: "TEXT", nullable: true),
                    isSeries = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Movies", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Movies");
        }
    }
}
