using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.DTOs.GameElemens;
using Undersea.BLL.Interfaces;
using Undersea.DAL.Enums;

namespace Undersea.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class UpgradesController : ControllerBase
    {
        IUpgradeService _upgradeService;
        Guid id;

        public UpgradesController(IUpgradeService upgradeService, IHttpContextAccessor httpContextAccessor)
        {
            _upgradeService = upgradeService;
            id = Guid.Parse(httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value);
        }

            [HttpGet]
        public async Task<ActionResult<List<UpgradeDto>>> GetCurrentUpgradeStatuses()
        {
            Guid id = Guid.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
            return Ok(await _upgradeService.GetUpgrade(id));
        }

        [HttpPost]
        public async Task PurchaseUpgrade(UpgradeType upgradeType)
        {
            Guid id = Guid.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value);
            await _upgradeService.PurchaseUpgrade(id, upgradeType);
        }
    }
}
