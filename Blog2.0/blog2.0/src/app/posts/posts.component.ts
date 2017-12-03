import { Component, OnInit } from '@angular/core';

import { PostService } from '../post.service';
import { APIPost } from '../apiPost';

@Component({
  selector: 'app-posts',
  templateUrl: 'posts.component.html',
  styleUrls: ['posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: APIPost[];

  constructor(private postService: PostService) { }

  getPosts(): void {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }

  ngOnInit(): void {
    this.getPosts();
  }
}