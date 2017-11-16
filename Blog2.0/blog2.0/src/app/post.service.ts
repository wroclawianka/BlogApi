import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Post } from './post';
import { POSTS } from './mock-posts';

@Injectable()
export class PostService {

    getPosts(): Observable<Post[]> {
        return of(POSTS)
    };
}