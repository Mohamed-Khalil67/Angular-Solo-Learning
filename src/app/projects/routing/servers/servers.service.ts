import { Injectable } from '@angular/core';
import { ServerModel } from './server.model';

@Injectable({
  providedIn: 'root',
})
export class ServersService {
  private servers: ServerModel[] = [
    { id: 1, name: 'Production Server', status: 'online' },
    { id: 2, name: 'Staging Server', status: 'offline' },
    { id: 3, name: 'Dev Server', status: 'online' },
  ];

  getServers(): ServerModel[] {
    return [...this.servers];
  }

  getServer(id: number): ServerModel | undefined {
    return this.servers.find(s => s.id === id);
  }

  updateServer(id: number, serverInfo: { name: string; status: string }): void {
    const server = this.servers.find(s => s.id === id);
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
