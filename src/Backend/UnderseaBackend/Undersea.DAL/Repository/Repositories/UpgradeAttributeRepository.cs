﻿using System;
using System.Collections.Generic;
using System.Text;
using Undersea.DAL.Models;
using Undersea.DAL.Repositories;
using Undersea.DAL.Repository.Interfaces;

namespace Undersea.DAL.Repository.Repositories
{
    public class UpgradeAttributeRepository : BaseRepository<UpgradeAttribute>, IUpgradeAttributeRepository
    {
        public UpgradeAttributeRepository(AppDbContext context) : base(context)
        {
        }
    }
}
