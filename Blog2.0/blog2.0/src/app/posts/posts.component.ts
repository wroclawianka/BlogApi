import { Component, OnInit, HostListener } from '@angular/core';

import { PostService } from '../post.service';
import { Post } from '../post';
import { ContentLayout } from '../contentLayout.module';


@Component({
  selector: 'app-posts',
  templateUrl: 'posts.component.html',
  styleUrls: ['posts.component.css', '../app.component.css', '../buttons.css', '../pictures.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  contentLayout: ContentLayout = new ContentLayout(1000, ["content", "sidebar"]);


  constructor(private postService: PostService) { }

  getPosts(): void {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }

  createPreview(text: string): string {
    return text.match(/(.{1,199}\w)\s/)[1] + '...'; //TODO - if include <> then exclude this part
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.contentLayout.getGridTemplate();
  }

  ngOnInit(): void {
    this.getPosts();
    this.contentLayout.getGridTemplate();
  }
}