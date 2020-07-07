using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.Interfaces;
using Undersea.DAL;

namespace Undersea.BLL.Services
{
   public class ArmyService : IArmyService
    {
        private readonly AppDbContext _context;
        public ArmyService(AppDbContext context)
        {
            _context = context;
        }

        public Task<ActionResult<ICollection<UnitDto>>> GetArmy()
        {
            throw new NotImplementedException();
        }

        public Task<ActionResult> PurchaseUnits()
        {
            throw new NotImplementedException();
        }
    }
}
