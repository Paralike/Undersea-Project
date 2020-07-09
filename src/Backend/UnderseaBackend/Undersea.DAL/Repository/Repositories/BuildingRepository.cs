﻿using System;
using System.Collections.Generic;
using System.Text;
using Undersea.DAL.Models;
using Undersea.DAL.Repositories.Interfaces;

namespace Undersea.DAL.Repositories
{
    public class BuildingRepository : BaseRepository<Building>, IBuildingRepository
    {
        public BuildingRepository(AppDbContext context) : base(context) { }
    }
}