import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss'],
})
export class CombineLatestComponent implements OnInit {
  constructor(private httpclient: HttpClient) {}

  getUsers(): Observable<any> {
    return this.httpclient.get('https://jsonplaceholder.typicode.com/users');
  }

  getTodos(): Observable<any> {
    return this.httpclient.get('https://jsonplaceholder.typicode.com/todos');
  }

  ngOnInit() {
    combineLatest(this.getUsers(),this.getTodos()).subscribe(res=>{
      console.log(res);
      
    })
  }
}
