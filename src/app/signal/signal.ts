import { Component, Signal, signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './signal.css',
})
export class SignalComponent {
  courseName = signal('Angular');
  roll = signal(101);
  student = signal({ name: 'John', age: 25, city: 'New York' });
  cityList = signal(['New York', 'Los Angeles', 'Chicago']);

  courseDuration: Signal<string> = signal('3 months');
  constructor() {
    setTimeout(() => {
      this.courseName.set('Angular Signals');
    }, 2000);
  }

  changeCourse() {
    this.courseName.set('Java');
    this.courseDuration.apply((duration: string) => duration + ' (updated)');
  }
}
