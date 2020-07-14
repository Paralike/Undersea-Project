using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.DAL.Models;

namespace Undersea.BLL.Interfaces
{
    public interface IProfileService
    {
        public Task<RankDto> GetProfile(Guid userId);
        public Task DeleteProfile(Guid id);
        public Task<List<RankDto>> GetRank();
        public Task<int> GetUserRank(Guid userId);

    }
}
