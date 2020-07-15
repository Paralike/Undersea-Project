using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Undersea.DAL.Models;

namespace Undersea.BLL.Interfaces
{
    public interface IUserService
    {
        public Guid GetCurrentUserId();
    }
}
