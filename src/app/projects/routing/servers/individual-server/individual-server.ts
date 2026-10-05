import { Component, inject, OnInit } from '@angular/core';
import { IServer } from '../server.model';
import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-individual-server',
  templateUrl: './individual-server.html',
  styleUrl: './individual-server.scss',
})
export class IndividualServer implements OnInit {
  server!: IServer;
  private readonly activatedRoute = inject(ActivatedRoute);
  serversService = inject(ServersService);
  ngOnInit() {
    let id: number = this.activatedRoute.snapshot.params['id'];
    console.log('ID value:', id);
    console.log('ID type:', typeof id); // <--- This is the smoking gun!
    this.server = this.serversService.getServer(id);

    this.activatedRoute.params.subscribe((params) => {
      this.server = this.serversService.getServer(+params['id']);
    });
  }
}
