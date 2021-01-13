import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  requestUrl =
    'https://sportfolio-44e93-default-rtdb.firebaseio.com/posts.json';
  constructor(private http: HttpClient) {}

  sendData(data) {
    return this.http.post(this.requestUrl, data);
  }
}
