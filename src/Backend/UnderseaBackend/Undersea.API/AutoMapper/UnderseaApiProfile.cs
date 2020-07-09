using AutoMapper;
using Undersea.BLL.DTOs;
using Undersea.DAL.Models;

namespace Undersea.API.AutoMapper
{
    public class UnderseaApiProfile : Profile
    {
        public UnderseaApiProfile()
        {
            CreateMap<User, AttackableUsersDto>().ReverseMap();
            CreateMap<Army, ArmyDto>().ReverseMap();
            CreateMap<Upgrade, UpgradeDto>().ReverseMap();
        }
    }

}
