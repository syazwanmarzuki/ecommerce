import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

 item_details() {
    this.route.navigate(['./item-detail']);
  } 
 item() {
    this.route.navigate(['./item']);
  } 
 search() {
    this.route.navigate(['./search']);
  } 
 cart() {
    this.route.navigate(['./cart']);
  } 
}
