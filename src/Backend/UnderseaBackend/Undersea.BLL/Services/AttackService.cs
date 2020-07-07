
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.Interfaces;
using Undersea.DAL;
using Undersea.DAL.Models;
using Undersea.DAL.Repositories.Interfaces;

namespace Undersea.BLL.Services
{
    public class AttackService : IAttackService
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public AttackService(IUserRepository userRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }
        public async Task<IEnumerable<AttackableUsersDto>> GetAttackableUsers()
        {
            var list = _userRepository.GetAll();

            return _mapper.Map<List<AttackableUsersDto>>(list);
        }

        public Task<ActionResult> StartAttack(AttackDto attack)
        {
            throw new NotImplementedException();
        }
    }
}
