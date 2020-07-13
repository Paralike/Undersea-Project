
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.DTOs.Actions;
using Undersea.BLL.Interfaces;
using Undersea.DAL.Enums;
using Undersea.DAL.Models;
using Undersea.DAL.Repositories.Interfaces;
using Undersea.DAL.Repository.Interfaces;

namespace Undersea.BLL.Services
{
    public class AttackService : IAttackService
    {
        private readonly IUserRepository _userRepository;
        private readonly IAttackRepository _attackRepository;
        private readonly ICityRepository _cityRepository;
        private readonly IArmyRepository _armyRepository;
        private readonly IArmyUnitJoinRepository _armyUnitRepository;
        private readonly IArmyService _armyService;
        private readonly IMapper _mapper;

        public AttackService(IUserRepository userRepository, IAttackRepository attackRepository, IMapper mapper,
                            ICityRepository cityRepository, IArmyRepository armyRepository, IArmyService armyService,
                            IArmyUnitJoinRepository armyUnitRepository)
        {
            _userRepository = userRepository;
            _attackRepository = attackRepository;
            _cityRepository = cityRepository;
            _armyRepository = armyRepository;
            _armyUnitRepository = armyUnitRepository;
            _armyService = armyService;
            _mapper = mapper;

        }
        public async Task<IEnumerable<AttackableUsersDto>> GetAttackableUsers(Guid userId)
        {
            var list = await _userRepository.GetWhere(u => u.Id != userId);

            return _mapper.Map<List<AttackableUsersDto>>(list);
        }

        public async Task StartAttack(Guid userId, AttackDto attack)
        { 
            // TODO City lekérdezést kiszervezni
            var cities = await _cityRepository.GetWhere(c => c.UserId == userId);
            var firstCity = cities.First();

            var defenderCity = (await _cityRepository.GetWhere(c => c.UserId == attack.DefenderCityId)).First();

            int csatacsiko = attack.Units.Where(u => u.UnitType == UnitType.Csatacsiko).Select(u => u.UnitCount).First();
            int rohamfoka = attack.Units.Where(u => u.UnitType == UnitType.Rohamfoka).Select(u => u.UnitCount).First();
            int lezercapa = attack.Units.Where(u => u.UnitType == UnitType.Lezercapa).Select(u => u.UnitCount).First();

            var army = await _armyUnitRepository.GetWhere(u => u.ArmyId == firstCity.AvailableArmyId);

            foreach (ArmyUnit au in army)
            {
                au.UnitCount -= attack.Units.Single(d => d.UnitType == au.UnitType && d.UnitCount <= au.UnitCount).UnitCount;
                await _armyUnitRepository.Update(au);
            }

            Army newArmy = new Army(csatacsiko, lezercapa, rohamfoka)
            {
                CityId = firstCity.Id,               
            };

            await _armyRepository.Add(newArmy);

            Attack newAttack = new Attack()
            {
                DefenderCityId = attack.DefenderCityId,
                DefenderCity = defenderCity,
                AttackerCityId = firstCity.Id,
                AttackerCity = firstCity,
                ArmyId = newArmy.Id,
                Army = newArmy
            };

            await _attackRepository.Add(newAttack);
        }

        public async Task<List<AttackResponseDto>> GetAttacks(Guid userId)
        {
            var cities = await _cityRepository.GetWhere(c => c.UserId == userId);
            var firstCity = cities.First();

            var attacks = (await _attackRepository.GetWhere(a => a.AttackerCityId == firstCity.Id)).ToList();

            List<AttackResponseDto> attackList = new List<AttackResponseDto>();

            foreach(Attack atk in attacks)
            {
                attackList.Add(new AttackResponseDto
                {
                    CityName = firstCity.Name,
                    UnitList = await _armyService.GetArmyById(atk.ArmyId)
                });
            }

            return attackList;

        }
    }
}
