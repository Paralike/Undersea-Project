using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Undersea.BLL.DTOs;
using Undersea.DAL.Models;

namespace Undersea.API.AutoMapper
{
    public class UnderseaApiProfile : Profile
    {
        public UnderseaApiProfile()
        {
            CreateMap<User, AttackableUsersDto>().ReverseMap();
        }
    }

}
