using System;
using System.Collections.Generic;
using System.Text;

namespace Undersea.BLL.Exceptions
{
    public class HadvezerException : Exception
    {
            public override string Message => "Legalább egy hadvezért kell küldened a harcba!";
    }
}
