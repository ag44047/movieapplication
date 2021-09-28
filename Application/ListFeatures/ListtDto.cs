using Application.Movies;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.ListFeatures
{
   public class ListtDto
    {
        public Guid Id { get; set; }

        public string listTitle { get; set; }

        public string listType { get; set; }

        public string listGenre { get; set; }

        public ICollection<MovieDto> content { get; set; }
    }
}
