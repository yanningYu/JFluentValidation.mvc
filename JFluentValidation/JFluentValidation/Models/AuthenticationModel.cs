using System;

namespace JFluentValidation.Models
{
    public class AuthenticationModel
    {
        public string UserName { get; set; }

        public string Password { get; set; }

        public DateTime LoginDateTime { get; set; }
    }
}