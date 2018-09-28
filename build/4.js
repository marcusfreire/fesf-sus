webpackJsonp([4],{

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialPageModule", function() { return SocialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__social__ = __webpack_require__(478);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SocialPageModule = /** @class */ (function () {
    function SocialPageModule() {
    }
    SocialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__social__["a" /* SocialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__social__["a" /* SocialPage */]),
            ],
        })
    ], SocialPageModule);
    return SocialPageModule;
}());

//# sourceMappingURL=social.module.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialPage; });
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



/**
 * Generated class for the SocialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SocialPage = /** @class */ (function () {
    function SocialPage(navCtrl, navParams, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
    }
    SocialPage.prototype.A11 = function () {
        this.alert.show('A11', 'Número de gestantes com data provável do parto para o período atual que são mães solteiras.');
    };
    SocialPage.prototype.A12 = function () {
        this.alert.show('A12', 'Número de gestantes com data provável do parto para o perı́odo atual que têm quatro ou mais filhos.');
    };
    SocialPage.prototype.A13 = function () {
        this.alert.show('A13', 'Número de gestantes com data provável do parto para o perı́odo atual que perdeu algum filho com idade menor ou igual a um ano.');
    };
    SocialPage.prototype.A14 = function () {
        this.alert.show('A14', 'Número de gestantes com data provável do parto para o perı́odo atual que possuem uma renda familiar menor ou igual a um salário mı́nimo.');
    };
    SocialPage.prototype.A15 = function () {
        this.alert.show('A15', 'Número de gestantes com data provável do parto para o perı́odo atual que apresentam quadro de desnutrição ou tem algum filho desnutrido.');
    };
    SocialPage.prototype.A16 = function () {
        this.alert.show('A16', 'Número de gestantes analfabetas com data provável do parto para o perı́odo atual.');
    };
    SocialPage.prototype.ionViewWillLoad = function () {
        this.item = this.navParams.get('item');
        console.log("Social " + this.item.cidade);
    };
    SocialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-social',template:/*ion-inline-start:"/home/marcus/Documentos/fesf-sus/src/pages/social/social.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Indicadores Socioeconômicos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item-divider>\n        <button item-start ion-button clear (click)="A11()">A11 : </button>\n        <ion-item>\n            <ion-input item-end [(ngModel)]="item.A11" type="number" min="0"></ion-input>\n        </ion-item>\n    </ion-item-divider>\n\n    <ion-item-divider>\n        <button item-start ion-button clear (click)="A12()">A12 : </button>\n        <ion-item>\n            <ion-input item-end [(ngModel)]="item.A12" type="number" min="0"></ion-input>\n        </ion-item>\n    </ion-item-divider>\n\n    <ion-item-divider>\n        <button item-start ion-button clear (click)="A13()">A13 : </button>\n        <ion-item>\n            <ion-input item-end [(ngModel)]="item.A13" type="number" min="0"></ion-input>\n        </ion-item>\n    </ion-item-divider>\n\n    <ion-item-divider>\n        <button item-start ion-button clear (click)="A14()">A14 : </button>\n        <ion-item>\n            <ion-input item-end [(ngModel)]="item.A14" type="number" min="0"></ion-input>\n        </ion-item>\n    </ion-item-divider>\n\n    <ion-item-divider>\n        <button item-start ion-button clear (click)="A15()">A15 : </button>\n        <ion-item>\n            <ion-input item-end [(ngModel)]="item.A15" type="number" min="0"></ion-input>\n        </ion-item>\n    </ion-item-divider>\n\n    <ion-item-divider>\n        <button item-start ion-button clear (click)="A16()">A16 : </button>\n        <ion-item>\n            <ion-input item-end [(ngModel)]="item.A16" type="number" min="0"></ion-input>\n        </ion-item>  \n    </ion-item-divider>\n    \n</ion-content>'/*ion-inline-end:"/home/marcus/Documentos/fesf-sus/src/pages/social/social.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__service_alert_alert_service__["a" /* AlertService */]])
    ], SocialPage);
    return SocialPage;
}());

//# sourceMappingURL=social.js.map

/***/ })

});
//# sourceMappingURL=4.js.map