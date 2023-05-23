import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  baseUrl = 'https://jsonplaceholder.typicode.com';
  private commentsUrl = 'api/comments'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  fetchPosts() {
    return this.http.get(this.baseUrl + '/posts');
  }

  fetchPost(id: string) {
    return this.http.get(this.baseUrl + '/posts/' + id);
  }

  fetchComments(id: string) {
    return this.http.get(this.baseUrl + '/comments?postId=' + id);
  }

  addComment(id: string, comment: Comment) {
    return this.http.post(
      this.baseUrl + '/comments?postId=' + id,
      comment,
      this.httpOptions
    );
  }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentsUrl);
  }

  addNewComment(comment: Comment): Observable<Comment> {
    return this.http
      .post<Comment>(this.commentsUrl, comment, this.httpOptions)
      .pipe(
        tap((newComment: Comment) =>
          console.log(`added user w/ id=${newComment.id}`)
        )
      );
  }
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface Comment {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
}
