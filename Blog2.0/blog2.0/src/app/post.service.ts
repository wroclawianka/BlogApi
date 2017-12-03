import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { APIPost } from './apiPost';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable()
export class PostService {
    private postsUrl = 'http://localhost:11709/api/blogpost/get';

    constructor(
        private http: HttpClient) {
    }

    getPosts(): Observable<APIPost[]> {
        return this.http.get<APIPost[]>(this.postsUrl);
    }

    getPost(Id: number): Observable<APIPost> {
        const url = `${this.postsUrl}/${Id}`;
        return this.http.get<APIPost>(url);
    }
}