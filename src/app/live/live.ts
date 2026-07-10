import { Component, DestroyRef, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-live',
  imports: [],
  templateUrl: './live.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './live.css',
})
export class Live {
  counter = signal(0);
  private sub: Subscription | null = null;
  private destroyRef = inject(DestroyRef);

  constructor() {
    this.sub;
  }

  start() {
    this.sub = interval(1000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((val) => this.counter.set(val));
  }
}
