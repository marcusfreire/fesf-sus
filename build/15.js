webpackJsonp([15],{

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoasPraticasPageModule", function() { return BoasPraticasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__boas_praticas__ = __webpack_require__(467);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BoasPraticasPageModule = /** @class */ (function () {
    function BoasPraticasPageModule() {
    }
    BoasPraticasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__boas_praticas__["a" /* BoasPraticasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__boas_praticas__["a" /* BoasPraticasPage */]),
            ],
        })
    ], BoasPraticasPageModule);
    return BoasPraticasPageModule;
}());

//# sourceMappingURL=boas-praticas.module.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoasPraticasPage; });
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



var BoasPraticasPage = /** @class */ (function () {
    function BoasPraticasPage(navCtrl, navParams, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
    }
    BoasPraticasPage.prototype.A51 = function () {
        this.alert.show('A51', 'Número de parturientes com acompanhante.');
    };
    BoasPraticasPage.prototype.A52 = function () {
        this.alert.show('A52', 'Número de parturientes com Doula, acompanhantes de parto profissionais.');
    };
    BoasPraticasPage.prototype.A53 = function () {
        this.alert.show('A53', 'Número de parturientes na posição de parir não supina.');
    };
    BoasPraticasPage.prototype.A54 = function () {
        this.alert.show('A54', 'Número de cortes tardios do cordão.');
    };
    BoasPraticasPage.prototype.A55 = function () {
        this.alert.show('A55', 'Número de cortes do cordão realizados pelo acompanhante ou pela própria parturiente.');
    };
    BoasPraticasPage.prototype.A56 = function () {
        this.alert.show('A56', 'Registro de Apagar no 1º e 5º minuto.');
    };
    BoasPraticasPage.prototype.A57 = function () {
        this.alert.show('A57', 'Contato pele a pele na sala de parto.');
    };
    BoasPraticasPage.prototype.A58 = function () {
        this.alert.show('A58', 'Número de parturientes que amamentaram em sala de parto.');
    };
    BoasPraticasPage.prototype.ionViewWillLoad = function () {
        this.item = this.navParams.get('item');
        console.log(this.item.A51);
    };
    BoasPraticasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-boas-praticas',template:/*ion-inline-start:"/home/marcus/Documentos/fesf-sus/src/pages/boas-praticas/boas-praticas.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Indicadores Boas Práticas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item-divider>\n        <button item-start ion-button clear (click)="A51()">A51 : </button>\n        <ion-item>          \n            <ion-input item-end [(ngModel)]="item.A51" type="number" min="0"></ion-input>\n        </ion-item>\n    </ion-item-divider>\n\n    <ion-item-divider>\n        <button item-start ion-button clear (click)="A52()">A52 : </button>\n        <ion-item>          \n            <ion-input item-end [(ngModel)]="item.A52" type="number" min="0"></ion-input>\n        </ion-item>\n    </ion-item-divider> \n\n    <ion-item-divider>\n        <button item-start ion-button clear (click)="A53()">A53 : </button>\n        <ion-item>          \n            <ion-input item-end [(ngModel)]="item.A53" type="number" min="0"></ion-input>\n        </ion-item>\n    </ion-item-divider>\n\n    <ion-item-divider>\n        <button item-start ion-button clear (click)="A54()">A54 : </button>\n        <ion-item>\n            <ion-input item-end [(ngModel)]="item.A54" type="number" min="0"></ion-input>\n        </ion-item>\n    </ion-item-divider>\n\n    <ion-item-divider>\n        <button item-start ion-button clear (click)="A55()">A55 : </button>\n        <ion-item>\n            <ion-input item-end [(ngModel)]="item.A55" type="number" min="0"></ion-input>\n        </ion-item>\n    </ion-item-divider>\n    \n    <ion-item-divider>\n        <button item-start ion-button clear (click)="A56()">A56 : </button>\n        <ion-item>\n            <ion-input item-end [(ngModel)]="item.A56" type="number" min="0"></ion-input>\n        </ion-item>\n    </ion-item-divider>\n\n    <ion-item-divider>\n        <button item-start ion-button clear (click)="A57()">A57 : </button>\n        <ion-item>\n            <ion-input item-end [(ngModel)]="item.A57" type="number" min="0"></ion-input>\n        </ion-item>\n    </ion-item-divider>\n\n    <ion-item-divider>    \n        <button item-start ion-button clear (click)="A58()">A58 : </button>\n        <ion-item>\n            <ion-input item-end [(ngModel)]="item.A58" type="number" min="0"></ion-input>\n        </ion-item>\n    </ion-item-divider>\n</ion-content>\n'/*ion-inline-end:"/home/marcus/Documentos/fesf-sus/src/pages/boas-praticas/boas-praticas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__service_alert_alert_service__["a" /* AlertService */]])
    ], BoasPraticasPage);
    return BoasPraticasPage;
}());

//# sourceMappingURL=boas-praticas.js.map

/***/ })

});
//# sourceMappingURL=15.js.map