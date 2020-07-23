using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Security.Claims;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.Interfaces;

namespace Undersea.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class CityController : ControllerBase
    {
        private readonly ICityService _cityService;

        public CityController(ICityService cityService, IMapper mapper)
        {
            _cityService = cityService;
        }

        [HttpGet]
        public async Task<ActionResult<CityDto>> GetCity()
        {
            return Ok(await _cityService.GetCity(Guid.NewGuid()));
        }
    }
}
