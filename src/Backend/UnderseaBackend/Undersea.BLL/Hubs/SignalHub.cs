using Microsoft.AspNetCore.SignalR;
using System.Linq;
using System.Threading.Tasks;

namespace Undersea.BLL.Hubs
{
    public class SignalHub: Hub, ISignalHub
    {
        public async Task SendMessage(string user, string message)
        {
            if(Clients != null)
                await Clients.All.SendAsync("NextTurn", user, message);
        }   
    }
}
