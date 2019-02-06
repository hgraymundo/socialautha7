import { Injectable } from '@angular/core';

import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router } from '@angular/router';
import { AuthManagerService }      from './auth-manager.service';

@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate {

  constructor(
    private authManager: AuthManagerService,
    private router: Router ) {}

  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
      return this.checkLogin();
  }

  checkLogin(): boolean {
    if (this.authManager.getAuthStatus()) { return true; }
    this.router.navigate(['/login']);
    return false;
  }
}
