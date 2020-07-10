using AutoMapper;
using Microsoft.AspNetCore.Mvc;
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
    public class ProfileService : IProfileService
    {
        private readonly IUserRepository _userRepository;
        private readonly ICityRepository _cityRepository;
        private readonly IMapper _mapper;

        public ProfileService(IUserRepository userRepository, IMapper mapper, ICityRepository cityRepository)
        {
            _userRepository = userRepository;
            _mapper = mapper;
            _cityRepository = cityRepository;
        }

        public async Task DeleteProfile(Guid id)
        {
            var user = await _userRepository.GetById(id);
            await _userRepository.Remove(user);
        }

        public Task<CityDto> GetProfile(User user)
        {
            throw new NotImplementedException();
        }

        public async Task<List<RankDto>> GetRank()
        {
            var cities = await _cityRepository.GetAllCityWithUser();

            return  cities.Select(x => new RankDto { Point = x.Points, Username = x.User.UserName }).ToList();
        }
    }
}
