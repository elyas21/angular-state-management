import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss'],
})
export class SwitchMapComponent implements OnInit {
  allUsers: any;
  firstUser: any;
  QueryParamets$: Observable<any> | undefined;
  user$: Observable<any> | undefined;
  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  getUsers(): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

  getUserDetails(userId: string): Observable<any> {
    return this.httpClient.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
  }

  ngOnInit() {


    this.user$ = this.getUsers().pipe(

      tap((allUsers)=>console.log(allUsers)),

      switchMap((allUsers:any)=>{

        return this.getUserDetails(allUsers[1].id)

      })
    )









    // this.QueryParamets$ =
    //   this.getUsers().
    //   pipe(
    //     switchMap((users:any)=>{
    //       return this.getUserDetails(users[3].id)
    //     })
    //   )
    //     .subscribe((user) => {
    //       console.log(user);
    //     });
  }
}
