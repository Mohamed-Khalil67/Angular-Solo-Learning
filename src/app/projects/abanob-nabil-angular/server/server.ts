import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgStyle, NgClass } from '@angular/common';

@Component({
  selector: 'app-server',
  imports: [FormsModule, NgStyle, NgClass],
  templateUrl: './server.html',
  styleUrl: './server.scss',
})
export class Server {
  serverId: number = 20;
  serverStatus: string = 'Online';
  allowedAddServer = signal(false);
  isAllowed: boolean = false;
  serverIdValue: number = 5;
  serverCreationStatus: string = 'No server was created !';
  isServerCreated: boolean = false;
  serverContent: string = '';
  backgroundColor: string = 'red';
  hasSuccess: boolean = true;
  hasError: boolean = false;
  hasSpecial: boolean = true;
  serverName: string = 'test3 server';

  servers = ['test1 server', 'test2 server'];
  persons = [
    { id: 1, name: 'Ali' },
    { id: 2, name: 'Abanob' },
  ];

  serverClasses = {
    success: this.hasSuccess,
    special: this.hasSpecial,
    danger: this.hasError,
  };

  serverStyles = {
    'background-color': this.backgroundColor == 'green' ? 'green' : 'blue',
    color: 'white',
    'font-style': 'italic',
  };

  constructor() {
    setTimeout(() => {
      this.allowedAddServer.update((v) => true);
    }, 3000);
  }

  getServerStatus() {
    return this.serverStatus;
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.isServerCreated = true;
    this.serverCreationStatus = 'Server Created Successfully';
    if (this.servers.length > 6) {
      this.servers.splice(2, 5);
    }
  }
}
