import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Servers } from './servers/servers';
import { Users } from './users/users';

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
    path: 'users',
    component: Users,
    title: 'Users',
  },
];
