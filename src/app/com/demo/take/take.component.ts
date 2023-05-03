import { Component, OnInit } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {
 
  intervalCount = interval(1000);
  takeFive = this.intervalCount.pipe(take(5));
  
  ngOnInit(): void {
    this.takeFive.subscribe(x => console.log(x));
    
  }
}
