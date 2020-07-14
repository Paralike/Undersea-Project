using AutoMapper;
using Undersea.BLL.DTOs;
using Undersea.BLL.DTOs.GameElemens;
using Undersea.DAL.Models;

namespace Undersea.API.AutoMapper
{
    public class UnderseaApiProfile : Profile
    {
        public UnderseaApiProfile()
        {
            CreateMap<User, AttackableUsersDto>().ReverseMap();
            CreateMap<Army, ArmyDto>().ReverseMap();
            CreateMap<Unit, UnitDto>().ReverseMap();
            CreateMap<UpgradeAttributeJoin, UpgradeDto>().ReverseMap();
            CreateMap<UpgradeAttribute, UpgradeAttributeDto>().ReverseMap();
            CreateMap<City, CityDto>().ReverseMap();
            CreateMap<Building, BuildingDto>().ReverseMap();
            CreateMap<BuildingAttribute, BuildingAttributeDto>().ReverseMap();

        }
    }

}
