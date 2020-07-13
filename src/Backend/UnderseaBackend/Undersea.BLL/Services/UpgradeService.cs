using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.Interfaces;
using Undersea.DAL.Models;
using Undersea.DAL.Repositories.Interfaces;

namespace Undersea.BLL.Services
{
    public class UpgradeService : IUpgradeService
    {
        private readonly IUpgradeRepository _upgradeRepository;
        private readonly IMapper _mapper;

        public UpgradeService(IUpgradeRepository upgradeRepository, IMapper mapper)
        {
            _upgradeRepository = upgradeRepository;
            _mapper = mapper;
        }

        public async Task<ActionResult<ICollection<UpgradeDto>>> GetUpgrade()
        {
            var list = await _upgradeRepository.GetAll();
            return _mapper.Map<List<UpgradeDto>>(list);
        }

        public async Task PurchaseUpgrade(UpgradeDto upgrade)
        {
            await _upgradeRepository.Add(_mapper.Map<Upgrade>(upgrade));
        }
    }
}
