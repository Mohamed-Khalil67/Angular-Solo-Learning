import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './data-binding.css',
})
export class DataBinding {
  title = 'Data Binding';

  demo1 = 'Interpolation';
  demo2 = 'text';
  demo3 = 'this is a property binding';
  css1 = 'primary';
  inputType = 'checkbox';

  showWelcomeMessage() {
    alert('Welcome to Angular Data Binding!');
  }

  onSelectChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    alert(`You selected: ${selectedValue}`);
  }

  onButtonChangeName(text: string) {
    this.title = text;
  }
}
