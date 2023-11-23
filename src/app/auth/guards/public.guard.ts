import { Injectable } from '@angular/core';
import { CanMatch, CanActivate, Router, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({providedIn: 'root'})
export class publicGuard implements CanMatch, CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  private checkAuthStatus(): boolean | Observable<boolean> {
    return this.authService.checkAuthentication()
      .pipe(
        tap( isAutheticated => {
          if(isAutheticated) {
            this.router.navigate(['./'])
          }
        }),
        map( isAutheticated => !isAutheticated )
      )
  }

  canMatch( route: Route, segments: UrlSegment[]): boolean | Observable<boolean>{
    // console.log('Can match')
    // console.log({route, segments})

    return this.checkAuthStatus();
  }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean>{
    // console.log('Can activate')
    // console.log({ route, state})

    return this.checkAuthStatus();
  }
}
