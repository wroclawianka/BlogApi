import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Post } from './post';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable()
export class PostService {
    private response = [];
    private postsUrl = 'api/posts';

    constructor(
        private http: HttpClient) {
    }

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.postsUrl);
    }

    getPost(id: number): Observable<Post> {
        const url = `${this.postsUrl}/${id}`;
        return this.http.get<Post>(url);
    }
}