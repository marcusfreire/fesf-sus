webpackJsonp([18],{

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmEditCidadePageModule", function() { return AdmEditCidadePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adm_edit_cidade__ = __webpack_require__(464);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdmEditCidadePageModule = /** @class */ (function () {
    function AdmEditCidadePageModule() {
    }
    AdmEditCidadePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__adm_edit_cidade__["a" /* AdmEditCidadePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__adm_edit_cidade__["a" /* AdmEditCidadePage */]),
            ],
        })
    ], AdmEditCidadePageModule);
    return AdmEditCidadePageModule;
}());

//# sourceMappingURL=adm-edit-cidade.module.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmEditCidadePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_cidade_list_cidade_list_service__ = __webpack_require__(281);
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
 * Generated class for the AdmEditCidadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdmEditCidadePage = /** @class */ (function () {
    function AdmEditCidadePage(navCtrl, navParams, listacidade, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.listacidade = listacidade;
        this.toast = toast;
    }
    AdmEditCidadePage.prototype.ionViewWillLoad = function () {
        this.cidade = this.navParams.get('cidade');
        console.log(this.cidade);
    };
    AdmEditCidadePage.prototype.editCidade = function (cidade) {
        var _this = this;
        this.listacidade.editCidade(cidade).then(function () {
            _this.navCtrl.pop();
            _this.toast.show(cidade.nome + " Atualizado!");
        });
    };
    AdmEditCidadePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adm-edit-cidade',template:/*ion-inline-start:"/home/marcus/Documentos/fesf-sus/src/pages/adm-edit-cidade/adm-edit-cidade.html"*/'<!--\n  Generated template for the AdmEditCidadePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>AdmEditCidade</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item>\n        <ion-label color="primary" stacked>Nome da Cidade:</ion-label>\n        <ion-input type="text" [(ngModel)]="cidade.nome"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Latitude:</ion-label>\n        <ion-input type="number" [(ngModel)]="cidade.latitude"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Longitude:</ion-label>\n        <ion-input type="number" [(ngModel)]="cidade.longitude"></ion-input>\n      </ion-item>\n      <button ion-button block clear (click)="editCidade(cidade)">Salvar</button>\n</ion-content>\n'/*ion-inline-end:"/home/marcus/Documentos/fesf-sus/src/pages/adm-edit-cidade/adm-edit-cidade.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__service_cidade_list_cidade_list_service__["a" /* CidadeListService */], __WEBPACK_IMPORTED_MODULE_3__service_toast_toast_service__["a" /* ToastService */]])
    ], AdmEditCidadePage);
    return AdmEditCidadePage;
}());

//# sourceMappingURL=adm-edit-cidade.js.map

/***/ })

});
//# sourceMappingURL=18.js.map