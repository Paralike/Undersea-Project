﻿using Microsoft.AspNetCore.Mvc;
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
        public Task<IEnumerable<AttackableUsersDto>> GetAttackableUsers(Guid id);
        public Task<List<AttackResponseDto>> GetAttacks(Guid id);
    }
}
