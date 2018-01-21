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
                    Title = "Troja Castle. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    Text = "Quisque commodo tempus tortor, ut aliquet tellus dictum at. Nunc risus lectus, aliquet a pulvinar sit amet, pellentesque eget ipsum. " +
                    "Nulla pretium placerat justo, id condimentum nulla congue egestas. Pellentesque dictum dapibus felis id efficitur. Mauris bibendum ac dui vel egestas. " +
                    "Vivamus in turpis odio. Praesent vel sapien eget leo hendrerit ultrices quis quis velit.Phasellus sagittis iaculis pretium. Fusce quis eleifend ex, sed egestas sapien." +
                    " Aenean venenatis euismod neque in facilisis. Vestibulum nunc risus, pellentesque nec convallis in, tempor in velit. Proin tincidunt nunc eget lectus ultrices, sit amet" +
                    " vestibulum nisi volutpat. Cras id blandit tellus. Praesent id erat sed metus luctus pulvinar.",
                    Pictures = new Picture[]{
                        new Picture { Url = @".\assets\imgs\post_001_01.jpg", Title="Troja Castle from front side", IsMain=true},
                        new Picture { Url = @".\assets\imgs\post_001_02.jpg", Title ="Troja Castle and its garden"}
                    },
                },
                new BlogPostVM()
                {
                    Id = 2,
                    Title = "Kutna Hora. Ut quis felis vestibulum, mollis tellus vitae, ultrices massa",
                    Text = "Vestibulum vitae porta nulla. Mauris lacinia dolor id libero scelerisque auctor. Praesent ut leo ut velit interdum dapibus. Nam a pellentesque sapien." +
                    " Fusce sit amet erat nec mauris aliquet tempus ut et tellus. Sed vel nunc sapien. Donec ornare, diam at gravida consequat, mi quam posuere metus, ac auctor " +
                    "libero tortor non nulla. In ornare sit amet purus rutrum accumsan. Suspendisse iaculis justo et vestibulum accumsan. Nullam eget convallis justo. " +
                    "Quisque tempor massa mi, posuere molestie enim rhoncus a. Suspendisse at erat sollicitudin, fringilla augue eu, mollis nulla. Nam efficitur dolor ac nisl" +
                    " ultricies volutpat. Cras ultrices sem ac vulputate facilisis. Mauris feugiat mi felis, sed tempor est molestie non. Aenean rhoncus facilisis urna non " +
                    "dapibus. Donec semper sit amet dolor in placerat. Vestibulum sed quam nec orci tempor sagittis. Mauris nec pulvinar nulla, ac commodo augue.",
                    Pictures = new Picture[]{
                        new Picture { Url = @".\assets\imgs\post_002_01.jpg", Title="St. Barbara Church", IsMain=true},
                        new Picture { Url = @".\assets\imgs\post_002_02.jpg", Title ="View to the St. James Church"}
                    },
                },
                new BlogPostVM()
                {
                    Id = 3,
                    Title = "Polish Embassy in Prague. Consectetur adipiscing elit",
                    Text = "Nunc risus lectus, aliquet a pulvinar sit amet, pellentesque eget ipsum. Nulla pretium placerat justo, id condimentum nulla congue egestas. " +
                    "Pellentesque dictum dapibus felis id efficitur. Mauris bibendum ac dui vel egestas. Vivamus in turpis odio. Praesent vel sapien eget leo hendrerit " +
                    "ultrices quis quis velit. Integer dignissim, nunc eget faucibus bibendum, ipsum est finibus dui, id iaculis augue justo consequat ante. Donec malesuada" +
                    " pulvinar vulputate. Integer vitae sem quis nulla consectetur mattis nec in metus. Nulla ac eleifend nulla, in dignissim diam. Cras in metus ante. Sed auctor" +
                    " iaculis dolor sed luctus.",
                    Pictures = new Picture[]{
                        new Picture { Url = @".\assets\imgs\post_003_01.jpg", Title="Polish Embassy in Prague, view from garden", IsMain=true},
                        new Picture { Url = @".\assets\imgs\post_003_02.jpg", Title ="Garden of Polish Embassy in Prague"},
                        new Picture { Url = @".\assets\imgs\post_003_03.jpg", Title ="Garden of Polish Embassy in Prague, white and red flowers"},
                        new Picture { Url = @".\assets\imgs\post_003_04.jpg", Title ="Garden of Polish Embassy in Prague, sculpture"},
                    },
                },
                new BlogPostVM()
                {
                    Id = 4,
                    Title = "Malešický park. Mut quis felis vestibulum, mollis tellus vitae, ultrices massa",
                    Text = "Mauris lacinia dolor id libero scelerisque auctor. Praesent ut leo ut velit interdum dapibus. Nam a pellentesque sapien. " +
                    "Fusce sit amet erat nec mauris aliquet tempus ut et tellus. Sed vel nunc sapien. Donec ornare, diam at gravida consequat, mi quam posuere metus," +
                    " ac auctor libero tortor non nulla. In ornare sit amet purus rutrum accumsan.Maecenas efficitur cursus ipsum non facilisis. Vivamus a ex convallis, " +
                    "auctor nisl quis, commodo nibh. Cras efficitur eros sed elit tempus, in suscipit diam venenatis. Nunc iaculis faucibus rhoncus. Nulla mollis lorem id " +
                    "orci scelerisque, quis sodales quam placerat. Aenean at sodales justo. Morbi vitae felis tellus. Pellentesque bibendum, turpis a sagittis consequat, " +
                    "nisl est feugiat dolor, quis condimentum ante sapien sodales metus.",
                    Pictures = new Picture[]{
                        new Picture { Url = @".\assets\imgs\post_004_01.jpg", Title="Malešický park"},
                        new Picture { Url = @".\assets\imgs\post_004_02.jpg", Title="Malešický park"},
                        new Picture { Url = @".\assets\imgs\post_004_03.jpg", Title="Malešický park", IsMain=true}
                    },
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
