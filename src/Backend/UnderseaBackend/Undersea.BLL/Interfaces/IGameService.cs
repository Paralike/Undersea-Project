using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Undersea.BLL.Interfaces
{
    public interface IGameService
    {
        public int CurrentTurn { get; set; }
        public Task NextTurn();
    }
}
