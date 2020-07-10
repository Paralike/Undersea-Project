using System;
using System.Collections.Generic;
using System.Text;

namespace Undersea.DAL
{
    public class Game
    {
        public Guid Id { get; set; }
        public int CurrentTurn { get; set; } = 1;
    }
}
