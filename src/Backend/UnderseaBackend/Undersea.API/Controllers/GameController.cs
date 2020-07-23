using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Undersea.BLL.Interfaces;

namespace Undersea.API.Controllers
{
    [Route("api/[controller]")]
    public class GameController : ControllerBase
    {
        private readonly IGameService _gameService;

        public GameController(IGameService gameService)
        {
            _gameService = gameService;
        }

        [HttpGet]
        public int GetGameState()
        {
            return _gameService.CurrentTurn;
        }

        [HttpPost]
        public async Task NextTurn()
        {
            await _gameService.NextTurn();
        }
    }
}
