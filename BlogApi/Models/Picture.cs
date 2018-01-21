using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BlogApi.Models
{
    public class Picture
    {
        public string Url { get; set; }
        public string Title { get; set; }
        public bool IsMain { get; set; }
    }
}