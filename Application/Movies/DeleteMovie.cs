using Application.Core;
using MediatR;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Movies
{
    public class DeleteMovie
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var movie = await _context.Movies.FindAsync(request.Id);

                if (movie == null) return null;

                _context.Remove(movie);

                var result=await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed to delete this movie");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}