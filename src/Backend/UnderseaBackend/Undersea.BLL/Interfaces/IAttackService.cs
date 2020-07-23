using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.DTOs.Actions;

namespace Undersea.BLL.Interfaces
{
    public interface IAttackService
    {
        public Task StartAttack(Guid id, AttackDto attack);
        public Task<IEnumerable<AttackableUsersDto>> GetAttackableUsers(Guid userId,string name);
        public Task<List<AttackResponseDto>> GetAttacks(Guid userId);
    }
}
