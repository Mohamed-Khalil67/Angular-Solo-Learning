import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Component({
  selector: 'app-batcher',
  imports: [],
  templateUrl: './batcher.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './batcher.css',
})
export class Batcher implements OnInit {
  http = inject(HttpClient);
  usersList = signal<User[]>([]);
  todosList = signal<any[]>([]);

  ngOnInit() {
    this.getUsers();
    this.getTodos();
  }

  getUsers() {
    return this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((response: User[]) => {
        this.usersList.set(response);
      });
  }

  getTodos() {
    return this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe((response: any[]) => {
        // console.log(todos);
        this.todosList.set(response);
      });
  }
}
