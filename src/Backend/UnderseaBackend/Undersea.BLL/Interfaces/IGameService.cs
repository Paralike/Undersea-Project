using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Undersea.BLL.Services;

namespace Undersea.BLL.Interfaces
{
    public interface IGameService
    {
        public static int CurrentTurn { get; set; }
        public Task NextTurn();
    }
}
