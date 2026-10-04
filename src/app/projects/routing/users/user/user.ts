import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IUser } from '../user-modal';

@Component({
  imports: [RouterLink],
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User implements OnInit {
  user = signal<IUser | null>(null);

  private readonly activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    // this.user.set({
    //   id: this.activatedRoute.snapshot.params['id'],
    //   name: this.activatedRoute.snapshot.params['name'],
    // });

    this.activatedRoute.paramMap.subscribe((paramMap) => {
      // Pass a single, complete object to .set()
      this.user.set({
        id: Number(paramMap.get('id')) || 0, // .get() is safer than ['id']
        name: paramMap.get('name') || '',
      });
    });
  }
}
