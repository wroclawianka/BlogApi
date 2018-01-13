using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http;
using BlogApi.Models;

namespace BlogApi.Controllers
{
    public class BlogPostController : ApiController
    {
        private static IEnumerable<BlogPostVM> posts = new BlogPostVM[] {
                new BlogPostVM()
                {
                    Id = 1,
                    Title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    Text = "Quisque commodo tempus tortor, ut aliquet tellus dictum at. Nunc risus lectus, aliquet a pulvinar sit amet, pellentesque eget ipsum. Nulla pretium placerat justo, id condimentum nulla congue egestas. Pellentesque dictum dapibus felis id efficitur. Mauris bibendum ac dui vel egestas. Vivamus in turpis odio. Praesent vel sapien eget leo hendrerit ultrices quis quis velit.",
                },
                new BlogPostVM()
                {
                    Id = 2,
                    Title = "Ut quis felis vestibulum, mollis tellus vitae, ultrices massa",
                    Text = "Vestibulum vitae porta nulla. Mauris lacinia dolor id libero scelerisque auctor. Praesent ut leo ut velit interdum dapibus. Nam a pellentesque sapien. Fusce sit amet erat nec mauris aliquet tempus ut et tellus. Sed vel nunc sapien. Donec ornare, diam at gravida consequat, mi quam posuere metus, ac auctor libero tortor non nulla. In ornare sit amet purus rutrum accumsan.",
                },
                new BlogPostVM()
                {
                    Id = 3,
                    Title = "Consectetur adipiscing elit",
                    Text = "Nunc risus lectus, aliquet a pulvinar sit amet, pellentesque eget ipsum. Nulla pretium placerat justo, id condimentum nulla congue egestas. Pellentesque dictum dapibus felis id efficitur. Mauris bibendum ac dui vel egestas. Vivamus in turpis odio. Praesent vel sapien eget leo hendrerit ultrices quis quis velit.",
                },
                new BlogPostVM()
                {
                    Id = 4,
                    Title = "Mut quis felis vestibulum, mollis tellus vitae, ultrices massa",
                    Text = "Mauris lacinia dolor id libero scelerisque auctor. Praesent ut leo ut velit interdum dapibus. Nam a pellentesque sapien. Fusce sit amet erat nec mauris aliquet tempus ut et tellus. Sed vel nunc sapien. Donec ornare, diam at gravida consequat, mi quam posuere metus, ac auctor libero tortor non nulla. In ornare sit amet purus rutrum accumsan.",
                }
            };
        public BlogPostController()
        {
            
          
        }
        [Route("api/blogpost/get")]
        public IHttpActionResult Get()
        {
            return Json(posts.ToList());
        }
        [Route("api/blogpost/get/{id}")]
        public IHttpActionResult Get(int id)
        {
            return Json(posts.Single(x => x.Id == id));
        }

        [HttpDelete]
        [Route("api/blogpost/delete/{id}")]
        public IHttpActionResult Delete(int id)
        {
            if (posts.All(x => x.Id != id))
            {
                return StatusCode(HttpStatusCode.NotFound);
            }
            posts = posts.Where(x => x.Id != id);
            return Ok();
        }

        [HttpPut]
        [Route("api/blogpost/update")]
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
