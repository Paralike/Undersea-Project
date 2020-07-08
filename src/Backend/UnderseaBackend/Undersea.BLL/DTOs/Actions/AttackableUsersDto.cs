using System;
using System.ComponentModel.DataAnnotations;

namespace Undersea.BLL.DTOs
{
    public class AttackableUsersDto
    {
        public Guid Id { get; set; }

        [Required]
        public string Username { get; set; }
    }
}
