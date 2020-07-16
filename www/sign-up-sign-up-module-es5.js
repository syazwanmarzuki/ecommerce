function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-up-sign-up-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignUpSignUpPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>{{'register' | translate}}</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\t<form [formGroup]=\"registerForm\">\n\t<div class=\"form\">\n\t\t<ion-list lines=\"none\">\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-label mode=\"md\" position=\"stacked\">Fullname</ion-label>\n\t\t\t\t<ion-input mode=\"md\" type=\"text\" formControlName=\"fullname\" required fullname placeholder=\"Enter Your Fullname\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item lines=\"none\" *ngIf=\"!registerForm.get('fullname').value && registerForm.get('fullname').touched\">\n\t\t\t\t<ion-badge color=\"danger\">*This field is required</ion-badge>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-label mode=\"md\" position=\"stacked\">Email</ion-label>\n\t\t\t\t<ion-input mode=\"md\" type=\"email\" formControlName=\"email\" required email placeholder=\"Please Enter Your Email\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item lines=\"none\" *ngIf=\"!registerForm.get('email').value && registerForm.get('email').touched\">\n\t\t\t\t<ion-badge color=\"danger\">*This field is required</ion-badge>\n\t\t\t</ion-item>\n\t\t\t<ion-item lines=\"none\" *ngIf=\"registerForm.get('email').value && registerForm.get('email').touched && !registerForm.get('email').valid && !registerForm.get('email').hasError('invalid_email')\"> \n\t\t\t\t<ion-badge color=\"danger\">*Invalid email format</ion-badge>\n\t\t\t  </ion-item>\n\n\t\t\t  <ion-item lines=\"none\" *ngIf=\"registerForm.get('email').value && registerForm.get('email').hasError('invalid_email')\">\n\t\t\t\t<ion-badge color=\"danger\">*This email already exist.</ion-badge>\n\t\t\t  </ion-item>\n\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-label mode=\"md\" position=\"stacked\">Phone Number</ion-label>\n\t\t\t\t<ion-input mode=\"md\" type=\"text\" formControlName=\"phoneno\" required placeholder=\"Please enter your phone number\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item lines=\"none\" *ngIf=\"!registerForm.get('phoneno').value && registerForm.get('phoneno').touched\">\n\t\t\t\t<ion-badge color=\"danger\">This field is required.</ion-badge>\n\t\t\t</ion-item>\n\t\t\t<ion-item lines=\"none\" *ngIf=\"registerForm.get('phoneno').value && registerForm.get('phoneno').hasError('invalid_phonene')\">\n\t\t\t\t<ion-badge color=\"danger\">*This email already exist.</ion-badge>\n\t\t\t</ion-item>\n\t\t\t<ion-item lines=\"none\" *ngIf=\"registerForm.get('phoneno').value && registerForm.get('phoneno').touched && !registerForm.get('phoneno').valid\">\n\t\t\t\t<ion-badge color=\"danger\">*Invalid format</ion-badge>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-label mode=\"md\" position=\"stacked\">Password</ion-label>\n\t\t\t\t<ion-input mode=\"md\" type=\"password\" formControlName=\"password\" required placeholder=\"Please enter your password\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item lines=\"none\" *ngIf=\"!registerForm.get('password').value && registerForm.get('password').touched\"> \n\t\t\t\t<ion-badge color=\"danger\">This field is required.</ion-badge>\n\t\t\t</ion-item>\n\n\t\t</ion-list>\n\t\t<ion-button size=\"large\" type=\"submit\" [disabled]=\"!registerForm.valid\" expand=\"full\" class=\"btn\" (click)=\"onSubmit()\">Submit</ion-button>\n\t</div>\n\t</form>\n</ion-content>\n\n<ion-footer class=\"ion-mo-border\">\n\t\t\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/sign-up/sign-up-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/sign-up/sign-up-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: SignUpPageRoutingModule */

  /***/
  function srcAppSignUpSignUpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpPageRoutingModule", function () {
      return SignUpPageRoutingModule;
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


    var _sign_up_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sign-up.page */
    "./src/app/sign-up/sign-up.page.ts");

    var routes = [{
      path: '',
      component: _sign_up_page__WEBPACK_IMPORTED_MODULE_3__["SignUpPage"]
    }];

    var SignUpPageRoutingModule = function SignUpPageRoutingModule() {
      _classCallCheck(this, SignUpPageRoutingModule);
    };

    SignUpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignUpPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/sign-up/sign-up.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/sign-up/sign-up.module.ts ***!
    \*******************************************/

  /*! exports provided: SignUpPageModule */

  /***/
  function srcAppSignUpSignUpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function () {
      return SignUpPageModule;
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


    var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sign-up-routing.module */
    "./src/app/sign-up/sign-up-routing.module.ts");
    /* harmony import */


    var _sign_up_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./sign-up.page */
    "./src/app/sign-up/sign-up.page.ts");

    var SignUpPageModule = function SignUpPageModule() {
      _classCallCheck(this, SignUpPageModule);
    };

    SignUpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_6__["SignUpPageRoutingModule"]],
      declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_7__["SignUpPage"]]
    })], SignUpPageModule);
    /***/
  },

  /***/
  "./src/app/sign-up/sign-up.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/sign-up/sign-up.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignUpSignUpPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar ion-buttons ion-back-button {\n  --icon-font-size: 2.3rem !important;\n}\nion-header ion-toolbar ion-title {\n  font-size: 1.12rem;\n  letter-spacing: 0.5px;\n}\n.form {\n  padding-top: 61px;\n}\n.form p {\n  margin: 0;\n  color: var(--text-dark-primary);\n  font-weight: 500;\n  font-size: 1.15rem;\n  line-height: 24px;\n  padding-bottom: 37px;\n}\n.error-message {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWF6d2FubWFyenVraS9Eb2N1bWVudHMvTW9iaWxlIEFwcC9lLWNvbW1lcmNlL2N1c3RvbWVyL3NyYy9hcHAvc2lnbi11cC9zaWduLXVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2lnbi11cC9zaWduLXVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLG1DQUFBO0FDQUY7QURFQztFQUNDLGtCQUFBO0VBQ0EscUJBQUE7QUNBRjtBRElBO0VBQ0MsaUJBQUE7QUNERDtBREdDO0VBQ0MsU0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNERjtBREtBO0VBQ0MsVUFBQTtBQ0ZEIiwiZmlsZSI6InNyYy9hcHAvc2lnbi11cC9zaWduLXVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuXHRpb24tYnV0dG9ucyBpb24tYmFjay1idXR0b24ge1xuXHRcdC0taWNvbi1mb250LXNpemU6IDIuM3JlbSAhaW1wb3J0YW50O1xuXHR9XG5cdGlvbi10aXRsZXtcblx0XHRmb250LXNpemU6IDEuMTJyZW07XG5cdFx0bGV0dGVyLXNwYWNpbmc6IC41cHg7XG5cdH1cbn1cblxuLmZvcm0ge1xuXHRwYWRkaW5nLXRvcDogNjFweDtcblxuXHRwIHtcblx0XHRtYXJnaW46IDA7XG5cdFx0Y29sb3I6IHZhcigtLXRleHQtZGFyay1wcmltYXJ5KTtcblx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdGZvbnQtc2l6ZTogMS4xNXJlbTtcblx0XHRsaW5lLWhlaWdodDogMjRweDtcblx0XHRwYWRkaW5nLWJvdHRvbTogMzdweDtcblx0fVxufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG5cdGNvbG9yIDogcmVkO1xufSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJhY2stYnV0dG9uIHtcbiAgLS1pY29uLWZvbnQtc2l6ZTogMi4zcmVtICFpbXBvcnRhbnQ7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4xMnJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4uZm9ybSB7XG4gIHBhZGRpbmctdG9wOiA2MXB4O1xufVxuLmZvcm0gcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyay1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgcGFkZGluZy1ib3R0b206IDM3cHg7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/sign-up/sign-up.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/sign-up/sign-up.page.ts ***!
    \*****************************************/

  /*! exports provided: SignUpPage */

  /***/
  function srcAppSignUpSignUpPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpPage", function () {
      return SignUpPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var SignUpPage = /*#__PURE__*/function () {
      function SignUpPage(route, loadCtrl, alertCtrl, navCtrl, authService, http) {
        _classCallCheck(this, SignUpPage);

        this.route = route;
        this.loadCtrl = loadCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.http = http;
        this.phoneno = '';
      }

      _createClass(SignUpPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.checkEmail.bind(this)]
            }),
            // email : new FormControl(null, {
            //   validators : [Validators.required]
            // }),
            phoneno: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.checkPhoneNo.bind(this), this.checkIsNumber.bind(this)]
            }),
            // phoneno : new FormControl(null, {
            //   validators : [Validators.required]
            // }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            })
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          var formData = new FormData();
          formData.append('action', 'register');
          formData.append('email', this.registerForm.value.email);
          formData.append('fullname', this.registerForm.value.fullname);
          formData.append('phoneno', this.registerForm.value.phoneno);
          formData.append('password', this.registerForm.value.password);
          console.log(this.registerForm.value.phoneno);
          this.loadCtrl.create({
            keyboardClose: true,
            message: 'Please wait..'
          }).then(function (loadingEl) {
            loadingEl.present();

            _this.authService.register(_this.registerForm.value).subscribe(function (resData) {
              loadingEl.dismiss();

              if (resData.valid) {
                _this.alertCtrl.create({
                  header: 'Success',
                  message: resData.msg,
                  buttons: [{
                    text: 'Continue',
                    handler: function handler() {
                      _this.navCtrl.navigateBack('/sign-in');
                    }
                  }],
                  backdropDismiss: false
                }).then(function (alertEl) {
                  alertEl.present();
                });
              } else {
                _this.alertCtrl.create({
                  header: 'Oh-oh!',
                  message: resData.msg,
                  buttons: [{
                    text: 'Okay',
                    role: 'Cancel'
                  }],
                  backdropDismiss: false
                }).then(function (alertEl) {
                  alertEl.present();
                });
              }
            });
          });
        }
      }, {
        key: "checkEmail",
        value: function checkEmail(control) {
          var formData = new FormData();
          formData.append('action', 'checkEmail');
          formData.append('email', control.value);
          this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].url, formData).subscribe(function (result) {
            if (result.valid) {
              control.setErrors({
                invalid_email: true
              });
            }
          });
        }
      }, {
        key: "checkPhoneNo",
        value: function checkPhoneNo(control) {
          var formData = new FormData();
          formData.append('action', 'checkPhoneNo');
          formData.append('phoneno', control.value);
          this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].url, formData).subscribe(function (result) {
            if (result.valid) {
              control.setErrors({
                invalid_phoneno: true
              });
            }
          });
        }
      }, {
        key: "checkIsNumber",
        value: function checkIsNumber(control) {
          if (isNaN(control.value)) {
            return {
              invalid_format: true
            };
          }

          return null;
        }
      }]);

      return SignUpPage;
    }();

    SignUpPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
      }];
    };

    SignUpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-up',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sign-up.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sign-up.page.scss */
      "./src/app/sign-up/sign-up.page.scss"))["default"]]
    })], SignUpPage);
    /***/
  }
}]);
//# sourceMappingURL=sign-up-sign-up-module-es5.js.map