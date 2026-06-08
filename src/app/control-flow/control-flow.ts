import { Component, Signal, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isChecked = signal(false);
  studentTotalMark: number = 0;
  onChange() {
    this.isChecked.set(!this.isChecked());
  }
  isOffer: boolean = false;
  isSuccessDiv: WritableSignal<boolean> = signal(false);
  toggleDiv() {
    this.isSuccessDiv.set(!this.isSuccessDiv());
  }
  offerList: string[] = [
    '20% off For PayTm',
    '10% off For GPay',
    '15% off For ICCI credit card',
    '25% off Online Banking',
  ];
}
