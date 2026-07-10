import { NgClass, NgStyle } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-css',
  imports: [NgClass, FormsModule, NgStyle],
  templateUrl: './dynamic-css.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './dynamic-css.css',
})
export class DynamicCss {
  myClassName: string = 'bg-warning';

  isActive: boolean = false;

  divBackColor: string = '';

  myCss = {
    color: 'blue',
    'background-color': 'yellow',
    'font-size': '20px',
  };
}
