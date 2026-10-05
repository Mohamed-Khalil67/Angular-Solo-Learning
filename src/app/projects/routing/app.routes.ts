import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Servers } from './servers/servers';
import { Users } from './users/users';
import { User } from './users/user/user';
import { EditServer } from './servers/edit-server/edit-server';
import { IndividualServer } from './servers/individual-server/individual-server';

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
  },
  {
    path: 'servers/:id',
    component: IndividualServer,
    title: 'Individual Server',
  },
  {
    path: 'servers/:id/edit',
    component: EditServer,
    title: 'Edit Server',
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
];
