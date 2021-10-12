using Application.Profiles;
using Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    public class ProfilesController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly UserManager<AppUser> _userManager;

        public ProfilesController(DataContext context, UserManager<AppUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }





        [HttpGet("{username}")]
        public async Task<IActionResult> GetProfile(string username)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Username = username }));
        }




        [HttpPut("{username}")]

        public async Task<IActionResult> EditProfile(Profile profile, string username)
        {

            var profileUpdated = await _userManager.FindByNameAsync(username);

            if (profile == null) return NotFound();

            profileUpdated.Email = profile.Email;
            profileUpdated.DisplayName = profile.DisplayName;
            profileUpdated.UserName = profile.Username;
         //   profileUpdated.Image = profile.Image;

            return Ok(await _userManager.UpdateAsync(profileUpdated));
        }

    }
}
