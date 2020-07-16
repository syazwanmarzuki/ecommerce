import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormsModule, ControlContainer } from '@angular/forms';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  registerForm : FormGroup;

  phoneno : string = '';

  constructor(
    private route: Router,
    private loadCtrl: LoadingController,
    private alertCtrl: AlertController,
    private navCtrl : NavController,
    private authService : AuthService,
    private http : HttpClient
    ) { }

  ngOnInit() {

    this.registerForm = new FormGroup({
      fullname : new FormControl(null, {
        validators : [Validators.required]
      }),
      email : new FormControl(null, {
        validators : [Validators.required, this.checkEmail.bind(this)]
      }),
      // email : new FormControl(null, {
      //   validators : [Validators.required]
      // }),
      phoneno : new FormControl(null, {
        validators : [Validators.required, this.checkPhoneNo.bind(this), this.checkIsNumber.bind(this)]
      }),
      // phoneno : new FormControl(null, {
      //   validators : [Validators.required]
      // }),
      password : new FormControl(null, {
        validators : [Validators.required]
      })  
    })
  }
    
  onSubmit(){
    let formData = new FormData();
    formData.append('action', 'register');
    formData.append('email', this.registerForm.value.email);
    formData.append('fullname', this.registerForm.value.fullname);
    formData.append('phoneno', this.registerForm.value.phoneno);
    formData.append('password', this.registerForm.value.password);

    console.log(this.registerForm.value.phoneno);

    this.loadCtrl.create({
      keyboardClose: true,
      message : 'Please wait..'
    }).then(loadingEl => {
      loadingEl.present();

      this.authService.register(
        this.registerForm.value
      ).subscribe(resData => {
        loadingEl.dismiss();
        if(resData.valid){
          this.alertCtrl.create({
            header: 'Success',
            message : resData.msg,
            buttons:[
              {
                text: 'Continue',
                handler: ()=>{
                  this.navCtrl.navigateBack('/sign-in');
                }
              }
            ],
            backdropDismiss: false
          }).then(alertEl => {
            alertEl.present();
          })
        }else{
          this.alertCtrl.create({
            header: 'Oh-oh!',
            message: resData.msg,
            buttons: [
              {
                text: 'Okay',
                role: 'Cancel'
              }
            ],
            backdropDismiss: false
          }).then(alertEl => {
            alertEl.present();
          })
        }
      });
    })
  }

  checkEmail(control: FormControl){

    let formData = new FormData();
    formData.append('action','checkEmail');
    formData.append('email', control.value);

    this.http.post<{valid: boolean}>(environment.url, formData)
    .subscribe(result=> {
      if(result.valid){
        control.setErrors({invalid_email: true});
      }
    })
  }

  checkPhoneNo(control: FormControl){
    let formData = new FormData();
    formData.append('action', 'checkPhoneNo');
    formData.append('phoneno', control.value);

    this.http.post<{valid : boolean}>(environment.url, formData)
    .subscribe(result => {
      if(result.valid){
        control.setErrors({invalid_phoneno: true});
      }
    })
  }

  checkIsNumber(control : FormControl){
    if (isNaN(control.value)){
      return {invalid_format : true}
    }

    return null;
  }


}




