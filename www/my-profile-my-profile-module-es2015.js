(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-profile-my-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-profile/my-profile.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-profile/my-profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button></ion-menu-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t{{'my_account' | translate}}\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg_color\">\n\t<ion-card>\n\t\t<div class=\"form\">\n\t\t\t<h2>{{'my_profile' | translate}}</h2>\n\t\t\t<ion-list lines=\"none\">\n\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-label mode=\"md\" position=\"stacked\">{{\"full_name\" | translate}}</ion-label>\n\t\t\t\t\t<ion-input mode=\"md\" type=\"name\" value=\"Samantha Smith\" readonly=\"true\"></ion-input>\n\t\t\t\t</ion-item>\n\n\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-label mode=\"md\" position=\"stacked\">{{\"email_address\" | translate}}</ion-label>\n\t\t\t\t\t<ion-input mode=\"md\" type=\"email\" value=\"samanthasmith@mail.com\" readonly=\"true\"></ion-input>\n\t\t\t\t</ion-item>\n\n\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-label mode=\"md\" position=\"stacked\">{{\"phone_number\" | translate}}</ion-label>\n\t\t\t\t\t<ion-input mode=\"md\" type=\"text\" value=\"+1 987 654 3210\" readonly=\"true\"></ion-input>\n\t\t\t\t</ion-item>\n\n\t\t\t</ion-list>\n\t\t</div>\n\t</ion-card>\n\t<ion-card class=\"my_addresses\">\n\t\t<div class=\"form\">\n\t\t\t<h2>{{'my_addresses' | translate}}</h2>\n\t\t\t<ion-list lines=\"none\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<div class=\"item_inner\"> \n\t\t\t\t\t\t<div class=\"text_box\">\n\t\t\t\t\t\t\t<h3 class=\"d-flex\">Home <ion-icon class=\"zmdi zmdi-edit ion-text-end end\"></ion-icon></h3>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t1124, Patestine Street, Jackson Tower, Near City Garden, New York, USA\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<div class=\"item_inner\"> \n\t\t\t\t\t\t<div class=\"text_box\">\n\t\t\t\t\t\t\t<h3 class=\"d-flex\">Office <ion-icon class=\"zmdi zmdi-edit ion-text-end end\"></ion-icon></h3>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t1124, Patestine Street, Jackson Tower, Near City Garden, New York, USA\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<div class=\"item_inner\"> \n\t\t\t\t\t\t<div class=\"text_box\">\n\t\t\t\t\t\t\t<h3 class=\"d-flex\">Other <ion-icon class=\"zmdi zmdi-edit ion-text-end end\"></ion-icon></h3>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t1124, Patestine Street, Jackson Tower, Near City Garden, New York, USA\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-item>\n\t\t\t</ion-list>\n\t\t</div>\n\t</ion-card>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n\t<ion-button size=\"large\" shape=\"full\" class=\"btn\" (click)=\"add_address()\"> {{'add_address' | translate}} </ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/my-profile/my-profile-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/my-profile/my-profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: MyProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfilePageRoutingModule", function() { return MyProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _my_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-profile.page */ "./src/app/my-profile/my-profile.page.ts");




const routes = [
    {
        path: '',
        component: _my_profile_page__WEBPACK_IMPORTED_MODULE_3__["MyProfilePage"]
    }
];
let MyProfilePageRoutingModule = class MyProfilePageRoutingModule {
};
MyProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/my-profile/my-profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/my-profile/my-profile.module.ts ***!
  \*************************************************/
/*! exports provided: MyProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfilePageModule", function() { return MyProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-profile-routing.module */ "./src/app/my-profile/my-profile-routing.module.ts");
/* harmony import */ var _my_profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-profile.page */ "./src/app/my-profile/my-profile.page.ts");








let MyProfilePageModule = class MyProfilePageModule {
};
MyProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_6__["MyProfilePageRoutingModule"]
        ],
        declarations: [_my_profile_page__WEBPACK_IMPORTED_MODULE_7__["MyProfilePage"]]
    })
], MyProfilePageModule);



/***/ }),

/***/ "./src/app/my-profile/my-profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/my-profile/my-profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  box-shadow: none;\n  width: 100%;\n  border-radius: 0;\n  margin: 0;\n  background: var(--white);\n  margin-bottom: 10px;\n}\nion-card .form {\n  padding: 29px 0 20px 0px;\n}\nion-card .form h2 {\n  margin: 0;\n  color: var(--text-light);\n  text-transform: uppercase;\n  font-size: 1rem;\n  letter-spacing: 1px;\n  padding-bottom: 10px;\n}\nion-card .form ion-list ion-item {\n  margin-bottom: 16px;\n}\nion-card .form ion-list ion-item ion-label {\n  font-weight: 400;\n  font-size: 1.35rem !important;\n  margin-bottom: 16px !important;\n}\nion-card .form ion-list ion-item ion-input {\n  font-weight: 500 !important;\n  letter-spacing: 0;\n}\nion-card.my_addresses .form h2 {\n  padding-bottom: 22px !important;\n}\nion-card.my_addresses .form ion-list ion-item {\n  border-bottom: none !important;\n}\nion-card.my_addresses .form ion-list ion-item .item_inner {\n  width: 100%;\n}\nion-card.my_addresses .form ion-list ion-item .item_inner .text_box {\n  width: 100%;\n}\nion-card.my_addresses .form ion-list ion-item .item_inner .text_box h3 {\n  margin: 0;\n  font-weight: 600;\n  letter-spacing: 0;\n  font-size: 1.2rem;\n  color: var(--text-black);\n  padding-bottom: 10px;\n}\nion-card.my_addresses .form ion-list ion-item .item_inner .text_box h3 ion-icon {\n  color: var(--text-dark-primary);\n  height: 23px;\n  line-height: normal;\n  font-size: 1.25rem;\n}\nion-card.my_addresses .form ion-list ion-item .item_inner .text_box p {\n  margin: 0;\n  color: var(--text-black);\n  line-height: 23px;\n  letter-spacing: 0.5px;\n  font-size: 1rem;\n  width: calc(100% - 30px);\n}\nion-card:last-child {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWF6d2FubWFyenVraS9Eb2N1bWVudHMvTW9iaWxlIEFwcC9lLWNvbW1lcmNlL2N1c3RvbWVyL3NyYy9hcHAvbXktcHJvZmlsZS9teS1wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbXktcHJvZmlsZS9teS1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUNDRDtBRENDO0VBQ0Msd0JBQUE7QUNDRjtBRENFO0VBQ0MsU0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ0NIO0FER0c7RUFDQyxtQkFBQTtBQ0RKO0FER0k7RUFDQyxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUNETDtBRElJO0VBQ0MsMkJBQUE7RUFDQSxpQkFBQTtBQ0ZMO0FEV0c7RUFDQywrQkFBQTtBQ1RKO0FEYUk7RUFDQyw4QkFBQTtBQ1hMO0FEYUs7RUFDQyxXQUFBO0FDWE47QURhTTtFQUNDLFdBQUE7QUNYUDtBRGFPO0VBQ0MsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7QUNYUjtBRGFRO0VBQ0MsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1hUO0FEZU87RUFDQyxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FDYlI7QUR1QkM7RUFDQyxnQkFBQTtBQ3JCRiIsImZpbGUiOiJzcmMvYXBwL215LXByb2ZpbGUvbXktcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG5cdGJveC1zaGFkb3c6IG5vbmU7XG5cdHdpZHRoOiAxMDAlO1xuXHRib3JkZXItcmFkaXVzOiAwO1xuXHRtYXJnaW46IDA7XG5cdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcblxuXHQuZm9ybSB7XG5cdFx0cGFkZGluZzogMjlweCAwIDIwcHggMHB4O1xuXG5cdFx0aDIge1xuXHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuXHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdGZvbnQtc2l6ZTogMXJlbTtcblx0XHRcdGxldHRlci1zcGFjaW5nOiAxcHg7XG5cdFx0XHRwYWRkaW5nLWJvdHRvbTogMTBweDtcblx0XHR9XG5cblx0XHRpb24tbGlzdCB7XG5cdFx0XHRpb24taXRlbSB7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDE2cHg7XG5cblx0XHRcdFx0aW9uLWxhYmVsIHtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4zNXJlbSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDE2cHggIWltcG9ydGFudDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlvbi1pbnB1dCB7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHQmLm15X2FkZHJlc3NlcyB7XG5cdFx0LmZvcm0ge1xuXHRcdFx0aDIge1xuXHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMjJweCAhaW1wb3J0YW50O1xuXHRcdFx0fVxuXG5cdFx0XHRpb24tbGlzdCB7XG5cdFx0XHRcdGlvbi1pdGVtIHtcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG5cblx0XHRcdFx0XHQuaXRlbV9pbm5lciB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblxuXHRcdFx0XHRcdFx0LnRleHRfYm94IHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cblx0XHRcdFx0XHRcdFx0aDMge1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwO1xuXHRcdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4ycmVtO1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMTBweDtcblxuXHRcdFx0XHRcdFx0XHRcdGlvbi1pY29uIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWRhcmstcHJpbWFyeSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDIzcHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogbm9ybWFsO1xuXHRcdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjI1cmVtO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHAge1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XG5cdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDIzcHg7XG5cdFx0XHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IC41cHg7XG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxcmVtO1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0JjpsYXN0LWNoaWxkIHtcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xuXHR9XG59IiwiaW9uLWNhcmQge1xuICBib3gtc2hhZG93OiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5pb24tY2FyZCAuZm9ybSB7XG4gIHBhZGRpbmc6IDI5cHggMCAyMHB4IDBweDtcbn1cbmlvbi1jYXJkIC5mb3JtIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5pb24tY2FyZCAuZm9ybSBpb24tbGlzdCBpb24taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5pb24tY2FyZCAuZm9ybSBpb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEuMzVyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweCAhaW1wb3J0YW50O1xufVxuaW9uLWNhcmQgLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWlucHV0IHtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cbmlvbi1jYXJkLm15X2FkZHJlc3NlcyAuZm9ybSBoMiB7XG4gIHBhZGRpbmctYm90dG9tOiAyMnB4ICFpbXBvcnRhbnQ7XG59XG5pb24tY2FyZC5teV9hZGRyZXNzZXMgLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG5pb24tY2FyZC5teV9hZGRyZXNzZXMgLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW1faW5uZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1jYXJkLm15X2FkZHJlc3NlcyAuZm9ybSBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3gge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1jYXJkLm15X2FkZHJlc3NlcyAuZm9ybSBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggaDMge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbmlvbi1jYXJkLm15X2FkZHJlc3NlcyAuZm9ybSBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggaDMgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrLXByaW1hcnkpO1xuICBoZWlnaHQ6IDIzcHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cbmlvbi1jYXJkLm15X2FkZHJlc3NlcyAuZm9ybSBpb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciAudGV4dF9ib3ggcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbn1cbmlvbi1jYXJkOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/my-profile/my-profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/my-profile/my-profile.page.ts ***!
  \***********************************************/
/*! exports provided: MyProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfilePage", function() { return MyProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let MyProfilePage = class MyProfilePage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    add_address() {
        this.route.navigate(['./add-address']);
    }
};
MyProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MyProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-profile/my-profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my-profile.page.scss */ "./src/app/my-profile/my-profile.page.scss")).default]
    })
], MyProfilePage);



/***/ })

}]);
//# sourceMappingURL=my-profile-my-profile-module-es2015.js.map