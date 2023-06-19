import { Component, OnInit } from '@angular/core';
import { Observable, interval, take } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss'],
})
export class TakeComponent implements OnInit {
  allNumbersObservable: Observable<any> = new Observable((observer) => {
    setTimeout(() => {
      observer.next(1);
    }, 2000);
    setTimeout(() => {
      observer.next(9892);
    }, 4000);
    setTimeout(() => {
      observer.next(90990);
    }, 5000);
    setTimeout(() => {
      observer.next(2454);
    }, 6000);
    setTimeout(() => {
      observer.next(5245245);
    }, 7000);
    setTimeout(() => {
      observer.next(6);
    }, 8000);
    setTimeout(() => {
      observer.next(7);
    }, 9000);
    setTimeout(() => {
      observer.next(8);
    }, 10000);
    setTimeout(() => {
      observer.next(9);
    }, 11000);
    setTimeout(() => {
      observer.next(10);
    }, 12000);
  });

  takeFive: any;
  ngOnInit(): void {
    this.allNumbersObservable.
    pipe(
      take(2)
    ).
    subscribe((x:any) => (this.takeFive = x));
  }
}
