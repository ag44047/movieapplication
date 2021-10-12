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
        public async Task<ActionResult<List<Listt>>> GetLists()
        {
            return HandleResult(await Mediator.Send(new ListOfLists.Query()));
        }




        [HttpGet("{id}")]
        public async Task<IActionResult> GetListt(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }



        [HttpPost]
        public async Task<IActionResult> CreateListt(Listt listt)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Listt = listt }));
        }




        [HttpPut("{id}")]
        public async Task<IActionResult> EditMovie(Guid id, Listt listt)
        {
            listt.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Listt = listt }));
        }




        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteListt(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }

    }
}
