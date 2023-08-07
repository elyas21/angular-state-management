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
  sentence: string = '';

  getUser(): Observable<any> {
    return this.httpclient.get('https://jsonplaceholder.typicode.com/users/1');
  }

  getTodos(): Observable<any> {
    return this.httpclient.get('https://jsonplaceholder.typicode.com/todos/1');
  }

  ngOnInit() {
   combineLatest(this.getUser(), this.getTodos()).subscribe((res:Array<any>)=>{
      this.sentence = '\n' + res[0].name + ' is doing ' + res[1].title
   })
  }
}
