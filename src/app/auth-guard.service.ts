import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
/* AuthGuard is an angular route guard used to protect the routes from unauthenticated/unauthorized people. 
It is implemented using the canActivate interface which implements a canActivate function that checks whether the 
current user has permission to activate the requested route*/


export class AuthGuardService implements CanActivate {

  constructor(private router: Router,
    private authService: AuthenticateService) { }
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (this.authService.isUserLoggedIn())
        return true;
  
      this.router.navigate(['loginpage']);
      return false;
  
    }
    
}
