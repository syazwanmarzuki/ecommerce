import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-payment-mode',
  templateUrl: './payment-mode.page.html',
  styleUrls: ['./payment-mode.page.scss'],
})
export class PaymentModePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  pay() {
    this.navCtrl.navigateRoot(['./order-confirm']);
  } 
}
