using System;

namespace Undersea.BLL.Exceptions
{
    public class NotEnoughMoneyException : Exception
    {
        public override string Message => "Nincs Pízz";
    }
}
