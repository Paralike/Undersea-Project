using System;

namespace Undersea.DAL
{
    public class Game
    {
        public Guid Id { get; set; }
        public int CurrentTurn { get; set; } = 1;
    }
}
