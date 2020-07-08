using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Undersea.BLL.Interfaces
{
    public interface ILogService
    {
        public Task LogWarning(string message, Exception e = null);
        public Task LogError(string message, Exception e = null);
        public Task LogFatal(string message, Exception e = null);
    }
}
