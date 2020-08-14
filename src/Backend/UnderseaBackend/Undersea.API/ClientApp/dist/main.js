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
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"],
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__["JwtHelperService"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__["JwtInterceptor"], multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _features_pages_main_main_module__WEBPACK_IMPORTED_MODULE_4__["MainModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__["JwtModule"].forRoot({
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
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__["JwtModule"]] }); })();
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
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__["JwtModule"].forRoot({
                        config: {
                            tokenGetter: () => {
                                return localStorage.getItem('access_token');
                            },
                            whitelistedDomains: ['localhost:4200']
                        }
                    })
                ],
                providers: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"],
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__["JwtHelperService"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_9__["JwtInterceptor"], multi: true },
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


class ArmyComponent {
    constructor() { }
    ngOnInit() {
    }
}
ArmyComponent.ɵfac = function ArmyComponent_Factory(t) { return new (t || ArmyComponent)(); };
ArmyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArmyComponent, selectors: [["app-army"]], decls: 2, vars: 0, template: function ArmyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "army works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2FybXkvY29tcG9uZW50cy9hcm15LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArmyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-army',
                templateUrl: './army.component.html',
                styleUrls: ['./army.component.scss']
            }]
    }], function () { return []; }, null); })();


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


class AttackComponent {
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        // we added this so that when the backdrop is clicked the modal is closed.
    }
}
AttackComponent.ɵfac = function AttackComponent_Factory(t) { return new (t || AttackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AttackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AttackComponent, selectors: [["app-attack"]], decls: 27, vars: 0, consts: [[1, "container"], [1, "infos"], ["type", "text", "placeholder", "Felhaszn\u00E1l\u00F3n\u00E9v"], ["src", "assets/images/007-shark.svg"], ["src", "assets/images/025-seal.svg"], ["src", "assets/images/013-seahorse.svg"]], template: function AttackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "T\u00E1mad\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "1. Jel\u00F6ld ki, kit szeretn\u00E9l megt\u00E1madni!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "2. \u00C1ll\u00EDtsd be, kiket k\u00FCldessz harcba!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "L\u00E9zerc\u00E1pa: 20 p\u00E9ld\u00E1ny ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Rohamf\u00F3ka: 2 p\u00E9ld\u00E1ny");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Csatacsik\u00F3: 50 p\u00E9ld\u00E1ny");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["html[_ngcontent-%COMP%] {\n  background-color: #03255F;\n  width: 80%;\n  height: 80%;\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: left;\n  font-family: baloo;\n  font-size: 32px;\n  letter-spacing: 0px;\n  color: #FFFFFF;\n  opacity: 1;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 378px;\n  height: 40px;\n  font-family: baloo;\n  border-radius: 15px;\n  color: #1C3E76;\n  font-size: 16px;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  border-radius: 20px;\n  opacity: 0.39;\n  margin-right: 20%;\n}\n\n.infos[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.infos[_ngcontent-%COMP%]    > table[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 45px;\n  background: #9FFFF0 0% 0% no-repeat padding-box;\n  border: 2px solid #428DFF;\n  border-radius: 14px;\n  opacity: 1;\n}\n\n  .mat-dialog-container {\n  background-color: #03255F !important;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvYXR0YWNrL2NvbXBvbmVudHMvYXR0YWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBREo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLG9DQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvYXR0YWNrL2NvbXBvbmVudHMvYXR0YWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5odG1sIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzI1NUY7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtZmFtaWx5OiBiYWxvbztcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuaW5wdXQge1xyXG4gICAgd2lkdGg6IDM3OHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGJhbG9vO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGNvbG9yOiAjMUMzRTc2O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgb3BhY2l0eTogMC4zOTtcclxuICAgIG1hcmdpbi1yaWdodDogMjAlO1xyXG59XHJcbi5pbmZvc3tcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmluZm9zID4gdGFibGUgPiB0ciA+IHRkID4gaW1nIHtcclxuICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzlGRkZGMCAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNDI4REZGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMyNTVGICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgXHJcbiAgfVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-attack',
                templateUrl: './attack.component.html',
                styleUrls: ['./attack.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


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
/* harmony import */ var _service_feature_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/feature.service */ "./src/app/features/service/feature.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");





class BuildingsComponent {
    constructor(featureService) {
        this.featureService = featureService;
    }
    ngOnInit() {
        this.buildings = [];
        // this.featureService.getBuildings().subscribe( res => {
        //   console.log(res);
        // });
    }
}
BuildingsComponent.ɵfac = function BuildingsComponent_Factory(t) { return new (t || BuildingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_feature_service__WEBPACK_IMPORTED_MODULE_1__["FeatureService"])); };
BuildingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuildingsComponent, selectors: [["app-buildings"]], decls: 13, vars: 0, consts: [[1, "flex"], [1, "main-content"], [1, "content"]], template: function BuildingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00C9p\u00FCletek ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Kattints r\u00E1, amelyiket szeretn\u00E9d megvenni. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Egyszerre csak egy \u00E9p\u00FClet \u00E9p\u00FClhet! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " content ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " content ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"]], styles: [".content[_ngcontent-%COMP%] {\n  width: 15vw;\n  height: 20vh;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  margin-top: 4vh;\n}\n\n  .mat-dialog-container {\n  background-color: #03255F !important;\n  color: white;\n}\n\n.building-modal[_ngcontent-%COMP%] {\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvYnVpbGRpbmdzL2NvbXBvbmVudHMvYnVpbGRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7QUFFRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9idWlsZGluZ3MvY29tcG9uZW50cy9idWlsZGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcclxuICB3aWR0aDogMTV2dztcclxuICBoZWlnaHQ6IDIwdmg7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogNHZoO1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzMjU1RiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbi5idWlsZGluZy1tb2RhbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuildingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-buildings',
                templateUrl: './buildings.component.html',
                styleUrls: ['./buildings.component.scss']
            }]
    }], function () { return [{ type: _service_feature_service__WEBPACK_IMPORTED_MODULE_1__["FeatureService"] }]; }, null); })();


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


class FightComponent {
    constructor() { }
    ngOnInit() {
    }
}
FightComponent.ɵfac = function FightComponent_Factory(t) { return new (t || FightComponent)(); };
FightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FightComponent, selectors: [["app-fight"]], decls: 2, vars: 0, template: function FightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "fight works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".mat-dialog-container {\n  background-color: #03255F !important;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvZmlnaHQvY29tcG9uZW50cy9maWdodC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvZmlnaHQvY29tcG9uZW50cy9maWdodC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMyNTVGICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgXHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FightComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fight',
                templateUrl: './fight.component.html',
                styleUrls: ['./fight.component.scss']
            }]
    }], function () { return []; }, null); })();


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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.authClient.authenticateUser(this.logind));
    }
    register(name, pwd, pwd2, cityName) {
        this.registerd.username = name;
        this.registerd.password = pwd;
        this.registerd.city = cityName;
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


class HeaderComponent {
    constructor() { }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 34, vars: 0, consts: [[1, "header"], [1, "infos"], [1, "game-infos"], [1, "icons"], ["src", "assets/images/007-shark.svg", "alt", "image"], ["src", "assets/images/025-seal.svg", "alt", "image"], ["src", "assets/images/013-seahorse.svg", "alt", "image"], ["src", "assets/images/shell.svg", "alt", "image"], ["src", "assets/images/018-coral.svg", "alt", "image"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "4.k\u00F6r");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "23.hely");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "13");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "230");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "230");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.header[_ngcontent-%COMP%] {\n  top: 25px;\n  left: 21px;\n  width: 1878px;\n  height: 84px;\n  border-radius: 16px;\n  opacity: 1;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {\n  .header[_ngcontent-%COMP%] {\n    backdrop-filter: blur(8px);\n    -webkit-backdrop-filter: blur(8px);\n    background-color: #FFFFFF;\n  }\n}\n\n.header[_ngcontent-%COMP%]    > .infos[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  text-align: left;\n  font-family: baloo;\n  letter-spacing: 0px;\n  font-size: 32px;\n  margin-left: 2rem;\n  color: #1C3E76;\n  opacity: 1;\n}\n\n.header[_ngcontent-%COMP%]    > .infos[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n}\n\n.header[_ngcontent-%COMP%]    > .infos[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.2% 3%;\n}\n\n.header[_ngcontent-%COMP%]    > .infos[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  border: 2px solid #428DFF;\n  border-radius: 14px;\n  opacity: 1;\n  width: 42px;\n  height: 45px;\n}\n\n.header[_ngcontent-%COMP%]    > .infos[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .icons[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  border: 2px solid #428DFF;\n  border-radius: 14px;\n  opacity: 1;\n  width: 42px;\n  height: 45px;\n}\n\n.header[_ngcontent-%COMP%]    > .infos[_ngcontent-%COMP%]    > .game-infos[_ngcontent-%COMP%] {\n  border: 2px solid #428DFF;\n  border-radius: 14px;\n  opacity: 1;\n  width: 42px;\n  height: 45px;\n}\n\n.header[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%] {\n  font-family: baloo;\n  font-size: 38px;\n  color: #9FFFF0;\n  letter-spacing: 0px;\n  text-align: left;\n  position: fixed;\n  top: 1100%;\n  opacity: 1;\n  left: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcGFnZXMvbWFpbi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtBQUNEOztBQUNBO0VBQ0ksU0FBQTtFQUNILFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUVBLG1CQUFBO0VBQ0EsVUFBQTtFQUNHLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNDO0lBQ0MsMEJBQUE7SUFDQSxrQ0FBQTtJQUNBLHlCQUFBO0VBQ0E7QUFDRjs7QUFFQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBQUE7O0FBSUE7RUFDQyxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBREQ7O0FBSUE7RUFDQyxxQkFBQTtFQUNBLGdCQUFBO0FBREQ7O0FBSUE7RUFDQyx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBREQ7O0FBTUE7RUFFQyx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSkQ7O0FBU0E7RUFHQyx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBUkQ7O0FBYUE7RUFDQyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUFWRCIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3BhZ2VzL21haW4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmhlYWRlcntcclxuICAgIHRvcDogMjVweDtcclxuXHRsZWZ0OiAyMXB4O1xyXG5cdHdpZHRoOiAxODc4cHg7XHJcblx0aGVpZ2h0OiA4NHB4O1xyXG5cclxuXHRib3JkZXItcmFkaXVzOiAxNnB4O1xyXG5cdG9wYWNpdHk6IDE7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuQHN1cHBvcnRzICgtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogbm9uZSkgb3IgKGJhY2tkcm9wLWZpbHRlcjogbm9uZSkge1xyXG5cdC5oZWFkZXIge1xyXG5cdFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XHJcblx0XHQtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpOyBcclxuXHRcdGJhY2tncm91bmQtY29sb3I6I0ZGRkZGRiA7XHJcblx0fVxyXG5cdFxyXG4gIH1cclxuLmhlYWRlciA+IC5pbmZvcyA+IHVsID4gbGkgPiBzcGFuIHtcclxudGV4dC1hbGlnbjogbGVmdDtcclxuZm9udC1mYW1pbHk6IGJhbG9vIDtcclxubGV0dGVyLXNwYWNpbmc6IDBweDtcclxuZm9udC1zaXplOiAzMnB4O1xyXG5tYXJnaW4tbGVmdDogMnJlbTtcclxuY29sb3I6ICMxQzNFNzY7XHJcbm9wYWNpdHk6IDE7XHJcblxyXG59XHJcblxyXG4uaGVhZGVyID4gLmluZm9zID4gdWwge1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0bWFyZ2luOiAwO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5oZWFkZXIgPiAuaW5mb3MgPiB1bCA+IGxpIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0cGFkZGluZzogMC4yJSAzJTtcclxufVxyXG5cclxuLmhlYWRlciA+IC5pbmZvcyA+IHVsID4gbGkgPiBzcGFuID4gaW1ne1xyXG5cdGJvcmRlcjogMnB4IHNvbGlkICM0MjhERkY7XHJcblx0Ym9yZGVyLXJhZGl1czogMTRweDtcclxuXHRvcGFjaXR5OiAxO1xyXG5cdHdpZHRoOiA0MnB4O1xyXG5cdGhlaWdodDogNDVweDtcclxuXHRcclxuXHJcbn1cclxuXHJcbi5oZWFkZXIgPiAuaW5mb3MgPiAgdWwgPiBsaSA+IC5pY29ucyA+IHNwYW4gPiAgaW1ne1xyXG5cclxuXHRib3JkZXI6IDJweCBzb2xpZCAjNDI4REZGO1xyXG5cdGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcblx0b3BhY2l0eTogMTtcclxuXHR3aWR0aDogNDJweDtcclxuXHRoZWlnaHQ6IDQ1cHg7XHJcblx0XHJcblxyXG59XHJcblxyXG4uaGVhZGVyID4gLmluZm9zID4gIC5nYW1lLWluZm9ze1xyXG5cclxuXHRcclxuXHRib3JkZXI6IDJweCBzb2xpZCAjNDI4REZGO1xyXG5cdGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcblx0b3BhY2l0eTogMTtcclxuXHR3aWR0aDogNDJweDtcclxuXHRoZWlnaHQ6IDQ1cHg7XHJcblx0XHJcblxyXG59XHJcblxyXG4uaGVhZGVyID4gLnRpdGxlIHtcclxuXHRmb250LWZhbWlseTogYmFsb287XHJcblx0Zm9udC1zaXplOiAzOHB4O1xyXG5cdGNvbG9yOiAjOUZGRkYwO1xyXG5cdGxldHRlci1zcGFjaW5nOiAwcHg7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOiAxMTAwJTtcclxuXHRvcGFjaXR5OiAxO1xyXG5cdGxlZnQ6IDElO1xyXG5cclxuXHJcblx0XHJcblx0XHJcblx0XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var src_app_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "./src/app/features/pages/main/components/header/header.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/features/pages/main/components/navbar/navbar.component.ts");
/* harmony import */ var _profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile-card/profile-card.component */ "./src/app/features/pages/main/components/profile-card/profile-card.component.ts");






class MainPageComponent {
    constructor(profileClient) {
        this.profileClient = profileClient;
    }
    ngOnInit() {
        this.profileClient.getProfile().subscribe(res => {
        });
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared__WEBPACK_IMPORTED_MODULE_1__["ProfileClient"])); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 6, vars: 0, consts: [[1, "left-side"], [1, "title"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-profile-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " UNDERSEA\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_4__["ProfileCardComponent"]], styles: [".title[_ngcontent-%COMP%] {\n  font-family: baloo;\n  font-size: 38px;\n  color: #9FFFF0;\n  letter-spacing: 0px;\n  text-align: left;\n  position: absolute;\n  bottom: 0;\n  opacity: 1;\n  left: 1%;\n  -webkit-text-decoration: overline wavy;\n          text-decoration: overline wavy;\n  -webkit-text-decoration-color: #9FFFF0;\n          text-decoration-color: #9FFFF0;\n}\n\n.left-side[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcGFnZXMvbWFpbi9jb21wb25lbnRzL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNILGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNHLGtCQUFBO0VBQ0gsU0FBQTtFQUNBLFVBQUE7RUFDRyxRQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7QUFDSjs7QUFFQTtFQUNDLGtCQUFBO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9wYWdlcy9tYWluL2NvbXBvbmVudHMvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogYmFsb287XHJcblx0Zm9udC1zaXplOiAzOHB4O1xyXG5cdGNvbG9yOiAjOUZGRkYwO1xyXG5cdGxldHRlci1zcGFjaW5nOiAwcHg7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRib3R0b206IDA7XHJcblx0b3BhY2l0eTogMTtcclxuICAgIGxlZnQ6IDElO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBvdmVybGluZSB3YXZ5O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjOUZGRkYwO1xyXG5cclxufVxyXG4ubGVmdC1zaWRlIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-page',
                templateUrl: './main-page.component.html',
                styleUrls: ['./main-page.component.scss']
            }]
    }], function () { return [{ type: src_app_shared__WEBPACK_IMPORTED_MODULE_1__["ProfileClient"] }]; }, null); })();


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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









class NavbarComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    openBuildings() {
        const dialogRef = this.dialog.open(_buildings_components_buildings_component__WEBPACK_IMPORTED_MODULE_1__["BuildingsComponent"], {
            width: '70vw',
            data: {}
        });
    }
    openAttack() {
        const dialogRef = this.dialog.open(_attack_components_attack_component__WEBPACK_IMPORTED_MODULE_2__["AttackComponent"], {
            width: '70vw',
            data: {},
            backdropClass: 'backdropBackground'
        });
    }
    openFights() {
        const dialogRef = this.dialog.open(_fight_components_fight_component__WEBPACK_IMPORTED_MODULE_3__["FightComponent"], {
            width: '70vw',
            data: {}
        });
    }
    openRanks() {
        const dialogRef = this.dialog.open(_rank_components_rank_component__WEBPACK_IMPORTED_MODULE_4__["RankComponent"], {
            width: '70vw',
            data: {}
        });
    }
    openArmy() {
        const dialogRef = this.dialog.open(_army_components_army_component__WEBPACK_IMPORTED_MODULE_5__["ArmyComponent"], {
            width: '70vw',
            data: {}
        });
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 11, vars: 0, consts: [[1, "buttons"], ["mat-button", "", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_1_listener() { return ctx.openBuildings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00C9p\u00FCletek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_3_listener() { return ctx.openAttack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "T\u00E1mad\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_5_listener() { return ctx.openFights(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Harc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_7_listener() { return ctx.openRanks(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ranglista");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_9_listener() { return ctx.openArmy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sereg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: [".buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: block;\n  width: 13%;\n  background: transparent linear-gradient(258deg, #9FFFF0 0%, #6BEEE9 36%, #0FCFDE 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #3B7DBD;\n  border-radius: 90px;\n  opacity: 1;\n  border: none;\n  font-family: baloo;\n  font-size: 25px;\n  letter-spacing: 0px;\n  color: #001234;\n  opacity: 1;\n  padding: 0.5%;\n  margin-bottom: 1%;\n  outline: none;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcGFnZXMvbWFpbi9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGtIQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFDQTs7QUFLQTtFQUNHLGNBQUE7QUFGSCIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3BhZ2VzL21haW4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbnMgYnV0dG9ue1xyXG5kaXNwbGF5OiBibG9jaztcclxud2lkdGg6IDEzJTtcclxuYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDI1OGRlZywgIzlGRkZGMCAwJSwgIzZCRUVFOSAzNiUsICMwRkNGREUgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG5ib3gtc2hhZG93OiAwcHggM3B4IDZweCAjM0I3REJEO1xyXG5ib3JkZXItcmFkaXVzOiA5MHB4O1xyXG5vcGFjaXR5OiAxO1xyXG5ib3JkZXI6IG5vbmU7XHJcbmZvbnQtZmFtaWx5OiBiYWxvbztcclxuZm9udC1zaXplOiAyNXB4IDtcclxubGV0dGVyLXNwYWNpbmc6IDBweDtcclxuY29sb3I6ICMwMDEyMzQ7XHJcbm9wYWNpdHk6IDE7XHJcbnBhZGRpbmc6IDAuNSU7XHJcbm1hcmdpbi1ib3R0b206IDElIDtcclxub3V0bGluZTogbm9uZTtcclxuXHJcblxyXG5cclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, null); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ProfileCardComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    logOut() {
        this.router.navigate(['login']);
    }
}
ProfileCardComponent.ɵfac = function ProfileCardComponent_Factory(t) { return new (t || ProfileCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ProfileCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileCardComponent, selectors: [["app-profile-card"]], decls: 9, vars: 0, consts: [[1, "card"], ["src", "assets/images/002-male.svg", "alt", "profile picture"], [1, "name"], [2, "cursor", "pointer", 3, "click"]], template: function ProfileCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "jakabjatekos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Profil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileCardComponent_Template_span_click_7_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Kijelentkez\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".card[_ngcontent-%COMP%] {\n  width: 192px;\n  height: 250px;\n  border-radius: 16px;\n  opacity: 1;\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  font-family: baloo;\n  outline: none;\n  text-align: center;\n}\n\n.card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-family: baloo;\n  font-size: 21px;\n  opacity: 1;\n  color: white;\n}\n\n.card[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  width: 70px;\n  height: 88px;\n  border: 2px solid #428DFF;\n  border-radius: 14px;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcGFnZXMvbWFpbi9jb21wb25lbnRzL3Byb2ZpbGUtY2FyZC9wcm9maWxlLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNILG1CQUFBO0VBQ0EsVUFBQTtBQUVEIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvcGFnZXMvbWFpbi9jb21wb25lbnRzL3Byb2ZpbGUtY2FyZC9wcm9maWxlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICB3aWR0aDogMTkycHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICBmb250LWZhbWlseTogYmFsb287XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jYXJkIHNwYW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogYmFsb287XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2FyZCA+IHNwYW4gPiBpbWcge1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogODhweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0MjhERkY7XHJcblx0Ym9yZGVyLXJhZGl1czogMTRweDtcclxuXHRvcGFjaXR5OiAxO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-card',
                templateUrl: './profile-card.component.html',
                styleUrls: ['./profile-card.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


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
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");










class MainModule {
}
MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainModule_Factory(t) { return new (t || MainModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _main_routing__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _components_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_6__["ProfileCardComponent"],
        _buildings_components_buildings_component__WEBPACK_IMPORTED_MODULE_7__["BuildingsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _main_routing__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]], exports: [_components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _components_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_6__["ProfileCardComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                    _components_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_6__["ProfileCardComponent"],
                    _buildings_components_buildings_component__WEBPACK_IMPORTED_MODULE_7__["BuildingsComponent"]
                ],
                exports: [_components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _components_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_6__["ProfileCardComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _main_routing__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
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


class RankComponent {
    constructor() { }
    ngOnInit() {
    }
}
RankComponent.ɵfac = function RankComponent_Factory(t) { return new (t || RankComponent)(); };
RankComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RankComponent, selectors: [["app-rank"]], decls: 2, vars: 0, template: function RankComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "rank works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".mat-dialog-container {\n  background-color: #03255F !important;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcmFuay9jb21wb25lbnRzL3JhbmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3JhbmsvY29tcG9uZW50cy9yYW5rLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzI1NUYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICBcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RankComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rank',
                templateUrl: './rank.component.html',
                styleUrls: ['./rank.component.scss']
            }]
    }], function () { return []; }, null); })();


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


class FeatureService {
    constructor() { }
}
FeatureService.ɵfac = function FeatureService_Factory(t) { return new (t || FeatureService)(); };
FeatureService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FeatureService, factory: FeatureService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeatureService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: API_BASE_URL, ArmyClient, AttackClient, AuthClient, BuildingsClient, ProfileClient, UpdgradesClient, UnitDto, UnitType, UnitPurchaseDto, AttackDto, ArmyDto, AttackableUsersDto, AuthResponseDto, LoginDto, RegisterDto, BuildingDto, Status, BuildingType, ProfileDto, UpgradeDto, ApiException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_BASE_URL", function() { return API_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmyClient", function() { return ArmyClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttackClient", function() { return AttackClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthClient", function() { return AuthClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingsClient", function() { return BuildingsClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileClient", function() { return ProfileClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdgradesClient", function() { return UpdgradesClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitDto", function() { return UnitDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitType", function() { return UnitType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitPurchaseDto", function() { return UnitPurchaseDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttackDto", function() { return AttackDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmyDto", function() { return ArmyDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttackableUsersDto", function() { return AttackableUsersDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthResponseDto", function() { return AuthResponseDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDto", function() { return LoginDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterDto", function() { return RegisterDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingDto", function() { return BuildingDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingType", function() { return BuildingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDto", function() { return ProfileDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeDto", function() { return UpgradeDto; });
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
                result200 = UnitDto.fromJS(resultData200);
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
    getAttackableUsers() {
        let url_ = this.baseUrl + "/api/Attack";
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
                result200 = AttackableUsersDto.fromJS(resultData200);
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
                result200 = BuildingDto.fromJS(resultData200);
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
                "Accept": "application/json"
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
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_responseText => {
                let result200 = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = ProfileDto.fromJS(resultData200);
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
                result200 = ProfileDto.fromJS(resultData200);
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
    getRanks() {
        let url_ = this.baseUrl + "/api/Profile/ranks";
        url_ = url_.replace(/[?&]$/, "");
        let options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Accept": "application/octet-stream"
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
class UpdgradesClient {
    constructor(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }
    getUpgrades() {
        let url_ = this.baseUrl + "/api/Updgrades";
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
                result200 = UpgradeDto.fromJS(resultData200);
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
UpdgradesClient.ɵfac = function UpdgradesClient_Factory(t) { return new (t || UpdgradesClient)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](API_BASE_URL, 8)); };
UpdgradesClient.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UpdgradesClient, factory: UpdgradesClient.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](UpdgradesClient, [{
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
        return data;
    }
}
var UnitType;
(function (UnitType) {
    UnitType[UnitType["Rohamfoka"] = 0] = "Rohamfoka";
    UnitType[UnitType["Csatacsiko"] = 1] = "Csatacsiko";
    UnitType[UnitType["Lezercsapa"] = 2] = "Lezercsapa";
})(UnitType || (UnitType = {}));
class UnitPurchaseDto {
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
            if (_data["purchasedUnits"]) {
                this.purchasedUnits = {};
                for (let key in _data["purchasedUnits"]) {
                    if (_data["purchasedUnits"].hasOwnProperty(key))
                        this.purchasedUnits[key] = _data["purchasedUnits"][key];
                }
            }
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new UnitPurchaseDto();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
        if (this.purchasedUnits) {
            data["purchasedUnits"] = {};
            for (let key in this.purchasedUnits) {
                if (this.purchasedUnits.hasOwnProperty(key))
                    data["purchasedUnits"][key] = this.purchasedUnits[key];
            }
        }
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
            if (_data["battles"]) {
                this.battles = {};
                for (let key in _data["battles"]) {
                    if (_data["battles"].hasOwnProperty(key))
                        this.battles[key] = _data["battles"][key] ? ArmyDto.fromJS(_data["battles"][key]) : new ArmyDto();
                }
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
        if (this.battles) {
            data["battles"] = {};
            for (let key in this.battles) {
                if (this.battles.hasOwnProperty(key))
                    data["battles"][key] = this.battles[key] ? this.battles[key].toJSON() : undefined;
            }
        }
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
            if (_data["unitList"]) {
                this.unitList = {};
                for (let key in _data["unitList"]) {
                    if (_data["unitList"].hasOwnProperty(key))
                        this.unitList[key] = _data["unitList"][key];
                }
            }
            this.armyFoodNecessity = _data["armyFoodNecessity"];
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
        if (this.unitList) {
            data["unitList"] = {};
            for (let key in this.unitList) {
                if (this.unitList.hasOwnProperty(key))
                    data["unitList"][key] = this.unitList[key];
            }
        }
        data["armyFoodNecessity"] = this.armyFoodNecessity;
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
            if (_data["attackableUsers"]) {
                this.attackableUsers = {};
                for (let key in _data["attackableUsers"]) {
                    if (_data["attackableUsers"].hasOwnProperty(key))
                        this.attackableUsers[key] = _data["attackableUsers"][key];
                }
            }
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
        if (this.attackableUsers) {
            data["attackableUsers"] = {};
            for (let key in this.attackableUsers) {
                if (this.attackableUsers.hasOwnProperty(key))
                    data["attackableUsers"][key] = this.attackableUsers[key];
            }
        }
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
            this.description = _data["description"];
            this.turnCount = _data["turnCount"];
            this.buildingType = _data["buildingType"];
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
        data["description"] = this.description;
        data["turnCount"] = this.turnCount;
        data["buildingType"] = this.buildingType;
        return data;
    }
}
var Status;
(function (Status) {
    Status[Status["InProgress"] = 0] = "InProgress";
    Status[Status["Done"] = 1] = "Done";
    Status[Status["UnBuilt"] = 2] = "UnBuilt";
})(Status || (Status = {}));
var BuildingType;
(function (BuildingType) {
    BuildingType[BuildingType["Aramlasiranyito"] = 0] = "Aramlasiranyito";
    BuildingType[BuildingType["Zatonyvar"] = 1] = "Zatonyvar";
})(BuildingType || (BuildingType = {}));
class ProfileDto {
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
            this.army = _data["army"] ? ArmyDto.fromJS(_data["army"]) : undefined;
        }
    }
    static fromJS(data) {
        data = typeof data === 'object' ? data : {};
        let result = new ProfileDto();
        result.init(data);
        return result;
    }
    toJSON(data) {
        data = typeof data === 'object' ? data : {};
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
        data["army"] = this.army ? this.army.toJSON() : undefined;
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
            this.id = _data["id"];
            this.turnCount = _data["turnCount"];
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
        data["id"] = this.id;
        data["turnCount"] = this.turnCount;
        data["status"] = this.status;
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














class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [
        ___WEBPACK_IMPORTED_MODULE_11__["AuthClient"],
        _features_pages_auth_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"],
        ___WEBPACK_IMPORTED_MODULE_11__["ProfileClient"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"]
        ], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"]], exports: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"]] }); })();
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
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"]
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
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"]
                ],
                providers: [
                    ___WEBPACK_IMPORTED_MODULE_11__["AuthClient"],
                    _features_pages_auth_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"],
                    ___WEBPACK_IMPORTED_MODULE_11__["ProfileClient"]
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
    ApiBaseUrl: 'https://undersea-api.azurewebsites.net'
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

module.exports = __webpack_require__(/*! C:\Users\steiner.adam\source\repos\undersea\src\Frontend\Undersea-Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map