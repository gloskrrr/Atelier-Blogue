import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private httpClient: HttpClient) { }

  init(): void {
    this.httpClient.get('/api').subscribe();
  }

  getAll(): Observable<Object>{
    return this.httpClient.get('/api/messages');
  }

  getOne(id: number): Observable<Object>{
    return this.httpClient.get('/api/messages/' + id );
  }

  create(message: Message): Observable<Object>{
    return this.httpClient.post('/api/messages/create', message );
  }

  update(id: Number, message: Message): Observable<Object>{
    return this.httpClient.put('/api/messages/update/' + id , message );
  }

  delete(id: number): Observable<Object>{
    return this.httpClient.delete('api/messages/remove/' + id)
  }
}
