import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss'],
})
export class SwitchMapComponent implements OnInit {
  allUsers: any;
  firstUser: any;
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

  getUserDetails(userId: string): Observable<any> {
    return this.httpClient.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
  }

  ngOnInit() {
    this.getUsers()
      .pipe(
        switchMap((users: any) => {
          this.allUsers = users;
          return this.getUserDetails(users[0].id);
        })
      )
      .subscribe((user) => {
        this.firstUser = user;
        console.log(user);
      });
  }
}
