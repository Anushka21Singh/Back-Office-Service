import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginServiceService } from './login/login-service.service';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
constructor(private auth:AuthService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
      console.log("called Can Activate"+this.auth.getLoggedIn());
      const value= sessionStorage.getItem("value");
      if (value == "true") { 
        return true;
      } else {
        //console.log(this.auth.getLoggedIn());
        window.alert("You don't have permission to view this page"); 
        return false;
      }  }
}
