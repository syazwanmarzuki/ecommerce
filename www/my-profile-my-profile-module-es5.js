function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-profile-my-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/my-profile/my-profile.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-profile/my-profile.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMyProfileMyProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button></ion-menu-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\tMy Account\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg_color\">\n\t<ion-card>\n\t\t<ion-card-header>\n\t\t  <ion-card-title>My Profile</ion-card-title>\n\t\t</ion-card-header>\n\t  \n\t\t<ion-card-content>\n\t\t\t<ion-list lines=\"none\">\n\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-label mode=\"md\" position=\"stacked\">User ID</ion-label>\n\t\t\t\t\t<ion-badge color=\"warning\">{{user_id}}</ion-badge>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-label mode=\"md\" position=\"stacked\">Fullname</ion-label>\n\t\t\t\t\t<ion-input mode=\"md\" type=\"name\" value=\"{{userFullname}}\"></ion-input>\n\t\t\t\t</ion-item>\n\n\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-label mode=\"md\" position=\"stacked\">{{\"email_address\" | translate}}</ion-label>\n\t\t\t\t\t<ion-input mode=\"md\" type=\"email\" value=\"{{email}}\" readonly=\"true\"></ion-input>\n\t\t\t\t</ion-item>\n\n\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-label mode=\"md\" position=\"stacked\">{{\"phone_number\" | translate}}</ion-label>\n\t\t\t\t\t<ion-input mode=\"md\" type=\"text\" value=\"{{phoneno}}\" readonly=\"true\"></ion-input>\n\t\t\t\t</ion-item>\n\n\t\t\t</ion-list>\n\t\t\t<ion-button expand=\"block\" (click)=\"openModal(1)\">\n\t\t\t\t<ion-icon slot=\"start\" name=\"pencil\"></ion-icon>\n\t\t\t\tEdit Profile\n\t\t\t</ion-button>\n\t\t</ion-card-content>\n\t  </ion-card>\n\t<ion-card>\n\t\t<ion-card-header>\n\t\t  <ion-card-title>My Addresses</ion-card-title>\n\t\t</ion-card-header>\n\t  \n\t\t<ion-card-content>\n\t\t\t<ion-list lines=\"none\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<div class=\"item_inner\"> \n\t\t\t\t\t\t<div class=\"text_box\">\n\t\t\t\t\t\t\t<ion-badge color=\"secondary\">Home</ion-badge>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t{{home_address}}\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<div class=\"item_inner\"> \n\t\t\t\t\t\t<div class=\"text_box\">\n\t\t\t\t\t\t\t<ion-badge color=\"secondary\">Office</ion-badge>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t{{office_address}}\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<div class=\"item_inner\"> \n\t\t\t\t\t\t<div class=\"text_box\">\n\t\t\t\t\t\t\t<ion-badge color=\"secondary\">Other</ion-badge>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t{{other_address}}\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-item>\n\t\t\t</ion-list>\n\t\t\t<ion-button expand=\"block\" (click)=\"openModal(2)\">\n\t\t\t\t<ion-icon slot=\"start\" name=\"pencil\"></ion-icon>\n\t\t\t\tEdit Addresses\n\t\t\t</ion-button>\n\t\t</ion-card-content>\n\t  </ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/my-profile/profile-modal/profile-modal.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-profile/profile-modal/profile-modal.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMyProfileProfileModalProfileModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{ page_title }}\n    </ion-title>\n    <ion-buttons slot=\"primary\"> \n      <ion-button (click)=\"closeModal()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card *ngIf=\"category == 1 && !isLoading\">\n    <ion-card-header>\n      <ion-card-title>Card Title</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <form [formGroup]=\"myProfile\">\n\n        <ion-item>\n          <ion-label position=\"stacked\">\n            Fullname (As in NRIC) *\n          </ion-label>\n          <ion-input type=\"text\" formControlName=\"fullname\"></ion-input>\n        </ion-item>\n        \n        <ion-item lines=\"none\" *ngIf=\"!myProfile.get('fullname').value && myProfile.get('fullname').touched\">\n          <small class=\"error-message\">This field is required.</small>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">\n            Email *\n          </ion-label>\n          <ion-input type=\"email\" formControlName=\"email\" email></ion-input>\n        </ion-item>\n\n\n        <ion-item>\n          <ion-label position=\"stacked\">\n            Phone Number\n          </ion-label>\n          <ion-input type=\"number\" formControlName=\"phoneno\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\" *ngIf=\"myProfile.get('phoneno').value && myProfile.get('phoneno').touched && !myProfile.get('phoneno').valid\">\n          <small class=\"error-message\">You have not given a correct phone number.</small>\n        </ion-item>\n      </form>\n    </ion-card-content>\n  </ion-card>\n  <ion-card *ngIf=\"category == 2 && !isLoading\">\n    <ion-card-header>\n      <ion-card-title>Card Title</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <form [formGroup]=\"myAddresses\">\n        <ion-item>\n            <ion-label position=\"stacked\">\n              Home Address\n            </ion-label>\n            <ion-input type=\"text\" formControlName=\"home_address\"></ion-input>\n        </ion-item>\n\n        <ion-item lines=\"none\" *ngIf=\"!myAddresses.get('home_address').value && myAddresses.get('home_address').touched\">\n          <small class=\"error-message\">This field is required.</small>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">\n            Office Address\n          </ion-label>\n          <ion-input type=\"text\" formControlName=\"office_address\"></ion-input>\n        </ion-item>\n\n        <ion-item lines=\"none\" *ngIf=\"!myAddresses.get('office_address').value && myAddresses.get('office_address').touched\">\n          <small class=\"error-message\">This field is required.</small>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\">\n            Other Address\n          </ion-label>\n          <ion-input type=\"text\" formControlName=\"other_address\"></ion-input>\n        </ion-item>\n\n        <ion-item lines=\"none\" *ngIf=\"!myAddresses.get('other_address').value && myAddresses.get('other_address').touched\">\n          <small class=\"error-message\">This field is required.</small>\n        </ion-item>\n      </form>\n    </ion-card-content>\n  </ion-card>\n  <ion-grid>\n    <ion-row>\n      <!-- <ion-col size-md=\"12\" offset-md=\"0\" size-sm=\"6\" offset-sm=\"3\" *ngIf=\"category == 1 && !isLoading\">\n        <form [formGroup]=\"myProfile\">\n\n          <ion-item>\n            <ion-label position=\"stacked\">\n              Fullname (As in NRIC) *\n            </ion-label>\n            <ion-input type=\"text\" formControlName=\"fullname\"></ion-input>\n          </ion-item>\n          \n          <ion-item lines=\"none\" *ngIf=\"!myProfile.get('fullname').value && myProfile.get('fullname').touched\">\n            <small class=\"error-message\">This field is required.</small>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"stacked\">\n              Email *\n            </ion-label>\n            <ion-input type=\"email\" formControlName=\"email\" email readonly></ion-input>\n          </ion-item>\n\n\n          <ion-item>\n            <ion-label position=\"stacked\">\n              Phone Number\n            </ion-label>\n            <ion-input type=\"number\" formControlName=\"phoneno\" readonly></ion-input>\n          </ion-item>\n          <ion-item lines=\"none\" *ngIf=\"myProfile.get('phoneno').value && myProfile.get('phoneno').touched && !myProfile.get('phoneno').valid\">\n            <small class=\"error-message\">You have not given a correct phone number.</small>\n          </ion-item>\n\n        </form>\n      </ion-col> -->\n\n      <!-- <ion-col size-md=\"12\" offset-md=\"0\" size-sm=\"6\" offset-sm=\"3\" *ngIf=\"category == 2 && !isLoading\">\n        <form [formGroup]=\"myAddresses\">\n          <ion-item>\n              <ion-label position=\"stacked\">\n                Home Address\n              </ion-label>\n              <ion-input type=\"text\" formControlName=\"home_address\"></ion-input>\n          </ion-item>\n\n          <ion-item lines=\"none\" *ngIf=\"!myAddresses.get('home_address').value && myAddresses.get('home_address').touched\">\n            <small class=\"error-message\">This field is required.</small>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"stacked\">\n              Office Address\n            </ion-label>\n            <ion-input type=\"text\" formControlName=\"office_address\"></ion-input>\n          </ion-item>\n\n          <ion-item lines=\"none\" *ngIf=\"!myAddresses.get('office_address').value && myAddresses.get('office_address').touched\">\n            <small class=\"error-message\">This field is required.</small>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"stacked\">\n              Other Address\n            </ion-label>\n            <ion-input type=\"text\" formControlName=\"other_address\"></ion-input>\n          </ion-item>\n\n          <ion-item lines=\"none\" *ngIf=\"!myAddresses.get('other_address').value && myAddresses.get('other_address').touched\">\n            <small class=\"error-message\">This field is required.</small>\n          </ion-item>\n        </form>\n      </ion-col> -->\n\n    </ion-row>\n\n    <ion-row *ngIf=\"!isLoading\">\n      <ion-col size-md=\"12\" offset-md=\"0\" size-sm=\"6\" offset-sm=\"3\">\n        <ion-button class=\"submitButton\" expand=\"block\" fill=\"outline\" (click)=\"onSave(category)\" >Save</ion-button>\n      </ion-col>\n    </ion-row>\n\n\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/my-profile/my-profile-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/my-profile/my-profile-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: MyProfilePageRoutingModule */

  /***/
  function srcAppMyProfileMyProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfilePageRoutingModule", function () {
      return MyProfilePageRoutingModule;
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


    var _my_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-profile.page */
    "./src/app/my-profile/my-profile.page.ts");

    var routes = [{
      path: '',
      component: _my_profile_page__WEBPACK_IMPORTED_MODULE_3__["MyProfilePage"]
    }];

    var MyProfilePageRoutingModule = function MyProfilePageRoutingModule() {
      _classCallCheck(this, MyProfilePageRoutingModule);
    };

    MyProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/my-profile/my-profile.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/my-profile/my-profile.module.ts ***!
    \*************************************************/

  /*! exports provided: MyProfilePageModule */

  /***/
  function srcAppMyProfileMyProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfilePageModule", function () {
      return MyProfilePageModule;
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


    var _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./my-profile-routing.module */
    "./src/app/my-profile/my-profile-routing.module.ts");
    /* harmony import */


    var _my_profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./my-profile.page */
    "./src/app/my-profile/my-profile.page.ts");
    /* harmony import */


    var _profile_modal_profile_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./profile-modal/profile-modal.component */
    "./src/app/my-profile/profile-modal/profile-modal.component.ts");

    var MyProfilePageModule = function MyProfilePageModule() {
      _classCallCheck(this, MyProfilePageModule);
    };

    MyProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_6__["MyProfilePageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_my_profile_page__WEBPACK_IMPORTED_MODULE_7__["MyProfilePage"], _profile_modal_profile_modal_component__WEBPACK_IMPORTED_MODULE_8__["ProfileModalComponent"]],
      entryComponents: [_profile_modal_profile_modal_component__WEBPACK_IMPORTED_MODULE_8__["ProfileModalComponent"]]
    })], MyProfilePageModule);
    /***/
  },

  /***/
  "./src/app/my-profile/my-profile.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/my-profile/my-profile.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMyProfileMyProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LXByb2ZpbGUvbXktcHJvZmlsZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/my-profile/my-profile.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/my-profile/my-profile.page.ts ***!
    \***********************************************/

  /*! exports provided: MyProfilePage */

  /***/
  function srcAppMyProfileMyProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfilePage", function () {
      return MyProfilePage;
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


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _providers_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../providers/network.service */
    "./src/app/providers/network.service.ts");
    /* harmony import */


    var _profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile.service */
    "./src/app/my-profile/profile.service.ts");
    /* harmony import */


    var _profile_modal_profile_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./profile-modal/profile-modal.component */
    "./src/app/my-profile/profile-modal/profile-modal.component.ts");

    var MyProfilePage = /*#__PURE__*/function () {
      function MyProfilePage(route, authService, menuCtrl, routerOutlet, platform, loadingCtrl, networkService, profileService, modalCtrl) {
        _classCallCheck(this, MyProfilePage);

        this.route = route;
        this.authService = authService;
        this.menuCtrl = menuCtrl;
        this.routerOutlet = routerOutlet;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.networkService = networkService;
        this.profileService = profileService;
        this.modalCtrl = modalCtrl;
        this.fullname = '';
        this.email = '';
        this.phoneno = '';
        this.registerAt = '';
        this.userFullname = '';
        this.home_address = '';
        this.office_address = '';
        this.other_address = '';
        this.isLoading = false;
      }

      _createClass(MyProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.authService.userFullname.subscribe(function (fullname) {
            _this.userFullname = fullname;
          });
          this.profileService.getProfileData().subscribe(function (resData) {
            _this.user_id = resData.user_id;
            _this.fullname = resData.fullname;
            _this.email = resData.email;
            _this.phoneno = resData.phoneno;
            _this.registerAt = resData.registerAt;
            _this.home_address = resData.home_address;
            _this.office_address = resData.office_address;
            _this.other_address = resData.other_address;
          });
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.networkService.checkNetworkConnection(); // this.menuCtrl.enable(true, 'menu');
          // this.routerOutlet.swipeGesture = false;
        }
      }, {
        key: "openModal",
        value: function openModal(category) {
          var title;

          if (category == 1) {
            title = 'My Profile';
          } else {
            title = 'My Addresses';
          }

          this.modalCtrl.create({
            component: _profile_modal_profile_modal_component__WEBPACK_IMPORTED_MODULE_7__["ProfileModalComponent"],
            componentProps: {
              page_title: title,
              category: category
            }
          }).then(function (modalEl) {
            modalEl.present();
          });
        }
      }]);

      return MyProfilePage;
    }();

    MyProfilePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRouterOutlet"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _providers_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"]
      }, {
        type: _profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }];
    };

    MyProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./my-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/my-profile/my-profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./my-profile.page.scss */
      "./src/app/my-profile/my-profile.page.scss"))["default"]]
    })], MyProfilePage);
    /***/
  },

  /***/
  "./src/app/my-profile/profile-modal/profile-modal.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/my-profile/profile-modal/profile-modal.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMyProfileProfileModalProfileModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LXByb2ZpbGUvcHJvZmlsZS1tb2RhbC9wcm9maWxlLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/my-profile/profile-modal/profile-modal.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/my-profile/profile-modal/profile-modal.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ProfileModalComponent */

  /***/
  function srcAppMyProfileProfileModalProfileModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileModalComponent", function () {
      return ProfileModalComponent;
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


    var _profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../profile.service */
    "./src/app/my-profile/profile.service.ts");
    /* harmony import */


    var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");

    var ProfileModalComponent = /*#__PURE__*/function () {
      function ProfileModalComponent(profileService, modalCtrl, loadingCtrl, authService, alertCtrl) {
        _classCallCheck(this, ProfileModalComponent);

        this.profileService = profileService;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.isLoading = false;
      }

      _createClass(ProfileModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.myProfile = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            phoneno: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, this.checkIsNumber.bind(this)]
            })
          });
          this.myAddresses = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            home_address: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            office_address: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            other_address: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            })
          });
          this.loadingCtrl.create({
            message: 'Loading...'
          }).then(function (loadingEl) {
            loadingEl.present();
            _this2.isLoading = true;

            _this2.profileService.getProfileData().subscribe(function (resData) {
              console.log(resData);

              _this2.myProfile.get('fullname').setValue(resData.fullname);

              _this2.myProfile.get('email').setValue(resData.email);

              _this2.myProfile.get('phoneno').setValue(resData.phoneno);

              _this2.myAddresses.get('home_address').setValue(resData.home_address);

              _this2.myAddresses.get('office_address').setValue(resData.office_address);

              _this2.myAddresses.get('other_address').setValue(resData.other_address);

              loadingEl.dismiss();
              _this2.isLoading = false;
            });
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
        }
      }, {
        key: "onSave",
        value: function onSave(category) {
          var _this3 = this;

          if (category == 1) {
            this.myProfile.markAllAsTouched();

            if (!this.myProfile.valid) {
              return;
            }

            this.loadingCtrl.create({
              message: 'Processing...'
            }).then(function (loadingEl) {
              loadingEl.present();

              _this3.profileService.updateProfile(1, _this3.myProfile.value).subscribe(function (resData) {
                if (resData.valid) {
                  _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Storage.get({
                    key: 'authData'
                  }).then(function (result) {
                    var oldData = JSON.parse(result.value);

                    _this3.authService.setUserData(oldData.user_id, resData.update_email, resData.update_fullname, oldData.session_id, resData.update_phoneno);
                  });

                  _this3.modalCtrl.dismiss({
                    'dismissed': true
                  });
                } else {
                  _this3.alertCtrl.create({
                    header: 'Oh-oh!',
                    message: 'Failed to update. Please try again later',
                    buttons: ['Okay']
                  }).then(function (alertEl) {
                    alertEl.present();
                  });
                }

                loadingEl.dismiss();
              });
            });
          } else if (category == 2) {
            this.myAddresses.markAllAsTouched();

            if (!this.myAddresses.valid) {
              return;
            }

            this.loadingCtrl.create({
              message: 'Processing...'
            }).then(function (loadingEl) {
              loadingEl.present();

              _this3.profileService.updateProfile(2, _this3.myAddresses.value).subscribe(function (resData) {
                if (resData.valid) {
                  _this3.modalCtrl.dismiss({
                    'dismissed': true
                  });
                } else {
                  _this3.alertCtrl.create({
                    header: 'Oops',
                    message: 'Failed to update. Please try again later',
                    buttons: ['Okay']
                  }).then(function (alertEl) {
                    alertEl.present();
                  });
                }

                loadingEl.dismiss();
              });
            });
          }
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.modalCtrl.dismiss({
            'dismissed': true
          });
        }
      }]);

      return ProfileModalComponent;
    }();

    ProfileModalComponent.ctorParameters = function () {
      return [{
        type: _profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProfileModalComponent.prototype, "page_title", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProfileModalComponent.prototype, "category", void 0);
    ProfileModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-modal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/my-profile/profile-modal/profile-modal.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile-modal.component.scss */
      "./src/app/my-profile/profile-modal/profile-modal.component.scss"))["default"]]
    })], ProfileModalComponent);
    /***/
  },

  /***/
  "./src/app/my-profile/profile.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/my-profile/profile.service.ts ***!
    \***********************************************/

  /*! exports provided: ProfileService */

  /***/
  function srcAppMyProfileProfileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
      return ProfileService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ProfileService = /*#__PURE__*/function () {
      function ProfileService(http, authService) {
        _classCallCheck(this, ProfileService);

        this.http = http;
        this.authService = authService;
        this._url = "http://ecommerce.x-cow.com/api/action.php";
      }

      _createClass(ProfileService, [{
        key: "getProfileData",
        value: function getProfileData() {
          var _this4 = this;

          return this.authService.userId.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user_id) {
            var formData = new FormData();
            formData.append("action", "getProfileDataById");
            formData.append("user_id", user_id);
            return _this4.http.post(_this4._url, formData);
          }));
        }
      }, {
        key: "updateProfile",
        value: function updateProfile(category, value) {
          var _this5 = this;

          return this.authService.userId.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user_id) {
            var formData = new FormData();
            formData.append('action', 'updateProfile');
            formData.append('user_id', user_id);
            formData.append('category', category.toString());

            if (category == 1) {
              formData.append('fullname', value.fullname);
              formData.append('email', value.email);
              formData.append('phoneno', value.phoneno);
            } else if (category == 2) {
              formData.append('home_address', value.home_address);
              formData.append('office_address', value.office_address);
              formData.append('other_address', value.other_address);
            }

            return _this5.http.post(_this5._url, formData);
          }));
        }
      }]);

      return ProfileService;
    }();

    ProfileService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    ProfileService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProfileService);
    /***/
  }
}]);
//# sourceMappingURL=my-profile-my-profile-module-es5.js.map