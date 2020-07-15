using System;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;
using Undersea.BLL.Interfaces;
using Undersea.DAL;
using Undersea.DAL.Enums;
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
        private readonly ICityService _cityService;
        private readonly ICityRepository _cityRepository;
        private readonly IArmyRepository _armyRepository;
        private readonly IAttackRepository _attackRepository;
        private readonly IUpgradeJoinRepository _upgradeJoinRepository;
        private readonly IBuildingJoinRepository _buildingJoinRepository;
        private readonly AppDbContext context;

        public GameService(IUserRepository userRepository, ICityRepository cityRepository, IArmyRepository armyRepository,
                            IAttackRepository attackRepository, AppDbContext context, IArmyService armyService, ICityService cityService, IUpgradeJoinRepository upgradeJoinRepository)
        {
            CurrentTurn = 1;
            _cityRepository = cityRepository;
            _armyRepository = armyRepository;
            _attackRepository = attackRepository;
            this.context = context;
            _armyService = armyService;
            _cityService = cityService;
            _upgradeJoinRepository = upgradeJoinRepository;
        }

        public GameService()
        {

        }

        public async Task NextTurn()
        {
            var cities = await _cityRepository.GetAll();

            foreach (City c in cities)
            {
                c.PearlProduction = c.Inhabitants * 25;
                c.PearlCount += c.PearlProduction;
                c.CoralCount += c.CoralProduction;
                c.PearlCount -= await _armyRepository.GetPearlNecessity(c.AvailableArmyId);
                c.CoralCount -= await _armyRepository.GetFoodNecessity(c.AvailableArmyId);
                /*foreach (UpgradeAttributeJoin u in c.Upgrades.UpgradeAttributes)
                {
                    if (u.Status == Status.InProgress)
                    {
                        u.CurrentTurn += 1;
                        if (u.CurrentTurn == 15)
                        {
                            u.Status = Status.Done;
                            u.CurrentTurn = 0;
                        }
                    }
                }
                foreach (BuildingAttributeJoin b in c.Buildings.BuildingAttributes)
                {
                    if (b.Status == Status.InProgress)
                    {
                        b.CurrentTurn += 1;
                        if (b.CurrentTurn == 15)
                        {
                            b.Status = Status.UnBuilt;
                            b.CurrentTurn = 0;
                            b.Quantity += 1;
                        }
                    }
                }*/
                await _cityRepository.Update(c);
            }
            var upgrades = await _upgradeJoinRepository.GetAll();
            foreach(UpgradeAttributeJoin u in upgrades)
            {
                if (u.Status == Status.InProgress)
                {
                    u.CurrentTurn += 1;
                    if (u.CurrentTurn == 15)
                    {
                        u.Status = Status.Done;
                        u.CurrentTurn = 0;
                    }
                }
                await _upgradeJoinRepository.Update(u);
            }
            
            var buildings = await _buildingJoinRepository.GetAll();
            foreach(BuildingAttributeJoin b in buildings)
            {
                if (b.Status == Status.InProgress)
                {
                    b.CurrentTurn += 1;
                    if (b.CurrentTurn == 15)
                    {
                        b.Status = Status.UnBuilt;
                        b.CurrentTurn = 0;
                        b.Quantity += 1;
                    }
                }
                await _buildingJoinRepository.Update(b);
            }


            var attacks = await _attackRepository.GetAll();

            foreach (Attack a in attacks)
            {
                int defense = await _armyService.GetArmyDefensePower(a.DefenderCity.AvailableArmyId);
                int attack = await _armyService.GetArmyAttackingPower(a.ArmyId);

                // TODO támadóerő +- 5%

                if (attack > defense)
                {
                    a.AttackerCity.PearlCount += a.DefenderCity.PearlCount / 2;
                    a.AttackerCity.CoralCount += a.DefenderCity.CoralCount / 2;

                    a.DefenderCity.CoralCount /= 2;
                    a.DefenderCity.PearlCount /= 2;

                    foreach (ArmyUnit au in a.DefenderCity.AvailableArmy.Units)
                    {
                        au.UnitCount = Convert.ToInt32(Math.Floor(au.UnitCount * 0.9));
                    }
                }

                else
                {
                    foreach (ArmyUnit au in a.Army.Units)
                    {
                        au.UnitCount = Convert.ToInt32(Math.Floor(au.UnitCount * 0.9));
                    }
                }

                foreach (ArmyUnit au in a.Army.Units)
                {
                    a.AttackerCity.AvailableArmy.Units.First(a => a.UnitType == au.UnitType).UnitCount += au.UnitCount;
                }

                await _cityRepository.Update(a.DefenderCity);
                await _cityRepository.Update(a.AttackerCity);
                await _attackRepository.Remove(a);
            }

            foreach (City c in cities)
            {
                c.Points = await _cityService.CalculatePoints(c.UserId);
                await _cityRepository.Update(c);
            }

            //rank számítás

            context.Game.First().CurrentTurn++;
            await context.SaveChangesAsync();
        }
    }
}
