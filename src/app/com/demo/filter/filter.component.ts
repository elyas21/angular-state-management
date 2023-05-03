import { Component, OnInit } from '@angular/core';
import { Observable, filter, from, map } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  allNumbersObservable = new Observable((observer)=>{
    setTimeout(()=>{observer.next(1)},2000)
    setTimeout(()=>{observer.next(2)},4000)
    setTimeout(()=>{observer.next(3)},5000)
    setTimeout(()=>{observer.next(4)},6000)
    setTimeout(()=>{observer.next(5)},7000)
    setTimeout(()=>{observer.next(6)},8000)
    setTimeout(()=>{observer.next(7)},9000)
    setTimeout(()=>{observer.next(8)},10000)
    setTimeout(()=>{observer.next(9)},11000)
    setTimeout(()=>{observer.next(10)},12000)
  })
  evenNumbers :any;

  ngOnInit(): void {
    this.allNumbersObservable
      .pipe(
        
        filter((value:any) => value % 2 === 0)
        )
      .subscribe((value) => {
        console.log(value);
        this.evenNumbers = value;
      });
  }
}
