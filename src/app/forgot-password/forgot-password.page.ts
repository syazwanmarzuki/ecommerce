import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { NetworkService } from '../providers/network.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { authResponseData, AuthService } from '../auth/auth.service';

let navigationExtras : NavigationExtras = {
  replaceUrl : true,
  skipLocationChange : true
}

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(
    private loadingCtrl : LoadingController,
    private alertCtrl : AlertController,
    private router : Router,
    private navCtrl : NavController,
    private networkService : NetworkService,
    private authService : AuthService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.networkService.checkNetworkConnection();
  }

  onSubmit(form : NgForm){
    if (!form.valid){
      return;
    }

    const email = form.value.email;
    console.log(email);
    

    this.loadingCtrl.create({
      keyboardClose : true,
      message : "Sending email..."
    }).then(loadingEl => {
      loadingEl.present();
      let authObs : Observable<authResponseData>;
      authObs = this.authService.resetPassword(email);

      authObs.subscribe(resData => {
        loadingEl.dismiss();
        if (resData.valid){
          this.router.navigateByUrl('/sign-in', navigationExtras);
          form.reset();
          this.alertCtrl.create({
            header: 'Success!',
            message : resData.message,
            buttons : [
              {
                text : 'Close'  
              }
            ]
          }).then(alertEl => {
            alertEl.present();
          })
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

}
