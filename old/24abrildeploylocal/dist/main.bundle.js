webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_signature_sheet_createsheet_createsheet_component__ = __webpack_require__("../../../../../src/app/create-signature-sheet/createsheet/createsheet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__update_signature_sheet_updatesheet_updatesheet_component__ = __webpack_require__("../../../../../src/app/update-signature-sheet/updatesheet/updatesheet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pdf_pdfs_pdfs_component__ = __webpack_require__("../../../../../src/app/pdf/pdfs/pdfs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loan_admin_loan_a_loan_a_component__ = __webpack_require__("../../../../../src/app/loan-admin/loan-a/loan-a.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_admin_user_admin_component__ = __webpack_require__("../../../../../src/app/user-admin/user-admin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'newsheet',
        component: __WEBPACK_IMPORTED_MODULE_2__create_signature_sheet_createsheet_createsheet_component__["a" /* CreatesheetComponent */]
    },
    {
        path: 'updatesheet',
        component: __WEBPACK_IMPORTED_MODULE_3__update_signature_sheet_updatesheet_updatesheet_component__["a" /* UpdatesheetComponent */]
    },
    {
        path: 'pdf',
        component: __WEBPACK_IMPORTED_MODULE_4__pdf_pdfs_pdfs_component__["a" /* PdfsComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'loan',
        component: __WEBPACK_IMPORTED_MODULE_6__loan_admin_loan_a_loan_a_component__["a" /* LoanAComponent */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_8__user_admin_user_admin_component__["a" /* UserAdminComponent */]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"background-color:    #fcfcfc   \">\r\n    <!-- <div *ngIf=\"loggedIn\"> -->\r\n        <app-nav-bar></app-nav-bar>\r\n            <router-outlet></router-outlet>\r\n        <app-footer></app-footer>\r\n    <!-- </div> -->\r\n\r\n    <!-- <div *ngIf=\"loggenInPending\">\r\n                <router-outlet></router-outlet>\r\n            <app-footer></app-footer>\r\n        </div>\r\n    -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(cookieService, router) {
        this.cookieService = cookieService;
        this.router = router;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        /*if(this.cookieService.get('user_name')){
          this.loggedIn = true;
          this.loggenInPending = false;
        }
        else{
          this.loggedIn = false;
          this.loggenInPending = true;
        }*/
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__create_signature_sheet_create_signature_sheet_module__ = __webpack_require__("../../../../../src/app/create-signature-sheet/create-signature-sheet.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__create_signature_sheet_search_employee_service__ = __webpack_require__("../../../../../src/app/create-signature-sheet/search-employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__update_signature_sheet_update_signature_sheet_module__ = __webpack_require__("../../../../../src/app/update-signature-sheet/update-signature-sheet.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__share_module_share_module_module__ = __webpack_require__("../../../../../src/app/share-module/share-module.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pdf_pdf_module_pdf_module_module__ = __webpack_require__("../../../../../src/app/pdf/pdf-module/pdf-module.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__loan_admin_loan_admin_module__ = __webpack_require__("../../../../../src/app/loan-admin/loan-admin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__user_admin_user_admin_component__ = __webpack_require__("../../../../../src/app/user-admin/user-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__management_service__ = __webpack_require__("../../../../../src/app/management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng_drag_drop__ = __webpack_require__("../../../../ng-drag-drop/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng_drag_drop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ng_drag_drop__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_16__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_20__user_admin_user_admin_component__["a" /* UserAdminComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__create_signature_sheet_create_signature_sheet_module__["a" /* CreateSignatureSheetModule */],
                __WEBPACK_IMPORTED_MODULE_10__update_signature_sheet_update_signature_sheet_module__["a" /* UpdateSignatureSheetModule */],
                __WEBPACK_IMPORTED_MODULE_11__share_module_share_module_module__["a" /* ShareModuleModule */],
                __WEBPACK_IMPORTED_MODULE_12__pdf_pdf_module_pdf_module_module__["a" /* PdfModuleModule */],
                __WEBPACK_IMPORTED_MODULE_15__loan_admin_loan_admin_module__["a" /* LoanAdminModule */],
                __WEBPACK_IMPORTED_MODULE_22_ng_drag_drop__["NgDragDropModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__create_signature_sheet_search_employee_service__["a" /* SearchEmployeeService */], __WEBPACK_IMPORTED_MODULE_14__dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_17__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_18__auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_19_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_21__management_service__["a" /* ManagementService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(login) {
        this.login = login;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.login.getUserLoggedIn();
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/create-signature-sheet/create-signature-sheet.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateSignatureSheetModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createsheet_createsheet_component__ = __webpack_require__("../../../../../src/app/create-signature-sheet/createsheet/createsheet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__type_type_component__ = __webpack_require__("../../../../../src/app/create-signature-sheet/type/type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__share_module_share_module_module__ = __webpack_require__("../../../../../src/app/share-module/share-module.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { EmployeeTableComponent } from './employee-table/employee-table.component';



//import { ProductListComponent } from './product-list/product-list.component';
//import { SelectedProductsComponent } from './selected-products/selected-products.component';
//import { SearchEmployeeService } from './search-employee.service';

var CreateSignatureSheetModule = /** @class */ (function () {
    function CreateSignatureSheetModule() {
    }
    CreateSignatureSheetModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__share_module_share_module_module__["a" /* ShareModuleModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot()
            ],
            exports: [
                //EmployeeTableComponent,
                __WEBPACK_IMPORTED_MODULE_3__createsheet_createsheet_component__["a" /* CreatesheetComponent */],
                __WEBPACK_IMPORTED_MODULE_4__type_type_component__["a" /* TypeComponent */],
            ],
            declarations: [
                //EmployeeTableComponent,
                __WEBPACK_IMPORTED_MODULE_3__createsheet_createsheet_component__["a" /* CreatesheetComponent */],
                __WEBPACK_IMPORTED_MODULE_4__type_type_component__["a" /* TypeComponent */],
            ]
        })
    ], CreateSignatureSheetModule);
    return CreateSignatureSheetModule;
}());



/***/ }),

/***/ "../../../../../src/app/create-signature-sheet/createsheet/createsheet.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 { color: #7c795d; font-family: 'Trocchi', serif; font-size: 45px; font-weight: normal; line-height: 48px; margin: 0; }\r\n\r\np { color: #4c4a37; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh5 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh2 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh3 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh4 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-signature-sheet/createsheet/createsheet.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\" *ngIf=\"privilege\">\r\n    \r\n    <div>\r\n        <h3>OnBoarding- Loan new Signature Sheet</h3>\r\n        <p>\"Onboarding, also known as organizational socialization, refers to the mechanism through which new employees acquire the necessary knowledge, skills, and behaviors to become effective organizational members and insiders.It is the process of integrating a new employee into the organization and its culture. Tactics used in this process include formal meetings, lectures, videos, printed materials, or computer-based orientations to introduce newcomers to their new jobs and organizations. Research has demonstrated that these socialization techniques lead to positive outcomes for new employees such as higher job satisfaction, better job performance, greater organizational commitment, and reduction in occupational stress and intent to quit.\"</p>\r\n         <br>\r\n        <div class=\"form-group\"> \r\n            <button class=\"btn btn-info btn-sm\" (click)=\"start()\">Let's Get Started!</button>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\" col-6\" *ngIf=\"boolfirst\">\r\n        <h3>First-Step select a type and date</h3>\r\n        <div class=\"form-group\">\r\n            <select class=\"form-control\" [(ngModel)]=\"option\">\r\n                    <option value=\"1\">OnBoarding</option>\r\n                    <option value=\"3\">Loan</option>\r\n            </select>\r\n    </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"Date\" class=\"form-control\" [(ngModel)]=\"date\">\r\n        </div>\r\n        <button class=\"btn btn-info d-flex justify-content-center btn-sm\" (click)=\"validate()\">Continue</button>\r\n    </div>\r\n    <ul class=\"list-group\" *ngFor=\"let item of selectemploye\">\r\n        <li class=\"list-group-item list-group-item-success \">{{item.FIRST_NAME}}  {{item.LAST_NAME}} - {{item.EMAIL}}</li>\r\n      \r\n      </ul>\r\n\r\n    <div *ngIf=\"boolemployee\">\r\n        <h3>Second-Step select the employee</h3>\r\n        <!-- <ul class=\"list-group\" *ngFor=\"let item of selectemploye\">{{item.FIRST_NAME}} - {{item.LAST_NAME}} - {{item.EMAIL}} </ul> -->\r\n\r\n\r\n\r\n        <app-employee-table (employeevent)=\"selectemploye=$event\"></app-employee-table>\r\n        <div class=\"d-flex justify-content-center\">\r\n                <button class=\"btn btn-info btn-sm\" (click)=\"backemployee()\">Go Back</button><h4>-</h4>\r\n                <button class=\"btn btn-info btn-sm\" (click)=\"continueemployee(procesValidationtemplate)\">Continue</button>\r\n        </div>\r\n\r\n        \r\n    </div>\r\n    \r\n    <!-- <app-type></app-type> -->\r\n\r\n    <div *ngIf=\"boolproducts\" >\r\n        <app-product-list (productsevent)=\"productsevent=$event\"></app-product-list>\r\n        <!--<button class=\"btn btn-info \" (click)=\"backproducts()\">Go Back</button> -->\r\n        <div class=\"d-flex justify-content-center\">\r\n                <button class=\"btn btn-info btn-sm\" (click)=\"backproducts()\">Go Back</button>\r\n        </div>  \r\n    </div>\r\n    <br><br><br><br>\r\n    <div *ngIf=\"boolproducts\" class=\"d-flex justify-content-center\">\r\n        <!-- <button class=\"btn btn-link btn-lg\" (click)=\"createSignatureSheet()\"></button> -->\r\n        <button class=\"btn btn-primary btn-lg\" (click)=\"openModal(template)\">Save New Signature Sheet</button><br>\r\n    </div><br>\r\n    <div *ngIf=\"confirmation\" class=\"alert alert-warning\" role=\"alert\">\r\n        <h5 class=\"alert-heading\">Warning.!</h5>\r\n        <p>The employee does not have Employee Id, please make sure to get all the info ready before proceding</p>\r\n        <hr>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n<!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Create template modal</button> -->\r\n     \r\n<ng-template #template>\r\n    <div class=\"modal-body text-center alert alert-warning\">\r\n        <p>Are you sure of save this Signature Sheet??</p>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"insertSheet()\" >Yes</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"abort()\" >No</button>\r\n        <div class=\"modal-body alert alert-warning\" role=\"alert\">\r\n                The information will be save and automatically create a pdf file of the sheet, press 'YES', to continue or 'No', to go back.\r\n        </div>\r\n    </div>\r\n\r\n   \r\n</ng-template>\r\n\r\n<ng-template #procesValidationtemplate>\r\n        <div class=\"modal-body text-center alert alert-info\">\r\n            <p>It is not possible to update this sheet.!</p>\r\n            <button class=\"btn btn-danger\" (click)=\"ok()\">Ok</button><br>\r\n            <div class=\"modal-body alert alert-warning\" role=\"alert\">\r\n                    Verify that the user has an onboarding sheet, or does not have an offboarding sheet\r\n            </div>\r\n        </div>\r\n        \r\n           \r\n    </ng-template>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/create-signature-sheet/createsheet/createsheet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatesheetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_employee_service__ = __webpack_require__("../../../../../src/app/create-signature-sheet/search-employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode__ = __webpack_require__("../../../../jwt-decode/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jwt_decode__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreatesheetComponent = /** @class */ (function () {
    function CreatesheetComponent(httpClient, searchEmployeeService, modalService, cookieService, router) {
        this.httpClient = httpClient;
        this.searchEmployeeService = searchEmployeeService;
        this.modalService = modalService;
        this.cookieService = cookieService;
        this.router = router;
        this.boolemployee = false;
        this.boolproducts = false;
        this.boolready = false;
        this.boolfirst = false;
        //data a enviar
        this.selectemploye = [];
        this.productsevent = [];
        this.confirmation = false;
        this.privilege = false;
        this.validation = 0;
    }
    CreatesheetComponent.prototype.ngOnInit = function () {
        /*if(!this.cookieService.get('user_name')){
          this.router.navigateByUrl('/');
        }*/
        var val = this.cookieService.get("token");
        if (val) {
            var djtw = __WEBPACK_IMPORTED_MODULE_6_jwt_decode__(val);
            var identity = djtw['identity'];
            for (var _i = 0; _i < identity.length; _i++) {
                if (identity[_i]['privilege'] == 'create_sheet') {
                    this.privilege = true;
                }
            }
            if (this.privilege) {
            }
            else {
                window.location.href = '/login';
            }
        }
        else {
            window.location.href = '/login';
        }
    };
    CreatesheetComponent.prototype.openModal = function (template) {
        var x = this.selectemploye[0];
        if (x.EMPLOYEE_ID) {
            this.modalRef = this.modalService.show(template);
        }
        else {
            this.confirmation = true;
            //alert("The employee does not have Employee Id, please make sure to get all the info ready before proceding");
        }
    };
    CreatesheetComponent.prototype.validate = function () {
        //alert(this.date + "" + this.option );
        if (this.date && this.option) {
            this.boolemployee = true;
            this.boolfirst = false;
        }
        else {
            alert('Select Type and Date first!');
        }
    };
    CreatesheetComponent.prototype.start = function () {
        this.boolfirst = true;
        this.boolemployee = false;
        this.boolready = false;
        this.boolproducts = false;
    };
    CreatesheetComponent.prototype.continueemployee = function (template) {
        var _this = this;
        var x = this.selectemploye[0];
        if (x) {
            var x_1 = this.selectemploye[0];
            //validacion
            var m_1;
            this.searchEmployeeService.processValidation(x_1.EMPLOYEE_ID)
                .subscribe(function (res) {
                m_1 = res['message'];
                console.log(res);
                if (_this.option == 1 && m_1 == 'null') {
                    _this.validation = 1;
                    _this.boolemployee = false;
                    _this.boolproducts = true;
                }
                if ((_this.option == 1) && (m_1['id_type'] == 2)) {
                    _this.validation = 1;
                    _this.boolemployee = false;
                    _this.boolproducts = true;
                }
                if (_this.option == 3 && m_1['id_type'] != 2 && m_1 != 'null') {
                    _this.validation = 1;
                    _this.boolemployee = false;
                    _this.boolproducts = true;
                }
                if (_this.validation == 0 && _this.option == 1) {
                    _this.modalRef = _this.modalService.show(template);
                }
                if (_this.validation == 0 && _this.option == 3) {
                    _this.modalRef = _this.modalService.show(template);
                }
                /*if(m['id_type'] == '4'){
                  alert('aqui');
                  this.validation = 1
                }*/
            });
        }
        else {
            alert('Select a employee first');
        }
    };
    CreatesheetComponent.prototype.backemployee = function () {
        this.boolemployee = false;
        this.boolfirst = true;
    };
    CreatesheetComponent.prototype.backproducts = function () {
        this.boolproducts = false;
        this.boolemployee = true;
        this.boolfirst = false;
    };
    CreatesheetComponent.prototype.ok = function () {
        window.location.href = '/newsheet';
    };
    /* insertSheet(){
       let x = this.selectemploye[0];
       let response;
       let l = this.productsevent.length
       if(x && (l != 0)){
         this.searchEmployeeService.insertSignatureSheet(this.option, x.EMPLOYEE_ID, x.FIRST_NAME, x.LAST_NAME, x.EMAIL, this.date)
         .subscribe(data => response = data );
         //alert(response);
          alert("Response alert");
         //pendiente aun ####
         this.createSignatureSheet(x, this.productsevent);
         alert('SIgnature sheet successfully created.!!');
       }
       else{
         alert('Make sure to select a employee and at least one Product');
       }
   
       
       window.location.href = '/newsheet';
         
     } */
    CreatesheetComponent.prototype.insertSheet = function () {
        var x = this.selectemploye[0];
        //validacion
        /*let m;
        this.searchEmployeeService.processValidation(x.EMPLOYEE_ID)
        .subscribe( res => {
          m = res['message'];
          console.log(res);
          if(this.option == 1 && m == 'null'){
            this.validation = 1;
          }
          if((this.option == 1) && (m['id_type'] == 2)){
            this.validation = 1;
          }
    
          if(this.option == 3 && m['id_type'] != 2){
            this.validation = 1;
          }
    
    
          console.log(m['id_type']);
          console.log(this.validation);
          console.log(this.option);
        }) */
        var response;
        var l = this.productsevent.length;
        if (x && (l != 0) && this.validation == 1) {
            this.searchEmployeeService.insertSignatureSheet(this.option, x.EMPLOYEE_ID, x.FIRST_NAME, x.LAST_NAME, x.EMAIL, this.date)
                .subscribe(function (res) {
                console.log(res);
            });
            //alert(response);
            alert("Creating sheet..");
            //pendiente aun #### 
            this.createSignatureSheet(x, this.productsevent);
            alert('SIgnature sheet successfully created.!!');
        }
        else {
            if (this.validation == 0 && this.option == 1) {
                alert('You cannot create this signature sheet, offboarding sheet is needed');
            }
            if (this.validation == 0 && this.option == 3) {
                alert('You have to create an onboarding sheet first');
            }
            if ((l == 0)) {
                alert('Make sure to select at least one Product');
            }
        }
        window.location.href = '/newsheet';
    };
    CreatesheetComponent.prototype.createSignatureSheet = function (x, y) {
        var user = this.selectemploye[0];
        var response = this.searchEmployeeService.saveRelationships(x, y);
        //alert(response);
    };
    CreatesheetComponent.prototype.confirm = function () {
        var x = this.selectemploye[0];
        if (x.EMPLOYEE_ID) {
            this.confirmation = true;
        }
        else {
            alert("The employee does not have Employee Id, please make sure to get all the info ready before proceding");
        }
    };
    CreatesheetComponent.prototype.abort = function () {
        window.location.href = '/newsheet';
    };
    CreatesheetComponent.prototype.testalert = function () {
        alert(this.date);
    };
    CreatesheetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-createsheet',
            template: __webpack_require__("../../../../../src/app/create-signature-sheet/createsheet/createsheet.component.html"),
            styles: [__webpack_require__("../../../../../src/app/create-signature-sheet/createsheet/createsheet.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__search_employee_service__["a" /* SearchEmployeeService */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]])
    ], CreatesheetComponent);
    return CreatesheetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/create-signature-sheet/employee-table/employee-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".select :hover{\r\n    background-color: rgb(168, 213, 235);\r\n}\r\n\r\nh1 { color: #7c795d; font-family: 'Trocchi', serif; font-size: 45px; font-weight: normal; line-height: 48px; margin: 0; }\r\n\r\np { color: #4c4a37; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh5 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh2 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh3 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh4 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-signature-sheet/employee-table/employee-table.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid\">\r\n      \r\n \r\n<br><div  class=\"\">\r\n  <!-- <h4>Search the Employee</h4> -->\r\n  <form class=\"form-inline d-flex justify-content-end\">\r\n    <div class=\"form-group\">\r\n        <input type=\"text\" placeholder=\"Search\" class=\"form-control\" (keyup)=\"searchEmployee($event)\">\r\n        <button class=\"btn btn-info\" (click)=\"find()\">Find Employee</button><br>\r\n\r\n    </div>\r\n\r\n  </form>\r\n</div><br>\r\n<table class=\"table\">\r\n  <thead class=\"thead-dark\">\r\n    <tr class=\"\">\r\n        <th scope=\"col\">Id</th>\r\n      <th scope=\"col\">Employeeid</th>\r\n      <th scope=\"col\">Firstname</th>\r\n      <th scope=\"col\">Last name</th>\r\n      <th scope=\"col\">e-mail</th>\r\n      <th scope=\"col\">Department</th>\r\n      <th scope=\"col\">Site</th>\r\n\r\n      <th scope=\"col\">Select</th>\r\n      \r\n    </tr>\r\n  </thead>\r\n  <tbody *ngFor=\"let employ of employees\">\r\n\r\n    <tr class=\"select\">\r\n      <th scope=\"row\">{{employ.ID}}</th>\r\n      <td>{{employ.EMPLOYEE_ID}}</td>\r\n      <td>{{employ.FIRST_NAME}}</td>\r\n      <td>{{employ.LAST_NAME}}</td>\r\n      <td>{{employ.EMAIL}}</td>\r\n      <td>{{employ.DEPARTMENT}}</td>\r\n      <td>{{employ.SITE}} </td>\r\n\r\n      <td><button class=\"btn btn-primary btn-sm\" (click)=\"onSelect(employ)\">Select</button></td>\r\n    </tr>\r\n\r\n  </tbody>\r\n\r\n</table>\r\n  <div class=\"d-flex justify-content-center\">\r\n      <button class=\"btn btn-link\" *ngIf=\"showpreview\" (click)=\"preview()\">Preview</button>\r\n      <button class=\"btn btn-link\" (click)=\"searchEmployees()\" *ngIf=\"shownext\">Next</button>\r\n  </div>\r\n  <div class=\"d-flex justify-content-start\" *ngIf=\"showmeta\">\r\n      <p>Search Result Quantity: {{count}}, cursor {{cursor}} More?  {{more}}.</p>\r\n  </div>\r\n\r\n<!-- <button (click)=\"getEmployees()\" class=\"btn\">Employees</button> -->\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n<!--\r\n<br>\r\n<div>\r\n    <input type=\"text\" class=\"form-control col-3\" placeholder=\"Search \" id=\"search\">\r\n</div>\r\n\r\n\r\n\r\n </div>\r\n-->\r\n"

/***/ }),

/***/ "../../../../../src/app/create-signature-sheet/employee-table/employee-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_employee_service__ = __webpack_require__("../../../../../src/app/create-signature-sheet/search-employee.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeTableComponent = /** @class */ (function () {
    function EmployeeTableComponent(httpClient, _searchEmployees) {
        this.httpClient = httpClient;
        this._searchEmployees = _searchEmployees;
        this.employees = [];
        this.andres = [];
        this.meta = [];
        this.page = 0;
        this.cursor = 0;
        this.showmeta = false;
        this.shownext = false;
        this.showpreview = false;
        this.a = [];
        this.ref = [];
        this.employeevent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.var = 2;
        this.cont = 0;
        this.employees_ready = false;
    }
    EmployeeTableComponent.prototype.ngOnInit = function () {
        /*his._searchEmployees.searchEmployees(0, 'julio')
        .subscribe( data =>this.employees = data)
        alert(this.employees);
        console.log(this.employees);*/
    };
    EmployeeTableComponent.prototype.testem = function () {
    };
    EmployeeTableComponent.prototype.getEmployees = function () {
        var _this = this;
        this.url = 'http://127.0.0.1:5000/api/v1/assetexplorerusers/' + this.cont;
        this.httpClient.get(this.url)
            .subscribe(function (data) {
            _this.employees = data.query;
            //console.log(data.query);
        });
        this.cont = this.cont + 1;
    };
    EmployeeTableComponent.prototype.searchEmployee = function (event) {
        this.search = event.target.value;
    };
    EmployeeTableComponent.prototype.searchEmployees = function () {
        var _this = this;
        //this.url = 'http://172.20.33.56/api/v1/assetusersearch?page='+this.cursor + '&limit=10&text=' + this.search;
        this.url = "http://127.0.0.1:5000/api/v1/assetusersearch?page=" + this.cursor + "&limit=10&text=" + this.search;
        this.httpClient.get(this.url)
            .subscribe(function (data) {
            _this.employees = data.query;
            //console.log(this.employees);
            _this.meta = data.meta;
            _this.count = _this.meta.count;
            _this.cursor = _this.meta.cursor;
            _this.more = _this.meta.more;
            _this.showmeta = true;
            if (_this.more) {
                _this.shownext = true;
            }
            else {
                _this.shownext = false;
            }
            if (_this.cursor == 10) {
                _this.showpreview = false;
            }
            else {
                _this.showpreview = true;
            }
        });
        //alert( this.andres );
        //console.log(this.employees, this.meta, this.shownext, this.showpreview, this.showmeta, this.count, this.cursor, this.more);
        console.log(this.employees);
    };
    EmployeeTableComponent.prototype.employeeSearch = function (x, y) {
        var _this = this;
        this._searchEmployees.searchEmployees(x, y).subscribe(function (data) { return _this.a; });
        //this.employees = this.a.query;
        console.log(this.a);
        //console.log(this.answer)
        /*this.employees = this.a[0];
        //this.employees = this.a['query'];
        this.meta = this.a[1];
        this.shownext = this.a[2];
        this.showpreview = this.a[3];
        this.showmeta = this.a[4];
        this.count = this.a[5];
        this.cursor = this.a[6];
        this.more = this.a[7];
        //console.log(this.answer);*/
    };
    EmployeeTableComponent.prototype.preview = function () {
        this.cursor = this.cursor - 20;
        this.searchEmployees();
        //alert(this.cursor);
    };
    EmployeeTableComponent.prototype.find = function () {
        this.cursor = 0;
        //alert(this.search);
        //alert(this.cursor);
        //this.employeeSearch(this.cursor, this.search);
        this.searchEmployees();
        //console.log(this.employees);
        //alert(this.cursor + "aqui" );
    };
    EmployeeTableComponent.prototype.onSelect = function (selectedItem) {
        // console.log("Selected item Id: ", selectedItem.EMPLOYEE_ID); // You get the Id of the selected item here
        var x = {
            'CIID': selectedItem.ID,
            'EMPLOYEE_ID': selectedItem.EMPLOYEE_ID,
            'FIRST_NAME': selectedItem.FIRST_NAME,
            'LAST_NAME': selectedItem.LAST_NAME,
            'EMAIL': selectedItem.EMAIL,
            'DEPARTMENT': selectedItem.DEPARTMENT,
            'Site': selectedItem.Site
        };
        //alert(x['CIID']);
        this.ref.splice(0);
        this.ref.push(x);
        this.employeevent.emit(this.ref);
        //alert(this.ref[0].EMAIL)
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], EmployeeTableComponent.prototype, "employeevent", void 0);
    EmployeeTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-employee-table',
            template: __webpack_require__("../../../../../src/app/create-signature-sheet/employee-table/employee-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/create-signature-sheet/employee-table/employee-table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__search_employee_service__["a" /* SearchEmployeeService */]])
    ], EmployeeTableComponent);
    return EmployeeTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/create-signature-sheet/product-list/product-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 { color: #7c795d; font-family: 'Trocchi', serif; font-size: 45px; font-weight: normal; line-height: 48px; margin: 0; }\r\n\r\np { color: #4c4a37; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh5 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh2 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh3 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh4 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-signature-sheet/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" container-fluid\">\r\n    <h3>Select the products</h3>\r\n  <div class=\"\">\r\n    <br><div  class=\"d-flex justify-content-end\">\r\n        <form class=\"form-inline\">\r\n          <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Search\" class=\"form-control\" (keyup)=\"textproduct($event)\">\r\n              <button class=\"btn btn-info\" (click)=\"find()\">Find Products</button><br>\r\n      \r\n          </div>\r\n      \r\n        </form>\r\n      </div><br>\r\n      \r\n      <table class=\"table\">\r\n          <thead class=\"thead-dark\">\r\n            <tr class=\"\">\r\n                <th scope=\"col\">Id</th>\r\n              <th scope=\"col\">CI Name</th>\r\n              <th scope=\"col\">CI Type</th>\r\n              <th scope=\"col\">Product Code</th>\r\n              <th scope=\"col\">Serial N°</th>\r\n              <th scope=\"col\">Model</th>\r\n              <th scope=\"col\">State</th>\r\n              <th scope=\"col\"></th>\r\n              <th scope=\"col\"></th>\r\n              \r\n            </tr>\r\n          </thead>\r\n          <tbody *ngFor=\"let product of allProducts\">\r\n        \r\n            <tr class=\"select\">\r\n              <th scope=\"row\">{{product.ID}}</th>\r\n              <td>{{product.CI_NAME}}</td>\r\n              <td>{{product.CI_TYPE}}</td>\r\n              <td>{{product.PRODUCT_CODE}}</td>\r\n              <td>{{product.SERIAL_NUMBER}}</td>\r\n              <td>{{product.MODEL}}</td>\r\n              <td>{{product.STATE}}</td>\r\n              <td><button class=\"btn btn-primary btn-sm\" (click)=\"onSelect(product)\">Add</button></td>\r\n              <td><button class=\"btn btn-danger btn-sm\" (click)=\"onRemove(product)\" >Rmv</button></td>\r\n            </tr>\r\n        \r\n          </tbody>\r\n        \r\n        </table>\r\n        <div class=\"d-flex justify-content-center\">\r\n            <button class=\"btn btn-link\" *ngIf=\"showpreview\" (click)=\"preview()\">Preview</button>\r\n            <button class=\"btn btn-link\" (click)=\"searchProducts()\" *ngIf=\"shownext\">Next</button>\r\n        </div>\r\n        <div class=\"d-flex justify-content-start\" *ngIf=\"showmeta\">\r\n            <p>Search Result Quantity: {{count}}, cursor {{cursor}} More?  {{more}}.</p>\r\n        </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"bool\">\r\n      <!--   <app-list [parentData]=\"oneItem\"></app-list> -->\r\n      <app-selected-products [parentData]=\"selectproducts\"></app-selected-products>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/create-signature-sheet/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(httpClient) {
        this.httpClient = httpClient;
        this.allProducts = [];
        this.selectedProducts = [];
        this.bool = false;
        this.meta = [];
        this.page = 0;
        this.cursor = 0;
        this.showmeta = false;
        this.shownext = false;
        this.showpreview = false;
        this.ref = [];
        this.selectproducts = [];
        this.productsevent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.var = 2;
        this.cont = 0;
    }
    ProductListComponent.prototype.ngOnInit = function () {
    };
    ProductListComponent.prototype.textproduct = function (event) {
        this.product = event.target.value;
        //console.log(this.product);
    };
    ProductListComponent.prototype.onSelect = function (selectedItem) {
        var x = {
            'CIID': selectedItem.ID,
            'PRODUCT_CODE': selectedItem.PRODUCT_CODE,
            'CI_NAME': selectedItem.CI_NAME,
            'SERIAL_NUMBER': selectedItem.SERIAL_NUMBER,
            'MODEL': selectedItem.MODEL,
            'CI_TYPE': selectedItem.CI_TYPE
        };
        var index = 0;
        for (var _i = 0, _a = this.selectproducts; _i < _a.length; _i++) {
            var i = _a[_i];
            if (x.CI_NAME == i.CI_NAME) {
                index = 1;
            }
        }
        if (index == 0) {
            this.selectproducts.push(x);
            this.productsevent.emit(this.selectproducts);
            this.bool = true;
        }
        else {
            console.log("Item already exist");
        }
        //alert(selectedItem.CI_NAME); 
        for (var _b = 0, _c = this.selectproducts; _b < _c.length; _b++) {
            var p = _c[_b];
            console.log(p.CI_NAME);
        }
        console.log("-----------------------");
        //console.log("Selected item Id: ", selectedItem.PRODUCT_CODE); // You get the Id of the selected item here
        //alert(selectedItem.PRODUCT_CODE);
    };
    ProductListComponent.prototype.onRemove = function (selectedItem) {
        var x = selectedItem.PRODUCT_CODE;
        for (var _i = 0, _a = this.selectproducts; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.PRODUCT_CODE == x) {
                this.selectproducts.splice(this.selectproducts.indexOf(item), 1);
            }
        }
        for (var _b = 0, _c = this.selectproducts; _b < _c.length; _b++) {
            var p = _c[_b];
            console.log(p.CI_NAME);
        }
        console.log("-----------------------");
    };
    ProductListComponent.prototype.searchProducts = function () {
        var _this = this;
        this.url = 'http://127.0.0.1:5000/api/v1/assetproductsearch?page=' + this.cursor + '&limit=10&text=' + this.product + '&status=In Store';
        this.httpClient.get(this.url)
            .subscribe(function (data) {
            _this.allProducts = data.query;
            _this.meta = data.meta;
            _this.count = _this.meta.count;
            _this.cursor = _this.meta.cursor;
            _this.more = _this.meta.more;
            _this.showmeta = true;
            if (_this.more) {
                _this.shownext = true;
            }
            else {
                _this.shownext = false;
            }
            if (_this.cursor == 10) {
                _this.showpreview = false;
            }
            else {
                _this.showpreview = true;
            }
            //alert( this.cursor );
        });
    };
    ProductListComponent.prototype.preview = function () {
        this.cursor = this.cursor - 20;
        this.searchProducts();
        //alert(this.cursor);
    };
    ProductListComponent.prototype.find = function () {
        this.cursor = 0;
        this.searchProducts();
        //alert(this.cursor + "aqui" );
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ProductListComponent.prototype, "productsevent", void 0);
    ProductListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__("../../../../../src/app/create-signature-sheet/product-list/product-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/create-signature-sheet/product-list/product-list.component.css")]
        })
        //crear una clase un diccionario
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/create-signature-sheet/search-employee.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchEmployeeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchEmployeeService = /** @class */ (function () {
    function SearchEmployeeService(httpClient) {
        this.httpClient = httpClient;
        this.cont = 0;
        this.meta = [];
        this.page = 0;
        this.cursor = 0;
        this.answer = [];
        this.data = [];
        this.employees = [];
        this.showmeta = false;
        this.shownext = false;
        this.showpreview = false;
        this.httpserverurl = 'http://127.0.0.1:5000/api/v1/';
    }
    SearchEmployeeService.prototype.getTest = function () {
        return "Hello service";
    };
    SearchEmployeeService.prototype.searchEmployees = function (curso, text) {
        //this.url = 'http://127.0.0.1:5000/api/v1/assetusersearch?page='+this.cursor + '&limit=10&text=' + this.search;
        this.url = "http://127.0.0.1:5000/api/v1/assetusersearch?page=" + curso + "&limit=10&text=" + text;
        return this.httpClient.get(this.url);
    };
    SearchEmployeeService.prototype.insertSignatureSheet = function (option, id, f_name, l_name, email, date) {
        var answ;
        var url = "http://127.0.0.1:5000/api/v1/signaturesheets?id_type=" + option + "&id_employee=" + id + "&first_name=" + f_name + "&last_name=" + l_name + "&email=" + email + "&updated=" + date;
        return this.httpClient.post(url, {}).map(function (result) { return result; });
        /*.subscribe(
          (data) => {
            answ = data.message;
            alert(answ);
           }
          
           )
           return(answ); */
    };
    SearchEmployeeService.prototype.updateSheet = function (option, id, f_name, l_name, email) {
        var answ;
        var url = "http://127.0.0.1:5000/api/v1/signaturesheets?id_type=" + option + "&id_employee=" + id + "&first_name=" + f_name + "&last_name=" + l_name + "&email=" + email;
        return this.httpClient.post(url, {});
        /*.subscribe(
          (data) => {
            answ = data.message;
            alert(answ);
           }
          
           )
           return(answ); */
    };
    SearchEmployeeService.prototype.saveRelationships = function (user, products) {
        //Insert into my ASSET Data base
        var _this = this;
        this.httpClient.post("http://127.0.0.1:5000/api/v1/signatureproducts", {
            Products: JSON.stringify(products),
            id_employee: user.EMPLOYEE_ID,
            requesterid: user.CIID
        })
            .subscribe(function (data) {
            console.log(JSON.stringify(products));
            _this.getTest();
        });
    };
    SearchEmployeeService.prototype.getUserProducts = function (id_employee) {
        return this.httpClient.get("http://127.0.0.1:5000/api/v1/signatureproduct/" + id_employee).map(function (result) { return result; });
    };
    SearchEmployeeService.prototype.updateSignatureSheet = function (pr, pa, cp, userinfo, typ, id_employee) {
        return this.httpClient.put("http://127.0.0.1:5000/api/v1/signatureproduct/" + id_employee, {
            Products_to_remove: JSON.stringify(pr),
            Products_to_add: JSON.stringify(pa),
            current_products: JSON.stringify(cp),
            type: typ,
            user_info: JSON.stringify(userinfo)
        }).map(function (result) { return result; });
    };
    SearchEmployeeService.prototype.searchSignatureSheets = function (page, text, limit) {
        return this.httpClient.get("http://127.0.0.1:5000/api/v1/signaturesheet?page=" + page + "&text=" + text + "&limit=" + limit).map(function (result) { return result; });
    };
    SearchEmployeeService.prototype.searchLoanSignatureSheets = function (page, text, limit, type) {
        return this.httpClient.get("http://127.0.0.1:5000/api/v1/loansignaturesheets?page=" + page + "&text=" + text + "&limit=" + limit + "&type=" + type).map(function (result) { return result; });
    };
    SearchEmployeeService.prototype.searchLoanSheetsProducts = function (id) {
        return this.httpClient.get("http://127.0.0.1:5000/api/v1/loansheetproducts?id_signature=" + id).map(function (result) { return result; });
    };
    SearchEmployeeService.prototype.updateOffLoanSheetsProducts = function (products, id_employee) {
        return this.httpClient.post("http://127.0.0.1:5000/api/v1/loansheetproducts", {
            Products: JSON.stringify(products),
            id_employee: JSON.stringify(id_employee)
        }).map(function (result) { return result; });
    };
    SearchEmployeeService.prototype.createOffboarding = function (products_, id_employee_) {
        return this.httpClient.post("http://127.0.0.1:5000/api/v1/offboardingsheet", {
            Products: JSON.stringify(products_),
            id_employee: id_employee_
        }).map(function (result) { return result; });
    };
    SearchEmployeeService.prototype.processValidation = function (employee_id) {
        return this.httpClient.get("http://127.0.0.1:5000/api/v1/offboardingsheetvalidation/" + employee_id).map(function (result) { return result; });
    };
    SearchEmployeeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SearchEmployeeService);
    return SearchEmployeeService;
}());



/***/ }),

/***/ "../../../../../src/app/create-signature-sheet/selected-products/selected-products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col{\r\n    height: 2em;\r\n    width: 3em;\r\n}\r\n\r\nh1 { color: #7c795d; font-family: 'Trocchi', serif; font-size: 45px; font-weight: normal; line-height: 48px; margin: 0; }\r\n\r\np { color: #4c4a37; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh5 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh2 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh3 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh4 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-signature-sheet/selected-products/selected-products.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"\">\r\n    <ul class=\"list-group\" *ngFor=\"let product of parentData\">\r\n        <li class=\"list-group-item list-group-item-success \">Name: {{product.CI_NAME}} - Code: {{product.PRODUCT_CODE}} - Serial Number: {{product.SERIAL_NUMBER}} - CI Type: {{product.CI_TYPE}}</li>\r\n      \r\n      </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/create-signature-sheet/selected-products/selected-products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectedProductsComponent = /** @class */ (function () {
    function SelectedProductsComponent() {
    }
    SelectedProductsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SelectedProductsComponent.prototype, "parentData", void 0);
    SelectedProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-selected-products',
            template: __webpack_require__("../../../../../src/app/create-signature-sheet/selected-products/selected-products.component.html"),
            styles: [__webpack_require__("../../../../../src/app/create-signature-sheet/selected-products/selected-products.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SelectedProductsComponent);
    return SelectedProductsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/create-signature-sheet/type/type.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 { color: #7c795d; font-family: 'Trocchi', serif; font-size: 45px; font-weight: normal; line-height: 48px; margin: 0; }\r\n\r\np { color: #4c4a37; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh5 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh2 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh3 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh4 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-signature-sheet/type/type.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  \r\n   <!--  <button (click)=\"getTypes()\">Types</button>\r\n  \r\n  <table class=\"table table-bordered\">\r\n    <thead class=\"thead-light\">\r\n      <tr class=\"\">\r\n        <th scope=\"col\">Name</th>\r\n        <th scope=\"col\">Address</th>\r\n        <th scope=\"col\">Phone</th>\r\n        <th scope=\"col\">Terms</th>\r\n        <th scope=\"col\">Select</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody *ngFor=\"let type of types\">\r\n  \r\n      <tr class=\"select\">\r\n        <th scope=\"row\">{{type.name}}</th>\r\n        <td>{{type.address}}</td>\r\n        <td>{{type.phone}}</td>\r\n        <td>{{type.terms}}</td>\r\n        <td><button class=\"btn btn-success\">Select</button></td>\r\n      </tr>\r\n  \r\n    </tbody>\r\n  </table> -->\r\n\r\n  <h3>Select a Type</h3>\r\n    <div class=\"col-5\">\r\n        <button (click)=\"getTypes()\" class=\"btn btn-info\">Get Types</button>\r\n        <select class=\"form-control\" [(ngModel)]=\"option\" >\r\n              <option *ngFor=\"let type of types\" value=\"{{type.id_type}}\" >{{type.name}}</option>\r\n        \r\n        </select>\r\n    </div>\r\n    <button (click)=\"verify()\">v</button>\r\n \r\n  \r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/create-signature-sheet/type/type.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TypeComponent = /** @class */ (function () {
    function TypeComponent(httpClient) {
        this.httpClient = httpClient;
        this.types = [];
    }
    TypeComponent.prototype.ngOnInit = function () {
    };
    TypeComponent.prototype.getTypes = function () {
        var _this = this;
        this.httpClient.get('http://127.0.0.1:5000/api/v1/types')
            .subscribe(function (data) {
            _this.types = data.Types;
            console.log(data.Types);
        });
    };
    TypeComponent.prototype.getOption = function (event) {
        this.option = event.target.value;
    };
    TypeComponent.prototype.verify = function () {
        alert(this.option);
    };
    TypeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-type',
            template: __webpack_require__("../../../../../src/app/create-signature-sheet/type/type.component.html"),
            styles: [__webpack_require__("../../../../../src/app/create-signature-sheet/type/type.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TypeComponent);
    return TypeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardService = /** @class */ (function () {
    function DashboardService(httpClient) {
        this.httpClient = httpClient;
    }
    DashboardService.prototype.getTest = function () {
        return "Hello Dashboard";
    };
    DashboardService.prototype.loadInitialDashboard = function () {
        return this.httpClient.get("http://127.0.0.1:5000/api/v1/dashboard").map(function (result) { return result; });
    };
    DashboardService.prototype.inStoreModels = function (type, state) {
        return this.httpClient.get("http://127.0.0.1:5000/api/v1/dashboarddetail/" + type + "/" + state).map(function (result) { return result; });
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".e {\r\n    background-color: #b9ac15;\r\n}\r\n\r\n\r\n\r\np { color: #4c4a37; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 32px; margin: 0 0 24px; }\r\n\r\n\r\n\r\nh5 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 20px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\n\r\n\r\nh2 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 20px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\n\r\n\r\nh3 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 20px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\n\r\n\r\nh4 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 20px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"privilege\">\n\n<div class=\"container\">\n    <br><h2>Dashboard</h2>\n    <div class=\"row justify-content-center\">\n      <div>\n           <canvas id=\"bar-chart-horizontal\" width=\"1\" height=\"1\"></canvas> \n      </div>\n      <div>\n         <!--  <canvas id=\"doughnut-chart\" width=\"400\" height=\"400\"></canvas>-->\n      </div>\n      <div>\n         <!-- <canvas id=\"doughnut-chart2\" width=\"400\" height=\"400\"></canvas>  -->\n       </div>\n       \n      \n     \n    </div>\n    <div class=\"row\">\n      <br>\n      <div class=\"justify-content-center\">\n         \n        \n    </div>\n    <br>\n\n\n</div>\n\n\n\n</div>\n \n\n<div class=\"row justify-content-center\">\n\n      <div class=\"card border-info mb-3 mx-2\" style=\"width: 19rem;\">\n          <div class=\"card-header\">Workstation </div>\n          <div class=\"card-body text-secondary\">\n            <h5 class=\"card-title\"> Workstations In Store</h5>\n            <h1>{{ inStoreWorkstationData }}</h1>\n          </div>\n        </div>\n\n        <div class=\"card border-info mb-3 mx-1\" style=\"width: 18rem;\">\n            <div class=\"card-header\">Workstations</div>\n            <div class=\"card-body text-secondary\">\n              <h5 class=\"card-title\"> Workstations In Use</h5>\n              <h1>{{ inUseWorkstationData }}</h1>\n            </div>\n          </div>\n\n          <div class=\"card border-info mb-3 mx-1\" style=\"width: 17rem;\">\n              <div class=\"card-header\">Servers</div>\n              <div class=\"card-body text-secondary\">\n                <h5 class=\"card-title\"> Servers In Use</h5>\n                <h1>5</h1>\n              </div>\n            </div>\n            <div class=\"card border-info mb-3 mx-1\" style=\"width: 17rem;\">\n                <div class=\"card-header\">Servers</div>\n                <div class=\"card-body text-secondary\">\n                  <h5 class=\"card-title\"> Servers In Store</h5>\n                  <h1>5</h1>\n                </div>\n              </div>\n  \n\n  \n</div>\n\n<div class=\"row justify-content-center\">\n\n    <div class=\"card border-info mb-3 mx-1\" style=\" max-width: 25rem;  \">\n        <div class=\"card-header\">Peripherals In Storage</div>\n        <div class=\"card-body text-secondary\">\n          <h5 class=\"card-title\">Amount of perophericals In Store</h5>\n          <canvas id=\"doughnut-chart\" width=\"400\" height=\"400\"></canvas>\n        </div>\n      </div>\n\n    <div class=\"card border-info mb-3 mx-3\" style=\"max-width: 26rem;\">\n        <div class=\"card-header\">Peripherals In Use</div>\n        <div class=\"card-body text-secondary\">\n          <h5 class=\"card-title\">Amount of periphericals In Use </h5>\n          <canvas id=\"doughnut-chart2\" width=\"400\" height=\"400\"></canvas>\n        </div>\n      </div>\n\n\n\n          <div class=\"card border-info mb-3 mx-0\" style=\" max-width: 20rem;   max-height: 40rem; \">\n              <div class=\"card-header\">Storage Move</div>\n              <div class=\"card-body text-secondary\">\n                <h5 class=\"card-title\">Last storage asset moves</h5>\n                  <ul *ngFor=\"let item of _statehistory\">\n                    <li>{{item.resourcename}}, {{item.assettag}}, from <b> {{item.Prev}} </b> to <b>{{item.State}}</b></li>\n                  </ul>\n                \n              </div>\n            </div>\n  \n</div>\n\n<div class=\"row justify-content-center\">\n    <div class=\"card border-info mb-3 mx-2\" style=\"max-width: 100rem;\">\n        <div class=\"card-header\">All periphericals</div>\n        <div class=\"card-body text-secondary\">\n          <h5 class=\"card-title\">Assets Group by Type and State</h5>\n          <canvas id=\"myChart\" width=\"1105\" height=\"400\"></canvas>\n        </div>\n      </div>\n</div>\n\n<br>\n<div class=\"row justify-content-center\">\n       <h5>Make your Graphic - </h5>\n        <div class=\"form-inline\">\n            <div class=\"form-inline\">\n              <select class=\"form-control\" [(ngModel)]=\"asset\">\n                <option selected value=\"1\">Workstation</option>\n                <option value=\"2\">Printer</option>\n                <option value=\"3\">Router</option>\n                <option value=\"4\">Switch</option>\n                <option value=\"5\">Scanner</option>\n                <option value=\"6\">Projector</option>\n                <option value=\"7\">Keyboard</option>\n                <option value=\"8\">Software</option>\n                <option value=\"10\">Server</option>\n                <option value=\"13\">Storage Device</option>\n                <option value=\"14\">Smart Phone</option>\n                <option value=\"15\">Tablet</option>\n                <option value=\"304\">Mouse</option>\n                <option value=\"318\">Monitor</option>\n                <option value=\"311\">Docking Station</option>\n                <option value=\"305\">Headset</option>\n                <option value=\"302\">Adapter</option>\n                <option value=\"314\">Case</option>\n                <option value=\"315\">Cell Phone</option>\n                <option value=\"316\">Converter</option>\n                <option value=\"310\">Webcam</option>\n                <option value=\"16\">UPS</option>\n                <option value=\"605\">Modem</option>\n                <option value=\"609\">Data Show</option>\n              </select>-\n            </div>\n            <div class=\"form-group\">\n              <select class=\"form-control\" [(ngModel)]=\"state\" name=\"beia beia\">\n                <option selected value=\"1\">In Store</option>\n                <option value=\"2\">In Use</option>\n              </select>-\n            </div>\n            <button type=\"button\" class=\"btn btn-info\"  (click)=\"inStoreWorkstationModels()\">Generate</button>\n\n          </div>\n\n</div><br><br>\n\n<div class=\" row justify-content-center\" *ngIf=\"allperiphericals\">\n  <div class=\"\">\n      \n  </div>\n    \n</div>\n\n<div class=\"row justify-content-center\">\n    <div *ngIf=\"modelsbool\" class=\"card border-info mb-3 mx-2\" style=\"max-width: 100rem;\">\n        <div class=\"card-header\">All Models</div>\n        <div class=\"card-body text-secondary\">\n          <h5 class=\"card-title\">Workstations Group by Models In Store</h5> \n          <canvas id=\"modelChart\" width=\"1105\" height=\"1000\" ></canvas>\n        </div>\n      </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode__ = __webpack_require__("../../../../jwt-decode/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jwt_decode__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_dashboardService, login, router, cookieService) {
        this._dashboardService = _dashboardService;
        this.login = login;
        this.router = router;
        this.cookieService = cookieService;
        this.inStorePeriphericalsLabel = [];
        this.labbels = [];
        this._initialDashboard = [];
        this._statehistory = [];
        this.inStorePeriphericalsData = [];
        this.inUsePeriphericalsData = [];
        this.inUsePeriphericalsLabel = [];
        this.inStoreAssetsLabels = [];
        this.inStoreAssetsData = [];
        this.inrepairAssetsData = [];
        this.inUseAssetsData = [];
        this.disrepairAssetsData = [];
        this.expiredAssetsData = [];
        this.outAssetsData = [];
        this.allperiphericals = true;
        this.modelsbool = false;
        this.modelLabels = [];
        this.modelData = [];
        this.c = 0;
        this.cookieValue = 'UNKNOWN';
        this.privilege = false;
    }
    DashboardComponent.prototype.ngAfterViewInit = function () {
    };
    DashboardComponent.prototype.ngOnInit = function () {
        //this.cookieValue = this.cookieService.get('user_name');
        /*if(this.cookieService.get('user_name')){
          this.initialDashboard();
        }
        else{
         // alert(this.logged);
          this.router.navigateByUrl('/');
        }*/
        var val = this.cookieService.get("token");
        if (val) {
            var djtw = __WEBPACK_IMPORTED_MODULE_6_jwt_decode__(val);
            var identity = djtw['identity'];
            for (var _i = 0; _i < identity.length; _i++) {
                if (identity[_i]['privilege'] == 'dashboard') {
                    this.privilege = true;
                }
            }
            if (this.privilege) {
                this.initialDashboard();
            }
            else {
                window.location.href = '/login';
            }
        }
        else {
            window.location.href = '/login';
        }
    };
    DashboardComponent.prototype.initialDashboard = function () {
        var _this = this;
        this._dashboardService.loadInitialDashboard()
            .subscribe(function (result) {
            _this._initialDashboard = result['query'];
            _this._statehistory = result['History'];
            for (var _a = 0, _b = _this._initialDashboard; _a < _b.length; _a++) {
                var item = _b[_a];
                if (item['componenttypename'] != "Workstation" && item['displaystate'] == "In Store") {
                    var x = item['componenttypename'] + '(' + item['count'] + ')';
                    _this.inStorePeriphericalsData.push(item['count']);
                    _this.inStorePeriphericalsLabel.push(x);
                }
                if (item['componenttypename'] != "Workstation" && item['displaystate'] == "In Use") {
                    var x = item['componenttypename'] + '(' + item['count'] + ')';
                    _this.inUsePeriphericalsData.push(item['count']);
                    _this.inUsePeriphericalsLabel.push(x);
                }
                if (item['componenttypename'] == "Workstation" && (item['displaystate'] == "In Use" || item['displaystate'] == "In Store")) {
                    if (item['displaystate'] == "In Store") {
                        _this.inStoreWorkstationData = item['count'];
                    }
                    if (item['displaystate'] == "In Use") {
                        _this.inUseWorkstationData = item['count'];
                    }
                }
                if (item['componenttypename'] != "Workstation" || item['componenttypename'] == "Workstation") {
                    if (item['displaystate'] == "In Use") {
                        _this.inUseAssetsData.push(item['count']);
                    }
                    if (item['displaystate'] == "In Store") {
                        _this.inStoreAssetsData.push(item['count']);
                    }
                    if (item['displaystate'] == "Expired") {
                        _this.expiredAssetsData.push(item['count']);
                    }
                    if (item['displaystate'] == "Disrepair") {
                        _this.disrepairAssetsData.push(item['count']);
                    }
                    if (item['displaystate'] == "Donation") {
                        _this.outAssetsData.push(item['count']);
                    }
                    if (item['displaystate'] == "In Repair") {
                        _this.inrepairAssetsData.push(item['count']);
                    }
                }
            }
            _this.inStorePeriphericalChart();
        });
    };
    DashboardComponent.prototype.test = function () {
        console.log(this.state);
        console.log(this.asset);
        //console.log(this.modelData);
        //this.modelsbool = true;
    };
    DashboardComponent.prototype.inStorePeriphericalChart = function () {
        new __WEBPACK_IMPORTED_MODULE_1_chart_js__["Chart"](document.getElementById("doughnut-chart"), {
            type: 'doughnut',
            data: {
                labels: this.inStorePeriphericalsLabel,
                datasets: [
                    {
                        label: "Population (millions)",
                        backgroundColor: ["#007399", "#0099cc", "#00bfff", "#33ccff", "#66d9ff", "#99e6ff"],
                        data: this.inStorePeriphericalsData,
                        borderWidth: 8
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Peripherals in Storage'
                },
                responsive: false,
                display: true
            }
        });
        new __WEBPACK_IMPORTED_MODULE_1_chart_js__["Chart"](document.getElementById("bar-chart-horizontal"), {
            type: 'horizontalBar',
            data: {
                labels: ["Workstations In Store", "Workstations In Use"],
                datasets: [
                    {
                        backgroundColor: ["#0080ff", "#ff4d4d"],
                        data: [this.inStoreWorkstationData, this.inUseWorkstationData]
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: false,
                    text: 'Workstations'
                },
                responsive: false,
                display: true,
                scales: {
                    xAxes: [{
                            stacked: true
                        }],
                    yAxes: [{
                            stacked: true
                        }]
                }
            }
        });
        new __WEBPACK_IMPORTED_MODULE_1_chart_js__["Chart"](document.getElementById("doughnut-chart2"), {
            type: 'doughnut',
            data: {
                labels: this.inUsePeriphericalsLabel,
                datasets: [
                    {
                        label: "Population (millions)",
                        backgroundColor: ["#004080", "#0059b3", "#0073e6", "#1a8cff", "#4da6ff", "#80bfff"],
                        data: this.inUsePeriphericalsData,
                        borderWidth: 8
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Peripherals in Use'
                },
                responsive: false,
                display: true
            }
        });
        //this.canvas = document.getElementById('myChart');
        //this.ctx = this.canvas.getContext('2d');
        var myChart = new __WEBPACK_IMPORTED_MODULE_1_chart_js__["Chart"](document.getElementById('myChart'), {
            type: 'bar',
            data: {
                labels: ["Docking Station", "Headset", "Keyboard", "Monitor", "Mouse", "Ups", "Workstations"],
                datasets: [
                    {
                        label: "In Store",
                        backgroundColor: "#00334d",
                        data: this.inStoreAssetsData
                    }, {
                        label: "In Use",
                        backgroundColor: "#006699",
                        data: this.inUseAssetsData
                    },
                    {
                        label: "In Repair",
                        backgroundColor: "#0099e6",
                        data: this.inrepairAssetsData
                    }, {
                        label: "Disrepair",
                        backgroundColor: "#33bbff",
                        data: this.disrepairAssetsData
                    },
                    {
                        label: "Expired",
                        backgroundColor: "#80d4ff",
                        data: this.expiredAssetsData
                    }, {
                        label: "Donation",
                        backgroundColor: "#cceeff",
                        data: this.outAssetsData
                    },
                ]
            },
            options: {
                title: {
                    text: 'Population growth (millions)'
                }
            }
        });
    };
    DashboardComponent.prototype.watchAllPeripherical = function () {
        this.allperiphericals = true;
    };
    DashboardComponent.prototype.inStoreWorkstationModels = function () {
        var _this = this;
        this.modelsbool = false;
        this.modelLabels.splice(0);
        this.modelData.splice(0);
        this.myChart = null;
        this.modelsbool = true;
        this._dashboardService.inStoreModels(this.asset, this.state)
            .subscribe(function (result) {
            for (var _a = 0, _b = result['query']; _a < _b.length; _a++) {
                var item = _b[_a];
                _this.modelLabels.push(item['componentname']);
                _this.modelData.push(item['count']);
            }
            if (_this.c == 0) {
                _this.createModelChart();
            }
            else {
                window.myChart.update();
            }
            _this.c = _this.c + 1;
            //this.createModelChart();
        });
    };
    DashboardComponent.prototype.createModelChart = function () {
        window.myChart = new __WEBPACK_IMPORTED_MODULE_1_chart_js__["Chart"](document.getElementById('modelChart'), {
            type: 'horizontalBar',
            data: {
                labels: this.modelLabels,
                datasets: [
                    {
                        label: "Quantity In Store",
                        backgroundColor: "#3e95cd",
                        data: this.modelData
                    }
                ]
            },
            options: {
                title: {
                    text: 'Models'
                }
            }
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__["a" /* CookieService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer{\r\n    background-color: #8b3300;\r\n    position:fixed;\r\n    left:0px;\r\n    bottom:0px;\r\n    height:15;\r\n    width:100%;\r\n    padding: 5px;\r\n}\r\n\r\n.element a{\r\n    color: #f8f4f4\r\n}\r\n\r\n.element {\r\n    color: #f8f4f4\r\n}\r\n\r\nh1 { color: #7c795d; font-family: 'Trocchi', serif; font-size: 45px; font-weight: normal; line-height: 48px; margin: 0; }\r\n\r\np { color: #4c4a37; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh5 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh2 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh3 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh4 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br><br><br><br><br><br><br><br>\r\n<div class=\"footer\" style=\"heigth: 5px\">\r\n  <footer class=\"mainfooter\" role=\"contentinfo\">\r\n    <!-- <div class=\"footer-top p-y-2\">\r\n      <div class=\"container-fluid\">\r\n        \r\n      </div>\r\n    </div>\r\n    <div class=\"footer-middle\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3 col-sm-6\">\r\n         \r\n          <div class=\"footer-pad\">\r\n            <h4 class=\"element\">Direccion</h4>\r\n            <address>\r\n        <ul class=\"list-unstyled\">\r\n          <li class=\"element\">\r\n           Guanacaste<br>\r\n            Calle 6152<br>\r\n\r\n        </ul>\r\n      </address>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-6\">\r\n          \r\n          <div class=\"footer-pad\">\r\n            <h4 class=\"element\" >Servicios</h4>\r\n            <ul class=\"list-unstyled\">\r\n              <li class=\"element\"><a routerLink=\"#\"></a></li>\r\n              <li class=\"element\"><a routerLink=\"#\">centro de pago</a></li>\r\n              <li class=\"element\"><a routerLink=\"#\">Directorio de contacto</a></li>\r\n   \r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-6\">\r\n          \r\n          <div class=\"footer-pad\">\r\n            <h4 class=\"element\">Informacion del Sitio</h4>\r\n            <ul class=\"list-unstyled\">\r\n              <li class=\"element\"><a routerLink=\"#\">Tutorial del Sitio</a></li>\r\n              <li class=\"element\"><a routerLink=\"#\">Accesibilidad</a></li>\r\n\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-6\">\r\n          \r\n          <div class=\"footer-pad\">\r\n            <h4 class=\"element\" >Departamentos </h4>\r\n            <ul class=\"list-unstyled\">\r\n              <li class=\"element\"><a routerLink=\"#\">Reacreaciones</a></li>\r\n              <li class=\"element\"><a routerLink=\"#\">Trabajadores publicos</a></li>\r\n\r\n              <li class=\"element\">\r\n                <a routerLink=\"#\"></a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </div> -->\r\n    <div class=\"footer-bottom\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <!--Footer Bottom-->\r\n            <p class=\"text-xs-center element\">&copy; Copyright 2018 - Tegucigalpa City.  All rights reserved.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n    \r\n</div> "

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/loan-admin/loan-a/loan-a.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 { color: #7c795d; font-family: 'Trocchi', serif; font-size: 45px; font-weight: normal; line-height: 48px; margin: 0; }\r\n\r\np { color: #4c4a37; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh5 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh2 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh3 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh4 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loan-admin/loan-a/loan-a.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\" *ngIf=\"privilege\">\n    <div>\n        <h3>Loan Sheets</h3>\n        <p>\"A loan policy must address key credit decision criteria and underwriting factors such as the purpose of the loan, required financial information, collateral, risk ratings (borrower and facility), pricing, and policy exceptions. It may include metrics that make a particular borrower, industry, or loan type acceptable; for example, the policy may note debt-to-income or specific debt service coverage (DSC) ratios, interest coverage ratios, loan-to-value requirements, or appropriate amortization periods. The policy should also address postorigination activities, such as ongoing monitoring and credit administration, including postorigination monitoring of loan covenants, obtaining financial information, and assessing the borrower's ongoing ability to service the debt and ultimately repay the loan.\"</p>\n         <br>\n        <div class=\"form-group\"> \n            <button class=\"btn btn-info btn-sm\" (click)=\"start()\">Let's Get Started!</button>\n        </div>\n    </div>\n\n    <div class=\" col-6\" *ngIf=\"boolfirst\">\n        <h3>First-Step select a type and date</h3>\n        <div class=\"form-group\">\n            <select class=\"form-control\" [(ngModel)]=\"option\">\n                    <option value=\"2\">OffBoarding</option>\n                    <option value=\"3\">Loan</option>\n            </select>\n        </div>\n        <button class=\"btn btn-info d-flex justify-content-center btn-sm\" (click)=\"validate()\">Continue</button>\n    </div>\n\n    <br>\n  <!--  <button class=\"btn btn-sm btn-danger\" (click)=\"test()\">Test</button> -->\n    <br>\n\n    <ul class=\"list-group\" *ngFor=\"let item of selectemploye\">\n        <li class=\"list-group-item list-group-item-success \">{{item.FIRST_NAME}}  {{item.LAST_NAME}} - {{item.EMAIL}}</li>\n      \n      </ul>\n      \n\n\n    <div *ngIf=\"boolemployee\">\n        <h3>First-Step select the employee</h3>\n         <!-- <ul class=\"list-group\" *ngFor=\"let item of selectemploye\">{{item.FIRST_NAME}} - {{item.LAST_NAME}} - {{item.EMAIL}} </ul> -->\n \n \n \n        <app-employee-table (employeevent)=\"selectemploye=$event\"></app-employee-table>\n        <div class=\"d-flex justify-content-center\">\n                 <button class=\"btn btn-info btn-sm\" (click)=\"backemployee()\">Go Back</button><h4>-</h4>\n                 <button class=\"btn btn-info btn-sm\" (click)=\"continueemployee()\">Continue</button>\n        </div>    \n   </div >\n   <br>\n   <div class=\"\" *ngIf=\"boolproducts\">\n    <h3><b>Loan Signature Sheets</b></h3>\n    <br>\n    <table class=\"table\">\n        <thead class=\"thead-dark\">\n          <tr class=\"\">\n            <th scope=\"col\">Sheet Id</th>\n            <th scope=\"col\">First Name</th>\n            <th scope=\"col\">Last Name</th>\n            <th scope=\"col\">E-mail</th>\n            <th scope=\"col\">Employee ID</th>\n            <th scope=\"col\">Date</th>\n            <th scope=\"col\">select</th>\n           <!-- <th scope=\"col\">Status</th>\n            <th scope=\"col\">Last?</th> -->\n            \n          </tr>\n        </thead>\n        <tbody *ngFor=\"let product of sheets\">\n      \n          <tr class=\"select\">\n            <th scope=\"row\">{{product.id_signature}}</th>\n            <td>{{product.first_name}}</td>\n            <td>{{product.last_name}}</td>\n            <td>{{product.email}}</td>\n            <td>{{product.id_employee}}</td>\n            <td>{{product.updated}}</td>\n            <td><button class=\"btn btn-info btn-sm\" (click)=\"onSelect(product)\" >select</button></td>\n          </tr>\n      \n        </tbody>\n      \n      </table>\n      <div class=\"d-flex justify-content-center\">\n          <button class=\"btn btn-link\" *ngIf=\"showpreview\" (click)=\"preview()\">Preview</button>\n          <button class=\"btn btn-link\" (click)=\"next()\" *ngIf=\"shownext\">Next</button>\n      </div>\n\n      <div class=\"d-flex justify-content-start\" *ngIf=\"meta\">\n          <p>Search Result Quantity: {{meta['count']}}, cursor {{meta['cursor']}} More?  {{meta['more']}}.</p>\n      </div>\n      <div >\n        <ul class=\"list-group\" *ngFor=\"let item of selectLoanSheet\">\n            <li class=\"list-group-item list-group-item-info \">{{item.id_signature}} - {{item.email}}</li>\n          \n          </ul>\n      </div>\n      <br>\n      <div class=\"d-flex justify-content-center\" *ngIf=\"meta\">\n        <button class=\"btn btn-primary \" (click)=\"openLoanModal(Loantemplate)\">Release Assets</button><br>\n    </div>\n    </div>\n\n    <div *ngIf=\"booloffboarding\">\n    <h3>Current Signature Sheet Products</h3>\n\n    <div class=\"\">\n          <table class=\"table\">\n              <thead class=\"thead-dark\">\n                <tr class=\"\">\n                    <th scope=\"col\">Sheet Id</th>\n                  <th scope=\"col\">CI Name</th>\n                  <!-- <th scope=\"col\">CI Type</th> -->\n                  <th scope=\"col\">Tag</th>\n                  <th scope=\"col\">Serial N°</th>\n                  <th scope=\"col\">Model</th>\n                  <th scope=\"col\">CIID</th>\n                  \n                </tr>\n              </thead>\n              <tbody *ngFor=\"let product of offBoardingProducts\">\n            \n                <tr class=\"select\">\n                  <th scope=\"row\">{{product.id_signature}}</th>\n                  <td>{{product.product_name}}</td>\n                 <!-- <td>{{product.CI_TYPE}}</td> -->\n                  <td>{{product.id_product}}</td>\n                  <td>{{product.serial_number}}</td>\n                  <td>{{product.model}}</td>\n                  <td>{{product.ciid}}</td>\n                </tr>\n            \n              </tbody>\n            \n            </table>\n      </div>\n      <br>\n      <div class=\"d-flex justify-content-center\">\n            <button class=\"btn btn-primary \" (click)=\"openOffboardingModal(offboardingTemplate)\">Make Offboarding</button><br>\n      </div>\n\n    </div>\n\n</div>\n\n\n<ng-template #template>\n    <div class=\"modal-body text-center alert alert-warning\">\n        <p>Are you sure of save this Signature Sheet??</p>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"insertSheet()\" >Yes</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"abort()\" >No</button>\n        <div class=\"modal-body alert alert-warning\" role=\"alert\">\n                The information will be save and automatically create a pdf file of the sheet, press 'YES', to continue or 'No', to go back.\n        </div>\n    </div>\n\n   \n</ng-template>\n\n\n<ng-template #Loantemplate>\n        <div class=\"modal-header text-center\">\n          <h4 class=\"modal-title text-center\">The Following Assests will be modified</h4>\n          <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body text-center\">\n          <b> Sheet Products: </b>\n        </div>\n        <div >\n            <ul class=\"list-group\" *ngFor=\"let item of modalProducts\">\n                <li class=\"list-group-item list-group-item-warning \">{{item.id_product}} - {{item.product_name}} - {{item.model}}</li>\n                  \n            </ul>\n        </div><br>\n        <p>The assets state will be change to in store in the asset explorer database, would you like to continue?</p>\n        \n        <div class=\"text-center\">\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\" >Yes</button>\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"decline()\" >No</button>\n        </div>\n        <hr>\n\n</ng-template>\n\n<ng-template #offboardingTemplate>\n        <div class=\"modal-body text-center alert alert-info\">\n            <p>Are you sure of performing this offboarding?</p>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"makeOffboarding()\" >Yes</button>\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"decline()\" >No</button>\n            <div class=\"modal-body alert alert-warning\" role=\"alert\">\n                    The relationships will be deleted and automatically create a pdf file of the offboarding sheet, press 'YES', to continue or 'No', to go back.\n            </div>\n        </div>\n    \n       \n    </ng-template>"

/***/ }),

/***/ "../../../../../src/app/loan-admin/loan-a/loan-a.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanAComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_signature_sheet_search_employee_service__ = __webpack_require__("../../../../../src/app/create-signature-sheet/search-employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode__ = __webpack_require__("../../../../jwt-decode/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jwt_decode__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoanAComponent = /** @class */ (function () {
    function LoanAComponent(modalService, _Service, cookieService, router) {
        this.modalService = modalService;
        this._Service = _Service;
        this.cookieService = cookieService;
        this.router = router;
        this.boolemployee = false;
        this.selectemploye = [];
        this.selectLoanSheet = [];
        this.boolfirst = false;
        this.boolproducts = false;
        this.current_sheet = false;
        this.sheets = [];
        this.page = 1;
        this.limit = 10;
        this.searchText = "";
        this.modalProducts = [];
        this.meta = [];
        this.shownext = false;
        this.showpreview = false;
        this.privilege = false;
        this.offBoardingProducts = [];
        this.booloffboarding = false;
        this.validation = 0;
    }
    LoanAComponent.prototype.ngOnInit = function () {
        /*if(!this.cookieService.get('user_name')){
          this.router.navigateByUrl('/');
        }*/
        var val = this.cookieService.get("token");
        if (val) {
            var djtw = __WEBPACK_IMPORTED_MODULE_5_jwt_decode__(val);
            var identity = djtw['identity'];
            for (var _i = 0; _i < identity.length; _i++) {
                if (identity[_i]['privilege'] == 'offboarding-loan') {
                    this.privilege = true;
                }
            }
            if (this.privilege) {
            }
            else {
                window.location.href = '/login';
            }
        }
        else {
            window.location.href = '/login';
        }
    };
    LoanAComponent.prototype.start = function () {
        this.boolfirst = true;
    };
    LoanAComponent.prototype.validate = function (template) {
        //alert(this.date + "" + this.option );
        if (this.option) {
            this.boolemployee = true;
            this.boolfirst = false;
        }
        else {
            alert('Select Type first!');
        }
    };
    LoanAComponent.prototype.continueemployee = function () {
        var _this = this;
        //faltan los ifs;
        var x = this.selectemploye[0];
        if (x) {
            if (this.option == 3) {
                this.searchText = x.EMAIL;
                this._Service.searchLoanSignatureSheets(this.page, this.searchText, this.limit, this.option)
                    .subscribe(function (res) {
                    var x = res['SignatureSheets'];
                    var y = res['meta'];
                    _this.sheets = x;
                    _this.meta = y;
                    _this.page = _this.page + 1;
                    if (_this.meta['more']) {
                        _this.shownext = true;
                    }
                    else {
                        _this.shownext = false;
                    }
                    if (_this.meta['cursor'] == 11) {
                        _this.showpreview = false;
                    }
                    else {
                        _this.showpreview = true;
                    }
                    //this.currentproducts = this.selectproducts;
                });
                this.boolemployee = false;
                this.boolproducts = true;
            }
            if (this.option == 2) {
                this._Service.processValidation(x.EMPLOYEE_ID)
                    .subscribe(function (res) {
                    var m;
                    m = res['message'];
                    if (m == 'null') {
                        alert('No signature to show');
                        window.location.href = '/loan';
                    }
                    if (m['id_type'] != 2) {
                        _this.validation = 1;
                    }
                    console.log(res);
                });
                this._Service.getUserProducts(x.EMPLOYEE_ID)
                    .subscribe(function (res) {
                    console.log(res);
                    _this.offBoardingProducts = res['SignatureSheetsProducts'];
                    _this.booloffboarding = true;
                    _this.boolemployee = false;
                });
            }
        }
        else {
            alert("Select Employee first.!");
        }
    };
    LoanAComponent.prototype.onSelect = function (selectedItem) {
        var x = {
            'ID_SIGNATURE': selectedItem.id_signature,
            'EMPLOYEE_ID': selectedItem.id_employee,
        };
        this.selectLoanSheet[0] = selectedItem;
    };
    LoanAComponent.prototype.openLoanModal = function (template) {
        var _this = this;
        var x = this.selectLoanSheet[0];
        console.log(this.selectLoanSheet);
        if (x) {
            this._Service.searchLoanSheetsProducts(x.id_signature)
                .subscribe(function (res) {
                var x = res['Products'];
                if (x) {
                    _this.modalProducts = x;
                    //console.log(this.modalProducts);
                    _this.modalRef = _this.modalService.show(template);
                }
                else {
                    alert('No products for that sheet');
                }
            });
        }
        else {
            alert("Select a Sheet first");
        }
    };
    LoanAComponent.prototype.confirm = function () {
        var x = this.selectLoanSheet[0];
        this._Service.updateOffLoanSheetsProducts(this.modalProducts, x.id_employee)
            .subscribe(function (res) {
            if (res['message'] == 'Done') {
                alert('Relationships removed');
                window.location.href = '/loan';
            }
            else {
                alert('Assets already removed');
            }
        });
    };
    LoanAComponent.prototype.decline = function () {
        window.location.href = '/loan';
    };
    LoanAComponent.prototype.openOffboardingModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    LoanAComponent.prototype.makeOffboarding = function () {
        var _this = this;
        var x = this.selectemploye[0];
        //let date = '00/00/2017'
        //hacer insert de la hoja primero
        if (this.validation == 1) {
            this._Service.updateSheet(this.option, x.EMPLOYEE_ID, x.FIRST_NAME, x.LAST_NAME, x.EMAIL)
                .subscribe(function (res) {
                console.log(res);
                if (res['message'] == 'Signature Sheet correctly inserted') {
                    _this._Service.createOffboarding(_this.offBoardingProducts, x.EMPLOYEE_ID)
                        .subscribe(function (res) {
                        if (res['message'] == 'done') {
                            alert('Offboarding Sheet correctly inserted');
                        }
                        else {
                            alert('Something Wrong');
                        }
                    });
                }
                else {
                    alert('Something Wrong');
                }
            });
        }
        else {
            alert('Offboarding Process already done');
        }
    };
    LoanAComponent.prototype.test = function () {
        var x = this.selectemploye[0];
        console.log(this.validation);
    };
    LoanAComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loan-a',
            template: __webpack_require__("../../../../../src/app/loan-admin/loan-a/loan-a.component.html"),
            styles: [__webpack_require__("../../../../../src/app/loan-admin/loan-a/loan-a.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_2__create_signature_sheet_search_employee_service__["a" /* SearchEmployeeService */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], LoanAComponent);
    return LoanAComponent;
}());



/***/ }),

/***/ "../../../../../src/app/loan-admin/loan-admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanAdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loan_a_loan_a_component__ = __webpack_require__("../../../../../src/app/loan-admin/loan-a/loan-a.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__share_module_share_module_module__ = __webpack_require__("../../../../../src/app/share-module/share-module.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoanAdminModule = /** @class */ (function () {
    function LoanAdminModule() {
    }
    LoanAdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__share_module_share_module_module__["a" /* ShareModuleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__loan_a_loan_a_component__["a" /* LoanAComponent */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__loan_a_loan_a_component__["a" /* LoanAComponent */]]
        })
    ], LoanAdminModule);
    return LoanAdminModule;
}());



/***/ }),

/***/ "../../../../../src/app/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService(httpClient) {
        this.httpClient = httpClient;
        this.isUserLoggedIn = false;
        this.isUserLoggedIn = false;
    }
    LoginService.prototype.setUserLoggedIn = function () {
        this.isUserLoggedIn = true;
    };
    LoginService.prototype.getUserLoggedIn = function () {
        return this.isUserLoggedIn;
    };
    LoginService.prototype.getCookie = function () {
        return this.httpClient.get("http://127.0.0.1:5000/getcookie").map(function (result) { return result; });
    };
    LoginService.prototype.test = function () {
        return 'baia baia';
    };
    LoginService.prototype.logout = function () {
        return this.httpClient.get("http://127.0.0.1:5000/logout").map(function (result) { return result; });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 45px; font-weight: normal; line-height: 48px; margin: 0; }\r\n\r\np { color: #4c4a37; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh5 { color: #000000; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n<br>\n    <div class=\"container\">\n      <h1>Welcome To Laureate IT System</h1> <br><br>\n      <h5>Welcome to the inventory control system, this application is born as an extension of the asset explorer system, as a personalized complement for the management of signature sheets, real-time information of the main assets of the site as well as immediate report.</h5>\n\n    </div>\n\n <!--   <button class=\"btn btn-danger\" (click)=\"test2()\">Test</button> -->\n\n</body>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode__ = __webpack_require__("../../../../jwt-decode/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jwt_decode__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, modalService, login, cookieService) {
        this.router = router;
        this.modalService = modalService;
        this.login = login;
        this.cookieService = cookieService;
        this.cookieValue = 'UNKNOWN';
        this.fullImagePath = '/assets/images/leaf-icon.png';
    }
    LoginComponent.prototype.ngOnInit = function () {
        /*if(!this.cookieService.get('user_name')){
          this.router.navigateByUrl('/');
        }*/
        this.login.getCookie().subscribe(function (res) {
        });
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        var val = this.cookieService.get("token");
        var djtw = __WEBPACK_IMPORTED_MODULE_5_jwt_decode__(val);
        var identity = djtw['identity'];
        //this.userName = identity[7]['username'];
    };
    LoginComponent.prototype.test = function () {
        alert(this.cookieService.get('user_name') + ' ' + this.cookieService.get('password'));
    };
    LoginComponent.prototype.destroy = function () {
        this.cookieService.deleteAll();
    };
    LoginComponent.prototype.checkCredentials = function (template) {
        if (this.user_name == 'administrator' && this.password == 'Laureate123') {
            //this.login.setUserLoggedIn();
            //alert(this.login.getUserLoggedIn());
            //this.router.navigate(['/dashboard']);
            this.cookieService.set('user_name', this.user_name, 0.25);
            this.cookieService.set('password', this.password, 0.25);
            this.cookieValue = this.cookieService.get('user_name');
            window.location.href = '/dashboard';
        }
        else {
            this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
        }
    };
    LoginComponent.prototype.test2 = function () {
        var val = this.cookieService.get("token");
        var djtw = __WEBPACK_IMPORTED_MODULE_5_jwt_decode__(val);
        console.log(djtw);
        var identity = djtw['identity'];
        console.log(identity[6]['privilege']);
        console.log(identity.length);
        for (var _i = 0; _i < identity.length; _i++) {
            console.log(identity[_i]['privilege']);
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/management.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManagementService = /** @class */ (function () {
    function ManagementService(httpClient) {
        this.httpClient = httpClient;
    }
    ManagementService.prototype.test = function () {
        return 'baia baia';
    };
    ManagementService.prototype.getRoles = function () {
        return this.httpClient.get("http://127.0.0.1:5000/api/v1/roles").map(function (result) { return result; });
    };
    ManagementService.prototype.getPrivilegesbyRoles = function (role) {
        return this.httpClient.get("http://127.0.0.1:5000/api/v1/roles_x_privileges/" + role).map(function (result) { return result; });
    };
    ManagementService.prototype.postUseradmin = function (email, rol) {
        return this.httpClient.post("http://127.0.0.1:5000/api/v1/usersadmins", {
            'user_name': email,
            'id_role': rol
        }).map(function (result) { return result; });
    };
    ManagementService.prototype.postNewRolePrivileges = function (name, privileges_) {
        return this.httpClient.post("http://127.0.0.1:5000/api/v1/roles", {
            'rol_name': name,
            'privileges': JSON.stringify(privileges_)
        }).map(function (result) { return result; });
    };
    ManagementService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ManagementService);
    return ManagementService;
}());



/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-custom {\r\n    background-color:    #000000   ;\r\n    height: 4.5em;\r\n}\r\n\r\n/* change the brand and text color */\r\n\r\n.navbar-custom .navbar-brand,\r\n.navbar-custom .navbar-text {\r\n    color: rgba(255,255,255,.8);\r\n}\r\n\r\n/* change the link color */\r\n\r\n.navbar-custom .navbar-nav .nav-link {\r\n    color:  #fdfefe ;\r\n}\r\n\r\n/* change the color of active or hovered links */\r\n\r\n.navbar-custom .nav-item.active .nav-link,\r\n.navbar-custom .nav-item:hover .nav-link {\r\n    color: #ff821c;\r\n}\r\n\r\n/* for dropdown only - change the color of droodown */\r\n\r\n.navbar-custom .dropdown-menu {\r\n    background-color: #ff5500;\r\n}\r\n\r\n.navbar-custom .dropdown-item {\r\n    color: #ffffff;\r\n}\r\n\r\n.navbar-custom .dropdown-item:hover,\r\n.navbar-custom .dropdown-item:focus {\r\n    color: #333333;\r\n    background-color: rgba(255,255,255,.5);\r\n}\r\n\r\n.nav-title{\r\n    font-size: 1.5em;\r\n    color : #fdfefe ;\r\n}\r\n\r\nh1 { color: #7c795d; font-family: 'Trocchi', serif; font-size: 45px; font-weight: normal; line-height: 48px; margin: 0; }\r\n\r\np { color: #4c4a37; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh5 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh2 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh3 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh4 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\n<div *ngIf=\"loggedIn\">\r\n        <nav class=\"navbar navbar-expand-sm navbar-custom\">\r\n                <a routerLink=\"/\" class=\"navbar-brand nav-title\">IT Inventory</a>\r\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCustom\">\r\n                    <i class=\"fa fa-bars fa-lg py-1 text-white\"></i>\r\n                </button>\r\n                <div class=\"navbar-collapse collapse\" id=\"navbarCustom\">\r\n                    <ul class=\"navbar-nav\">\r\n                        <li class=\"nav-item \" *ngIf=\"privilegeDashboard\">\r\n                            <a class=\"nav-link\" routerLink=\"dashboard\" >Dashboard /</a>\r\n                        </li>\r\n                        <li class=\"nav-item\" *ngIf=\"privilegeCreate\">\r\n                            <a class=\"nav-link\" routerLink=\"newsheet\" >Create Signature Sheet /</a>\r\n                        </li>\r\n                        <li class=\"nav-item\" *ngIf=\"privilegeUpdtae\">\r\n                            <a class=\"nav-link\" routerLink=\"updatesheet\">Update Signature Sheet /</a>\r\n                        </li>\r\n                        <li class=\"nav-item\" *ngIf=\"privilegeLoan\">\r\n                              <a class=\"nav-link\" routerLink=\"loan\">Offboarding-Loan Admin /</a>\r\n                          </li>\r\n                        <li class=\"nav-item \" *ngIf=\"privilegePdf\">\r\n                          <a class=\"nav-link\" routerLink=\"pdf\"> Pdf /</a>\r\n                      </li>\r\n                      <li class=\"nav-item \" *ngIf=\"privilegeReports\">\r\n                          <a class=\"nav-link\" routerLink=\"#\">Reports /</a>\r\n                      </li>\r\n\r\n                      <li class=\"nav-item \" *ngIf=\"privilegeAdmin\">\r\n                        <a class=\"nav-link\" routerLink=\"admin\">User Management /</a>\r\n                    </li>\r\n                  </ul>\r\n                  \r\n              </div>\r\n                      <div class=\"nav-item d-flex flex-row-reverse\">\r\n                          <button class=\"btn-sm btn btn-outline-warning\"(click)=\"Logout()\">Logout</button>\r\n                      </div>\r\n              </nav>\r\n\r\n</div> -->\r\n\r\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n        <a routerLink=\"/\" class=\"navbar-brand nav-title\">IT Inventory</a>\r\n\r\n      <div class=\"collapse navbar-collapse justify-content-md-center\" id=\"navbarsExample08\">\r\n        <ul class=\"navbar-nav\">\r\n <!--         <li class=\"nav-item active\">\r\n            <a class=\"nav-link\" href=\"#\">Centered nav only <span class=\"sr-only\">(current)</span></a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#\">Link</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n          </li>\r\n        -->\r\n          <li class=\"nav-item \" *ngIf=\"privilegeDashboard\">\r\n                <a class=\"nav-link\" routerLink=\"dashboard\" >Dashboard</a>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"privilegeCreate\">\r\n                <a class=\"nav-link\" routerLink=\"newsheet\" >Create Sheet</a>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"privilegeUpdtae\">\r\n                <a class=\"nav-link\" routerLink=\"updatesheet\">Update Sheet</a>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"privilegeLoan\">\r\n                  <a class=\"nav-link\" routerLink=\"loan\">Offboarding-Loan</a>\r\n              </li>\r\n            <li class=\"nav-item \" *ngIf=\"privilegePdf\">\r\n              <a class=\"nav-link\" routerLink=\"pdf\"> Pdf</a>\r\n          </li>\r\n          <li class=\"nav-item \" *ngIf=\"privilegeReports\">\r\n              <a class=\"nav-link\" routerLink=\"#\">Reports</a>\r\n          </li>\r\n\r\n          <li class=\"nav-item \" *ngIf=\"privilegeAdmin\">\r\n            <a class=\"nav-link\" routerLink=\"admin\">User Management</a>\r\n        </li>\r\n\r\n\r\n <!--         <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"http://example.com\" id=\"dropdown08\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdown08\">\r\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n            </div>\r\n          </li> -->\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"nav-item d-flex flex-row-reverse\">\r\n            <button class=\"btn-sm btn btn-outline-info\"(click)=\"Logout()\">Logout</button>\r\n        </div>\r\n    </nav>\r\n\r\n\r\n<!--\r\n\r\n<div>\r\n        <nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\r\n                <div class=\"sidebar-sticky\">\r\n                  <ul class=\"nav flex-column\">\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link active\" href=\"#\">\r\n                        <span data-feather=\"home\"></span>\r\n                        Dashboard <span class=\"sr-only\">(current)</span>\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"#\">\r\n                        <span data-feather=\"file\"></span>\r\n                        Orders\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"#\">\r\n                        <span data-feather=\"shopping-cart\"></span>\r\n                        Products\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"#\">\r\n                        <span data-feather=\"users\"></span>\r\n                        Customers\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"#\">\r\n                        <span data-feather=\"bar-chart-2\"></span>\r\n                        Reports\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"#\">\r\n                        <span data-feather=\"layers\"></span>\r\n                        Integrations\r\n                      </a>\r\n                    </li>\r\n                  </ul>\r\n      \r\n                  <h6 class=\"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted\">\r\n                    <span>Saved reports</span>\r\n                    <a class=\"d-flex align-items-center text-muted\" href=\"#\">\r\n                      <span data-feather=\"plus-circle\"></span>\r\n                    </a>\r\n                  </h6>\r\n                  <ul class=\"nav flex-column mb-2\">\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"#\">\r\n                        <span data-feather=\"file-text\"></span>\r\n                        Current month\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"#\">\r\n                        <span data-feather=\"file-text\"></span>\r\n                        Last quarter\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"#\">\r\n                        <span data-feather=\"file-text\"></span>\r\n                        Social engagement\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" href=\"#\">\r\n                        <span data-feather=\"file-text\"></span>\r\n                        Year-end sale\r\n                      </a>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </nav>\r\n</div>\r\n\r\n-->\r\n\r\n<!-- Pending login nav bar -->\r\n\r\n<div *ngIf=\"loggedInPending\">\r\n        <nav class=\"navbar navbar-expand-sm navbar-custom\">\r\n            <div class=\"d-flex justify-content-center\">\r\n                    <h3 class=\"d-flex justify-content-center\" style=\"color: #ebebeb\"> IT Inventory System.!</h3>\r\n            </div>\r\n                \r\n\r\n               <!-- <div class=\"navbar-collapse collapse\" id=\"navbarCustom\">\r\n                    <ul class=\"navbar-nav\">\r\n                        <li class=\"nav-item \">\r\n                            <a class=\"nav-link\" routerLink=\"dashboard\">Home /</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" routerLink=\"newsheet\">Create Signature Sheet /</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" routerLink=\"updatesheet\">Update Signature Sheet /</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                              <a class=\"nav-link\" routerLink=\"loan\">Offboarding-Loan Admin /</a>\r\n                          </li>\r\n                        <li class=\"nav-item \">\r\n                          <a class=\"nav-link\" routerLink=\"pdf\"> Pdf /</a>\r\n                      </li>\r\n                      <li class=\"nav-item \">\r\n                          <a class=\"nav-link\" routerLink=\"#\">Reports /</a>\r\n                      </li>\r\n                  </ul>\r\n                  \r\n              </div> \r\n                      <div class=\"nav-item d-flex flex-row-reverse\">\r\n                          <button class=\"btn-sm btn btn-warning\"(click)=\"Logout()\">Logout</button>\r\n                      </div> -->\r\n              </nav>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode__ = __webpack_require__("../../../../jwt-decode/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(cookieService, router, loginService, httpClient) {
        this.cookieService = cookieService;
        this.router = router;
        this.loginService = loginService;
        this.httpClient = httpClient;
        this.loggedIn = true;
        this.privilegeDashboard = false;
        this.privilegeCreate = false;
        this.privilegeUpdtae = false;
        this.privilegeLoan = false;
        this.privilegePdf = false;
        this.privilegeReports = false;
        this.privilegeAdmin = false;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        /* if(this.cookieService.get('user_name')){
           this.loggedIn = true;
           this.loggedInPending = false;
         }
         else{
           this.loggedInPending = true;
           this.loggedIn = false;
         }*/
        var val = this.cookieService.get("token");
        var djtw = __WEBPACK_IMPORTED_MODULE_3_jwt_decode__(val);
        var identity = djtw['identity'];
        for (var _i = 0; _i < identity.length; _i++) {
            if (identity[_i]['privilege'] == 'dashboard') {
                this.privilegeDashboard = true;
            }
            if (identity[_i]['privilege'] == 'create_sheet') {
                this.privilegeCreate = true;
            }
            if (identity[_i]['privilege'] == 'update_sheet') {
                this.privilegeUpdtae = true;
            }
            if (identity[_i]['privilege'] == 'offboarding-loan') {
                this.privilegeLoan = true;
            }
            if (identity[_i]['privilege'] == 'pdf') {
                this.privilegePdf = true;
            }
            if (identity[_i]['privilege'] == 'user_management') {
                this.privilegeAdmin = true;
            }
            if (identity[_i]['privilege'] == 'reports') {
                this.privilegeReports = true;
            }
        }
    };
    NavBarComponent.prototype.Logout = function () {
        //destruir ss python
        /*this.loginService.logout()
        .subscribe(res => {
          this.cookieService.deleteAll();
          window.location.href = '/login';
    
        })*/
        this.cookieService.deleteAll();
        var url = "http://127.0.0.1:5000/logout";
        window.location.href = url;
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pdf/pdf-module/pdf-module.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfModuleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pdfs_pdfs_component__ = __webpack_require__("../../../../../src/app/pdf/pdfs/pdfs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_module_share_module_module__ = __webpack_require__("../../../../../src/app/share-module/share-module.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PdfModuleModule = /** @class */ (function () {
    function PdfModuleModule() {
    }
    PdfModuleModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__share_module_share_module_module__["a" /* ShareModuleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__pdfs_pdfs_component__["a" /* PdfsComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__pdfs_pdfs_component__["a" /* PdfsComponent */]
            ]
        })
    ], PdfModuleModule);
    return PdfModuleModule;
}());



/***/ }),

/***/ "../../../../../src/app/pdf/pdfs/pdfs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 { color: #7c795d; font-family: 'Trocchi', serif; font-size: 45px; font-weight: normal; line-height: 48px; margin: 0; }\r\n\r\np { color: #4c4a37; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh5 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh2 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh3 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh4 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pdf/pdfs/pdfs.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\" *ngIf=\"privilege\">\n    <div>\n        <h3>PDF Signature Sheet</h3>\n        <p>\"The Portable Document Format (PDF) is a file format developed in the 1990s to present documents, including text formatting and images, in a manner independent of application software, hardware, and operating systems. Based on the PostScript language, each PDF file encapsulates a complete description of a fixed-layout flat document, including the text, fonts, vector graphics, raster images and other information needed to display it. PDF was standardized as an open format, ISO 32000, in 2008, and does not require any royalties for its implementation.\n\n            Today, PDF files may contain a variety of content besides flat text and graphics including logical structuring elements, interactive elements such as annotations and form-fields, layers, rich media (including video content) and three dimensional objects using U3D or PRC, and various other data formats. The PDF specification also provides for encryption and digital signatures, file attachments and metadata to enable workflows requiring these features.\"</p>\n         <br>\n    </div>\n    <div class=\"\">\n        <h3>Historical Signature Sheet Table</h3>\n        <form class=\"form-inline d-flex justify-content-end\">\n            <div class=\"form-group\">\n                <input type=\"text\" placeholder=\"Search\" class=\"form-control\" (keyup)=\"searchSheet($event)\">\n                <button class=\"btn btn-info\" (click)=\"find()\">Find</button>\n        \n            </div>\n        \n        </form><br>\n        <table class=\"table\">\n            <thead class=\"thead-dark\">\n              <tr class=\"\">\n                <th scope=\"col\">Sheet Id</th>\n                <th scope=\"col\">First Name</th>\n                <th scope=\"col\">Last Name</th>\n                <th scope=\"col\">E-mail</th>\n                <th scope=\"col\">Employee ID</th>\n                <th scope=\"col\">Date</th>\n                <th scope=\"col\">select</th>\n                <th scope=\"col\"></th>\n               <!-- <th scope=\"col\">Status</th>\n                <th scope=\"col\">Last?</th> -->\n                \n              </tr>\n            </thead>\n            <tbody *ngFor=\"let product of sheets\">\n          \n              <tr class=\"select\">\n                <th scope=\"row\">{{product.id_signature}}</th>\n                <td>{{product.first_name}}</td>\n                <td>{{product.last_name}}</td>\n                <td>{{product.email}}</td>\n                <td>{{product.id_employee}}</td>\n                <td>{{product.updated}}</td>\n                <td><button class=\"btn btn-success btn-sm\" (click)=\"onSelect(product)\" >select</button></td>\n                <td><button class=\"btn btn-primary btn-sm\" (click)=\"onselectUpload(product)\" >upload</button></td>\n              </tr>\n          \n            </tbody>\n          \n          </table>\n          <div class=\"d-flex justify-content-center\">\n              <button class=\"btn btn-link\" *ngIf=\"showpreview\" (click)=\"preview()\">Preview</button>\n              <button class=\"btn btn-link\" (click)=\"next()\" *ngIf=\"shownext\">Next</button>\n          </div>\n\n          <div class=\"d-flex justify-content-start\" *ngIf=\"meta\">\n              <p>Search Result Quantity: {{meta['count']}}, cursor {{meta['cursor']}} More?  {{meta['more']}}.</p>\n          </div>\n    </div>\n    <div><br>\n        <div class=\"form-group\">\n          <h4>Find PDF</h4>\n          <label for=\"text-input\">Please Enter the Signature pdf name, this is id of the sheet join with the employee id number</label>\n            <input disabled type=\"text\" id=\"text-input\" class=\"form-control\" [(ngModel)]=\"text\">\n        </div>\n    </div>\n\n    <button class=\"btn btn-info\" (click)=\"searchPdf()\">Look for original pdf.!</button>\n    <button class=\"btn btn-info\" (click)=\"searchScannedPdf()\">Look for scanned pdf.!</button>\n    <div class=\"container\" *ngIf=\"boolpdfroute\">\n      <p>In case download does not start please contact a IT Agent</p>\n\n    </div><br><br>\n    <div *ngIf=\"readyUpload\">\n        <h4>Upload Pdf File</h4>\n        <label for=\"pdf-input\">The File will be bound to the user selected</label>\n        <input disabled type=\"text\" id=\"pdf-input\" class=\"form-control\" [(ngModel)]=\"pdfFile\">\n        <input type=\"file\" (change)=\"onFileSelected($event)\" class=\"from-control\">\n        <button class=\"btn-primary btn-sm\" (click)=\"onUpload()\" >Upload</button>\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/pdf/pdfs/pdfs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_signature_sheet_search_employee_service__ = __webpack_require__("../../../../../src/app/create-signature-sheet/search-employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode__ = __webpack_require__("../../../../jwt-decode/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jwt_decode__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PdfsComponent = /** @class */ (function () {
    function PdfsComponent(_Service, httpClient, cookieService, router) {
        this._Service = _Service;
        this.httpClient = httpClient;
        this.cookieService = cookieService;
        this.router = router;
        this.boolpdfroute = false;
        this.selectedFile = null;
        //table params
        this.page = 1;
        this.limit = 10;
        this.searchText = "";
        this.readyUpload = false;
        //service response
        this.sheets = [];
        this.meta = [];
        this.shownext = false;
        this.showpreview = false;
        this.privilege = false;
    }
    PdfsComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*if(!this.cookieService.get('user_name')){
          this.router.navigateByUrl('/');
        }*/
        var val = this.cookieService.get("token");
        if (val) {
            var djtw = __WEBPACK_IMPORTED_MODULE_5_jwt_decode__(val);
            var identity = djtw['identity'];
            for (var _i = 0; _i < identity.length; _i++) {
                if (identity[_i]['privilege'] == 'pdf') {
                    this.privilege = true;
                }
            }
        }
        else {
            window.location.href = '/login';
        }
        if (this.privilege) {
            this._Service.searchSignatureSheets(this.page, this.searchText, this.limit)
                .subscribe(function (res) {
                var x = res['SignatureSheets'];
                var y = res['meta'];
                _this.sheets = x;
                _this.meta = y;
                _this.page = _this.page + 1;
                if (_this.meta['more']) {
                    _this.shownext = true;
                }
                else {
                    _this.shownext = false;
                }
                if (_this.meta['cursor'] == 11) {
                    _this.showpreview = false;
                }
                else {
                    _this.showpreview = true;
                }
                //this.currentproducts = this.selectproducts;
            });
        }
        else {
            window.location.href = '/login';
        }
    };
    PdfsComponent.prototype.test = function () {
        alert(this.search);
    };
    PdfsComponent.prototype.searchPdf = function () {
        this.boolpdfroute = true;
        this.url = "http://127.0.0.1:5000/pdf/" + this.text;
        window.location.href = this.url;
    };
    PdfsComponent.prototype.searchScannedPdf = function () {
        this.boolpdfroute = true;
        this.url = "http://127.0.0.1:5000/scannedpdf/" + this.text;
        window.location.href = this.url;
    };
    PdfsComponent.prototype.searchSheet = function (event) {
        this.search = event.target.value;
    };
    PdfsComponent.prototype.onSelect = function (selectedItem) {
        var x = {
            'ID_SIGNATURE': selectedItem.id_signature,
            'EMPLOYEE_ID': selectedItem.id_employee,
        };
        var pdfname = x['ID_SIGNATURE'] + x['EMPLOYEE_ID'];
        this.text = pdfname;
    };
    PdfsComponent.prototype.onselectUpload = function (selectedItem) {
        var x = {
            'ID_SIGNATURE': selectedItem.id_signature,
            'EMPLOYEE_ID': selectedItem.id_employee,
            'DATE': selectedItem.updated,
            'FIRST_NAME': selectedItem.first_name,
            'LAST_NAME': selectedItem.last_name
        };
        var pdfname = x['ID_SIGNATURE'] + x['EMPLOYEE_ID'];
        this.pdfFile = pdfname;
        this.readyUpload = true;
    };
    PdfsComponent.prototype.next = function () {
        var _this = this;
        if (this.search) {
            this.search = this.search;
        }
        else {
            this.search = "";
        }
        this._Service.searchSignatureSheets(this.page, this.search, this.limit)
            .subscribe(function (res) {
            var x = res['SignatureSheets'];
            var y = res['meta'];
            _this.sheets = x;
            _this.meta = y;
            _this.page = _this.page + 1;
            if (_this.meta['more']) {
                _this.shownext = true;
            }
            else {
                _this.shownext = false;
            }
            if (_this.meta['cursor'] == 11) {
                _this.showpreview = false;
            }
            else {
                _this.showpreview = true;
            }
            //this.currentproducts = this.selectproducts;
        });
    };
    PdfsComponent.prototype.preview = function () {
        this.page = this.page - 2;
        this.next();
    };
    PdfsComponent.prototype.find = function () {
        this.page = 1;
        this.next();
    };
    PdfsComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
    };
    PdfsComponent.prototype.onUpload = function () {
        var fd = new FormData();
        fd.append('pdf', this.selectedFile, this.selectedFile.name);
        this.httpClient.post("http://127.0.0.1:5000/upload/" + this.pdfFile, fd)
            .subscribe(function (result) {
            if (result['message'] == 'Done') {
                window.location.href = '/pdf';
            }
        });
    };
    PdfsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pdfs',
            template: __webpack_require__("../../../../../src/app/pdf/pdfs/pdfs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pdf/pdfs/pdfs.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__create_signature_sheet_search_employee_service__["a" /* SearchEmployeeService */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], PdfsComponent);
    return PdfsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/share-module/share-module.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareModuleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_signature_sheet_employee_table_employee_table_component__ = __webpack_require__("../../../../../src/app/create-signature-sheet/employee-table/employee-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_signature_sheet_product_list_product_list_component__ = __webpack_require__("../../../../../src/app/create-signature-sheet/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_signature_sheet_selected_products_selected_products_component__ = __webpack_require__("../../../../../src/app/create-signature-sheet/selected-products/selected-products.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ShareModuleModule = /** @class */ (function () {
    function ShareModuleModule() {
    }
    ShareModuleModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__create_signature_sheet_employee_table_employee_table_component__["a" /* EmployeeTableComponent */],
                __WEBPACK_IMPORTED_MODULE_4__create_signature_sheet_product_list_product_list_component__["a" /* ProductListComponent */],
                __WEBPACK_IMPORTED_MODULE_5__create_signature_sheet_selected_products_selected_products_component__["a" /* SelectedProductsComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__create_signature_sheet_employee_table_employee_table_component__["a" /* EmployeeTableComponent */],
                __WEBPACK_IMPORTED_MODULE_4__create_signature_sheet_product_list_product_list_component__["a" /* ProductListComponent */],
                __WEBPACK_IMPORTED_MODULE_5__create_signature_sheet_selected_products_selected_products_component__["a" /* SelectedProductsComponent */]
            ]
        })
    ], ShareModuleModule);
    return ShareModuleModule;
}());



/***/ }),

/***/ "../../../../../src/app/update-signature-sheet/update-signature-sheet.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateSignatureSheetModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__updatesheet_updatesheet_component__ = __webpack_require__("../../../../../src/app/update-signature-sheet/updatesheet/updatesheet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_module_share_module_module__ = __webpack_require__("../../../../../src/app/share-module/share-module.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_products_user_products_component__ = __webpack_require__("../../../../../src/app/update-signature-sheet/user-products/user-products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { CreateSignatureSheetModule } from '../create-signature-sheet/create-signature-sheet.module';
var UpdateSignatureSheetModule = /** @class */ (function () {
    function UpdateSignatureSheetModule() {
    }
    UpdateSignatureSheetModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__share_module_share_module_module__["a" /* ShareModuleModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot()
                //CreateSignatureSheetModule
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__updatesheet_updatesheet_component__["a" /* UpdatesheetComponent */],
                __WEBPACK_IMPORTED_MODULE_5__user_products_user_products_component__["a" /* UserProductsComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__updatesheet_updatesheet_component__["a" /* UpdatesheetComponent */],
                __WEBPACK_IMPORTED_MODULE_5__user_products_user_products_component__["a" /* UserProductsComponent */],
            ]
        })
    ], UpdateSignatureSheetModule);
    return UpdateSignatureSheetModule;
}());



/***/ }),

/***/ "../../../../../src/app/update-signature-sheet/updatesheet/updatesheet.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 { color: #7c795d; font-family: 'Trocchi', serif; font-size: 45px; font-weight: normal; line-height: 48px; margin: 0; }\r\n\r\np { color: #4c4a37; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh5 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh2 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh3 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh4 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/update-signature-sheet/updatesheet/updatesheet.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\" *ngIf=\"privilege\">\n    <div>\n        <h3>Update Signature Sheet</h3>\n        <p>\"Offboarding is understood here as a software-supported process in personnel and identity management, which ensures the safe deactivation and documentation of the access rights of employees who have been relieved, thus preventing data misuse and theft. As part of computer security, the process will also ensure that access privileges are revoked when a person leaves, and may also cover other issues such as the recovery of equipment, keys and credit cards to ensure that security integrity be maintained.\"</p>\n         <br>\n        <div class=\"form-group\"> \n            <button class=\"btn btn-info btn-sm\" (click)=\"start()\">Let's Get Started!</button>\n        </div>\n    </div>\n\n    <div class=\" col-6\" *ngIf=\"boolfirst\">\n        <h3>First-Step select a type and date</h3>\n        <div class=\"form-group\">\n            <select class=\"form-control\" [(ngModel)]=\"option\">\n            <!--        <option value=\"2\">Offboarding</option> -->\n                    <option value=\"4\">update</option>\n            </select>\n        </div>\n        <!-- <div class=\"form-group\">\n            <input type=\"Date\" class=\"form-control\" [(ngModel)]=\"date\">\n        </div> -->\n        <button class=\"btn btn-info d-flex justify-content-center btn-sm\" (click)=\"validate()\">Continue</button>\n    </div>\n    <ul class=\"list-group\" *ngFor=\"let item of selectemploye\">\n        <li class=\"list-group-item list-group-item-success \">{{item.FIRST_NAME}}  {{item.LAST_NAME}} - {{item.EMAIL}} - {{item.EMPLOYEE_ID}}</li>\n      \n      </ul>\n\n\n    <div *ngIf=\"boolemployee\">\n         <h3>Second-Step select the employee</h3>\n          <!-- <ul class=\"list-group\" *ngFor=\"let item of selectemploye\">{{item.FIRST_NAME}} - {{item.LAST_NAME}} - {{item.EMAIL}} </ul> -->\n  \n  \n  \n         <app-employee-table (employeevent)=\"selectemploye=$event\"></app-employee-table>\n         <div class=\"d-flex justify-content-center\">\n                  <button class=\"btn btn-info btn-sm\" (click)=\"backemployee()\">Go Back</button><h4>-</h4>\n                  <button class=\"btn btn-info btn-sm\" (click)=\"continueemployee(procesValidationtemplate)\">Continue</button>\n         </div>    \n    </div >\n       \n    <div *ngIf=\"currentproducts\">\n        <app-user-products [parentData]=\"selectemploye\" (productremovesevent)=\"productremovesevent=$event\" (currentproductrevent)=\"selectproducts=$event\"></app-user-products>\n         <div class=\"d-flex justify-content-center\">\n            <button class=\"btn btn-info btn-sm\" (click)=\"backemployee()\" >Go Back</button><h4>-</h4>\n            <button class=\"btn btn-info btn-sm\" (click)=\"continueprods()\">Add Product</button> \n        </div> \n    </div>\n\n    <div *ngIf=\"boolproducts\" >\n        <app-product-list (productsevent)=\"productsevent=$event\"></app-product-list>\n        <!--<button class=\"btn btn-info \" (click)=\"backproducts()\">Go Back</button> -->\n        <div class=\"d-flex justify-content-center\">\n                <button class=\"btn btn-info btn-sm\" (click)=\"backproducts()\">Go Back</button>\n        </div>  \n    </div>\n\n    \n    <br><br><br><br>\n    \n    <div *ngIf=\"boolproducts\" class=\"d-flex justify-content-center\">\n            <!-- <button class=\"btn btn-link btn-lg\" (click)=\"createSignatureSheet()\"></button> -->\n            <button class=\"btn btn-primary btn-lg\" (click)=\"openModal(template)\">Save & Update Signatire Sheet</button><br>\n        </div><br>\n    <div *ngIf=\"confirmation\" class=\"alert alert-warning\" role=\"alert\">\n            <h4 class=\"alert-heading\">Are you sure of update this Signature Sheet?</h4>\n            <p>The information will be save and automatically download a pdf file of the sheet, press 'YES', to continue or 'No', to go back.</p>\n            <div class=\"d-flex justify-content-start\">\n                <button class=\"btn btn-info btn-sm \" (click)=\"updateSheet()\" >YES</button><p>-</p>\n                <button class=\"btn btn-info btn-sm \" (click)=\"abort()\"> NO</button>\n            </div>\n            <hr>\n            <p class=\"mb-0\">-LAUREATE IT-</p>\n        </div>\n  <!--  <button class=\"btn\" (click)=\"testAlert()\">Testbutton</button>  -->\n\n</div>\n\n<ng-template #template>\n    <div class=\"modal-body text-center alert alert-warning\">\n        <p>Are you sure of save this Signature Sheet??</p>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateSheet()\" >Yes</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"abort()\" >No</button>\n        <div class=\"modal-body alert alert-warning\" role=\"alert\">\n                    The information will be update and automatically create a pdf file of the sheet, press 'YES', to continue or 'No', to go back.\n        </div>\n    </div>\n    \n       \n</ng-template>\n\n<ng-template #procesValidationtemplate>\n        <div class=\"modal-body text-center alert alert-info\">\n            <p>It is not possible to Create this sheet.!</p>\n            <button class=\"btn btn-danger\" (click)=\"ok()\">Ok</button><br>\n            <div class=\"modal-body alert alert-warning\" role=\"alert\">\n                    Verify that the user has an onboarding sheet, or does not have an offboarding sheet\n            </div>\n        </div>\n        \n           \n    </ng-template>"

/***/ }),

/***/ "../../../../../src/app/update-signature-sheet/updatesheet/updatesheet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatesheetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_signature_sheet_search_employee_service__ = __webpack_require__("../../../../../src/app/create-signature-sheet/search-employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode__ = __webpack_require__("../../../../jwt-decode/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jwt_decode__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UpdatesheetComponent = /** @class */ (function () {
    function UpdatesheetComponent(_searchEmployees, modalService, cookieService, router) {
        this._searchEmployees = _searchEmployees;
        this.modalService = modalService;
        this.cookieService = cookieService;
        this.router = router;
        this.boolemployee = false;
        this.boolproducts = false;
        this.boolready = false;
        this.boolfirst = false;
        //data a enviar
        this.selectemploye = [];
        this.productsevent = [];
        this.confirmation = false;
        //updating
        this.userprod = "BVB";
        this.currentproducts = false;
        this.selectproducts = [];
        this.productremovesevent = [];
        this.privilege = false;
        this.validation = 0;
    }
    UpdatesheetComponent.prototype.ngOnInit = function () {
        /*if(!this.cookieService.get('user_name')){
          this.router.navigateByUrl('/');
        }*/
        var val = this.cookieService.get("token");
        if (val) {
            var djtw = __WEBPACK_IMPORTED_MODULE_5_jwt_decode__(val);
            var identity = djtw['identity'];
            for (var _i = 0; _i < identity.length; _i++) {
                if (identity[_i]['privilege'] == 'update_sheet') {
                    this.privilege = true;
                }
            }
            if (this.privilege) {
            }
            else {
                window.location.href = '/login';
            }
        }
        else {
            window.location.href = '/login';
        }
    };
    UpdatesheetComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    UpdatesheetComponent.prototype.start = function () {
        this.boolfirst = true;
        this.boolemployee = false;
        this.boolready = false;
        this.boolproducts = false;
    };
    UpdatesheetComponent.prototype.validate = function () {
        //if user select on boarding no product table needed
        if (this.option) {
            this.boolemployee = true;
            this.boolfirst = false;
        }
        else {
            alert('Select Type and Date first!');
        }
    };
    UpdatesheetComponent.prototype.continueemployee = function (template) {
        var _this = this;
        //faltan los ifs;
        var x = this.selectemploye[0];
        if (x) {
            //this.boolproducts = true;
            //console.log(this.selectemploye);
            var m_1;
            this._searchEmployees.processValidation(x.EMPLOYEE_ID)
                .subscribe(function (res) {
                m_1 = res['message'];
                console.log(res);
                if (_this.option == 4 && m_1 == 'null') {
                    _this.validation = 0;
                    _this.modalRef = _this.modalService.show(template);
                }
                if ((_this.option == 4) && (m_1['id_type'] == 2)) {
                    _this.validation = 0;
                    _this.modalRef = _this.modalService.show(template);
                }
                if (_this.option == 4 && m_1['id_type'] != 2 && m_1 != 'null') {
                    _this.validation = 1;
                    _this.currentproducts = true;
                    //request de productos en la hoja utilizando el select employee
                    _this.boolemployee = false;
                }
                /*if(m['id_type'] == '4'){
                  alert('aqui');
                  this.validation = 1
                }*/
                //console.log(m['id_type']);
                //console.log(this.validation);
                //console.log(this.option);
            });
        }
        else {
            alert('select employee first');
        }
    };
    UpdatesheetComponent.prototype.ok = function () {
        window.location.href = '/updatesheet';
    };
    UpdatesheetComponent.prototype.continueprods = function () {
        this.currentproducts = false;
        this.boolproducts = true;
        this.boolemployee = false;
    };
    UpdatesheetComponent.prototype.backemployee = function () {
        this.boolemployee = false;
        this.boolfirst = true;
        this.currentproducts = false;
    };
    UpdatesheetComponent.prototype.backproducts = function () {
        this.boolproducts = false;
        this.boolemployee = true;
        this.boolfirst = false;
    };
    UpdatesheetComponent.prototype.testAlert = function () {
        console.log(".....Products to remove.....");
        console.log(this.productremovesevent);
        console.log(".....Products to add.....");
        console.log(this.productsevent);
        console.log("....pending currentproducts.....");
        console.log(this.selectproducts);
        console.log(".....user info.....");
        console.log(this.selectemploye);
        console.log(this.selectemploye[0]['EMPLOYEE_ID']);
    };
    UpdatesheetComponent.prototype.confirm = function () {
        this.confirmation = true;
    };
    UpdatesheetComponent.prototype.abort = function () {
        window.location.href = '/updatesheet';
    };
    UpdatesheetComponent.prototype.updateSheet = function () {
        var _this = this;
        var l = this.selectproducts.length;
        var x = this.selectemploye[0];
        if (l != 0 && (this.productremovesevent.length != 0 || this.productsevent.length != 0) && x) {
            this._searchEmployees.updateSheet(this.option, x.EMPLOYEE_ID, x.FIRST_NAME, x.LAST_NAME, x.EMAIL)
                .subscribe(function (result) {
                //alert("Preparing to update..");
                console.log(result);
                if (result['message'] == "Signature Sheet correctly inserted") {
                    _this._searchEmployees.updateSignatureSheet(_this.productremovesevent, _this.productsevent, _this.selectproducts, _this.selectemploye, _this.option, _this.selectemploye[0]['EMPLOYEE_ID'])
                        .subscribe(function (result) {
                        console.log(result);
                        alert("updated");
                        window.location.href = '/dashboard';
                    });
                }
            });
        }
        else {
            alert("make sure to select employee and products correctly");
        }
    };
    UpdatesheetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-updatesheet',
            template: __webpack_require__("../../../../../src/app/update-signature-sheet/updatesheet/updatesheet.component.html"),
            styles: [__webpack_require__("../../../../../src/app/update-signature-sheet/updatesheet/updatesheet.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__create_signature_sheet_search_employee_service__["a" /* SearchEmployeeService */], __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], UpdatesheetComponent);
    return UpdatesheetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/update-signature-sheet/user-products/user-products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 { color: #7c795d; font-family: 'Trocchi', serif; font-size: 45px; font-weight: normal; line-height: 48px; margin: 0; }\r\n\r\np { color: #4c4a37; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh5 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh2 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh3 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh4 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/update-signature-sheet/user-products/user-products.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n    <h3>Current products</h3>\n\n    <div class=\"\">\n          <table class=\"table\">\n              <thead class=\"thead-dark\">\n                <tr class=\"\">\n                    <th scope=\"col\">Sheet Id</th>\n                  <th scope=\"col\">CI Name</th>\n                  <!-- <th scope=\"col\">CI Type</th> -->\n                  <th scope=\"col\">Tag</th>\n                  <th scope=\"col\">Serial N°</th>\n                  <th scope=\"col\">Model</th>\n                  <th scope=\"col\">CIID</th>\n                  <th scope=\"col\">Remove?</th>\n                  \n                </tr>\n              </thead>\n              <tbody *ngFor=\"let product of currentproducts\">\n            \n                <tr class=\"select\">\n                  <th scope=\"row\">{{product.id_signature}}</th>\n                  <td>{{product.product_name}}</td>\n                 <!-- <td>{{product.CI_TYPE}}</td> -->\n                  <td>{{product.id_product}}</td>\n                  <td>{{product.serial_number}}</td>\n                  <td>{{product.model}}</td>\n                  <td>{{product.ciid}}</td>\n                  <td><button class=\"btn btn-danger btn-sm\" (click)=\"onRemove(product)\" >Rmv</button></td>\n                </tr>\n            \n              </tbody>\n            \n            </table>\n      </div>\n      \n      <div class=\"container\">\n          <h5>Items to remove</h5>\n          <div class=\"container\">\n            <ul class=\"list-group\" *ngFor=\"let product of selectproducts\">\n                <li class=\"list-group-item list-group-item-danger \">Name: {{product.product_name}} - Code: {{product.id_product}} - Serial Number: {{product.serial_number}} - CIID: {{product.ciid}}</li>\n            \n              </ul>\n              \n        </div>\n        <br>\n        <div class=\"container d-flex justify-content-end\">\n            <button type=\"button\" class=\"btn btn-sm btn-outline-primary\" (click)=\"rollback()\"> <- Rollback</button> -\n            <button type=\"button\" class=\"btn btn-sm btn-outline-success\" (click)=\"noChanges()\"> Remove Nothing</button>\n        </div>\n        <br>\n      </div> \n      \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/update-signature-sheet/user-products/user-products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_signature_sheet_search_employee_service__ = __webpack_require__("../../../../../src/app/create-signature-sheet/search-employee.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserProductsComponent = /** @class */ (function () {
    function UserProductsComponent(_searchEmployees) {
        this._searchEmployees = _searchEmployees;
        this.allProducts = [];
        this.selectedProducts = [];
        this.bool = false;
        this.productremovesevent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.currentproductrevent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.currentproducts = [];
        this.selectproducts = [];
    }
    UserProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selecteduser = this.parentData[0];
        //console.log(this.selecteduser['EMPLOYEE_ID']);
        //alert(this._searchEmployees.getTest());
        this._searchEmployees.getUserProducts(this.selecteduser['EMPLOYEE_ID'])
            .subscribe(function (res) {
            var x = res['SignatureSheetsProducts'];
            _this.currentproducts = x;
            console.log(_this.currentproducts);
            console.log(x);
            //this.currentproducts = this.selectproducts;
        });
    };
    UserProductsComponent.prototype.onRemove = function (selectedItem) {
        var x = selectedItem;
        var index = 0;
        for (var _i = 0, _a = this.selectproducts; _i < _a.length; _i++) {
            var i = _a[_i];
            if (x.ciid == i.ciid) {
                index = 1;
            }
        }
        if (index == 0) {
            this.selectproducts.push(x);
            this.bool = true;
            this.productremovesevent.emit(this.selectproducts);
            this.currentproductrevent.emit(this.currentproducts);
        }
        else {
            console.log("Item already exist");
        }
    };
    UserProductsComponent.prototype.rollback = function () {
        this.selectproducts.splice(0);
        //this.bool = false;  
    };
    UserProductsComponent.prototype.noChanges = function () {
        this.currentproductrevent.emit(this.currentproducts);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], UserProductsComponent.prototype, "parentData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], UserProductsComponent.prototype, "productremovesevent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], UserProductsComponent.prototype, "currentproductrevent", void 0);
    UserProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-products',
            template: __webpack_require__("../../../../../src/app/update-signature-sheet/user-products/user-products.component.html"),
            styles: [__webpack_require__("../../../../../src/app/update-signature-sheet/user-products/user-products.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__create_signature_sheet_search_employee_service__["a" /* SearchEmployeeService */]])
    ], UserProductsComponent);
    return UserProductsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-admin/user-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\" *ngIf=\"privilege\">\n\n  <div>\n    <h3>Roles-Privileges Admin</h3>\n    <p>\"Users, roles and permissions are key components of website security, and they're of major importance in Drupal as well. Users are the people, roles are their functions, and permissions define what authorizations those functions have. Setting these up incorrectly can compromise your website's security.\"</p>\n     <br>\n    <div class=\"form-group\"> \n        <button class=\"btn btn-info btn-sm\" (click)=\"start()\">Assign Role to User</button>\n        <button class=\"btn btn-info btn-sm\" (click)=\"createRole()\">Create Role!</button>\n\n    </div>\n  </div>\n\n  <ul class=\"list-group\" *ngFor=\"let item of selectemploye\">\n    <li class=\"list-group-item list-group-item-success \">{{item.FIRST_NAME}}  {{item.LAST_NAME}} - {{item.EMAIL}}</li>\n  \n  </ul>\n\n  <div *ngIf=\"boolemployee\">\n    <h3>Select the employee</h3>\n    <app-employee-table (employeevent)=\"selectemploye=$event\"></app-employee-table>\n    <div class=\"d-flex justify-content-center\">\n            <button class=\"btn btn-info btn-sm\" (click)=\"backemployee()\">Go Back</button><h4>-</h4>\n            <button class=\"btn btn-info btn-sm\" (click)=\"continueroles()\">Continue</button>\n    </div>\n\n    \n  </div>\n  <br>\n\n  <div *ngIf=\"boolassign\">\n    <h3 *ngFor=\"let item of selectemploye\"> Select a role for {{item.FIRST_NAME}}  {{item.LAST_NAME}}</h3>\n    <div >\n      <select  class=\"form-control\" [(ngModel)]=\"option\">\n        <option></option>\n        <option *ngFor=\"let item of roles\" [value]=\"item.id_role\" >{{item.id_role}} - {{item.role_name}}</option>\n  \n      </select>\n\n    </div>\n    <br><br>\n    <div class=\"d-flex justify-content-center\">\n        <button class=\"btn btn-primary btn-lg\" (click)=\"openModal(template)\">Assign Role</button>\n    </div>\n  </div>\n\n\n\n  <div class=\"\" *ngIf=\"boolroles\">\n      <h3>New Role name</h3>\n    <div class=\"d-flex justify-content-center\">\n        <div class=\"col-sm-12\">\n            <input type=\"text\" class=\"form-control\" maxlength=\"25\" [(ngModel)]=\"newRoleName\">\n\n        </div>\n\n    </div><br>\n\n    <div class=\"\">\n        <h3>Drag & Drop Privileges</h3>\n\n       <div class=\"row\">\n        <div class=\"d-flex justify-content-conter\">\n\n                <div class=\"col-sm-12\">\n                    <div class=\"card card-outline-success mb-3\">\n                        <div class=\"card-header card-inverse card-success\">\n                            Privileges\n                            </div>\n                        <div class=\"card-block scroll-list\">\n                            <div class=\"list-group\">\n                                <li class=\"list-group-item list-group-item-action list-group-item-success\" [draggable] *ngFor=\"let item of vegetables\"\n                                    [dragClass]=\"'active'\" [dragData]=\"item\" [dragScope]=\"item.type\" [dragEnabled]=\"dragEnabled\">\n                                    {{item.name}}\n                                </li>\n                            </div>\n                        </div>\n            \n                    </div>\n            \n                </div>\n            \n                <div class=\"col-sm-12\">\n                    <div class=\"card card-outline-primary mb-3\" droppable [dragOverClass]=\"'drag-target-border'\" [dropScope]=\"['fruit', 'vegetable']\"\n                        [dragHintClass]=\"'drag-hint'\" (onDrop)=\"onAnyDrop($event)\">\n                        <div class=\"card-header card-inverse card-primary\">Selected Privileges</div>\n                        <div class=\"card-block scroll-list\">\n                            <li *ngFor=\"let item of droppedItems\" class=\"list-group-item\">{{item.name}}</li>\n                        </div>\n                    </div>\n                </div>\n            \n             <!-- kkkik!-->\n        </div>    \n\n        \n    </div>\n    <br>\n    <div class=\"d-flex justify-content-center\">\n            <button class=\"btn btn-primary btn-lg\" (click)=\"openRoleModal(templateRole)\">Create Role</button> \n    </div>\n  </div>\n\n  <button class=\"btn btn-danger\" (click)=\"test()\">Test</button>\n\n\n</div>\n\n<ng-template #template>\n    <div class=\"modal-body text-center alert \">\n        <p>Are you sure to assign this role to this person?</p>\n\n        <div class=\"modal-body alert alert-warning\" role=\"alert\">\n            The following permits will be assigned press 'YES', to continue or 'No', to go back.\n        </div>\n        <div >\n            <ul class=\"list-group\" *ngFor=\"let item of privilegesxrol\">\n                <li class=\"list-group-item list-group-item-primary \">{{item.privilege}} </li>\n                  \n            </ul>\n        </div><br>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\" >Yes</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"abort()\" >No</button>\n    </div>\n\n   \n</ng-template>\n\n<ng-template #templateRole>\n    <div class=\"modal-body text-center alert alert-info \">\n        <p>Are you sure of creating this new role?</p>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirmRolePrivileges()\" >Yes</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"abort()\" >No</button>\n    </div>\n\n   \n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/user-admin/user-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__management_service__ = __webpack_require__("../../../../../src/app/management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jwt_decode__ = __webpack_require__("../../../../jwt-decode/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jwt_decode__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserAdminComponent = /** @class */ (function () {
    function UserAdminComponent(managment, modalService, cookieService) {
        var _this = this;
        this.managment = managment;
        this.modalService = modalService;
        this.cookieService = cookieService;
        this.boolproducts = false;
        this.boolready = false;
        this.boolfirst = false;
        this.boolemployee = false;
        this.selectemploye = [];
        this.boolroles = false;
        this.boolassign = false;
        this.roles = [];
        this.privilegesxrol = [];
        this.val = 500;
        this.privilege = false;
        this.vegetables = [
            { name: 'Dashboard', type: 'vegetable' },
            { name: 'Create Signature Sheet', type: 'vegetable' },
            { name: 'PDF', type: 'vegetable' },
            { name: 'Update Signature Sheet', type: 'vegetable' },
            { name: 'Offboarding-loan admin', type: 'vegetable' },
            { name: 'Reports', type: 'vegetable' },
            { name: 'User Management', type: 'vegetable' },
        ];
        this.droppedFruits = [];
        this.droppedVegetables = [];
        this.droppedItems = [];
        this.fruitDropEnabled = true;
        this.dragEnabled = true;
        this.isDropAllowed = function (dragData) {
            return dragData > _this.val;
        };
    }
    UserAdminComponent.prototype.ngOnInit = function () {
        var val = this.cookieService.get("token");
        if (val) {
            var djtw = __WEBPACK_IMPORTED_MODULE_4_jwt_decode__(val);
            var identity = djtw['identity'];
            for (var _i = 0; _i < identity.length; _i++) {
                if (identity[_i]['privilege'] == 'user_management') {
                    this.privilege = true;
                }
            }
            if (this.privilege) {
            }
            else {
                window.location.href = '/login';
            }
        }
        else {
            window.location.href = '/login';
        }
    };
    UserAdminComponent.prototype.start = function () {
        this.boolfirst = false;
        this.boolemployee = true;
        this.boolready = false;
        this.boolproducts = false;
        this.boolroles = false;
    };
    UserAdminComponent.prototype.continueroles = function () {
        var _this = this;
        var x = this.selectemploye[0];
        if (x) {
            this.managment.getRoles()
                .subscribe(function (res) {
                _this.roles = res['Roles'];
            });
            this.boolemployee = false;
            this.boolassign = true;
        }
        else {
            alert('Select employee first');
        }
    };
    UserAdminComponent.prototype.test = function () {
        console.log(this.newRoleName);
    };
    UserAdminComponent.prototype.openModal = function (template) {
        var _this = this;
        //let x = this.selectemploye[0];
        if (this.option != "" && this.option) {
            this.managment.getPrivilegesbyRoles(this.option).subscribe(function (res) {
                console.log(res);
                _this.privilegesxrol = res['p'];
                _this.modalRef = _this.modalService.show(template);
            });
        }
        else {
            alert("Select a Role first");
            //this.confirmation = true;
            //alert("The employee does not have Employee Id, please make sure to get all the info ready before proceding");
        }
    };
    UserAdminComponent.prototype.abort = function () {
        window.location.href = '/admin';
    };
    UserAdminComponent.prototype.confirm = function () {
        var x = this.selectemploye[0];
        this.managment.postUseradmin(x.EMAIL, this.option).subscribe(function (res) {
            if (res['message'] == 'Item correctly inserted') {
                alert('User Correctly inserted');
                window.location.href = '/admin';
            }
            else {
                alert('Wrong User');
                window.location.href = '/admin';
            }
        });
    };
    UserAdminComponent.prototype.createRole = function () {
        this.boolemployee = false;
        this.boolroles = true;
    };
    /*updateCheck(e){
      if(e.target.checked){
        this.checkedUpdate = true
      }
      else{
        this.checkedUpdate = false;
      }
    }*/
    UserAdminComponent.prototype.openRoleModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    UserAdminComponent.prototype.onFruitDrop = function (e) {
        this.droppedFruits.push(e.dragData);
        this.removeItem(e.dragData, this.fruits);
    };
    UserAdminComponent.prototype.onVegetableDrop = function (e) {
        this.droppedVegetables.push(e.dragData);
        this.removeItem(e.dragData, this.vegetables);
    };
    UserAdminComponent.prototype.onAnyDrop = function (e) {
        this.droppedItems.push(e.dragData);
        if (e.dragData.type === 'vegetable') {
            this.removeItem(e.dragData, this.vegetables);
        }
        else {
            this.removeItem(e.dragData, this.fruits);
        }
    };
    UserAdminComponent.prototype.removeItem = function (item, list) {
        var index = list.map(function (e) {
            return e.name;
        }).indexOf(item.name);
        list.splice(index, 1);
    };
    UserAdminComponent.prototype.confirmRolePrivileges = function () {
        if (this.newRoleName) {
            this.managment.postNewRolePrivileges(this.newRoleName, this.droppedItems)
                .subscribe(function (res) {
                if (res['message'] == 'Items correctly inserted') {
                    alert('Items correctly inserted');
                    window.location.href = '/admin';
                }
                else {
                    console.log(res);
                }
            });
        }
        else {
            alert('Set a Role name first.!');
        }
    };
    UserAdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-admin',
            template: __webpack_require__("../../../../../src/app/user-admin/user-admin.component.html"),
            styles: ["\n  div.scroll-list {\n    overflow: auto;\n    max-height: 70vh;\n  }\n\n  .drag-over {\n    border: #ff525b dashed 2px;\n  }\n\n  .drag-hint {\n    border: #ffc100 dashed 2px;\n  }\n\n  .drag-target-border {\n    border: #00bfff dashed 2px;\n  }\n\n  .drag-target-border-green {\n    border: #3c763d dashed 2px;\n  }\n"
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__management_service__["a" /* ManagementService */], __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]])
    ], UserAdminComponent);
    return UserAdminComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map