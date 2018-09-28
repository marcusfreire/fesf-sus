webpackJsonp([13],{

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeUserDataPageModule", function() { return HomeUserDataPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_user_data__ = __webpack_require__(469);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeUserDataPageModule = /** @class */ (function () {
    function HomeUserDataPageModule() {
    }
    HomeUserDataPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home_user_data__["a" /* HomeUserDataPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home_user_data__["a" /* HomeUserDataPage */]),
            ],
        })
    ], HomeUserDataPageModule);
    return HomeUserDataPageModule;
}());

//# sourceMappingURL=home-user-data.module.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeUserDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_coleta_list_coleta_list_service__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_toast_toast_service__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(279);
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
 * Generated class for the HomeUserDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeUserDataPage = /** @class */ (function () {
    function HomeUserDataPage(afAuth, navCtrl, navParams, coleta, toastService) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.coleta = coleta;
        this.toastService = toastService;
        this.item = {
            comentario: '',
            validar: false,
            cidade: '',
            user: '',
            data: '',
            A11: 0,
            A12: 0,
            A13: 0,
            A14: 0,
            A15: 0,
            A16: 0,
            A21: 0,
            A22: 0,
            A23: 0,
            A24: 0,
            A25: 0,
            A26: 0,
            A27: 0,
            A31: 0,
            A32: 0,
            A33: 0,
            A34: 0,
            A35: 0,
            A36: 0,
            A41: 0,
            A42: 0,
            A51: 0,
            A52: 0,
            A53: 0,
            A54: 0,
            A55: 0,
            A56: 0,
            A57: 0,
            A58: 0,
            A61: 0,
            A62: 0,
            A63: 0,
        };
        this.user = {};
        this.flag = false;
    }
    HomeUserDataPage.prototype.ionViewWillLoad = function () {
        this.user = this.navParams.get('User');
        this.item.cidade = this.user.cidade;
        console.log("HomeUser " + this.user.cidade);
        this.coletaLista$ = this.coleta.busca(this.user.cidade);
    };
    HomeUserDataPage.prototype.verificaCidade = function (data) {
        this.flag = this.coleta.busca2(this.user.cidade, data);
        if (this.item.data == '') {
            this.toastService.show('Campo Data vazio');
        }
        else if (this.flag) {
            this.toastService.show('Essa data já foi adicionada, edite abaixo');
        }
        else {
            if (this.item.data != '')
                this.item.user = this.user.email;
            this.navCtrl.push("TabsPage", { item: this.item });
        }
    };
    HomeUserDataPage.prototype.removeItem = function (item) {
        var _this = this;
        this.coleta.removeItem(item).then(function () {
            _this.toastService.show(" " + item.data + " ," + item.cidade + " Excluido!");
        });
    };
    HomeUserDataPage.prototype.sair = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.navCtrl.setRoot('LoginPage');
        });
    };
    HomeUserDataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-user-data',template:/*ion-inline-start:"/home/marcus/Documentos/fesf-sus/src/pages/home-user-data/home-user-data.html"*/'<!--\n  Generated template for the HomeUserDataPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{user.cidade}}</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="sair()">\n          <ion-icon name="exit">Sair</ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item text-wrap>\n      <p>Olá {{user.nome}},</p>\n      <p>Escolha a data da coleta para a cidade: {{user.cidade}}.</p>      \n  </ion-item>\n  <ion-item>\n      <ion-label>Data:</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="item.data"></ion-datetime>\n  </ion-item>\n  <ion-item>    \n      <button [color]="flag ? \'danger\' : \'secondary\'" ion-button full round (click)="verificaCidade(item.data)">\n        <ion-icon name="add-circle"> Adicionar Coleta </ion-icon>\n      </button>      \n  </ion-item>\n  <ion-list>  \n      <ion-item-sliding *ngFor="let amostra of (coletaLista$ | async)?.slice().reverse()" #slidingItem>\n          <ion-item>              \n            <ion-buttons end>\n                Data: {{amostra.data}}\n                <button [color]="amostra.validar ? \'secondary\' : \'light\'" ion-button>\n                  <ion-icon name="checkmark-circle"></ion-icon>\n                </button>\n            </ion-buttons>                    \n           </ion-item>  \n            <ion-item-options>\n              <button ion-button navPush="TabsEditPage" [navParams]="{item: amostra, email:user.email}"><ion-icon name="create"></ion-icon>Editar</button>\n              <button ion-button color="danger" (click)="removeItem(amostra)"><ion-icon name="trash"></ion-icon>Apagar</button>\n            </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/marcus/Documentos/fesf-sus/src/pages/home-user-data/home-user-data.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__service_coleta_list_coleta_list_service__["a" /* ColetaListService */], __WEBPACK_IMPORTED_MODULE_3__service_toast_toast_service__["a" /* ToastService */]])
    ], HomeUserDataPage);
    return HomeUserDataPage;
}());

//# sourceMappingURL=home-user-data.js.map

/***/ })

});
//# sourceMappingURL=13.js.map