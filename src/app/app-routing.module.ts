import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './com/observable/observable.component';
import { OperatorsComponent } from './com/operators/operators.component';
import { HomeComponent } from './com/home/home.component';
import { OperatorDetailComponent } from './com/operator-detail/operator-detail.component';
import { MapComponent } from './com/demo/map/map.component';
import { DemoComponent } from './com/demo/demo.component';
import { FilterComponent } from './com/demo/filter/filter.component';
import { TakeComponent } from './com/demo/take/take.component';
import { SwitchMapComponent } from './com/demo/switch-map/switch-map.component';
import { CombineLatestComponent } from './com/demo/combine-latest/combine-latest.component';
import { TapComponent } from './com/demo/tap/tap.component';
import { ObservableDemoComponent } from './com/demo/observable-demo/observable-demo.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'observable',
    component: ObservableComponent,
  },
  {
    path: 'operators',
    component: OperatorsComponent,
  },
  {
    path: 'operators/:operator',
    component: OperatorDetailComponent,
  },
  {
    path: 'demo',
    component: DemoComponent,
    children: [
      { path: '', component: ObservableDemoComponent },
      { path: 'observable', component: ObservableDemoComponent },
      { path: 'map', component: MapComponent },
      { path: 'filter', component: FilterComponent },
      { path: 'take', component: TakeComponent },
      { path: 'switch-map', component: SwitchMapComponent },
      { path: 'combine-latset', component: CombineLatestComponent },
      { path: 'tap', component: TapComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
