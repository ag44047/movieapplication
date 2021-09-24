using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Movies
{
    public class MovieList
    {
        public class Query : IRequest<Result<List<Movie>>>
        {

        }
        public class Handler : IRequestHandler<Query, Result<List<Movie>>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<List<Movie>>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<Movie>>.Success(await _context.Movies.ToListAsync(cancellationToken));
            }
        }
    }
}
