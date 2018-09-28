webpackJsonp([16],{

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmValidarPageModule", function() { return AdmValidarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adm_validar__ = __webpack_require__(466);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdmValidarPageModule = /** @class */ (function () {
    function AdmValidarPageModule() {
    }
    AdmValidarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__adm_validar__["a" /* AdmValidarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__adm_validar__["a" /* AdmValidarPage */]),
            ],
        })
    ], AdmValidarPageModule);
    return AdmValidarPageModule;
}());

//# sourceMappingURL=adm-validar.module.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmValidarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_coleta_list_coleta_list_service__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_toast_toast_service__ = __webpack_require__(278);
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
 * Generated class for the AdmValidarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdmValidarPage = /** @class */ (function () {
    function AdmValidarPage(navCtrl, navParams, coleta, toastService) {
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
    }
    AdmValidarPage.prototype.ionViewWillLoad = function () {
        this.user = this.navParams.get('User');
        this.item.cidade = this.user.cidade;
        console.log("Coordenador validar " + this.user.cidade);
        this.coletaLista$ = this.coleta.busca(this.user.cidade);
    };
    AdmValidarPage.prototype.removeItem = function (item) {
        var _this = this;
        this.coleta.removeItem(item).then(function () {
            _this.toastService.show(" " + item.data + " ," + item.cidade + " Excluido!");
        });
    };
    AdmValidarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adm-validar',template:/*ion-inline-start:"/home/marcus/Documentos/fesf-sus/src/pages/adm-validar/adm-validar.html"*/'<!--\n  Generated template for the AdmValidarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{user.cidade}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>  \n    <ion-item-sliding *ngFor="let amostra of (coletaLista$ | async)?.slice().reverse()" #slidingItem>\n        <ion-item>              \n          <ion-buttons end>\n              Data: {{amostra.data}}\n              <button [color]="amostra.validar ? \'secondary\' : \'light\'" ion-button>\n                <ion-icon name="checkmark-circle"></ion-icon>\n              </button>\n          </ion-buttons>                    \n          </ion-item>  \n          <ion-item-options>\n            <button ion-button navPush="TabsValidarPage" [navParams]="{item: amostra, email:user.email}"><ion-icon name="create"></ion-icon>Editar</button>\n            <button ion-button color="danger" (click)="removeItem(amostra)"><ion-icon name="trash"></ion-icon>Apagar</button>\n          </ion-item-options>\n    </ion-item-sliding>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/home/marcus/Documentos/fesf-sus/src/pages/adm-validar/adm-validar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__service_coleta_list_coleta_list_service__["a" /* ColetaListService */], __WEBPACK_IMPORTED_MODULE_3__service_toast_toast_service__["a" /* ToastService */]])
    ], AdmValidarPage);
    return AdmValidarPage;
}());

//# sourceMappingURL=adm-validar.js.map

/***/ })

});
//# sourceMappingURL=16.js.map