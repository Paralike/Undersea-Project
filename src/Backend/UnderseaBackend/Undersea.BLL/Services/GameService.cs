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
                c.PearlCount -= await _armyRepository.GetPearlNecessity(c.AvailableArmyId);
                c.CoralCount -= await _armyRepository.GetFoodNecessity(c.AvailableArmyId);
                await _cityRepository.Update(c);
            }

            var attacks = await _attackRepository.GetAll();

            foreach (Attack a in attacks)
            {
                int defense = await _armyService.GetArmyDefensePower(a.DefenderCity.AvailableArmyId);
                int attack = await _armyService.GetArmyAttackingPower(a.AttackerCity.AvailableArmyId);

                if(attack > defense)
                {

                }
            }

            // ranglista számolás

            context.Game.First().CurrentTurn++;
            await context.SaveChangesAsync();
        }
    }
}
