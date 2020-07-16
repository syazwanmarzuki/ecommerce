(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["select-address-select-address-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-address/select-address.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select-address/select-address.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"bg_transparent\">\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t{{'select_address' | translate}}\n\t\t</ion-title>\n\t</ion-toolbar>\n\t<div class=\"order_steps\">\n\t\t<ion-row>\n\t\t\t<ion-col class=\"active\">\n\t\t\t\t<ion-icon class=\"zmdi zmdi-pin\"></ion-icon>\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t\t<h3>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t</h3>\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t\t<ion-icon class=\"zmdi zmdi-card\"></ion-icon>\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t\t<h3>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t</h3>\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t\t<ion-icon class=\"zmdi zmdi-assignment-check\"></ion-icon>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</div>\n</ion-header>\n\n\n<ion-content fullscreen>\n\t<ion-list lines=\"none\">\n\t\t<ion-radio-group>\n\t\t\t<ion-item>\n\t\t\t\t<div class=\"item_inner d-flex\">\n\t\t\t\t\t<ion-radio value=\"home\"></ion-radio>\n\t\t\t\t\t<div class=\"text_box\">\n\t\t\t\t\t\t<h3>Home</h3>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t1124, Patestine Street, Jackson Tower, Near City Garden, New York, USA\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<div class=\"item_inner d-flex\">\n\t\t\t\t\t<ion-radio value=\"Office\"></ion-radio>\n\t\t\t\t\t<div class=\"text_box\">\n\t\t\t\t\t\t<h3>Office</h3>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t1124, Patestine Street, Jackson Tower, Near City Garden, New York, USA\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<div class=\"item_inner d-flex\">\n\t\t\t\t\t<ion-radio value=\"Other\"></ion-radio>\n\t\t\t\t\t<div class=\"text_box\">\n\t\t\t\t\t\t<h3>Other</h3>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t1124, Patestine Street, Jackson Tower, Near City Garden, New York, USA\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-item>\n\t\t</ion-radio-group>\n\t</ion-list>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n\t<ion-button size=\"large\" shape=\"full\" class=\"btn\" (click)=\"payment_mode()\"> {{'continue' | translate}} </ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/select-address/select-address-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/select-address/select-address-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SelectAddressPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectAddressPageRoutingModule", function() { return SelectAddressPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _select_address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-address.page */ "./src/app/select-address/select-address.page.ts");




const routes = [
    {
        path: '',
        component: _select_address_page__WEBPACK_IMPORTED_MODULE_3__["SelectAddressPage"]
    }
];
let SelectAddressPageRoutingModule = class SelectAddressPageRoutingModule {
};
SelectAddressPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelectAddressPageRoutingModule);



/***/ }),

/***/ "./src/app/select-address/select-address.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/select-address/select-address.module.ts ***!
  \*********************************************************/
/*! exports provided: SelectAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectAddressPageModule", function() { return SelectAddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _select_address_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-address-routing.module */ "./src/app/select-address/select-address-routing.module.ts");
/* harmony import */ var _select_address_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./select-address.page */ "./src/app/select-address/select-address.page.ts");








let SelectAddressPageModule = class SelectAddressPageModule {
};
SelectAddressPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _select_address_routing_module__WEBPACK_IMPORTED_MODULE_6__["SelectAddressPageRoutingModule"]
        ],
        declarations: [_select_address_page__WEBPACK_IMPORTED_MODULE_7__["SelectAddressPage"]]
    })
], SelectAddressPageModule);



/***/ }),

/***/ "./src/app/select-address/select-address.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/select-address/select-address.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  background: url('header.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n}\nion-header ion-toolbar ion-buttons ion-back-button {\n  --color: var(--white) !important;\n}\nion-header ion-toolbar ion-title {\n  color: var(--white);\n}\nion-header .order_steps {\n  padding: 24px 20px 20px 20px;\n}\nion-header .order_steps ion-row {\n  align-items: center;\n}\nion-header .order_steps ion-row ion-col {\n  max-width: 20% !important;\n  min-width: 20% !important;\n  opacity: 0.4;\n}\nion-header .order_steps ion-row ion-col ion-icon {\n  color: var(--white);\n  display: block;\n  margin: 0 auto;\n  font-size: 1.55rem;\n  text-align: center;\n}\nion-header .order_steps ion-row ion-col h3 {\n  display: flex;\n  align-items: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 auto;\n}\nion-header .order_steps ion-row ion-col h3 ion-icon {\n  font-size: 0.4rem;\n  margin: 0 2px;\n  height: 10px;\n  line-height: 10px;\n}\nion-header .order_steps ion-row ion-col.active {\n  opacity: 1;\n}\nion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 0;\n  padding-top: 30px;\n}\nion-list h2 {\n  margin: 0;\n  color: var(--text-light);\n  text-transform: uppercase;\n  font-size: 1rem;\n  letter-spacing: 1px;\n  padding: 0 19px;\n  padding-bottom: 10px;\n}\nion-list ion-item {\n  padding: 13px 19px;\n  min-height: unset !important;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  background: var(--white);\n  margin-bottom: 8px;\n  --background:var(--transparent) !important;\n  --background-activated:var(--transparent) !important;\n  --background-activated-opacity:1;\n  --background-hover:var(--transparent) !important;\n  --ripple-color:var(--transparent) !important;\n}\nion-list ion-item .item_inner {\n  align-items: flex-start;\n}\nion-list ion-item .item_inner ion-radio {\n  --color-checked: var(--primary-dark);\n  margin: 0;\n  margin-right: 22px;\n  min-width: 20px;\n  min-height: 20px;\n  margin-top: 4px;\n}\nion-list ion-item .item_inner .text_box {\n  width: 100%;\n}\nion-list ion-item .item_inner .text_box h3 {\n  margin: 0;\n  font-weight: 600;\n  letter-spacing: 0;\n  font-size: 1.2rem;\n  color: var(--text-black);\n  padding-bottom: 10px;\n}\nion-list ion-item .item_inner .text_box p {\n  margin: 0;\n  color: var(--text-dark-primary);\n  line-height: 23px;\n  letter-spacing: 0.5px;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWF6d2FubWFyenVraS9Eb2N1bWVudHMvTW9iaWxlIEFwcC9lLWNvbW1lcmNlL2N1c3RvbWVyL3NyYy9hcHAvc2VsZWN0LWFkZHJlc3Mvc2VsZWN0LWFkZHJlc3MucGFnZS5zY3NzIiwic3JjL2FwcC9zZWxlY3QtYWRkcmVzcy9zZWxlY3QtYWRkcmVzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSw2QkFBQTtFQUNDLHNCQUFBO0VBQ0EsNEJBQUE7QUNDRDtBREVFO0VBQ0MsZ0NBQUE7QUNBSDtBREdFO0VBQ0MsbUJBQUE7QUNESDtBREtDO0VBQ0MsNEJBQUE7QUNIRjtBREtFO0VBQ0MsbUJBQUE7QUNISDtBREtHO0VBQ0MseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNISjtBREtJO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNITDtBRE1JO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsY0FBQTtBQ0pMO0FET0s7RUFDQyxpQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNMTjtBRFNJO0VBQ0MsVUFBQTtBQ1BMO0FEZ0JBO0VBQ0MseUNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDYkQ7QURlQztFQUNDLFNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDYkY7QURnQkM7RUFDQyxrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdURBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxvREFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0RBQUE7RUFDQSw0Q0FBQTtBQ2RGO0FEZ0JFO0VBQ0MsdUJBQUE7QUNkSDtBRGdCRztFQUNDLG9DQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ2RKO0FEaUJHO0VBQ0MsV0FBQTtBQ2ZKO0FEaUJJO0VBQ0MsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7QUNmTDtBRGtCSTtFQUNDLFNBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDaEJMIiwiZmlsZSI6InNyYy9hcHAvc2VsZWN0LWFkZHJlc3Mvc2VsZWN0LWFkZHJlc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG5iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXIucG5nKTtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuXHRpb24tdG9vbGJhciB7XG5cdFx0aW9uLWJ1dHRvbnMgaW9uLWJhY2stYnV0dG9uIHtcblx0XHRcdC0tY29sb3I6IHZhcigtLXdoaXRlKSAhaW1wb3J0YW50O1xuXHRcdH1cblxuXHRcdGlvbi10aXRsZSB7XG5cdFx0XHRjb2xvcjogdmFyKC0td2hpdGUpO1xuXHRcdH1cblx0fVxuXG5cdC5vcmRlcl9zdGVwcyB7XG5cdFx0cGFkZGluZzogMjRweCAyMHB4IDIwcHggMjBweDtcblxuXHRcdGlvbi1yb3cge1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRcdFx0aW9uLWNvbCB7XG5cdFx0XHRcdG1heC13aWR0aDogMjAlICFpbXBvcnRhbnQ7XG5cdFx0XHRcdG1pbi13aWR0aDogMjAlICFpbXBvcnRhbnQ7XG5cdFx0XHRcdG9wYWNpdHk6IC40O1xuXG5cdFx0XHRcdGlvbi1pY29uIHtcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0td2hpdGUpO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMS41NXJlbTtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRoMyB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdHdpZHRoOiBmaXQtY29udGVudDtcblx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblxuXG5cdFx0XHRcdFx0aW9uLWljb24ge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAwLjRyZW07XG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgMnB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMHB4O1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ji5hY3RpdmUge1xuXHRcdFx0XHRcdG9wYWNpdHk6IDE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuXG5cbmlvbi1saXN0IHtcblx0YmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0cGFkZGluZy10b3A6IDMwcHg7XG5cblx0aDIge1xuXHRcdG1hcmdpbjogMDtcblx0XHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRmb250LXNpemU6IDFyZW07XG5cdFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcblx0XHRwYWRkaW5nOiAwIDE5cHg7XG5cdFx0cGFkZGluZy1ib3R0b206IDEwcHg7XG5cdH1cblxuXHRpb24taXRlbSB7XG5cdFx0cGFkZGluZzogMTNweCAxOXB4O1xuXHRcdG1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG5cdFx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuXHRcdC0taW5uZXItbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcblx0XHQtLXBhZGRpbmctc3RhcnQ6IDA7XG5cdFx0LS1oaWdobGlnaC1jb2xvci1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcblx0XHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG5cdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xuXHRcdC0tYmFja2dyb3VuZDp2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcblx0XHQtLWJhY2tncm91bmQtYWN0aXZhdGVkOnZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xuXHRcdC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eToxO1xuXHRcdC0tYmFja2dyb3VuZC1ob3Zlcjp2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDsgXG5cdFx0LS1yaXBwbGUtY29sb3I6dmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7IFxuXG5cdFx0Lml0ZW1faW5uZXIge1xuXHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cblx0XHRcdGlvbi1yYWRpbyB7XG5cdFx0XHRcdC0tY29sb3ItY2hlY2tlZDogdmFyKC0tcHJpbWFyeS1kYXJrKTtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDIycHg7XG5cdFx0XHRcdG1pbi13aWR0aDogMjBweDtcblx0XHRcdFx0bWluLWhlaWdodDogMjBweDtcblx0XHRcdFx0bWFyZ2luLXRvcDogNHB4O1xuXHRcdFx0fVxuXG5cdFx0XHQudGV4dF9ib3gge1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblxuXHRcdFx0XHRoMyB7XG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDA7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxLjJyZW07XG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuXHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWRhcmstcHJpbWFyeSk7XG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDIzcHg7XG5cdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IC41cHg7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxcmVtO1xuXHRcdFx0XHR9XG5cblx0XHRcdH1cblx0XHR9XG5cdH1cbn0iLCJpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1iYWNrLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHZhcigtLXdoaXRlKSAhaW1wb3J0YW50O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuaW9uLWhlYWRlciAub3JkZXJfc3RlcHMge1xuICBwYWRkaW5nOiAyNHB4IDIwcHggMjBweCAyMHB4O1xufVxuaW9uLWhlYWRlciAub3JkZXJfc3RlcHMgaW9uLXJvdyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24taGVhZGVyIC5vcmRlcl9zdGVwcyBpb24tcm93IGlvbi1jb2wge1xuICBtYXgtd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDIwJSAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjQ7XG59XG5pb24taGVhZGVyIC5vcmRlcl9zdGVwcyBpb24tcm93IGlvbi1jb2wgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtc2l6ZTogMS41NXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWhlYWRlciAub3JkZXJfc3RlcHMgaW9uLXJvdyBpb24tY29sIGgzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbmlvbi1oZWFkZXIgLm9yZGVyX3N0ZXBzIGlvbi1yb3cgaW9uLWNvbCBoMyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMC40cmVtO1xuICBtYXJnaW46IDAgMnB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xufVxuaW9uLWhlYWRlciAub3JkZXJfc3RlcHMgaW9uLXJvdyBpb24tY29sLmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5pb24tbGlzdCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHBhZGRpbmc6IDAgMTlweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5pb24tbGlzdCBpb24taXRlbSB7XG4gIHBhZGRpbmc6IDEzcHggMTlweDtcbiAgbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1oaWdobGlnaC1jb2xvci1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIC0tYmFja2dyb3VuZDp2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDp2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OjE7XG4gIC0tYmFja2dyb3VuZC1ob3Zlcjp2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcbiAgLS1yaXBwbGUtY29sb3I6dmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgaW9uLXJhZGlvIHtcbiAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1yaWdodDogMjJweDtcbiAgbWluLXdpZHRoOiAyMHB4O1xuICBtaW4taGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3gge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIC50ZXh0X2JveCBoMyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnRleHRfYm94IHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmstcHJpbWFyeSk7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/select-address/select-address.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/select-address/select-address.page.ts ***!
  \*******************************************************/
/*! exports provided: SelectAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectAddressPage", function() { return SelectAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let SelectAddressPage = class SelectAddressPage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    payment_mode() {
        this.route.navigate(['./payment-mode']);
    }
};
SelectAddressPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SelectAddressPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-address',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./select-address.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/select-address/select-address.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./select-address.page.scss */ "./src/app/select-address/select-address.page.scss")).default]
    })
], SelectAddressPage);



/***/ })

}]);
//# sourceMappingURL=select-address-select-address-module-es2015.js.map