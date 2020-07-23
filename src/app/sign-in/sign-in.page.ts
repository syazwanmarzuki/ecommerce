import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController, MenuController, IonRouterOutlet, Platform } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService, authResponseData } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { NetworkService } from '../providers/network.service';
import { Plugins } from '@capacitor/core';
import { async } from '@angular/core/testing';
const { Device, SignInWithApple } = Plugins;


let navigationExtras : NavigationExtras = {
  replaceUrl : true,
  skipLocationChange : true
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  showAppleSignIn = false;
  user = null;

  constructor(
      private navCtrl: NavController,
      private route: Router,
      private loadedCtrl :  LoadingController,
      private alertCtrl : AlertController,
      private menuCtrl : MenuController,
      private routerAlert :  IonRouterOutlet,
      private authService : AuthService,
      private platform : Platform,
      private networkService : NetworkService,
      private routerOutlet : IonRouterOutlet

    ) { }

    

  async ngOnInit() {
    let device = await Device.getInfo();
    this.showAppleSignIn = device.platform === 'ios';
  }

  openAppleSignIn() {
    SignInWithApple.Authorize().then(async res => {
      if (res.response && res.response.identityToken){
        this.user = res.response;
      }
      else{
        this.presentAlert();
      }
    }).catch(response => {
      this.presentAlert();
    })
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header : 'Login Failed',
      message : 'Please try again later',
      buttons : ['Okay'],
    });
    await alert.present();
  }

  ionViewDidEnter(){
    this.platform.backButton.subscribe(() => {
      if (this.route.url.indexOf('/sign-in') >= 0){
        this.alertCtrl.create({
          header : 'Confirmation',
          message : 'Are you sure you want to quit?',
          buttons : [
            {
              text : 'Yes',
              handler : () => {
                navigator['app'].exitApp();
              }
            },
            {
              text : 'No',
              role : 'cancel'
            }
          ]
        }).then(alertEl => {
          alertEl.present();
        })
      }
    });

    this.networkService.checkNetwornConnectionDirectToAuthPage();
    this.menuCtrl.enable(false, 'menu');
    this.routerOutlet.swipeGesture = false;
  }

  ionViewWillLeave(){
    this.routerOutlet.swipeGesture = true;
  }

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    console.log(email);
    console.log(password);
    
    
    this.loadedCtrl.create({
      keyboardClose: true,
      message : 'Please wait...'
    }).then(loadingEl => {
      loadingEl.present();
      let authObs: Observable<authResponseData>;
      authObs = this.authService.login(email, password);

      authObs.subscribe(resData => {
        loadingEl.dismiss();
        if (resData.valid){
          this.route.navigateByUrl('/home', navigationExtras);
          form.reset();
        }
        else{
          this.alertCtrl.create({
            header: 'Oh-oh!',
            message : resData.message,
            buttons : [
              {
                text : 'Close',
                role : 'cancel'
              }
            ]
          }).then(alertEl => {
            alertEl.present();
          })
        }
      })
    })
  }

  home() {
    this.navCtrl.navigateRoot(['./home']);
  } 
 sign_up() {
    this.route.navigate(['./sign-up']);
  } 
}
