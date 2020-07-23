import { Component, OnInit, Inject, OnDestroy } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './auth/auth.service';


import { TranslateService } from '@ngx-translate/core';
import { MyEvent } from 'src/services/myevent.services';
import { Constants } from 'src/models/contants.models';
import { APP_CONFIG, AppConfig } from './app.config';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private authSub : Subscription;
  private previousAuthState = false;
  rtlSide = "left";

  fullname = '';

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'home',
      url: '/home',
      icon: 'zmdi zmdi-home'
    },
    {
      title: 'my_profile',
      url: '/my-profile',
      icon: 'zmdi zmdi-assignment-account'
    },
    {
      title: 'my_orders',
      url: '/my-orders',
      icon: 'zmdi zmdi-shopping-cart'
    },
    {
      title: 'offers',
      url: '/offers',
      icon: 'zmdi zmdi-label'
    },
    {
      title: 'my_wishlist',
      url: '/wishlist',
      icon: 'zmdi zmdi-favorite'
    },

    {
      title: 'about_us',
      url: '/about-us',
      icon: 'zmdi zmdi-assignment',
    },

    {
      title: 'help_center',
      url: '/contact-us',
      icon: 'zmdi zmdi-comment-text'
    },

  ];


  constructor(
    @Inject(APP_CONFIG) public config: AppConfig,
    private platform: Platform,
    private navCtrl: NavController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService : AuthService,
    private translate: TranslateService,
    private http : HttpClient,
    private myEvent: MyEvent
    ) {
      this.initializeApp();
      this.myEvent.getLanguageObservable().subscribe(value => {
      this.navCtrl.navigateRoot(['./']);
      this.globalize(value);
      this.initializeApp();
    });
  }
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
      this.globalize(defaultLang);
    });
  }

  globalize(languagePriority) {
    this.translate.setDefaultLang("en");
    let defaultLangCode = this.config.availableLanguages[0].code;
    this.translate.use(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
    this.setDirectionAccordingly(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
  }

  setDirectionAccordingly(lang: string) {
    switch (lang) {
      case 'ar': {
        this.rtlSide = "rtl";
        break;
      }
      default: {
        this.rtlSide = "ltr";
        break;
      }
    }
  }

  onLogout(){
    this.authService.logout();
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    

    this.authService.UserIsAuthenticated.subscribe(isAuth => {
      if(!isAuth && this.previousAuthState !== isAuth){
        this.navCtrl.navigateBack('/sign-in');
      }

      this.previousAuthState = isAuth;
    })

    this.authService.userFullname.subscribe(fullname => {
      this.fullname = fullname;
    })
  }
}
