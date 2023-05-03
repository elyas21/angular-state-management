import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetApiDataService {
  constructor(private _http: HttpClient) {}

  getUserFromApi() {
    return this._http.get('https://jsonplaceholder.typicode.com/users');
  }

  getCommentsFromApi(): Observable<any> {
    return this._http.get('https://jsonplaceholder.typicode.com/comments');
  }
}
