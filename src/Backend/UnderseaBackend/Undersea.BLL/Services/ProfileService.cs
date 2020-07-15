using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.BLL.Interfaces;
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

        public async Task<RankDto> GetProfile(Guid userId)
        {
            var city = (await _cityRepository.GetWhere(c => c.UserId == userId)).First();

            return new RankDto()
            {
                UserId = userId,
                CityName = city.Name,
                Username = city.User.UserName,
                Rank = await GetUserRank(userId)
            };
        }

        public async Task<List<RankDto>> GetRank()
        {
            var cities = await _cityRepository.GetAllCityWithUser();

            var ranks = cities.Select(x =>
            new RankDto
            {
                UserId = x.UserId,
                Point = x.Points,
                Username = x.User.UserName,
                CityName = x.Name
                
            }).OrderByDescending(c => c.Point).ToList();

            foreach(RankDto rank in ranks)
            {
                rank.Rank = ranks.FindIndex(r => r.UserId == rank.UserId) + 1;
            }

            return ranks;
        }

        public async Task<int> GetUserRank(Guid userId)
        {
            var cities = await _cityRepository.GetAllCityWithUser();

            var ranks = cities.Select(x =>
            new RankDto
            {
                UserId = x.UserId,
                Point = x.Points,
                Username = x.User.UserName
            }).OrderBy(c => c.Point).ToList();

            int rank = ranks.FindIndex(r => r.UserId == userId) + 1;

            return rank;
        }
    }
}
