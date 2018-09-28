webpackJsonp([12],{

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeUserPageModule", function() { return HomeUserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_user__ = __webpack_require__(470);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeUserPageModule = /** @class */ (function () {
    function HomeUserPageModule() {
    }
    HomeUserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home_user__["a" /* HomeUserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home_user__["a" /* HomeUserPage */]),
            ],
        })
    ], HomeUserPageModule);
    return HomeUserPageModule;
}());

//# sourceMappingURL=home-user.module.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_cidade_list_cidade_list_service__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(279);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
 * Generated class for the HomeUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeUserPage = /** @class */ (function () {
    function HomeUserPage(afAuth, navCtrl, navParams, listacidade) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.listacidade = listacidade;
        this.cidade = '';
        this.user = {};
        this.user = this.navParams.get('User');
        console.log("HomeUser " + this.user.cidade);
        this.cidadeLista$ = this.listacidade
            .getCidadeList()
            .snapshotChanges()
            .map(function (Changes) {
            return Changes.map(function (p) { return (__assign({ chave: p.payload.key }, p.payload.val())); });
        });
    }
    HomeUserPage.prototype.sair = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.navCtrl.setRoot('LoginPage');
        });
    };
    HomeUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-user',template:/*ion-inline-start:"/home/marcus/Documentos/fesf-sus/src/pages/home-user/home-user.html"*/'<!--\n  Generated template for the HomeUserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cidade da Coleta</ion-title>\n    <ion-buttons end>\n        <button ion-button (click)="sair()">\n            <ion-icon name="exit">Sair</ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-label text-wrap>Escolha a cidade desejada para registrar a coleta</ion-label>\n  <ion-list>\n    <ion-list-header>Cidades:</ion-list-header>\n        \n    <ion-item *ngFor="let city of cidadeLista$ | async" detail-push\n    navPush="HomeUserDataPage" [navParams]="{cidade:city.nome}" >\n      {{city.nome}}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/marcus/Documentos/fesf-sus/src/pages/home-user/home-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__service_cidade_list_cidade_list_service__["a" /* CidadeListService */]])
    ], HomeUserPage);
    return HomeUserPage;
}());

//# sourceMappingURL=home-user.js.map

/***/ })

});
//# sourceMappingURL=12.js.map