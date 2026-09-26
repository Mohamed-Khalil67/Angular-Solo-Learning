import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';
import { Event } from '@angular/router';

@Directive({
  selector: '[appBasicHighLight]',
})
export class BasicHighLight {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'lightgray';
  @Input() defaultColor: string = 'white';
  @Input() highlightColor: string = 'gray';

  constructor(
    // private element: ElementRef,
    // private render: Renderer2,
  ) {
    // this.element.nativeElement.style.backgroundColor = 'lightblue';
    // this.render.setStyle(this.element.nativeElement, 'background-color', 'lightgray');
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(eventData: MouseEvent) {
    // this.render.setStyle(this.element.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(eventData: MouseEvent) {
    // this.render.setStyle(this.element.nativeElement, 'background-color', 'lightgray');
    this.backgroundColor = this.defaultColor;
  }
}
