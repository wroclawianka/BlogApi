import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { APIPost } from './apiPost';
import { identifierModuleUrl } from '@angular/compiler';


@Injectable()
export class PostService { 

    private enableAPImode : boolean = false;
    private postsUrl = this.findUrl();
    private findUrl() : string{
        var apiUrl = 'http://localhost:11709/api/blogpost/get';
        var mockUrl = 'api/posts';
        return  this.enableAPImode ? apiUrl : mockUrl;}
        
    
    constructor(
        private http: HttpClient) {
    }

    getPosts(): Observable<APIPost[]> {
        return this.http.get<APIPost[]>(this.postsUrl);
    }

    getPost(Id: number): Observable<APIPost> {
        const url = `${this.postsUrl}/${Id}`;
        return this.http.get<APIPost>(url)
        .pipe(
          tap(_ => this.log(`fetched post Id=${Id}`)),
          catchError(this.handleError<APIPost>(`getPost Id=${Id}`))
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