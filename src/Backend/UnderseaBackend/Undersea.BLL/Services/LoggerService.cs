using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Undersea.BLL.Interfaces;

namespace Undersea.BLL.Services
{
    public class LoggerService: ILogService
    {
        public Task LogWarning(string message, Exception e = null)
        {
            throw new NotImplementedException();
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
