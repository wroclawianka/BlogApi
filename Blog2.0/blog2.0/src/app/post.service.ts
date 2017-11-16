import { Injectable } from '@angular/core';

import { Post } from './post';
import { POSTS } from './mock-posts';

@Injectable()
export class PostService {

    getPost(id: number): Promise<Post> {
        debugger;
        return this.getPosts()
            .then(posts => posts.find(post => post.id === id));
    }

    getPosts(): Promise<Post[]> {
        return Promise.resolve(POSTS)
    };
}