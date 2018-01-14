import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { APIPost } from './apiPost';
import { identifierModuleUrl } from '@angular/compiler';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PostService { 

    private enableAPImode : boolean = true;
    private postsUrl = this.findUrl();
    private findUrl() : string{
        var apiUrl = 'http://localhost:11709/api/blogpost';
        var mockUrl = 'api/posts';
        return  this.enableAPImode ? apiUrl : mockUrl;}
        
    
    constructor(
        private http: HttpClient) {
    }

    getPosts(): Observable<APIPost[]> {
        return this.http.get<APIPost[]>(`${this.postsUrl}/get`);
    }

    getPost(Id: number): Observable<APIPost> {
        const url = `${this.postsUrl}/get/${Id}`;
        return this.http.get<APIPost>(url)
        .pipe(
          tap(_ => this.log(`fetched post Id=${Id}`)),
          catchError(this.handleError<APIPost>(`getPost Id=${Id}`))
        );
      }

      updatePost(post:APIPost) : Observable<any>{
        return this.http.put(`${this.postsUrl}/update`, post, httpOptions).pipe(
          tap(_ => this.log(`updated post id=${post.Id}`)),
          catchError(this.handleError<any>('updatePost'))
        );
      }

      /** DELETE: delete the post from the server */
      deletePost (post: APIPost | number): Observable<APIPost> {
        const id = typeof post === 'number' ? post : post.Id;
        const url = `${this.postsUrl}/delete/${id}`;

          return this.http.delete<APIPost>(url, httpOptions).pipe(
          tap(_ => this.log(`deleted post Id=${id}`)),
          catchError(this.handleError<APIPost>('deletePost'))
        );
      }

      private log(message: string) {
        console.log('PostService: ' + message);
      }

      private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error); 
          this.log(`${operation} failed: ${error.message}`);
          return of(result as T);
        };
      }
}