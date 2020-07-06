using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;

namespace Undersea.DAL.Models
{
    public class User : IdentityUser<Guid>
    {
        public virtual ICollection<City> Cities { get; set; }
        public User(string name) : base(name)
        {

        }

        public User()
        {

        }
    }
}
