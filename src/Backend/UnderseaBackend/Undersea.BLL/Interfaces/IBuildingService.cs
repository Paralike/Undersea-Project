using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;

namespace Undersea.BLL.Interfaces
{
    public interface IBuildingService
    {
        public Task<ICollection<BuildingDto>> GetBuilding();
        public Task PurchaseBuilding(BuildingDto building);
    }
}
