using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.DTOs.GameElemens;
using Undersea.DAL.Enums;

namespace Undersea.BLL.Interfaces
{
    public interface IBuildingService
    {
        public Task<ICollection<BuildingDto>> GetBuilding(Guid id);
        public Task PurchaseBuilding(Guid id, BuildingType building);
        public Task<ICollection<BuildingAttributeDto>> GetGeneralBuildings();
    }
}
