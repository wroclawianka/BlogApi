import { Component, OnInit, HostListener } from '@angular/core';
import * as _ from 'lodash';

import { PostService } from '../../services/post.service';
import { PostModelService } from '../../services/postModelService'
import { Post } from './post';
import { Picture } from './picture';

import { ContentLayout } from '../../modules/contentLayout.module';


@Component({
  selector: 'app-posts',
  templateUrl: 'posts.component.html',
  styleUrls: ['posts.component.css', '../../app.component.css', '../../../styles/buttons.css', '../../../styles/pictures.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  contentLayout: ContentLayout = new ContentLayout(1000, ["content", "sidebar"]);

  constructor(private postService: PostService) { }

  getPosts(): void {
    this.postService
    .getPosts()
    .subscribe((postsModelService : PostModelService[]) => this.posts = this.mapToPosts(postsModelService)); 
  }

  @HostListener('window:resize', ['$event'])
  
  onResize(event) {
    this.contentLayout.getGridTemplate();
  }
  
  ngOnInit(): void {
    this.getPosts();
    this.contentLayout.getGridTemplate();
  }

  // mapping methods
  findMainPicture(pictures) {
    return pictures[_.findIndex(pictures,(x:Picture) => x.isMain)];
  }

  mapToPosts(postsModelService : PostModelService[]) : Post[]{
    let posts : Post[] = [];

    for(let postModelService of postsModelService){
      posts.push(this.mapToPost(postModelService));
    }

    return posts;
  }
  
  mapToPost(postModelService: PostModelService): Post {
    let pictures: Picture[] = this.mapPictures(postModelService.Pictures);
    let mainPicture: Picture = this.findMainPicture(pictures)
    let preview = postModelService.Text.match(/(.{1,199}\w)\s/)[1] + '...';
  
    return {
      id: postModelService.Id,
      title: postModelService.Title,
      preview: preview,
      mainPicture: mainPicture
    };
  }
  
  mapPictures(picturesList): Picture[] {
    let pictures: Picture[] = [];
  
    picturesList.forEach(pic => {
      pictures.push(this.mapPicture(pic));
    });
  
    return pictures;
  }
  
  mapPicture(pic): Picture {
    return {
      url: pic.Url,
      title: pic.Title,
      isMain: pic.IsMain
    }
  }
}