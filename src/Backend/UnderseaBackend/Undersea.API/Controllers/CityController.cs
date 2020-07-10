using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.Interfaces;
using Undersea.BLL.Services;

namespace Undersea.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class CityController : ControllerBase
    {
        private readonly ICityService _cityService;
        Guid id;

        public CityController(ICityService cityService,  IHttpContextAccessor httpContextAccessor, IMapper mapper)
        {
            _cityService = cityService;
            id = Guid.Parse(httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value);
        }
        [HttpGet]
        public async Task<ActionResult<CityDto>> GetCity()
        {
            //return Ok();
           return Ok(await _cityService.GetCity());

        }
    }
}
