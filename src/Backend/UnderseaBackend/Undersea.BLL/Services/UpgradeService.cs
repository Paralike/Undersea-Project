using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
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
        private readonly ICityRepository _cityRepository;

        public UpgradeService(IUpgradeRepository upgradeRepository, IMapper mapper, ICityRepository cityRepository)
        {
            _upgradeRepository = upgradeRepository;
            _mapper = mapper;
            _cityRepository = cityRepository;
        }

        public async Task<ActionResult<ICollection<UpgradeDto>>> GetUpgrade()
        {
            var list = await _upgradeRepository.GetAll();
            return _mapper.Map<List<UpgradeDto>>(list);
        }

        public async Task PurchaseUpgrade(Guid id, UpgradeDto upgrade)
        {
            var cities = await _cityRepository.GetWhere(c => c.UserId == id);
            var firstCity = cities.First();
            //await _upgradeRepository.AddUpgrade(upgrade.CityId, upgrade.UpgradeType);
            //var list = await _upgradeRepository.GetWhere(u => u.ArmyId == firstCity.AvailableArmyId);
            //await _upgradeRepository.Add(_mapper.Map<Upgrade>(upgrade));
        }
    }
}
