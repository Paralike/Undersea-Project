namespace Undersea.DAL.Models
{
    public class UpgradeAttributeJoin
    {
        public string UpgradeAttributeId { get; set; }
        public UpgradeAttributes UpgradeAttribute { get; set; }
        public string UpgradeId { get; set; }
        public Upgrade Upgrade { get; set; }
    }
}
