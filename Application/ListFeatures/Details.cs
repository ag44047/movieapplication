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
        public class Query : IRequest<Listt>
        {
            public Guid Id { get; set; }

        }
        public class Handler : IRequestHandler<Query, Listt>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Listt> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Lists.FindAsync(request.Id);
            }
        }
    }
}