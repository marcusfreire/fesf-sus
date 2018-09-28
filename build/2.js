webpackJsonp([2],{

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsValidarPageModule", function() { return TabsValidarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_validar__ = __webpack_require__(480);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsValidarPageModule = /** @class */ (function () {
    function TabsValidarPageModule() {
    }
    TabsValidarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs_validar__["a" /* TabsValidarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs_validar__["a" /* TabsValidarPage */]),
            ]
        })
    ], TabsValidarPageModule);
    return TabsValidarPageModule;
}());

//# sourceMappingURL=tabs-validar.module.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsValidarPage; });
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
 * Generated class for the TabsValidarPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsValidarPage = /** @class */ (function () {
    function TabsValidarPage(navCtrl, navParams, coleta, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.coleta = coleta;
        this.toast = toast;
        this.tab1Root = "SocialPage";
        this.tab2Root = "PrePartoPage";
        this.tab3Root = "PartoPage";
        this.tab4Root = "IntercorrenciasPage";
        this.tab5Root = "BoasPraticasPage";
        this.tab6Root = "PuerperioPage";
    }
    TabsValidarPage.prototype.ionViewWillLoad = function () {
        this.item = this.navParams.get('item');
        this.item.user = this.navParams.get('email');
        console.log("Carregando " + this.item.user);
    };
    TabsValidarPage.prototype.validar = function () {
        if (this.item.validar) {
            this.item.validar = false;
        }
        else {
            this.item.validar = true;
        }
    };
    TabsValidarPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    TabsValidarPage.prototype.editItem = function (item) {
        var _this = this;
        this.coleta.editItem(item).then(function (ref) {
            console.log(item.data + " na cidade de " + item.cidade + " salva!");
            _this.toast.show(item.data + ", Atualizado em " + item.cidade);
            _this.navCtrl.pop();
        });
    };
    TabsValidarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs-validar',template:/*ion-inline-start:"/home/marcus/Documentos/fesf-sus/src/pages/tabs-validar/tabs-validar.html"*/'<ion-tabs >\n    <ion-fab right middle>\n        <button ion-fab [color]="item.validar ? \'secondary\' : \'light\'" (click)="validar()"><ion-icon name="checkmark-circle"></ion-icon></button>\n        <button ion-fab color="primary" navPush="ColetaComentarioPage" [navParams]="{item: item}"><ion-icon name="list-box"></ion-icon></button>\n        <button ion-fab color="secondary" (click)="editItem(item)"><ion-icon name="create"></ion-icon></button>\n        <button ion-fab color="danger" (click)="cancelar()"><ion-icon name="close-circle"></ion-icon></button>\n    </ion-fab>\n    <ion-tab [root]="tab1Root" tabTitle="Social" tabIcon="home" [rootParams]="{item: item}"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Pré-Parto" tabIcon="information-circle" [rootParams]="{item: item}"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Parto" tabIcon="contacts" [rootParams]="{item: item}"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="Intercorrencias" tabIcon="bookmark" [rootParams]="{item: item}"></ion-tab>\n    <ion-tab [root]="tab5Root" tabTitle="Boas Práticas" tabIcon="body" [rootParams]="{item: item}"></ion-tab>\n    <ion-tab [root]="tab6Root" tabTitle="Puerpério" tabIcon="clipboard" [rootParams]="{item: item}"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/home/marcus/Documentos/fesf-sus/src/pages/tabs-validar/tabs-validar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__service_coleta_list_coleta_list_service__["a" /* ColetaListService */], __WEBPACK_IMPORTED_MODULE_3__service_toast_toast_service__["a" /* ToastService */]])
    ], TabsValidarPage);
    return TabsValidarPage;
}());

//# sourceMappingURL=tabs-validar.js.map

/***/ })

});
//# sourceMappingURL=2.js.map