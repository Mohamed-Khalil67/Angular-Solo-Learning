import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  MaybeAsync,
  RedirectCommand,
  Resolve,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { IServer } from '../servers/server.model';
import { ServersService } from '../servers/servers.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServerResolverService implements Resolve<IServer> {
  serverService = inject(ServersService);
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<IServer> | Promise<IServer> | IServer {
    return this.serverService.getServer(+route.params['id']);
  }
}

export const postResolver: ResolveFn<IServer> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const serversService = inject(ServersService);
  return serversService.getServer(+route.params['id']);
};
