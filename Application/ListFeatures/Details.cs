using Application.Core;
using AutoMapper;
using AutoMapper.QueryableExtensions;
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

namespace Application.ListFeatures
{
    public class Details
    {
        public class Query : IRequest<Result<ListtDto>>
        {
            public Guid Id { get; set; }

        }
        public class Handler : IRequestHandler<Query, Result<ListtDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<ListtDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var listt = await _context.Lists
                    .ProjectTo<ListtDto>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(x => x.Id == request.Id);

                return Result<ListtDto>.Success(listt);
            }
        }
    }
}