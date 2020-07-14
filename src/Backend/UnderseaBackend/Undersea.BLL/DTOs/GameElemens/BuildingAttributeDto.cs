using System;
using System.Collections.Generic;
using System.Text;
using Undersea.DAL.Enums;

namespace Undersea.BLL.DTOs.GameElemens
{
    public class BuildingAttributeDto
    {
        public BuildingType BuildingType { get; set; }
        public int Price { get; set; }
        public int Population { get; set; }
        public int CoralProduction { get; set; }
        public int Hosting { get; set; }
        public string Name { get; set; }
    }
}
