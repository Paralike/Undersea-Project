using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.DAL.Models;

namespace Undersea.BLL.Interfaces
{
    public interface IAttackService
    {
        public Task<ActionResult> StartAttack(AttackDto attack);

        public Task<IEnumerable<AttackableUsersDto>> GetAttackableUsers();
    }
}
