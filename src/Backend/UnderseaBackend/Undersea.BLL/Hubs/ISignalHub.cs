using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Undersea.BLL.Hubs
{
    public interface ISignalHub
    {
        public Task SendMessage(string user, string message);
    }
}
