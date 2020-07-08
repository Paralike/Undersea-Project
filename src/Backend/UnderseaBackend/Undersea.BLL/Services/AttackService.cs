
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
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
        private readonly IMapper _mapper;

        public AttackService(IUserRepository userRepository, IAttackRepository attackRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _attackRepository = attackRepository;
            _mapper = mapper;
        }
        public async Task<IEnumerable<AttackableUsersDto>> GetAttackableUsers()
        {
            // TODO saját magát ne adja vissza

            var list = await _userRepository.GetAll();

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
    }
}
