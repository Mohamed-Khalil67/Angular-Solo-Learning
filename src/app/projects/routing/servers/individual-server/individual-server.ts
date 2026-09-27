import { Component, inject, OnInit } from '@angular/core';
import { ServerModel } from '../server.model';
import { ServersService } from '../servers.service';

@Component({
  imports: [],
  selector: 'app-individual-server',
  templateUrl: './individual-server.html',
  styleUrl: './individual-server.scss',
})
export class IndividualServer implements OnInit {
  server: ServerModel | undefined;
  serversService = inject(ServersService)
  ngOnInit() {
    this.server = this.serversService.getServer(1);
  }
}
