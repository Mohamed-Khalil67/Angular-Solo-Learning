import { Component, ElementRef, EventEmitter, input, output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-core',
  imports: [FormsModule],
  templateUrl: './core.html',
  styleUrl: './core.scss',
})
export class Core {
  serverCreated = output<{ serverName: string; serverContent: string }>();
  blueprintCreated = output<{ serverName: string; serverContent: string }>();

  @ViewChild('serverContentInput', { static: true }) serverContentInput!: ElementRef;

  newServerName = '';
  newServerContent = '';

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
