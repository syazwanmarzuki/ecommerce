import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { Plugins, Network } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(
    private router : Router,
    private navCtrl : NavController,
    private loadingCtrl : LoadingController
  ) { }

  checkNetworkConnectionForGuard(){
    let networkStatus = Network.getStatus();
    networkStatus.then(value => {
      if(value.connected !== true){
        this.router.navigateByUrl('/network-error');
      }
    })
  }

  checkNetworkConnection (){
    let handler = Network.addListener('networkStatusChange', (status) => {
      if(status.connected !== true){
        this.router.navigateByUrl('/network-error');
      }
    });
  }

  retryToChecknetworkConnection (){
    this.loadingCtrl.create({}).then(loadingEl => {
      loadingEl.present();
      let networkStatus = Network.getStatus();
      networkStatus.then(value => {
        loadingEl.dismiss();
        if(value.connected == true){
          this.router.navigateByUrl('/home');
        }
      })
    })
  }

  checkNetwornConnectionDirectToAuthPage(){
    this.loadingCtrl.create({}).then(loadingEl => {
      loadingEl.present();
      let networkStatus = Network.getStatus();
      networkStatus.then(value => {
        loadingEl.dismiss();
        if(value.connected == true){
          this.router.navigateByUrl('/sign-in');
        }
      })
    })
  }
}
