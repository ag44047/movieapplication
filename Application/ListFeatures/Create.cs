﻿using Application.Core;
using Domain;
using FluentValidation;
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
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Listt Listt { get; set; }
        }
        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Listt).SetValidator(new ListValidator());

            }
        }
        public class Handler : IRequestHandler<Command,Result<Unit>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Lists.Add(request.Listt);

               var result= await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed to create movie");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
