using System;
using System.Collections.Generic;
using System.Text;
using Undersea.DAL.Models;
using Undersea.DAL.Repositories.Interfaces;

namespace Undersea.DAL.Repository.Repositories
{
    public interface ILoggerRepository: IBaseRepository<ApplicationLog>
    {
    }
}
