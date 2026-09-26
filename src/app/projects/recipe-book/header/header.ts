import { Component, ElementRef, output, signal, viewChild } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
  host: {
    '(document:click)': 'closeManageOnOutsideClick($event)',
    '(document:keydown.escape)': 'manageOpen.set(false)',
  },
})
export class Header {

  featureSelected = output<string>()

  // Menu state (replaces Bootstrap's collapse/dropdown JavaScript)
  navOpen = signal(false);
  manageOpen = signal(false);
  private manage = viewChild.required<ElementRef<HTMLElement>>('manage');

  onSelect(feature: string) {
    this.featureSelected.emit(feature)
  }

  closeManageOnOutsideClick(event: MouseEvent) {
    if (!this.manage().nativeElement.contains(event.target as Node)) {
      this.manageOpen.set(false);
    }
  }
}
