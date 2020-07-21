
using AutoMapper;
using Microsoft.EntityFrameworkCore.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.DTOs.Actions;
using Undersea.BLL.Exceptions;
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
            var attackableUsers = await _userRepository.GetWhere(u => u.Id != userId);

            return _mapper.Map<List<AttackableUsersDto>>(attackableUsers);
        }

        public async Task StartAttack(Guid userId, AttackDto attack)
        {
            // TODO City lekérdezést kiszervezni
            var firstCity = await _cityRepository.GetCityByUserId(userId);
            var defenderCity = (await _cityRepository.GetWhere(c => c.UserId == attack.DefenderCityId)).First();
            int hadvezer = attack.Units.Where(u => u.UnitType == UnitType.Hadvezer).Select(u => u.UnitCount).First();

            var types = Enum.GetValues(typeof(UnitType)).Cast<UnitType>().ToList();

            var unitDarab = attack.Units.Join(types,
                            a => a.UnitType,
                            type => type,
                            (a, u) => a.UnitCount)
                            .ToList();                           

            if (hadvezer == 0)
                throw new HadvezerException("Legalább egy hadvezért kell küldened a harcba!");

            var army = await _armyUnitRepository.GetWhere(u => u.ArmyId == firstCity.AvailableArmyId);

            foreach (ArmyUnit au in army)
            {
                au.UnitCount -= attack.Units.Single(d => d.UnitType == au.UnitType && d.UnitCount <= au.UnitCount).UnitCount;
                await _armyUnitRepository.Update(au);
            }

            Army newArmy = new Army(unitDarab);
            newArmy.CityId = firstCity.Id;

            await _armyRepository.Add(newArmy);

            Attack newAttack = new Attack()
            {
                DefenderCityId = attack.DefenderCityId,
                AttackerCityId = firstCity.Id,
                AttackerCity = firstCity,
                DefenderCity = defenderCity,
                ArmyId= newArmy.Id,
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

            foreach (Attack atk in attacks)
            {
                attackList.Add(new AttackResponseDto
                {
                    CityName = atk.DefenderCity.Name,
                    UnitList = await _armyService.GetArmyById(atk.ArmyId),
                    WasSuccessful = atk.WasAttackSuccesful
                });
            }
            return attackList;
        }
    }
}
