using Application.Movies;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API.Controllers
{
    public class MoviesController : BaseApiController
    {
       
       [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetMovies()
        {
            return HandleResult(await Mediator.Send(new MovieList.Query()));
        }


       
        [HttpGet("{id}")] 
        public async Task<IActionResult> GetMovie(Guid id) 
        {
         return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }



        [HttpPost]
        public async Task<IActionResult> CreateMovie(Movie movie)
        {
            return HandleResult(await Mediator.Send(new CreateMovie.Command { Movie = movie }));
        }



        [HttpPut("{id}")]
        public async Task<IActionResult> EditMovie(Guid id, Movie movie)
        {
            movie.Id = id;
            return HandleResult(await Mediator.Send(new EditMovie.Command { Movie = movie }));
        }



        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id)
        {
            return HandleResult(await Mediator.Send(new DeleteMovie.Command { Id = id }));
        }
    }

}
