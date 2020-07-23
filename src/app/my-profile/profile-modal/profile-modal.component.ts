import { Component, OnInit, Input } from '@angular/core';
import { ModalController, LoadingController, AlertController } from '@ionic/angular';
import { ProfileService } from '../profile.service';
import { AuthService } from 'src/app/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Plugins,Storage } from '@capacitor/core';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss'],
})
export class ProfileModalComponent implements OnInit {

  @Input() page_title;
  @Input() category;

  myProfile : FormGroup;
  myAddresses : FormGroup;

  isLoading = false;

  constructor(
    private profileService : ProfileService,
    private modalCtrl : ModalController,
    private loadingCtrl : LoadingController,
    private authService : AuthService,
    private alertCtrl : AlertController 
  ) { }

  ngOnInit() {  
    this.myProfile = new FormGroup({
      fullname : new FormControl(null, {
        validators: [Validators.required]
      }),
      email : new FormControl(null, {
        validators : [Validators.required]
      }),
      phoneno : new FormControl(null, {
        validators : [Validators.required, this.checkIsNumber.bind(this)]
      })
    })

    this.myAddresses = new FormGroup({
      home_address : new FormControl(null, {
        validators : [Validators.required]
      }),
      office_address : new FormControl(null, {
        validators : [Validators.required]
      }),
      other_address : new FormControl(null, {
        validators : [Validators.required]
      })
    })

    this.loadingCtrl.create({
      message : 'Loading...'
    }).then(loadingEl => {
      loadingEl.present();
      this.isLoading = true;

      this.profileService.getProfileData().subscribe(resData => {
        console.log(resData);
        
        this.myProfile.get('fullname').setValue(resData.fullname);
        this.myProfile.get('email').setValue(resData.email);
        this.myProfile.get('phoneno').setValue(resData.phoneno);

        this.myAddresses.get('home_address').setValue(resData.home_address);
        this.myAddresses.get('office_address').setValue(resData.office_address);
        this.myAddresses.get('other_address').setValue(resData.other_address);

        loadingEl.dismiss();
        this.isLoading = false;
      })
    })
  }

  checkIsNumber(control : FormControl){
    if(isNaN(control.value)){
      return {invalid_format : true};
    }
  }

  onSave(category : number){
    if (category == 1){
      this.myProfile.markAllAsTouched();
      if(!this.myProfile.valid){
        return;
      }

      this.loadingCtrl.create({
        message : 'Processing...'
      }).then(loadingEl => {
        loadingEl.present();
        this.profileService.updateProfile(1, this.myProfile.value).subscribe(resData =>{
          if(resData.valid){
            Plugins.Storage.get({key : 'authData'}).then(result => {
              const oldData = JSON.parse(result.value) as {
                user_id : string;
                email : string;
                fullname : string;
                phoneno : string;
                session_id : string;
              }

              this.authService.setUserData(oldData.user_id, resData.update_email, resData.update_fullname, oldData.session_id, resData.update_phoneno);

            })

            this.modalCtrl.dismiss({'dismissed' : true});
          }
          else{
            this.alertCtrl.create({
              header : 'Oh-oh!',
              message : 'Failed to update. Please try again later',
              buttons : ['Okay']
            }).then(alertEl => {
              alertEl.present();
            })
          }

          loadingEl.dismiss();
        })
      })
    }
    else if (category == 2){
      this.myAddresses.markAllAsTouched();
      if(!this.myAddresses.valid){
        return;
      }

      this.loadingCtrl.create({
        message : 'Processing...'
      }).then(loadingEl => {
        loadingEl.present();
        this.profileService.updateProfile(2, this.myAddresses.value).subscribe(resData => {
          if(resData.valid){
            this.modalCtrl.dismiss({'dismissed' : true});
          }
          else{
            this.alertCtrl.create({
              header : 'Oops',
              message : 'Failed to update. Please try again later',
              buttons : ['Okay']
            }).then(alertEl => {
              alertEl.present();
            })
          }
          loadingEl.dismiss();
        });
      })
    }
  }

  closeModal(){
    this.modalCtrl.dismiss({'dismissed': true});
  }

}
