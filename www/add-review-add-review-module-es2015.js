(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-review-add-review-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-review/add-review.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-review/add-review.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"bg_transparent\">\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t{{'add_review' | translate}}\n\t\t</ion-title>\n\t</ion-toolbar>\n\t<div class=\"banner\">\n\t\t<div class=\"img_box center_img\">\n\t\t\t<img src=\"assets/images/item_4.png\" class=\"crop_img\">\n\t\t</div>\n\t\t<div class=\"text_box ion-text-center\">\n\t\t\t<h2>Black Cotton Top</h2>\n\t\t\t<h3>Operum England</h3>\n\t\t</div>\n\t</div>\n</ion-header>\n\n<ion-content fullscreen>\n\t<div class=\"give_rating ion-text-center\">\n\t\t<h2>{{'how_was_your_experience' | translate}}?</h2>\n\t\t<div class=\"icon_box\">\n\n\t\t\t<span [ngClass]=\"ratingIcon1 ? 'icon_box active' : 'icon_box'\" (click)=\"toggleRatingIcon1()\"> \n\t\t\t\t<ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t</span>\n\t\t\t<span [ngClass]=\"ratingIcon2 ? 'icon_box active' : 'icon_box'\" (click)=\"toggleRatingIcon2()\"> \n\t\t\t\t<ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t</span>\n\t\t\t<span [ngClass]=\"ratingIcon3 ? 'icon_box active' : 'icon_box'\" (click)=\"toggleRatingIcon3()\"> \n\t\t\t\t<ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t</span>\n\t\t\t<span [ngClass]=\"ratingIcon4 ? 'icon_box active' : 'icon_box'\" (click)=\"toggleRatingIcon4()\"> \n\t\t\t\t<ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t</span>\n\t\t\t<span [ngClass]=\"ratingIcon5 ? 'icon_box active' : 'icon_box'\" (click)=\"toggleRatingIcon5()\"> \n\t\t\t\t<ion-icon class=\"zmdi zmdi-star\"></ion-icon>\n\t\t\t</span>\n\t\t</div>\n\t</div>\n\n\t<div class=\"form\">\n\t\t<ion-list lines=\"none\">\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-label mode=\"md\" position=\"stacked\">{{\"write_your_feedback\" | translate}}</ion-label>\n\t\t\t\t<ion-textarea rows=\"1\" mode=\"md\" type=\"text\" placeholder=\"{{'enter_your_review' | translate}}\"></ion-textarea>\n\t\t\t</ion-item>\n\t\t</ion-list>\n\t</div>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n\t<ion-button size=\"large\" shape=\"full\" class=\"btn\" (click)=\"presentToast()\"> {{'submit' | translate}} </ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/add-review/add-review-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/add-review/add-review-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AddReviewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReviewPageRoutingModule", function() { return AddReviewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_review_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-review.page */ "./src/app/add-review/add-review.page.ts");




const routes = [
    {
        path: '',
        component: _add_review_page__WEBPACK_IMPORTED_MODULE_3__["AddReviewPage"]
    }
];
let AddReviewPageRoutingModule = class AddReviewPageRoutingModule {
};
AddReviewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddReviewPageRoutingModule);



/***/ }),

/***/ "./src/app/add-review/add-review.module.ts":
/*!*************************************************!*\
  !*** ./src/app/add-review/add-review.module.ts ***!
  \*************************************************/
/*! exports provided: AddReviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReviewPageModule", function() { return AddReviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_review_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-review-routing.module */ "./src/app/add-review/add-review-routing.module.ts");
/* harmony import */ var _add_review_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-review.page */ "./src/app/add-review/add-review.page.ts");








let AddReviewPageModule = class AddReviewPageModule {
};
AddReviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _add_review_routing_module__WEBPACK_IMPORTED_MODULE_6__["AddReviewPageRoutingModule"]
        ],
        declarations: [_add_review_page__WEBPACK_IMPORTED_MODULE_7__["AddReviewPage"]]
    })
], AddReviewPageModule);



/***/ }),

/***/ "./src/app/add-review/add-review.page.scss":
/*!*************************************************!*\
  !*** ./src/app/add-review/add-review.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  padding-top: 20px;\n}\nion-header::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 120px);\n  background: url('header.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  display: block;\n}\nion-header ion-toolbar ion-buttons ion-back-button {\n  --color: var(--white) !important;\n}\nion-header ion-toolbar ion-title {\n  color: var(--white);\n}\nion-header .banner {\n  position: relative;\n  z-index: 99;\n  padding: 0 20px;\n  padding-top: 22px;\n}\nion-header .banner .img_box {\n  width: 115px;\n  height: 115px;\n  border-radius: 10px;\n  margin: 0 auto;\n}\nion-header .banner .text_box {\n  padding-top: 15px;\n}\nion-header .banner .text_box h2 {\n  margin: 0;\n  color: var(--text-dark-secondary);\n  font-size: 1.15rem;\n  padding-bottom: 9px;\n}\nion-header .banner .text_box h3 {\n  margin: 0;\n  color: var(--text-light);\n  font-weight: 400;\n  font-size: 0.9rem;\n  letter-spacing: 0.5px;\n}\n.give_rating {\n  border-bottom: 5px solid var(--bg-color);\n  padding-top: 39px;\n  padding-bottom: 20px;\n}\n.give_rating h2 {\n  margin: 0;\n  color: var(--text-light);\n  text-transform: uppercase;\n  font-size: 1rem;\n  letter-spacing: 1px;\n  font-weight: 500;\n  padding-bottom: 17px;\n}\n.give_rating .icon_box {\n  display: flex;\n  align-items: center;\n  margin: auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.give_rating .icon_box .icon_box ion-icon {\n  color: #E0E0DD;\n  font-size: 2.2rem;\n}\n.give_rating .icon_box .icon_box.active ion-icon {\n  color: var(--yelow_color);\n}\n.form {\n  padding-top: 26px;\n}\n.form ion-list ion-item {\n  margin-bottom: 16px;\n}\n.form ion-list ion-item ion-label {\n  font-weight: 400;\n  font-size: 1.35rem !important;\n  margin-bottom: 19px !important;\n}\n.form ion-list ion-item ion-input {\n  font-weight: 500 !important;\n  letter-spacing: 0;\n}\n.form ion-list ion-item ion-textarea {\n  margin-top: 0;\n  font-weight: 400 !important;\n  letter-spacing: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWF6d2FubWFyenVraS9Eb2N1bWVudHMvTW9iaWxlIEFwcC9lLWNvbW1lcmNlL2N1c3RvbWVyL3NyYy9hcHAvYWRkLXJldmlldy9hZGQtcmV2aWV3LnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRkLXJldmlldy9hZGQtcmV2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGlCQUFBO0FDQ0Q7QURDQztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0csNkJBQUE7RUFDSCxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQ0NGO0FER0U7RUFDQyxnQ0FBQTtBQ0RIO0FESUU7RUFDQyxtQkFBQTtBQ0ZIO0FETUM7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNKRjtBRE1FO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNKSDtBRE9FO0VBQ0MsaUJBQUE7QUNMSDtBRE9HO0VBQ0MsU0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0xKO0FEUUc7RUFDQyxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNOSjtBRFlBO0VBQ0Msd0NBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDVEQ7QURXQztFQUNDLFNBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ1RGO0FEWUM7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDVkY7QURhRztFQUNDLGNBQUE7RUFDQSxpQkFBQTtBQ1hKO0FEZ0JJO0VBQ0MseUJBQUE7QUNkTDtBRHVCQTtFQUNDLGlCQUFBO0FDcEJEO0FEdUJFO0VBQ0MsbUJBQUE7QUNyQkg7QUR1Qkc7RUFDQyxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUNyQko7QUR3Qkc7RUFDQywyQkFBQTtFQUNBLGlCQUFBO0FDdEJKO0FEeUJHO0VBQ0MsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUN2QkoiLCJmaWxlIjoic3JjL2FwcC9hZGQtcmV2aWV3L2FkZC1yZXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG5cdHBhZGRpbmctdG9wOiAyMHB4O1xuXG5cdCY6OmJlZm9yZSB7XG5cdFx0Y29udGVudDogJyc7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDogMDtcblx0XHRsZWZ0OiAwO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogY2FsYygxMDAlIC0gMTIwcHgpO1xuXHQgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLnBuZyk7XG5cdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHR9XG5cblx0aW9uLXRvb2xiYXIge1xuXHRcdGlvbi1idXR0b25zIGlvbi1iYWNrLWJ1dHRvbiB7XG5cdFx0XHQtLWNvbG9yOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcblx0XHR9XG5cblx0XHRpb24tdGl0bGUge1xuXHRcdFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcblx0XHR9XG5cdH1cblxuXHQuYmFubmVyIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0ei1pbmRleDogOTk7XG5cdFx0cGFkZGluZzogMCAyMHB4O1xuXHRcdHBhZGRpbmctdG9wOiAyMnB4O1xuXG5cdFx0LmltZ19ib3gge1xuXHRcdFx0d2lkdGg6IDExNXB4O1xuXHRcdFx0aGVpZ2h0OiAxMTVweDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHR9XG5cblx0XHQudGV4dF9ib3gge1xuXHRcdFx0cGFkZGluZy10b3A6IDE1cHg7XG5cblx0XHRcdGgyIHtcblx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1kYXJrLXNlY29uZGFyeSk7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMS4xNXJlbTtcblx0XHRcdFx0cGFkZGluZy1ib3R0b206IDlweDtcblx0XHRcdH1cblxuXHRcdFx0aDMge1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0Zm9udC1zaXplOiAuOXJlbTtcblx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IC41cHg7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi5naXZlX3JhdGluZyB7XG5cdGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS1iZy1jb2xvcik7XG5cdHBhZGRpbmctdG9wOiAzOXB4O1xuXHRwYWRkaW5nLWJvdHRvbTogMjBweDtcblxuXHRoMiB7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdGZvbnQtc2l6ZTogMXJlbTtcblx0XHRsZXR0ZXItc3BhY2luZzogMXB4O1xuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0cGFkZGluZy1ib3R0b206IDE3cHg7XG5cdH1cblxuXHQuaWNvbl9ib3gge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRtYXJnaW46IGF1dG87XG5cdFx0d2lkdGg6IGZpdC1jb250ZW50O1xuXG5cdFx0Lmljb25fYm94IHtcblx0XHRcdGlvbi1pY29uIHtcblx0XHRcdFx0Y29sb3I6ICNFMEUwREQ7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMi4ycmVtO1xuXG5cdFx0XHR9XG5cblx0XHRcdCYuYWN0aXZlIHtcblx0XHRcdFx0aW9uLWljb257XG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLXllbG93X2NvbG9yKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH1cblx0XHR9XG5cblx0fVxufVxuXG4uZm9ybSB7XG5cdHBhZGRpbmctdG9wOiAyNnB4O1xuXG5cdGlvbi1saXN0IHtcblx0XHRpb24taXRlbSB7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG5cdFx0XHRpb24tbGFiZWwge1xuXHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRmb250LXNpemU6IDEuMzVyZW0gIWltcG9ydGFudDtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTlweCAhaW1wb3J0YW50O1xuXHRcdFx0fVxuXG5cdFx0XHRpb24taW5wdXQge1xuXHRcdFx0XHRmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwO1xuXHRcdFx0fVxuXG5cdFx0XHRpb24tdGV4dGFyZWEge1xuXHRcdFx0XHRtYXJnaW4tdG9wOiAwO1xuXHRcdFx0XHRmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG59IiwiaW9uLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuaW9uLWhlYWRlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEyMHB4KTtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYmFjay1idXR0b24ge1xuICAtLWNvbG9yOiB2YXIoLS13aGl0ZSkgIWltcG9ydGFudDtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cbmlvbi1oZWFkZXIgLmJhbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgcGFkZGluZy10b3A6IDIycHg7XG59XG5pb24taGVhZGVyIC5iYW5uZXIgLmltZ19ib3gge1xuICB3aWR0aDogMTE1cHg7XG4gIGhlaWdodDogMTE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuaW9uLWhlYWRlciAuYmFubmVyIC50ZXh0X2JveCB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuaW9uLWhlYWRlciAuYmFubmVyIC50ZXh0X2JveCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyay1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDEuMTVyZW07XG4gIHBhZGRpbmctYm90dG9tOiA5cHg7XG59XG5pb24taGVhZGVyIC5iYW5uZXIgLnRleHRfYm94IGgzIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi5naXZlX3JhdGluZyB7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS1iZy1jb2xvcik7XG4gIHBhZGRpbmctdG9wOiAzOXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5naXZlX3JhdGluZyBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctYm90dG9tOiAxN3B4O1xufVxuLmdpdmVfcmF0aW5nIC5pY29uX2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLmdpdmVfcmF0aW5nIC5pY29uX2JveCAuaWNvbl9ib3ggaW9uLWljb24ge1xuICBjb2xvcjogI0UwRTBERDtcbiAgZm9udC1zaXplOiAyLjJyZW07XG59XG4uZ2l2ZV9yYXRpbmcgLmljb25fYm94IC5pY29uX2JveC5hY3RpdmUgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0teWVsb3dfY29sb3IpO1xufVxuXG4uZm9ybSB7XG4gIHBhZGRpbmctdG9wOiAyNnB4O1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxLjM1cmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE5cHggIWltcG9ydGFudDtcbn1cbi5mb3JtIGlvbi1saXN0IGlvbi1pdGVtIGlvbi1pbnB1dCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG4uZm9ybSBpb24tbGlzdCBpb24taXRlbSBpb24tdGV4dGFyZWEge1xuICBtYXJnaW4tdG9wOiAwO1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/add-review/add-review.page.ts":
/*!***********************************************!*\
  !*** ./src/app/add-review/add-review.page.ts ***!
  \***********************************************/
/*! exports provided: AddReviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReviewPage", function() { return AddReviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let AddReviewPage = class AddReviewPage {
    constructor(toastController) {
        this.toastController = toastController;
        this.ratingIcon1 = false;
        this.ratingIcon2 = false;
        this.ratingIcon3 = false;
        this.ratingIcon4 = false;
        this.ratingIcon5 = false;
    }
    ngOnInit() {
    }
    toggleRatingIcon1() {
        this.ratingIcon1 = !this.ratingIcon1;
    }
    toggleRatingIcon2() {
        this.ratingIcon2 = !this.ratingIcon2;
    }
    toggleRatingIcon3() {
        this.ratingIcon3 = !this.ratingIcon3;
    }
    toggleRatingIcon4() {
        this.ratingIcon4 = !this.ratingIcon4;
    }
    toggleRatingIcon5() {
        this.ratingIcon5 = !this.ratingIcon5;
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Thanks for the feedback',
                duration: 1000,
                position: 'bottom',
                mode: 'ios',
            });
            toast.present();
        });
    }
};
AddReviewPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
AddReviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-review',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-review.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-review/add-review.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-review.page.scss */ "./src/app/add-review/add-review.page.scss")).default]
    })
], AddReviewPage);



/***/ })

}]);
//# sourceMappingURL=add-review-add-review-module-es2015.js.map