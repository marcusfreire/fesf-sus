webpackJsonp([17],{

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmHomePageModule", function() { return AdmHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adm_home__ = __webpack_require__(465);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdmHomePageModule = /** @class */ (function () {
    function AdmHomePageModule() {
    }
    AdmHomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__adm_home__["a" /* AdmHomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__adm_home__["a" /* AdmHomePage */]),
            ],
        })
    ], AdmHomePageModule);
    return AdmHomePageModule;
}());

//# sourceMappingURL=adm-home.module.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AdmHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdmHomePage = /** @class */ (function () {
    function AdmHomePage(afAuth, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
        this.user = this.navParams.get('User');
        console.log("ionViewDidLoad AdmHomePage " + this.user.cidade);
    }
    AdmHomePage.prototype.sair = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.navCtrl.setRoot('LoginPage');
        });
    };
    AdmHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adm-home',template:/*ion-inline-start:"/home/marcus/Documentos/fesf-sus/src/pages/adm-home/adm-home.html"*/'<!--\n  Generated template for the AdmHomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Administrador</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="sair()">\n          <ion-icon name="exit">Sair</ion-icon>\n      </button>\n  </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n  <ion-item text-wrap>\n    Adicionar ou editar novos contatos para as coletas.\n    <button color="secondary" ion-button full round  \n        navPush="RegistrarUsuarioPage" [navParams]="{User:user}"> Usuários\n    </button>        \n  </ion-item>\n\n  <ion-item text-wrap>\n    Adicionar ou editar novas cidades das coletas.\n    <button color="secondary" ion-button full round  \n        navPush="AdmCidadePage"> Cidades\n    </button>\n  </ion-item>\n\n  <ion-item text-wrap>\n      Validar as novas coletas adiconado pelos enfermeiros.\n      <button color="secondary" ion-button full round  \n          navPush="AdmValidarPage" [navParams]="{User:user}"> Validar Coletas\n      </button>\n    </ion-item>\n</ion-content>\n'/*ion-inline-end:"/home/marcus/Documentos/fesf-sus/src/pages/adm-home/adm-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AdmHomePage);
    return AdmHomePage;
}());

//# sourceMappingURL=adm-home.js.map

/***/ })

});
//# sourceMappingURL=17.js.map