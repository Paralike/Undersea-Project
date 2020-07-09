using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.Services;

namespace Undersea.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly CityService _cityService;
        Guid id;

        public CityController(CityService cityService, IHttpContextAccessor httpContextAccessor, IMapper mapper)
        {
            _cityService = cityService;
            id = Guid.Parse(httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value);
        }
        [HttpGet]
        public async Task<ActionResult<CityDto>> GetCity()
        {
            return Ok(await _cityService.GetCity(id));
        }
    }
}
