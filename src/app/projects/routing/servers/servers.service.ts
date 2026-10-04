import { Injectable } from '@angular/core';
import { IServer } from './server.model';

@Injectable({
  providedIn: 'root',
})
export class ServersService {
  private servers: IServer[] = [
    { id: 1, name: 'Production Server', status: 'online' },
    { id: 2, name: 'Staging Server', status: 'offline' },
    { id: 3, name: 'Dev Server', status: 'online' },
  ];

  getServers(): IServer[] {
    return [...this.servers];
  }

  getServer(id: number): IServer {
    const server = this.servers.find((s) => s.id === id);
    if (!server) {
      throw new Error(`Server with id ${id} not found.`);
    }
    return server;
  }

  updateServer(id: number, serverInfo: { name: string; status: string }): void {
    const server = this.servers.find((s) => s.id === id);
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
