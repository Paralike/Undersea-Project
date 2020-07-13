using System;
using System.Threading.Tasks;

namespace Undersea.BLL.Interfaces
{
    interface IIdentityService
    {
        Task<Guid> GetCurrentUserIdAsync();
        Guid GetCurrentUserId();

    }
}
