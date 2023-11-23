import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, RouterStateSnapshot, UrlSegment } from '@angular/router';
// import { AuthGuard } from './auth.guard';

export const CanActivateAuth: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ) => {
    console.log({ route, state })
    return false;
}

export const CanMatchAuth: CanMatchFn = (
  route: Route, segments: UrlSegment[]
) => {
  console.log({ route, segments })
  return false
}

export const AuthGuard2 = {
  CanActivateAuth, CanMatchAuth
}
