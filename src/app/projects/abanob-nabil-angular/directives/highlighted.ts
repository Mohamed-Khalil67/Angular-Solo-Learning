import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appHighlighted]',
  exportAs: 'high',
})
export class Highlighted {
  @Input('highlighted') isHighlighted = false; // highlighted is like a pseudname for it
  @Output() toggleHihglight = new EventEmitter();
  constructor() {
    console.log('directive Created');
  }

  // @HostBinding('className')
  // get cssClass() {
  //   return 'highlighted';
  // }

  @HostBinding('class.highlighted')
  get cssClass() {
    // name of the class is by choice
    return this.isHighlighted;
  }

  @HostListener('mouseover')
  mouseOver() {
    this.isHighlighted = true;
    this.toggleHihglight.emit(this.isHighlighted);
  }

  @HostListener('mouseleave')
  mouseleave() {
    this.isHighlighted = false;
    this.toggleHihglight.emit(this.isHighlighted);
  }
  toggle() {
    this.isHighlighted = !this.isHighlighted;
    this.toggleHihglight.emit(this.isHighlighted);
  }
}
