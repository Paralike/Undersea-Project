using Microsoft.AspNetCore.SignalR;
using System;
using System.Linq;
using System.Threading.Tasks;
using Undersea.DAL;

namespace Undersea.BLL.Hubs
{
    public class SignalHub: Hub, ISignalHub
    {
        protected IHubContext<SignalHub> _context;

        public SignalHub(IHubContext<SignalHub> context)
        {
            _context = context;
        }

        public async Task SendMessage(string user, string message)
        {
            if(_context.Clients == null)
            {
                throw new Exception("There are no connected clients");
            }
                
            await _context.Clients.All.SendAsync("NextTurn", user, message);
        }   
    }
}
