function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button></ion-menu-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t<div class=\"title_inner d-flex\">\n\t\t\t\t<h2 (click)=\"search()\">{{'search_on_shophour' | translate}} ShopCart</h2>\n\n\t\t\t\t<span class=\"end cart_icon\" (click)=\"cart()\">\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-mall ion-text-start\"></ion-icon>\n\t\t\t\t\t<ion-badge>2</ion-badge>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</ion-title>\n\t</ion-toolbar>\n\t<div class=\"category_row\"> \n\t\t<div class=\"category fashion\" (click)=\"item()\">\n\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t<h2>Fashino</h2>\n\t\t\t\t<img src=\"assets/images/Jackets.png\" class=\"crop_img\">\n\t\t\t</div> \n\t\t</div>\n\t\t<div class=\"category phones\" (click)=\"item()\">\n\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t<h2>Phones</h2>\n\t\t\t\t<img src=\"assets/images/Phones.png\" class=\"crop_img\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"category furniture\" (click)=\"item()\">\n\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t<h2>Furnture</h2>\n\t\t\t\t<img src=\"assets/images/Furniture.png\" class=\"crop_img\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"category electronics\" (click)=\"item()\">\n\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t<h2>Beauty</h2>\n\t\t\t\t<img src=\"assets/images/Electronics.png\" class=\"crop_img\">\n\t\t\t</div>\n\t\t</div>\n\t\t\t<div class=\"category fashion\" (click)=\"item()\">\n\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t<h2>Fashino</h2>\n\t\t\t\t<img src=\"assets/images/Jackets.png\" class=\"crop_img\">\n\t\t\t</div> \n\t\t</div>\n\t\t<div class=\"category phones\" (click)=\"item()\">\n\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t<h2>Phones</h2>\n\t\t\t\t<img src=\"assets/images/Phones.png\" class=\"crop_img\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"category furniture\" (click)=\"item()\">\n\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t<h2>Furnture</h2>\n\t\t\t\t<img src=\"assets/images/Furniture.png\" class=\"crop_img\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"category electronics\" (click)=\"item()\">\n\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t<h2>Beauty</h2>\n\t\t\t\t<img src=\"assets/images/Electronics.png\" class=\"crop_img\">\n\t\t\t</div>\n\t\t</div>\n\t\t\t<div class=\"category fashion\" (click)=\"item()\">\n\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t<h2>Fashino</h2>\n\t\t\t\t<img src=\"assets/images/Jackets.png\" class=\"crop_img\">\n\t\t\t</div> \n\t\t</div>\n\t\t<div class=\"category phones\" (click)=\"item()\">\n\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t<h2>Phones</h2>\n\t\t\t\t<img src=\"assets/images/Phones.png\" class=\"crop_img\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"category furniture\" (click)=\"item()\">\n\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t<h2>Furnture</h2>\n\t\t\t\t<img src=\"assets/images/Furniture.png\" class=\"crop_img\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"category electronics\" (click)=\"item()\">\n\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t<h2>Beauty</h2>\n\t\t\t\t<img src=\"assets/images/Electronics.png\" class=\"crop_img\">\n\t\t\t</div>\n\t\t</div>\n\t\t\t<div class=\"category fashion\" (click)=\"item()\">\n\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t<h2>Fashino</h2>\n\t\t\t\t<img src=\"assets/images/Jackets.png\" class=\"crop_img\">\n\t\t\t</div> \n\t\t</div>\n\t\t<div class=\"category phones\" (click)=\"item()\">\n\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t<h2>Phones</h2>\n\t\t\t\t<img src=\"assets/images/Phones.png\" class=\"crop_img\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"category furniture\" (click)=\"item()\">\n\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t<h2>Furnture</h2>\n\t\t\t\t<img src=\"assets/images/Furniture.png\" class=\"crop_img\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"category electronics\" (click)=\"item()\">\n\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t<h2>Beauty</h2>\n\t\t\t\t<img src=\"assets/images/Electronics.png\" class=\"crop_img\">\n\t\t\t</div>\n\t\t</div>\n\t\t\t<div class=\"category fashion\" (click)=\"item()\">\n\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t<h2>Fashino</h2>\n\t\t\t\t<img src=\"assets/images/Jackets.png\" class=\"crop_img\">\n\t\t\t</div> \n\t\t</div>\n\t\t<div class=\"category phones\" (click)=\"item()\">\n\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t<h2>Phones</h2>\n\t\t\t\t<img src=\"assets/images/Phones.png\" class=\"crop_img\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"category furniture\" (click)=\"item()\">\n\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t<h2>Furnture</h2>\n\t\t\t\t<img src=\"assets/images/Furniture.png\" class=\"crop_img\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"category electronics\" (click)=\"item()\">\n\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t<h2>Beauty</h2>\n\t\t\t\t<img src=\"assets/images/Electronics.png\" class=\"crop_img\">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ion-header>\n\n<ion-content fullscreen>\n\t<div class=\"banner\">\n\t\t<ion-slides pager=\"true\" loop=\"true\">\n\t\t\t<ion-slide>\n\t\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t\t<img src=\"assets/images/Banner1.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t</ion-slide>\n\t\t\t<ion-slide>\n\t\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t\t<img src=\"assets/images/Banner2.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t</ion-slide>\n\t\t\t<ion-slide>\n\t\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t\t<img src=\"assets/images/Banner3.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t</ion-slide>\n\t\t\t<ion-slide>\n\t\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t\t<img src=\"assets/images/Banner1.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t</ion-slide>\n\t\t</ion-slides>\n\t</div>\n\n\t<div class=\"items_container\">\n\t\t<h2>Newly Launched</h2>\n\t\t<div class=\"items_row\">\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/1.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Summer Wgite Top</h3>\n\t\t\t\t\t<h4>Pajeroma</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$30.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/2.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3> Floral Print Shirt</h3>\n\t\t\t\t\t<h4>Lecoil Evea</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$44.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t3.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/item3.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Pink Cotton Tshirt</h3>\n\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/1.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Summer Wgite Top</h3>\n\t\t\t\t\t<h4>Pajeroma</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$30.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/2.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3> Floral Print Shirt</h3>\n\t\t\t\t\t<h4>Lecoil Evea</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$44.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t3.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/item3.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Pink Cotton Tshirt</h3>\n\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\t<div class=\"items_container\">\n\t\t<h2>Featured Products</h2>\n\t\t<div class=\"items_row\">\n\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/item3.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Pink Cotton Tshirt</h3>\n\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/1.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Summer Wgite Top</h3>\n\t\t\t\t\t<h4>Pajeroma</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$30.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/2.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3> Floral Print Shirt</h3>\n\t\t\t\t\t<h4>Lecoil Evea</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$44.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t3.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/1.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Summer Wgite Top</h3>\n\t\t\t\t\t<h4>Pajeroma</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$30.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/2.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3> Floral Print Shirt</h3>\n\t\t\t\t\t<h4>Lecoil Evea</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$44.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t3.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/item3.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/1.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Summer Wgite Top</h3>\n\t\t\t\t\t<h4>Pajeroma</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$30.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/2.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3> Floral Print Shirt</h3>\n\t\t\t\t\t<h4>Lecoil Evea</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$44.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t3.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Pink Cotton Tshirt</h3>\n\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"items_container\">\n\t\t<h2>Recent Searches</h2>\n\t\t<div class=\"items_row\">\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/1.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Summer Wgite Top</h3>\n\t\t\t\t\t<h4>Pajeroma</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$30.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/2.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3> Floral Print Shirt</h3>\n\t\t\t\t\t<h4>Lecoil Evea</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$44.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t3.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/item3.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Pink Cotton Tshirt</h3>\n\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/1.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Summer Wgite Top</h3>\n\t\t\t\t\t<h4>Pajeroma</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$30.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/2.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3> Floral Print Shirt</h3>\n\t\t\t\t\t<h4>Lecoil Evea</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$44.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t3.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/item3.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Pink Cotton Tshirt</h3>\n\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"items_container\">\n\t\t<h2>Featured Products</h2>\n\t\t<div class=\"items_row\">\n\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/item3.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Pink Cotton Tshirt</h3>\n\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/1.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Summer Wgite Top</h3>\n\t\t\t\t\t<h4>Pajeroma</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$30.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/2.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3> Floral Print Shirt</h3>\n\t\t\t\t\t<h4>Lecoil Evea</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$44.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t3.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/1.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Summer Wgite Top</h3>\n\t\t\t\t\t<h4>Pajeroma</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$30.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/2.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3> Floral Print Shirt</h3>\n\t\t\t\t\t<h4>Lecoil Evea</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$44.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t3.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/item3.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Summer Full Sleven Tshirt</h3>\n\t\t\t\t\t<h4>Calvis Dino</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$35.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t3.7 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/1.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Summer Wgite Top</h3>\n\t\t\t\t\t<h4>Pajeroma</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$30.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/2.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3> Floral Print Shirt</h3>\n\t\t\t\t\t<h4>Lecoil Evea</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$44.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t3.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"item\" (click)=\"item_details()\">\n\t\t\t\t<div class=\"item_img center_img\">\n\t\t\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"item_details\">\n\t\t\t\t\t<h3>Pink Cotton Tshirt</h3>\n\t\t\t\t\t<h4>Operun England</h4>\n\t\t\t\t\t<h5 class=\"d-flex\">\n\t\t\t\t\t\t<span class=\"price\">$42.00</span>\n\t\t\t\t\t\t<ion-badge class=\"end\">\n\t\t\t\t\t\t\t4.2 <ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t\t\t\t</ion-badge>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header {\n  padding-top: 20px;\n}\nion-header::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 50px);\n  background: url('header.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  display: block;\n}\nion-header ion-toolbar {\n  max-width: calc(100% - 28px);\n  margin: 0 auto;\n  border-radius: 8px;\n  min-height: 50px !important;\n  max-height: 50px !important;\n}\nion-header ion-toolbar ion-title {\n  height: 50px;\n  line-height: 50px;\n  max-height: 50px;\n  padding-right: 11px !important;\n  position: relative !important;\n  top: 0;\n}\nion-header ion-toolbar ion-title .title_inner h2 {\n  margin: 0;\n  font-size: 0.95rem;\n  color: var(--text-dark-primary);\n  font-weight: 400;\n  letter-spacing: 1px;\n  width: 100%;\n  height: 50px;\n  line-height: 50px;\n  position: relative;\n  text-transform: none;\n  text-align: justify;\n}\nion-header ion-toolbar ion-title .title_inner span.cart_icon {\n  position: relative;\n  min-width: 27px;\n}\nion-header ion-toolbar ion-title .title_inner span.cart_icon ion-badge {\n  background: var(--red_color);\n  --background: var(--transparent);\n  --color: var(--white);\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n  border-radius: 50%;\n  width: 17px;\n  height: 17px;\n  line-height: 17px;\n  display: block;\n  font-size: 0.8rem !important;\n  position: absolute;\n  top: 9px;\n  right: 0;\n  font-weight: 500;\n}\nion-header ion-toolbar ion-title .title_inner span.cart_icon ion-icon {\n  position: relative;\n  top: 10px;\n  font-size: 1.5rem;\n}\nion-header .category_row {\n  width: 100%;\n  white-space: nowrap;\n  overflow-x: auto;\n  padding: 15px 0 10px 0;\n}\nion-header .category_row .category {\n  display: inline-block;\n  margin: 0 6px;\n  border-radius: 15px;\n  overflow: hidden;\n}\nion-header .category_row .category .img_box {\n  width: 90px;\n  height: 90px;\n}\nion-header .category_row .category .img_box h2 {\n  margin: 0;\n  color: var(--white);\n  text-transform: uppercase;\n  position: relative;\n  z-index: 1;\n  font-size: 0.65rem;\n  padding: 10px 7px;\n  letter-spacing: 0.5px;\n  font-weight: 500;\n}\nion-header .category_row .category:first-child {\n  margin-left: 14px;\n}\nion-header .category_row .category:last-child {\n  margin-right: 14px;\n}\n.banner {\n  margin-bottom: 18px;\n}\n.banner ion-slides ion-slide .img_box {\n  width: 100%;\n  height: 210px;\n}\n.items_container {\n  margin-bottom: 15px;\n}\n.items_container h2 {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  padding: 0px 15px 15px 15px;\n}\n.items_container .items_row {\n  width: 100%;\n  white-space: nowrap;\n  overflow-x: auto;\n  padding: 0px 0 10px 0;\n}\n.items_container .items_row .item {\n  display: inline-block;\n  margin: 0 6px;\n  overflow: hidden;\n  width: 147px;\n}\n.items_container .items_row .item .item_img {\n  width: 147px;\n  height: 147px;\n  border-radius: 8px;\n}\n.items_container .items_row .item .item_details {\n  padding-top: 12px;\n  width: 100%;\n  overflow: hidden;\n}\n.items_container .items_row .item .item_details h3 {\n  margin: 0;\n  color: var(--text-dark-primary);\n  font-size: 0.9rem;\n  font-weight: 500;\n  padding-bottom: 3px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.items_container .items_row .item .item_details h4 {\n  margin: 0;\n  color: var(--text-light);\n  font-weight: 400;\n  font-size: 0.7rem;\n  padding-bottom: 8px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.items_container .items_row .item .item_details h5 {\n  margin: 0;\n  font-size: 1.1rem;\n  color: var(--text-black);\n}\n.items_container .items_row .item .item_details h5 ion-badge {\n  background: var(--secondary);\n  --background: var(--transparent);\n  --color: var(--white);\n  --padding-bottom: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n  border-radius: 50px;\n  font-weight: 400;\n  font-size: 0.7rem;\n  min-width: 41px;\n  height: 18px;\n  line-height: 18px;\n}\n.items_container .items_row .item .item_details h5 ion-badge ion-icon {\n  font-size: 0.6rem;\n  position: relative;\n  top: 1px;\n}\n.items_container .items_row .item:first-child {\n  margin-left: 14px;\n}\n.items_container .items_row .item:last-child {\n  margin-right: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWF6d2FubWFyenVraS9Eb2N1bWVudHMvTW9iaWxlIEFwcC9lLWNvbW1lcmNlL2N1c3RvbWVyL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGlCQUFBO0FDQ0Q7QURDQztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQ0NGO0FERUM7RUFDQyw0QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7QUNBRjtBREdFO0VBQ0MsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsTUFBQTtBQ0RIO0FESUk7RUFDQyxTQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDRkw7QURNSztFQUNDLGtCQUFBO0VBQ0EsZUFBQTtBQ0pOO0FETU07RUFDQyw0QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQ0pQO0FET007RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ0xQO0FEYUM7RUFDQyxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDWEY7QURjRTtFQUNDLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNaSDtBRGNHO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNaSjtBRGNJO0VBQ0MsU0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ1pMO0FEZ0JHO0VBQ0MsaUJBQUE7QUNkSjtBRGlCRztFQUNDLGtCQUFBO0FDZko7QURzQkE7RUFDQyxtQkFBQTtBQ25CRDtBRHVCRztFQUNDLFdBQUE7RUFDQSxhQUFBO0FDckJKO0FEMkJBO0VBQ0MsbUJBQUE7QUN4QkQ7QUQwQkM7RUFDQyxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FDeEJGO0FEMkJDO0VBQ0MsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ3pCRjtBRDJCRTtFQUNDLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ3pCSDtBRDJCRztFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUN6Qko7QUQ0Qkc7RUFDQyxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQzFCSjtBRDRCSTtFQUNDLFNBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQzFCTDtBRDZCSTtFQUNDLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQzNCTDtBRCtCSTtFQUNDLFNBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FDN0JMO0FEK0JLO0VBQ0MsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDN0JOO0FEK0JNO0VBQ0MsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUM3QlA7QURvQ0c7RUFDQyxpQkFBQTtBQ2xDSjtBRHFDRztFQUNDLGtCQUFBO0FDbkNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuXHRwYWRkaW5nLXRvcDogMjBweDtcblxuXHQmOjpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6ICcnO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IDA7XG5cdFx0bGVmdDogMDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IGNhbGMoMTAwJSAtIDUwcHgpO1xuXHRcdGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2hlYWRlci5wbmcpO1xuXHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0fVxuXG5cdGlvbi10b29sYmFyIHtcblx0XHRtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDI4cHgpO1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRtaW4taGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG5cdFx0bWF4LWhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuXG5cblx0XHRpb24tdGl0bGUge1xuXHRcdFx0aGVpZ2h0OiA1MHB4O1xuXHRcdFx0bGluZS1oZWlnaHQ6IDUwcHg7XG5cdFx0XHRtYXgtaGVpZ2h0OiA1MHB4O1xuXHRcdFx0cGFkZGluZy1yaWdodDogMTFweCAhaW1wb3J0YW50O1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG5cdFx0XHR0b3A6IDA7XG5cblx0XHRcdC50aXRsZV9pbm5lciB7XG5cdFx0XHRcdGgyIHtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAuOTVyZW07XG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtZGFyay1wcmltYXJ5KTtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAxcHg7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0aGVpZ2h0OiA1MHB4O1xuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiA1MHB4O1xuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogbm9uZTtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3BhbiB7XG5cdFx0XHRcdFx0Ji5jYXJ0X2ljb24ge1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0bWluLXdpZHRoOiAyN3B4O1xuXG5cdFx0XHRcdFx0XHRpb24tYmFkZ2Uge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB2YXIoLS1yZWRfY29sb3IpO1xuXHRcdFx0XHRcdFx0XHQtLWJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KTtcblx0XHRcdFx0XHRcdFx0LS1jb2xvcjogdmFyKC0td2hpdGUpO1xuXHRcdFx0XHRcdFx0XHQtLXBhZGRpbmctYm90dG9tOiAwO1xuXHRcdFx0XHRcdFx0XHQtLXBhZGRpbmctZW5kOiAwO1xuXHRcdFx0XHRcdFx0XHQtLXBhZGRpbmctc3RhcnQ6IDA7XG5cdFx0XHRcdFx0XHRcdC0tcGFkZGluZy10b3A6IDA7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDE3cHg7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMTdweDtcblx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDE3cHg7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDAuOHJlbSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRcdHRvcDogOXB4O1xuXHRcdFx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aW9uLWljb24ge1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRcdHRvcDogMTBweDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjVyZW07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LmNhdGVnb3J5X3JvdyB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0XHRvdmVyZmxvdy14OiBhdXRvO1xuXHRcdHBhZGRpbmc6IDE1cHggMCAxMHB4IDA7XG5cblxuXHRcdC5jYXRlZ29yeSB7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRtYXJnaW46IDAgNnB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTVweDtcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cblx0XHRcdC5pbWdfYm94IHtcblx0XHRcdFx0d2lkdGg6IDkwcHg7XG5cdFx0XHRcdGhlaWdodDogOTBweDtcblxuXHRcdFx0XHRoMiB7XG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XG5cdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0ei1pbmRleDogMTtcblx0XHRcdFx0XHRmb250LXNpemU6IC42NXJlbTtcblx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4IDdweDtcblx0XHRcdFx0XHRsZXR0ZXItc3BhY2luZzogLjVweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdCY6Zmlyc3QtY2hpbGQge1xuXHRcdFx0XHRtYXJnaW4tbGVmdDogMTRweDtcblx0XHRcdH1cblxuXHRcdFx0JjpsYXN0LWNoaWxkIHtcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxNHB4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG59XG5cbi5iYW5uZXIge1xuXHRtYXJnaW4tYm90dG9tOiAxOHB4O1xuXG5cdGlvbi1zbGlkZXMge1xuXHRcdGlvbi1zbGlkZSB7XG5cdFx0XHQuaW1nX2JveCB7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRoZWlnaHQ6IDIxMHB4O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4uaXRlbXNfY29udGFpbmVyIHtcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcblxuXHRoMiB7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdGZvbnQtc2l6ZTogMS4yNXJlbTtcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdHBhZGRpbmc6IDBweCAxNXB4IDE1cHggMTVweDtcblx0fVxuXG5cdC5pdGVtc19yb3cge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0b3ZlcmZsb3cteDogYXV0bztcblx0XHRwYWRkaW5nOiAwcHggMCAxMHB4IDA7XG5cblx0XHQuaXRlbSB7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRtYXJnaW46IDAgNnB4O1xuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdHdpZHRoOiAxNDdweDtcblxuXHRcdFx0Lml0ZW1faW1nIHtcblx0XHRcdFx0d2lkdGg6IDE0N3B4O1xuXHRcdFx0XHRoZWlnaHQ6IDE0N3B4O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0XHR9XG5cblx0XHRcdC5pdGVtX2RldGFpbHMge1xuXHRcdFx0XHRwYWRkaW5nLXRvcDogMTJweDtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cblx0XHRcdFx0aDMge1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1kYXJrLXByaW1hcnkpO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogLjlyZW07XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogM3B4O1xuXHRcdFx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0XHRcdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGg0IHtcblx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAuN3JlbTtcblx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogOHB4O1xuXHRcdFx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0XHRcdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aDUge1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRmb250LXNpemU6IDEuMXJlbTtcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG5cblx0XHRcdFx0XHRpb24tYmFkZ2Uge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcblx0XHRcdFx0XHRcdC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuXHRcdFx0XHRcdFx0LS1jb2xvcjogdmFyKC0td2hpdGUpO1xuXHRcdFx0XHRcdFx0LS1wYWRkaW5nLWJvdHRvbTogMDtcblx0XHRcdFx0XHRcdC0tcGFkZGluZy1lbmQ6IDA7XG5cdFx0XHRcdFx0XHQtLXBhZGRpbmctc3RhcnQ6IDA7XG5cdFx0XHRcdFx0XHQtLXBhZGRpbmctdG9wOiAwO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IC43cmVtO1xuXHRcdFx0XHRcdFx0bWluLXdpZHRoOiA0MXB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxOHB4O1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDE4cHg7XG5cblx0XHRcdFx0XHRcdGlvbi1pY29uIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAwLjZyZW07XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdFx0dG9wOiAxcHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0JjpmaXJzdC1jaGlsZCB7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAxNHB4O1xuXHRcdFx0fVxuXG5cdFx0XHQmOmxhc3QtY2hpbGQge1xuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDE0cHg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59IiwiaW9uLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuaW9uLWhlYWRlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXIucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyOHB4KTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWluLWhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIGhlaWdodDogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIG1heC1oZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDExcHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gIHRvcDogMDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIC50aXRsZV9pbm5lciBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIC50aXRsZV9pbm5lciBzcGFuLmNhcnRfaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiAyN3B4O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIHNwYW4uY2FydF9pY29uIGlvbi1iYWRnZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXJlZF9jb2xvcik7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAtLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTdweDtcbiAgaGVpZ2h0OiAxN3B4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA5cHg7XG4gIHJpZ2h0OiAwO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUgLnRpdGxlX2lubmVyIHNwYW4uY2FydF9pY29uIGlvbi1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuaW9uLWhlYWRlciAuY2F0ZWdvcnlfcm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHBhZGRpbmc6IDE1cHggMCAxMHB4IDA7XG59XG5pb24taGVhZGVyIC5jYXRlZ29yeV9yb3cgLmNhdGVnb3J5IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgNnB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuaW9uLWhlYWRlciAuY2F0ZWdvcnlfcm93IC5jYXRlZ29yeSAuaW1nX2JveCB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG59XG5pb24taGVhZGVyIC5jYXRlZ29yeV9yb3cgLmNhdGVnb3J5IC5pbWdfYm94IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtc2l6ZTogMC42NXJlbTtcbiAgcGFkZGluZzogMTBweCA3cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbmlvbi1oZWFkZXIgLmNhdGVnb3J5X3JvdyAuY2F0ZWdvcnk6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMTRweDtcbn1cbmlvbi1oZWFkZXIgLmNhdGVnb3J5X3JvdyAuY2F0ZWdvcnk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMTRweDtcbn1cblxuLmJhbm5lciB7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG4uYmFubmVyIGlvbi1zbGlkZXMgaW9uLXNsaWRlIC5pbWdfYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjEwcHg7XG59XG5cbi5pdGVtc19jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLml0ZW1zX2NvbnRhaW5lciBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAwcHggMTVweCAxNXB4IDE1cHg7XG59XG4uaXRlbXNfY29udGFpbmVyIC5pdGVtc19yb3cge1xuICB3aWR0aDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xufVxuLml0ZW1zX2NvbnRhaW5lciAuaXRlbXNfcm93IC5pdGVtIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTQ3cHg7XG59XG4uaXRlbXNfY29udGFpbmVyIC5pdGVtc19yb3cgLml0ZW0gLml0ZW1faW1nIHtcbiAgd2lkdGg6IDE0N3B4O1xuICBoZWlnaHQ6IDE0N3B4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4uaXRlbXNfY29udGFpbmVyIC5pdGVtc19yb3cgLml0ZW0gLml0ZW1fZGV0YWlscyB7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pdGVtc19jb250YWluZXIgLml0ZW1zX3JvdyAuaXRlbSAuaXRlbV9kZXRhaWxzIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrLXByaW1hcnkpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaXRlbXNfY29udGFpbmVyIC5pdGVtc19yb3cgLml0ZW0gLml0ZW1fZGV0YWlscyBoNCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaXRlbXNfY29udGFpbmVyIC5pdGVtc19yb3cgLml0ZW0gLml0ZW1fZGV0YWlscyBoNSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbn1cbi5pdGVtc19jb250YWluZXIgLml0ZW1zX3JvdyAuaXRlbSAuaXRlbV9kZXRhaWxzIGg1IGlvbi1iYWRnZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICAtLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIG1pbi13aWR0aDogNDFweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cbi5pdGVtc19jb250YWluZXIgLml0ZW1zX3JvdyAuaXRlbSAuaXRlbV9kZXRhaWxzIGg1IGlvbi1iYWRnZSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMC42cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4O1xufVxuLml0ZW1zX2NvbnRhaW5lciAuaXRlbXNfcm93IC5pdGVtOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XG59XG4uaXRlbXNfY29udGFpbmVyIC5pdGVtc19yb3cgLml0ZW06bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMTRweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(route) {
        _classCallCheck(this, HomePage);

        this.route = route;
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "item_details",
        value: function item_details() {
          this.route.navigate(['./item-detail']);
        }
      }, {
        key: "item",
        value: function item() {
          this.route.navigate(['./item']);
        }
      }, {
        key: "search",
        value: function search() {
          this.route.navigate(['./search']);
        }
      }, {
        key: "cart",
        value: function cart() {
          this.route.navigate(['./cart']);
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    })], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map