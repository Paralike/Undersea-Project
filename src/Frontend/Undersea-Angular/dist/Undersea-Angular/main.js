(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | features-pages-auth-auth-module */ "features-pages-auth-auth-module").then(__webpack_require__.bind(null, /*! ./features/pages/auth/auth.module */ "./src/app/features/pages/auth/auth.module.ts")).then(m => m.AuthModule)
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: 'main',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./features/pages/main/main.module */ "./src/app/features/pages/main/main.module.ts")).then(m => m.MainModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'Undersea-Angular';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _features_pages_main_main_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/pages/main/main.module */ "./src/app/features/pages/main/main.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var _features_pages_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/pages/auth/interceptor */ "./src/app/features/pages/auth/interceptor.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"],
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__["JwtHelperService"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _features_pages_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["TokenInterceptor"], multi: true },
        _shared__WEBPACK_IMPORTED_MODULE_10__["ArmyClient"],
        _shared__WEBPACK_IMPORTED_MODULE_10__["CityClient"],
        _shared__WEBPACK_IMPORTED_MODULE_10__["GameClient"],
        _shared__WEBPACK_IMPORTED_MODULE_10__["UpgradeTypeClient"],
        _shared__WEBPACK_IMPORTED_MODULE_10__["UpgradesClient"],
        _shared__WEBPACK_IMPORTED_MODULE_10__["BuildingTypeClient"],
        _shared__WEBPACK_IMPORTED_MODULE_10__["SpyClient"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _features_pages_main_main_module__WEBPACK_IMPORTED_MODULE_4__["MainModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__["JwtModule"].forRoot({
                config: {
                    tokenGetter: () => {
                        return localStorage.getItem('access_token');
                    },
                    whitelistedDomains: ['localhost:4200']
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _features_pages_main_main_module__WEBPACK_IMPORTED_MODULE_4__["MainModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__["JwtModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _features_pages_main_main_module__WEBPACK_IMPORTED_MODULE_4__["MainModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__["JwtModule"].forRoot({
                        config: {
                            tokenGetter: () => {
                                return localStorage.getItem('access_token');
                            },
                            whitelistedDomains: ['localhost:4200']
                        }
                    })
                ],
                providers: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"],
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__["JwtHelperService"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _features_pages_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["TokenInterceptor"], multi: true },
                    _shared__WEBPACK_IMPORTED_MODULE_10__["ArmyClient"],
                    _shared__WEBPACK_IMPORTED_MODULE_10__["CityClient"],
                    _shared__WEBPACK_IMPORTED_MODULE_10__["GameClient"],
                    _shared__WEBPACK_IMPORTED_MODULE_10__["UpgradeTypeClient"],
                    _shared__WEBPACK_IMPORTED_MODULE_10__["UpgradesClient"],
                    _shared__WEBPACK_IMPORTED_MODULE_10__["BuildingTypeClient"],
                    _shared__WEBPACK_IMPORTED_MODULE_10__["SpyClient"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");






class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, providers: [
        { provide: _shared__WEBPACK_IMPORTED_MODULE_4__["API_BASE_URL"], useValue: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ApiBaseUrl }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
        ], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]], exports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
                ],
                exports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
                ],
                providers: [
                    { provide: _shared__WEBPACK_IMPORTED_MODULE_4__["API_BASE_URL"], useValue: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ApiBaseUrl }
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/services/signal-r.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/signal-r.service.ts ***!
  \***************************************************/
/*! exports provided: SignalRService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalRService", function() { return SignalRService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aspnet/signalr */ "./node_modules/@aspnet/signalr/dist/esm/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




class SignalRService {
    constructor() {
        this.signalReceived = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.buildConnection = () => {
            const signalUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ApiBaseUrl + '/signalHub';
            this.hubConnection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["HubConnectionBuilder"]()
                .withUrl(signalUrl)
                .build();
        };
        this.startConnection = () => {
            this.hubConnection
                .start()
                .then(() => {
                console.log('Connection Started...');
                this.registerSignalEvents();
            })
                .catch(err => {
                console.log('Error while starting connection' + err);
            });
        };
        this.buildConnection();
        this.startConnection();
    }
    registerSignalEvents() {
        this.hubConnection.on('NextTurn', (data) => {
            this.signalReceived.emit(data);
        });
    }
}
SignalRService.ɵfac = function SignalRService_Factory(t) { return new (t || SignalRService)(); };
SignalRService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SignalRService, factory: SignalRService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignalRService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/features/army/components/army.component.ts":
/*!************************************************************!*\
  !*** ./src/app/features/army/components/army.component.ts ***!
  \************************************************************/
/*! exports provided: ArmyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmyComponent", function() { return ArmyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _service_feature_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/feature.service */ "./src/app/features/service/feature.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");










function ArmyComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Birtokodban:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "T\u00E1mad\u00E1s/V\u00E9dekez\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Zsold (/k\u00F6r/p\u00E9ld\u00E1ny");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Ell\u00E1tm\u00E1ny");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u00C1r");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArmyComponent_div_6_Template_div_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.minusUnit(i_r2); })("mousedown", function ArmyComponent_div_6_Template_div_mousedown_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.mousDown(0 - 1, i_r2); })("mouseup", function ArmyComponent_div_6_Template_div_mouseup_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.mouseup(); })("mouseleave", function ArmyComponent_div_6_Template_div_mouseleave_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.mouseup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArmyComponent_div_6_Template_div_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.plusUnit(i_r2); })("mousedown", function ArmyComponent_div_6_Template_div_mousedown_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.mousDown(1, i_r2); })("mouseup", function ArmyComponent_div_6_Template_div_mouseup_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.mouseup(); })("mouseleave", function ArmyComponent_div_6_Template_div_mouseleave_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.mouseup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " + ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/images/", unit_r1.name, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", unit_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.data.units[i_r2].unitCount, " db ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", unit_r1.damage, "/", unit_r1.defense, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", unit_r1.foodNecessity, " ", ctx_r0.gyongy, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", unit_r1.foodNecessity, " Korall ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", unit_r1.price, " ", ctx_r0.gyongy, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.addUnit[unit_r1.unitType].unitCount, " ");
} }
class ArmyComponent {
    constructor(data, featureService, dialogRef, snackbar) {
        this.data = data;
        this.featureService = featureService;
        this.dialogRef = dialogRef;
        this.snackbar = snackbar;
        this.gyongy = 'Gyöngy';
        this.addUnit = data.units.map((x) => (Object.assign({}, x)));
        this.addUnit.forEach(unit => unit.unitCount = 0);
    }
    ngOnInit() {
        this.featureService.getArmy().subscribe(res => this.army = res, (err) => {
            console.log(err);
        });
        console.log('ARMY', this.army);
    }
    plusUnit(unit) {
        this.addUnit[unit].unitCount++;
    }
    minusUnit(unit) {
        if (this.addUnit[unit].unitCount > 0) {
            this.addUnit[unit].unitCount--;
        }
    }
    sendData() {
        if (!this.addUnit.some(x => x.unitCount !== 0)) {
            this.snackbar.open('Válaszd ki mit szeretnél vásárolni!', 'Bezár', {
                duration: 3000
            });
        }
        else {
            this.featureService.purchaseUnits(this.addUnit).subscribe(() => {
                this.dialogRef.close();
                this.snackbar.open('Sikeres vásárlás!', 'Bezár', {
                    duration: 3000
                });
            }, (err) => {
                this.snackbar.open(JSON.parse(err.response).Message, 'Bezár', {
                    duration: 5000
                });
            });
        }
    }
    mouseup() {
        if (this.timeoutHandler || this.timeoutHandler1) {
            clearInterval(this.timeoutHandler);
            clearTimeout(this.timeoutHandler1);
            this.timeoutHandler = null;
            this.timeoutHandler1 = null;
        }
    }
    mousDown(add, unit) {
        this.timeoutHandler1 = setTimeout(() => {
            this.timeoutHandler = setInterval(() => {
                if (this.addUnit[unit].unitCount > 2 || add === 1) {
                    this.addUnit[unit].unitCount += 3 * add;
                }
            }, 1);
        }, 500);
    }
}
ArmyComponent.ɵfac = function ArmyComponent_Factory(t) { return new (t || ArmyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_feature_service__WEBPACK_IMPORTED_MODULE_2__["FeatureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
ArmyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArmyComponent, selectors: [["app-army"]], decls: 11, vars: 1, consts: [[1, "flex"], [2, "margin-top", "0.5vh", "margin-bottom", "0.5vh"], [2, "font-family", "open-sans-bold", "margin", "0", "font-size", "16px"], [1, "main-content"], ["class", "content", 4, "ngFor", "ngForOf"], [1, "buttons-div"], ["mat-button", "", "id", "armyButton", 1, "army-button", 3, "click"], [1, "content"], [1, "img-card"], [2, "width", "3vw", 3, "src"], [1, "unit-name"], [1, "unit-content"], [1, "descriptions"], [1, "values"], [1, "quantity"], [1, "attack/def"], [1, "pay"], [1, "food"], [1, "price"], [1, "plus-minus"], [1, "plus-icon", 3, "click", "mousedown", "mouseup", "mouseleave"]], template: function ArmyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Sereg ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Kattints r\u00E1, amelyiket szeretn\u00E9d megvenni. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ArmyComponent_div_6_Template, 36, 11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArmyComponent_Template_button_click_9_listener() { return ctx.sendData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Megveszem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.army);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"]], styles: [".content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 1;\n  width: 15vw;\n  height: 35vh;\n  min-height: 300px;\n  background-color: #03255f;\n  margin-bottom: 0.4vh;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-family: baloo;\n  font-size: 2vw;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  align-items: center;\n  overflow: auto;\n  margin: 1vw;\n  margin-right: 0;\n  background-color: #03255f;\n  height: 400px;\n  width: 46vw;\n  font-size: 0.8vw;\n}\n\n.buttons-div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  margin-top: 4vh;\n  background-color: #03255f;\n  height: 5vh;\n  width: 100%;\n}\n\n  .mat-dialog-container {\n  background-color: #03255f !important;\n  color: white;\n  border-radius: 16px;\n}\n\n.img-card[_ngcontent-%COMP%] {\n  background: #9ffff0 0% 0% no-repeat padding-box;\n  border: 2px solid #428dff;\n  border-radius: 14px;\n  opacity: 1;\n}\n\n.army-button[_ngcontent-%COMP%] {\n  display: block;\n  width: 10vw;\n  background: transparent linear-gradient(258deg, #9ffff0 0%, #6beee9 36%, #0fcfde 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #3b7dbd;\n  border-radius: 90px;\n  border: none;\n  font-family: baloo;\n  font-size: 0.8vw;\n  letter-spacing: 0px;\n  color: #001234;\n  padding: 0.5%;\n  margin-bottom: 1%;\n}\n\n.unit-name[_ngcontent-%COMP%] {\n  margin: 2vh;\n  font-family: open-sans-bold;\n  font-size: 0.8vw;\n}\n\n.unit-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  justify-content: space-between;\n  font-family: open-sans-regular;\n  font-size: 0.8vw;\n}\n\n.descriptions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  width: 10vw;\n}\n\n.values[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: flex-start;\n}\n\ndiv[_ngcontent-%COMP%]:focus {\n  background-color: rgba(255, 255, 255, 0.12);\n  outline: none;\n  border-radius: 16px;\n}\n\n.price[_ngcontent-%COMP%] {\n  margin-bottom: 0.5vh;\n}\n\n.plus-minus[_ngcontent-%COMP%] {\n  margin: 2vh;\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  justify-content: space-around;\n  width: 10vw;\n}\n\n.plus-icon[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #9FFFF0;\n  width: 25px;\n  height: 25px;\n  border-radius: 13px;\n  color: #03255f;\n  font-weight: bold;\n  font-size: 0.8vw;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n  .mat-snack-bar-container {\n  background-color: #03255F !important;\n  color: #9FFFF0;\n  font-weight: bold;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px #03255f;\n  border-radius: 2px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #3f68ae;\n  border-radius: 2px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #03255f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvYXJteS9jb21wb25lbnRzL2FybXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FBQUo7O0FBWUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFUSjs7QUFXQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFSSjs7QUFXQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQVJKOztBQVdBO0VBQ0ksb0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFSSjs7QUFVQTtFQUNJLCtDQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFQSjs7QUFXQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0hBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFSSjs7QUFXQTtFQUNJLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FBUko7O0FBV0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQVJKOztBQVVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUFQSjs7QUFTQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUFOSjs7QUFTQTtFQUNJLDJDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBTko7O0FBU0E7RUFDSSxvQkFBQTtBQU5KOztBQVNBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FBTko7O0FBU0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0FBTko7O0FBU0E7RUFDSSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQU5KOztBQVNFO0VBQ0UsVUFBQTtBQU5KOztBQVNFLFVBQUE7O0FBQ0E7RUFDRSxpQ0FBQTtFQUNBLGtCQUFBO0FBTko7O0FBU0UsV0FBQTs7QUFDQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFOSjs7QUFTRSxvQkFBQTs7QUFDQTtFQUNFLG1CQUFBO0FBTkoiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9hcm15L2NvbXBvbmVudHMvYXJteS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIHdpZHRoOiAxNXZ3O1xyXG4gICAgaGVpZ2h0OiAzNXZoO1xyXG4gICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMyNTVmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC40dmg7XHJcbiAgICBcclxufVxyXG5cclxuLy8gLmZsZXgge1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuLy8gICAgIGhlaWdodDogODB2aDtcclxuLy8gfVxyXG5cclxuaDJ7XHJcbiAgICBmb250LWZhbWlseTogYmFsb287XHJcbiAgICBmb250LXNpemU6IDJ2dztcclxufVxyXG4ubWFpbi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBtYXJnaW46IDF2dztcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzI1NWY7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgd2lkdGg6IDQ2dnc7XHJcbiAgICBmb250LXNpemU6IDAuOHZ3O1xyXG59XHJcblxyXG4uYnV0dG9ucy1kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA0dmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMyNTVmO1xyXG4gICAgaGVpZ2h0OiA1dmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMyNTVmICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG59XHJcbi5pbWctY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOWZmZmYwIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0MjhkZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIFxyXG59XHJcblxyXG4uYXJteS1idXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTB2dztcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgyNThkZWcsICM5ZmZmZjAgMCUsICM2YmVlZTkgMzYlLCAjMGZjZmRlIDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMzYjdkYmQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5MHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6IGJhbG9vO1xyXG4gICAgZm9udC1zaXplOiAwLjh2dztcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICBjb2xvcjogIzAwMTIzNDtcclxuICAgIHBhZGRpbmc6IDAuNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxufVxyXG5cclxuLnVuaXQtbmFtZSB7XHJcbiAgICBtYXJnaW46IDJ2aDtcclxuICAgIGZvbnQtZmFtaWx5OiBvcGVuLXNhbnMtYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMC44dnc7XHJcbn1cclxuXHJcbi51bml0LWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZvbnQtZmFtaWx5OiBvcGVuLXNhbnMtcmVndWxhcjtcclxuICAgIGZvbnQtc2l6ZTogMC44dnc7XHJcbn1cclxuLmRlc2NyaXB0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgd2lkdGg6IDEwdnc7XHJcbn1cclxuLnZhbHVlcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuZGl2OmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjZmZmZiwgJGFscGhhOiAwLjEyKTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG59XHJcblxyXG4ucHJpY2Uge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41dmg7XHJcbn1cclxuXHJcbi5wbHVzLW1pbnVzIHtcclxuICAgIG1hcmdpbjogMnZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgd2lkdGg6IDEwdnc7XHJcbn1cclxuXHJcbi5wbHVzLWljb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUZGRkYwO1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gICAgY29sb3I6ICMwMzI1NWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMC44dnc7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc25hY2stYmFyLWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzI1NUYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjOUZGRkYwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRyYWNrICovXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4ICMwMzI1NWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEhhbmRsZSAqL1xyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzNmNjhhZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICB9XHJcbiAgXHJcbiAgLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDMyNTVmO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArmyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-army',
                templateUrl: './army.component.html',
                styleUrls: ['./army.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _service_feature_service__WEBPACK_IMPORTED_MODULE_2__["FeatureService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/attack/components/attack.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/features/attack/components/attack.component.ts ***!
  \****************************************************************/
/*! exports provided: AttackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttackComponent", function() { return AttackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _service_feature_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/feature.service */ "./src/app/features/service/feature.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");













const _c0 = ["matslider"];
const _c1 = ["matslider2"];
const _c2 = ["matslider3"];
const _c3 = ["matslider4"];
function AttackComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AttackComponent_th_9_Template_input_input_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.search(_r10.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AttackComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.username, " ");
} }
function AttackComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 28);
} }
function AttackComponent_td_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AttackComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AttackComponent_td_13_div_1_Template, 5, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.selected);
} }
function AttackComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 35);
} }
const _c4 = function (a0) { return { "onSelect": a0 }; };
function AttackComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttackComponent_tr_15_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const row_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.onSelect(row_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r16 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c4, ctx_r5.selectedUserId == row_r16.id));
} }
class AttackComponent {
    constructor(data, el, snackbar, service, dialogRef) {
        this.data = data;
        this.el = el;
        this.snackbar = snackbar;
        this.service = service;
        this.dialogRef = dialogRef;
        this.displayedColumns = ['target', 'choice'];
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.army = data.units.map((x) => (Object.assign({}, x)));
        this.army.forEach(unit => unit.unitCount = 0);
    }
    ngOnInit() {
        this.searchUsers('');
        this.name = null;
        this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((term) => this.service.getAttack(term))).subscribe(res => {
            this.userList = res;
        });
        this.selected = false;
    }
    onSelect(row) {
        console.log('ROW', row);
        this.selected = true;
        this.selectedUserId = row.id;
        console.log(row.id);
    }
    sendData() {
        if (this.selected) {
            this.army[0].unitCount = this.slider.value;
            this.army[1].unitCount = this.slider2.value;
            this.army[2].unitCount = this.slider3.value;
            this.army[3].unitCount = this.slider4.value;
            console.log(this.army, this.selectedUserId);
            this.service.sendAttack(this.selectedUserId, this.army).subscribe(() => {
                this.dialogRef.close();
                this.snackbar.open('Sikeres támadás!', 'Bezár', {
                    duration: 3000
                });
            }, (err) => {
                this.snackbar.open(JSON.parse(err.response).Message, 'Bezár', {
                    duration: 5000
                });
            });
        }
        else if (this.selected === false) {
            this.snackbar.open('Válaszd ki kit szeretnél támadni!', 'Bezár', {
                duration: 3000
            });
        }
    }
    search(term) {
        this.searchTerms.next(term);
    }
    searchUsers(name) {
        this.service.getAttack(name).subscribe(res => {
            this.userList = res;
        });
        if (name == null) {
            this.snackbar.open('A név null!', 'Bezár', {
                duration: 3000
            });
        }
    }
}
AttackComponent.ɵfac = function AttackComponent_Factory(t) { return new (t || AttackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_feature_service__WEBPACK_IMPORTED_MODULE_5__["FeatureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
AttackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AttackComponent, selectors: [["app-attack"]], viewQuery: function AttackComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slider = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slider2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slider3 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slider4 = _t.first);
    } }, decls: 65, vars: 11, consts: [[1, "container"], [1, "tables"], [1, "infos"], ["mat-table", "", 1, "left-table", 3, "dataSource"], ["matColumnDef", "target"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "width: 8vw;", 4, "matCellDef"], ["matColumnDef", "choice"], ["mat-header-cell", "", "style", "width: 4vw;", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", "click", 4, "matRowDef", "matRowDefColumns"], [1, "infos-2"], ["src", "assets/images/L\u00E9zerc\u00E1pa.svg"], [2, "width", "10px"], ["min", "0", "step", "1", "value", "0", 1, "slider", 3, "max"], ["matslider", ""], ["src", "assets/images/Rohamf\u00F3ka.svg"], ["matslider2", ""], ["src", "assets/images/Csatacsik\u00F3.svg"], ["matslider3", ""], ["matslider4", ""], [1, "button"], ["mat-button", "", 2, "color", "#03255F", 3, "click"], ["mat-header-cell", ""], ["type", "search", "name", "searchBar", "placeholder", "Felhaszn\u00E1l\u00F3n\u00E9v", 1, "search", 3, "input"], ["searchbox", ""], ["mat-cell", "", 2, "width", "8vw"], ["mat-header-cell", "", 2, "width", "4vw"], ["mat-cell", ""], [4, "ngIf"], [1, "checkmark"], [1, "checkmark-circle"], [1, "checkmark-stem"], [1, "checkmark-kick"], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass", "click"]], template: function AttackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "T\u00E1mad\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "1. Jel\u00F6ld ki, kit szeretn\u00E9l megt\u00E1madni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AttackComponent_th_9_Template, 3, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AttackComponent_td_10_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AttackComponent_th_12_Template, 1, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AttackComponent_td_13_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AttackComponent_tr_14_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AttackComponent_tr_15_Template, 1, 3, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "2. \u00C1ll\u00EDtsd be, kiket k\u00FCldessz harcba!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "L\u00E9zerc\u00E1pa: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " p\u00E9ld\u00E1ny ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "mat-slider", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Rohamf\u00F3ka: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " p\u00E9ld\u00E1ny ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "mat-slider", 15, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Csatacsik\u00F3: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " p\u00E9ld\u00E1ny ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "mat-slider", 15, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Hadvez\u00E9r: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " p\u00E9ld\u00E1ny ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "mat-slider", 15, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AttackComponent_Template_button_click_63_listener() { return ctx.sendData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Megt\u00E1madom!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.userList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r6 == null ? null : _r6.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx.data.units[0].unitCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r7 == null ? null : _r7.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx.data.units[1].unitCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r8 == null ? null : _r8.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx.data.units[2].unitCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r9 == null ? null : _r9.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx.data.units[3].unitCount);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRowDef"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSlider"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRow"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"]], styles: ["html[_ngcontent-%COMP%] {\n  background-color: #03255f;\n  position: relative;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  text-align: left;\n  flex-direction: column;\n  align-items: center;\n  height: 40%;\n}\n\n.tables[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin-left: 12%;\n  font-family: baloo;\n  font-size: 2vw;\n  letter-spacing: 0px;\n  color: #ffffff;\n  opacity: 1;\n}\n\n.search[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  font-family: baloo;\n  border-radius: 15px;\n  color: #1c3e76;\n  font-size: 1vw;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-radius: 20px;\n  opacity: 0.39;\n  margin-right: 20%;\n  outline: none;\n}\n\n.infos-2[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 2.625vw;\n  height: 45px;\n  background: #9ffff0 0% 0% no-repeat padding-box;\n  border: 2px solid #428dff;\n  border-radius: 14px;\n  opacity: 1;\n  padding: 3%;\n  zoom: 0.8;\n  margin: 3%;\n}\n\n.infos-2[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-around;\n  font-family: open-sans-regular;\n}\n\n.infos[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 40vh;\n  font-family: open-sans-bold;\n  font-size: 1vw;\n  width: 25vw;\n}\n\n.infos-2[_ngcontent-%COMP%] {\n  font-family: open-sans-bold;\n  font-size: 1vw;\n  height: 40vh;\n  overflow: auto;\n}\n\n.slider[_ngcontent-%COMP%] {\n  width: 30px;\n}\n\n.choice[_ngcontent-%COMP%] {\n  width: 5vw;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background: transparent linear-gradient(258deg, #9FFFF0 0%, #6BEEE9 36%, #0FCFDE 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #3B7DBD;\n  border-radius: 90px;\n  opacity: 1;\n  font-family: baloo;\n  padding-top: 0.2%;\n  text-align: center;\n  margin-top: 5%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n  width: 8vw;\n  height: 5vh;\n  font-size: 1vw;\n}\n\n.button[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\nmat-divider[_ngcontent-%COMP%] {\n  margin: 1vh;\n  width: 100%;\n}\n\n.infos[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.left-table[_ngcontent-%COMP%] {\n  background-color: #03255F !important;\n}\n\n.onSelect[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 22px;\n  height: 22px;\n  \n  \n  transform: rotate(45deg);\n}\n\n.onSelect[_ngcontent-%COMP%]   .checkmark-circle[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 22px;\n  height: 22px;\n  background-color: #9FFFF0;\n  border-radius: 11px;\n  left: 0;\n  top: 0;\n}\n\n.onSelect[_ngcontent-%COMP%]   .checkmark-stem[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 3px;\n  height: 9px;\n  background-color: #03255F;\n  left: 11px;\n  top: 6px;\n}\n\n.onSelect[_ngcontent-%COMP%]   .checkmark-kick[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 3px;\n  height: 3px;\n  background-color: #03255F;\n  left: 8px;\n  top: 12px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px #03255F;\n  border-radius: 2px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #3F68AE;\n  border-radius: 2px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #03255F;\n}\n\n  .mat-slider.mat-slider-horizontal .mat-slider-track-fill {\n  background-color: #9FFFF0;\n}\n\n  .mat-accent .mat-slider-thumb {\n  background-color: #9FFFF0;\n  border: solid 2px #9FFFF0;\n}\n\n  .mat-snack-bar-container {\n  background-color: #03255F !important;\n  color: #9FFFF0;\n  font-weight: bold;\n}\n\n  .mat-dialog-container {\n  background-color: #03255F !important;\n  color: white;\n  border-radius: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvYXR0YWNrL2NvbXBvbmVudHMvYXR0YWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBREo7O0FBS0E7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUFGSjs7QUFLQTtFQUVJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUhKOztBQU1BO0VBQ0ksMkJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFISjs7QUFLQTtFQUNJLFdBQUE7QUFGSjs7QUFJQTtFQUNJLFVBQUE7QUFESjs7QUFJQztFQUNHLGtIQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFESjs7QUFLQztFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRkw7O0FBTUM7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQUhMOztBQU9BO0VBQ0ksaUJBQUE7QUFKSjs7QUFPQztFQUNHLG9DQUFBO0FBSko7O0FBV0k7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQzhCLFNBQUE7RUFDSSwwQkFBQTtFQUNsQyx3QkFBQTtBQU5SOztBQVNJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBQVBSOztBQVVJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUFSUjs7QUFXSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FBVFI7O0FBWUM7RUFDRyxVQUFBO0FBVEo7O0FBWUUsVUFBQTs7QUFDQTtFQUNFLGlDQUFBO0VBQ0Esa0JBQUE7QUFUSjs7QUFZRSxXQUFBOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQVRKOztBQVlFLG9CQUFBOztBQUNBO0VBQ0UsbUJBQUE7QUFUSjs7QUFZQTtFQUNJLHlCQUFBO0FBVEo7O0FBV0E7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FBUko7O0FBV0U7RUFDRSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQVJKOztBQVdBO0VBQ0ksb0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFSSiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2F0dGFjay9jb21wb25lbnRzL2F0dGFjay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzMjU1ZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgXHJcbn1cclxuXHJcbi50YWJsZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcblxyXG5oMSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTIlO1xyXG4gICAgZm9udC1mYW1pbHk6IGJhbG9vO1xyXG4gICAgZm9udC1zaXplOiAydnc7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgXHJcbn1cclxuLnNlYXJjaCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBiYWxvbztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBjb2xvcjogIzFjM2U3NjtcclxuICAgIGZvbnQtc2l6ZTogMXZ3O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgb3BhY2l0eTogMC4zOTtcclxuICAgIG1hcmdpbi1yaWdodDogMjAlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuXHJcbi5pbmZvcy0yID4gdGFibGUgPiB0ciA+IHRkID4gaW1nIHtcclxuICAgIHdpZHRoOiAyLjYyNXZ3O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzlmZmZmMCAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNDI4ZGZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxuICAgIHpvb206IDAuODtcclxuICAgIG1hcmdpbjogMyU7XHJcbn1cclxuXHJcbi5pbmZvcy0yID4gdGFibGUgPiB0ciA+IHRkICB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGZvbnQtZmFtaWx5OiBvcGVuLXNhbnMtcmVndWxhcjtcclxuIH1cclxuICAgXHJcbi5pbmZvc3tcclxuICAgIFxyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIGhlaWdodDogNDB2aDtcclxuICAgIGZvbnQtZmFtaWx5OiBvcGVuLXNhbnMtYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMXZ3O1xyXG4gICAgd2lkdGg6IDI1dnc7ICAgXHJcbn1cclxuXHJcbi5pbmZvcy0yIHtcclxuICAgIGZvbnQtZmFtaWx5OiBvcGVuLXNhbnMtYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMXZ3O1xyXG4gICAgaGVpZ2h0OiA0MHZoO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLnNsaWRlciB7XHJcbiAgICB3aWR0aDogMzBweDtcclxufVxyXG4uY2hvaWNlIHtcclxuICAgIHdpZHRoOiA1dnc7XHJcbn1cclxuXHJcbiBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDI1OGRlZywgIzlGRkZGMCAwJSwgIzZCRUVFOSAzNiUsICMwRkNGREUgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzNCN0RCRDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDkwcHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZm9udC1mYW1pbHk6IGJhbG9vO1xyXG4gICAgcGFkZGluZy10b3A6IDAuMiU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogOHZ3O1xyXG4gICAgaGVpZ2h0OiA1dmg7XHJcbiAgICBmb250LXNpemU6IDF2dztcclxuXHJcbiB9XHJcblxyXG4gLmJ1dHRvbiB7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBcclxuIH1cclxuXHJcbiBtYXQtZGl2aWRlciB7XHJcbiAgICAgbWFyZ2luOiAxdmg7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiB9XHJcblxyXG5cclxuLmluZm9zID4gc3BhbiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuIC5sZWZ0LXRhYmxle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzMjU1RiAhaW1wb3J0YW50O1xyXG4gICAgXHJcblxyXG5cclxuIH1cclxuXHJcbiAub25TZWxlY3R7XHJcbiAgICAuY2hlY2ttYXJrIHtcclxuICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMjJweDtcclxuICAgICAgICBoZWlnaHQ6MjJweDtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyAvKiBJRSA5ICovXHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSAqL1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNoZWNrbWFyay1jaXJjbGUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDoyMnB4O1xyXG4gICAgICAgIGhlaWdodDoyMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5RkZGRjA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czoxMXB4O1xyXG4gICAgICAgIGxlZnQ6MDtcclxuICAgICAgICB0b3A6MDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNoZWNrbWFyay1zdGVtIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6M3B4O1xyXG4gICAgICAgIGhlaWdodDo5cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMDMyNTVGO1xyXG4gICAgICAgIGxlZnQ6MTFweDtcclxuICAgICAgICB0b3A6NnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2hlY2ttYXJrLWtpY2sge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDozcHg7XHJcbiAgICAgICAgaGVpZ2h0OjNweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMzI1NUY7XHJcbiAgICAgICAgbGVmdDo4cHg7XHJcbiAgICAgICAgdG9wOjEycHg7XHJcbiAgICB9XHJcbiB9XHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRyYWNrICovXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4ICMwMzI1NUY7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIH1cclxuICAgXHJcbiAgLyogSGFuZGxlICovXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM0Y2OEFFOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICB9XHJcbiAgXHJcbiAgLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDMyNTVGOyBcclxuICB9XHJcbiBcclxuOjpuZy1kZWVwIC5tYXQtc2xpZGVyLm1hdC1zbGlkZXItaG9yaXpvbnRhbCAubWF0LXNsaWRlci10cmFjay1maWxsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5RkZGRjA7XHJcbiAgfVxyXG46Om5nLWRlZXAgLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICM5RkZGRjA7XHJcbiAgICBib3JkZXI6IHNvbGlkIDJweCAgIzlGRkZGMDtcclxuICAgIFxyXG4gIH1cclxuICA6Om5nLWRlZXAgLm1hdC1zbmFjay1iYXItY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzMjU1RiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM5RkZGRjA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgIFxyXG46Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzMjU1RiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-attack',
                templateUrl: './attack.component.html',
                styleUrls: ['./attack.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }, { type: _service_feature_service__WEBPACK_IMPORTED_MODULE_5__["FeatureService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, { slider: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['matslider']
        }], slider2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['matslider2']
        }], slider3: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['matslider3']
        }], slider4: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['matslider4']
        }] }); })();


/***/ }),

/***/ "./src/app/features/buildings/components/buildings.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/buildings/components/buildings.component.ts ***!
  \**********************************************************************/
/*! exports provided: BuildingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingsComponent", function() { return BuildingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _service_feature_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/feature.service */ "./src/app/features/service/feature.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









function BuildingsComponent_div_8_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const building_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", building_r1.resident, " embert ad a n\u00E9pess\u00E9ghez ");
} }
function BuildingsComponent_div_8_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const building_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", building_r1.coral, " korallt termel k\u00F6r\u00F6nk\u00E9nt ");
} }
function BuildingsComponent_div_8_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const building_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", building_r1.hostCapacity, " egys\u00E9gnek ny\u00FAjt sz\u00E1ll\u00E1st ");
} }
function BuildingsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuildingsComponent_div_8_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const building_r1 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); $event.stopPropagation(); return ctx_r9.selected(building_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BuildingsComponent_div_8_div_5_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BuildingsComponent_div_8_div_6_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BuildingsComponent_div_8_div_7_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const building_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/images/building_", building_r1.buildingType + 1, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", building_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", building_r1.resident != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", building_r1.coral != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", building_r1.hostCapacity != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.data.building[i_r2].quantity, " db ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", building_r1.price, " Gy\u00F6ngy / db ");
} }
class BuildingsComponent {
    constructor(featureService, data, dialogRef, snackbar) {
        this.featureService = featureService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.snackbar = snackbar;
        console.log('BuildingData:', data);
        this.addBuilding = data.building.map((x) => (Object.assign({}, x)));
        console.log(this.addBuilding);
    }
    ngOnInit() {
        this.canBuild = true;
        this.buildings = [];
        this.featureService.getBuildingTypes().subscribe(res => this.buildings = res, (err) => {
            this.snackbar.open(JSON.parse(err.response).Message, 'Bezár', {
                duration: 5000
            });
        });
    }
    selected(building) {
        this.selectedBuilding = building;
    }
    unselect() {
        this.selectedBuilding = null;
    }
    sendData() {
        this.addBuilding.forEach(element => {
            if (element.status === 1) {
                this.canBuild = false;
                this.snackbar.open('Egyszerre csak 1 épületet építhetsz!', 'Bezár', {
                    duration: 3000
                });
            }
        });
        if (this.canBuild) {
            this.featureService.purchaseBuildings(this.selectedBuilding.buildingType).subscribe(() => {
                this.dialogRef.close();
                this.snackbar.open('Sikeres vásárlás!', 'Bezár', {
                    duration: 3000
                });
            });
        }
    }
}
BuildingsComponent.ɵfac = function BuildingsComponent_Factory(t) { return new (t || BuildingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_feature_service__WEBPACK_IMPORTED_MODULE_2__["FeatureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
BuildingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuildingsComponent, selectors: [["app-buildings"]], decls: 13, vars: 2, consts: [[1, "flex", 3, "click"], [2, "font-weight", "bold", "margin", "0"], [2, "margin", "0"], [1, "main-content"], ["class", "content", "tabindex", "-1", 3, "click", 4, "ngFor", "ngForOf"], [1, "buttons-div"], ["mat-button", "", "id", "build-button", 1, "building-button", 3, "disabled", "click"], ["tabindex", "-1", 1, "content", 3, "click"], [3, "src"], [1, "building-name"], [1, "building-desc"], ["class", "building-data", 4, "ngIf"], [1, "quantity"], [1, "price"], [1, "building-data"]], template: function BuildingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuildingsComponent_Template_div_click_0_listener() { return ctx.unselect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00C9p\u00FCletek ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Kattints r\u00E1, amelyiket szeretn\u00E9d megvenni. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Egyszerre csak egy \u00E9p\u00FClet \u00E9p\u00FClhet! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BuildingsComponent_div_8_Template, 12, 7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuildingsComponent_Template_button_click_11_listener($event) { $event.stopPropagation(); return ctx.sendData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Megveszem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.buildings);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.selectedBuilding);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 15vw;\n  height: 28h;\n  background-color: #03255f;\n  margin-bottom: 0.4vh;\n  cursor: pointer;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-family: baloo;\n  font-size: 2vw;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: open-sans-regular;\n  font-size: 0.8vw !important;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  margin-top: 4vh;\n  background-color: #03255f;\n  height: 25vh;\n  margin: 5vh;\n}\n\n.buttons-div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  margin-top: 4vh;\n  background-color: #03255f;\n  height: 5vh;\n}\n\n  .mat-dialog-container {\n  background-color: #03255f !important;\n  color: white;\n  border-radius: 16px;\n}\n\n  .mat-snack-bar-container {\n  background-color: #03255F !important;\n  color: #9FFFF0;\n  font-weight: bold;\n}\n\n.building-modal[_ngcontent-%COMP%] {\n  background-color: red;\n}\n\n.building-button[_ngcontent-%COMP%] {\n  display: block;\n  width: 10vw;\n  background: transparent linear-gradient(258deg, #9ffff0 0%, #6beee9 36%, #0fcfde 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #3b7dbd;\n  border-radius: 90px;\n  border: none;\n  font-family: baloo;\n  font-size: 0.8vw;\n  letter-spacing: 0px;\n  color: #001234;\n  padding: 0.5%;\n  margin-bottom: 1%;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  color: #001234;\n}\n\n.building-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-family: open-sans-regular;\n  font-size: 1vw;\n  margin: none;\n}\n\n.building-desc[_ngcontent-%COMP%] {\n  margin: none;\n  display: flex;\n  height: 4vh;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  outline: none;\n  border-radius: 16px;\n  font-family: open-sans-regular;\n  font-size: 0.8vw;\n}\n\ndiv[_ngcontent-%COMP%]:focus {\n  background-color: rgba(255, 255, 255, 0.12);\n  outline: none;\n  border-radius: 16px;\n}\n\n.quantity[_ngcontent-%COMP%] {\n  margin: 0.5vh;\n  font-family: open-sans-regular;\n  font-size: 0.8vw;\n}\n\n.price[_ngcontent-%COMP%] {\n  margin-bottom: 0.5vh;\n  font-family: open-sans-regular;\n  font-size: 0.8vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvYnVpbGRpbmdzL2NvbXBvbmVudHMvYnVpbGRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQURGOztBQUlBO0VBQ0UsOEJBQUE7RUFDQSwyQkFBQTtBQURGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFFQTtFQUNFLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxrSEFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2J1aWxkaW5ncy9jb21wb25lbnRzL2J1aWxkaW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxNXZ3O1xyXG4gIGhlaWdodDogMjhoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzI1NWY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC40dmg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1mYW1pbHk6IGJhbG9vO1xyXG4gIGZvbnQtc2l6ZTogMnZ3O1xyXG59XHJcblxyXG5we1xyXG4gIGZvbnQtZmFtaWx5OiBvcGVuLXNhbnMtcmVndWxhcjtcclxuICBmb250LXNpemU6IDAuOHZ3ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1haW4tY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogNHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzI1NWY7XHJcbiAgaGVpZ2h0OiAyNXZoO1xyXG4gIG1hcmdpbjogNXZoO1xyXG59XHJcblxyXG4uYnV0dG9ucy1kaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDR2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMyNTVmO1xyXG4gIGhlaWdodDogNXZoO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMyNTVmICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtc25hY2stYmFyLWNvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMyNTVGICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICM5RkZGRjA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5idWlsZGluZy1tb2RhbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4uYnVpbGRpbmctYnV0dG9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTB2dztcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMjU4ZGVnLCAjOWZmZmYwIDAlLCAjNmJlZWU5IDM2JSwgIzBmY2ZkZSAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzNiN2RiZDtcclxuICBib3JkZXItcmFkaXVzOiA5MHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LWZhbWlseTogYmFsb287XHJcbiAgZm9udC1zaXplOiAwLjh2dztcclxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gIGNvbG9yOiAjMDAxMjM0O1xyXG4gIHBhZGRpbmc6IDAuNSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbn1cclxuXHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgb3BhY2l0eTogMC40O1xyXG4gIGNvbG9yOiAjMDAxMjM0O1xyXG59XHJcblxyXG4uYnVpbGRpbmctbmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1mYW1pbHk6IG9wZW4tc2Fucy1yZWd1bGFyO1xyXG4gIGZvbnQtc2l6ZTogMXZ3O1xyXG4gIG1hcmdpbjogbm9uZTtcclxufVxyXG5cclxuLmJ1aWxkaW5nLWRlc2Mge1xyXG4gIG1hcmdpbjogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogNHZoO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBvcGVuLXNhbnMtcmVndWxhcjtcclxuICBmb250LXNpemU6IDAuOHZ3O1xyXG59XHJcblxyXG5kaXY6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjZmZmZiwgJGFscGhhOiAwLjEyKTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbn1cclxuXHJcbi5xdWFudGl0eSB7XHJcbiAgbWFyZ2luOiAwLjV2aDtcclxuICBmb250LWZhbWlseTogb3Blbi1zYW5zLXJlZ3VsYXI7XHJcbiAgZm9udC1zaXplOiAwLjh2dztcclxufVxyXG5cclxuLnByaWNlIHtcclxuICBtYXJnaW4tYm90dG9tOiAwLjV2aDtcclxuICBmb250LWZhbWlseTogb3Blbi1zYW5zLXJlZ3VsYXI7XHJcbiAgZm9udC1zaXplOiAwLjh2dztcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuildingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-buildings',
                templateUrl: './buildings.component.html',
                styleUrls: ['./buildings.component.scss']
            }]
    }], function () { return [{ type: _service_feature_service__WEBPACK_IMPORTED_MODULE_2__["FeatureService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/developments/components/developments.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/features/developments/components/developments.component.ts ***!
  \****************************************************************************/
/*! exports provided: DevelopmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevelopmentsComponent", function() { return DevelopmentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _service_feature_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/feature.service */ "./src/app/features/service/feature.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









function DevelopmentsComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DevelopmentsComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const upgrade_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" m\u00E9g ", 15 - ctx_r3.array[upgrade_r1.upgradeType].currentTurn, " k\u00F6r ");
} }
function DevelopmentsComponent_div_8_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const upgrade_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" n\u00F6veli a Korall termeszt\u00E9st ", upgrade_r1.coralProduction, "%-al ");
} }
function DevelopmentsComponent_div_8_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const upgrade_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" n\u00F6veli a t\u00E1mad\u00F3pontokat ", upgrade_r1.attackPoints, "%-al ");
} }
function DevelopmentsComponent_div_8_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const upgrade_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" n\u00F6veli a v\u00E9delmi pontokat ", upgrade_r1.defensePoints, "%-al ");
} }
function DevelopmentsComponent_div_8_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const upgrade_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" n\u00F6veli a t\u00E1mad\u00F3 \u00E9s v\u00E9delmi pontokat ", upgrade_r1.attackPoints, "%-al ");
} }
function DevelopmentsComponent_div_8_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const upgrade_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" n\u00F6veli a beszedett ad\u00F3t ", upgrade_r1.taxIncrease, "%-al ");
} }
function DevelopmentsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DevelopmentsComponent_div_8_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const upgrade_r1 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.selected(upgrade_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DevelopmentsComponent_div_8_div_1_Template, 5, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DevelopmentsComponent_div_8_div_2_Template, 3, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DevelopmentsComponent_div_8_div_7_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DevelopmentsComponent_div_8_div_8_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DevelopmentsComponent_div_8_div_9_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DevelopmentsComponent_div_8_div_10_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DevelopmentsComponent_div_8_div_11_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const upgrade_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.array[upgrade_r1.upgradeType].status === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.array[upgrade_r1.upgradeType].status === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/images/development_", upgrade_r1.upgradeType + 1, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", upgrade_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", upgrade_r1.coralProduction !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", upgrade_r1.attackPoints !== 0 && !upgrade_r1.defensePoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !upgrade_r1.attackPoints && upgrade_r1.defensePoints !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", upgrade_r1.attackPoints !== 0 && upgrade_r1.defensePoints !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", upgrade_r1.taxIncrease !== 0);
} }
class DevelopmentsComponent {
    constructor(data, featureService, dialogRef, snackbar) {
        this.data = data;
        this.featureService = featureService;
        this.dialogRef = dialogRef;
        this.snackbar = snackbar;
        // console.log(this.bought);
    }
    ngOnInit() {
        this.upgrades = [];
        this.array = [];
        this.status = [];
        this.canPurchase = true;
        this.featureService.getDevelopments().subscribe(res => {
            this.upgrades = res.map((x) => (Object.assign({}, x)));
        });
        this.featureService.getUpgradesinfos().subscribe(res => {
            res.forEach(element => this.status.push(element));
            console.log(res);
            res.forEach(element => {
                const response = {
                    type: element.upgradeType,
                    currentTurn: element.currentTurn,
                    status: element.status
                };
                this.array.push(response);
            });
            console.log(this.array);
        });
    }
    selected(upgrade) {
        this.selectedDevelopment = upgrade.upgradeType;
        console.log(upgrade);
    }
    sendData() {
        console.log(this.array);
        if (this.array[this.selectedDevelopment].status === 1 || this.array[this.selectedDevelopment].status === 2) {
            this.snackbar.open('Ezt a fejlesztést már megvásároltad!', 'Bezár', {
                duration: 3000
            });
        }
        else {
            this.array.forEach(element => {
                if (element.status === 1) {
                    this.canPurchase = false;
                    this.snackbar.open('Egyszerre csak 1 fejlesztést fejleszthetsz!', 'Bezár', {
                        duration: 3000
                    });
                }
            });
            if (this.canPurchase) {
                this.featureService.startUpgrades(this.selectedDevelopment).subscribe();
                this.dialogRef.close();
                this.snackbar.open('Sikeres vásárlás!', 'Bezár', {
                    duration: 3000
                });
            }
        }
    }
}
DevelopmentsComponent.ɵfac = function DevelopmentsComponent_Factory(t) { return new (t || DevelopmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_feature_service__WEBPACK_IMPORTED_MODULE_2__["FeatureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
DevelopmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DevelopmentsComponent, selectors: [["app-developments"]], decls: 13, vars: 1, consts: [[1, "flex"], [1, "guide"], [1, "info"], [1, "main-content"], ["class", "content", "tabindex", "-1", 3, "click", 4, "ngFor", "ngForOf"], [1, "divider"], [1, "buttons-div"], ["mat-button", "", "id", "developmentButton", 1, "development-button", 3, "click"], ["tabindex", "-1", 1, "content", 3, "click"], [4, "ngIf"], [1, "images"], [2, "height", "5vw", 3, "src"], [1, "development-name"], ["class", "development-desc", 4, "ngIf"], [1, "checkmark"], [1, "checkmark-circle"], [1, "checkmark-stem"], [1, "checkmark-kick"], [1, "round"], [1, "development-desc"]], template: function DevelopmentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Fejleszt\u00E9sek ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Kattints r\u00E1, amelyiket szeretn\u00E9d megvenni. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Minden fejleszt\u00E9s 15 k\u00F6rt vesz ig\u00E9nybe, egyszerre csak egy dolog fejleszthet\u0151 \u00E9s minden csak egyszer fejleszthet\u0151 ki (nem lehet k\u00E9t komb\u00E1jn). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DevelopmentsComponent_div_8_Template, 12, 9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DevelopmentsComponent_Template_button_click_11_listener() { return ctx.sendData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Megveszem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.upgrades);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".content[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  width: 11vw;\n  height: 30vh;\n  background-color: #03255f;\n  margin-bottom: 0.4vh;\n  cursor: pointer;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  height: 60vh;\n}\n\n.round[_ngcontent-%COMP%] {\n  color: #9FFFF0;\n  font-family: open-sans-semibold;\n  font-size: 0.875vw;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n}\n\n.content[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  margin-bottom: 5%;\n}\n\n.guide[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-family: baloo;\n  font-size: 1.5vw;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  overflow: auto;\n  background-color: #03255f;\n  height: 40vh;\n  margin-left: 2vw;\n  margin-right: 2vw;\n  margin-top: 2vh;\n  margin-bottom: 2vh;\n  font-size: 0.8vw;\n  flex-wrap: wrap;\n  font-family: open-sans-regular;\n}\n\n.buttons-div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  background-color: #03255f;\n  margin-top: 2vh;\n  margin-bottom: 1vh;\n  height: 5vh;\n  width: 100%;\n}\n\n  .mat-dialog-container {\n  background-color: #03255f !important;\n  color: white;\n  border-radius: 16px;\n}\n\n.development-desc[_ngcontent-%COMP%] {\n  margin: none;\n  min-height: 5vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  outline: none;\n  border-radius: 16px;\n  font-family: open-sans-regular;\n}\n\n.development-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 5%;\n  font-family: open-sans-bold;\n}\n\ndiv[_ngcontent-%COMP%]:focus {\n  background-color: rgba(255, 255, 255, 0.12);\n  outline: none;\n  border-radius: 16px;\n}\n\n.quantity[_ngcontent-%COMP%] {\n  margin: 0.5vh;\n}\n\n.price[_ngcontent-%COMP%] {\n  margin-bottom: 0.5vh;\n}\n\nbutton[_ngcontent-%COMP%] {\n  display: block;\n  width: 10vw;\n  background: transparent linear-gradient(258deg, #9ffff0 0%, #6beee9 36%, #0fcfde 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #3b7dbd;\n  border-radius: 90px;\n  border: none;\n  font-family: baloo;\n  font-size: 0.8vw;\n  letter-spacing: 0px;\n  color: #001234;\n  padding: 0.5%;\n  margin-bottom: 1%;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  color: #001234;\n}\n\n.divider[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n  .mat-snack-bar-container {\n  background-color: #03255F !important;\n  color: #9FFFF0;\n  font-weight: bold;\n}\n\n.checkmark[_ngcontent-%COMP%] {\n  top: 10px;\n  left: 10px;\n  position: absolute;\n  display: inline-block;\n  width: 22px;\n  height: 22px;\n  transform: rotate(45deg);\n}\n\n.checkmark[_ngcontent-%COMP%]   .checkmark-circle[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 22px;\n  height: 22px;\n  background-color: #9FFFF0;\n  border-radius: 11px;\n  left: 0;\n  top: 0;\n}\n\n.checkmark[_ngcontent-%COMP%]   .checkmark-stem[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 3px;\n  height: 9px;\n  background-color: #03255F;\n  left: 11px;\n  top: 6px;\n}\n\n.checkmark[_ngcontent-%COMP%]   .checkmark-kick[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 3px;\n  height: 3px;\n  background-color: #03255F;\n  left: 8px;\n  top: 12px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px #03255f;\n  border-radius: 2px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #3f68ae;\n  border-radius: 2px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #03255f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvZGV2ZWxvcG1lbnRzL2NvbXBvbmVudHMvZGV2ZWxvcG1lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtBQUVGOztBQUFBO0VBQ0UsaUJBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFJRjs7QUFGQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FBS0Y7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUdGOztBQUFBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBRUY7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFHQTtFQUNFLDJDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBSUE7RUFDRSxhQUFBO0FBREY7O0FBSUE7RUFDRSxvQkFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxrSEFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQURGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFBRjs7QUFJQTtFQUNFLFdBQUE7QUFERjs7QUFJQTtFQUNFLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUdBLHdCQUFBO0FBREY7O0FBR0U7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0FBRE47O0FBSUU7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQUZOOztBQUtFO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFITjs7QUFRQTtFQUNFLFVBQUE7QUFMRjs7QUFRQSxVQUFBOztBQUNBO0VBQ0UsaUNBQUE7RUFDQSxrQkFBQTtBQUxGOztBQVFBLFdBQUE7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBUUEsb0JBQUE7O0FBQ0E7RUFDRSxtQkFBQTtBQUxGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvZGV2ZWxvcG1lbnRzL2NvbXBvbmVudHMvZGV2ZWxvcG1lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDExdnc7XHJcbiAgaGVpZ2h0OiAzMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzI1NWY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC40dmg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIFxyXG59XHJcblxyXG4uZmxleHsgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBoZWlnaHQ6IDYwdmg7XHJcbn1cclxuLnJvdW5kIHtcclxuICBjb2xvcjogIzlGRkZGMDtcclxuICBmb250LWZhbWlseTogb3Blbi1zYW5zLXNlbWlib2xkO1xyXG4gIGZvbnQtc2l6ZTogMC44NzV2dztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIGxlZnQ6IDEwcHg7XHJcbn1cclxuLmNvbnRlbnQgPiBpbWcge1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcbi5ndWlkZXtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5oMntcclxuICBmb250LWZhbWlseTogYmFsb287XHJcbiAgZm9udC1zaXplOiAxLjV2dztcclxufVxyXG4ubWFpbi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMyNTVmO1xyXG4gIGhlaWdodDogNDB2aDtcclxuICBtYXJnaW4tbGVmdDogMnZ3O1xyXG4gIG1hcmdpbi1yaWdodDogMnZ3O1xyXG4gIG1hcmdpbi10b3A6IDJ2aDtcclxuICBtYXJnaW4tYm90dG9tOiAydmg7XHJcbiAgZm9udC1zaXplOiAwLjh2dztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZm9udC1mYW1pbHk6IG9wZW4tc2Fucy1yZWd1bGFyO1xyXG4gIFxyXG59XHJcblxyXG5cclxuLmJ1dHRvbnMtZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMyNTVmO1xyXG4gIG1hcmdpbi10b3A6IDJ2aDtcclxuICBtYXJnaW4tYm90dG9tOiAxdmg7XHJcbiAgaGVpZ2h0OiA1dmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzI1NWYgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxufVxyXG5cclxuXHJcbi5kZXZlbG9wbWVudC1kZXNjIHtcclxuICBtYXJnaW46IG5vbmU7XHJcbiAgbWluLWhlaWdodDogNXZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgZm9udC1mYW1pbHk6IG9wZW4tc2Fucy1yZWd1bGFyO1xyXG4gIFxyXG5cclxufVxyXG4uZGV2ZWxvcG1lbnQtbmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgZm9udC1mYW1pbHk6IG9wZW4tc2Fucy1ib2xkO1xyXG5cclxufVxyXG5cclxuZGl2OmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI0ZGRkYsICRhbHBoYTogMC4xMik7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIFxyXG59XHJcblxyXG4ucXVhbnRpdHkge1xyXG4gIG1hcmdpbjogMC41dmg7XHJcbn1cclxuXHJcbi5wcmljZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41dmg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwdnc7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDI1OGRlZywgIzlmZmZmMCAwJSwgIzZiZWVlOSAzNiUsICMwZmNmZGUgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMzYjdkYmQ7XHJcbiAgYm9yZGVyLXJhZGl1czogOTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1mYW1pbHk6IGJhbG9vO1xyXG4gIGZvbnQtc2l6ZTogMC44dnc7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICBjb2xvcjogIzAwMTIzNDtcclxuICBwYWRkaW5nOiAwLjUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDElO1xyXG59XHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgb3BhY2l0eTogMC40O1xyXG4gIGNvbG9yOiAjMDAxMjM0O1xyXG59XHJcblxyXG5cclxuLmRpdmlkZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zbmFjay1iYXItY29udGFpbmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzI1NUYgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzlGRkZGMDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNoZWNrbWFyayB7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAyMnB4O1xyXG4gIGhlaWdodDoyMnB4O1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IFxyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHJcbiAgLmNoZWNrbWFyay1jaXJjbGUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOjIycHg7XHJcbiAgICAgIGhlaWdodDoyMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUZGRkYwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOjExcHg7XHJcbiAgICAgIGxlZnQ6MDtcclxuICAgICAgdG9wOjA7XHJcbiAgfVxyXG5cclxuICAuY2hlY2ttYXJrLXN0ZW0ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOjNweDtcclxuICAgICAgaGVpZ2h0OjlweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojMDMyNTVGO1xyXG4gICAgICBsZWZ0OjExcHg7XHJcbiAgICAgIHRvcDo2cHg7XHJcbiAgfVxyXG5cclxuICAuY2hlY2ttYXJrLWtpY2sge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOjNweDtcclxuICAgICAgaGVpZ2h0OjNweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojMDMyNTVGO1xyXG4gICAgICBsZWZ0OjhweDtcclxuICAgICAgdG9wOjEycHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDVweDtcclxufVxyXG5cclxuLyogVHJhY2sgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCAjMDMyNTVmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICMzZjY4YWU7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzAzMjU1ZjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DevelopmentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-developments',
                templateUrl: './developments.component.html',
                styleUrls: ['./developments.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _service_feature_service__WEBPACK_IMPORTED_MODULE_2__["FeatureService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/explorer/explorer.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/explorer/explorer.component.ts ***!
  \*********************************************************/
/*! exports provided: ExplorerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorerComponent", function() { return ExplorerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _service_feature_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/feature.service */ "./src/app/features/service/feature.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");














const _c0 = ["matslider"];
function ExplorerComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 25);
} }
function ExplorerComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15.username, " ");
} }
function ExplorerComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ExplorerComponent_th_14_Template_input_input_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.search(_r16.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExplorerComponent_td_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExplorerComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExplorerComponent_td_15_div_1_Template, 5, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.selected);
} }
function ExplorerComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 34);
} }
const _c1 = function (a0) { return { "onSelect": a0 }; };
function ExplorerComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExplorerComponent_tr_17_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const row_r21 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.onSelect(row_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r21 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r5.selectedUserId == row_r21.id));
} }
function ExplorerComponent_th_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "V\u00E1ros");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExplorerComponent_td_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r24.cityName, " ");
} }
function ExplorerComponent_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "K\u00E9mek sz\u00E1ma");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExplorerComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", element_r25.spyCount, " ");
} }
function ExplorerComponent_th_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 25);
} }
function ExplorerComponent_td_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", element_r26.defendingPower, " ");
} }
function ExplorerComponent_tr_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 34);
} }
function ExplorerComponent_tr_49_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExplorerComponent_tr_49_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const row_r27 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.onSelect(row_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r27 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r14.selectedUserId == row_r27.id));
} }
class ExplorerComponent {
    constructor(service, data, snackbar, dialogRef) {
        this.service = service;
        this.data = data;
        this.snackbar = snackbar;
        this.dialogRef = dialogRef;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.displayedColumns = ['name', 'selected'];
        this.displayedColumnsResults = ['cityname', 'spycount', 'defense', 'wassuccessful'];
    }
    ngOnInit() {
        this.service.getAllAttacks().subscribe(res => {
            this.dataSource = res;
            console.log(this.dataSource);
            console.log(this.dataSource[0].cityName);
        });
        this.service.getAttack('').subscribe(res => {
            this.dataSource1 = res;
        });
        this.searchTerms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((term) => this.service.getAttack(term))).subscribe(res => {
            this.dataSource1 = res;
        });
    }
    onSelect(row) {
        console.log('ROW', row);
        this.selected = true;
        this.selectedUserId = row.id;
        console.log(row.id);
    }
    search(term) {
        this.searchTerms.next(term);
    }
    sendData() {
        console.log(this.slider.value, this.selectedUserId);
        this.service.sendSpies(this.selectedUserId, this.slider.value).subscribe(() => {
            this.dialogRef.close();
            this.snackbar.open('Sikeres támadás!', 'Bezár', {
                duration: 3000
            });
        }, (err) => {
            console.log(err);
        });
    }
}
ExplorerComponent.ɵfac = function ExplorerComponent_Factory(t) { return new (t || ExplorerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_feature_service__WEBPACK_IMPORTED_MODULE_4__["FeatureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
ExplorerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExplorerComponent, selectors: [["app-explorer"]], viewQuery: function ExplorerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slider = _t.first);
    } }, decls: 50, vars: 8, consts: [["label", "Felder\u00EDt\u0151"], [1, "flex"], [1, "content"], [1, "infos"], [1, "title"], ["mat-table", "", 1, "left-table", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "selected"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", "click", 4, "matRowDef", "matRowDefColumns"], [1, "spy"], [2, "margin-bottom", "5vh"], ["src", "../../../assets/images/Felfedez\u0151.svg"], [2, "width", "10px"], ["min", "0", "step", "1", "value", "0", 1, "slider", 3, "max"], ["matslider", ""], [1, "button"], ["mat-button", "", 2, "color", "#03255F", 3, "click"], ["label", "Eredm\u00E9nyek"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "cityname"], ["matColumnDef", "spycount"], ["matColumnDef", "defense"], ["mat-header-cell", ""], ["mat-cell", ""], ["type", "search", "name", "searchBar", "placeholder", "Felhaszn\u00E1l\u00F3n\u00E9v", 1, "search", 3, "input"], ["searchbox", ""], [4, "ngIf"], [1, "checkmark"], [1, "checkmark-circle"], [1, "checkmark-stem"], [1, "checkmark-kick"], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass", "click"]], template: function ExplorerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Felder\u00EDt\u0151");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Jel\u00F6ld ki, kit szeretn\u00E9l t\u00E1madni!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExplorerComponent_th_11_Template, 1, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExplorerComponent_td_12_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ExplorerComponent_th_14_Template, 3, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ExplorerComponent_td_15_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ExplorerComponent_tr_16_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ExplorerComponent_tr_17_Template, 1, 3, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "2. \u00C1ll\u00EDtsd be, kiket k\u00FCldessz harcba!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Felder\u00EDt\u0151: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " p\u00E9ld\u00E1ny ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-slider", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExplorerComponent_Template_button_click_35_listener() { return ctx.sendData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Megt\u00E1madom!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-tab", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](39, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ExplorerComponent_th_40_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ExplorerComponent_td_41_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](42, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ExplorerComponent_th_43_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ExplorerComponent_td_44_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](45, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ExplorerComponent_th_46_Template, 1, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ExplorerComponent_td_47_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ExplorerComponent_tr_48_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ExplorerComponent_tr_49_Template, 1, 3, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r6 == null ? null : _r6.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx.data.spies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumnsResults);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumnsResults);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRowDef"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSlider"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRow"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"]], styles: [".mat-dialog-container {\n  background-color: #03255f !important;\n  color: white;\n  overflow-x: hidden;\n  border-radius: 16px;\n}\n\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: bold;\n  margin-left: 2vw;\n  margin-top: 2vh;\n  margin-bottom: 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.infos[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 35vh;\n  font-family: open-sans-bold;\n  font-size: 1vw;\n  width: 20vw;\n  outline: none;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  text-align: left;\n  flex-direction: column;\n  align-items: center;\n  height: 40%;\n}\n\n.results[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n.spy[_ngcontent-%COMP%] {\n  font-family: open-sans-bold;\n  font-size: 1vw;\n}\n\n.spy[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-around;\n  font-family: open-sans-regular;\n}\n\n.spy[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 2.625vw;\n  height: 45px;\n  background: #9ffff0 0% 0% no-repeat padding-box;\n  border: 2px solid #428dff;\n  border-radius: 14px;\n  opacity: 1;\n  padding: 3%;\n  zoom: 0.8;\n  margin: 3%;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  overflow: hidden;\n}\n\n.search[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  font-family: baloo;\n  border-radius: 15px;\n  color: #1c3e76;\n  font-size: 1vw;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-radius: 20px;\n  opacity: 0.39;\n  margin-right: 20%;\n  outline: none;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background: transparent linear-gradient(258deg, #9FFFF0 0%, #6BEEE9 36%, #0FCFDE 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #3B7DBD;\n  border-radius: 90px;\n  opacity: 1;\n  font-family: baloo;\n  text-align: center;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n  width: 8vw;\n  height: 5vh;\n  font-size: 1vw;\n}\n\n.button[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  height: 8vh;\n}\n\nmat-divider[_ngcontent-%COMP%] {\n  margin: 1vh;\n  width: 100%;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  width: 90%;\n  text-align: left;\n  font-family: open-sans-regular;\n  background-color: #03255f !important;\n  font-size: 1vw;\n  margin: 0.5vw;\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: left;\n  font-family: baloo;\n  font-size: 2vw;\n  letter-spacing: 0px;\n  color: #ffffff;\n  opacity: 1;\n}\n\n.spy[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%] {\n  top: 10%;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px #03255f;\n  border-radius: 2px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #3f68ae;\n  border-radius: 2px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #03255f;\n}\n\n.onSelect[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 22px;\n  height: 22px;\n  \n  \n  transform: rotate(45deg);\n}\n\n.onSelect[_ngcontent-%COMP%]   .checkmark-circle[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 22px;\n  height: 22px;\n  background-color: #9FFFF0;\n  border-radius: 11px;\n  left: 0;\n  top: 0;\n}\n\n.onSelect[_ngcontent-%COMP%]   .checkmark-stem[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 3px;\n  height: 9px;\n  background-color: #03255F;\n  left: 11px;\n  top: 6px;\n}\n\n.onSelect[_ngcontent-%COMP%]   .checkmark-kick[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 3px;\n  height: 3px;\n  background-color: #03255F;\n  left: 8px;\n  top: 12px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px #03255F;\n  border-radius: 2px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #3F68AE;\n  border-radius: 2px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #03255F;\n}\n\n  .mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background: #3F68AE;\n  height: 5px;\n}\n\n  .mat-snack-bar-container {\n  background-color: #001234 !important;\n  color: #9ffff0;\n  font-weight: bold;\n}\n\n.tables[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.results[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.checkmark2[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 22px;\n  height: 22px;\n  \n  \n  transform: rotate(45deg);\n}\n\n.checkmark-circle2[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 22px;\n  height: 22px;\n  background-color: #9FFFF0;\n  border-radius: 11px;\n  left: 0;\n  top: 0;\n}\n\n.checkmark-stem2[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 3px;\n  height: 9px;\n  background-color: #03255F;\n  left: 11px;\n  top: 6px;\n}\n\n.checkmark-kick2[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 3px;\n  height: 3px;\n  background-color: #03255F;\n  left: 8px;\n  top: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvZXhwbG9yZXIvZXhwbG9yZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0U7RUFDRSxZQUFBO0FBRUo7O0FBQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFFSjs7QUFDRTtFQUVFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFDSjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0FBRUY7O0FBQ0E7RUFDRSwyQkFBQTtFQUNBLGNBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUdGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBR0Y7O0FBQUE7RUFDRSxrSEFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBR0Y7O0FBQ0E7RUFDRyxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFFSDs7QUFFQTtFQUNHLFdBQUE7RUFDQSxXQUFBO0FBQ0g7O0FBQ0U7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFFSjs7QUFBRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUdKOztBQUFFO0VBQ0UsUUFBQTtBQUdKOztBQUFFO0VBQ0UsVUFBQTtBQUdKOztBQUFFLFVBQUE7O0FBQ0E7RUFDRSxpQ0FBQTtFQUNBLGtCQUFBO0FBR0o7O0FBQUUsV0FBQTs7QUFDQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFBRSxvQkFBQTs7QUFDQTtFQUNFLG1CQUFBO0FBR0o7O0FBQ0k7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQzhCLFNBQUE7RUFDSSwwQkFBQTtFQUNsQyx3QkFBQTtBQUlSOztBQURJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBQUdSOztBQUFJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUFFUjs7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FBQ1I7O0FBRUM7RUFDQyxVQUFBO0FBQ0Y7O0FBRUEsVUFBQTs7QUFDQTtFQUNFLGlDQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQSxXQUFBOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBLG9CQUFBOztBQUNBO0VBQ0UsbUJBQUE7QUFDRjs7QUFDRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUNBO0VBQ0Usb0NBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUdGOztBQURDO0VBQ0Msa0JBQUE7QUFJRjs7QUFEQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDOEIsU0FBQTtFQUNJLDBCQUFBO0VBQ2xDLHdCQUFBO0FBTUY7O0FBSEE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0FBTUY7O0FBSEE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQU1GOztBQUhBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFNRiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2V4cGxvcmVyL2V4cGxvcmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMyNTVmICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIH1cclxuICB0aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IGJvbGQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMnZ3O1xyXG4gICAgbWFyZ2luLXRvcDogMnZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgXHJcbiAgLmluZm9ze1xyXG4gICAgXHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiAzNXZoO1xyXG4gICAgZm9udC1mYW1pbHk6IG9wZW4tc2Fucy1ib2xkO1xyXG4gICAgZm9udC1zaXplOiAxdnc7XHJcbiAgICB3aWR0aDogMjB2dzsgXHJcbiAgICBvdXRsaW5lOiBub25lOyAgXHJcbn1cclxuLmNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogNDAlO1xyXG4gXHJcbn1cclxuLnJlc3VsdHN7XHJcbiAgb3V0bGluZTogbm9uZTsgIFxyXG5cclxufVxyXG4uc3B5IHtcclxuICBmb250LWZhbWlseTogb3Blbi1zYW5zLWJvbGQ7XHJcbiAgZm9udC1zaXplOiAxdnc7XHJcbn1cclxuXHJcbi5zcHkgPiB0YWJsZSA+IHRyID4gdGQgIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZm9udC1mYW1pbHk6IG9wZW4tc2Fucy1yZWd1bGFyO1xyXG59XHJcbi5zcHkgPiB0YWJsZSA+IHRyID4gdGQgPiBpbWcge1xyXG4gIHdpZHRoOiAyLjYyNXZ3O1xyXG4gIGhlaWdodDogNDVweDtcclxuICBiYWNrZ3JvdW5kOiAjOWZmZmYwIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjNDI4ZGZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgb3BhY2l0eTogMTtcclxuICBwYWRkaW5nOiAzJTtcclxuICB6b29tOiAwLjg7XHJcbiAgbWFyZ2luOiAzJTtcclxufVxyXG5cclxuLmZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc2VhcmNoIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgZm9udC1mYW1pbHk6IGJhbG9vO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgY29sb3I6ICMxYzNlNzY7XHJcbiAgZm9udC1zaXplOiAxdnc7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBvcGFjaXR5OiAwLjM5O1xyXG4gIG1hcmdpbi1yaWdodDogMjAlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDI1OGRlZywgIzlGRkZGMCAwJSwgIzZCRUVFOSAzNiUsICMwRkNGREUgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMzQjdEQkQ7XHJcbiAgYm9yZGVyLXJhZGl1czogOTBweDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGZvbnQtZmFtaWx5OiBiYWxvbztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiA4dnc7XHJcbiAgaGVpZ2h0OiA1dmg7XHJcbiAgZm9udC1zaXplOiAxdnc7XHJcblxyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICBoZWlnaHQ6IDh2aDtcclxuICBcclxufVxyXG5cclxubWF0LWRpdmlkZXIge1xyXG4gICBtYXJnaW46IDF2aDtcclxuICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuICAubWF0LXRhYmxlIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1mYW1pbHk6IG9wZW4tc2Fucy1yZWd1bGFyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzMjU1ZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxdnc7XHJcbiAgICBtYXJnaW46IDAuNXZ3O1xyXG4gIH1cclxuICBoMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1mYW1pbHk6IGJhbG9vO1xyXG4gICAgZm9udC1zaXplOiAydnc7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICAuc3B5ID4gdGFibGV7XHJcbiAgICB0b3A6IDEwJTtcclxuICB9XHJcbiBcclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRyYWNrICovXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4ICMwMzI1NWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEhhbmRsZSAqL1xyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogIzNmNjhhZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICB9XHJcbiAgXHJcbiAgLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDMyNTVmO1xyXG4gIH1cclxuICBcclxuICAub25TZWxlY3R7XHJcbiAgICAuY2hlY2ttYXJrIHtcclxuICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMjJweDtcclxuICAgICAgICBoZWlnaHQ6MjJweDtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyAvKiBJRSA5ICovXHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSAqL1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNoZWNrbWFyay1jaXJjbGUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDoyMnB4O1xyXG4gICAgICAgIGhlaWdodDoyMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5RkZGRjA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czoxMXB4O1xyXG4gICAgICAgIGxlZnQ6MDtcclxuICAgICAgICB0b3A6MDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNoZWNrbWFyay1zdGVtIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6M3B4O1xyXG4gICAgICAgIGhlaWdodDo5cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMDMyNTVGO1xyXG4gICAgICAgIGxlZnQ6MTFweDtcclxuICAgICAgICB0b3A6NnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2hlY2ttYXJrLWtpY2sge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDozcHg7XHJcbiAgICAgICAgaGVpZ2h0OjNweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMzI1NUY7XHJcbiAgICAgICAgbGVmdDo4cHg7XHJcbiAgICAgICAgdG9wOjEycHg7XHJcbiAgICB9XHJcbiB9XHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogNXB4O1xyXG59XHJcblxyXG4vKiBUcmFjayAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4ICMwMzI1NUY7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG4gXHJcbi8qIEhhbmRsZSAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjM0Y2OEFFOyBcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMDMyNTVGOyBcclxufVxyXG4gIDo6bmctZGVlcCAubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC1pbmstYmFye1xyXG4gICAgYmFja2dyb3VuZDogIzNGNjhBRTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gIH0gXHJcbiAgXHJcbjo6bmctZGVlcCAubWF0LXNuYWNrLWJhci1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDEyMzQgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzlmZmZmMDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4udGFibGVze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG4gLnJlc3VsdHMgLm1hdC10YWJsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaGVja21hcmsyIHtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICB3aWR0aDogMjJweDtcclxuICBoZWlnaHQ6MjJweDtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyAvKiBJRSA5ICovXHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSAqL1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG5cclxuLmNoZWNrbWFyay1jaXJjbGUyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6MjJweDtcclxuICBoZWlnaHQ6MjJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUZGRkYwO1xyXG4gIGJvcmRlci1yYWRpdXM6MTFweDtcclxuICBsZWZ0OjA7XHJcbiAgdG9wOjA7XHJcbn1cclxuXHJcbi5jaGVja21hcmstc3RlbTIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDozcHg7XHJcbiAgaGVpZ2h0OjlweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMzI1NUY7XHJcbiAgbGVmdDoxMXB4O1xyXG4gIHRvcDo2cHg7XHJcbn1cclxuXHJcbi5jaGVja21hcmsta2ljazIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDozcHg7XHJcbiAgaGVpZ2h0OjNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMzI1NUY7XHJcbiAgbGVmdDo4cHg7XHJcbiAgdG9wOjEycHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExplorerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-explorer',
                templateUrl: './explorer.component.html',
                styleUrls: ['./explorer.component.scss']
            }]
    }], function () { return [{ type: _service_feature_service__WEBPACK_IMPORTED_MODULE_4__["FeatureService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, { slider: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['matslider']
        }] }); })();


/***/ }),

/***/ "./src/app/features/fight/components/fight.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/fight/components/fight.component.ts ***!
  \**************************************************************/
/*! exports provided: FightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FightComponent", function() { return FightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_feature_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/feature.service */ "./src/app/features/service/feature.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function FightComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 14);
} }
function FightComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14.cityName, " ");
} }
function FightComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 14);
} }
function FightComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15.unitList.unitList[0].unitCount, " L\u00E9zerc\u00E1pa ");
} }
function FightComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 14);
} }
function FightComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16.unitList.unitList[1].unitCount, " Rohamf\u00F3ka ");
} }
function FightComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 14);
} }
function FightComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r17.unitList.unitList[2].unitCount, " Csatacsik\u00F3");
} }
function FightComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 14);
} }
function FightComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.unitList.unitList[3].unitCount, " Hadvez\u00E9r");
} }
function FightComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 14);
} }
function FightComponent_td_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FightComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FightComponent_td_21_div_1_Template, 5, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r19.wasSuccessful);
} }
function FightComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
} }
function FightComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
} }
class FightComponent {
    constructor(featureService, snackbar) {
        this.featureService = featureService;
        this.snackbar = snackbar;
        this.displayedColumns = ['city', 'sharks', 'seals', 'seahorses', 'general', 'checkmark'];
    }
    ngOnInit() {
        this.featureService.getFights().subscribe(res => {
            console.log(res);
            this.dataSource = res.map((x) => ({ cityName: x.cityName, unitList: x.unitList, wasSuccessful: x.wasSuccessful }));
            console.log(this.dataSource);
        }, (err) => {
            this.snackbar.open(err.message, 'Bezár', {
                duration: 3000
            });
        });
    }
}
FightComponent.ɵfac = function FightComponent_Factory(t) { return new (t || FightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_feature_service__WEBPACK_IMPORTED_MODULE_1__["FeatureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"])); };
FightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FightComponent, selectors: [["app-fight"]], decls: 24, vars: 3, consts: [[1, "flex"], [1, "fightTitle"], ["mat-table", "", 1, "fightTable", 3, "dataSource"], ["matColumnDef", "city"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "width: 15vw;", 4, "matCellDef"], ["matColumnDef", "sharks"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "seals"], ["matColumnDef", "seahorses"], ["matColumnDef", "general"], ["matColumnDef", "checkmark"], ["mat-header-row", "", "style", "height: 2vh;", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 2, "width", "15vw"], ["mat-cell", ""], [4, "ngIf"], [1, "checkmark"], [1, "checkmark-circle"], [1, "checkmark-stem"], [1, "checkmark-kick"], ["mat-header-row", "", 2, "height", "2vh"], ["mat-row", ""]], template: function FightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Harc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FightComponent_th_5_Template, 1, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FightComponent_td_6_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FightComponent_th_8_Template, 1, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FightComponent_td_9_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FightComponent_th_11_Template, 1, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FightComponent_td_12_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FightComponent_th_14_Template, 1, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FightComponent_td_15_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FightComponent_th_17_Template, 1, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, FightComponent_td_18_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FightComponent_th_20_Template, 1, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, FightComponent_td_21_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, FightComponent_tr_22_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FightComponent_tr_23_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], styles: [".mat-dialog-container {\n  background-color: #03255f !important;\n  color: white;\n  border-radius: 16px;\n}\n\n.fightsList[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\n.fightTable[_ngcontent-%COMP%] {\n  width: 45vw;\n  background-color: #03255f !important;\n  color: white;\n  margin-bottom: 3vh;\n  font-family: open-sans-regular;\n  font-size: 16px;\n}\n\n.fightTitle[_ngcontent-%COMP%] {\n  text-align: left;\n  font-family: baloo;\n  font-size: 32px;\n  letter-spacing: 0px;\n  color: #ffffff;\n  opacity: 1;\n  margin: 0;\n}\n\n.checkmark[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 22px;\n  height: 22px;\n  \n  \n  transform: rotate(45deg);\n}\n\n.checkmark-circle[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 22px;\n  height: 22px;\n  background-color: #9FFFF0;\n  border-radius: 11px;\n  left: 0;\n  top: 0;\n}\n\n.checkmark-stem[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 3px;\n  height: 9px;\n  background-color: #03255F;\n  left: 11px;\n  top: 6px;\n}\n\n.checkmark-kick[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 3px;\n  height: 3px;\n  background-color: #03255F;\n  left: 8px;\n  top: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvZmlnaHQvY29tcG9uZW50cy9maWdodC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQzhCLFNBQUE7RUFDSSwwQkFBQTtFQUNsQyx3QkFBQTtBQUdGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBQUdGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUFHRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FBR0YiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9maWdodC9jb21wb25lbnRzL2ZpZ2h0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzMjU1ZiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG59XHJcblxyXG4uZmlnaHRzTGlzdCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4uZmlnaHRUYWJsZSB7XHJcbiAgd2lkdGg6IDQ1dnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzMjU1ZiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiAzdmg7XHJcbiAgZm9udC1mYW1pbHk6IG9wZW4tc2Fucy1yZWd1bGFyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmZpZ2h0VGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1mYW1pbHk6IGJhbG9vO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY2hlY2ttYXJrIHtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICB3aWR0aDogMjJweDtcclxuICBoZWlnaHQ6MjJweDtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyAvKiBJRSA5ICovXHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSAqL1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG5cclxuLmNoZWNrbWFyay1jaXJjbGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDoyMnB4O1xyXG4gIGhlaWdodDoyMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5RkZGRjA7XHJcbiAgYm9yZGVyLXJhZGl1czoxMXB4O1xyXG4gIGxlZnQ6MDtcclxuICB0b3A6MDtcclxufVxyXG5cclxuLmNoZWNrbWFyay1zdGVtIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6M3B4O1xyXG4gIGhlaWdodDo5cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMDMyNTVGO1xyXG4gIGxlZnQ6MTFweDtcclxuICB0b3A6NnB4O1xyXG59XHJcblxyXG4uY2hlY2ttYXJrLWtpY2sge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDozcHg7XHJcbiAgaGVpZ2h0OjNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMzI1NUY7XHJcbiAgbGVmdDo4cHg7XHJcbiAgdG9wOjEycHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FightComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fight',
                templateUrl: './fight.component.html',
                styleUrls: ['./fight.component.scss']
            }]
    }], function () { return [{ type: _service_feature_service__WEBPACK_IMPORTED_MODULE_1__["FeatureService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/pages/auth/interceptor.ts":
/*!****************************************************!*\
  !*** ./src/app/features/pages/auth/interceptor.ts ***!
  \****************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_authpage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/authpage.service */ "./src/app/features/pages/auth/service/authpage.service.ts");



class TokenInterceptor {
    constructor(auth) {
        this.auth = auth;
    }
    intercept(request, next) {
        const token = localStorage.getItem('token');
        if (token != null) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.auth.getToken()}`
                }
            });
        }
        console.log('intercepted ');
        return next.handle(request);
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_authpage_service__WEBPACK_IMPORTED_MODULE_1__["AuthpageService"])); };
TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _service_authpage_service__WEBPACK_IMPORTED_MODULE_1__["AuthpageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/pages/auth/service/auth-guard.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/features/pages/auth/service/auth-guard.service.ts ***!
  \*******************************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _authpage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authpage.service */ "./src/app/features/pages/auth/service/authpage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuardService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authpage_service__WEBPACK_IMPORTED_MODULE_1__["AuthpageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _authpage_service__WEBPACK_IMPORTED_MODULE_1__["AuthpageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/pages/auth/service/authpage.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/pages/auth/service/authpage.service.ts ***!
  \*****************************************************************/
/*! exports provided: AuthpageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthpageService", function() { return AuthpageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");






class AuthpageService {
    constructor(authClient) {
        this.authClient = authClient;
        // tslint:disable:new-parens
        this.logind = new src_app_shared__WEBPACK_IMPORTED_MODULE_2__["LoginDto"];
        this.registerd = new src_app_shared__WEBPACK_IMPORTED_MODULE_2__["RegisterDto"];
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
    }
    login(name, pwd) {
        this.logind.username = name;
        this.logind.password = pwd;
        this.newUser = false;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.authClient.authenticateUser(this.logind));
    }
    getToken() {
        return localStorage.getItem('token');
    }
    register(name, pwd, pwd2, cityName) {
        this.registerd.username = name;
        this.registerd.password = pwd;
        this.registerd.city = cityName;
        this.newUser = true;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.authClient.registerUser(this.registerd));
    }
    isAuthenticated() {
        const token = localStorage.getItem('token');
        // Check whether the token is expired and return
        // true or false
        if (token === null) {
            return null;
        }
        return !this.jwtHelper.isTokenExpired(token);
    }
}
AuthpageService.ɵfac = function AuthpageService_Factory(t) { return new (t || AuthpageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared__WEBPACK_IMPORTED_MODULE_2__["AuthClient"])); };
AuthpageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthpageService, factory: AuthpageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthpageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_shared__WEBPACK_IMPORTED_MODULE_2__["AuthClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/pages/main/components/header/header.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/pages/main/components/header/header.component.ts ***!
  \***************************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_features_service_feature_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/features/service/feature.service */ "./src/app/features/service/feature.service.ts");
/* harmony import */ var src_app_core_services_signal_r_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/signal-r.service */ "./src/app/core/services/signal-r.service.ts");





class HeaderComponent {
    constructor(featureService, signalRService) {
        this.featureService = featureService;
        this.signalRService = signalRService;
        this.reload = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        console.log('header city: ', this.city);
        this.featureService.getTurn().subscribe(res => this.currentTurn = res);
        this.signalRService.signalReceived.subscribe((signal) => {
            this.featureService.getTurn().subscribe(res => this.currentTurn = res);
            this.reload.emit();
        });
    }
    endTurn() {
        this.featureService.endTurn().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(() => this.featureService.getTurn())).subscribe(res => {
            this.reload.emit();
            this.currentTurn = res;
        });
        //   this.featureService.endTurn().subscribe(() => {
        //     this.getTurnCount();
        //     this.featureService.getProfile().subscribe(res => {
        //       this.city = res;
        //       console.log('SZITI', this.city);
        //     },
        //       err => {
        //         console.error(err);
        //       });
        //   }, (err) => console.error(err));
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_features_service_feature_service__WEBPACK_IMPORTED_MODULE_2__["FeatureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_signal_r_service__WEBPACK_IMPORTED_MODULE_3__["SignalRService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { city: "city", rank: "rank" }, outputs: { reload: "reload" }, decls: 72, vars: 15, consts: [[1, "flex"], [1, "navbar"], [1, "infos"], [1, "nav-links"], [1, "nav-item"], [1, "img-div"], ["src", "assets/images/L\u00E9zerc\u00E1pa.svg", "alt", "image"], [1, "data"], ["src", "assets/images/Rohamf\u00F3ka.svg", "alt", "image"], ["src", "assets/images/Csatacsik\u00F3.svg", "alt", "image"], ["src", "assets/images/Hadvez\u00E9r.svg", "alt", "image"], ["src", "assets/images/Felfedez\u0151.svg", "alt", "image"], ["src", "assets/images/shell.svg", "alt", "image"], [1, "second-data"], ["src", "assets/images/018-coral.svg", "alt", "image"], ["src", "assets/images/Z\u00E1tonyv\u00E1r.png", "alt", "", 1, "building-img"], ["src", "assets/images/\u00C1raml\u00E1sir\u00E1ny\u00EDt\u00F3.png", "alt", "", 1, "building-img"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentTurn, ".k\u00F6r");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.rank, ".hely");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.city.availableArmy.unitList[0].unitCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.city.availableArmy.unitList[1].unitCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.city.availableArmy.unitList[2].unitCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.city.availableArmy.unitList[3].unitCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.city.availableArmy.unitList[4].unitCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.city.pearlCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.city.pearlProduction, "/k\u00F6r");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.city.coralCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.city.coralProduction, "/k\u00F6r");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.city.buildings[0].quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.city.buildings[0].status, " \u00E9p\u00FCl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.city.buildings[1].quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.city.buildings[1].status, " \u00E9p\u00FCl");
    } }, styles: [".flex[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  width: 95%;\n  background-color: rgba(255, 255, 255, 0.4);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  border-radius: 16px;\n  padding-left: 2vw;\n  padding-right: 1vw;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 10vh;\n  margin-top: 1vh;\n}\n\n.infos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n  font-family: baloo;\n  font-size: 1vw;\n  color: #1c3e76;\n  width: 15vw;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 2vw;\n}\n\n.building-img[_ngcontent-%COMP%] {\n  width: 3.3vw;\n  height: 3.3vw;\n}\n\n.infos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0.8vw;\n}\n\n.nav-links[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 80vw;\n}\n\nul[_ngcontent-%COMP%] {\n  -webkit-padding-start: 2vw;\n          padding-inline-start: 2vw;\n}\n\n.nav-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 0.5vw 0.5vw;\n  text-decoration: none;\n  font-family: baloo;\n  letter-spacing: 0px;\n  margin-left: 0.5vw;\n  color: #1c3e76;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.img-div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0.6vh;\n  background: #9ffff0 0% 0% no-repeat padding-box;\n  border: 2px solid #428dff;\n  border-radius: 14px;\n  width: 2.5vw;\n  height: 2.5vw;\n}\n\n.data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  margin-left: 1rem;\n  font-size: 1vw;\n  font-family: baloo;\n  letter-spacing: 0px;\n  width: 3vw;\n  text-align: center;\n}\n\n.second-data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  font-size: 0.7vw;\n  width: 2.5vw;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background: transparent linear-gradient(258deg, #9ffff0 0%, #6beee9 36%, #0fcfde 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #3b7dbd;\n  border-radius: 90px;\n  opacity: 1;\n  border: none;\n  font-family: baloo;\n  font-size: 1vw;\n  letter-spacing: 0px;\n  color: #001234;\n  width: 10vw;\n  height: 5vh;\n  margin-left: 1vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcGFnZXMvbWFpbi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Q7O0FBRUE7RUFDQyxVQUFBO0VBQ0EsMENBQUE7RUFDQSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNEOztBQUVBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBQ0Q7O0FBS0E7RUFDQyxVQUFBO0FBRkQ7O0FBS0E7RUFDQyxZQUFBO0VBQ0EsYUFBQTtBQUZEOztBQUtBO0VBQ0MsYUFBQTtBQUZEOztBQUtBO0VBQ0MsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLFdBQUE7QUFIRDs7QUFNQTtFQUNDLDBCQUFBO1VBQUEseUJBQUE7QUFIRDs7QUFNQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUhEOztBQU1BO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUhEOztBQU1BO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUhEOztBQU1BO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFIRDs7QUFNQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUhEOztBQU1BO0VBQ0Msa0hBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBSEQiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9wYWdlcy9tYWluL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcblx0d2lkdGg6IDk1JTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogd2hpdGUsICRhbHBoYTogMC40KTtcclxuXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuXHQtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcblx0cGFkZGluZy1sZWZ0OiAydnc7XHJcblx0cGFkZGluZy1yaWdodDogMXZ3O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0aGVpZ2h0OiAxMHZoO1xyXG5cdG1hcmdpbi10b3A6IDF2aDtcclxufVxyXG5cclxuLmluZm9zIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRmb250LWZhbWlseTogYmFsb287XHJcblx0Zm9udC1zaXplOiAxdnc7XHJcblx0Y29sb3I6ICMxYzNlNzY7XHJcblx0d2lkdGg6IDE1dnc7XHJcblx0XHJcblx0XHJcblx0XHJcbn1cclxuXHJcbmltZ3tcclxuXHR3aWR0aDogMnZ3O1xyXG59XHJcblxyXG4uYnVpbGRpbmctaW1nIHtcclxuXHR3aWR0aDogMy4zdnc7XHJcblx0aGVpZ2h0OiAzLjN2dztcclxufVxyXG5cclxuLmluZm9zIHNwYW4ge1xyXG5cdG1hcmdpbjogMC44dnc7XHJcbn1cclxuXHJcbi5uYXYtbGlua3Mge1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFxyXG5cdHdpZHRoOiA4MHZ3O1xyXG59XHJcblxyXG51bCB7XHJcblx0cGFkZGluZy1pbmxpbmUtc3RhcnQ6IDJ2dztcclxufVxyXG5cclxuLm5hdi1pdGVtIHNwYW4ge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDAuNXZ3IDAuNXZ3O1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRmb250LWZhbWlseTogYmFsb287XHJcblx0bGV0dGVyLXNwYWNpbmc6IDBweDtcclxuXHRtYXJnaW4tbGVmdDogMC41dnc7XHJcblx0Y29sb3I6ICMxYzNlNzY7XHJcbn1cclxuXHJcbi5uYXYtaXRlbSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5pbWctZGl2IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAwLjZ2aDtcclxuXHRiYWNrZ3JvdW5kOiAjOWZmZmYwIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuXHRib3JkZXI6IDJweCBzb2xpZCAjNDI4ZGZmO1xyXG5cdGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcblx0d2lkdGg6IDIuNXZ3O1xyXG5cdGhlaWdodDogMi41dnc7XHJcbn1cclxuXHJcbi5kYXRhIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0bWFyZ2luLWxlZnQ6IDFyZW07XHJcblx0Zm9udC1zaXplOiAxdnc7XHJcblx0Zm9udC1mYW1pbHk6IGJhbG9vO1xyXG5cdGxldHRlci1zcGFjaW5nOiAwcHg7XHJcblx0d2lkdGg6IDN2dztcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWNvbmQtZGF0YSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGZvbnQtc2l6ZTogMC43dncgO1xyXG5cdHdpZHRoOiAyLjV2dztcclxufVxyXG5cclxuYnV0dG9uIHtcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMjU4ZGVnLCAjOWZmZmYwIDAlLCAjNmJlZWU5IDM2JSwgIzBmY2ZkZSAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcblx0Ym94LXNoYWRvdzogMHB4IDNweCA2cHggIzNiN2RiZDtcclxuXHRib3JkZXItcmFkaXVzOiA5MHB4O1xyXG5cdG9wYWNpdHk6IDE7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGZvbnQtZmFtaWx5OiBiYWxvbztcclxuXHRmb250LXNpemU6IDF2dztcclxuXHRsZXR0ZXItc3BhY2luZzogMHB4O1xyXG5cdGNvbG9yOiAjMDAxMjM0O1xyXG5cdHdpZHRoOiAxMHZ3O1xyXG5cdGhlaWdodDogNXZoO1xyXG5cdG1hcmdpbi1sZWZ0OiAxdnc7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: src_app_features_service_feature_service__WEBPACK_IMPORTED_MODULE_2__["FeatureService"] }, { type: src_app_core_services_signal_r_service__WEBPACK_IMPORTED_MODULE_3__["SignalRService"] }]; }, { city: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rank: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], reload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/features/pages/main/components/main-page/main-page.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/pages/main/components/main-page/main-page.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_features_service_feature_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/features/service/feature.service */ "./src/app/features/service/feature.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "./src/app/features/pages/main/components/header/header.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/features/pages/main/components/navbar/navbar.component.ts");
/* harmony import */ var _profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../profile-card/profile-card.component */ "./src/app/features/pages/main/components/profile-card/profile-card.component.ts");







function MainPageComponent_app_header_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("reload", function MainPageComponent_app_header_1_Template_app_header_reload_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.reload(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("city", ctx_r0.city)("rank", ctx_r0.profile.rank);
} }
function MainPageComponent_div_2_app_navbar_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-navbar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("reload", function MainPageComponent_div_2_app_navbar_3_Template_app_navbar_reload_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.reload(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buildings", ctx_r4.city.buildings)("units", ctx_r4.city.availableArmy.unitList);
} }
function MainPageComponent_div_2_app_profile_card_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-profile-card", 14);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r5.profile.username);
} }
function MainPageComponent_div_2_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainPageComponent_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainPageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainPageComponent_div_2_app_navbar_3_Template, 1, 2, "app-navbar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MainPageComponent_div_2_app_profile_card_4_Template, 1, 1, "app-profile-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " UNDERSEA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MainPageComponent_div_2_div_8_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MainPageComponent_div_2_div_9_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.city.buildings[0].quantity != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.city.buildings[1].quantity != 0);
} }
class MainPageComponent {
    constructor(featureService) {
        this.featureService = featureService;
    }
    ngOnInit() {
        this.array = [];
        this.reload();
    }
    reload() {
        this.featureService.getCity().subscribe(res => {
            this.city = res;
        }, err => {
            console.error(err);
        });
        this.featureService.getProfile().subscribe(res => {
            this.profile = res;
        });
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_features_service_feature_service__WEBPACK_IMPORTED_MODULE_1__["FeatureService"])); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 3, vars: 2, consts: [[1, "bg"], [3, "city", "rank", "reload", 4, "ngIf"], ["class", "flex", 4, "ngIf"], [3, "city", "rank", "reload"], [1, "flex"], [1, "left-side"], [1, "components"], [3, "buildings", "developements", "units", "reload", 4, "ngIf"], [3, "name", 4, "ngIf"], [1, "title"], [1, "main-content"], ["class", "zatony-div", 4, "ngIf"], ["class", "aramlas-div", 4, "ngIf"], [3, "buildings", "developements", "units", "reload"], [3, "name"], [1, "zatony-div"], ["src", "../../../../../../assets/images/Z\u00E1tonyv\u00E1r_pic.png", "alt", "", 1, "zatony"], [1, "aramlas-div"], ["src", "../../../../../../assets/images/\u00C1raml\u00E1sir\u00E1ny\u00EDt\u00F3_pic.png", "alt", "", 1, "aramlas"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainPageComponent_app_header_1_Template, 1, 2, "app-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainPageComponent_div_2_Template, 10, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.city);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_5__["ProfileCardComponent"]], styles: [".bg[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-image: url('undersea_game-01.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-family: baloo;\n  font-size: 2vw;\n  color: #9ffff0;\n  letter-spacing: 0px;\n  text-align: left;\n  position: absolute;\n  bottom: 0;\n  opacity: 1;\n  margin-left: 1.3vw;\n}\n\n.left-side[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: space-around;\n  width: 15vw;\n  height: 85vh;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  justify-content: flex-start;\n  min-height: 80vh;\n}\n\n.components[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  width: 85vw;\n}\n\n.zatony-div[_ngcontent-%COMP%] {\n  width: 3vw;\n  height: 3vh;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-right: 8vw;\n  margin-top: 8vh;\n}\n\n.aramlas-div[_ngcontent-%COMP%] {\n  width: 3vw;\n  height: 3vh;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-top: 12vw;\n  margin-right: 8vw;\n}\n\n.zatony[_ngcontent-%COMP%] {\n  width: 18vw;\n  height: 18vw;\n}\n\n.aramlas[_ngcontent-%COMP%] {\n  width: 18vw;\n  height: 15vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcGFnZXMvbWFpbi9jb21wb25lbnRzL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUNEOztBQUlBO0VBQ0Msa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFERDs7QUFJQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtBQUREOztBQUlBO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQUREOztBQUlBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFERDs7QUFJQTtFQUNDLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUREOztBQUlBO0VBQ0MsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUREOztBQUlBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUFERDs7QUFJQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FBREQiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9wYWdlcy9tYWluL2NvbXBvbmVudHMvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZyB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvYmFja2dyb3VuZC91bmRlcnNlYV9nYW1lLTAxLnBuZ1wiKTtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcblx0Zm9udC1mYW1pbHk6IGJhbG9vO1xyXG5cdGZvbnQtc2l6ZTogMnZ3O1xyXG5cdGNvbG9yOiAjOWZmZmYwO1xyXG5cdGxldHRlci1zcGFjaW5nOiAwcHg7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0Ym90dG9tOiAwO1xyXG5cdG9wYWNpdHk6IDE7XHJcblx0bWFyZ2luLWxlZnQ6IDEuM3Z3O1xyXG5cdC8vIHRleHQtZGVjb3JhdGlvbi1saW5lOiBvdmVybGluZTtcclxuXHQvLyB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IHdhdnk7XHJcbn1cclxuXHJcbi5sZWZ0LXNpZGUge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblx0d2lkdGg6IDE1dnc7XHJcblx0aGVpZ2h0OiA4NXZoO1xyXG59XHJcblxyXG4uZmxleCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG5cdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHRtaW4taGVpZ2h0OiA4MHZoO1xyXG59XHJcblxyXG4uY29tcG9uZW50cyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubWFpbi1jb250ZW50IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR3aWR0aDogODV2dztcclxufVxyXG5cclxuLnphdG9ueS1kaXYge1xyXG5cdHdpZHRoOiAzdnc7XHJcblx0aGVpZ2h0OiAzdmg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0bWFyZ2luLXJpZ2h0OiA4dnc7XHJcblx0bWFyZ2luLXRvcDogOHZoO1xyXG59XHJcblxyXG4uYXJhbWxhcy1kaXYge1xyXG5cdHdpZHRoOiAzdnc7XHJcblx0aGVpZ2h0OiAzdmg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0bWFyZ2luLXRvcDogMTJ2dztcclxuXHRtYXJnaW4tcmlnaHQ6IDh2dztcclxufVxyXG5cclxuLnphdG9ueSB7XHJcblx0d2lkdGg6IDE4dnc7XHJcblx0aGVpZ2h0OiAxOHZ3O1xyXG59XHJcblxyXG4uYXJhbWxhcyB7XHJcblx0d2lkdGg6IDE4dnc7XHJcblx0aGVpZ2h0OiAxNXZ3O1xyXG59XHJcblxyXG4vLyAud2F2ZSB7XHJcbi8vIFx0LS1jOiByZWQ7IC8qIENvbG9yICovXHJcbi8vIFx0LS10OiA3cHg7IC8qIFRoaWNrbmVzcyAqL1xyXG4vLyBcdC0taDogM3Z3OyAvKiBIZWlnaHQgICovXHJcbi8vIFx0LS13OiAxMHZ3OyAvKiBXaWR0aCAgKi9cclxuLy8gXHQtLXA6IDE1cHg7IC8qIGFkanVzdCB0aGlzIHRvIGNvcnJlY3QgdGhlIHBvc2l0aW9uIHdoZW4gY2hhbmdpbmcgdGhlIG90aGVyIHZhbHVlcyovXHJcblxyXG4vLyBcdG1hcmdpbjogNXB4IGF1dG87XHJcbi8vIFx0cGFkZGluZy10b3A6IDJ2aCAhaW1wb3J0YW50O1xyXG4vLyBcdHdpZHRoOiA4dnc7XHJcbi8vIFx0aGVpZ2h0OiAydnc7XHJcbi8vIFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuLy8gXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgfVxyXG4vLyAgIC53YXZlOmJlZm9yZSB7XHJcbi8vIFx0Y29udGVudDogXCJcIjtcclxuLy8gXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vIFx0cGFkZGluZy10b3A6IDJ2aDtcclxuLy8gXHR0b3A6IDA7XHJcbi8vIFx0bGVmdDogMDtcclxuLy8gXHR3aWR0aDogMjAwJTtcclxuLy8gXHRib3R0b206IDA7XHJcblxyXG4vLyBcdGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChcclxuLy8gXHRcdGZhcnRoZXN0LXNpZGUgYXQgNTAlIGNhbGMoMTAwJSArIHZhcigtLXApKSxcclxuLy8gXHRcdHRyYW5zcGFyZW50IDQ3JSxcclxuLy8gXHRcdHZhcigtLWMpIDUwJSBjYWxjKDUwJSArIHZhcigtLXQpKSxcclxuLy8gXHRcdHRyYW5zcGFyZW50IGNhbGMoNTIlICsgdmFyKC0tdCkpXHJcbi8vIFx0ICApLFxyXG4vLyBcdCAgcmFkaWFsLWdyYWRpZW50KFxyXG4vLyBcdFx0ZmFydGhlc3Qtc2lkZSBhdCA1MCUgY2FsYygwJSAtIHZhcigtLXApKSxcclxuLy8gXHRcdHRyYW5zcGFyZW50IDQ3JSxcclxuLy8gXHRcdHZhcigtLWMpIDUwJSBjYWxjKDUwJSArIHZhcigtLXQpKSxcclxuLy8gXHRcdHRyYW5zcGFyZW50IGNhbGMoNTIlICsgdmFyKC0tdCkpXHJcbi8vIFx0ICApO1xyXG5cclxuLy8gXHRiYWNrZ3JvdW5kLXNpemU6IHZhcigtLXcpIHZhcigtLWgpO1xyXG4vLyBcdGJhY2tncm91bmQtcG9zaXRpb246IGNhbGModmFyKC0tdykgLyAyKSBjYWxjKC0xICogKHZhcigtLWgpIC8gMikpLCAwcHggY2FsYyh2YXIoLS1oKSAvIDIpO1xyXG4vLyBcdGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuLy8gXHRiYWNrZ3JvdW5kLW9yaWdpbjogY29udGVudC1ib3g7XHJcblxyXG4vLyBcdGFuaW1hdGlvbjogbW92ZSA4cyBpbmZpbml0ZSBsaW5lYXI7XHJcbi8vICAgfVxyXG4vLyAgIEBrZXlmcmFtZXMgbW92ZSB7XHJcbi8vIFx0dG8ge1xyXG4vLyBcdCAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4vLyBcdH1cclxuLy8gICB9XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-page',
                templateUrl: './main-page.component.html',
                styleUrls: ['./main-page.component.scss']
            }]
    }], function () { return [{ type: src_app_features_service_feature_service__WEBPACK_IMPORTED_MODULE_1__["FeatureService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/pages/main/components/navbar/navbar.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/pages/main/components/navbar/navbar.component.ts ***!
  \***************************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _buildings_components_buildings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../buildings/components/buildings.component */ "./src/app/features/buildings/components/buildings.component.ts");
/* harmony import */ var _attack_components_attack_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../attack/components/attack.component */ "./src/app/features/attack/components/attack.component.ts");
/* harmony import */ var _fight_components_fight_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../fight/components/fight.component */ "./src/app/features/fight/components/fight.component.ts");
/* harmony import */ var _rank_components_rank_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../rank/components/rank.component */ "./src/app/features/rank/components/rank.component.ts");
/* harmony import */ var _army_components_army_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../army/components/army.component */ "./src/app/features/army/components/army.component.ts");
/* harmony import */ var src_app_features_developments_components_developments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/features/developments/components/developments.component */ "./src/app/features/developments/components/developments.component.ts");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _explorer_explorer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../explorer/explorer.component */ "./src/app/features/explorer/explorer.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");












class NavbarComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.reload = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    openBuildings() {
        const dialogRef = this.dialog.open(_buildings_components_buildings_component__WEBPACK_IMPORTED_MODULE_1__["BuildingsComponent"], {
            width: '50vw',
            data: {
                building: this.buildings
            }
        });
        dialogRef.afterClosed().subscribe(() => this.reload.emit());
    }
    openAttack() {
        const dialogRef = this.dialog.open(_attack_components_attack_component__WEBPACK_IMPORTED_MODULE_2__["AttackComponent"], {
            width: '50vw',
            data: {
                // tslint:disable-next-line:max-line-length
                units: this.units,
            },
            backdropClass: 'backdropBackground'
        });
        dialogRef.afterClosed().subscribe(() => this.reload.emit());
    }
    openFights() {
        const dialogRef = this.dialog.open(_fight_components_fight_component__WEBPACK_IMPORTED_MODULE_3__["FightComponent"], {
            width: '50vw',
            data: {}
        });
        dialogRef.afterClosed().subscribe(() => this.reload.emit());
    }
    openRanks() {
        const dialogRef = this.dialog.open(_rank_components_rank_component__WEBPACK_IMPORTED_MODULE_4__["RankComponent"], {
            width: '50vw',
            data: {}
        });
        dialogRef.afterClosed().subscribe(() => this.reload.emit());
    }
    openArmy() {
        const dialogRef = this.dialog.open(_army_components_army_component__WEBPACK_IMPORTED_MODULE_5__["ArmyComponent"], {
            width: '50vw',
            data: {
                // tslint:disable-next-line:max-line-length
                units: this.units,
            }
        });
        dialogRef.afterClosed().subscribe(() => this.reload.emit());
    }
    openDevelopments() {
        const dialogRef = this.dialog.open(src_app_features_developments_components_developments_component__WEBPACK_IMPORTED_MODULE_6__["DevelopmentsComponent"], {
            width: '50vw',
            data: {
                developements: this.developements
            }
        });
    }
    openExplorer() {
        const dialogRef = this.dialog.open(_explorer_explorer_component__WEBPACK_IMPORTED_MODULE_8__["ExplorerComponent"], {
            width: '50vw',
            data: {
                spies: this.units[src_app_shared__WEBPACK_IMPORTED_MODULE_7__["UnitType"].Felfedezo].unitCount
            }
        });
        dialogRef.afterClosed().subscribe(() => this.reload.emit());
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], inputs: { buildings: "buildings", developements: "developements", units: "units" }, outputs: { reload: "reload" }, decls: 15, vars: 0, consts: [[1, "buttons"], ["mat-button", "", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_1_listener() { return ctx.openBuildings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00C9p\u00FCletek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_3_listener() { return ctx.openDevelopments(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Fejleszt\u00E9sek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_5_listener() { return ctx.openAttack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "T\u00E1mad\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_7_listener() { return ctx.openFights(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Harc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_9_listener() { return ctx.openRanks(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ranglista");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_11_listener() { return ctx.openArmy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sereg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_13_listener() { return ctx.openExplorer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Felder\u00EDt\u0151");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]], styles: [".buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 10vw;\n  height: 5vh;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  background: transparent linear-gradient(258deg, #9ffff0 0%, #6beee9 36%, #0fcfde 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #3b7dbd;\n  border-radius: 6vw;\n  opacity: 1;\n  border: none;\n  font-family: baloo;\n  font-size: 1.6vw;\n  letter-spacing: 0px;\n  color: #001234;\n  opacity: 1;\n  padding: 1vh;\n  margin-bottom: 2vh;\n  outline: none;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  margin-left: 1vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcGFnZXMvbWFpbi9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrSEFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUNIOztBQUVBO0VBQ0csYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FBQ0giLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9wYWdlcy9tYWluL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b25zIGJ1dHRvbiB7XHJcbiAgIHdpZHRoOiAxMHZ3O1xyXG4gICBoZWlnaHQ6IDV2aDtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgyNThkZWcsICM5ZmZmZjAgMCUsICM2YmVlZTkgMzYlLCAjMGZjZmRlIDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzNiN2RiZDtcclxuICAgYm9yZGVyLXJhZGl1czogNnZ3O1xyXG4gICBvcGFjaXR5OiAxO1xyXG4gICBib3JkZXI6IG5vbmU7XHJcbiAgIGZvbnQtZmFtaWx5OiBiYWxvbztcclxuICAgZm9udC1zaXplOiAxLjZ2dztcclxuICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgY29sb3I6ICMwMDEyMzQ7XHJcbiAgIG9wYWNpdHk6IDE7XHJcbiAgIHBhZGRpbmc6IDF2aDtcclxuICAgbWFyZ2luLWJvdHRvbTogMnZoO1xyXG4gICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgIG1hcmdpbi1sZWZ0OiAxdnc7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }]; }, { buildings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], developements: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], units: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], reload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/features/pages/main/components/profile-card/profile-card.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/features/pages/main/components/profile-card/profile-card.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ProfileCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileCardComponent", function() { return ProfileCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service_authpage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../auth/service/authpage.service */ "./src/app/features/pages/auth/service/authpage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class ProfileCardComponent {
    constructor(authPageService, router) {
        this.authPageService = authPageService;
        this.router = router;
    }
    ngOnInit() {
    }
    logout() {
        localStorage.setItem('token', null);
        this.router.navigate(['login']);
    }
}
ProfileCardComponent.ɵfac = function ProfileCardComponent_Factory(t) { return new (t || ProfileCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service_authpage_service__WEBPACK_IMPORTED_MODULE_1__["AuthpageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ProfileCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileCardComponent, selectors: [["app-profile-card"]], inputs: { name: "name" }, decls: 9, vars: 1, consts: [[1, "card"], ["src", "assets/images/002-male.svg", "alt", "profile picture"], [1, "name"], [2, "cursor", "pointer", 3, "click"]], template: function ProfileCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Profil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileCardComponent_Template_span_click_7_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Kijelentkez\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
    } }, styles: [".card[_ngcontent-%COMP%] {\n  width: 10vw;\n  height: 25vh;\n  border-radius: 16px;\n  opacity: 1;\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  font-family: baloo;\n  outline: none;\n  text-align: center;\n  margin-left: 1vw;\n}\n\n.card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-family: baloo;\n  font-size: 1.2vw;\n  opacity: 1;\n  color: white;\n}\n\n.card[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  width: 4vw;\n  height: 5vw;\n  border: 2px solid #428DFF;\n  border-radius: 2vw;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcGFnZXMvbWFpbi9jb21wb25lbnRzL3Byb2ZpbGUtY2FyZC9wcm9maWxlLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNILGtCQUFBO0VBQ0EsVUFBQTtBQUVEIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvcGFnZXMvbWFpbi9jb21wb25lbnRzL3Byb2ZpbGUtY2FyZC9wcm9maWxlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICB3aWR0aDogMTB2dztcclxuICAgIGhlaWdodDogMjV2aDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xyXG4gICAgZm9udC1mYW1pbHk6IGJhbG9vO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxdnc7XHJcbn1cclxuLmNhcmQgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtZmFtaWx5OiBiYWxvbztcclxuICAgIGZvbnQtc2l6ZTogMS4ydnc7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2FyZCA+IHNwYW4gPiBpbWcge1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICB3aWR0aDogNHZ3O1xyXG4gICAgaGVpZ2h0OiA1dnc7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNDI4REZGO1xyXG5cdGJvcmRlci1yYWRpdXM6IDJ2dztcclxuXHRvcGFjaXR5OiAxO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-card',
                templateUrl: './profile-card.component.html',
                styleUrls: ['./profile-card.component.scss']
            }]
    }], function () { return [{ type: _auth_service_authpage_service__WEBPACK_IMPORTED_MODULE_1__["AuthpageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/features/pages/main/main.module.ts":
/*!****************************************************!*\
  !*** ./src/app/features/pages/main/main.module.ts ***!
  \****************************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _main_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.routing */ "./src/app/features/pages/main/main.routing.ts");
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main-page/main-page.component */ "./src/app/features/pages/main/components/main-page/main-page.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/features/pages/main/components/header/header.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/features/pages/main/components/navbar/navbar.component.ts");
/* harmony import */ var _components_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile-card/profile-card.component */ "./src/app/features/pages/main/components/profile-card/profile-card.component.ts");
/* harmony import */ var _buildings_components_buildings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../buildings/components/buildings.component */ "./src/app/features/buildings/components/buildings.component.ts");
/* harmony import */ var _attack_components_attack_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../attack/components/attack.component */ "./src/app/features/attack/components/attack.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _fight_components_fight_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../fight/components/fight.component */ "./src/app/features/fight/components/fight.component.ts");
/* harmony import */ var _army_components_army_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../army/components/army.component */ "./src/app/features/army/components/army.component.ts");
/* harmony import */ var _rank_components_rank_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../rank/components/rank.component */ "./src/app/features/rank/components/rank.component.ts");
/* harmony import */ var _developments_components_developments_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../developments/components/developments.component */ "./src/app/features/developments/components/developments.component.ts");
/* harmony import */ var _explorer_explorer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../explorer/explorer.component */ "./src/app/features/explorer/explorer.component.ts");
















class MainModule {
}
MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainModule_Factory(t) { return new (t || MainModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _main_routing__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _components_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_6__["ProfileCardComponent"],
        _buildings_components_buildings_component__WEBPACK_IMPORTED_MODULE_7__["BuildingsComponent"],
        _attack_components_attack_component__WEBPACK_IMPORTED_MODULE_8__["AttackComponent"],
        _fight_components_fight_component__WEBPACK_IMPORTED_MODULE_10__["FightComponent"],
        _army_components_army_component__WEBPACK_IMPORTED_MODULE_11__["ArmyComponent"],
        _rank_components_rank_component__WEBPACK_IMPORTED_MODULE_12__["RankComponent"],
        _developments_components_developments_component__WEBPACK_IMPORTED_MODULE_13__["DevelopmentsComponent"],
        _explorer_explorer_component__WEBPACK_IMPORTED_MODULE_14__["ExplorerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _main_routing__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]], exports: [_components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _components_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_6__["ProfileCardComponent"], _attack_components_attack_component__WEBPACK_IMPORTED_MODULE_8__["AttackComponent"], _fight_components_fight_component__WEBPACK_IMPORTED_MODULE_10__["FightComponent"], _army_components_army_component__WEBPACK_IMPORTED_MODULE_11__["ArmyComponent"], _rank_components_rank_component__WEBPACK_IMPORTED_MODULE_12__["RankComponent"], _developments_components_developments_component__WEBPACK_IMPORTED_MODULE_13__["DevelopmentsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                    _components_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_6__["ProfileCardComponent"],
                    _buildings_components_buildings_component__WEBPACK_IMPORTED_MODULE_7__["BuildingsComponent"],
                    _attack_components_attack_component__WEBPACK_IMPORTED_MODULE_8__["AttackComponent"],
                    _fight_components_fight_component__WEBPACK_IMPORTED_MODULE_10__["FightComponent"],
                    _army_components_army_component__WEBPACK_IMPORTED_MODULE_11__["ArmyComponent"],
                    _rank_components_rank_component__WEBPACK_IMPORTED_MODULE_12__["RankComponent"],
                    _developments_components_developments_component__WEBPACK_IMPORTED_MODULE_13__["DevelopmentsComponent"],
                    _explorer_explorer_component__WEBPACK_IMPORTED_MODULE_14__["ExplorerComponent"]
                ],
                // tslint:disable-next-line:max-line-length
                exports: [_components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _components_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_6__["ProfileCardComponent"], _attack_components_attack_component__WEBPACK_IMPORTED_MODULE_8__["AttackComponent"], _fight_components_fight_component__WEBPACK_IMPORTED_MODULE_10__["FightComponent"], _army_components_army_component__WEBPACK_IMPORTED_MODULE_11__["ArmyComponent"], _rank_components_rank_component__WEBPACK_IMPORTED_MODULE_12__["RankComponent"], _developments_components_developments_component__WEBPACK_IMPORTED_MODULE_13__["DevelopmentsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _main_routing__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/pages/main/main.routing.ts":
/*!*****************************************************!*\
  !*** ./src/app/features/pages/main/main.routing.ts ***!
  \*****************************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/main-page/main-page.component */ "./src/app/features/pages/main/components/main-page/main-page.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/service/auth-guard.service */ "./src/app/features/pages/auth/service/auth-guard.service.ts");






const routes = [
    {
        path: '',
        component: _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_0__["MainPageComponent"],
        canActivate: [_auth_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }
];
class MainRoutingModule {
}
MainRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MainRoutingModule });
MainRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MainRoutingModule_Factory(t) { return new (t || MainRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MainRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MainRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/rank/components/rank.component.ts":
/*!************************************************************!*\
  !*** ./src/app/features/rank/components/rank.component.ts ***!
  \************************************************************/
/*! exports provided: RankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankComponent", function() { return RankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _service_feature_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/feature.service */ "./src/app/features/service/feature.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











function RankComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 12);
} }
function RankComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r10 + 1, ".");
} }
function RankComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 12);
} }
function RankComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r11.username, "");
} }
function RankComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 12);
} }
function RankComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.point, " ");
} }
function RankComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 15);
} }
const _c0 = function (a0) { return { "onSelect": a0 }; };
function RankComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RankComponent_tr_17_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const row_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onSelect(row_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r13 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r8.selectedRowIndex == row_r13.id));
} }
class RankComponent {
    constructor(service, snackbar) {
        this.service = service;
        this.snackbar = snackbar;
        this.displayedColumns = ['place', 'name', 'points'];
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.searchUsers('');
        this.name = null;
        this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((term) => this.service.getRanks(term))).subscribe(res => {
            console.log('ASDSADSAD', res);
            this.rankList = res.map((x) => (Object.assign({}, x)));
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.rankList);
            this.dataSource.sort = this.sort;
            // this.dataSource = this.rankList;
            console.log(this.dataSource);
            this.selected = false;
        });
    }
    onSelect(row) {
        this.selectedRowIndex = row.id;
        this.selected = true;
    }
    search(term) {
        if (term == null) {
            this.snackbar.open('A név null!', 'Bezár', {
                duration: 3000
            });
        }
        else {
            this.sendData(term);
        }
        //   this.searchTerms.next(term);
    }
    searchUsers(name) {
        this.sendData(name);
        if (name == null) {
            this.snackbar.open('A név null!', 'Bezár', {
                duration: 3000
            });
        }
    }
    sendData(name) {
        this.service.getRanks(name).subscribe(res => {
            this.rankList = res.map((x) => (Object.assign({}, x)));
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.rankList);
            this.dataSource.sort = this.sort;
            console.log(this.rankList);
        });
    }
}
RankComponent.ɵfac = function RankComponent_Factory(t) { return new (t || RankComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_feature_service__WEBPACK_IMPORTED_MODULE_5__["FeatureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"])); };
RankComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RankComponent, selectors: [["app-rank"]], viewQuery: function RankComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 18, vars: 3, consts: [["type", "search", "name", "searchBar", "placeholder", "Felhaszn\u00E1l\u00F3n\u00E9v", 1, "search", 3, "input"], ["searchbox", ""], [1, "infos"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "place"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "width: 2vw;", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "points"], ["mat-header-row", "", "style", "height: 2vh;", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 2, "width", "2vw"], ["mat-cell", ""], ["mat-header-row", "", 2, "height", "2vh"], ["mat-row", "", 3, "ngClass", "click"]], template: function RankComponent_Template(rf, ctx) { if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ranglista");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function RankComponent_Template_input_input_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.search(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RankComponent_th_8_Template, 1, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RankComponent_td_9_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RankComponent_th_11_Template, 1, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RankComponent_td_12_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RankComponent_th_14_Template, 1, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RankComponent_td_15_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RankComponent_tr_16_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RankComponent_tr_17_Template, 1, 3, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], styles: [".mat-dialog-container {\n  background-color: #03255f !important;\n  color: white;\n  overflow-x: hidden;\n  border-radius: 16px;\n}\n\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.infos[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  max-height: 400px;\n}\n\n.mat-table[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n  font-family: open-sans-regular;\n  background-color: #03255f !important;\n  font-size: 1vw;\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: left;\n  font-family: baloo;\n  font-size: 32px;\n  letter-spacing: 0px;\n  color: #ffffff;\n  margin-top: 1vh;\n  opacity: 1;\n}\n\n.search[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  font-family: baloo;\n  border-radius: 15px;\n  color: #1c3e76;\n  font-size: 16px;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-radius: 20px;\n  opacity: 0.39;\n  margin-right: 20%;\n  outline: none;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px #03255f;\n  border-radius: 2px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #3f68ae;\n  border-radius: 2px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #03255f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcmFuay9jb21wb25lbnRzL3JhbmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0FBR0Y7O0FBREE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBSUY7O0FBRkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBS0Y7O0FBRkE7RUFDRSxVQUFBO0FBS0Y7O0FBRkEsVUFBQTs7QUFDQTtFQUNFLGlDQUFBO0VBQ0Esa0JBQUE7QUFLRjs7QUFGQSxXQUFBOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQUtGOztBQUZBLG9CQUFBOztBQUNBO0VBQ0UsbUJBQUE7QUFLRiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3JhbmsvY29tcG9uZW50cy9yYW5rLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzMjU1ZiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxufVxyXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5pbmZvcyB7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBtYXgtaGVpZ2h0OiA0MDBweDtcclxufVxyXG4ubWF0LXRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtZmFtaWx5OiBvcGVuLXNhbnMtcmVndWxhcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMyNTVmICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxdnc7XHJcbn1cclxuaDEge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1mYW1pbHk6IGJhbG9vO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIG1hcmdpbi10b3A6IDF2aDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5zZWFyY2gge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBmb250LWZhbWlseTogYmFsb287XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBjb2xvcjogIzFjM2U3NjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBvcGFjaXR5OiAwLjM5O1xyXG4gIG1hcmdpbi1yaWdodDogMjAlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA1cHg7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggIzAzMjU1ZjtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjM2Y2OGFlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMwMzI1NWY7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RankComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rank',
                templateUrl: './rank.component.html',
                styleUrls: ['./rank.component.scss']
            }]
    }], function () { return [{ type: _service_feature_service__WEBPACK_IMPORTED_MODULE_5__["FeatureService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/features/service/feature.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/features/service/feature.service.ts ***!
  \*****************************************************/
/*! exports provided: FeatureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureService", function() { return FeatureService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");




class FeatureService {
    constructor(buildingsClient, attackClient, armyClient, cityClient, profileClient, gameClient, upgradeType, upgradeClient, buildingTypeClient, spyClient) {
        this.buildingsClient = buildingsClient;
        this.attackClient = attackClient;
        this.armyClient = armyClient;
        this.cityClient = cityClient;
        this.profileClient = profileClient;
        this.gameClient = gameClient;
        this.upgradeType = upgradeType;
        this.upgradeClient = upgradeClient;
        this.buildingTypeClient = buildingTypeClient;
        this.spyClient = spyClient;
    }
    getBuildings() {
        return this.buildingsClient.getBuilding();
        // return of(BUIDLDINGS);
    }
    getBuildingTypes() {
        return this.buildingTypeClient.getBuildings();
    }
    getDevelopments() {
        return this.upgradeType.getUpgrades();
        // return of(DEVELOPMENTS);
    }
    getUpgradesinfos() {
        return this.upgradeClient.getCurrentUpgradeStatuses();
    }
    startUpgrades(upgradeType) {
        console.log(upgradeType);
        return this.upgradeClient.purchaseUpgrade(upgradeType);
    }
    getAttack(name) {
        return this.attackClient.getAttackableUsers(name);
    }
    sendAttack(id, units) {
        this.attack = new src_app_shared__WEBPACK_IMPORTED_MODULE_1__["AttackDto"]();
        this.attack.defenderCityId = id;
        this.attack.units = units.map((x) => new src_app_shared__WEBPACK_IMPORTED_MODULE_1__["ArmyUnitDto"](Object.assign({}, x)));
        return this.attackClient.startAttack(this.attack);
    }
    getRanks(name) {
        return this.profileClient.getRanks(name);
    }
    getFights() {
        return this.attackClient.getAllAttacks();
    }
    getArmy() {
        return this.armyClient.getArmy();
    }
    purchaseUnits(units) {
        // tslint:disable-next-line:no-shadowed-variable
        this.units = units.map((x) => new src_app_shared__WEBPACK_IMPORTED_MODULE_1__["ArmyUnitDto"](Object.assign({}, x)));
        return this.armyClient.purchaseUnits(this.units);
    }
    getCityArmy() {
        return this.armyClient.getArmy();
    }
    getProfile() {
        return this.profileClient.getProfile();
        // return of(PROFILE);
    }
    getCity() {
        return this.cityClient.getCity();
    }
    endTurn() {
        return this.gameClient.nextTurn();
    }
    getTurn() {
        return this.gameClient.getGameState();
    }
    purchaseBuildings(buildingType) {
        return this.buildingsClient.purchaseBuilding(buildingType);
    }
    getAllAttacks() {
        return this.spyClient.getAllAttacks();
    }
    sendSpies(id, spies) {
        return this.spyClient.startSpying(new src_app_shared__WEBPACK_IMPORTED_MODULE_1__["SpyingDto"]({ defenderCityId: id, spyCount: spies }));
    }
}
FeatureService.ɵfac = function FeatureService_Factory(t) { return new (t || FeatureService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared__WEBPACK_IMPORTED_MODULE_1__["BuildingsClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared__WEBPACK_IMPORTED_MODULE_1__["AttackClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared__WEBPACK_IMPORTED_MODULE_1__["ArmyClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared__WEBPACK_IMPORTED_MODULE_1__["CityClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared__WEBPACK_IMPORTED_MODULE_1__["ProfileClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared__WEBPACK_IMPORTED_MODULE_1__["GameClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared__WEBPACK_IMPORTED_MODULE_1__["UpgradeTypeClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared__WEBPACK_IMPORTED_MODULE_1__["UpgradesClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared__WEBPACK_IMPORTED_MODULE_1__["BuildingTypeClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared__WEBPACK_IMPORTED_MODULE_1__["SpyClient"])); };
FeatureService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FeatureService, factory: FeatureService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeatureService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["BuildingsClient"] }, { type: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["AttackClient"] }, { type: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["ArmyClient"] }, { type: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["CityClient"] }, { type: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["ProfileClient"] }, { type: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["GameClient"] }, { type: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["UpgradeTypeClient"] }, { type: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["UpgradesClient"] }, { type: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["BuildingTypeClient"] }, { type: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["SpyClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: API_BASE_URL, ArmyClient, AttackClient, AuthClient, BuildingsClient, BuildingTypeClient, CityClient, GameClient, ProfileClient, SpyClient, UpgradesClient, UpgradeTypeClient, UnitDto, UnitType, ArmyUnitDto, AttackDto, AttackableUsersDto, AttackResponseDto, ArmyDto, AuthResponseDto, LoginDto, RegisterDto, BuildingDto, Status, BuildingType, BuildingAttributeDto, CityDto, UpgradeDto, UpgradeType, RankDto, SpyingDto, SpyingResponseDto, UpgradeAttributeDto, ApiException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_BASE_URL", function() { return API_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmyClient", function() { return ArmyClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttackClient", function() { return AttackClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthClient", function() { return AuthClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingsClient", function() { return BuildingsClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingTypeClient", function() { return BuildingTypeClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityClient", function() { return CityClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameClient", function() { return GameClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileClient", function() { return ProfileClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpyClient", function() { return SpyClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradesClient", function() { return UpgradesClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeTypeClient", function() { return UpgradeTypeClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitDto", function() { return UnitDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitType", function() { return UnitType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmyUnitDto", function() { return ArmyUnitDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttackDto", function() { return AttackDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttackableUsersDto", function() { return AttackableUsersDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttackResponseDto", function() { return AttackResponseDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmyDto", function() { return ArmyDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthResponseDto", function() { return AuthResponseDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDto", function() { return LoginDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterDto", function() { return RegisterDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingDto", function() { return BuildingDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingType", function() { return BuildingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingAttributeDto", function() { return BuildingAttributeDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityDto", function() { return CityDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeDto", function() { return UpgradeDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeType", function() { return UpgradeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankDto", function() { return RankDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpyingDto", function() { return SpyingDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpyingResponseDto", function() { return SpyingResponseDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeAttributeDto", function() { return UpgradeAttributeDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiException", function() { return ApiException; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.6.2.0 (NJsonSchema v10.1.23.0 (Newtonsoft.Json v12.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming






const API_BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('API_BASE_URL');
class ArmyClient {
    constructor(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    getArmy() {
        let url_ = this.baseUrl + "/api/Army";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])((response_) => {
            return this.processGetArmy(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return this.processGetArmy(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    }
    processGetArmy(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(UnitDto.fromJS(item));
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    }
    purchaseUnits(purchase) {
        let url_ = this.baseUrl + "/api/Army";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(purchase);
        let options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/octet-stream"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])((response_) => {
            return this.processPurchaseUnits(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return this.processPurchaseUnits(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    }
    processPurchaseUnits(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ fileName: fileName, data: responseBlob, status: status, headers: _headers });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    }
}
ArmyClient.ɵfac = function ArmyClient_Factory(t) { return new (t || ArmyClient)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8)); };
ArmyClient.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ArmyClient, factory: ArmyClient.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ArmyClient, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [API_BASE_URL]
            }] }]; }, null); })();
class AttackClient {
    constructor(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    startAttack(attack) {
        let url_ = this.baseUrl + "/api/Attack";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(attack);
        let options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/octet-stream"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])((response_) => {
            return this.processStartAttack(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return this.processStartAttack(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    }
    processStartAttack(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ fileName: fileName, data: responseBlob, status: status, headers: _headers });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    }
    getAttackableUsers(name) {
        let url_ = this.baseUrl + "/api/Attack?";
        if (name !== undefined && name !== null)
            url_ += "name=" + encodeURIComponent("" + name) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])((response_) => {
            return this.processGetAttackableUsers(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return this.processGetAttackableUsers(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    }
    processGetAttackableUsers(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(AttackableUsersDto.fromJS(item));
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    }
    getAllAttacks() {
        let url_ = this.baseUrl + "/api/Attack/all";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])((response_) => {
            return this.processGetAllAttacks(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return this.processGetAllAttacks(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    }
    processGetAllAttacks(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(AttackResponseDto.fromJS(item));
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    }
}
AttackClient.ɵfac = function AttackClient_Factory(t) { return new (t || AttackClient)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8)); };
AttackClient.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AttackClient, factory: AttackClient.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AttackClient, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [API_BASE_URL]
            }] }]; }, null); })();
class AuthClient {
    constructor(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    authenticateUser(login) {
        let url_ = this.baseUrl + "/api/Auth/login";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(login);
        console.log(content_);
        let options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])((response_) => {
            return this.processAuthenticateUser(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return this.processAuthenticateUser(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    }
    processAuthenticateUser(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = AuthResponseDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    }
    registerUser(registration) {
        let url_ = this.baseUrl + "/api/Auth/register";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(registration);
        let options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])((response_) => {
            return this.processRegisterUser(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return this.processRegisterUser(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    }
    processRegisterUser(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = AuthResponseDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    }
}
AuthClient.ɵfac = function AuthClient_Factory(t) { return new (t || AuthClient)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8)); };
AuthClient.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthClient, factory: AuthClient.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AuthClient, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [API_BASE_URL]
            }] }]; }, null); })();
class BuildingsClient {
    constructor(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    getBuilding() {
        let url_ = this.baseUrl + "/api/Buildings";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])((response_) => {
            return this.processGetBuilding(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return this.processGetBuilding(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    }
    processGetBuilding(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(BuildingDto.fromJS(item));
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    }
    purchaseBuilding(buildingType) {
        let url_ = this.baseUrl + "/api/Buildings?";
        if (buildingType === null)
            throw new Error("The parameter 'buildingType' cannot be null.");
        else if (buildingType !== undefined)
            url_ += "buildingType=" + encodeURIComponent("" + buildingType) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({})
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])((response_) => {
            return this.processPurchaseBuilding(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return this.processPurchaseBuilding(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    }
    processPurchaseBuilding(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    }
}
BuildingsClient.ɵfac = function BuildingsClient_Factory(t) { return new (t || BuildingsClient)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8)); };
BuildingsClient.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BuildingsClient, factory: BuildingsClient.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BuildingsClient, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [API_BASE_URL]
            }] }]; }, null); })();
class BuildingTypeClient {
    constructor(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    getBuildings() {
        let url_ = this.baseUrl + "/api/BuildingType";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])((response_) => {
            return this.processGetBuildings(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return this.processGetBuildings(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    }
    processGetBuildings(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(BuildingAttributeDto.fromJS(item));
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    }
}
BuildingTypeClient.ɵfac = function BuildingTypeClient_Factory(t) { return new (t || BuildingTypeClient)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8)); };
BuildingTypeClient.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BuildingTypeClient, factory: BuildingTypeClient.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BuildingTypeClient, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [API_BASE_URL]
            }] }]; }, null); })();
class CityClient {
    constructor(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    getCity() {
        let url_ = this.baseUrl + "/api/City";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])((response_) => {
            return this.processGetCity(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return this.processGetCity(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    }
    processGetCity(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = CityDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    }
}
CityClient.ɵfac = function CityClient_Factory(t) { return new (t || CityClient)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8)); };
CityClient.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CityClient, factory: CityClient.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CityClient, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [API_BASE_URL]
            }] }]; }, null); })();
class GameClient {
    constructor(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    getGameState() {
        let url_ = this.baseUrl + "/api/Game";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])((response_) => {
            return this.processGetGameState(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return this.processGetGameState(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    }
    processGetGameState(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 !== undefined ? resultData200 : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    }
    nextTurn() {
        let url_ = this.baseUrl + "/api/Game";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({})
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])((response_) => {
            return this.processNextTurn(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return this.processNextTurn(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    }
    processNextTurn(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    }
}
GameClient.ɵfac = function GameClient_Factory(t) { return new (t || GameClient)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8)); };
GameClient.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GameClient, factory: GameClient.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](GameClient, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [API_BASE_URL]
            }] }]; }, null); })();
class ProfileClient {
    constructor(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    deleteProfile(id) {
        let url_ = this.baseUrl + "/api/Profile/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "application/octet-stream"
            })
        };
        return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])((response_) => {
            return this.processDeleteProfile(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return this.processDeleteProfile(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    }
    processDeleteProfile(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ fileName: fileName, data: responseBlob, status: status, headers: _headers });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    }
    getRanks(name) {
        let url_ = this.baseUrl + "/api/Profile/ranks?";
        if (name !== undefined && name !== null)
            url_ += "name=" + encodeURIComponent("" + name) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])((response_) => {
            return this.processGetRanks(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return this.processGetRanks(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    }
    processGetRanks(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(RankDto.fromJS(item));
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    }
    getProfile() {
        let url_ = this.baseUrl + "/api/Profile";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])((response_) => {
            return this.processGetProfile(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return this.processGetProfile(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    }
    processGetProfile(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = RankDto.fromJS(resultData200);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    }
}
ProfileClient.ɵfac = function ProfileClient_Factory(t) { return new (t || ProfileClient)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8)); };
ProfileClient.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ProfileClient, factory: ProfileClient.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ProfileClient, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [API_BASE_URL]
            }] }]; }, null); })();
class SpyClient {
    constructor(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    startSpying(spying) {
        let url_ = this.baseUrl + "/api/Spy";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(spying);
        let options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/octet-stream"
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])((response_) => {
            return this.processStartSpying(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return this.processStartSpying(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    }
    processStartSpying(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ fileName: fileName, data: responseBlob, status: status, headers: _headers });
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    }
    getAllAttacks() {
        let url_ = this.baseUrl + "/api/Spy";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])((response_) => {
            return this.processGetAllAttacks(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return this.processGetAllAttacks(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    }
    processGetAllAttacks(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(SpyingResponseDto.fromJS(item));
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    }
}
SpyClient.ɵfac = function SpyClient_Factory(t) { return new (t || SpyClient)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8)); };
SpyClient.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SpyClient, factory: SpyClient.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SpyClient, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [API_BASE_URL]
            }] }]; }, null); })();
class UpgradesClient {
    constructor(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    getCurrentUpgradeStatuses() {
        let url_ = this.baseUrl + "/api/Upgrades";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])((response_) => {
            return this.processGetCurrentUpgradeStatuses(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return this.processGetCurrentUpgradeStatuses(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    }
    processGetCurrentUpgradeStatuses(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(UpgradeDto.fromJS(item));
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    }
    purchaseUpgrade(upgradeType) {
        let url_ = this.baseUrl + "/api/Upgrades?";
        if (upgradeType === null)
            throw new Error("The parameter 'upgradeType' cannot be null.");
        else if (upgradeType !== undefined)
            url_ += "upgradeType=" + encodeURIComponent("" + upgradeType) + "&";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({})
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])((response_) => {
            return this.processPurchaseUpgrade(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return this.processPurchaseUpgrade(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    }
    processPurchaseUpgrade(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    }
}
UpgradesClient.ɵfac = function UpgradesClient_Factory(t) { return new (t || UpgradesClient)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8)); };
UpgradesClient.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UpgradesClient, factory: UpgradesClient.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](UpgradesClient, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [API_BASE_URL]
            }] }]; }, null); })();
class UpgradeTypeClient {
    constructor(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    getUpgrades() {
        let url_ = this.baseUrl + "/api/UpgradeType";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])((response_) => {
            return this.processGetUpgrades(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((response_) => {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponseBase"]) {
                try {
                    return this.processGetUpgrades(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response_);
        }));
    }
    processGetUpgrades(response) {
        const status = response.status;
        const responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        let _headers = {};
        if (response.headers) {
            for (let key of response.headers.keys()) {
                _headers[key] = response.headers.get(key);
            }
        }
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                if (Array.isArray(resultData200)) {
                    result200 = [];
                    for (let item of resultData200)
                        result200.push(UpgradeAttributeDto.fromJS(item));
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    }
}
UpgradeTypeClient.ɵfac = function UpgradeTypeClient_Factory(t) { return new (t || UpgradeTypeClient)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8)); };
UpgradeTypeClient.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UpgradeTypeClient, factory: UpgradeTypeClient.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](UpgradeTypeClient, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [API_BASE_URL]
            }] }]; }, null); })();
class UnitDto {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.price = _data["price"];
            this.foodNecessity = _data["foodNecessity"];
            this.damage = _data["damage"];
            this.defense = _data["defense"];
            this.unitType = _data["unitType"];
            this.name = _data["name"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new UnitDto();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["price"] = this.price;
        data["foodNecessity"] = this.foodNecessity;
        data["damage"] = this.damage;
        data["defense"] = this.defense;
        data["unitType"] = this.unitType;
        data["name"] = this.name;
        return data;
    }
}
var UnitType;
(function (UnitType) {
    UnitType[UnitType["Lezercapa"] = 0] = "Lezercapa";
    UnitType[UnitType["Rohamfoka"] = 1] = "Rohamfoka";
    UnitType[UnitType["Csatacsiko"] = 2] = "Csatacsiko";
    UnitType[UnitType["Hadvezer"] = 3] = "Hadvezer";
    UnitType[UnitType["Felfedezo"] = 4] = "Felfedezo";
})(UnitType || (UnitType = {}));
class ArmyUnitDto {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.unitType = _data["unitType"];
            this.unitCount = _data["unitCount"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new ArmyUnitDto();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["unitType"] = this.unitType;
        data["unitCount"] = this.unitCount;
        return data;
    }
}
class AttackDto {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.defenderCityId = _data["defenderCityId"];
            if (Array.isArray(_data["units"])) {
                this.units = [];
                for (let item of _data["units"])
                    this.units.push(ArmyUnitDto.fromJS(item));
            }
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new AttackDto();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["defenderCityId"] = this.defenderCityId;
        if (Array.isArray(this.units)) {
            data["units"] = [];
            for (let item of this.units)
                data["units"].push(item.toJSON());
        }
        return data;
    }
}
class AttackableUsersDto {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.id = _data["id"];
            this.username = _data["username"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new AttackableUsersDto();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["username"] = this.username;
        return data;
    }
}
class AttackResponseDto {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.cityName = _data["cityName"];
            this.unitList = _data["unitList"] ? ArmyDto.fromJS(_data["unitList"]) : undefined;
            this.wasSuccessful = _data["wasSuccessful"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new AttackResponseDto();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["cityName"] = this.cityName;
        data["unitList"] = this.unitList ? this.unitList.toJSON() : undefined;
        data["wasSuccessful"] = this.wasSuccessful;
        return data;
    }
}
class ArmyDto {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            if (Array.isArray(_data["unitList"])) {
                this.unitList = [];
                for (let item of _data["unitList"])
                    this.unitList.push(ArmyUnitDto.fromJS(item));
            }
            this.armyFoodNecessity = _data["armyFoodNecessity"];
            this.armyPearlNecessity = _data["armyPearlNecessity"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new ArmyDto();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.unitList)) {
            data["unitList"] = [];
            for (let item of this.unitList)
                data["unitList"].push(item.toJSON());
        }
        data["armyFoodNecessity"] = this.armyFoodNecessity;
        data["armyPearlNecessity"] = this.armyPearlNecessity;
        return data;
    }
}
class AuthResponseDto {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.token = _data["token"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new AuthResponseDto();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["token"] = this.token;
        return data;
    }
}
class LoginDto {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.username = _data["username"];
            this.password = _data["password"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new LoginDto();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["username"] = this.username;
        data["password"] = this.password;
        return data;
    }
}
class RegisterDto {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.username = _data["username"];
            this.password = _data["password"];
            this.city = _data["city"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new RegisterDto();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["username"] = this.username;
        data["password"] = this.password;
        data["city"] = this.city;
        return data;
    }
}
class BuildingDto {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.status = _data["status"];
            this.price = _data["price"];
            this.turnCount = _data["turnCount"];
            this.buildingType = _data["buildingType"];
            this.quantity = _data["quantity"];
            this.currentTurn = _data["currentTurn"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new BuildingDto();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["status"] = this.status;
        data["price"] = this.price;
        data["turnCount"] = this.turnCount;
        data["buildingType"] = this.buildingType;
        data["quantity"] = this.quantity;
        data["currentTurn"] = this.currentTurn;
        return data;
    }
}
var Status;
(function (Status) {
    Status[Status["UnBuilt"] = 0] = "UnBuilt";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Done"] = 2] = "Done";
})(Status || (Status = {}));
var BuildingType;
(function (BuildingType) {
    BuildingType[BuildingType["Aramlasiranyito"] = 0] = "Aramlasiranyito";
    BuildingType[BuildingType["Zatonyvar"] = 1] = "Zatonyvar";
})(BuildingType || (BuildingType = {}));
class BuildingAttributeDto {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.buildingType = _data["buildingType"];
            this.price = _data["price"];
            this.resident = _data["resident"];
            this.coral = _data["coral"];
            this.hostCapacity = _data["hostCapacity"];
            this.name = _data["name"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new BuildingAttributeDto();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["buildingType"] = this.buildingType;
        data["price"] = this.price;
        data["resident"] = this.resident;
        data["coral"] = this.coral;
        data["hostCapacity"] = this.hostCapacity;
        data["name"] = this.name;
        return data;
    }
}
class CityDto {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.id = _data["id"];
            this.pearlCount = _data["pearlCount"];
            this.pearlProduction = _data["pearlProduction"];
            this.coralCount = _data["coralCount"];
            this.coralProduction = _data["coralProduction"];
            if (Array.isArray(_data["buildings"])) {
                this.buildings = [];
                for (let item of _data["buildings"])
                    this.buildings.push(BuildingDto.fromJS(item));
            }
            if (Array.isArray(_data["upgrades"])) {
                this.upgrades = [];
                for (let item of _data["upgrades"])
                    this.upgrades.push(UpgradeDto.fromJS(item));
            }
            this.availableArmy = _data["availableArmy"] ? ArmyDto.fromJS(_data["availableArmy"]) : undefined;
            this.allArmy = _data["allArmy"] ? ArmyDto.fromJS(_data["allArmy"]) : undefined;
            this.servicePay = _data["servicePay"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new CityDto();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["pearlCount"] = this.pearlCount;
        data["pearlProduction"] = this.pearlProduction;
        data["coralCount"] = this.coralCount;
        data["coralProduction"] = this.coralProduction;
        if (Array.isArray(this.buildings)) {
            data["buildings"] = [];
            for (let item of this.buildings)
                data["buildings"].push(item.toJSON());
        }
        if (Array.isArray(this.upgrades)) {
            data["upgrades"] = [];
            for (let item of this.upgrades)
                data["upgrades"].push(item.toJSON());
        }
        data["availableArmy"] = this.availableArmy ? this.availableArmy.toJSON() : undefined;
        data["allArmy"] = this.allArmy ? this.allArmy.toJSON() : undefined;
        data["servicePay"] = this.servicePay;
        return data;
    }
}
class UpgradeDto {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.upgradeType = _data["upgradeType"];
            this.currentTurn = _data["currentTurn"];
            this.status = _data["status"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new UpgradeDto();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["upgradeType"] = this.upgradeType;
        data["currentTurn"] = this.currentTurn;
        data["status"] = this.status;
        return data;
    }
}
var UpgradeType;
(function (UpgradeType) {
    UpgradeType[UpgradeType["Iszaptraktor"] = 0] = "Iszaptraktor";
    UpgradeType[UpgradeType["Iszapkombajn"] = 1] = "Iszapkombajn";
    UpgradeType[UpgradeType["Korallfal"] = 2] = "Korallfal";
    UpgradeType[UpgradeType["Szonaragyu"] = 3] = "Szonaragyu";
    UpgradeType[UpgradeType["VizalattiHarcmuveszetek"] = 4] = "VizalattiHarcmuveszetek";
    UpgradeType[UpgradeType["Alkimia"] = 5] = "Alkimia";
})(UpgradeType || (UpgradeType = {}));
class RankDto {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.userId = _data["userId"];
            this.username = _data["username"];
            this.point = _data["point"];
            this.cityName = _data["cityName"];
            this.rank = _data["rank"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new RankDto();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["userId"] = this.userId;
        data["username"] = this.username;
        data["point"] = this.point;
        data["cityName"] = this.cityName;
        data["rank"] = this.rank;
        return data;
    }
}
class SpyingDto {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.defenderCityId = _data["defenderCityId"];
            this.spyCount = _data["spyCount"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new SpyingDto();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["defenderCityId"] = this.defenderCityId;
        data["spyCount"] = this.spyCount;
        return data;
    }
}
class SpyingResponseDto {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.cityName = _data["cityName"];
            this.spyCount = _data["spyCount"];
            this.wasSuccessful = _data["wasSuccessful"];
            this.defendingPower = _data["defendingPower"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new SpyingResponseDto();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["cityName"] = this.cityName;
        data["spyCount"] = this.spyCount;
        data["wasSuccessful"] = this.wasSuccessful;
        data["defendingPower"] = this.defendingPower;
        return data;
    }
}
class UpgradeAttributeDto {
    constructor(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    init(_data) {
        if (_data) {
            this.upgradeType = _data["upgradeType"];
            this.coralProduction = _data["coralProduction"];
            this.defensePoints = _data["defensePoints"];
            this.attackPoints = _data["attackPoints"];
            this.taxIncrease = _data["taxIncrease"];
            this.name = _data["name"];
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new UpgradeAttributeDto();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        data["upgradeType"] = this.upgradeType;
        data["coralProduction"] = this.coralProduction;
        data["defensePoints"] = this.defensePoints;
        data["attackPoints"] = this.attackPoints;
        data["taxIncrease"] = this.taxIncrease;
        data["name"] = this.name;
        return data;
    }
}
class ApiException extends Error {
    constructor(message, status, response, headers, result) {
        super();
        this.isApiException = true;
        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }
    static isApiException(obj) {
        return obj.isApiException === true;
    }
}
function throwException(message, status, response, headers, result) {
    if (result !== null && result !== undefined)
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(result);
    else
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new ApiException(message, status, response, headers, null));
}
function blobToText(blob) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        }
        else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next(event.target.result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! . */ "./src/app/shared/index.ts");
/* harmony import */ var _features_pages_auth_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../features/pages/auth/service/auth-guard.service */ "./src/app/features/pages/auth/service/auth-guard.service.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");



















class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [
        ___WEBPACK_IMPORTED_MODULE_11__["AuthClient"],
        _features_pages_auth_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"],
        ___WEBPACK_IMPORTED_MODULE_11__["ProfileClient"],
        ___WEBPACK_IMPORTED_MODULE_11__["BuildingsClient"],
        ___WEBPACK_IMPORTED_MODULE_11__["AttackClient"],
        ___WEBPACK_IMPORTED_MODULE_11__["SpyClient"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"]
        ], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"]], exports: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"]
                ],
                exports: [
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"]
                ],
                providers: [
                    ___WEBPACK_IMPORTED_MODULE_11__["AuthClient"],
                    _features_pages_auth_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"],
                    ___WEBPACK_IMPORTED_MODULE_11__["ProfileClient"],
                    ___WEBPACK_IMPORTED_MODULE_11__["BuildingsClient"],
                    ___WEBPACK_IMPORTED_MODULE_11__["AttackClient"],
                    ___WEBPACK_IMPORTED_MODULE_11__["SpyClient"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // ApiBaseUrl: 'http://localhost:5000'
    ApiBaseUrl: 'http://underseateam1.webtest.encosoft.internal'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Project\Betanulo\Undersea-Project\src\Frontend\Undersea-Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map