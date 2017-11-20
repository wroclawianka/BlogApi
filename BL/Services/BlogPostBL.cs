using System.Collections.Generic;
using BL.Interfaces;
using BL.Models;
using Common.Models;
using DA.Interfaces;

namespace BL.Services
{
    public class BlogPostBl : IBlogPostBL
    {
        private IBlogPostDA blogPostDa;

        public BlogPostBl(IBlogPostDA blogPostDa)
        {
            this.blogPostDa = blogPostDa;
        }

        public ServiceResponse<IEnumerable<BlogPostModel>> Get(Filter filter)
        {
            throw new System.NotImplementedException();
        }

        public ServiceResponse<BlogPostModel> Get(int id)
        {
            throw new System.NotImplementedException();
        }

        public ServiceResponse<BlogPostModel> Update(BlogPostModel toUpdate)
        {
            throw new System.NotImplementedException();
        }

        public ServiceResponse<BlogPostModel> Add(BlogPostModel toAdd)
        {
            throw new System.NotImplementedException();
        }
    }
}