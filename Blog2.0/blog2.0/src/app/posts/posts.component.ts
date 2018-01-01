import { Component, OnInit } from '@angular/core';

import { PostService } from '../post.service';
import { APIPost } from '../apiPost';

@Component({
  selector: 'app-posts',
  templateUrl: 'posts.component.html',
  styleUrls: ['posts.component.css', '../app.component.css', '../buttons.css']
})
export class PostsComponent implements OnInit {
  posts: APIPost[];

  constructor(private postService: PostService) { }

  getPosts(): void {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }

  createPreview(text : string) : string {
      return text.match(/(.{1,199}\w)\s/)[1] + '...';
  }

  ngOnInit(): void {
    this.getPosts();
  }
}