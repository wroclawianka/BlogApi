using System.Collections.Generic;
using System.Linq;

namespace Common.Models
{
    public class ServiceResponse<T>
    {
        public T Data { get; set; } 

        public bool IsSuccess => Errors.Any();

        public IEnumerable<string> Errors { get; set; }
        
        public IEnumerable<string> Messages { get; set; } 
    }
}