(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-in-sign-in-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title class=\"ion-text-center\">{{'welcome_to' | translate}}</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit(loginForm)\">\n\t\t<div class=\"banner\">\n\t\t\t<div class=\"logo\">\n\t\t\t\t<img src=\"assets/images/user_logo.png\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form\">\n\t\t\t<ion-list lines=\"none\">\n\t\t\t\t<ion-item lines=\"none\" >\n\t\t\t\t\t<ion-label mode=\"md\" position=\"stacked\">Email Address</ion-label>\n\t\t\t\t\t<ion-input mode=\"md\" type=\"email\" name=\"email\" required email ngModel #emailCtrl=\"ngModel\" placeholder=\"Enter Your Email\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"item-login\" *ngIf=\"!emailCtrl.value && emailCtrl.touched\" lines=\"none\">\n\t\t\t\t\t<ion-badge color=\"danger\">*Email cannot be empty</ion-badge>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"item-login\" *ngIf=\"emailCtrl.value && !emailCtrl.valid && emailCtrl.touched\" lines=\"none\">\n\t\t\t\t\t<ion-badge color=\"danger\">*Invalid email</ion-badge>\n\t\t\t\t</ion-item>\n\n\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-label mode=\"md\" position=\"stacked\">Password</ion-label>\n\t\t\t\t\t<ion-input mode=\"md\" type=\"password\" name=\"password\" required ngModel #passwordCtrl=\"ngModel\" placeholder=\"Enter Your Password\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"item-login\" *ngIf=\"!passwordCtrl.valid && passwordCtrl.touched\" lines=\"none\">\n\t\t\t\t\t<ion-badge color=\"danger\">*Password cannot be empty</ion-badge>\n\t\t\t\t</ion-item>\n\t\t\t</ion-list>\n\n\t\t\t<ion-card *ngIf=\"!user; else welcome\">\n\t\t\t\t<ion-card-content>\n\t\t\t\t  <ion-button expand=\"full\" (click)=\"openAppleSignIn()\">\n\t\t\t\t\t<ion-icon name=\"logo-apple\" slot=\"start\"></ion-icon>\n\t\t\t\t\tSign in with Apple\n\t\t\t\t  </ion-button>\n\t\t\t\t</ion-card-content>\n\t\t\t  </ion-card>\n\n\t\t\t\n\n\t\t\t<ion-text class=\"not-member\"><h3>Not a member? <a [routerLink]=\"['/sign-up']\">Sign up now!</a></h3></ion-text>\n\t\t\t<ion-button size=\"large\" [disabled]=\"!loginForm.valid\" type=\"submit\" expand=\"full\" class=\"btn\">Log in</ion-button>\n\t\t</div>\n\t\t\n\t</form>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n\t<!-- <h2 class=\"ion-text-center\">{{\"or_continue_with\" | translate}}</h2>\n\t<ion-row>\n\t\t<ion-col size=\"6\">\n\t\t\t\t<ion-button size=\"large\" expand=\"full\" class=\"btn facebook\" (click)=\"home()\">{{'facebook' | translate}}</ion-button>\n\t\t</ion-col>\n\t\t\n\t\t<ion-col size=\"6\">\n\t\t\t\t<ion-button size=\"large\" expand=\"full\" class=\"btn google\" (click)=\"home()\">{{'google' | translate}}</ion-button>\n\t\t</ion-col>\n\t</ion-row> -->\n</ion-footer>");

/***/ }),

/***/ "./src/app/sign-in/sign-in-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/sign-in/sign-in-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SignInPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageRoutingModule", function() { return SignInPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in.page */ "./src/app/sign-in/sign-in.page.ts");




const routes = [
    {
        path: '',
        component: _sign_in_page__WEBPACK_IMPORTED_MODULE_3__["SignInPage"]
    }
];
let SignInPageRoutingModule = class SignInPageRoutingModule {
};
SignInPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignInPageRoutingModule);



/***/ }),

/***/ "./src/app/sign-in/sign-in.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.module.ts ***!
  \*******************************************/
/*! exports provided: SignInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-in-routing.module */ "./src/app/sign-in/sign-in-routing.module.ts");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-in.page */ "./src/app/sign-in/sign-in.page.ts");








let SignInPageModule = class SignInPageModule {
};
SignInPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_6__["SignInPageRoutingModule"]
        ],
        declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_7__["SignInPage"]]
    })
], SignInPageModule);



/***/ }),

/***/ "./src/app/sign-in/sign-in.page.scss":
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar ion-title {\n  color: var(--text-dark-primary);\n  font-weight: 500;\n  font-size: 1rem;\n}\n\n.banner {\n  display: flex;\n  align-self: center;\n  width: 100%;\n  height: 230px;\n}\n\n.banner .logo {\n  width: 140px;\n  margin: auto;\n  text-align: center;\n}\n\n.form {\n  padding-bottom: 17px;\n}\n\np {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 1rem;\n  padding: 20px 10px;\n}\n\nion-footer h2 {\n  margin: 0;\n  color: var(--text-dark-primary);\n  font-size: 1.15rem;\n  padding-bottom: 45px;\n}\n\nion-footer ion-row ion-col {\n  padding: 0;\n}\n\nion-footer ion-row ion-col .button.btn {\n  text-transform: capitalize;\n  font-weight: 400;\n}\n\nion-footer ion-row ion-col .button.btn.facebook {\n  --background: #3b45c1;\n}\n\nion-footer ion-row ion-col .button.btn.google {\n  --background: #ff452c;\n}\n\n.not-member {\n  margin-right: 10px;\n}\n\n.error-message {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWF6d2FubWFyenVraS9Eb2N1bWVudHMvTW9iaWxlIEFwcC9lLWNvbW1lcmNlL2N1c3RvbWVyL3NyYy9hcHAvc2lnbi1pbi9zaWduLWluLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2lnbi1pbi9zaWduLWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0Q7O0FERUE7RUFDQyxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0NEOztBRENDO0VBQ0MsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRElBO0VBQ0Msb0JBQUE7QUNERDs7QURJQTtFQUNDLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0REOztBREtDO0VBQ0MsU0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0ZGOztBRE1FO0VBQ0MsVUFBQTtBQ0pIOztBREtHO0VBQ0MsMEJBQUE7RUFDQSxnQkFBQTtBQ0hKOztBREtJO0VBQ0MscUJBQUE7QUNITDs7QURNSTtFQUNDLHFCQUFBO0FDSkw7O0FEV0E7RUFDQyxrQkFBQTtBQ1JEOztBRFdBO0VBQ0MsVUFBQTtBQ1JEIiwiZmlsZSI6InNyYy9hcHAvc2lnbi1pbi9zaWduLWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcblx0Y29sb3I6IHZhcigtLXRleHQtZGFyay1wcmltYXJ5KTsgXG5cdGZvbnQtd2VpZ2h0OiA1MDA7IFxuXHRmb250LXNpemU6IDFyZW07XG59XG5cbi5iYW5uZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDIzMHB4O1xuXG5cdC5sb2dvIHtcblx0XHR3aWR0aDogMTQwcHg7XG5cdFx0bWFyZ2luOiBhdXRvO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHR9XG59XG5cbi5mb3JtIHtcblx0cGFkZGluZy1ib3R0b206IDE3cHg7XG59XG5cbnAge1xuXHRtYXJnaW46IDA7XG5cdGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcblx0Zm9udC1zaXplOiAxcmVtO1xuXHRwYWRkaW5nOiAyMHB4IDEwcHg7XG59XG5cbmlvbi1mb290ZXIge1xuXHRoMiB7XG5cdFx0bWFyZ2luOiAwO1xuXHRcdGNvbG9yOiB2YXIoLS10ZXh0LWRhcmstcHJpbWFyeSk7XG5cdFx0Zm9udC1zaXplOiAxLjE1cmVtO1xuXHRcdHBhZGRpbmctYm90dG9tOiA0NXB4O1xuXHR9XG5cblx0aW9uLXJvdyB7XG5cdFx0aW9uLWNvbCB7XG5cdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0LmJ1dHRvbi5idG4ge1xuXHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblxuXHRcdFx0XHQmLmZhY2Vib29rIHtcblx0XHRcdFx0XHQtLWJhY2tncm91bmQ6ICMzYjQ1YzE7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQmLmdvb2dsZSB7XG5cdFx0XHRcdFx0LS1iYWNrZ3JvdW5kOiAjZmY0NTJjO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi5ub3QtbWVtYmVye1xuXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcblx0Y29sb3IgOiByZWQ7XG5cdFxufSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyay1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uYmFubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMzBweDtcbn1cbi5iYW5uZXIgLmxvZ28ge1xuICB3aWR0aDogMTQwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9ybSB7XG4gIHBhZGRpbmctYm90dG9tOiAxN3B4O1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xufVxuXG5pb24tZm9vdGVyIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrLXByaW1hcnkpO1xuICBmb250LXNpemU6IDEuMTVyZW07XG4gIHBhZGRpbmctYm90dG9tOiA0NXB4O1xufVxuaW9uLWZvb3RlciBpb24tcm93IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwO1xufVxuaW9uLWZvb3RlciBpb24tcm93IGlvbi1jb2wgLmJ1dHRvbi5idG4ge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbmlvbi1mb290ZXIgaW9uLXJvdyBpb24tY29sIC5idXR0b24uYnRuLmZhY2Vib29rIHtcbiAgLS1iYWNrZ3JvdW5kOiAjM2I0NWMxO1xufVxuaW9uLWZvb3RlciBpb24tcm93IGlvbi1jb2wgLmJ1dHRvbi5idG4uZ29vZ2xlIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmY0NTJjO1xufVxuXG4ubm90LW1lbWJlciB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/sign-in/sign-in.page.ts":
/*!*****************************************!*\
  !*** ./src/app/sign-in/sign-in.page.ts ***!
  \*****************************************/
/*! exports provided: SignInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPage", function() { return SignInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _providers_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/network.service */ "./src/app/providers/network.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");







const { Device, SignInWithApple } = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"];
let navigationExtras = {
    replaceUrl: true,
    skipLocationChange: true
};
let SignInPage = class SignInPage {
    constructor(navCtrl, route, loadedCtrl, alertCtrl, menuCtrl, routerAlert, authService, platform, networkService, routerOutlet) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.loadedCtrl = loadedCtrl;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.routerAlert = routerAlert;
        this.authService = authService;
        this.platform = platform;
        this.networkService = networkService;
        this.routerOutlet = routerOutlet;
        this.showAppleSignIn = false;
        this.user = null;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let device = yield Device.getInfo();
            this.showAppleSignIn = device.platform === 'ios';
        });
    }
    openAppleSignIn() {
        SignInWithApple.Authorize().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (res.response && res.response.identityToken) {
                this.user = res.response;
            }
            else {
                this.presentAlert();
            }
        })).catch(response => {
            this.presentAlert();
        });
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Login Failed',
                message: 'Please try again later',
                buttons: ['Okay'],
            });
            yield alert.present();
        });
    }
    ionViewDidEnter() {
        this.platform.backButton.subscribe(() => {
            if (this.route.url.indexOf('/sign-in') >= 0) {
                this.alertCtrl.create({
                    header: 'Confirmation',
                    message: 'Are you sure you want to quit?',
                    buttons: [
                        {
                            text: 'Yes',
                            handler: () => {
                                navigator['app'].exitApp();
                            }
                        },
                        {
                            text: 'No',
                            role: 'cancel'
                        }
                    ]
                }).then(alertEl => {
                    alertEl.present();
                });
            }
        });
        this.networkService.checkNetwornConnectionDirectToAuthPage();
        this.menuCtrl.enable(false, 'menu');
        this.routerOutlet.swipeGesture = false;
    }
    ionViewWillLeave() {
        this.routerOutlet.swipeGesture = true;
    }
    onSubmit(form) {
        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;
        this.loadedCtrl.create({
            keyboardClose: true,
            message: 'Please wait...'
        }).then(loadingEl => {
            loadingEl.present();
            let authObs;
            authObs = this.authService.login(email, password);
            authObs.subscribe(resData => {
                loadingEl.dismiss();
                if (resData.valid) {
                    this.route.navigateByUrl('/home', navigationExtras);
                    form.reset();
                }
                else {
                    this.alertCtrl.create({
                        header: 'Oh-oh!',
                        message: resData.message,
                        buttons: [
                            {
                                text: 'Close',
                                role: 'cancel'
                            }
                        ]
                    }).then(alertEl => {
                        alertEl.present();
                    });
                }
            });
        });
    }
    home() {
        this.navCtrl.navigateRoot(['./home']);
    }
    sign_up() {
        this.route.navigate(['./sign-up']);
    }
};
SignInPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _providers_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"] }
];
SignInPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-in',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sign-in.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sign-in.page.scss */ "./src/app/sign-in/sign-in.page.scss")).default]
    })
], SignInPage);



/***/ })

}]);
//# sourceMappingURL=sign-in-sign-in-module-es2015.js.map