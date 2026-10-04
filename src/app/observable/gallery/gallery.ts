import { Component, inject, OnInit } from '@angular/core';
import { PostsService } from '../posts-service';

@Component({
  imports: [],
  selector: 'app-gallery',
  styleUrl: './gallery.scss',
  templateUrl: './gallery.html',
})
export class Gallery implements OnInit {
  private readonly postsService = inject(PostsService);
  ngOnInit() {
    console.log('Entered Gallery component');
    this.postsService.getPosts().subscribe({
      next: (data) => {console.log(data)}
    })
  }
}
