import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { IServer } from '../server.model';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-individual-server',
  templateUrl: './individual-server.html',
  styleUrl: './individual-server.scss',
})
export class IndividualServer implements OnInit {
  server = signal<IServer | null>(null);

  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);
  serversService = inject(ServersService);

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const id = +params['id'];
      if (id) {
        // 2. Update the signal using .set()
        this.server.set(this.serversService.getServer(id));
      }
    });
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute });
  }
}
