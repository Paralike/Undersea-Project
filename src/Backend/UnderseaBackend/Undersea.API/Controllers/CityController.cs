using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.Services;

namespace Undersea.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        CityService _cityService;

        public CityController(CityService cityService)
        {
            _cityService = cityService;
        }
        [HttpGet]
        public async Task<ActionResult<CityDto>> GetCity(Guid id)
        {
            return Ok(await _cityService.GetCity(id));
        }
    }
}
