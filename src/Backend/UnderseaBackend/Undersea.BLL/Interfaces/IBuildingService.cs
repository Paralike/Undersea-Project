using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.DTOs.GameElemens;

namespace Undersea.BLL.Interfaces
{
    public interface IBuildingService
    {
        public Task<ICollection<BuildingDto>> GetBuilding(Guid id);
        public Task PurchaseBuilding(Guid id, BuildingDto building);
        public Task<ICollection<BuildingAttributeDto>> GetGeneralBuildings();
    }
}
