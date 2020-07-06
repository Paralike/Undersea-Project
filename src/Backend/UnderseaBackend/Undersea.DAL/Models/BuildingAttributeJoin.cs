namespace Undersea.DAL.Models
{
    public class BuildingAttributeJoin
    {
        public string BuildingAttributeId { get; set; }
        public BuildingAttributes BuildingAttribute { get; set; }
        public string BuildingId { get; set; }
        public Building Building { get; set; }

    }
}
