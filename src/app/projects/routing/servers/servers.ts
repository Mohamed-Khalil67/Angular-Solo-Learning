import { Component, inject, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { EditServer } from './edit-server/edit-server';
import { RouterLink } from '@angular/router';

@Component({
  imports: [EditServer, RouterLink],
  selector: 'app-servers',
  templateUrl: './servers.html',
  styleUrl: './servers.scss',
})
export class Servers implements OnInit {
  public servers: { id: number; name: string; status: string }[] = [];

  private serversService = inject(ServersService);
  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
}
