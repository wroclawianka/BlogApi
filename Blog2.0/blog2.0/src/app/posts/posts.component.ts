import { Component, OnInit } from '@angular/core';
import { PostService }         from '../post.service';
import { Post } from '../post';

@Component({
 selector: 'blog-posts',
 templateUrl: 'posts.component.html',
 styleUrls: ['posts.component.css']
})
export class PostsComponent implements OnInit {
 posts: Post[];
selectedPost: Post;

 constructor(private postService: PostService) { }

 /*function to retrieve the posts from the service */
 getPosts(): void {
   this.postService.getPosts().then(posts => this.posts = posts);
 }

 ngOnInit(): void {
   this.getPosts();
 }

 onSelect(post: Post): void { 
   this.selectedPost = post;
 }
}