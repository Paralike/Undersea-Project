namespace Undersea.BLL.DTOs.Actions
{
    public class SpyingResponseDto
    {
        public string CityName { get; set; }
        public int SpyCount { get; set; }
        public bool? WasSuccessful { get; set; }
        public int? DefendingPower { get; set; }
    }
}
