import { Component, inject, OnInit } from '@angular/core';
import { IServer } from '../server.model';
import { ServersService } from '../servers.service';

@Component({
  imports: [],
  selector: 'app-individual-server',
  templateUrl: './individual-server.html',
  styleUrl: './individual-server.scss',
})
export class IndividualServer implements OnInit {
  server!: IServer;
  serversService = inject(ServersService)
  ngOnInit() {
    this.server = this.serversService.getServer(1);
  }
}
