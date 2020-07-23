using System.ComponentModel.DataAnnotations;

namespace Undersea.BLL.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public string City { get; set; }

    }
}
