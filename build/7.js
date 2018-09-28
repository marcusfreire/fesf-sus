webpackJsonp([7],{

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuerperioPageModule", function() { return PuerperioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__puerperio__ = __webpack_require__(475);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PuerperioPageModule = /** @class */ (function () {
    function PuerperioPageModule() {
    }
    PuerperioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__puerperio__["a" /* PuerperioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__puerperio__["a" /* PuerperioPage */]),
            ],
        })
    ], PuerperioPageModule);
    return PuerperioPageModule;
}());

//# sourceMappingURL=puerperio.module.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PuerperioPage; });
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



var PuerperioPage = /** @class */ (function () {
    function PuerperioPage(navCtrl, navParams, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
    }
    PuerperioPage.prototype.A61 = function () {
        this.alert.show('A61', 'Número de RN, de parto assistido por ENFO, que demandou avaliação com pediatra.');
    };
    PuerperioPage.prototype.A62 = function () {
        this.alert.show('A62', 'Número de recém-nascidos que foram vacinados (BCG e Hepatite B) no HPP.');
    };
    PuerperioPage.prototype.A63 = function () {
        this.alert.show('A63', 'Agendamento, pelos HPP\'s, da consulta puerperal na Unidade de Saúde da Família, no momento da alta.');
    };
    PuerperioPage.prototype.ionViewWillLoad = function () {
        this.item = this.navParams.get('item');
        console.log(this.item.A61);
    };
    PuerperioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-puerperio',template:/*ion-inline-start:"/home/marcus/Documentos/fesf-sus/src/pages/puerperio/puerperio.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Indicadores Puerpério</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item-divider>\n        <button item-start ion-button clear (click)="A61()">A61 : </button>\n        <ion-item>\n            <ion-input item-end [(ngModel)]="item.A61" type="number" min="0"></ion-input>\n        </ion-item>\n    </ion-item-divider>\n\n    <ion-item-divider>\n        <button item-start ion-button clear (click)="A62()">A62 : </button>\n        <ion-item>\n            <ion-input item-end [(ngModel)]="item.A62" type="number" min="0"></ion-input>\n        </ion-item>\n    </ion-item-divider>\n\n    <ion-item-divider>\n        <button item-start ion-button clear (click)="A63()">A63 : </button>\n        <ion-item>\n            <ion-input item-end [(ngModel)]="item.A63" type="number" min="0"></ion-input>\n        </ion-item>\n    </ion-item-divider>\n</ion-content>\n'/*ion-inline-end:"/home/marcus/Documentos/fesf-sus/src/pages/puerperio/puerperio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__service_alert_alert_service__["a" /* AlertService */]])
    ], PuerperioPage);
    return PuerperioPage;
}());

//# sourceMappingURL=puerperio.js.map

/***/ })

});
//# sourceMappingURL=7.js.map