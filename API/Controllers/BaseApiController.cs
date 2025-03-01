﻿using MediatR;
using Microsoft.AspNetCore.Mvc;
using System;
using Microsoft.Extensions.DependencyInjection;
using Application.Core;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
	[AllowAnonymous]
	[ApiController]
	[Route("api/[controller]")]
	public class BaseApiController : ControllerBase
	{
		private IMediator _mediator;

		protected IMediator Mediator => _mediator ??= HttpContext.RequestServices
			.GetService<IMediator>();

		protected ActionResult HandleResult<T>(Result<T> result)
        {

			if (result == null) return NotFound();

			if (result.IsSuccess && result.Value != null) return Ok(result.Value);

			if (result.IsSuccess && result.Value == null) return NotFound();

			return BadRequest(result.Error);

		}
	}
}
