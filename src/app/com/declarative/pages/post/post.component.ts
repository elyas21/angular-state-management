import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostService } from '../../ser/post.service';
import { IPost } from '../../models/IPost';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, OnDestroy {
  posts: IPost[] = [];
  postsSubscription!: Subscription;
  constructor(private postSer: PostService) {}

  ngOnInit(): void {
    this.postsSubscription = this.postSer.getPosts().subscribe((r) => {
      console.log(r);
      this.posts = r;
    });
  }
  ngOnDestroy(): void {
    this.postsSubscription && this.postsSubscription.unsubscribe();
  }
}
