webpackJsonp([19],{

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmCidadePageModule", function() { return AdmCidadePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adm_cidade__ = __webpack_require__(463);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdmCidadePageModule = /** @class */ (function () {
    function AdmCidadePageModule() {
    }
    AdmCidadePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__adm_cidade__["a" /* AdmCidadePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__adm_cidade__["a" /* AdmCidadePage */]),
            ],
        })
    ], AdmCidadePageModule);
    return AdmCidadePageModule;
}());

//# sourceMappingURL=adm-cidade.module.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmCidadePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_cidade_list_cidade_list_service__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_toast_toast_service__ = __webpack_require__(278);
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
 * Generated class for the AdmCidadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdmCidadePage = /** @class */ (function () {
    function AdmCidadePage(navCtrl, navParams, listacidade, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.listacidade = listacidade;
        this.toast = toast;
        this.cidade = {
            nome: '',
            latitude: 0,
            longitude: 0,
        };
        this.cidadeLista$ = this.listacidade
            .getCidadeList()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    AdmCidadePage.prototype.removeItem = function (cidade) {
        var _this = this;
        this.listacidade.removeCidade(cidade).then(function () {
            _this.toast.show(" " + cidade.nome + " Excluido!");
        });
    };
    AdmCidadePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adm-cidade',template:/*ion-inline-start:"/home/marcus/Documentos/fesf-sus/src/pages/adm-cidade/adm-cidade.html"*/'<!--\n  Generated template for the AdmCidadePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Registrar Cidade</ion-title>\n    <ion-buttons end>\n        <button color="secondary" ion-button navPush="AdmAddCidadePage">\n          <ion-icon name="add-circle">ADD</ion-icon>\n        </button>\n    </ion-buttons>             \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>  \n  <ion-list>\n    <ion-list-header>Cidades Adicionadas:</ion-list-header>    \n    <ion-item-sliding *ngFor="let city of cidadeLista$ | async" #slidingItem>\n      <ion-item detail-push-show><p>Cidade: {{city.nome}}</p></ion-item>\n      <ion-item-options>\n        <button ion-button navPush="AdmEditCidadePage" [navParams]="{cidade: city}" > <ion-icon name="create"> </ion-icon>Editar</button>\n        <button ion-button color="danger" (click)="removeItem(city)"> <ion-icon name="trash"> </ion-icon>Apagar</button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/marcus/Documentos/fesf-sus/src/pages/adm-cidade/adm-cidade.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__service_cidade_list_cidade_list_service__["a" /* CidadeListService */], __WEBPACK_IMPORTED_MODULE_3__service_toast_toast_service__["a" /* ToastService */]])
    ], AdmCidadePage);
    return AdmCidadePage;
}());

//# sourceMappingURL=adm-cidade.js.map

/***/ })

});
//# sourceMappingURL=19.js.map