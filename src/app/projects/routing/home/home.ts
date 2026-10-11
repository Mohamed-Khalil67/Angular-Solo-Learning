import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServersService } from '../servers/servers.service';
import { IServer } from '../servers/server.model';
import { AuthService } from '../services/auth.service';

@Component({
  imports: [],
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private serversService = inject(ServersService);
  servers: IServer[] = [];
  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onLoadServers(id: number) {
    // navigate to servers page
    this.router
      .navigate(['/projects/routing/servers', id, 'edit'], {
        queryParams: { allowEdit: 1 },
        fragment: 'loading',
      })
      .then(() => {});
  }

  login() {
    console.log(this.authService.isLoggedIn);
    this.authService.login();
  }
  logout() {
    console.log(this.authService.isLoggedIn);
    this.authService.logout();
  }
}
