function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-in-sign-in-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignInSignInPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title class=\"ion-text-center\">{{'welcome_to' | translate}}</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit(loginForm)\">\n\t\t<div class=\"banner\">\n\t\t\t<div class=\"logo\">\n\t\t\t\t<img src=\"assets/images/user_logo.png\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form\">\n\t\t\t<ion-list lines=\"none\">\n\t\t\t\t<ion-item lines=\"none\" >\n\t\t\t\t\t<ion-label mode=\"md\" position=\"stacked\">Email Address</ion-label>\n\t\t\t\t\t<ion-input mode=\"md\" type=\"email\" name=\"email\" required email ngModel #emailCtrl=\"ngModel\" placeholder=\"Enter Your Email\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"item-login\" *ngIf=\"!emailCtrl.value && emailCtrl.touched\" lines=\"none\">\n\t\t\t\t\t<ion-badge color=\"danger\">*Email cannot be empty</ion-badge>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"item-login\" *ngIf=\"emailCtrl.value && !emailCtrl.valid && emailCtrl.touched\" lines=\"none\">\n\t\t\t\t\t<ion-badge color=\"danger\">*Invalid email</ion-badge>\n\t\t\t\t</ion-item>\n\n\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-label mode=\"md\" position=\"stacked\">Password</ion-label>\n\t\t\t\t\t<ion-input mode=\"md\" type=\"password\" name=\"password\" required ngModel #passwordCtrl=\"ngModel\" placeholder=\"Enter Your Password\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"item-login\" *ngIf=\"!passwordCtrl.valid && passwordCtrl.touched\" lines=\"none\">\n\t\t\t\t\t<ion-badge color=\"danger\">*Password cannot be empty</ion-badge>\n\t\t\t\t</ion-item>\n\t\t\t</ion-list>\n\n\t\t\t<ion-card *ngIf=\"!user; else welcome\">\n\t\t\t\t<ion-card-content>\n\t\t\t\t  <ion-button expand=\"full\" (click)=\"openAppleSignIn()\">\n\t\t\t\t\t<ion-icon name=\"logo-apple\" slot=\"start\"></ion-icon>\n\t\t\t\t\tSign in with Apple\n\t\t\t\t  </ion-button>\n\t\t\t\t</ion-card-content>\n\t\t\t  </ion-card>\n\t\t\t  <ng-template #welcome>\n\t\t\t\t<ion-card>\n\t\t\t\t  <ion-card-header>\n\t\t\t\t\t<ion-card-title>Welcome back!</ion-card-title>\n\t\t\t\t  </ion-card-header>\n\t\t\t\t  <ion-card-content>\n\t\t\t\t\t{{ user | json }}\n\t\t\t\t  </ion-card-content>\n\t\t\t\t</ion-card>\n\t\t\t  </ng-template>\t\n\n\t\t\t\n\n\t\t\t<ion-text class=\"not-member\"><h3>Not a member? <a [routerLink]=\"['/sign-up']\">Sign up now!</a></h3></ion-text>\n\t\t\t<ion-button size=\"large\" [disabled]=\"!loginForm.valid\" type=\"submit\" expand=\"full\" class=\"btn\">Log in</ion-button>\n\t\t</div>\n\t\t\n\t</form>\n</ion-content>\n<ion-text class=\"forgot-password\">Forgot password? <a [routerLink]=\"['/forgot-password']\">Click Here!</a></ion-text>";
    /***/
  },

  /***/
  "./src/app/sign-in/sign-in-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/sign-in/sign-in-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: SignInPageRoutingModule */

  /***/
  function srcAppSignInSignInRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInPageRoutingModule", function () {
      return SignInPageRoutingModule;
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


    var _sign_in_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sign-in.page */
    "./src/app/sign-in/sign-in.page.ts");

    var routes = [{
      path: '',
      component: _sign_in_page__WEBPACK_IMPORTED_MODULE_3__["SignInPage"]
    }];

    var SignInPageRoutingModule = function SignInPageRoutingModule() {
      _classCallCheck(this, SignInPageRoutingModule);
    };

    SignInPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignInPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/sign-in/sign-in.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/sign-in/sign-in.module.ts ***!
    \*******************************************/

  /*! exports provided: SignInPageModule */

  /***/
  function srcAppSignInSignInModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInPageModule", function () {
      return SignInPageModule;
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


    var _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sign-in-routing.module */
    "./src/app/sign-in/sign-in-routing.module.ts");
    /* harmony import */


    var _sign_in_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./sign-in.page */
    "./src/app/sign-in/sign-in.page.ts");

    var SignInPageModule = function SignInPageModule() {
      _classCallCheck(this, SignInPageModule);
    };

    SignInPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_6__["SignInPageRoutingModule"]],
      declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_7__["SignInPage"]]
    })], SignInPageModule);
    /***/
  },

  /***/
  "./src/app/sign-in/sign-in.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/sign-in/sign-in.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignInSignInPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar ion-title {\n  color: var(--text-dark-primary);\n  font-weight: 500;\n  font-size: 1rem;\n}\n\n.banner {\n  display: flex;\n  align-self: center;\n  width: 100%;\n  height: 230px;\n}\n\n.banner .logo {\n  width: 140px;\n  margin: auto;\n  text-align: center;\n}\n\n.form {\n  padding-bottom: 17px;\n}\n\np {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 1rem;\n  padding: 20px 10px;\n}\n\nion-footer h2 {\n  margin: 0;\n  color: var(--text-dark-primary);\n  font-size: 1.15rem;\n  padding-bottom: 45px;\n}\n\nion-footer ion-row ion-col {\n  padding: 0;\n}\n\nion-footer ion-row ion-col .button.btn {\n  text-transform: capitalize;\n  font-weight: 400;\n}\n\nion-footer ion-row ion-col .button.btn.facebook {\n  --background: #3b45c1;\n}\n\nion-footer ion-row ion-col .button.btn.google {\n  --background: #ff452c;\n}\n\n.not-member {\n  margin-right: 10px;\n}\n\n.error-message {\n  color: red;\n}\n\n.forgot-password {\n  text-align: center;\n  margin: auto;\n  padding-bottom: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWF6d2FubWFyenVraS9Eb2N1bWVudHMvTW9iaWxlIEFwcC9lLWNvbW1lcmNlL2N1c3RvbWVyL3NyYy9hcHAvc2lnbi1pbi9zaWduLWluLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2lnbi1pbi9zaWduLWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0Q7O0FERUE7RUFDQyxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0NEOztBRENDO0VBQ0MsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRElBO0VBQ0Msb0JBQUE7QUNERDs7QURJQTtFQUNDLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0REOztBREtDO0VBQ0MsU0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0ZGOztBRE1FO0VBQ0MsVUFBQTtBQ0pIOztBREtHO0VBQ0MsMEJBQUE7RUFDQSxnQkFBQTtBQ0hKOztBREtJO0VBQ0MscUJBQUE7QUNITDs7QURNSTtFQUNDLHFCQUFBO0FDSkw7O0FEV0E7RUFDQyxrQkFBQTtBQ1JEOztBRFdBO0VBQ0MsVUFBQTtBQ1JEOztBRFlBO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNURCIsImZpbGUiOiJzcmMvYXBwL3NpZ24taW4vc2lnbi1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG5cdGNvbG9yOiB2YXIoLS10ZXh0LWRhcmstcHJpbWFyeSk7IFxuXHRmb250LXdlaWdodDogNTAwOyBcblx0Zm9udC1zaXplOiAxcmVtO1xufVxuXG4uYmFubmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24tc2VsZjogY2VudGVyO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAyMzBweDtcblxuXHQubG9nbyB7XG5cdFx0d2lkdGg6IDE0MHB4O1xuXHRcdG1hcmdpbjogYXV0bztcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cblx0fVxufVxuXG4uZm9ybSB7XG5cdHBhZGRpbmctYm90dG9tOiAxN3B4O1xufVxuXG5wIHtcblx0bWFyZ2luOiAwO1xuXHRjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG5cdGZvbnQtc2l6ZTogMXJlbTtcblx0cGFkZGluZzogMjBweCAxMHB4O1xufVxuXG5pb24tZm9vdGVyIHtcblx0aDIge1xuXHRcdG1hcmdpbjogMDtcblx0XHRjb2xvcjogdmFyKC0tdGV4dC1kYXJrLXByaW1hcnkpO1xuXHRcdGZvbnQtc2l6ZTogMS4xNXJlbTtcblx0XHRwYWRkaW5nLWJvdHRvbTogNDVweDtcblx0fVxuXG5cdGlvbi1yb3cge1xuXHRcdGlvbi1jb2wge1xuXHRcdFx0cGFkZGluZzogMDtcblx0XHRcdC5idXR0b24uYnRuIHtcblx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cblx0XHRcdFx0Ji5mYWNlYm9vayB7XG5cdFx0XHRcdFx0LS1iYWNrZ3JvdW5kOiAjM2I0NWMxO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ji5nb29nbGUge1xuXHRcdFx0XHRcdC0tYmFja2dyb3VuZDogI2ZmNDUyYztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4ubm90LW1lbWJlcntcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG5cdGNvbG9yIDogcmVkO1xuXHRcbn1cblxuLmZvcmdvdC1wYXNzd29yZCB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0bWFyZ2luOiBhdXRvO1xuXHRwYWRkaW5nLWJvdHRvbTogMjVweDtcbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmstcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmJhbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjMwcHg7XG59XG4uYmFubmVyIC5sb2dvIHtcbiAgd2lkdGg6IDE0MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvcm0ge1xuICBwYWRkaW5nLWJvdHRvbTogMTdweDtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDFyZW07XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbn1cblxuaW9uLWZvb3RlciBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyay1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogNDVweDtcbn1cbmlvbi1mb290ZXIgaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogMDtcbn1cbmlvbi1mb290ZXIgaW9uLXJvdyBpb24tY29sIC5idXR0b24uYnRuIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5pb24tZm9vdGVyIGlvbi1yb3cgaW9uLWNvbCAuYnV0dG9uLmJ0bi5mYWNlYm9vayB7XG4gIC0tYmFja2dyb3VuZDogIzNiNDVjMTtcbn1cbmlvbi1mb290ZXIgaW9uLXJvdyBpb24tY29sIC5idXR0b24uYnRuLmdvb2dsZSB7XG4gIC0tYmFja2dyb3VuZDogI2ZmNDUyYztcbn1cblxuLm5vdC1tZW1iZXIge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmZvcmdvdC1wYXNzd29yZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/sign-in/sign-in.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/sign-in/sign-in.page.ts ***!
    \*****************************************/

  /*! exports provided: SignInPage */

  /***/
  function srcAppSignInSignInPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInPage", function () {
      return SignInPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _providers_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../providers/network.service */
    "./src/app/providers/network.service.ts");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");

    var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"],
        Device = _capacitor_core__WEBP.Device,
        SignInWithApple = _capacitor_core__WEBP.SignInWithApple;
    var navigationExtras = {
      replaceUrl: true,
      skipLocationChange: true
    };

    var SignInPage = /*#__PURE__*/function () {
      function SignInPage(navCtrl, route, loadedCtrl, alertCtrl, menuCtrl, routerAlert, authService, platform, networkService, routerOutlet) {
        _classCallCheck(this, SignInPage);

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

      _createClass(SignInPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var device;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return Device.getInfo();

                  case 2:
                    device = _context.sent;
                    this.showAppleSignIn = device.platform === 'ios';

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "openAppleSignIn",
        value: function openAppleSignIn() {
          var _this = this;

          SignInWithApple.Authorize().then(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (res.response && res.response.identityToken) {
                        this.user = res.response;
                      } else {
                        this.presentAlert();
                      }

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          })["catch"](function (response) {
            _this.presentAlert();
          });
        }
      }, {
        key: "presentAlert",
        value: function presentAlert() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertCtrl.create({
                      header: 'Login Failed',
                      message: 'Please try again later',
                      buttons: ['Okay']
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this2 = this;

          this.platform.backButton.subscribe(function () {
            if (_this2.route.url.indexOf('/sign-in') >= 0) {
              _this2.alertCtrl.create({
                header: 'Confirmation',
                message: 'Are you sure you want to quit?',
                buttons: [{
                  text: 'Yes',
                  handler: function handler() {
                    navigator['app'].exitApp();
                  }
                }, {
                  text: 'No',
                  role: 'cancel'
                }]
              }).then(function (alertEl) {
                alertEl.present();
              });
            }
          });
          this.networkService.checkNetwornConnectionDirectToAuthPage();
          this.menuCtrl.enable(false, 'menu');
          this.routerOutlet.swipeGesture = false;
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.routerOutlet.swipeGesture = true;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this3 = this;

          if (!form.valid) {
            return;
          }

          var email = form.value.email;
          var password = form.value.password;
          console.log(email);
          console.log(password);
          this.loadedCtrl.create({
            keyboardClose: true,
            message: 'Please wait...'
          }).then(function (loadingEl) {
            loadingEl.present();
            var authObs;
            authObs = _this3.authService.login(email, password);
            authObs.subscribe(function (resData) {
              loadingEl.dismiss();

              if (resData.valid) {
                _this3.route.navigateByUrl('/home', navigationExtras);

                form.reset();
              } else {
                _this3.alertCtrl.create({
                  header: 'Oh-oh!',
                  message: resData.message,
                  buttons: [{
                    text: 'Close',
                    role: 'cancel'
                  }]
                }).then(function (alertEl) {
                  alertEl.present();
                });
              }
            });
          });
        }
      }, {
        key: "home",
        value: function home() {
          this.navCtrl.navigateRoot(['./home']);
        }
      }, {
        key: "sign_up",
        value: function sign_up() {
          this.route.navigate(['./sign-up']);
        }
      }]);

      return SignInPage;
    }();

    SignInPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"]
      }, {
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _providers_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"]
      }];
    };

    SignInPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-in',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sign-in.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sign-in.page.scss */
      "./src/app/sign-in/sign-in.page.scss"))["default"]]
    })], SignInPage);
    /***/
  }
}]);
//# sourceMappingURL=sign-in-sign-in-module-es5.js.map