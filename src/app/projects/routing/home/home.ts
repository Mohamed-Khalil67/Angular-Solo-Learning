import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  private readonly router = inject(Router);

  onLoadServers(){
    // navigate to servers page
    this.router.navigate(['/projects/routing/servers']).then(() => {});
  }
}
