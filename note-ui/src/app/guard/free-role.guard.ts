import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from '../service/authentication.service';
import decode from 'jwt-decode';

@Injectable()
export class FreeRoleGuard implements CanActivate {

  constructor(public auth: AuthenticationService, public router: Router) {}
  private expectedRole = 'admin-role';

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token');
    const tokenPayload = decode(token);
    // if (this.auth.isAuthenticated() && tokenPayload.role === this.expectedRole){
    //   return true;
    // }

    return false;
  }

}
