﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.DAL;
using Undersea.DAL.Models;

namespace Undersea.BLL.Interfaces
{
    public interface IProfileService
    {
        public Task<CityDto> GetProfile(User user);
        public Task DeleteProfile(Guid id);
        public Task<List<RankDto>> GetRank();

    }
}
