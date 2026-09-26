import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  imports: [],
  templateUrl: './server-element.html',
  styleUrl: './server-element.scss',
})
export class ServerElement implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  element = input<{ type: string; name: string; content: string }>({
    type: '',
    name: '',
    content: '',
  });
  name = input<string>();
  @ViewChild('heading', { static: true }) header!: ElementRef<HTMLInputElement>;
  // static means , it will arrive static values not dynamic
  constructor() {
    console.log('Constructor Called');
  }

  ngOnInit(): void {
    console.log('ngOnInit Called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnchanges called!');
    console.log(changes);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called !');
    console.log('Text content', this.header.nativeElement.textContent);
  }

  ngOnDestroy(): void {
    console.log('Destroy Called !!');
  }
}
