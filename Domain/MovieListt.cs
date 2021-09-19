using System;

namespace Domain
{
    public class MovieListt
    {
        public Guid MovieId { get; set; }
        public Movie Movie { get; set; }
        public Guid ListtId { get; set; }
        public Listt Listt { get; set; }

    }
}