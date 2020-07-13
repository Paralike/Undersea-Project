using System;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;

namespace Undersea.BLL.Interfaces
{
    public interface ICityService
    {
        public Task<CityDto> GetCity(Guid id);
    }
}
