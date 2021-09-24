using Application.Core;
using Domain;
using MediatR;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.ListFeatures
{
    public class Details
    {
        public class Query : IRequest<Result<Listt>>
        {
            public Guid Id { get; set; }

        }
        public class Handler : IRequestHandler<Query, Result<Listt>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Listt>> Handle(Query request, CancellationToken cancellationToken)
            {
                var listt = await _context.Lists.FindAsync(request.Id);

                return Result<Listt>.Success(listt);
            }
        }
    }
}