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
  public  class ListOfLists
    {
        public class Query : IRequest<Result<List<ListtDto>>>
        {

        }

        public class Handler : IRequestHandler<Query, Result<List<ListtDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper )
            {
                _context = context;
                _mapper = mapper;
            }


            public async Task<Result<List<ListtDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var listts = await _context.Lists
                    .ProjectTo<ListtDto>(_mapper.ConfigurationProvider)
                    .ToListAsync(cancellationToken);

               
                return Result<List<ListtDto>>.Success(listts);
            }
        }
    }
}
