using Application.ListFeatures;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    public class ListtsController : BaseApiController
    {
        

        [HttpGet]
        public async Task<ActionResult<List<Listt>>> GetMovies()
        {
            return await Mediator.Send(new ListOfLists.Query());
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Listt>> GetListt(Guid id)
        {
            return await Mediator.Send(new Details.Query { Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateListt(Listt listt)
        {
            return Ok(await Mediator.Send(new Create.Command { Listt = listt }));
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteListt(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        }

    }
}
