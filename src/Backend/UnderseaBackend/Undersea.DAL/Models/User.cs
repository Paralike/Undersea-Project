using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;

namespace Undersea.DAL.Models
{
    public class User : IdentityUser<Guid>, IDbEntity
    {
        public virtual ICollection<City> Cities { get; set; }
        public User(string name, string city) : base(name)
        {
            /*Cities = new List<City> {
                new City()
            {
                Name = city
            }
            };*/
        }

        public User()
        {

        }
    }
}
