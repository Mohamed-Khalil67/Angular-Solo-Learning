import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Service()
export class PostsService {
  private readonly httpclient = inject(HttpClient);

  getPosts(): Observable<any> {
    return this.httpclient.get<any>('https://jsonplaceholder.typicode.com/posts');
  }
}
