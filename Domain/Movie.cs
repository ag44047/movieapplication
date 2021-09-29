using System;
using System.Collections.Generic;

namespace Domain
{
    public class Movie
    {
        public Guid Id { get; set; }
 
        public string title { get; set; }

        public string desc { get; set; }

        public string img { get; set; }

        public string imgTitle { get; set; }

        public string imgSm { get; set; }

        public string trailer { get; set; }

        public string video { get; set; }

        public string year { get; set; }

        public int limit { get; set; }

        public string genre { get; set; }

        public bool isSeries { get; set; }


        public ICollection<MovieListt> movielists { get; set; }
    }
}
