using System;
using System.Threading.Tasks;
using Undersea.BLL.Interfaces;
using Undersea.DAL.Models;
using Undersea.DAL.Repository.Repositories;

namespace Undersea.BLL.Services
{
    public class LoggerService : ILogService
    {
        private readonly ILoggerRepository _loggerRepository;

        public LoggerService(ILoggerRepository loggerRepository)
        {
            _loggerRepository = loggerRepository;
        }

        public LoggerService()
        {
        }

        public async Task LogWarning(string message, Exception e = null)
        {
            await _loggerRepository.Add(new ApplicationLog(e.ToString(), message));
        }

        public async Task LogError(string message, Exception e = null)
        {
            await _loggerRepository.Add(new ApplicationLog(e.ToString(), message));
        }

        public async Task LogFatal(string message, Exception e = null)
        {
            await _loggerRepository.Add(new ApplicationLog(e.ToString(), message));
        }
    }
}
