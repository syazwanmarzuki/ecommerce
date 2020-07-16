import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.page.html',
  styleUrls: ['./search-result.page.scss'],
})
export class SearchResultPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

item_details() {
    this.route.navigate(['./item-detail']);
  } 
search() {
    this.route.navigate(['./search']);
  } 
}
