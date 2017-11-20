using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;
using BL.Models;
using Common.Models;

namespace BL.Interfaces
{
    public interface IBlogPostBL
    {
        ServiceResponse<IEnumerable<BlogPostModel>> Get(Filter filter);

        ServiceResponse<BlogPostModel> Get(int id);

        ServiceResponse<BlogPostModel> Update(BlogPostModel toUpdate);

        ServiceResponse<BlogPostModel> Add(BlogPostModel toAdd);
    }
}