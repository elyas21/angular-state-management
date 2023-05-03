import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './core/nav/nav.component';
import { ObservableComponent } from './com/observable/observable.component';
import { FormsModule } from '@angular/forms';
import { NgxCodejarModule } from 'ngx-codejar';
import { OperatorsComponent } from './com/operators/operators.component';
import { HomeComponent } from './com/home/home.component';
import { OperatorDetailComponent } from './com/operator-detail/operator-detail.component';
import { MapComponent } from './com/demo/map/map.component';
import { FilterComponent } from './com/demo/filter/filter.component';
import { TakeComponent } from './com/demo/take/take.component';
import { SwitchMapComponent } from './com/demo/switch-map/switch-map.component';
import { TapComponent } from './com/demo/tap/tap.component';
import { CombineLatestComponent } from './com/demo/combine-latest/combine-latest.component';
import { DemoComponent } from './com/demo/demo.component';
import { ObservableDemoComponent } from './com/demo/observable-demo/observable-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ObservableComponent,
    OperatorsComponent,
    HomeComponent,
    OperatorDetailComponent,
    MapComponent,
    FilterComponent,
    TakeComponent,
    SwitchMapComponent,
    TapComponent,
    CombineLatestComponent,
    DemoComponent,
    ObservableDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxCodejarModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
