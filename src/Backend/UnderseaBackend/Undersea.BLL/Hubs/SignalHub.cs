using Microsoft.AspNetCore.SignalR;
using System;
using System.Linq;
using System.Threading.Tasks;
using Undersea.DAL;

namespace Undersea.BLL.Hubs
{
    public class SignalHub: Hub, ISignalHub
    {
        //private readonly AppDbContext _context;

        //public SignalHub(AppDbContext context)
        //{
        //    _context = context;
        //}

        public async Task SendMessage(string user, string message)
        {
            if(Clients == null)
            {
                throw new Exception("There are no connected clients");
            }
                
            await Clients.All.SendAsync("NextTurn", user, message);
        }   
    }
}
