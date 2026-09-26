import { Component, inject, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { EditServer } from './edit-server/edit-server';
import { IndividualServer } from './individual-server/individual-server';

@Component({
  imports: [EditServer, IndividualServer],
  selector: 'app-servers',
  templateUrl: './servers.html',
})
export class Servers implements OnInit {
  public servers: { id: number; name: string; status: string }[] = [];

  private serversService = inject(ServersService);
  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
}
