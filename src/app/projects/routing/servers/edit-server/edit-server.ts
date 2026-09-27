import { Component, inject, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ServerModel } from '../server.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-server',
  imports: [FormsModule],
  templateUrl: './edit-server.html',
  styleUrl: './edit-server.scss',
})
export class EditServer implements OnInit {
  private serverService = inject(ServersService);

  server: ServerModel | undefined;
  serverName = '';
  serverStatus = '';

  ngOnInit(): void {
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
