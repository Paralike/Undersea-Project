using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Undersea.DAL.Enums;

namespace Undersea.BLL.DTOs
{

    class BuildingDto
    {
        public Status Status { get; set; }
        public int Price { get; set; }
        public string Description { get; set; }
        public int TurnCount { get; set; }
        public BuildingType BuildingType { get; set; }
    }
}
