
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.DTOs.Actions;
using Undersea.BLL.Interfaces;
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
        private readonly IArmyService _armyService;
        private readonly IMapper _mapper;

        public AttackService(IUserRepository userRepository, IAttackRepository attackRepository, IMapper mapper,
                            ICityRepository cityRepository, IArmyRepository armyRepository, IArmyService armyService)
        {
            _userRepository = userRepository;
            _attackRepository = attackRepository;
            _mapper = mapper;
            _cityRepository = cityRepository;
            _armyRepository = armyRepository;
            _armyService = armyService;
        }
        public async Task<IEnumerable<AttackableUsersDto>> GetAttackableUsers(Guid id)
        {
            var list = await _userRepository.GetWhere(u => u.Id != id);

            return _mapper.Map<List<AttackableUsersDto>>(list);
        }

        public Task StartAttack(Guid id, AttackDto attack)
        {

            Attack newAttack = new Attack()
            {
                DefenderCityId = attack.DefenderCityId,
                AttackerCityId = id,
                ArmyId = attack.AttackerArmyId     
            };

            return _attackRepository.Add(newAttack);
        }

        public async Task<List<AttackResponseDto>> GetAttacks(Guid id)
        {
            var cities = await _cityRepository.GetWhere(c => c.UserId == id);
            var firstCity = cities.First();

            var attacks = (await _attackRepository.GetWhere(a => a.AttackerCityId ==  firstCity.Id)).ToList();

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
