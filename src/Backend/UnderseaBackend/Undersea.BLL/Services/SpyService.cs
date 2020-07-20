﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Undersea.BLL.DTOs.Actions;
using Undersea.BLL.Interfaces;
using Undersea.DAL.Enums;
using Undersea.DAL.Models;
using Undersea.DAL.Repositories.Interfaces;
using Undersea.DAL.Repository.Interfaces;

namespace Undersea.BLL.Services
{
    public class SpyService : ISpyService
    {
        private readonly ISpyRepository _spyRepository;
        private readonly IUserService _userService;
        private readonly ICityRepository _cityRepository;
        private readonly IArmyUnitJoinRepository _armyUnitRepository;

        public SpyService(ISpyRepository spyRepository, IUserService userService, ICityRepository cityRepository, IArmyUnitJoinRepository armyUnitRepository)
        {
            _spyRepository = spyRepository;
            _userService = userService;
            _cityRepository = cityRepository;
            _armyUnitRepository = armyUnitRepository;
        }

        public async Task<List<SpyingResponseDto>> GetSpyings()
        {
            var spyings = (await _spyRepository.GetWhere(a => a.AttackerCity.UserId == _userService.GetCurrentUserId())).ToList();

            List<SpyingResponseDto> spyingList = new List<SpyingResponseDto>();

            foreach (Spying s in spyings)
            {
                spyingList.Add(new SpyingResponseDto
                {
                    CityName = s.DefenderCity.Name,
                    SpyCount = s.SpyCount,
                    WasSuccessful = s.WasSpyingSuccesful
                });
            }

            return spyingList;
        }

        public async Task StartSpying(SpyingDto s)
        {
            // TODO City lekérdezést kiszervezni
            var firstCity = (await _cityRepository.GetWhere(c => c.UserId == _userService.GetCurrentUserId())).First();
            var defenderCity = (await _cityRepository.GetWhere(c => c.UserId == s.DefenderCityId)).First();

            var armyUnit = (await _armyUnitRepository.GetWhere(u => u.ArmyId == firstCity.AvailableArmyId && u.UnitType == UnitType.Felfedezo)).First();

            armyUnit.UnitCount -= s.SpyCount;

            Spying spying = new Spying()
            {
              AttackerCityId =  firstCity.Id,
              DefenderCityId = s.DefenderCityId,
              SpyCount = s.SpyCount              
            };

            await _spyRepository.Add(spying);
        }

        public int CalculateSpying(Spying s)
        { 
            int tamadoKemek = s.SpyCount; 
            int vedekezoKemek = s.DefenderCity.AvailableArmy.Units.Count(u => u.UnitType == UnitType.Felfedezo);

            return (tamadoKemek - vedekezoKemek) * 5;
        }
    }
}
