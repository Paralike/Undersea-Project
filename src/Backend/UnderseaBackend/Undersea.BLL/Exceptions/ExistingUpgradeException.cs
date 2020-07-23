using System;
using System.Net;

namespace Undersea.BLL.Exceptions
{
    public class ExistingUpgradeException : Exception
    {
        public override string Message => "Hiba, ez a fejlesztés vagy már meg van véve, vagy valamelyik fejlesztés már folyamatban van";
    }
}
