using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Text;
using Undersea.BLL.Interfaces;

namespace Undersea.BLL.Services
{
    public class GameService : IGameService
    {
        public int CurrentTurn { get; set; }

        public GameService()
        {
        }

        public void NextTurn()
        {
            CurrentTurn++;
        }
    }
}
