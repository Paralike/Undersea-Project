using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Undersea.BLL.DTOs.Actions;
using Undersea.DAL.Models;

namespace Undersea.BLL.Interfaces
{
    public interface ISpyService
    {
        public Task StartSpying(SpyingDto s);
        public Task<List<SpyingResponseDto>> GetSpyings();
        public int CalculateSpying(Spying s);

    }
}
