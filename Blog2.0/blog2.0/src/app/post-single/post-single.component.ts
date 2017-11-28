import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { PostService } from '../post.service';
import { APIPost } from '../apiPost';

@Component({
  selector: 'app-post-single',
  templateUrl: 'post-single.component.html'
})
export class PostSingleComponent implements OnInit {
  @Input() post: APIPost;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    const Id = +this.route.snapshot.paramMap.get('Id');
    debugger;
    this.postService.getPost(Id)
      .subscribe(post => this.post = post);
  }

  goBack(): void {
    this.location.back();
  }
}

