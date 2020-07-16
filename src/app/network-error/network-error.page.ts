import { Component, OnInit } from '@angular/core';
import { MenuController, IonRouterOutlet } from '@ionic/angular';
import { NetworkService } from '../providers/network.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-network-error',
  templateUrl: './network-error.page.html',
  styleUrls: ['./network-error.page.scss'],
})
export class NetworkErrorPage implements OnInit {

  constructor(
    private menuCtrl : MenuController,
    private routerOutlet : IonRouterOutlet,
    private networkService : NetworkService,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.menuCtrl.enable(false, 'menu');
    this.routerOutlet.swipeGesture = false;
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log(params['type']);
    })
  }

  checkingNetworkStatus() {
    this.networkService.retryToChecknetworkConnection();
  }

}
