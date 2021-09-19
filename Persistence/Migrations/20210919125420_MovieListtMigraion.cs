using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class MovieListtMigraion : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Lists",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    listTitle = table.Column<string>(type: "TEXT", nullable: true),
                    listType = table.Column<string>(type: "TEXT", nullable: true),
                    listGenre = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lists", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "movieListts",
                columns: table => new
                {
                    MovieId = table.Column<Guid>(type: "TEXT", nullable: false),
                    ListtId = table.Column<Guid>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_movieListts", x => new { x.MovieId, x.ListtId });
                    table.ForeignKey(
                        name: "FK_movieListts_Lists_ListtId",
                        column: x => x.ListtId,
                        principalTable: "Lists",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_movieListts_Movies_MovieId",
                        column: x => x.MovieId,
                        principalTable: "Movies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_movieListts_ListtId",
                table: "movieListts",
                column: "ListtId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "movieListts");

            migrationBuilder.DropTable(
                name: "Lists");
        }
    }
}
