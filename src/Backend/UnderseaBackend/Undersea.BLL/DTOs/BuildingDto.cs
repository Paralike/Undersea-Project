using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace Undersea.BLL.DTOs
{

    class BuildingDto
    {
        public int Id { get; set; }
        public Status Status { get; set; }
        public int Price { get; set; }
        public string Description { get; set; }
        public int TurnCount { get; set; }
    }
    public enum Status
    {
        InProgress,
        Done,
        UnBuilt
    }
}
