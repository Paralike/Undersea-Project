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
using Undersea.DAL.Repository.Interfaces;

namespace Undersea.BLL.Services
{
    public class UpgradeService : IUpgradeService
    {
        private readonly IUpgradeRepository _upgradeRepository;
        private readonly IMapper _mapper;
        private readonly ICityRepository _cityRepository;
        private readonly IUpgradeJoinRepository _upgradeJoin;

        public UpgradeService(IUpgradeRepository upgradeRepository, IMapper mapper, ICityRepository cityRepository, IUpgradeJoinRepository upgradeJoin)
        {
            _upgradeRepository = upgradeRepository;
            _mapper = mapper;
            _cityRepository = cityRepository;
            _upgradeJoin = upgradeJoin;
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
            //await _upgradeRepository.Add(_mapper.Map<Upgrade>(upgrade));
            //var list = await _upgradeJoin.GetWhere(u => u.UpgradeId == firstCity.UpgradesId);
            var result = await _upgradeJoin.FirstOrDefault(a => a.UpgradeId == firstCity.UpgradesId && a.upgradeType == upgrade.UpgradeType);


        }
    }
}
