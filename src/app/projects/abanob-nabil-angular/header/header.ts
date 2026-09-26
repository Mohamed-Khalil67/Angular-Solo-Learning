import { Component, ElementRef, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  host: {
    '(document:click)': 'closeDropdownOnOutsideClick($event)',
    '(document:keydown.escape)': 'dropdownOpen.set(false)',
  },
})
export class Header {
  // Menu state (replaces Bootstrap's collapse/dropdown JavaScript)
  navOpen = signal(false);
  dropdownOpen = signal(false);
  private dropdown = viewChild.required<ElementRef<HTMLElement>>('dropdown');

  closeDropdownOnOutsideClick(event: MouseEvent) {
    if (!this.dropdown().nativeElement.contains(event.target as Node)) {
      this.dropdownOpen.set(false);
    }
  }
}
