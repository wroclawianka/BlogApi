import { Component, Input, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { PostService } from '../post.service';
import { APIPost } from '../apiPost';
import { ContentLayout } from '../contentLayout.module';


@Component({
  selector: 'app-post-single',
  templateUrl: 'post-single.component.html',
  styleUrls: ['post-single.component.css', '../app.component.css', '../buttons.css']
})
export class PostSingleComponent implements OnInit {
  @Input() post: APIPost;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location
  ) { }
  contentLayout: ContentLayout = new ContentLayout(1000, ["content", "sidebar"]);



  ngOnInit(): void {
    this.getPost();
    this.contentLayout.getGridTemplate();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.contentLayout.getGridTemplate();
  }

  getPost(): void {
    const Id = +this.route.snapshot.paramMap.get('Id');
    this.postService.getPost(Id)
      .subscribe(post => this.post = post);
  }

  goBack(): void {
    this.location.back();
  }

  delete(){
    this.postService.deletePost(this.post).subscribe(() => this.goBack());
  }

  
  save(){
    this.postService.updatePost(this.post).subscribe(() => this.goBack());
  }
}

