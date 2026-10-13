import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanDeactivate,
  CanDeactivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface CanComponentDeactivate {
  canDeactivate: () => boolean | Promise<boolean> | Observable<boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate>
{
  canDeactivate(component: CanComponentDeactivate,currentRoute:ActivatedRouteSnapshot,currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): any {
    return component.canDeactivate();
  }
}

// export const canDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> = (component) => {
//   return component.canDeactivate ? component.canDeactivate() : true;
// };
