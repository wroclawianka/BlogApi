namespace Common.Models
{
    public class Filter
    {
        public int Page { get; set; } 

        public int PageSize { get; set; }

        public bool Asc { get; set;}

        public string OrderBy { get; set; }
    }
}