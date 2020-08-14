using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using Undersea.BLL.DTOs.GameElemens;
using Undersea.DAL.Models;
using Xunit;
using AutoMapper;
using Undersea.BLL.Interfaces;
using Moq;
using System.Threading.Tasks;

namespace UnitTests.Services
{
    public class UpgradeServicesTests
    {

        [Fact]
        public void GetUpgradesTest()
        {     
            List<UpgradeAttribute> list = new List<UpgradeAttribute>();
            list.Add(new UpgradeAttribute()
            {
                UpgradeType = Undersea.DAL.Enums.UpgradeType.Alkimia,
                Id = Guid.NewGuid(),
                CoralProduction = 50,
                DefensePoints = 0,
                AttackPoints = 0,
                TaxIncrease = 0,
                Name = "Alkímia"
            });
            list.Add(new UpgradeAttribute()
            {
                UpgradeType = Undersea.DAL.Enums.UpgradeType.Iszapkombajn,
                Id = Guid.NewGuid(),
                CoralProduction = 30,
                DefensePoints = 10,
                AttackPoints = 0,
                TaxIncrease = 0,
                Name = "Iszapkombájn"
            });
            //var result = _mapper.Map<List<UpgradeAttributeDto>>(list);
            ICollection<UpgradeAttributeDto> list2 = new List<UpgradeAttributeDto>();
            list2.Add(new UpgradeAttributeDto()
            {
                UpgradeType = Undersea.DAL.Enums.UpgradeType.Alkimia,
                CoralProduction = 50,
                DefensePoints = 0,
                AttackPoints = 0,
                TaxIncrease = 0,
                Name = "Alkímia"
            });
            list2.Add(new UpgradeAttributeDto()
            {
                UpgradeType = Undersea.DAL.Enums.UpgradeType.Iszapkombajn,
                CoralProduction = 30,
                DefensePoints = 10,
                AttackPoints = 0,
                TaxIncrease = 0,
                Name = "Iszapkombájn"
            });
            //Assert.Equal(result.ToString(),list2.ToString());
            var upgraceMock = new Mock<IUpgradeService>();
            upgraceMock.Setup(p => p.GetUpgrades()).ReturnsAsync(list2);
            //Assert.Equal(result2., list2);
        }
    }
}
