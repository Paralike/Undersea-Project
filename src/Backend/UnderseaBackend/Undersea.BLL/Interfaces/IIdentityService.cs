using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Undersea.BLL.Interfaces
{
    interface IIdentityService
    {
        Task<Guid> GetCurrentUserIdAsync();
        Guid GetCurrentUserId();

    }
}
