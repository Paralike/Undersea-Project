using Newtonsoft.Json;

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
