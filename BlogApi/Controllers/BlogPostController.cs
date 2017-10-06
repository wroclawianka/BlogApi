using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http;
using BlogApi.Models;

namespace BlogApi.Controllers
{
    public class BlogPostController : ApiController
    {
        private IEnumerable<BlogPostVM> posts;
        public BlogPostController()
        {
            posts = new List<BlogPostVM>()
            {
                new BlogPostVM()
                {
                    Id = 1,
                    Text = "text1",
                    Title = "title1"
                },
                new BlogPostVM()
                {
                    Text = "text2",
                    Title = "title2",
                    Id = 2
                }
            };
        }
        public IHttpActionResult Get()
        {
            return Json(this.posts);
        }

        public IHttpActionResult Get(int id)
        {
            return Json(posts.Single(x => x.Id == id));
        }

        public IHttpActionResult Delete(int id)
        {
            if (posts.All(x => x.Id != id))
            {
                return StatusCode(HttpStatusCode.NotFound);
            }
            posts = posts.Where(x => x.Id != id);
            return Ok();
        }

        public IHttpActionResult Update(BlogPostVM toUpdate)
        {
            if (posts.All(x => x.Id != toUpdate.Id))
            {
                return StatusCode(HttpStatusCode.NotFound);
            }
            posts.Single(x => x.Id == toUpdate.Id).Text = toUpdate.Text;
            posts.Single(x => x.Id == toUpdate.Id).Title = toUpdate.Title;
            return Ok();
        }
    }
}
