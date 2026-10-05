import { Component, inject, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { IServer } from '../server.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  imports: [FormsModule],
  templateUrl: './edit-server.html',
  styleUrl: './edit-server.scss',
})
export class EditServer implements OnInit {
  private readonly serverService = inject(ServersService);
  private readonly activatedRoute = inject(ActivatedRoute);
  server!: IServer;
  serverName = '';
  serverStatus = '';

  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot.queryParams);
    // console.log(this.activatedRoute.snapshot.fragment);

    this.activatedRoute.queryParams.subscribe((query: Params) => {
      console.log(query);
    });

    this.activatedRoute.fragment.subscribe((fragment) => {
      console.log(fragment);
    });

    this.server = this.serverService.getServer(1);
    if (this.server) {
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    }
  }

  onUpdateServer(): void {
    if (this.server) {
      this.serverService.updateServer(this.server.id, {
        name: this.serverName,
        status: this.serverStatus,
      });
    }
    console.log(this.server);
  }
}
