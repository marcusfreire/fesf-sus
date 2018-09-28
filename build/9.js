webpackJsonp([9],{

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartoPageModule", function() { return PartoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parto__ = __webpack_require__(473);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PartoPageModule = /** @class */ (function () {
    function PartoPageModule() {
    }
    PartoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__parto__["a" /* PartoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__parto__["a" /* PartoPage */]),
            ],
        })
    ], PartoPageModule);
    return PartoPageModule;
}());

//# sourceMappingURL=parto.module.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_alert_alert_service__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PartoPage = /** @class */ (function () {
    function PartoPage(navCtrl, navParams, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
    }
    PartoPage.prototype.A31 = function () {
        this.alert.show('A31', 'Número de partos realizados nos HPP\'s.');
    };
    PartoPage.prototype.A32 = function () {
        this.alert.show('A32', 'Número de partos naturais realizados pelo(a) enfermeiro(a) obstetra no período.');
    };
    PartoPage.prototype.A33 = function () {
        this.alert.show('A33', 'Número de partos ocorridos no HPP, no mês, de residentes em outros municípios.');
    };
    PartoPage.prototype.A34 = function () {
        this.alert.show('A34', 'Número de partos naturais realizados e registrados em AIH (Autorização de Internação Hospitalar) pelo(a) enfermeiro(a) obstetra no período.');
    };
    PartoPage.prototype.A35 = function () {
        this.alert.show('A35', 'Número de gestantes encaminhadas com previsão de risco no parto.');
    };
    PartoPage.prototype.A36 = function () {
        this.alert.show('A36', 'Número de natimortos em partos realizados pelo(a) enfermeiro(a) obstetra nos HPP\'s no período.');
    };
    PartoPage.prototype.ionViewWillLoad = function () {
        this.item = this.navParams.get('item');
    };
    PartoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-parto',template:/*ion-inline-start:"/home/marcus/Documentos/fesf-sus/src/pages/parto/parto.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Indicadores Parto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-item-divider>\n        <button item-start ion-button clear (click)="A31()">A31 : </button>\n        <ion-item>\n            <ion-input item-end [(ngModel)]="item.A31" type="number" min="0"></ion-input>\n        </ion-item>\n    </ion-item-divider>\n\n    <ion-item-divider>\n        <button item-start ion-button clear (click)="A32()">A32 : </button>\n        <ion-item>\n            <ion-input item-end [(ngModel)]="item.A32" type="number" min="0"></ion-input>\n        </ion-item>\n    </ion-item-divider>\n\n    <ion-item-divider>\n        <button item-start ion-button clear (click)="A33()">A33 : </button>\n        <ion-item>\n            <ion-input item-end [(ngModel)]="item.A33" type="number" min="0"></ion-input>\n        </ion-item>\n    </ion-item-divider>\n\n    <ion-item-divider>\n        <button item-start ion-button clear (click)="A34()">A34 : </button>\n        <ion-item>\n            <ion-input item-end [(ngModel)]="item.A34" type="number" min="0"></ion-input>\n        </ion-item>\n    </ion-item-divider>\n\n    <ion-item-divider>\n        <button item-start ion-button clear (click)="A35()">A35 : </button>\n        <ion-item>\n            <ion-input item-end [(ngModel)]="item.A35" type="number" min="0"></ion-input>\n        </ion-item>\n    </ion-item-divider>\n\n    <ion-item-divider>\n        <button item-start ion-button clear (click)="A36()">A36 : </button>\n        <ion-item>\n            <ion-input item-end [(ngModel)]="item.A36" type="number" min="0"></ion-input>\n        </ion-item>\n    </ion-item-divider>\n</ion-content>\n'/*ion-inline-end:"/home/marcus/Documentos/fesf-sus/src/pages/parto/parto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__service_alert_alert_service__["a" /* AlertService */]])
    ], PartoPage);
    return PartoPage;
}());

//# sourceMappingURL=parto.js.map

/***/ })

});
//# sourceMappingURL=9.js.map