using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.DAL.Models;

namespace Undersea.BLL.Interfaces
{
    public interface IProfileService
    {
        public Task<ProfileDto> GetProfile(User user);
        public Task DeleteProfile(int id);

    }
}
