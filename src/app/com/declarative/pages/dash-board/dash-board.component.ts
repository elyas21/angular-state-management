import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../ser/post.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss'],
})
export class DashBoardComponent implements OnInit {
  constructor(private postSer: PostService) {}

  ngOnInit(): void {
    this.postSer.getPosts().subscribe((r) => console.log(r));
  }
}
