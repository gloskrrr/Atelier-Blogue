import { Injectable } from '@angular/core';
import { Login } from "../models/auth/login";
import { Observable, of } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Register } from '../models/auth/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  init(): void {
    this.httpClient.get('/api').subscribe();
  }

  login(credentials: Login): Observable<Object>{
    return this.httpClient.post('/api/login', credentials);
  }

  register(credentials: Register): Observable<Object>{
    return this.httpClient.post('/api/register', credentials);
  }
}
