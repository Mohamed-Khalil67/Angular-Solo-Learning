import { Routes } from '@angular/router';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found';

export const routes: Routes = [
  { path: 'home', component: Home },
  {
    path: 'subscribe',
    loadComponent: () =>
      import('./newsletter/subscribe-form/subscribe-form').then((c) => c.SubscribeForm),
  },
  {
    path: 'reactive-forms',
    loadComponent: () => import('./reactiveForms/reactive-forms').then((c) => c.ReactiveForms),
  },
  {
    path: 'cart',
    loadComponent: () => import('./cart/cart').then((c) => c.Cart),
  },
  {
    path: 'live',
    loadComponent: () => import('./live/live').then((c) => c.Live),
  },
  {
    path: 'data-binding',
    loadComponent: () => import('./data-binding/data-binding').then((c) => c.DataBinding),
  },
  {
    path: 'signal',
    loadComponent: () => import('./signal/signal').then((c) => c.SignalComponent),
  },
  {
    path: 'control-flow',
    loadComponent: () => import('./control-flow/control-flow').then((c) => c.ControlFlow),
  },
  {
    path: 'dynamic-css',
    loadComponent: () => import('./dynamic-css/dynamic-css').then((c) => c.DynamicCss),
  },
  {
    path: 'user-master',
    loadComponent: () => import('./user-master/user-master').then((c) => c.UserMaster),
  },
  {
    path: 'batcher',
    loadComponent: () => import('./batcher/batcher').then((c) => c.Batcher),
  },
  // Imported projects (src/app/projects/*)
  {
    path: 'projects/abanob-nabil-angular',
    loadComponent: () => import('./projects/abanob-nabil-angular/app').then((c) => c.App),
  },
  {
    path: 'projects/recipe-book',
    loadComponent: () => import('./projects/recipe-book/app').then((c) => c.App),
  },
  {
    path: 'projects/routing',
    loadComponent: () => import('./projects/routing/app').then((c) => c.App),
    loadChildren: () => import('./projects/routing/app.routes').then((m) => m.routes),
  },
  { path: '', component: Home },
  { path: '**', component: PageNotFound },
];
