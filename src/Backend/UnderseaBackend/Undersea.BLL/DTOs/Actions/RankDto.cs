using System;

namespace Undersea.BLL.DTOs
{
    public class RankDto
    {
        public Guid UserId { get; set; }
        public string Username { get; set; }
        public int Point { get; set; }
        public string CityName { get; set; }
        public int Rank { get; set; }
    }
}
