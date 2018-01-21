import { Component, Input, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { PostService } from '../post.service';
import { Post } from '../post';
import { ContentLayout } from '../contentLayout.module';


@Component({
  selector: 'app-post-single',
  templateUrl: 'post-single.component.html',
  styleUrls: ['post-single.component.css', '../app.component.css', '../buttons.css']
})
export class PostSingleComponent implements OnInit {
  @Input() post: Post;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location
  ) { }
  contentLayout: ContentLayout = new ContentLayout(1000, ["content", "sidebar"]);
  editmode: boolean;
  oldPost : Post;

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
    let msg = "Are you sure that you want to delete the post?"
    if(confirm(msg)){
      this.postService.deletePost(this.post).subscribe(() => this.goBack());
    }
  }

  edit(){
    this.oldPost = Object.assign({}, this.post); 
    this.toggleEdit();
  }

  save(){
    this.postService.updatePost(this.post).subscribe(() => this.toggleEdit());
  }

  cancel(){
    this.post = Object.assign({}, this.oldPost); 
    this.toggleEdit();
  }

  toggleEdit(){
    this.editmode = !this.editmode;
  }
}

