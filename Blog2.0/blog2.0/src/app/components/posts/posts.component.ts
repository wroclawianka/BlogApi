import { Component, OnInit, HostListener } from '@angular/core';
import * as _ from 'lodash';

import { PostService } from '../../services/post/post.service';
import { PostModelService } from '../../services/post/postModelService.model'
import { Picture as PictureModelService} from '../../services/post/picture.model';

import { Post } from './post.model';
import { Picture } from './picture.model';

import { ContentLayout } from '../../modules/contentLayout.module';


@Component({
  selector: 'app-posts',
  templateUrl: 'posts.component.html',
  styleUrls: [
    '../../../styles/buttons.css', 
    '../../../styles/pictures.css',
    '../../app.component.css', 
    'posts.component.css', 
]
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
  
  onResize(event : Event) {
    this.contentLayout.getGridTemplate();
  }
  
  ngOnInit(): void {
    this.getPosts();
    this.contentLayout.getGridTemplate();
  }

  // mapping methods
  findMainPicture(pictures : Picture[]) {
    return pictures[_.findIndex(pictures,(x:Picture) => x.isMain)];
  }

  findPreview(text : string){
    return text.match(/(.{1,199}\w)\s/)[1] + '...'
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
    let preview = this.findPreview(postModelService.Text);
  
    return {
      id: postModelService.Id,
      title: postModelService.Title,
      preview: preview,
      mainPicture: mainPicture
    };
  }
  
  mapPictures(picturesList : PictureModelService[]): Picture[] {
    let pictures: Picture[] = [];
  
    picturesList.forEach(pic => {
      pictures.push(this.mapPicture(pic));
    });
  
    return pictures;
  }
  
  mapPicture(pic : PictureModelService): Picture {
    return {
      url: pic.Url,
      title: pic.Title,
      isMain: pic.IsMain
    }
  }
}