using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace Undersea.BLL.DTOs.Exception
{
    public class ErrorDto
    {
        public string Message { get; set; }

        public override string ToString()
        {
            return JsonConvert.SerializeObject(this);
        }
    }
}
