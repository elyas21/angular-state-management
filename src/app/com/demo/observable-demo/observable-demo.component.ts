import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.scss'],
})
export class ObservableDemoComponent implements OnInit {
  observable = new Observable((subscriber) => {
    subscriber.next({ name: 'Abebe', age: 24, sex: 'Male' });
  });

  ngOnInit(): void {
    
  }
}
