(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-pages-auth-auth-module"],{

/***/ "./src/app/features/pages/auth/auth.module.ts":
/*!****************************************************!*\
  !*** ./src/app/features/pages/auth/auth.module.ts ***!
  \****************************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _auth_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.routing */ "./src/app/features/pages/auth/auth.routing.ts");
/* harmony import */ var _components_auth_page_auth_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/auth-page/auth-page.component */ "./src/app/features/pages/auth/components/auth-page/auth-page.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _auth_routing__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_components_auth_page_auth_page_component__WEBPACK_IMPORTED_MODULE_3__["AuthPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _auth_routing__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_auth_page_auth_page_component__WEBPACK_IMPORTED_MODULE_3__["AuthPageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _auth_routing__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/pages/auth/auth.routing.ts":
/*!*****************************************************!*\
  !*** ./src/app/features/pages/auth/auth.routing.ts ***!
  \*****************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_auth_page_auth_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/auth-page/auth-page.component */ "./src/app/features/pages/auth/components/auth-page/auth-page.component.ts");





const routes = [
    {
        path: '',
        component: _components_auth_page_auth_page_component__WEBPACK_IMPORTED_MODULE_2__["AuthPageComponent"]
    }
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/pages/auth/components/auth-page/auth-page.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/pages/auth/components/auth-page/auth-page.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AuthPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageComponent", function() { return AuthPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_nowhitespace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/nowhitespace */ "./src/app/shared/nowhitespace.ts");
/* harmony import */ var _service_authpage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/authpage.service */ "./src/app/features/pages/auth/service/authpage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function AuthPageComponent_form_7_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " N\u00E9v kit\u00F6lt\u00E9se k\u00F6ltelez\u0151 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthPageComponent_form_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AuthPageComponent_form_7_div_2_div_1_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.loginForm.controls.name.errors.required);
} }
function AuthPageComponent_form_7_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Jelsz\u00F3 kit\u00F6lt\u00E9se k\u00F6ltelez\u0151 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthPageComponent_form_7_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AuthPageComponent_form_7_div_4_div_1_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.loginForm.controls.password.errors.required);
} }
function AuthPageComponent_form_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AuthPageComponent_form_7_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AuthPageComponent_form_7_div_2_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AuthPageComponent_form_7_div_4_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Bel\u00E9p\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.controls.name.invalid && (ctx_r0.loginForm.controls.name.dirty || ctx_r0.loginForm.controls.name.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.controls.password.invalid && (ctx_r0.loginForm.controls.password.dirty || ctx_r0.loginForm.controls.password.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.loginForm.valid);
} }
function AuthPageComponent_form_8_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " N\u00E9v kit\u00F6lt\u00E9se k\u00F6telez\u0151 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthPageComponent_form_8_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " A n\u00E9v nem tartalmazhat sz\u00F3k\u00F6zt! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthPageComponent_form_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AuthPageComponent_form_8_div_2_div_1_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AuthPageComponent_form_8_div_2_div_2_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.registerForm.controls.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.registerForm.controls.name.errors.whitespace);
} }
function AuthPageComponent_form_8_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Jelsz\u00F3 kit\u00F6lt\u00E9se k\u00F6telez\u0151 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthPageComponent_form_8_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " A jelsz\u00F3 legal\u00E1bb 8 karakter legyen! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthPageComponent_form_8_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AuthPageComponent_form_8_div_4_div_1_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AuthPageComponent_form_8_div_4_div_2_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.registerForm.controls.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.registerForm.controls.password.errors.minlength);
} }
function AuthPageComponent_form_8_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Jelsz\u00F3 kit\u00F6lt\u00E9se k\u00F6ltelez\u0151 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthPageComponent_form_8_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " A jelsz\u00F3 legal\u00E1bb 8 karakter legyen! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthPageComponent_form_8_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AuthPageComponent_form_8_div_6_div_1_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AuthPageComponent_form_8_div_6_div_2_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.registerForm.controls.password2.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.registerForm.controls.password2.errors.minlength);
} }
function AuthPageComponent_form_8_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " V\u00E1rosn\u00E9v kit\u00F6lt\u00E9se k\u00F6ltelez\u0151 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthPageComponent_form_8_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AuthPageComponent_form_8_div_8_div_1_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.registerForm.controls.cityName.errors.required);
} }
function AuthPageComponent_form_8_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AuthPageComponent_form_8_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.register(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AuthPageComponent_form_8_div_2_Template, 3, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AuthPageComponent_form_8_div_4_Template, 3, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AuthPageComponent_form_8_div_6_Template, 3, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AuthPageComponent_form_8_div_8_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Regisztr\u00E1ci\u00F3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.registerForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.registerForm.controls.name.invalid && (ctx_r1.registerForm.controls.name.dirty || ctx_r1.registerForm.controls.name.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.registerForm.controls.password.invalid && (ctx_r1.registerForm.controls.password.dirty || ctx_r1.registerForm.controls.password.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.registerForm.controls.password2.invalid && (ctx_r1.registerForm.controls.password2.dirty || ctx_r1.registerForm.controls.password2.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.registerForm.controls.cityName.invalid && (ctx_r1.registerForm.controls.cityName.dirty || ctx_r1.registerForm.controls.cityName.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.registerForm.valid);
} }
function AuthPageComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthPageComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.changeMode(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Regisztr\u00E1ci\u00F3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthPageComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthPageComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.changeMode(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bejelentkez\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AuthPageComponent {
    constructor(authService, router, snackbar) {
        this.authService = authService;
        this.router = router;
        this.snackbar = snackbar;
        this.isReg = false;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _shared_nowhitespace__WEBPACK_IMPORTED_MODULE_2__["noWhiteSpace"]]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)
            ]),
            password2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            cityName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    ngOnInit() {
    }
    login() {
        if (this.loginForm.valid) {
            this.authService.login(this.loginForm.value.name, this.loginForm.value.password).subscribe(res => {
                if (res.token != null) {
                    localStorage.setItem('token', res.token);
                    this.router.navigate(['/main']);
                }
            }, (err) => {
                if (err.status === 401) {
                    this.snackbar.open('Hibás név és jelszó páros', 'Bezár', {
                        duration: 3000
                    });
                }
            });
        }
    }
    register() {
        if (this.registerForm.valid) {
            if (this.registerForm.value.password === this.registerForm.value.password2) {
                this.authService.register(this.registerForm.value.name, this.registerForm.value.password, this.registerForm.value.password2, this.registerForm.value.cityName).subscribe(res => {
                    if (res.token != null) {
                        localStorage.setItem('token', res.token);
                        this.router.navigate(['/main']);
                    }
                    else {
                        this.snackbar.open('Ezzel a névvel már regisztráltak', 'Bezár', {
                            duration: 3000
                        });
                    }
                }, (err) => {
                    this.snackbar.open(JSON.parse(err.response).Message, 'Bezár', {
                        duration: 3000
                    });
                });
            }
            else {
                this.snackbar.open('A 2 jelszó nem egyezik!', 'Bezár', {
                    duration: 5000
                });
            }
        }
    }
    changeMode(mode) {
        this.isReg = mode;
        this.ngOnInit();
    }
}
AuthPageComponent.ɵfac = function AuthPageComponent_Factory(t) { return new (t || AuthPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_authpage_service__WEBPACK_IMPORTED_MODULE_3__["AuthpageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"])); };
AuthPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthPageComponent, selectors: [["app-auth-page"]], decls: 11, vars: 4, consts: [[1, "flexbox", "bg-container"], [1, "wave", 2, "--w", "100px", "--h", "30px", "--p", "12.5px", "--t", "8px", "--c", "#9FFFF0"], [1, "title"], [1, "login-card"], [1, "card-title"], ["class", "auth", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "mode-button", 3, "click", 4, "ngIf"], [1, "auth", 3, "formGroup", "ngSubmit"], ["id", "name", "name", "name", "type", "text", "formControlName", "name", "placeholder", "Felhaszn\u00E1l\u00F3n\u00E9v"], ["class", "alert-danger", 4, "ngIf"], ["type", "password", "formControlName", "password", "placeholder", "Jelsz\u00F3"], ["type", "submit", 1, "auth-button", 3, "disabled"], [1, "alert-danger"], [4, "ngIf"], ["type", "text", "formControlName", "name", "placeholder", "Felhaszn\u00E1l\u00F3n\u00E9v"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "Jelsz\u00F3", "minlength", "8", 1, "form-control"], ["type", "password", "formControlName", "password2", "placeholder", "Jelsz\u00F3 meger\u0151s\u00EDt\u00E9se", "minlength", "8"], ["type", "text", "formControlName", "cityName", "placeholder", "A v\u00E1rosod neve, amit \u00E9p\u00EDtesz"], [1, "mode-button", 3, "click"]], template: function AuthPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Undersea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Bel\u00E9p\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AuthPageComponent_form_7_Template, 7, 4, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AuthPageComponent_form_8_Template, 11, 6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AuthPageComponent_button_9_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AuthPageComponent_button_10_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isReg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isReg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isReg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isReg);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"]], styles: [".bg-container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-image: url('undersea_game-02.png');\n  background-repeat: no-repeat;\n}\n\n.flexbox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  opacity: 1;\n}\n\n.title[_ngcontent-%COMP%] {\n  text-align: left;\n  letter-spacing: 0px;\n  color: #9ffff0;\n  opacity: 1;\n  font-size: 5vw;\n  margin: 0;\n  right: 5%;\n  font-family: baloo;\n}\n\n.login-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 20vw;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 16px;\n  opacity: 1;\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  font-family: baloo;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: baloo;\n}\n\ninput[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-radius: 20px;\n  opacity: 0.39;\n  margin: 1vw;\n  height: 4vh;\n  width: 18vw;\n  padding-left: 1vw;\n  border: none;\n  outline: none;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  text-align: center;\n  letter-spacing: 0px;\n  color: #1c3e76;\n  opacity: 1;\n}\n\n.auth-button[_ngcontent-%COMP%] {\n  background: transparent linear-gradient(258deg, #9ffff0 0%, #6beee9 36%, #0fcfde 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #3b7dbd;\n  border-radius: 90px;\n  opacity: 1;\n  border: none;\n  padding-left: 2vw;\n  padding-right: 2vw;\n  text-align: center;\n  letter-spacing: 0px;\n  color: #001234;\n  font-size: 1.3vw;\n  width: 12vw;\n  outline: none;\n  font-family: baloo;\n  font-weight: lighter;\n  cursor: pointer;\n}\n\n.mode-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  text-align: center;\n  letter-spacing: 0px;\n  color: #9ffff0;\n  opacity: 1;\n  font-weight: 800;\n  padding: 10px;\n  outline: none;\n  font-size: 1vw;\n  cursor: pointer;\n}\n\n.auth[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  min-width: 18vw;\n  max-width: 20vw;\n  width: 100%;\n}\n\n.alert-danger[_ngcontent-%COMP%] {\n  color: red;\n}\n\n  .mat-snack-bar-container {\n  background-color: #001234 !important;\n  color: #9ffff0;\n  font-weight: bold;\n}\n\n.wave[_ngcontent-%COMP%] {\n  --c: red;\n  \n  --t: 7px;\n  \n  --h: 10vw;\n  \n  --w: 20vw;\n  \n  --p: 13px;\n  \n  margin: 5px auto;\n  padding-top: 10vh !important;\n  width: 20vw;\n  height: 3vw;\n  overflow: hidden;\n  position: relative;\n}\n\n.wave[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  padding-top: 10vh;\n  top: 0;\n  left: 0;\n  width: 200%;\n  bottom: 0;\n  background: radial-gradient(farthest-side at 50% calc(100% + var(--p)), transparent 47%, var(--c) 50% calc(50% + var(--t)), transparent calc(52% + var(--t))), radial-gradient(farthest-side at 50% calc(0% - var(--p)), transparent 47%, var(--c) 50% calc(50% + var(--t)), transparent calc(52% + var(--t)));\n  background-size: var(--w) var(--h);\n  background-position: calc(var(--w) / 2) calc(-1 * (var(--h) / 2)), 0px calc(var(--h) / 2);\n  background-repeat: repeat-x;\n  background-origin: content-box;\n  animation: move 5s infinite linear;\n}\n\n@keyframes move {\n  to {\n    transform: translateX(-50%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcGFnZXMvYXV0aC9jb21wb25lbnRzL2F1dGgtcGFnZS9hdXRoLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0Usa0hBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsUUFBQTtFQUFVLFVBQUE7RUFDVixRQUFBO0VBQVUsY0FBQTtFQUNWLFNBQUE7RUFBVyxZQUFBO0VBQ1gsU0FBQTtFQUFXLFdBQUE7RUFDWCxTQUFBO0VBQVcsc0VBQUE7RUFFWCxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBS0Y7O0FBSEE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFFQSw4U0FBQTtFQWFBLGtDQUFBO0VBQ0EseUZBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBRUEsa0NBQUE7QUFSRjs7QUFXQTtFQUNFO0lBQ0UsMkJBQUE7RUFSRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvcGFnZXMvYXV0aC9jb21wb25lbnRzL2F1dGgtcGFnZS9hdXRoLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kL3VuZGVyc2VhX2dhbWUtMDIucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5mbGV4Ym94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgY29sb3I6ICM5ZmZmZjA7XHJcbiAgb3BhY2l0eTogMTtcclxuICBmb250LXNpemU6IDV2dztcclxuICBtYXJnaW46IDA7XHJcbiAgcmlnaHQ6IDUlO1xyXG4gIGZvbnQtZmFtaWx5OiBiYWxvbztcclxufVxyXG5cclxuLmxvZ2luLWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAyMHZ3O1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgb3BhY2l0eTogMTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xyXG4gIGZvbnQtZmFtaWx5OiBiYWxvbztcclxufVxyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogYmFsb287XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIG9wYWNpdHk6IDAuMzk7XHJcbiAgbWFyZ2luOiAxdnc7XHJcbiAgaGVpZ2h0OiA0dmg7XHJcbiAgd2lkdGg6IDE4dnc7XHJcbiAgcGFkZGluZy1sZWZ0OiAxdnc7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICBjb2xvcjogIzFjM2U3NjtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uYXV0aC1idXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgyNThkZWcsICM5ZmZmZjAgMCUsICM2YmVlZTkgMzYlLCAjMGZjZmRlIDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjM2I3ZGJkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDkwcHg7XHJcbiAgb3BhY2l0eTogMTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAydnc7XHJcbiAgcGFkZGluZy1yaWdodDogMnZ3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gIGNvbG9yOiAjMDAxMjM0O1xyXG4gIGZvbnQtc2l6ZTogMS4zdnc7XHJcbiAgd2lkdGg6IDEydnc7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmb250LWZhbWlseTogYmFsb287XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubW9kZS1idXR0b24ge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gIGNvbG9yOiAjOWZmZmYwO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxdnc7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYXV0aCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi13aWR0aDogMTh2dztcclxuICBtYXgtd2lkdGg6IDIwdnc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5hbGVydC1kYW5nZXIge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNuYWNrLWJhci1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDEyMzQgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzlmZmZmMDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLndhdmUge1xyXG4gIC0tYzogcmVkOyAvKiBDb2xvciAqL1xyXG4gIC0tdDogN3B4OyAvKiBUaGlja25lc3MgKi9cclxuICAtLWg6IDEwdnc7IC8qIEhlaWdodCAgKi9cclxuICAtLXc6IDIwdnc7IC8qIFdpZHRoICAqL1xyXG4gIC0tcDogMTNweDsgLyogYWRqdXN0IHRoaXMgdG8gY29ycmVjdCB0aGUgcG9zaXRpb24gd2hlbiBjaGFuZ2luZyB0aGUgb3RoZXIgdmFsdWVzKi9cclxuXHJcbiAgbWFyZ2luOiA1cHggYXV0bztcclxuICBwYWRkaW5nLXRvcDogMTB2aCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAyMHZ3O1xyXG4gIGhlaWdodDogM3Z3O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi53YXZlOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcGFkZGluZy10b3A6IDEwdmg7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDIwMCU7XHJcbiAgYm90dG9tOiAwO1xyXG5cclxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXHJcbiAgICAgIGZhcnRoZXN0LXNpZGUgYXQgNTAlIGNhbGMoMTAwJSArIHZhcigtLXApKSxcclxuICAgICAgdHJhbnNwYXJlbnQgNDclLFxyXG4gICAgICB2YXIoLS1jKSA1MCUgY2FsYyg1MCUgKyB2YXIoLS10KSksXHJcbiAgICAgIHRyYW5zcGFyZW50IGNhbGMoNTIlICsgdmFyKC0tdCkpXHJcbiAgICApLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KFxyXG4gICAgICBmYXJ0aGVzdC1zaWRlIGF0IDUwJSBjYWxjKDAlIC0gdmFyKC0tcCkpLFxyXG4gICAgICB0cmFuc3BhcmVudCA0NyUsXHJcbiAgICAgIHZhcigtLWMpIDUwJSBjYWxjKDUwJSArIHZhcigtLXQpKSxcclxuICAgICAgdHJhbnNwYXJlbnQgY2FsYyg1MiUgKyB2YXIoLS10KSlcclxuICAgICk7XHJcblxyXG4gIGJhY2tncm91bmQtc2l6ZTogdmFyKC0tdykgdmFyKC0taCk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYyh2YXIoLS13KSAvIDIpIGNhbGMoLTEgKiAodmFyKC0taCkgLyAyKSksIDBweCBjYWxjKHZhcigtLWgpIC8gMik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG4gIGJhY2tncm91bmQtb3JpZ2luOiBjb250ZW50LWJveDtcclxuXHJcbiAgYW5pbWF0aW9uOiBtb3ZlIDVzIGluZmluaXRlIGxpbmVhcjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBtb3ZlIHtcclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBib2R5IHtcclxuLy8gICBtYXJnaW46IG5vbmU7XHJcbi8vICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kL3VuZGVyc2VhX2dhbWUtMDIucG5nXCIpO1xyXG4vLyAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbi8vIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth-page',
                templateUrl: './auth-page.component.html',
                styleUrls: ['./auth-page.component.scss']
            }]
    }], function () { return [{ type: _service_authpage_service__WEBPACK_IMPORTED_MODULE_3__["AuthpageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/nowhitespace.ts":
/*!****************************************!*\
  !*** ./src/app/shared/nowhitespace.ts ***!
  \****************************************/
/*! exports provided: noWhiteSpace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noWhiteSpace", function() { return noWhiteSpace; });
function noWhiteSpace(control) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const spaceRegex = /^[a-zA-Z0-9]*$/;
    // tslint:disable-next-line:no-shadowed-variable
    const noWhiteSpace = spaceRegex.test(control.value);
    return isWhitespace || !noWhiteSpace ? { whitespace: true } : null;
}


/***/ })

}]);
//# sourceMappingURL=features-pages-auth-auth-module.js.map