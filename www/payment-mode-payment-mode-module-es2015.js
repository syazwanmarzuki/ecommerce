(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-mode-payment-mode-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment-mode/payment-mode.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment-mode/payment-mode.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"bg_transparent\">\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t{{'payment_mode' | translate}}\n\t\t</ion-title>\n\t</ion-toolbar>\n\t<div class=\"order_steps\">\n\t\t<ion-row>\n\t\t\t<ion-col class=\"active\">\n\t\t\t\t<ion-icon class=\"zmdi zmdi-pin\"></ion-icon>\n\t\t\t</ion-col>\n\t\t\t<ion-col class=\"active\">\n\t\t\t\t<h3>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t</h3>\n\t\t\t</ion-col>\n\t\t\t<ion-col class=\"active\">\n\t\t\t\t<ion-icon class=\"zmdi zmdi-card\"></ion-icon>\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t\t<h3>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t\t<ion-icon class=\"zmdi zmdi-circle\"></ion-icon>\n\t\t\t\t</h3>\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t\t<ion-icon class=\"zmdi zmdi-assignment-check\"></ion-icon>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</div>\n</ion-header>\n\n\n<ion-content fullscreen>\n\t<ion-list lines=\"none\">\n\t\t<ion-item>\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h2>{{'cards' | translate}}</h2>\n\t\t\t\t<div class=\"payment_option d-flex\" (click)=\"pay()\">\n\t\t\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/ic_card.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<h3>Credit Card</h3>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"payment_option d-flex\" (click)=\"pay()\">\n\t\t\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/ic_card.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<h3>Debit Card</h3>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ion-item>\n\n\n\t\t<ion-item>\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h2>{{'cash' | translate}}</h2>\n\t\t\t\t<div class=\"payment_option d-flex\" (click)=\"pay()\">\n\t\t\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/cod.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<h3>Cash on Delivery</h3>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ion-item>\n\n\t\t<ion-item>\n\t\t\t<div class=\"item_inner\">\n\t\t\t\t<h2>{{'other_methods' | translate}}</h2>\n\t\t\t\t<div class=\"payment_option d-flex\" (click)=\"pay()\">\n\t\t\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/paypal.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<h3>PayPal</h3>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"payment_option d-flex\" (click)=\"pay()\">\n\t\t\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/PayU.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<h3>PayU Money</h3>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"payment_option d-flex\" (click)=\"pay()\">\n\t\t\t\t\t<div class=\"img_box center_img\">\n\t\t\t\t\t\t<img src=\"assets/images/stripe.png\" class=\"crop_img\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<h3>Stripe</h3>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ion-item>\n\t</ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/payment-mode/payment-mode-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/payment-mode/payment-mode-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: PaymentModePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModePageRoutingModule", function() { return PaymentModePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _payment_mode_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-mode.page */ "./src/app/payment-mode/payment-mode.page.ts");




const routes = [
    {
        path: '',
        component: _payment_mode_page__WEBPACK_IMPORTED_MODULE_3__["PaymentModePage"]
    }
];
let PaymentModePageRoutingModule = class PaymentModePageRoutingModule {
};
PaymentModePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentModePageRoutingModule);



/***/ }),

/***/ "./src/app/payment-mode/payment-mode.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/payment-mode/payment-mode.module.ts ***!
  \*****************************************************/
/*! exports provided: PaymentModePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModePageModule", function() { return PaymentModePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _payment_mode_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-mode-routing.module */ "./src/app/payment-mode/payment-mode-routing.module.ts");
/* harmony import */ var _payment_mode_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./payment-mode.page */ "./src/app/payment-mode/payment-mode.page.ts");








let PaymentModePageModule = class PaymentModePageModule {
};
PaymentModePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _payment_mode_routing_module__WEBPACK_IMPORTED_MODULE_6__["PaymentModePageRoutingModule"]
        ],
        declarations: [_payment_mode_page__WEBPACK_IMPORTED_MODULE_7__["PaymentModePage"]]
    })
], PaymentModePageModule);



/***/ }),

/***/ "./src/app/payment-mode/payment-mode.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/payment-mode/payment-mode.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  background: url('header.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n}\nion-header ion-toolbar ion-buttons ion-back-button {\n  --color: var(--white) !important;\n}\nion-header ion-toolbar ion-title {\n  color: var(--white);\n}\nion-header .order_steps {\n  padding: 24px 20px 20px 20px;\n}\nion-header .order_steps ion-row {\n  align-items: center;\n}\nion-header .order_steps ion-row ion-col {\n  max-width: 20% !important;\n  min-width: 20% !important;\n  opacity: 0.4;\n}\nion-header .order_steps ion-row ion-col ion-icon {\n  color: var(--white);\n  display: block;\n  margin: 0 auto;\n  font-size: 1.55rem;\n  text-align: center;\n}\nion-header .order_steps ion-row ion-col h3 {\n  display: flex;\n  align-items: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 auto;\n}\nion-header .order_steps ion-row ion-col h3 ion-icon {\n  font-size: 0.4rem;\n  margin: 0 2px;\n  height: 10px;\n  line-height: 10px;\n}\nion-header .order_steps ion-row ion-col.active {\n  opacity: 1;\n}\nion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 0;\n  padding-top: 20px;\n}\nion-list h2 {\n  margin: 0;\n  color: var(--text-light);\n  text-transform: uppercase;\n  font-size: 1.1rem;\n  letter-spacing: 1px;\n  padding-bottom: 17px;\n}\nion-list ion-item {\n  padding: 13px 19px 19px 19px;\n  min-height: unset !important;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  background: var(--white);\n  margin-bottom: 8px;\n  border-bottom: 1px solid rgba(204, 204, 204, 0.6) !important;\n}\nion-list ion-item .item_inner {\n  width: 100%;\n}\nion-list ion-item .item_inner .payment_option {\n  padding: 9px 0;\n}\nion-list ion-item .item_inner .payment_option .img_box {\n  min-width: 42px;\n  height: 42px;\n  margin-right: 17px;\n}\nion-list ion-item .item_inner .payment_option h3 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\nion-list ion-item:last-child {\n  border-bottom: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWF6d2FubWFyenVraS9Eb2N1bWVudHMvTW9iaWxlIEFwcC9lLWNvbW1lcmNlL2N1c3RvbWVyL3NyYy9hcHAvcGF5bWVudC1tb2RlL3BheW1lbnQtbW9kZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BheW1lbnQtbW9kZS9wYXltZW50LW1vZGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FDQ0Q7QURFRTtFQUNDLGdDQUFBO0FDQUg7QURHRTtFQUNDLG1CQUFBO0FDREg7QURLQztFQUNDLDRCQUFBO0FDSEY7QURLRTtFQUNDLG1CQUFBO0FDSEg7QURLRztFQUNDLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDSEo7QURLSTtFQUNDLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSEw7QURNSTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGNBQUE7QUNKTDtBRE9LO0VBQ0MsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDTE47QURTSTtFQUNDLFVBQUE7QUNQTDtBRGNBO0VBQ0MseUNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDWEQ7QURhQztFQUNDLFNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDWEY7QURjQztFQUNDLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0REFBQTtBQ1pGO0FEY0U7RUFDQyxXQUFBO0FDWkg7QURjRztFQUNDLGNBQUE7QUNaSjtBRGNJO0VBQ0MsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1pMO0FEZUk7RUFDQyxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ2JMO0FEb0JFO0VBQ0MsOEJBQUE7QUNsQkgiLCJmaWxlIjoic3JjL2FwcC9wYXltZW50LW1vZGUvcGF5bWVudC1tb2RlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuXHRiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXIucG5nKTtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuXHRpb24tdG9vbGJhciB7XG5cdFx0aW9uLWJ1dHRvbnMgaW9uLWJhY2stYnV0dG9uIHtcblx0XHRcdC0tY29sb3I6IHZhcigtLXdoaXRlKSAhaW1wb3J0YW50O1xuXHRcdH1cblxuXHRcdGlvbi10aXRsZSB7XG5cdFx0XHRjb2xvcjogdmFyKC0td2hpdGUpO1xuXHRcdH1cblx0fVxuXG5cdC5vcmRlcl9zdGVwcyB7XG5cdFx0cGFkZGluZzogMjRweCAyMHB4IDIwcHggMjBweDtcblxuXHRcdGlvbi1yb3cge1xuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRcdFx0aW9uLWNvbCB7XG5cdFx0XHRcdG1heC13aWR0aDogMjAlICFpbXBvcnRhbnQ7XG5cdFx0XHRcdG1pbi13aWR0aDogMjAlICFpbXBvcnRhbnQ7XG5cdFx0XHRcdG9wYWNpdHk6IC40O1xuXG5cdFx0XHRcdGlvbi1pY29uIHtcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0td2hpdGUpO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMS41NXJlbTtcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRoMyB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdHdpZHRoOiBmaXQtY29udGVudDtcblx0XHRcdFx0XHRtYXJnaW46IDAgYXV0bztcblxuXG5cdFx0XHRcdFx0aW9uLWljb24ge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAwLjRyZW07XG5cdFx0XHRcdFx0XHRtYXJnaW46IDAgMnB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMHB4O1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ji5hY3RpdmUge1xuXHRcdFx0XHRcdG9wYWNpdHk6IDE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuaW9uLWxpc3Qge1xuXHRiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRwYWRkaW5nLXRvcDogMjBweDtcblxuXHRoMiB7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdGZvbnQtc2l6ZTogMS4xcmVtO1xuXHRcdGxldHRlci1zcGFjaW5nOiAxcHg7XG5cdFx0cGFkZGluZy1ib3R0b206IDE3cHg7XG5cdH1cblxuXHRpb24taXRlbSB7XG5cdFx0cGFkZGluZzogMTNweCAxOXB4IDE5cHggMTlweDtcblx0XHRtaW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuXHRcdC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcblx0XHQtLWlubmVyLW1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG5cdFx0LS1wYWRkaW5nLXN0YXJ0OiAwO1xuXHRcdC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG5cdFx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xuXHRcdG1hcmdpbi1ib3R0b206IDhweDtcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjYpICFpbXBvcnRhbnQ7XG5cblx0XHQuaXRlbV9pbm5lciB7XG5cdFx0XHR3aWR0aDogMTAwJTtcblxuXHRcdFx0LnBheW1lbnRfb3B0aW9uIHtcblx0XHRcdFx0cGFkZGluZzogOXB4IDA7XG5cblx0XHRcdFx0LmltZ19ib3gge1xuXHRcdFx0XHRcdG1pbi13aWR0aDogNDJweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDQycHg7XG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxN3B4O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aDMge1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRmb250LXNpemU6IDEuMnJlbTtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblxuXHRcdH1cblxuXHRcdCY6bGFzdC1jaGlsZCB7XG5cdFx0XHRib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG5cblx0XHR9XG5cdH1cbn0iLCJpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1iYWNrLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHZhcigtLXdoaXRlKSAhaW1wb3J0YW50O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuaW9uLWhlYWRlciAub3JkZXJfc3RlcHMge1xuICBwYWRkaW5nOiAyNHB4IDIwcHggMjBweCAyMHB4O1xufVxuaW9uLWhlYWRlciAub3JkZXJfc3RlcHMgaW9uLXJvdyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24taGVhZGVyIC5vcmRlcl9zdGVwcyBpb24tcm93IGlvbi1jb2wge1xuICBtYXgtd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDIwJSAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjQ7XG59XG5pb24taGVhZGVyIC5vcmRlcl9zdGVwcyBpb24tcm93IGlvbi1jb2wgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtc2l6ZTogMS41NXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWhlYWRlciAub3JkZXJfc3RlcHMgaW9uLXJvdyBpb24tY29sIGgzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbmlvbi1oZWFkZXIgLm9yZGVyX3N0ZXBzIGlvbi1yb3cgaW9uLWNvbCBoMyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMC40cmVtO1xuICBtYXJnaW46IDAgMnB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xufVxuaW9uLWhlYWRlciAub3JkZXJfc3RlcHMgaW9uLXJvdyBpb24tY29sLmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5pb24tbGlzdCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgcGFkZGluZy1ib3R0b206IDE3cHg7XG59XG5pb24tbGlzdCBpb24taXRlbSB7XG4gIHBhZGRpbmc6IDEzcHggMTlweCAxOXB4IDE5cHg7XG4gIG1pbi1oZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjYpICFpbXBvcnRhbnQ7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnBheW1lbnRfb3B0aW9uIHtcbiAgcGFkZGluZzogOXB4IDA7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAucGF5bWVudF9vcHRpb24gLmltZ19ib3gge1xuICBtaW4td2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAxN3B4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIgLnBheW1lbnRfb3B0aW9uIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/payment-mode/payment-mode.page.ts":
/*!***************************************************!*\
  !*** ./src/app/payment-mode/payment-mode.page.ts ***!
  \***************************************************/
/*! exports provided: PaymentModePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModePage", function() { return PaymentModePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let PaymentModePage = class PaymentModePage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    pay() {
        this.navCtrl.navigateRoot(['./order-confirm']);
    }
};
PaymentModePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
PaymentModePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment-mode',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./payment-mode.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment-mode/payment-mode.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./payment-mode.page.scss */ "./src/app/payment-mode/payment-mode.page.scss")).default]
    })
], PaymentModePage);



/***/ })

}]);
//# sourceMappingURL=payment-mode-payment-mode-module-es2015.js.map