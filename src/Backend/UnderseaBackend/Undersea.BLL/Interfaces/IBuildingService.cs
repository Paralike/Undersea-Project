using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;

namespace Undersea.BLL.Interfaces
{
    public interface IBuildingService
    {
        public Task<ActionResult<ICollection<BuildingDto>>> GetBuilding();
        public Task PurchaseBuilding(BuildingDto building);
    }
}
