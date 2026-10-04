import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-users',
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users {
  users = [
    {
      id: 1,
      name: 'John Doe',
    },
    {
      id: 2,
      name: 'Om Doey',
    },
    {
      id: 3,
      name: 'Abo Doey',
    },
  ];
}
