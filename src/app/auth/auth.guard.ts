import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { NavController } from '@ionic/angular';
import { switchMap, take, tap } from 'rxjs/operators';
import { NetworkService } from '../providers/network.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
    private authService : AuthService,
    private navCtrl : NavController,
    private networkService : NetworkService
  ){}
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      this.networkService.checkNetworkConnectionForGuard();
      return this.authService.UserIsAuthenticated.pipe(
        take(1),
        switchMap(isAuthenticated => {
          if(!isAuthenticated){
            return this.authService.autoLogin();
          }
          else{
            return of(isAuthenticated);
          }
        }),
        tap(isAuthenticated => {
          if (!isAuthenticated){
            this.navCtrl.navigateBack('/sign-in');
          }
        })
      )
  }
}
  