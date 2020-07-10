using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Text;
using System.Threading.Tasks;
using Undersea.BLL.Interfaces;
using Undersea.DAL.Models;
using Undersea.DAL.Repositories.Interfaces;
using Undersea.DAL.Repository.Interfaces;

namespace Undersea.BLL.Services
{
    public class GameService : IGameService
    {
        private static IGameService _instance;

        public static int CurrentTurn { get; set; }
        private readonly IUserRepository _userRepository;
        private readonly ICityRepository _cityRepository;
        private readonly IArmyRepository _armyRepository;
        private readonly IAttackRepository _attackRepository;

        public GameService(IUserRepository userRepository, ICityRepository cityRepository, IArmyRepository armyRepository,
                            IAttackRepository attackRepository)
        {
            CurrentTurn = 1;
            _userRepository = userRepository;
            _cityRepository = cityRepository;
            _armyRepository = armyRepository;
            _attackRepository = attackRepository;
        }
        //public static IGameService Instance
        //{
        //    get
        //    {
        //        if (_instance == null)
        //            _instance = new GameService();

        //        return Instance;
        //    }
        //}

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
            }

            var attacks = await _attackRepository.GetAll();

            foreach (Attack a in attacks)
            {
                //harc szimulálás
            }

            // ranglista számolás
            CurrentTurn++;
        }
    }
}
