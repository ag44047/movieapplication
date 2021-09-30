using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class EditDto
    {


        public string Email { get; set; }

        public string DisplayName { get; set; }

        public string Username { get; set; }

        public string PhoneNumber { get; set; }
    }
}
