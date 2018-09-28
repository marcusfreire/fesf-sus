webpackJsonp([6],{

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarUsuarioPageModule", function() { return RegistrarUsuarioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registrar_usuario__ = __webpack_require__(476);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegistrarUsuarioPageModule = /** @class */ (function () {
    function RegistrarUsuarioPageModule() {
    }
    RegistrarUsuarioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__registrar_usuario__["a" /* RegistrarUsuarioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registrar_usuario__["a" /* RegistrarUsuarioPage */]),
            ],
        })
    ], RegistrarUsuarioPageModule);
    return RegistrarUsuarioPageModule;
}());

//# sourceMappingURL=registrar-usuario.module.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrarUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_toast_toast_service__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_cidade_list_cidade_list_service__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(75);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the RegistrarUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistrarUsuarioPage = /** @class */ (function () {
    function RegistrarUsuarioPage(afAuth, navCtrl, navParams, toast, listacidade, afDatebase) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.listacidade = listacidade;
        this.afDatebase = afDatebase;
        this.userLogado = {};
        this.user = {
            nome: '',
            cidade: '',
            email: '',
            coordenador: false,
        };
        this.err_texto = '';
        this.senha = '';
        this.cidadeLista$ = this.listacidade
            .getCidadeList()
            .snapshotChanges()
            .map(function (Changes) {
            return Changes.map(function (p) { return (__assign({ chave: p.payload.key }, p.payload.val())); });
        });
    }
    RegistrarUsuarioPage.prototype.ionViewWillLoad = function () {
        this.userLogado = this.navParams.get('User');
        this.user.cidade = this.userLogado.cidade;
        console.log("Cidade do coordenador: " + this.userLogado.cidade);
    };
    RegistrarUsuarioPage.prototype.registrar = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(user.email, this.senha).then(function (ref) {
                                console.log("Chave " + ref.uid);
                                _this.afDatebase.object("perfil/" + ref.uid).set(_this.user);
                                _this.toast.show("Adicionado " + user.email + " com Sucesso!");
                                _this.navCtrl.setRoot('AdmHomePage', { key: ref.key, User: _this.userLogado });
                            })];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        //Erro não utilizado, quando está tudo vazio
                        // auth/argument-error
                        if (e_1.code === 'auth/weak-password') {
                            this.err_texto = "Senha: Conter no mínimo 6 caracteres";
                            console.log("A senha deve conter no mínimo 6 caracteres");
                        }
                        else if (e_1.code === 'auth/invalid-email') {
                            this.err_texto = "O email informado é invalido";
                            console.log("O email informado é invalido");
                        }
                        else if (e_1.code === 'auth/argument-error') {
                            this.err_texto = "E-mail ou Senha não digitada";
                            console.log("E-mail ou Senha não digitada");
                        }
                        else if (e_1.code === 'auth/email-already-in-use') {
                            this.err_texto = "E-mail já está cadastrado";
                            console.log("E-mail já está cadastrado");
                        }
                        else {
                            this.err_texto = "Erro, por favor repita a operação";
                            console.log("Erro");
                        }
                        console.error(e_1.code);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegistrarUsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registrar-usuario',template:/*ion-inline-start:"/home/marcus/Documentos/fesf-sus/src/pages/registrar-usuario/registrar-usuario.html"*/'<!--\n  Generated template for the RegistrarUsuarioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Registrar Usuário</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label>Coordenador</ion-label>\n    <ion-checkbox [(ngModel)]="user.coordenador"></ion-checkbox>\n  </ion-item>\n\n  <ion-item>\n      <ion-label floating>Nome</ion-label>\n      <ion-input type="text" [(ngModel)]="user.nome" ></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Cidades:</ion-label>  \n    <ion-select [(ngModel)]="user.cidade">\n      <ion-option *ngFor="let city of cidadeLista$ | async" value="{{city.nome}}">{{city.nome}} </ion-option>\n    </ion-select>\n  </ion-item>  \n\n  <ion-item>\n        <ion-label floating>Endereço de Email</ion-label>\n        <ion-input type="text" [(ngModel)]="user.email" ></ion-input>\n    </ion-item>\n  \n    <ion-item>\n        <ion-label floating>Senha</ion-label>\n        <ion-input type="password" [(ngModel)]="senha" ></ion-input>\n    </ion-item>\n      \n    <ion-label color="danger">{{err_texto}}</ion-label>\n    \n    <button button color="secondary" ion-button full round\n      (click)="registrar(user)">Registrar</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/marcus/Documentos/fesf-sus/src/pages/registrar-usuario/registrar-usuario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__service_toast_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_4__service_cidade_list_cidade_list_service__["a" /* CidadeListService */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], RegistrarUsuarioPage);
    return RegistrarUsuarioPage;
}());

//# sourceMappingURL=registrar-usuario.js.map

/***/ })

});
//# sourceMappingURL=6.js.map