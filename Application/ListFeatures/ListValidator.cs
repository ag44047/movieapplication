using Domain;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.ListFeatures
{
    public class ListValidator : AbstractValidator<Listt>
    {
        public ListValidator()
        {
            RuleFor(x => x.listTitle)
                .Cascade(CascadeMode.Stop)
                .NotEmpty().WithMessage("List title can't be empty!")
                .Length(1, 30).WithMessage("List title shouldn't be longer than 30 characters");

            RuleFor(x => x.listType).NotEmpty().WithMessage("List type can't be empty!");
            RuleFor(x => x.listGenre).NotEmpty().WithMessage("List genre can't be empty!");
            RuleFor(x => x.content).NotEmpty();
        }
    }
}
