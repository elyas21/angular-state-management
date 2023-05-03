import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent {
  demo = ['observable', 'map', 'filter','take','tap','switchmap','combinelatset'];
}
