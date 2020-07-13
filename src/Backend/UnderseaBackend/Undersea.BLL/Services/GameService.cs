using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Undersea.BLL.Interfaces;
using Undersea.DAL;
using Undersea.DAL.Models;
using Undersea.DAL.Repositories.Interfaces;
using Undersea.DAL.Repository.Interfaces;

namespace Undersea.BLL.Services
{
    public class GameService : IGameService
    {
        public int CurrentTurn
        {
            get
            {
                return context.Game.First().CurrentTurn;
            }

            set
            {
            }
        }

        private readonly IArmyService _armyService;
        private readonly ICityRepository _cityRepository;
        private readonly IArmyRepository _armyRepository;
        private readonly IAttackRepository _attackRepository;
        private readonly AppDbContext context;

        public GameService(IUserRepository userRepository, ICityRepository cityRepository, IArmyRepository armyRepository,
                            IAttackRepository attackRepository, AppDbContext context, IArmyService armyService)
        {
            CurrentTurn = 1;
            _cityRepository = cityRepository;
            _armyRepository = armyRepository;
            _attackRepository = attackRepository;
            this.context = context;
            _armyService = armyService;
        }

        public GameService()
        {

        }

        public async Task NextTurn()
        {
            var cities = await _cityRepository.GetAll();

            foreach (City c in cities)
            {
                c.PearlCount += c.PearlProduction;
                c.CoralCount += c.CoralProduction;

                // TODO mi van a mínuszba megy át??

                c.PearlCount -= await _armyRepository.GetPearlNecessity(c.AvailableArmyId);
                c.CoralCount -= await _armyRepository.GetFoodNecessity(c.AvailableArmyId);
                await _cityRepository.Update(c);
            }

            var attacks = await _attackRepository.GetAll();

            foreach (Attack a in attacks)
            {
                int defense = await _armyService.GetArmyDefensePower(a.DefenderCity.AvailableArmyId);
                int attack = await _armyService.GetArmyAttackingPower(a.ArmyId);

                // TODO támadóerő +- 5%

                if(attack > defense)
                {
                    a.AttackerCity.PearlCount += a.DefenderCity.PearlCount / 2;
                    a.AttackerCity.CoralCount += a.DefenderCity.CoralCount / 2;

                    a.DefenderCity.CoralCount /= 2;
                    a.DefenderCity.PearlCount /= 2;

                    foreach(ArmyUnit au in a.DefenderCity.AvailableArmy.Units)
                    {
                        au.UnitCount = Convert.ToInt32(au.UnitCount * 0.9);
                    }
                }

                else
                {
                    foreach (ArmyUnit au in a.Army.Units)
                    {
                        au.UnitCount = Convert.ToInt32(au.UnitCount * 0.9);
                    }
                }

                foreach(ArmyUnit au in a.Army.Units) 
                {
                    a.AttackerCity.AvailableArmy.Units.Single(a => a.UnitType == au.UnitType).UnitCount += au.UnitCount;
                }

                await _cityRepository.Update(a.DefenderCity);
                await _cityRepository.Update(a.AttackerCity);
                await _attackRepository.Remove(a);
            }

            // ranglista számolás

            context.Game.First().CurrentTurn++;
            await context.SaveChangesAsync();
        }
    }
}
