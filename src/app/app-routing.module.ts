import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './com/observable/observable.component';
import { OperatorsComponent } from './com/operators/operators.component';
import { HomeComponent } from './com/home/home.component';
import { OperatorDetailComponent } from './com/operator-detail/operator-detail.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
