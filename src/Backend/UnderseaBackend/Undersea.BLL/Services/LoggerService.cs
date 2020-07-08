using log4net.Repository;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Undersea.BLL.Interfaces;

namespace Undersea.BLL.Services
{
    public class LoggerService: ILogService
    {
        private readonly ILoggerRepository _loggerRepository;

        public LoggerService(ILoggerRepository loggerRepository)
        {
            _loggerRepository = loggerRepository;
        }

        public Task LogWarning(string message, Exception e = null)
        {
            // TODO leszármazni baserepoból
            //  _loggerRepository.
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
