import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeclarativeRoutingModule } from './declarative-routing.module';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './pages/post/post.component';



@NgModule({
  declarations: [
    DashBoardComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    DeclarativeRoutingModule,
    HttpClientModule
  ]
})
export class DeclarativeModule { }
