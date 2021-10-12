using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;

namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet <Movie> Movies { get; set; }
        public  DbSet<Listt> Lists { get; set; }
        public DbSet <MovieListt> movieListts { get; set; }


       // public DbSet<Message> Messages { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<MovieListt>(x => x.HasKey(aa => new { aa.MovieId, aa.ListtId }));

            builder.Entity<MovieListt>()
                .HasOne(u => u.Movie)
                .WithMany(a => a.movielists)
                .HasForeignKey(aa => aa.MovieId);

            builder.Entity<MovieListt>()
                .HasOne(u => u.Listt)
                .WithMany(a => a.content)
                .HasForeignKey(aa => aa.ListtId);
        }


    }

}
