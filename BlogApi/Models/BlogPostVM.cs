namespace BlogApi.Models
{
    public class BlogPostVM
    {
        public string Title { get; set; }
        public string Text { get; set; }
        public int Id { get; set; }
        public Picture[] Pictures { get; set; }
    }
}