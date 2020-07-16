using System.Threading.Tasks;

namespace Undersea.BLL.Interfaces
{
    public interface IGameService
    {
        public int CurrentTurn { get; }
        public Task NextTurn();
    }
}
