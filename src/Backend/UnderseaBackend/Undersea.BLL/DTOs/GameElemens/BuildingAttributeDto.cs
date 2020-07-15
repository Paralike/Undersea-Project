using System;
using System.Collections.Generic;
using System.Text;
using Undersea.DAL.Enums;

namespace Undersea.BLL.DTOs.GameElemens
{
    public class BuildingAttributeDto
    {
        public BuildingType BuildingType { get; set; }
        public int Resident { get; set; }
        public int Coral { get; set; }
        public int HostCapacity { get; set; }
        public string Name { get; set; }
    }
}
