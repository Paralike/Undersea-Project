﻿using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.DTOs.Actions;
using Undersea.DAL.Models;

namespace Undersea.BLL.Interfaces
{
    public interface IAttackService
    {
        public Task StartAttack(Guid id, AttackDto attack);
        public Task<IEnumerable<AttackableUsersDto>> GetAttackableUsers(Guid userId);
        public Task<List<AttackResponseDto>> GetAttacks(Guid userId);
        public Task<int> CalculateSpyingAsnyc(Attack a);
    }
}
