import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CommentGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const loggedIn = localStorage.getItem('userLoggedIn');
    if (loggedIn && loggedIn !== '') {
      return true;
    }
    return this.router.createUrlTree(['/auth', 'login'], {
      queryParams: { source: state.url },
    });
  }
}
