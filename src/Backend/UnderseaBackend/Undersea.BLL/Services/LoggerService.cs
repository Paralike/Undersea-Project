using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Undersea.BLL.Interfaces;
using Undersea.DAL.Models;
using Undersea.DAL.Repository.Repositories;

namespace Undersea.BLL.Services
{
    public class LoggerService: ILogService
    {
        private readonly ILoggerRepository _loggerRepository;

        public LoggerService(ILoggerRepository loggerRepository)
        {
            _loggerRepository = loggerRepository;
        }

        public LoggerService()
        {

        }

        public Task LogWarning(string message, Exception e = null)
        {
            // TODO leszármazni baserepoból
            _loggerRepository.Add(new ApplicationLog(e.ToString(),message));
            return null;
        }

        public Task LogError(string message, Exception e = null)
        {
            throw new NotImplementedException();
        }

        public Task LogFatal(string message, Exception e = null)
        {
            throw new NotImplementedException();
        }
    }
}
