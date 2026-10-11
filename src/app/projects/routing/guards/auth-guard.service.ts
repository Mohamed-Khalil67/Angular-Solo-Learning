import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  CanActivateChild,
  CanActivateFn,
  CanActivateChildFn,
  Router,
  RedirectCommand,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

// export class AuthGuard implements CanActivate, CanActivateChild {
//   authService = inject(AuthService);
//
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot,
//   ): boolean | Promise<boolean> | Observable<boolean> {
//     return this.authService.isAuthenticated();
//   }
//
//   canActivateChild(
//     childRoute: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot,
//   ): boolean | Observable<boolean> | Promise<boolean> {
//     return this.canActivate(childRoute, state);
//   }
// }

// class AuthGuard {
//   authService = inject(AuthService);
//   router = inject(Router);
//
//   canActivate(): boolean | Observable<boolean> | Promise<boolean> {
//     if (this.authService.isAuthenticated()) {
//       return true;
//     } else {
//       this.router.navigate(['/']);
//       return false;
//     }
//   }
// }
//
// export const authGuardGuard: CanActivateFn = (route, state) => {
//   return inject(AuthGuard).canActivate();
// };

export const authGuard: CanActivateFn & CanActivateChildFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }

  // Redirect cleanly to /home if not authenticated
  return new RedirectCommand(router.parseUrl('/home'));
};
