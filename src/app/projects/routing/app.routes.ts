import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Servers } from './servers/servers';
import { Users } from './users/users';
import { User } from './users/user/user';
import { EditServer } from './servers/edit-server/edit-server';
import { IndividualServer } from './servers/individual-server/individual-server';
import { PageNotFound } from './page-not-found/page-not-found';
import { authGuard } from './guards/auth-guard.service';
import { CanDeactivateGuard } from './guards/can-deactivate-guard';
import { ErrorPage } from './error-page/error-page';
import { ServerResolverService } from './guards/server.resolver.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
    title: 'Home',
  },
  {
    path: 'servers',
    component: Servers,
    title: 'Servers',
    canActivateChild: [authGuard],
    children: [
      {
        path: ':id',
        component: IndividualServer,
        title: 'Individual Server',
        resolve: {server: ServerResolverService}
      },
      {
        path: ':id/edit',
        component: EditServer,
        title: 'Edit Server',
        canDeactivate: [CanDeactivateGuard],
      },
    ],
  },

  {
    path: 'users',
    component: Users,
    title: 'Users',
  },
  {
    path: 'user/:id/:name',
    component: User,
    title: 'User',
  },
  {
    path: 'not-found',
    component: ErrorPage,
    data: { message: "Message = Page Not Found from route" },
    title: 'Page not found',
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];
