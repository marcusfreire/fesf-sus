webpackJsonp([11],{

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntercorrenciasPageModule", function() { return IntercorrenciasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intercorrencias__ = __webpack_require__(471);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IntercorrenciasPageModule = /** @class */ (function () {
    function IntercorrenciasPageModule() {
    }
    IntercorrenciasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__intercorrencias__["a" /* IntercorrenciasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__intercorrencias__["a" /* IntercorrenciasPage */]),
            ],
        })
    ], IntercorrenciasPageModule);
    return IntercorrenciasPageModule;
}());

//# sourceMappingURL=intercorrencias.module.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntercorrenciasPage; });
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



var IntercorrenciasPage = /** @class */ (function () {
    function IntercorrenciasPage(navCtrl, navParams, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
    }
    IntercorrenciasPage.prototype.A41 = function () {
        this.alert.show('A41', 'Número de episotomias..');
    };
    IntercorrenciasPage.prototype.A42 = function () {
        this.alert.show('A42', 'Número de lacerações.');
    };
    IntercorrenciasPage.prototype.ionViewWillLoad = function () {
        this.item = this.navParams.get('item');
        console.log(this.item.A41);
    };
    IntercorrenciasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intercorrencias',template:/*ion-inline-start:"/home/marcus/Documentos/fesf-sus/src/pages/intercorrencias/intercorrencias.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Indicadores Intercorrências</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-item-divider>\n        <button item-start ion-button clear (click)="A41()">A41 : </button>\n        <ion-item>\n            <ion-input item-end [(ngModel)]="item.A41" type="number" min="0"></ion-input>\n        </ion-item>\n    </ion-item-divider>\n\n    <ion-item-divider>\n        <button item-start ion-button clear (click)="A42()">A42 : </button>\n        <ion-item>\n            <ion-input item-end [(ngModel)]="item.A42" type="number" min="0"></ion-input>\n        </ion-item>\n    </ion-item-divider>\n    \n</ion-content>\n'/*ion-inline-end:"/home/marcus/Documentos/fesf-sus/src/pages/intercorrencias/intercorrencias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__service_alert_alert_service__["a" /* AlertService */]])
    ], IntercorrenciasPage);
    return IntercorrenciasPage;
}());

//# sourceMappingURL=intercorrencias.js.map

/***/ })

});
//# sourceMappingURL=11.js.map