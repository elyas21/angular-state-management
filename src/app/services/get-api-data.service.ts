import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetApiDataService {
  constructor(private _http: HttpClient) {}

  getUsersFromApi():Observable<any> {
    return this._http.get('https://jsonplaceholder.typicode.com/users');
  }
  user: User = { name: 'abebe' };

  getUserFromVar(): User {
    return this.user;
  }

  sum(x:number, y:number):number {
    return x+y
  }






  getUserFromApi(userId: string):Observable<any> {
    return this._http.get(
      'https://jsonplaceholder.typicode.com/users/' + userId
    );
  }






  
  getCommentsFromApi(): Observable<any> {
    return this._http.get('https://jsonplaceholder.typicode.com/comments');
  }
}

export interface User {
  name: string;
}
