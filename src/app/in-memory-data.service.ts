import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable, catchError, of, tap } from 'rxjs';
import { Comment } from './pages/dashboard/dashboard.service';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users: User[] = [];
    const comments: Comment[] = [];

    return { users: users, comments: comments };
  }

  constructor() {}
}

export interface User {
  id: string;
  name: string;
  password: string;
}
