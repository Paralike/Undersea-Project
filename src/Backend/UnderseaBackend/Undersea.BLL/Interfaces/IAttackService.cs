using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;

namespace Undersea.BLL.Interfaces
{
    public interface IAttackService
    {
        public Task StartAttack(Guid id, AttackDto attack);

        public Task<IEnumerable<AttackableUsersDto>> GetAttackableUsers();
    }
}
