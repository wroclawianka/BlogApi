import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-single',
  templateUrl: 'post-single.component.html'
})
export class PostSingleComponent implements OnInit {
  @Input() post: Post;
  private postService: PostService;
  private route: ActivatedRoute;
  private location: Location;

  ngOnInit(): void {
    // this.route.paramMap
    //   .switchMap((params: ParamMap) => this.postService.getPost(+params.get('id')))
    //   .subscribe(post => this.post = post);
  }

}

