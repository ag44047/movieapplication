﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
   public class EditUserDto
    {
        public string Email { get; set; }

        public string DisplayName { get; set; }

        public string Username { get; set; }

        public string PhoneNumber { get; set; }
    }
}
