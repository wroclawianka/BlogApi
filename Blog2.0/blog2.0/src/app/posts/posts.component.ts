import { Component, OnInit, HostListener } from '@angular/core';

import { PostService } from '../post.service';
import { APIPost } from '../apiPost';
import { ContentLayout } from '../contentLayout.module';


@Component({
  selector: 'app-posts',
  templateUrl: 'posts.component.html',
  styleUrls: ['posts.component.css', '../app.component.css', '../buttons.css']
})
export class PostsComponent implements OnInit {
  posts: APIPost[];
  contentLayout: ContentLayout = new ContentLayout(1000, ["content", "sidebar"]);


  constructor(private postService: PostService) { }

  getPosts(): void {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }

  createPreview(text: string): string {
    return text.match(/(.{1,199}\w)\s/)[1] + '...';
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