using System;
using System.Collections.Generic;
using System.Text;

namespace Undersea.BLL.Exceptions
{
    public class ExistingBuildingException : Exception
    {
        public override string Message => "Hiba, ez az épület vagy már meg van véve, vagy valamelyik épület már épül";
    }
}
