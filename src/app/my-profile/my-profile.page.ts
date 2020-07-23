import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { MenuController, IonRouterOutlet, Platform, LoadingController, ModalController } from '@ionic/angular';
import { NetworkService } from '../providers/network.service';
import { ProfileService } from './profile.service';
import { ProfileModalComponent } from './profile-modal/profile-modal.component';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {
  user_id : number;
  fullname = '';
  email = '';
  phoneno = '';
  registerAt = '';
  userFullname = '';
  home_address = '';
  office_address = '';
  other_address = '';

  isLoading : boolean = false;

  constructor(
    private route: Router,
    private authService : AuthService,
    private menuCtrl : MenuController,
    private routerOutlet : IonRouterOutlet,
    private platform : Platform,
    private loadingCtrl : LoadingController,
    private networkService : NetworkService,
    private profileService : ProfileService,
    private modalCtrl : ModalController
    ) { }

  ngOnInit() {
    this.authService.userFullname.subscribe(fullname => {
      this.userFullname = fullname;
    })

    this.profileService.getProfileData().subscribe(resData => {
      
      this.user_id = resData.user_id;
      this.fullname = resData.fullname;
      this.email = resData.email;
      this.phoneno = resData.phoneno;
      this.registerAt = resData.registerAt;
      this.home_address = resData.home_address;
      this.office_address = resData.office_address;
      this.other_address = resData.other_address;
    })
  }
  
  ionViewDidEnter(){
    this.networkService.checkNetworkConnection();
    // this.menuCtrl.enable(true, 'menu');
    // this.routerOutlet.swipeGesture = false;

  }

  openModal(category : number){
    let title : string;

    if (category == 1){
      title = 'My Profile';
    }
    else{
      title = 'My Addresses';
    }

    this.modalCtrl.create({
      component : ProfileModalComponent,
      componentProps : {page_title : title, category : category}
    }).then(modalEl => {
      modalEl.present();
    })
  }

  
}
