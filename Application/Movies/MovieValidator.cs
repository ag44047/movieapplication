using Domain;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Movies
{
   public class MovieValidator : AbstractValidator<Movie>
    {
        public MovieValidator()
        {
            RuleFor(x => x.title)
                .Cascade(CascadeMode.Stop)
                .NotEmpty().WithMessage("Movie title can't be empty!")
                .Length(1, 50).WithMessage("Movie title shouldn't be longer than 50 characters");

            RuleFor(x => x.desc).NotEmpty().WithMessage("Movie description can't be empty!");
            RuleFor(x => x.trailer).NotEmpty().WithMessage("Movie trailer can't be empty!");
            RuleFor(x => x.video).NotEmpty().WithMessage("Video can't be empty!");
            RuleFor(x => x.year).NotEmpty().WithMessage("Movie year can't be empty!");
            RuleFor(x => x.genre)
                 .Cascade(CascadeMode.Stop)
                 .NotEmpty().WithMessage("Movie genre can't be empty!")
                 .Length(4, 20).WithMessage("Movie genre should be between 4 and 20 chars"); 
        }
    }
}
