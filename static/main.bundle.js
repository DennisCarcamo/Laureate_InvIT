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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_tables_dashboard_tables_component__ = __webpack_require__("../../../../../src/app/dashboard-tables/dashboard-tables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lifetime_chart_lifetime_chart_component__ = __webpack_require__("../../../../../src/app/lifetime-chart/lifetime-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pdf_loan_assets_loan_assets_component__ = __webpack_require__("../../../../../src/app/pdf/loan-assets/loan-assets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__license_license_list_license_list_component__ = __webpack_require__("../../../../../src/app/license/license-list/license-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__license_license_relationship_license_relationship_component__ = __webpack_require__("../../../../../src/app/license/license-relationship/license-relationship.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__license_reporte_reporte_component__ = __webpack_require__("../../../../../src/app/license/reporte/reporte.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__bitly_login_bitly_login_component__ = __webpack_require__("../../../../../src/app/bitly-login/bitly-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__main_bitly_main_bitly_component__ = __webpack_require__("../../../../../src/app/main-bitly/main-bitly.component.ts");
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
    {
        path: 'tables',
        component: __WEBPACK_IMPORTED_MODULE_9__dashboard_tables_dashboard_tables_component__["a" /* DashboardTablesComponent */]
    },
    {
        path: 'lifetime',
        component: __WEBPACK_IMPORTED_MODULE_10__lifetime_chart_lifetime_chart_component__["a" /* LifetimeChartComponent */]
    },
    {
        path: 'loansheets',
        component: __WEBPACK_IMPORTED_MODULE_11__pdf_loan_assets_loan_assets_component__["a" /* LoanAssetsComponent */]
    },
    {
        path: 'license-list',
        component: __WEBPACK_IMPORTED_MODULE_12__license_license_list_license_list_component__["a" /* LicenseListComponent */]
    },
    {
        path: 'license-workstations/:licenseId',
        component: __WEBPACK_IMPORTED_MODULE_13__license_license_relationship_license_relationship_component__["a" /* LicenseRelationshipComponent */]
    },
    {
        path: 'report',
        component: __WEBPACK_IMPORTED_MODULE_14__license_reporte_reporte_component__["a" /* ReporteComponent */]
    },
    {
        path: 'blogin',
        component: __WEBPACK_IMPORTED_MODULE_15__bitly_login_bitly_login_component__["a" /* BitlyLoginComponent */]
    },
    {
        path: 'mainbitly',
        component: __WEBPACK_IMPORTED_MODULE_16__main_bitly_main_bitly_component__["a" /* MainBitlyComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
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
exports.push([module.i, "/*h1 { color: #7c795d; font-family: 'Trocchi', serif; font-size: 45px; font-weight: normal; line-height: 48px; margin: 0; }\r\n\r\np { color: #4c4a37; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh5 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh2 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh3 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh4 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\n/* color a select file \r\n.file-select:hover{\r\n    color: #DF013A;\r\n} */\r\n\r\n.EdgeButton:hover{\r\n    background-color: #E0F8FF;\r\n}\r\n\r\n.EdgeButton--secondary-file:hover{\r\n    background-color: #afe0ff;\r\n}\r\n\r\n.EdgeButton--secondaryii:hover{\r\n    background-color: #E0F8FF;\r\n    color: #1da1f2;\r\n}\r\n\r\n.EdgeButton--secondaryiii:hover{\r\n    background-color: #DBFCE8;\r\n    color: #69C68E;\r\n}\r\n\r\n/*input {\r\n    -moz-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    margin-top: 12px;\r\n    width: 100%;\r\n} */\r\n\r\n.EdgeButton--secondary {\r\n    background-color: #fff;\r\n    border: 1px solid #1da1f2;\r\n    color: #1da1f2;\r\n}\r\n\r\n.EdgeButton--secondaryii {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n \r\n}\r\n\r\n.EdgeButton--secondaryiii {\r\n    background-color: #69C68E;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n \r\n}\r\n\r\n.EdgeButton--secondary-file {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n}\r\n\r\n.EdgeButton--medium {\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n}\r\n\r\n/*.EdgeButton, .EdgeButton:visited {\r\n    border-radius: 100px;\r\n    box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}*/\r\n\r\n.EdgeButton {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    line-height: 25px;\r\n    padding: 8px 18px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n.EdgeButton--secondaryii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n.EdgeButton--secondaryiii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\ntextarea, div[contenteditable], .t1-select {\r\n    display: inline-block;\r\n    width: 210px;\r\n    padding: 4px;\r\n    margin: 0;\r\n    outline: 0;\r\n    background-color: #fff;\r\n    border: 1px solid #e6ecf0;\r\n    border-radius: 3px;\r\n}\r\n\r\nh1 {\r\n    display: block;\r\n    font-size: 2em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh2 {\r\n    display: block;\r\n    font-size: 1.9em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh3 {\r\n    display: block;\r\n    font-size: 1.8em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh4 {\r\n    display: block;\r\n    font-size: 1.7em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh5 {\r\n    display: block;\r\n    font-size: 1.5em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nbody.ms-windows {\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n.table-head {\r\n    background-color: #343a40;\r\n    border-color: #343a40;\r\n    color: #fff;\r\n}\r\n\r\np, label, option{\r\n    font-size: 1em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n  }\r\n\r\noption, select{\r\n    font-size: 0.9em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n}\r\n", ""]);

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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__license_license_module__ = __webpack_require__("../../../../../src/app/license/license.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__share_module_share_module_module__ = __webpack_require__("../../../../../src/app/share-module/share-module.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pdf_pdf_module_pdf_module_module__ = __webpack_require__("../../../../../src/app/pdf/pdf-module/pdf-module.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__loan_admin_loan_admin_module__ = __webpack_require__("../../../../../src/app/loan-admin/loan-admin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__user_admin_user_admin_component__ = __webpack_require__("../../../../../src/app/user-admin/user-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__management_service__ = __webpack_require__("../../../../../src/app/management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ng_drag_drop__ = __webpack_require__("../../../../ng-drag-drop/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ng_drag_drop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_ng_drag_drop__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__dashboard_tables_dashboard_tables_component__ = __webpack_require__("../../../../../src/app/dashboard-tables/dashboard-tables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__lifetime_chart_lifetime_chart_component__ = __webpack_require__("../../../../../src/app/lifetime-chart/lifetime-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__lifetime_table_lifetime_table_component__ = __webpack_require__("../../../../../src/app/lifetime-table/lifetime-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pdf_loan_assets_loan_assets_component__ = __webpack_require__("../../../../../src/app/pdf/loan-assets/loan-assets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__bitly_login_bitly_login_component__ = __webpack_require__("../../../../../src/app/bitly-login/bitly-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__main_bitly_main_bitly_component__ = __webpack_require__("../../../../../src/app/main-bitly/main-bitly.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angular_progress_bar__ = __webpack_require__("../../../../angular-progress-bar/fesm5/angular-progress-bar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
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
                __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_17__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_21__user_admin_user_admin_component__["a" /* UserAdminComponent */],
                __WEBPACK_IMPORTED_MODULE_24__dashboard_tables_dashboard_tables_component__["a" /* DashboardTablesComponent */],
                __WEBPACK_IMPORTED_MODULE_25__lifetime_chart_lifetime_chart_component__["a" /* LifetimeChartComponent */],
                __WEBPACK_IMPORTED_MODULE_26__lifetime_table_lifetime_table_component__["a" /* LifetimeTableComponent */],
                __WEBPACK_IMPORTED_MODULE_27__pdf_loan_assets_loan_assets_component__["a" /* LoanAssetsComponent */],
                __WEBPACK_IMPORTED_MODULE_28__bitly_login_bitly_login_component__["a" /* BitlyLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_29__main_bitly_main_bitly_component__["a" /* MainBitlyComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__create_signature_sheet_create_signature_sheet_module__["a" /* CreateSignatureSheetModule */],
                __WEBPACK_IMPORTED_MODULE_11__license_license_module__["a" /* LicenseModule */],
                __WEBPACK_IMPORTED_MODULE_10__update_signature_sheet_update_signature_sheet_module__["a" /* UpdateSignatureSheetModule */],
                __WEBPACK_IMPORTED_MODULE_12__share_module_share_module_module__["a" /* ShareModuleModule */],
                __WEBPACK_IMPORTED_MODULE_13__pdf_pdf_module_pdf_module_module__["a" /* PdfModuleModule */],
                __WEBPACK_IMPORTED_MODULE_16__loan_admin_loan_admin_module__["a" /* LoanAdminModule */],
                __WEBPACK_IMPORTED_MODULE_23_ng_drag_drop__["NgDragDropModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_30_angular_progress_bar__["a" /* ProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_31__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__create_signature_sheet_search_employee_service__["a" /* SearchEmployeeService */], __WEBPACK_IMPORTED_MODULE_15__dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_18__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_19__auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_20_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_22__management_service__["a" /* ManagementService */]],
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

/***/ "../../../../../src/app/bitly-login/bitly-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bitly-login/bitly-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-sm\"></div>\n      <div class=\"col-sm\">\n          <form>\n              <br />\n              <br />\n              <div class=\"form-group\">\n                  <label for=\"exampleInputEmail1\">User ID</label>\n                  <input #userIdValue type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter User ID\" />\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"examplepassword\">Password</label>\n                  <input #passwordValue type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" />\n              </div>\n              <!-- <div class=\"form-group\">\n                  <label for=\"exampleApikey\">API_KEY</label>\n                  <input #apiValue type=\"password\" class=\"form-control\" id=\"exampleApikey\" placeholder=\"API_KEY\" />\n              </div> -->\n              <div class=\"form-group form-check\">\n                </div>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"loadData(userIdValue.value, passwordValue.value)\">Call the service </button>\n    </form>\n  </div>\n  <div class=\"col-sm\"></div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/bitly-login/bitly-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BitlyLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode__ = __webpack_require__("../../../../jwt-decode/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jwt_decode__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BitlyLoginComponent = /** @class */ (function () {
    function BitlyLoginComponent(_bitlyApiService, cookieService) {
        this._bitlyApiService = _bitlyApiService;
        this.cookieService = cookieService;
        this.Domain = 'laur.cc';
        this.privilege = false;
    }
    BitlyLoginComponent.prototype.ngOnInit = function () {
        /*if(!this.cookieService.get('user_name')){
      this.router.navigateByUrl('/');
    }*/
        var val = this.cookieService.get("token");
        if (val) {
            var djtw = __WEBPACK_IMPORTED_MODULE_3_jwt_decode__(val);
            var identity = djtw['identity'];
            for (var _i = 0; _i < identity.length; _i++) {
                if (identity[_i]['privilege'] == 'pdf') {
                    this.privilege = true;
                }
            }
        }
        else {
            //this.privilege = true;
            window.location.href = '/login';
        }
    };
    BitlyLoginComponent.prototype.CallBitlyServiceGetAccessToken = function () {
        var _this = this;
        this._bitlyApiService.GetAccessToken(this.clientId, this.clientSecret).subscribe(function (result) {
            if (result != '{"status_code": 401, "data": null, "status_txt": "INVALID_LOGIN"}') {
                _this.cookieService.set('btoken', result);
                window.location.href = '/mainbitly';
            }
            else {
                alert('Invalid credentials');
            }
        });
    };
    BitlyLoginComponent.prototype.loadData = function (userIdValue, passwordValue) {
        this.clientId = userIdValue;
        this.clientSecret = passwordValue;
        this.CallBitlyServiceGetAccessToken();
    };
    BitlyLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bitly-login',
            template: __webpack_require__("../../../../../src/app/bitly-login/bitly-login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bitly-login/bitly-login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]])
    ], BitlyLoginComponent);
    return BitlyLoginComponent;
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
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
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
exports.push([module.i, "/*h1 { color: #7c795d; font-family: 'Trocchi', serif; font-size: 45px; font-weight: normal; line-height: 48px; margin: 0; }\r\n\r\np { color: #4c4a37; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh5 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh2 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh3 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh4 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }*/\r\n\r\n.EdgeButton:hover{\r\n    background-color: #E0F8FF;\r\n}\r\n\r\n.EdgeButton--secondary-file:hover{\r\n    background-color: #afe0ff;\r\n}\r\n\r\n.EdgeButton--secondaryii:hover{\r\n    background-color: #E0F8FF;\r\n    color: #1da1f2;\r\n}\r\n\r\n.EdgeButton--secondaryiii:hover{\r\n    background-color: #DBFCE8;\r\n    /*color: #69C68E;*/\r\n}\r\n\r\n/*input {\r\n    -moz-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    margin-top: 12px;\r\n    width: 100%;\r\n} */\r\n\r\n.EdgeButton--secondary {\r\n    background-color: #fff;\r\n    border: 1px solid #1da1f2;\r\n    color: #1da1f2;\r\n}\r\n\r\n.EdgeButton--secondaryii {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n \r\n}\r\n\r\n.EdgeButton--secondaryiii {\r\n    background-color: #fff;\r\n    border: 1px solid #69C68E;\r\n    color: #69C68E;\r\n \r\n}\r\n\r\n.EdgeButton--secondary-file {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n}\r\n\r\n.EdgeButton--medium {\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n}\r\n\r\n/*.EdgeButton, .EdgeButton:visited {\r\n    border-radius: 100px;\r\n    box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}*/\r\n\r\n.EdgeButton {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    line-height: 25px;\r\n    padding: 8px 18px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n.EdgeButton--secondaryii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n.EdgeButton--secondaryiii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\ntextarea, div[contenteditable], .t1-select {\r\n    display: inline-block;\r\n    width: 210px;\r\n    padding: 4px;\r\n    margin: 0;\r\n    outline: 0;\r\n    background-color: #fff;\r\n    border: 1px solid #e6ecf0;\r\n    border-radius: 3px;\r\n}\r\n\r\nh1 {\r\n    display: block;\r\n    font-size: 2em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh2 {\r\n    display: block;\r\n    font-size: 1.9em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh3 {\r\n    display: block;\r\n    font-size: 1.8em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh4 {\r\n    display: block;\r\n    font-size: 1.7em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh5 {\r\n    display: block;\r\n    font-size: 1.5em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nbody.ms-windows {\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n.table-head {\r\n    background-color: #343a40;\r\n    border-color: #343a40;\r\n    color: #fff;\r\n}\r\n\r\np, label, option, small{\r\n    font-size: 1em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n  }\r\n\r\noption, select{\r\n    font-size: 0.9em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-signature-sheet/createsheet/createsheet.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\" *ngIf=\"privilege\">\r\n    <h1 class=\"my-4\">OnBoarding- Loan new Signature Sheet <span style=\"color:rgb(0, 89, 255)\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\" (click)=\"siteInformation()\"></i></span>\r\n        \r\n    </h1><hr>\r\n        <div class=\"row\" *ngIf=\"siteInfo\">\r\n\r\n                <!-- Blog Entries Column -->\r\n                <div class=\"col-md-8\">\r\n        \r\n        \r\n                  <!-- Blog Post -->\r\n                  <div class=\"card mb-4\">\r\n                    <img class=\"card-img-top\" [src]=\"fullImagePath\" alt=\"Card image cap\">\r\n                    <div class=\"card-body\">\r\n                      <h2 class=\"card-title\">Some statements</h2>\r\n                      <p class=\"card-text\">\"The sheet of onboarding is the first sheet that must be created to an employee, it is a process of only addition, where the initial equipment is established with which the user will work, no other process can be done to an employee without his sheet of onboarding.\"</p>\r\n                      <button class=\"btn btn-info btn-sm\" (click)=\"start()\">Let's Get Started!</button>\r\n                    </div>\r\n                    <div class=\"card-footer text-muted\">\r\n                      Laureate International Universities\r\n                    </div>\r\n                  </div>\r\n        \r\n                </div>\r\n        \r\n                <!-- Sidebar Widgets Column -->\r\n                <div class=\"col-md-4\">\r\n        \r\n\r\n                  <br><br><br>\r\n        \r\n                  <!-- Categories Widget -->\r\n                  <div class=\"card my-4\">\r\n                    <h5 class=\"card-header\">Reminder</h5>\r\n                    <div class=\"card-body\">\r\n                      <div class=\"\">\r\n                        <p>In this section you will not be able to create loan sheets, go create a sheet for that, you can only release the resources of loan sheets already created</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n        \r\n                  <!-- Side Widget -->\r\n                  <div class=\"card my-4\">\r\n                    <h5 class=\"card-header\">Loan Policy</h5>\r\n                    <div class=\"card-body\">\r\n                            The policy should also address postorigination activities, such as ongoing monitoring and credit administration, including postorigination monitoring of loan covenants, obtaining financial information, and assessing the borrower's ongoing ability to service the debt and ultimately repay the loan.\r\n                    </div>\r\n                  </div>\r\n        \r\n                </div>\r\n        \r\n              </div>\r\n    \r\n  <!--  <div>\r\n        <h3>OnBoarding- Loan new Signature Sheet <span style=\"color:rgb(0, 89, 255)\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i></span></h3>\r\n        <p>\"Onboarding, also known as organizational socialization, refers to the mechanism through which new employees acquire the necessary knowledge, skills, and behaviors to become effective organizational members and insiders.It is the process of integrating a new employee into the organization and its culture. Tactics used in this process include formal meetings, lectures, videos, printed materials, or computer-based orientations to introduce newcomers to their new jobs and organizations. Research has demonstrated that these socialization techniques lead to positive outcomes for new employees such as higher job satisfaction, better job performance, greater organizational commitment, and reduction in occupational stress and intent to quit.\"</p>\r\n         <br>\r\n        <div class=\"form-group\"> \r\n            <button class=\"btn btn-info btn-sm\" (click)=\"start()\">Let's Get Started!</button>\r\n        </div>\r\n    </div> -->\r\n\r\n    <div class=\" col-6\" *ngIf=\"boolfirst\">\r\n        <h3>First-Step select a type and date <span><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span></h3>\r\n        <div class=\"form-group\">\r\n            <select class=\"form-control\" [(ngModel)]=\"option\">\r\n                    <option value=\"1\">OnBoarding</option>\r\n                    <option value=\"3\">Loan</option>\r\n            </select>\r\n            \r\n    </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"Date\" class=\"form-control\" [(ngModel)]=\"date\">\r\n            <hr>\r\n            <small> <span style=\"color:rgb(255, 102, 0)\"><i class=\"fa fa-bell\" aria-hidden=\"true\"></i></span> Remember, if you do an Onboarding, the date to enter is the start date, but if you make a Loan sheet  the date to enter is the return of the assets.</small>\r\n        </div>\r\n        \r\n        <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\" (click)=\"validate()\">Continue</button>\r\n    </div>\r\n    <ul class=\"list-group\" *ngFor=\"let item of selectemploye\">\r\n        <li class=\"list-group-item list-group-item-success \">{{item.FIRST_NAME}}  {{item.LAST_NAME}} - {{item.EMAIL}}</li>\r\n      \r\n      </ul>\r\n\r\n    <div *ngIf=\"boolemployee\">\r\n        <h3>Second-Step select the employee <span><i class=\"fa fa-users\" aria-hidden=\"true\"></i></span></h3>\r\n        <!-- <ul class=\"list-group\" *ngFor=\"let item of selectemploye\">{{item.FIRST_NAME}} - {{item.LAST_NAME}} - {{item.EMAIL}} </ul> -->\r\n\r\n\r\n\r\n        <app-employee-table (employeevent)=\"selectemploye=$event\"></app-employee-table>\r\n        <div class=\"d-flex justify-content-center\">\r\n                <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryiii EdgeButton--medium submit js-submit\" (click)=\"backemployee()\">Go Back</button><h4>-</h4>\r\n                <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryiii EdgeButton--medium submit js-submit\" (click)=\"continueemployee(procesValidationtemplate)\">Continue</button>\r\n        </div>\r\n\r\n        \r\n    </div>\r\n    \r\n    <!-- <app-type></app-type> -->\r\n\r\n    <div *ngIf=\"boolproducts\" >\r\n        <app-product-list (productsevent)=\"productsevent=$event\"></app-product-list> <br>\r\n        <!--<button class=\"btn btn-info \" (click)=\"backproducts()\">Go Back</button> -->\r\n        <div class=\"d-flex justify-content-center\">\r\n                <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryiii EdgeButton--medium submit js-submit\" (click)=\"backproducts()\">Go Back</button>\r\n        </div>  \r\n    </div>\r\n    <br><br><br><br>\r\n    <div *ngIf=\"boolproducts\" class=\"d-flex justify-content-center\">\r\n        <!-- <button class=\"btn btn-link btn-lg\" (click)=\"createSignatureSheet()\"></button> -->\r\n        <button class=\"EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\" (click)=\"openModal(template)\">Save New Signature Sheet</button><br>\r\n    </div><br>\r\n    <div *ngIf=\"confirmation\" class=\"alert\" role=\"alert\">\r\n        <h5 class=\"alert-heading\">Warning.! <span><i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i></span></h5>\r\n        <p>The employee does not have Employee Id, please make sure to get all the info ready before proceding</p>\r\n        <hr>\r\n    </div>\r\n<!--\r\n    <button class=\"btn\" (click)=\"testalert()\">Botonsito</button> -->\r\n\r\n \r\n<!--\r\n    <button class=\"btn\" (click)=\"testalert()\">Botonsito</button> -->\r\n\r\n</div>\r\n\r\n\r\n\r\n<!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Create template modal</button> -->\r\n     \r\n<ng-template #template>\r\n    <div class=\"modal-body text-center alert\">\r\n        <p>Are you sure of save this Signature Sheet?? <span><i class=\"fa fa-question-circle-o\" aria-hidden=\"true\"></i></span></p>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"insertSheet2()\" [disabled]=\"disable_flag == 0\">Yes</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"abort()\" >No</button>\r\n        <div class=\"modal-body alert\" role=\"alert\">\r\n                The information will be save and automatically create a pdf file of the sheet, press 'YES', to continue or 'No', to go back.\r\n        </div>\r\n    </div>\r\n\r\n   \r\n</ng-template>\r\n\r\n<ng-template #procesValidationtemplate>\r\n        <div class=\"modal-body text-center alert alert-info\">\r\n            <p>It is not possible to create this sheet.! <span><i class=\"fa fa-times\" aria-hidden=\"true\"></i></span></p>\r\n            <button class=\"btn btn-danger\" (click)=\"ok()\">Ok</button><br>\r\n            <div class=\"modal-body alert alert-warning\" role=\"alert\">\r\n                    Verify that the user has an onboarding sheet, or does not have an offboarding sheet\r\n            </div>\r\n        </div>\r\n        \r\n           \r\n    </ng-template>\r\n\r\n\r\n"

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
        this.boolfirst = true;
        //data a enviar
        this.selectemploye = [];
        this.productsevent = [];
        this.confirmation = false;
        this.privilege = false;
        this.validation = 0;
        this.siteInfo = false;
        this.disable_flag = 1;
        this.fullImagePath = '/assets/images/black-coffee-cactus-cellphone-875514.jpg';
    }
    CreatesheetComponent.prototype.ngOnInit = function () {
        //if(!this.cookieService.get('user_name')){
        //this.router.navigateByUrl('/');
        //}
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
            //this.privilege = true;
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
        if (x.EMPLOYEE_ID) {
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
            alert('Select a employee first, with employee id');
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
    CreatesheetComponent.prototype.siteInformation = function () {
        if (this.siteInfo) {
            this.siteInfo = false;
        }
        else {
            this.siteInfo = true;
        }
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
        this.disable_flag = 0;
        var x = this.selectemploye[0];
        var response;
        var l = this.productsevent.length;
        if (x && (l != 0) && this.validation == 1) {
            this.searchEmployeeService.insertSignatureSheet(this.option, x.EMPLOYEE_ID, x.FIRST_NAME, x.LAST_NAME, x.EMAIL, this.date)
                .subscribe(function (res) {
                console.log(res);
                if (res['message'] == 'Signature Sheet correctly inserted') {
                    console.log('Hoja creada');
                    alert('Hoja creada');
                }
                else {
                    console.log('Hoja no creada.');
                    alert('Hoja no creada');
                }
            });
            //alert(response);
            alert("Creating sheet..");
            //pendiente aun #### 
            this.createSignatureSheet(x, this.productsevent);
            alert('Signature sheet successfully created.!!');
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
        //window.location.href = '/newsheet'; 
    };
    CreatesheetComponent.prototype.insertSheet2 = function () {
        var _this = this;
        this.disable_flag = 0;
        var x = this.selectemploye[0];
        var response;
        var l = this.productsevent.length;
        if (x && (l != 0) && this.validation == 1) {
            this.searchEmployeeService.updateSheetInsert(this.option, x.EMPLOYEE_ID, x.FIRST_NAME, x.LAST_NAME, x.EMAIL, this.date)
                .subscribe(function (result) {
                //alert("Preparing to update..");
                console.log(result);
                if (result['message'] == "Signature Sheet correctly inserted") {
                    console.log('Dentro del condicionante del mensaje');
                    alert("Creating sheet this could take a few seconds.!");
                    //this.createSignatureSheet(x, this.productsevent);
                    _this.searchEmployeeService.saveRelationships(x, _this.productsevent)
                        .subscribe(function (result) {
                        console.log(result);
                        alert("Done");
                        //alert('Signature Sheet successfully created.!');
                        window.location.href = '/newsheet';
                    });
                    //alert('Carajo1');
                }
                else {
                    alert('Something wrong contact your System Admin.');
                }
            });
            //alert(response);
            // alert("Creating sheet..");
            //pendiente aun #### 
            //this.createSignatureSheet(x, this.productsevent);
            //alert('Signature sheet successfully created.!!');
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
        //alert('Signature Sheet successfully created.!');
        //window.location.href = '/newsheet'; 
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
        alert(this.option);
    };
    CreatesheetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-createsheet',
            template: __webpack_require__("../../../../../src/app/create-signature-sheet/createsheet/createsheet.component.html"),
            styles: [__webpack_require__("../../../../../src/app/create-signature-sheet/createsheet/createsheet.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__search_employee_service__["a" /* SearchEmployeeService */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], CreatesheetComponent);
    return CreatesheetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/create-signature-sheet/employee-table/employee-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.select :hover{\r\n    background-color: rgb(168, 213, 235);\r\n}\r\n\r\nh1 { color: #7c795d; font-family: 'Trocchi', serif; font-size: 45px; font-weight: normal; line-height: 48px; margin: 0; }\r\n\r\np { color: #4c4a37; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh5 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh2 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh3 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh4 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; } */\r\n\r\n.EdgeButton:hover{\r\n    background-color: #E0F8FF;\r\n}\r\n\r\n.EdgeButton--secondary-file:hover{\r\n    background-color: #afe0ff;\r\n}\r\n\r\n.EdgeButton--secondaryii:hover{\r\n    background-color: #E0F8FF;\r\n    color: #1da1f2;\r\n}\r\n\r\n.EdgeButton--secondaryiii:hover{\r\n    background-color: #DBFCE8;\r\n    color: #69C68E;\r\n}\r\n\r\n/*input {\r\n    -moz-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    margin-top: 12px;\r\n    width: 100%;\r\n} */\r\n\r\n.EdgeButton--secondary {\r\n    background-color: #fff;\r\n    border: 1px solid #1da1f2;\r\n    color: #1da1f2;\r\n}\r\n\r\n.EdgeButton--secondaryii {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n \r\n}\r\n\r\n.EdgeButton--secondaryiii {\r\n    background-color: #69C68E;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n \r\n}\r\n\r\n.EdgeButton--secondary-file {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n}\r\n\r\n.EdgeButton--medium {\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n}\r\n\r\n/*.EdgeButton, .EdgeButton:visited {\r\n    border-radius: 100px;\r\n    box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}*/\r\n\r\n.EdgeButton {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    line-height: 25px;\r\n    padding: 8px 18px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n.EdgeButton--secondaryii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n.EdgeButton--secondaryiii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\ntextarea, div[contenteditable], .t1-select {\r\n    display: inline-block;\r\n    width: 210px;\r\n    padding: 4px;\r\n    margin: 0;\r\n    outline: 0;\r\n    background-color: #fff;\r\n    border: 1px solid #e6ecf0;\r\n    border-radius: 3px;\r\n}\r\n\r\nh1 {\r\n    display: block;\r\n    font-size: 2em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh2 {\r\n    display: block;\r\n    font-size: 1.9em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh3 {\r\n    display: block;\r\n    font-size: 1.8em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh4 {\r\n    display: block;\r\n    font-size: 1.7em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh5 {\r\n    display: block;\r\n    font-size: 1.5em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nbody.ms-windows {\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n.table-head {\r\n    background-color: rgb(35, 47, 62);\r\n    border-color: rgb(35, 47, 62);\r\n    color: #fff;\r\n}\r\n\r\np, label, option{\r\n    font-size: 1em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n  }\r\n\r\noption, select{\r\n    font-size: 0.9em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-signature-sheet/employee-table/employee-table.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid\">\r\n      \r\n \r\n<br><div  class=\"\">\r\n  <!-- <h4>Search the Employee</h4> -->\r\n  <form class=\"form-inline d-flex justify-content-end\">\r\n    <div class=\"form-group\">\r\n        <input type=\"text\" [(ngModel)]=\"search\" placeholder=\"Search\" class=\"form-control\" name=\"gay\" >\r\n        <button class=\"EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\" (click)=\"find()\">Find Employee <span><i class=\"fa fa-address-book\" aria-hidden=\"true\"></i></span></button><br>\r\n\r\n    </div>\r\n\r\n  </form>\r\n</div><br>\r\n<table class=\"table table-hover table-bordered\">\r\n  <thead class=\"table-head\">\r\n    <tr class=\"\">\r\n        <th scope=\"col\">Id</th>\r\n      <th scope=\"col\">Employeeid</th>\r\n      <th scope=\"col\">Firstname</th>\r\n      <th scope=\"col\">Last name</th>\r\n      <th scope=\"col\">e-mail</th>\r\n      <th scope=\"col\">Department</th>\r\n      <th scope=\"col\">Site</th>\r\n\r\n      <th scope=\"col\">Select</th>\r\n      \r\n    </tr>\r\n  </thead>\r\n  <tbody *ngFor=\"let employ of employees\">\r\n\r\n    <tr class=\"select\">\r\n      <th scope=\"row\">{{employ.ID}}</th>\r\n      <td>{{employ.EMPLOYEE_ID}}</td>\r\n      <td>{{employ.FIRST_NAME}}</td>\r\n      <td>{{employ.LAST_NAME}}</td>\r\n      <td>{{employ.EMAIL}}</td>\r\n      <td>{{employ.DEPARTMENT}}</td>\r\n      <td>{{employ.SITE}} </td>\r\n\r\n      <td><button class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\" (click)=\"onSelect(employ)\">Select</button></td>\r\n    </tr>\r\n\r\n  </tbody>\r\n\r\n</table>\r\n  <div class=\"d-flex justify-content-center\">\r\n      <button class=\"btn btn-link\" *ngIf=\"showpreview\" (click)=\"preview()\">Preview</button>\r\n      <button class=\"btn btn-link\" (click)=\"searchEmployees()\" *ngIf=\"shownext\">Next</button>\r\n  </div>\r\n  <div class=\"d-flex justify-content-start\" *ngIf=\"showmeta\">\r\n      <p>Search Result Quantity: {{count}}, cursor {{cursor}} More?  {{more}}.</p>\r\n  </div>\r\n\r\n<!-- <button (click)=\"getEmployees()\" class=\"btn\">Employees</button> -->\r\n\r\n</div>\r\n\r\n<div>\r\n\r\n\r\n"

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
        this.search = '';
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
        this.find();
    };
    EmployeeTableComponent.prototype.testem = function () {
    };
    EmployeeTableComponent.prototype.getEmployees = function () {
        var _this = this;
        this.url = 'http://hnlnoitinvprod01.hnsc.net/api/v1/assetexplorerusers/' + this.cont;
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
        //this.url = 'http://hnlnoitinvprod01.hnsc.net/api/v1/assetusersearch?page='+this.cursor + '&limit=10&text=' + this.search;
        this.url = "http://hnlnoitinvprod01.hnsc.net/api/v1/assetusersearch?page=" + this.cursor + "&limit=10&text=" + this.search;
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
        console.log(this.employees);
    };
    EmployeeTableComponent.prototype.employeeSearch = function (x, y) {
        var _this = this;
        this._searchEmployees.searchEmployees(x, y).subscribe(function (data) { return _this.a; });
        //this.employees = this.a.query;
        console.log(this.a);
    };
    EmployeeTableComponent.prototype.preview = function () {
        this.cursor = this.cursor - 20;
        this.searchEmployees();
        //alert(this.cursor);
    };
    EmployeeTableComponent.prototype.find = function () {
        this.cursor = 0;
        this.searchEmployees();
    };
    EmployeeTableComponent.prototype.onSelect = function (selectedItem) {
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
    EmployeeTableComponent.prototype.test = function () {
        alert(this.search);
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
exports.push([module.i, "/*h1 { color: #7c795d; font-family: 'Trocchi', serif; font-size: 45px; font-weight: normal; line-height: 48px; margin: 0; }\r\n\r\np { color: #4c4a37; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh5 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh2 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh3 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh4 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }*/\r\n\r\n.EdgeButton:hover{\r\n    background-color: #E0F8FF;\r\n}\r\n\r\n.EdgeButton--secondary-file:hover{\r\n    background-color: #afe0ff;\r\n}\r\n\r\n.EdgeButton--secondaryii:hover{\r\n    background-color: #E0F8FF;\r\n    color: #1da1f2;\r\n}\r\n\r\n.EdgeButton--secondaryiii:hover{\r\n    background-color: #ffc6c6;\r\n    /*color: #69C68E;*/\r\n}\r\n\r\n/*input {\r\n    -moz-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    margin-top: 12px;\r\n    width: 100%;\r\n} */\r\n\r\n.EdgeButton--secondary {\r\n    background-color: #fff;\r\n    border: 1px solid #1da1f2;\r\n    color: #1da1f2;\r\n}\r\n\r\n.EdgeButton--secondaryii {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n \r\n}\r\n\r\n.EdgeButton--secondaryiii {\r\n    background-color: #fff;\r\n    border: 1px solid #db4646;\r\n    color: #db4646;\r\n \r\n}\r\n\r\n.EdgeButton--secondary-file {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n}\r\n\r\n.EdgeButton--medium {\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n}\r\n\r\n/*.EdgeButton, .EdgeButton:visited {\r\n    border-radius: 100px;\r\n    box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}*/\r\n\r\n.EdgeButton {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    line-height: 25px;\r\n    padding: 8px 18px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n.EdgeButton--secondaryii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n.EdgeButton--secondaryiii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\ntextarea, div[contenteditable], .t1-select {\r\n    display: inline-block;\r\n    width: 210px;\r\n    padding: 4px;\r\n    margin: 0;\r\n    outline: 0;\r\n    background-color: #fff;\r\n    border: 1px solid #e6ecf0;\r\n    border-radius: 3px;\r\n}\r\n\r\nh1 {\r\n    display: block;\r\n    font-size: 2em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh2 {\r\n    display: block;\r\n    font-size: 1.9em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh3 {\r\n    display: block;\r\n    font-size: 1.8em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh4 {\r\n    display: block;\r\n    font-size: 1.7em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh5 {\r\n    display: block;\r\n    font-size: 1.5em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nbody.ms-windows {\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n.table-head {\r\n    background-color: rgb(35, 47, 62);\r\n    border-color: rgb(35, 47, 62);\r\n    color: #fff;\r\n}\r\n\r\np, label, option{\r\n    font-size: 1em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n  }\r\n\r\noption, select{\r\n    font-size: 0.9em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-signature-sheet/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" container-fluid\">\r\n    <h3>Select the products <span><i class=\"fa fa-laptop\" aria-hidden=\"true\"></i></span></h3>\r\n  <div class=\"\">\r\n    <br><div  class=\"d-flex justify-content-end\">\r\n        <form class=\"form-inline\">\r\n          <div class=\"form-group\">\r\n              <input type=\"text\" placeholder=\"Search\" class=\"form-control\" (keyup)=\"textproduct($event)\">\r\n              <button class=\"EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\" (click)=\"find()\">Find Products <span><i class=\"fa fa-laptop\" aria-hidden=\"true\"></i></span></button><br>\r\n      \r\n          </div>\r\n      \r\n        </form>\r\n      </div><br>\r\n      \r\n      <table class=\"table table-hover table-bordered\">\r\n          <thead class=\"table-head\">\r\n            <tr class=\"\">\r\n                <th scope=\"col\">Id</th>\r\n              <th scope=\"col\">CI Name</th>\r\n              <th scope=\"col\">CI Type</th>\r\n              <th scope=\"col\">Product Code</th>\r\n              <th scope=\"col\">Serial N°</th>\r\n              <th scope=\"col\">Model</th>\r\n              <th scope=\"col\">State</th>\r\n              <th scope=\"col\"></th>\r\n              <th scope=\"col\"></th>\r\n              \r\n            </tr>\r\n          </thead>\r\n          <tbody *ngFor=\"let product of allProducts\">\r\n        \r\n            <tr class=\"select\">\r\n              <th scope=\"row\">{{product.ID}}</th>\r\n              <td>{{product.CI_NAME}}</td>\r\n              <td>{{product.CI_TYPE}}</td>\r\n              <td>{{product.PRODUCT_CODE}}</td>\r\n              <td>{{product.SERIAL_NUMBER}}</td>\r\n              <td>{{product.MODEL}}</td>\r\n              <td>{{product.STATE}}</td>\r\n              <td><button class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\" (click)=\"onSelect(product)\">Add</button></td>\r\n              <td><button class=\"btn btn-sm EdgeButton EdgeButton--secondaryiii EdgeButton--medium submit js-submit\" (click)=\"onRemove(product)\" >Rmv</button></td>\r\n            </tr>\r\n        \r\n          </tbody>\r\n        \r\n        </table>\r\n        <div class=\"d-flex justify-content-center\">\r\n            <button class=\"btn btn-link\" *ngIf=\"showpreview\" (click)=\"preview()\">Preview</button>\r\n            <button class=\"btn btn-link\" (click)=\"searchProducts()\" *ngIf=\"shownext\">Next</button>\r\n        </div>\r\n        <div class=\"d-flex justify-content-start\" *ngIf=\"showmeta\">\r\n            <p>Search Result Quantity: {{count}}, cursor {{cursor}} More?  {{more}}.</p>\r\n        </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"bool\">\r\n      <!--   <app-list [parentData]=\"oneItem\"></app-list> -->\r\n      <app-selected-products [parentData]=\"selectproducts\"></app-selected-products>\r\n  </div>\r\n\r\n</div>\r\n"

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
        this.product = '';
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
        this.find();
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
            if (x.PRODUCT_CODE) {
                this.selectproducts.push(x);
                this.productsevent.emit(this.selectproducts);
                this.bool = true;
            }
            else {
                alert('No Product Code.');
            }
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
        this.url = 'http://hnlnoitinvprod01.hnsc.net/api/v1/assetproductsearch?page=' + this.cursor + '&limit=10&text=' + this.product + '&status=In Store';
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
        this.httpserverurl = 'http://hnlnoitinvprod01.hnsc.net/api/v1/';
    }
    SearchEmployeeService.prototype.getTest = function () {
        return "Hello service";
    };
    SearchEmployeeService.prototype.searchEmployees = function (curso, text) {
        //this.url = 'http://hnlnoitinvprod01.hnsc.net/api/v1/assetusersearch?page='+this.cursor + '&limit=10&text=' + this.search;
        this.url = "http://hnlnoitinvprod01.hnsc.net/api/v1/assetusersearch?page=" + curso + "&limit=10&text=" + text;
        return this.httpClient.get(this.url).map(function (result) { return result; });
    };
    SearchEmployeeService.prototype.insertSignatureSheet = function (option, id, f_name, l_name, email, date) {
        var answ;
        var url = "http://hnlnoitinvprod01.hnsc.net/api/v1/signaturesheets?id_type=" + option + "&id_employee=" + id + "&first_name=" + f_name + "&last_name=" + l_name + "&email=" + email + "&updated=" + date;
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
        var url = "http://hnlnoitinvprod01.hnsc.net/api/v1/signaturesheets?id_type=" + option + "&id_employee=" + id + "&first_name=" + f_name + "&last_name=" + l_name + "&email=" + email;
        return this.httpClient.post(url, {}).map(function (result) { return result; });
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
        return this.httpClient.post("http://hnlnoitinvprod01.hnsc.net/api/v1/signatureproducts", {
            Products: JSON.stringify(products),
            id_employee: user.EMPLOYEE_ID,
            requesterid: user.CIID
        }).map(function (result) { return result; });
        /*.subscribe(
          (data:any) => {
            console.log(JSON.stringify(products));
            this.getTest();
            alert("Sheet done.");
          }*/
    };
    SearchEmployeeService.prototype.getUserProducts = function (id_employee) {
        return this.httpClient.get("http://hnlnoitinvprod01.hnsc.net/api/v1/signatureproduct/" + id_employee).map(function (result) { return result; });
    };
    SearchEmployeeService.prototype.updateSignatureSheet = function (pr, pa, cp, userinfo, typ, id_employee) {
        return this.httpClient.put("http://hnlnoitinvprod01.hnsc.net/api/v1/signatureproduct/" + id_employee, {
            Products_to_remove: JSON.stringify(pr),
            Products_to_add: JSON.stringify(pa),
            current_products: JSON.stringify(cp),
            type: typ,
            user_info: JSON.stringify(userinfo)
        }).map(function (result) { return result; });
    };
    SearchEmployeeService.prototype.searchSignatureSheets = function (page, text, limit, sheet_option, status_option) {
        return this.httpClient.get("http://hnlnoitinvprod01.hnsc.net/api/v1/signaturesheet?page=" + page + "&text=" + text + "&limit=" + limit + "&idsheet=" + sheet_option + "&status=" + status_option).map(function (result) { return result; });
    };
    SearchEmployeeService.prototype.searchLoanSignatureSheets = function (page, text, limit, type) {
        return this.httpClient.get("http://hnlnoitinvprod01.hnsc.net/api/v1/loansignaturesheets?page=" + page + "&text=" + text + "&limit=" + limit + "&type=" + type).map(function (result) { return result; });
    };
    SearchEmployeeService.prototype.searchLoanSheetsProducts = function (id) {
        return this.httpClient.get("http://hnlnoitinvprod01.hnsc.net/api/v1/loansheetproducts?id_signature=" + id).map(function (result) { return result; });
    };
    SearchEmployeeService.prototype.updateOffLoanSheetsProducts = function (products, id_employee, id_sheet) {
        return this.httpClient.post("http://hnlnoitinvprod01.hnsc.net/api/v1/loansheetproducts", {
            Products: JSON.stringify(products),
            id_employee: JSON.stringify(id_employee),
            id_signature: id_sheet
        }).map(function (result) { return result; });
    };
    SearchEmployeeService.prototype.createOffboarding = function (products_, id_employee_) {
        return this.httpClient.post("http://hnlnoitinvprod01.hnsc.net/api/v1/offboardingsheet", {
            Products: JSON.stringify(products_),
            id_employee: id_employee_
        }).map(function (result) { return result; });
    };
    SearchEmployeeService.prototype.processValidation = function (employee_id) {
        return this.httpClient.get("http://hnlnoitinvprod01.hnsc.net/api/v1/offboardingsheetvalidation/" + employee_id).map(function (result) { return result; });
    };
    SearchEmployeeService.prototype.searchLoanProducts = function (text_, page_, limit_, status_) {
        return this.httpClient.get("http://hnlnoitinvprod01.hnsc.net/api/v1/loanstatussearch?text=" + text_ + "&page=" + page_ + "&limit=" + limit_ + "&status=" + status_).map(function (result) { return result; });
    };
    SearchEmployeeService.prototype.pdf_validation = function (id_signature) {
        return this.httpClient.get("http://hnlnoitinvprod01.hnsc.net/api/v1/pdfimages?id_signature=" + id_signature).map(function (result) { return result; });
    };
    SearchEmployeeService.prototype.pdf_image_insert = function (id_signature_, doc_name_) {
        return this.httpClient.post("http://hnlnoitinvprod01.hnsc.net/api/v1/pdfimages", {
            id_signature: id_signature_,
            doc_name: doc_name_
        }).map(function (result) { return result; });
    };
    SearchEmployeeService.prototype.signatureSheetInsert = function (option, id, f_name, l_name, email, date) {
        return this.httpClient.post("http://hnlnoitinvprod01.hnsc.net/api/v1/signaturesheets?id_type=" + option + "&id_employee=" + id + "&first_name=" + f_name + "&last_name=" + l_name + "&email=" + email + "&updated=" + date, {}).map(function (result) { return result; });
    };
    SearchEmployeeService.prototype.updateSheetInsert = function (option, id, f_name, l_name, email, date) {
        var answ;
        var url = "http://hnlnoitinvprod01.hnsc.net/api/v1/signaturesheets?id_type=" + option + "&id_employee=" + id + "&first_name=" + f_name + "&last_name=" + l_name + "&email=" + email + "&updated=" + date;
        return this.httpClient.post(url, {}).map(function (result) { return result; });
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
        this.httpClient.get('http://hnlnoitinvprod01.hnsc.net/api/v1/types')
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

/***/ "../../../../../src/app/dashboard-tables/dashboard-tables.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.e {\r\n    background-color: #b9ac15;\r\n}\r\n\r\n\r\n\r\np { color: #4c4a37; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh5 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 20px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh2 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 20px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh3 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 20px; font-weight: 400; line-height: 0px; margin: 0 0 0px; }\r\nh4 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 20px; font-weight: 400; line-height: 32px; margin: 0 0 24px; } */\r\n\r\n\r\n.EdgeButton:hover{\r\n    background-color: #E0F8FF;\r\n}\r\n\r\n\r\n.EdgeButton--secondary-file:hover{\r\n    background-color: #afe0ff;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryii:hover{\r\n    background-color: #E0F8FF;\r\n    color: #1da1f2;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryiii:hover{\r\n    background-color: #DBFCE8;\r\n    /*color: #69C68E;*/\r\n}\r\n\r\n\r\n/*input {\r\n    -moz-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    margin-top: 12px;\r\n    width: 100%;\r\n} */\r\n\r\n\r\n.EdgeButton--secondary {\r\n    background-color: #fff;\r\n    border: 1px solid #1da1f2;\r\n    color: #1da1f2;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryii {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n \r\n}\r\n\r\n\r\n.EdgeButton--secondaryiii {\r\n    background-color: #fff;\r\n    border: 1px solid #69C68E;\r\n    color: #69C68E;\r\n \r\n}\r\n\r\n\r\n.EdgeButton--secondary-file {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n}\r\n\r\n\r\n.EdgeButton--medium {\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n}\r\n\r\n\r\n/*.EdgeButton, .EdgeButton:visited {\r\n    border-radius: 100px;\r\n    box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}*/\r\n\r\n\r\n.EdgeButton {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    line-height: 25px;\r\n    padding: 8px 18px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryiii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n\r\ntextarea, div[contenteditable], .t1-select {\r\n    display: inline-block;\r\n    width: 210px;\r\n    padding: 4px;\r\n    margin: 0;\r\n    outline: 0;\r\n    background-color: #fff;\r\n    border: 1px solid #e6ecf0;\r\n    border-radius: 3px;\r\n}\r\n\r\n\r\nh1 {\r\n    display: block;\r\n    font-size: 2em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nh2 {\r\n    display: block;\r\n    font-size: 1.9em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nh3 {\r\n    display: block;\r\n    font-size: 1.8em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nh4 {\r\n    display: block;\r\n    font-size: 1.7em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nh5 {\r\n    display: block;\r\n    font-size: 1.5em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nbody.ms-windows {\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\n.table-head {\r\n    background-color: rgb(35, 47, 62);\r\n    border-color: rgb(35, 47, 62);\r\n    color: #fff;\r\n}\r\n\r\n\r\np, label, option{\r\n    font-size: 1em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n  }\r\n\r\n\r\noption, select{\r\n    font-size: 0.9em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard-tables/dashboard-tables.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<br> <br>\r\n<div class=\"row justify-content-center\">\r\n    <div class=\"form-inline\">\r\n        <h3><span><i class=\"fa fa-archive\" aria-hidden=\"true\"></i>\r\n        </span> Storage Moves -From - To -</h3>\r\n           <div class=\"form-inline\">\r\n            <!-- dos calendarios-->\r\n            <input type=\"Date\" class=\"form-control\" [(ngModel)]=\"datefrom\">-\r\n            <input type=\"Date\" class=\"form-control\" [(ngModel)]=\"dateto\">-\r\n           </div>\r\n           <div class=\"form-group\">\r\n           </div>\r\n           <button type=\"button\" class=\"EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\"  (click)=\"funStorageMoveTable()\">Generate Table</button>\r\n           <pre>   </pre>\r\n           <div class=\"form-inline\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Asset State History\"  [(ngModel)]=\"searchprod\">\r\n              <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submi\" (click)=\"searchField()\"><span> <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n              </span></button>\r\n           </div>\r\n         </div>\r\n  \r\n  </div><br><br>\r\n<br>\r\n  <div class=\"container\" *ngIf=\"moveTable\">\r\n    <h3>Storage Move from <strong>{{datefrom}}</strong> to <strong>{{dateto}}</strong>:</h3><br>\r\n      <table class=\"table table-hover table-bordered\">\r\n          <thead class=\"table-head\">\r\n            <tr class=\"\">\r\n                <th scope=\"col\">Assettag</th>\r\n              <th scope=\"col\">Resource Name</th>\r\n              <th scope=\"col\">State</th>\r\n              <th scope=\"col\">Prev State</th>\r\n              <th scope=\"col\">Owner</th>\r\n              <th scope=\"col\">Date</th>\r\n              \r\n            </tr>\r\n          </thead>\r\n          <tbody *ngFor=\"let employ of storageMovesItems\">\r\n        \r\n            <tr class=\"select\">\r\n              <th scope=\"row\">{{employ.assettag}}</th>\r\n              <td>{{employ.resourcename}}</td>\r\n              <td>{{employ.STATE}}</td>\r\n              <td>{{employ.PREV}}</td>\r\n              <td>{{employ.NAME}}</td>\r\n              <td>{{employ.DATE}}</td>\r\n            </tr>\r\n        \r\n          </tbody>\r\n        \r\n        </table>\r\n           <div class=\"d-flex justify-content-center\">\r\n              <button class=\"btn btn-link\" *ngIf=\"showpreview\" (click)=\"preview()\">Preview</button>\r\n              <button class=\"btn btn-link\"  *ngIf=\"shownext\" (click)=\"storageMoveTable()\">Next</button>\r\n          </div>\r\n          <div class=\"d-flex justify-content-start\" *ngIf=\"shownext\">\r\n              <p>Search Result <strong> Quantity: {{count}} </strong>, cursor {{cursor}} .</p>\r\n          </div> \r\n  </div>\r\n\r\n  <div class=\"container\" *ngIf=\"moveTable2\">\r\n    <h3>Storage Move for <strong>{{searchprod}}</strong> :</h3><br>\r\n      <table class=\"table table-hover table-bordered\">\r\n          <thead class=\"thead-dark\">\r\n            <tr class=\"\">\r\n                <th scope=\"col\">Assettag</th>\r\n              <th scope=\"col\">Resource Name</th>\r\n              <th scope=\"col\">State</th>\r\n              <th scope=\"col\">Prev State</th>\r\n              <th scope=\"col\">Owner</th>\r\n              <th scope=\"col\">Date</th>\r\n              \r\n            </tr>\r\n          </thead>\r\n          <tbody *ngFor=\"let employ of storageMovesItems2\">\r\n        \r\n            <tr class=\"select\">\r\n              <th scope=\"row\">{{employ.assettag}}</th>\r\n              <td>{{employ.resourcename}}</td>\r\n              <td>{{employ.STATE}}</td>\r\n              <td>{{employ.PREV}}</td>\r\n              <td>{{employ.NAME}}</td>\r\n              <td>{{employ.DATE}}</td>\r\n            </tr>\r\n        \r\n          </tbody>\r\n        \r\n        </table>\r\n           <div class=\"d-flex justify-content-center\">\r\n              <button class=\"btn btn-link\" *ngIf=\"showpreview2\" (click)=\"preview2()\">Preview</button>\r\n              <button class=\"btn btn-link\"  *ngIf=\"shownext2\" (click)=\"search()\">Next</button>\r\n          </div>\r\n          <div class=\"d-flex justify-content-start\" >\r\n              <p>Search Result <strong> Quantity: {{count2}} </strong>, cursor {{cursor2}} .</p>\r\n          </div> \r\n  </div>\r\n\r\n\r\n <!--  <button class=\"btn btn-primary\" (click)=\"test()\">TEST</button> -->  "

/***/ }),

/***/ "../../../../../src/app/dashboard-tables/dashboard-tables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardTablesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode__ = __webpack_require__("../../../../jwt-decode/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardTablesComponent = /** @class */ (function () {
    function DashboardTablesComponent(_dashboardService, login, router, cookieService) {
        this._dashboardService = _dashboardService;
        this.login = login;
        this.router = router;
        this.cookieService = cookieService;
        this.storageMovesItems = [];
        this.page = 0;
        this.cursor = 0;
        this.shownext = false;
        this.showpreview = false;
        this.privilege = false;
        this.moveTable = false;
        this.searchprod = '';
        this.searchTable = false;
        this.searchDateTable = false;
        //second table
        this.storageMovesItems2 = [];
        this.shownext2 = false;
        this.showpreview2 = false;
        this.cursor2 = 0;
        this.moveTable2 = false;
    }
    DashboardTablesComponent.prototype.ngOnInit = function () {
        var val = this.cookieService.get("token");
        if (val) {
            var djtw = __WEBPACK_IMPORTED_MODULE_3_jwt_decode__(val);
            var identity = djtw['identity'];
            for (var _i = 0; _i < identity.length; _i++) {
                if (identity[_i]['privilege'] == 'dashboard') {
                    this.privilege = true;
                }
            }
            if (this.privilege) {
                //aqui cargamos movimiento por default si queremos;
                //this.initialDashboard();
            }
            else {
                window.location.href = '/login';
            }
        }
        else {
            //this.privilege = true;
            window.location.href = '/login';
        }
    };
    DashboardTablesComponent.prototype.storageMoveTable = function () {
        var _this = this;
        if (!this.datefrom && !this.dateto) {
            alert('Incomplete Information ');
        }
        if (this.datefrom && this.dateto) {
            /*if(!this.searchDateTable){
              this.searchDateTable = true;
              this.searchTable = false;
              this.cursor = 0;
      
            }*/
            this._dashboardService.stateTable(this.datefrom, this.dateto, this.cursor)
                .subscribe(function (res) {
                //console.log(res);
                if (res['message'] == 'wrong_dates') {
                    alert('Incorrect date order.!');
                }
                else {
                    _this.storageMovesItems = res['query'];
                    _this.meta = res['meta'];
                    //alert('aqui');
                    //console.log(this.meta);
                    _this.count = _this.meta.count;
                    _this.cursor = _this.meta.cursor;
                    if (_this.meta.more) {
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
                    _this.moveTable = true;
                }
            });
        }
    };
    DashboardTablesComponent.prototype.preview = function () {
        this.cursor = this.cursor - 20;
        this.storageMoveTable();
        //alert(this.cursor);
    };
    DashboardTablesComponent.prototype.preview2 = function () {
        this.cursor2 = this.cursor2 - 20;
        this.search();
        //alert(this.cursor);
    };
    DashboardTablesComponent.prototype.search = function () {
        if (this.searchprod == '') {
            alert('Search Field is empty.!');
        }
        else {
            /*this._dashboardService.searchProductState(this.searchprod, this.cursor2)
            .subscribe( res => {
              //console.log(res);
              this.storageMovesItems2 = res['query'];
              this.meta2 = res['meta'];
              //alert('aqui');
              //console.log(this.meta2);
              this.count2 = this.meta2.count;
              this.cursor2 = this.meta2.cursor;
              if(this.meta2.more){
                this.shownext2 = true;
              }else{
                this.shownext2 = false;
              }
              
              if(this.cursor2 == 10){
                this.showpreview2 = false
              }
              else{
                this.showpreview2 = true;
              }
              this.moveTable2 = true;
            }) */
            alert('');
        }
    };
    DashboardTablesComponent.prototype.test = function () {
        var day = Date.now();
        alert(this.cursor);
    };
    DashboardTablesComponent.prototype.searchField = function () {
        this.moveTable = false;
        this.cursor2 = 0;
        this.search();
    };
    DashboardTablesComponent.prototype.funStorageMoveTable = function () {
        this.moveTable2 = false;
        this.cursor = 0;
        this.storageMoveTable();
    };
    DashboardTablesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-tables',
            template: __webpack_require__("../../../../../src/app/dashboard-tables/dashboard-tables.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard-tables/dashboard-tables.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]])
    ], DashboardTablesComponent);
    return DashboardTablesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {Http, Headers, RequestOptions} from '@angular/http';


var DashboardService = /** @class */ (function () {
    function DashboardService(httpClient, cookieService) {
        this.httpClient = httpClient;
        this.cookieService = cookieService;
    }
    //public  val = this.cookieService.get("token");
    /*createAuthorizationHeader(headers: Headers) {
      let val = this.cookieService.get("token");
      headers.append('Content-Type', 'application/json');
      headers.append('authentication', val);
    } */
    DashboardService.prototype.getTest = function () {
        return "Hello Dashboard";
    };
    DashboardService.prototype.loadInitialDashboard = function () {
        //let _headers = new HttpHeaders();
        //const headers = _headers.append('Content-Type', 'application/json')
        //let headers = new Headers({ 'Authorization': 'Bearer ' + this.cookieService.get("token") });
        //let options = new RequestOptions({ headers: headers });
        //this.createAuthorizationHeader(headers);
        var x = 'Bearer' + ' ' + this.cookieService.get("token");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Authorization', x);
        return this.httpClient.get("http://hnlnoitinvprod01.hnsc.net/api/v1/dashboard", { headers: headers }).map(function (result) { return result; });
    };
    DashboardService.prototype.inStoreModels = function (type, state) {
        var x = 'Bearer' + ' ' + this.cookieService.get("token");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Authorization', x);
        return this.httpClient.get("http://hnlnoitinvprod01.hnsc.net/api/v1/dashboarddetail/" + type + "/" + state, { headers: headers }).map(function (result) { return result; });
    };
    DashboardService.prototype.stateTable = function (datefrom, dateto, page) {
        var x = 'Bearer' + ' ' + this.cookieService.get("token");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Authorization', x);
        return this.httpClient.get("http://hnlnoitinvprod01.hnsc.net/api/v1/dashboardstatetable?datefrom=" + datefrom + "&dateto=" + dateto + "&page=" + page, { headers: headers }).map(function (result) { return result; });
    };
    DashboardService.prototype.searchProductState = function (product, page) {
        var x = 'Bearer' + ' ' + this.cookieService.get("token");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Authorization', x);
        return this.httpClient.get("http://hnlnoitinvprod01.hnsc.net/api/v1/dashboardseachproductstate?paramSearch=" + product + "&page=" + page, { headers: headers }).map(function (result) { return result; });
    };
    DashboardService.prototype.searchLifetime = function () {
        var x = 'Bearer' + ' ' + this.cookieService.get("token");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Authorization', x);
        return this.httpClient.get("http://hnlnoitinvprod01.hnsc.net/api/v1/dashboardlifetime", { headers: headers }).map(function (result) { return result; });
    };
    DashboardService.prototype.searchLifetimeDetail = function (less, number, state, page) {
        var x = 'Bearer' + ' ' + this.cookieService.get("token");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Authorization', x);
        return this.httpClient.get("http://hnlnoitinvprod01.hnsc.net/api/v1/dashboardlifetimedetail?less=" + less + "&number=" + number + "&state=" + state + "&page=" + page).map(function (result) { return result; });
    };
    DashboardService.prototype.searchItemLifetimeDetail = function (page, text) {
        var x = 'Bearer' + ' ' + this.cookieService.get("token");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Authorization', x);
        return this.httpClient.get("http://hnlnoitinvprod01.hnsc.net/api/v1/dashboardsearchlifetimedetail?text=" + text + "&page=" + page).map(function (result) { return result; });
    };
    DashboardService.prototype.serversCount = function () {
        var x = 'Bearer' + ' ' + this.cookieService.get("token");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Authorization', x);
        return this.httpClient.get("http://hnlnoitinvprod01.hnsc.net/api/v1/dashboradserverscount").map(function (result) { return result; });
    };
    DashboardService.prototype.crossCheck = function () {
        var x = 'Bearer' + ' ' + this.cookieService.get("token");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Authorization', x);
        return this.httpClient.get("http://hnlnoitinvprod01.hnsc.net/api/v1/dashboard-crosscheck").map(function (result) { return result; });
    };
    DashboardService.prototype.GetAccessToken = function (ClientId, ClientSecret) {
        return this.httpClient.post("http://hnlnoitinvprod01.hnsc.net/api/v1/bitlygettoken", { ClientId: ClientId, ClientSecret: ClientSecret }).map(function (res) { return res; });
    };
    DashboardService.prototype.CreateBiltink = function (Domain, Title, GroupGuid, LongURL, BearerToken) {
        // const Head = 'Bearer ' + BearerToken;
        // const headers = new HttpHeaders().set('Authorization', Head).set('Content-Type', 'application/json');
        var data = {
            domain: Domain,
            title: Title,
            group_guid: GroupGuid,
            long_url: LongURL,
            bearer_token: BearerToken
        };
        //console.log(data);
        return this.httpClient.post("http://hnlnoitinvprod01.hnsc.net/api/v1/createbitlink", {
            'domain': Domain,
            'title': Title,
            'group_guid': GroupGuid,
            'long_url': LongURL,
            'bearer_token': BearerToken
        }).map(function (result) { return result; });
    };
    DashboardService.prototype.GetBitlinkInfo = function (Bitlink, BearerToken) {
        var Head = 'Bearer ' + BearerToken;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', Head);
        return this.httpClient.get("https://api-ssl.bitly.com/v4/bitlinks/" + Bitlink, { headers: headers }).map(function (result) { return result; });
    };
    DashboardService.prototype.RedirectBitlink = function (BitlinkId, CustomBitlink, BearerToken) {
        // const Head = 'Bearer ' + BearerToken;
        // const headers = new HttpHeaders().set('Authorization', Head).set('Content-Type', 'application/json');
        var data = {
            bitlink_id: BitlinkId,
            custom_bitlink: CustomBitlink,
            bearer_token: BearerToken
        };
        return this.httpClient.patch("http://hnlnoitinvprod01.hnsc.net/api/v1/createbitlink", {
            'bitlink_id': BitlinkId,
            'custom_bitlink': CustomBitlink,
            'bearer_token': BearerToken
        }).map(function (result) { return result; });
    };
    DashboardService.prototype.GetGroupGuid = function (BearerToken) {
        var Head = 'Bearer ' + BearerToken;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', Head);
        return this.httpClient.get('https://api-ssl.bitly.com/v4/groups', { headers: headers }).map(function (result) { return result; });
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.e {\r\n    background-color: #b9ac15;\r\n}\r\n\r\n\r\n\r\np { color: #4c4a37; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh5 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 20px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh2 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 20px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh3 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 20px; font-weight: 400; line-height: 0px; margin: 0 0 0px; }\r\nh4 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 20px; font-weight: 400; line-height: 32px; margin: 0 0 24px; } */\r\n\r\n.EdgeButton:hover{\r\n    background-color: #E0F8FF;\r\n}\r\n\r\n.EdgeButton--secondary-file:hover{\r\n    background-color: #afe0ff;\r\n}\r\n\r\n.EdgeButton--secondaryii:hover{\r\n    background-color: #E0F8FF;\r\n    color: #1da1f2;\r\n}\r\n\r\n.EdgeButton--secondaryiii:hover{\r\n    background-color: #DBFCE8;\r\n    /*color: #69C68E;*/\r\n}\r\n\r\n/*input {\r\n    -moz-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    margin-top: 12px;\r\n    width: 100%;\r\n} */\r\n\r\n.EdgeButton--secondary {\r\n    background-color: #fff;\r\n    border: 1px solid #1da1f2;\r\n    color: #1da1f2;\r\n}\r\n\r\n.EdgeButton--secondaryii {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n \r\n}\r\n\r\n.EdgeButton--secondaryiii {\r\n    background-color: #fff;\r\n    border: 1px solid #69C68E;\r\n    color: #69C68E;\r\n \r\n}\r\n\r\n.EdgeButton--secondary-file {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n}\r\n\r\n.EdgeButton--medium {\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n}\r\n\r\n/*.EdgeButton, .EdgeButton:visited {\r\n    border-radius: 100px;\r\n    box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}*/\r\n\r\n.EdgeButton {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    line-height: 25px;\r\n    padding: 8px 18px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n.EdgeButton--secondaryii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n.EdgeButton--secondaryiii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\ntextarea, div[contenteditable], .t1-select {\r\n    display: inline-block;\r\n    width: 210px;\r\n    padding: 4px;\r\n    margin: 0;\r\n    outline: 0;\r\n    background-color: #fff;\r\n    border: 1px solid #e6ecf0;\r\n    border-radius: 3px;\r\n}\r\n\r\nh1 {\r\n    display: block;\r\n    font-size: 2em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh2 {\r\n    display: block;\r\n    font-size: 1.9em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh3 {\r\n    display: block;\r\n    font-size: 1.8em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh4 {\r\n    display: block;\r\n    font-size: 1.7em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh5 {\r\n    display: block;\r\n    font-size: 1.5em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nbody.ms-windows {\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n.table-head {\r\n    background-color: #343a40;\r\n    border-color: #343a40;\r\n    color: #fff;\r\n}\r\n\r\np, label, option{\r\n    font-size: 1em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n  }\r\n\r\noption, select{\r\n    font-size: 0.9em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n  }\r\n\r\n.border-info{\r\n      /*border-color: 1px solid #1da1f2 !important; */\r\n\r\n    border-color:  #1da1f2 !important;\r\n    border-top-color:  #1da1f2 !important;\r\n    border-right-color:  #1da1f2 !important;\r\n    border-bottom-color:  #1da1f2 !important;\r\n    border-left-color:  #1da1f2 !important;\r\n  }\r\n\r\n.card-header {\r\n    padding: .75rem 1.25rem;\r\n    margin-bottom: 0;\r\n    background-color: rgba(0,0,0,.02);\r\n    border-bottom: 1px solid rgba(0,0,0,.125);\r\n\r\n    font-size: 1.1em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"privilege\">\r\n\r\n<div class=\"container\">\r\n    <br><h2>Dashboard  <span style=\"color:#1da1f2\"><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i></span> <span style=\"color:#69C68E;\"><i class=\"fa fa-pie-chart\" aria-hidden=\"true\"></i></span></h2>\r\n    <div class=\"row justify-content-center\">\r\n      <div>\r\n           <canvas id=\"bar-chart-horizontal\" width=\"1\" height=\"1\"></canvas> \r\n      </div>\r\n      <div>\r\n         <!--  <canvas id=\"doughnut-chart\" width=\"400\" height=\"400\"></canvas>-->\r\n      </div>\r\n      <div>\r\n         <!-- <canvas id=\"doughnut-chart2\" width=\"400\" height=\"400\"></canvas>  -->\r\n       </div>\r\n       \r\n      \r\n     \r\n    </div>\r\n    <div class=\"row\">\r\n      <br>\r\n      <div class=\"justify-content-center\">\r\n         \r\n        \r\n    </div>\r\n    <br>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n</div>\r\n \r\n\r\n<div class=\"row justify-content-center\">\r\n\r\n      <div class=\"card border-info mb-3 mx-2\" style=\"width: 19rem;\">\r\n          <div class=\"card-header\"><span class=\"card-header-dashboard\"> Workstations </span></div>\r\n          <div class=\"card-body text-secondary\">\r\n            <h5 class=\"card-title\"> Workstations In Store</h5>\r\n            <h2>{{ inStoreWorkstationData }}</h2>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"card border-info mb-3 mx-1\" style=\"width: 18rem;\">\r\n            <div class=\"card-header\">Workstations</div>\r\n            <div class=\"card-body text-secondary\">\r\n              <h5 class=\"card-title\"> Workstations In Use</h5>\r\n              <h2>{{ inUseWorkstationData }}</h2>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"card border-info mb-3 mx-1\" style=\"width: 17rem;\">\r\n              <div class=\"card-header\">Servers</div>\r\n              <div class=\"card-body text-secondary\">\r\n                <h5 class=\"card-title\"> Servers In Use</h5>\r\n                <h2>{{ serversInUse }}</h2>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"boolCrosscheckValidation\" class=\"card border-info mb-3 mx-1\" style=\"width: 17rem;\">\r\n                <div class=\"card-header\">CrossCheck</div>\r\n                <div class=\"card-body text-secondary\">\r\n                  <h5 class=\"card-title\"> Flush Alert!</h5>\r\n                  <h2>{{ crosscheckValidation }}</h2>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"boolCrosscheckValidation2\" class=\"card border-danger mb-3 mx-1\" style=\"width: 17rem;\">\r\n                <div class=\"card-header\"style=\"color: #f5393d\">CrossCheck</div>\r\n                <div class=\"card-body text-secondary\">\r\n                  <h5 class=\"card-title\"> Flush Alert!</h5>\r\n                  <h2 style=\"color: #f5393d\">{{ crosscheckValidation }}</h2>\r\n                </div>\r\n              </div>\r\n  \r\n\r\n  \r\n</div>\r\n\r\n\r\n<div class=\"row justify-content-center\">\r\n\r\n    <div class=\"card border-info mb-3 mx-1\" style=\" max-width: 25rem;  \">\r\n        <div class=\"card-header\">Peripherals In Storage <span style=\"color:rgb(4, 155, 255)\"><i class=\"fa fa-pie-chart\" aria-hidden=\"true\"></i></span></div>\r\n        <div class=\"card-body text-secondary\">\r\n          <h5 class=\"card-title\">Amount of periphericals In Store</h5>\r\n          <canvas id=\"doughnut-chart\" width=\"400\" height=\"400\"></canvas>\r\n        </div>\r\n      </div>\r\n\r\n    <div class=\"card border-info mb-3 mx-3\" style=\"max-width: 26rem;\">\r\n        <div class=\"card-header\">Peripherals In Use <span style=\"color:rgb(4, 155, 255)\"><i class=\"fa fa-pie-chart\" aria-hidden=\"true\"></i></span></div>\r\n        <div class=\"card-body text-secondary\">\r\n          <h5 class=\"card-title\">Amount of periphericals In Use </h5>\r\n          <canvas id=\"doughnut-chart2\" width=\"400\" height=\"400\"></canvas>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n          <div class=\"card border-info mb-3 mx-0\" style=\" max-width: 20rem;   max-height: 40rem; \">\r\n              <div class=\"card-header\">Storage Move <span style=\"color:green\"><i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i></span></div>\r\n              <div class=\"card-body text-secondary\">\r\n                <h5 class=\"card-title\">Last storage asset moves</h5>\r\n                  <ul *ngFor=\"let item of _statehistory\">\r\n                    <li>{{item.resourcename}}, {{item.assettag}}, from <b> {{item.Prev}} </b> to <b>{{item.State}}</b></li>\r\n                  </ul>\r\n                \r\n              </div>\r\n            </div>\r\n  \r\n</div>\r\n<div class=\"row justify-content-center\">\r\n\r\n  <div class=\"card border-info mb-3 mx-2\" style=\"width: 36rem;\">\r\n      <div class=\"card-header\">Lifetime</div>\r\n      <div class=\"card-body text-secondary\">\r\n        <h5 class=\"card-title\"> Workstation Lifetime (In Use) <span style=\"color:rgb(15, 146, 15)\"><i class=\"fa fa-battery-half\" aria-hidden=\"true\"></i>\r\n\r\n        </span></h5>\r\n        <h2>{{workstationLifetimeinUse}} </h2>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card border-info mb-3 mx-1\" style=\"width: 36rem;\">\r\n        <div class=\"card-header\">Lifetime</div>\r\n        <div class=\"card-body text-secondary\">\r\n          <h5 class=\"card-title\"> Workstation Lifetime (In Store) <span style=\"color:rgb(15, 146, 15)\"><i class=\"fa fa-battery-half\" aria-hidden=\"true\"></i>\r\n\r\n          </span></h5>\r\n          <h2>{{workstationLifetimeInStore}} </h2>\r\n        </div>\r\n      </div>\r\n\r\n</div>\r\n<!-- query aqui docking es el modelo a seguir -->\r\n<div class=\"row justify-content-center\">\r\n    <div class=\"card border-info mb-3 mx-2\" style=\"max-width: 100rem;\">\r\n        <div class=\"card-header\">All periphericals <span style=\"color:aqua\"><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i></span></div>\r\n        <div class=\"card-body text-secondary\">\r\n          <h5 class=\"card-title\">Assets Group by Type and State</h5>\r\n          <canvas id=\"myChart\" width=\"1105\" height=\"400\"></canvas>\r\n        </div>\r\n      </div>\r\n</div>\r\n\r\n\r\n\r\n<br>\r\n<div class=\"row justify-content-center\">\r\n  <div class=\"form-inline\">\r\n      <h3>Make your Graphic - </h3>\r\n            <div class=\"form-inline\">\r\n              <select class=\"form-control\" [(ngModel)]=\"asset\">\r\n                <option selected value=\"1\">Workstation</option>\r\n                <option value=\"2\">Printer</option>\r\n                <option value=\"3\">Router</option>\r\n                <option value=\"4\">Switch</option>\r\n                <option value=\"5\">Scanner</option>\r\n                <option value=\"6\">Projector</option>\r\n                <option value=\"7\">Keyboard</option>\r\n                <option value=\"8\">Software</option>\r\n                <option value=\"10\">Server</option>\r\n                <option value=\"13\">Storage Device</option>\r\n                <option value=\"14\">Smart Phone</option>\r\n                <option value=\"15\">Tablet</option>\r\n                <option value=\"304\">Mouse</option>\r\n                <option value=\"318\">Monitor</option>\r\n                <option value=\"311\">Docking Station</option>\r\n                <option value=\"305\">Headset</option>\r\n                <option value=\"302\">Adapter</option>\r\n                <option value=\"314\">Case</option>\r\n                <option value=\"315\">Cell Phone</option>\r\n                <option value=\"316\">Converter</option>\r\n                <option value=\"310\">Webcam</option>\r\n                <option value=\"16\">UPS</option>\r\n                <option value=\"605\">Modem</option>\r\n                <option value=\"609\">Data Show</option>\r\n              </select>-\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <select class=\"form-control\" [(ngModel)]=\"state\" name=\"beia beia\">\r\n                <option selected value=\"1\">In Store</option>\r\n                <option value=\"2\">In Use</option>\r\n              </select>-\r\n            </div>\r\n            <button type=\"button\" class=\"EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\"  (click)=\"inStoreWorkstationModels()\">Generate Graphic</button>\r\n\r\n          </div>\r\n\r\n</div><br><br>\r\n\r\n<!--<div class=\"row justify-content-center\">\r\n  <div class=\"form-inline\">\r\n      <h3> Storage Moves -From - To -</h3>\r\n         <div class=\"form-inline\">\r\n          \r\n          <input type=\"Date\" class=\"form-control\" [(ngModel)]=\"datefrom\">-\r\n          <input type=\"Date\" class=\"form-control\" [(ngModel)]=\"dateto\">-\r\n         </div>\r\n         <div class=\"form-group\">\r\n         </div>\r\n         <button type=\"button\" class=\"btn btn-info\"  (click)=\"storageMoveTable()\">Generate Table</button>\r\n\r\n       </div>\r\n\r\n</div><br> -->\r\n<br>\r\n\r\n<div class=\" row justify-content-center\" *ngIf=\"allperiphericals\">\r\n  <div class=\"\">\r\n      \r\n  </div>\r\n    \r\n</div>\r\n \r\n<div class=\"row justify-content-center\">\r\n    <div *ngIf=\"modelsbool\" class=\"card border-info mb-3 mx-2\" style=\"max-width: 100rem;\">\r\n        <div class=\"card-header\">All Models <span style=\"color:aqua\"><i class=\"fa fa-line-chart\" aria-hidden=\"true\"></i>\r\n        </span></div>\r\n        <div class=\"card-body text-secondary\">\r\n          <h5 class=\"card-title\">Workstations Group by Models</h5> \r\n          <canvas id=\"modelChart\" width=\"1105\" height=\"1000\" ></canvas>\r\n        </div>\r\n      </div>\r\n  </div>\r\n<!-- <br>\r\n  <div class=\"container\">\r\n    <h3>Storage Move from {{datefrom}} to {{dateto}}</h3><br>\r\n      <table class=\"table\">\r\n          <thead class=\"thead\">\r\n            <tr class=\"\">\r\n                <th scope=\"col\">Assettag</th>\r\n              <th scope=\"col\">Resource Name</th>\r\n              <th scope=\"col\">State</th>\r\n              <th scope=\"col\">Prev State</th>\r\n              <th scope=\"col\">Owner</th>\r\n              <th scope=\"col\">Date</th>\r\n              \r\n            </tr>\r\n          </thead>\r\n          <tbody *ngFor=\"let employ of storageMovesItems\">\r\n        \r\n            <tr class=\"select\">\r\n              <th scope=\"row\">{{employ.assettag}}</th>\r\n              <td>{{employ.resourcename}}</td>\r\n              <td>{{employ.STATE}}</td>\r\n              <td>{{employ.PREV}}</td>\r\n              <td>{{employ.NAME}}</td>\r\n              <td>{{employ.DATE}}</td>\r\n            </tr>\r\n        \r\n          </tbody>\r\n        \r\n        </table>\r\n           <div class=\"d-flex justify-content-center\">\r\n              <button class=\"btn btn-link\" *ngIf=\"showpreview\" (click)=\"preview()\">Preview</button>\r\n              <button class=\"btn btn-link\"  *ngIf=\"shownext\" (click)=\"storageMoveTable()\">Next</button>\r\n          </div>\r\n          <div class=\"d-flex justify-content-start\" *ngIf=\"shownext\">\r\n              <p>Search Result Quantity: {{count}}, cursor {{cursor}} .</p>\r\n          </div> \r\n  </div> -->\r\n\r\n</div>"

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
        this.serversInUse = 0;
        this.serversInStore = 0;
        this.boolCrosscheckValidation = false;
        this.boolCrosscheckValidation2 = false;
        this.inStoreAssetsLabels = [];
        this.inStoreAssetsData = [];
        this.inrepairAssetsData = [];
        this.inUseAssetsData = [];
        this.disrepairAssetsData = [];
        this.expiredAssetsData = [];
        this.outAssetsData = [];
        this.inStoreAssetsDataflag = [];
        this.inrepairAssetsDataflag = [];
        this.inUseAssetsDataflag = [];
        this.disrepairAssetsDataflag = [];
        this.expiredAssetsDataflag = [];
        this.outAssetsDataflag = [];
        this.flag_ = 0;
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
        //if(this.cookieService.get('user_name')){
        //this.initialDashboard();
        //}
        //else{
        // alert(this.logged);
        //this.router.navigateByUrl('/');
        //}
        //comentar los privilegios en producción y qa;
        //this.privilege = true;
        //OJO
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
                this.getCrosscheck();
            }
            else {
                window.location.href = '/login';
            }
        }
        else {
            //comentar los privilegios en producción y qa;
            // this.privilege = true;
            // this.initialDashboard();
            // this.getCrosscheck();
            //OJO descomentar el href;
            window.location.href = '/login';
        }
    };
    DashboardComponent.prototype.initialDashboard = function () {
        var _this = this;
        //------------------------------------------------
        this._dashboardService.loadInitialDashboard()
            .subscribe(function (result) {
            console.log(result);
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
                        _this.inStoreWorkstationData = item['count'] - 1;
                    }
                    if (item['displaystate'] == "In Use") {
                        _this.inUseWorkstationData = item['count'];
                    }
                }
                if (item['componenttypename'] != "Workstation" || item['componenttypename'] == "Workstation") {
                    if (item['displaystate'] == "In Use") {
                        _this.inUseAssetsData.push({ componenttypename: item['componenttypename'], value: item['count'] });
                    }
                    if (item['displaystate'] == "In Store") {
                        _this.inStoreAssetsData.push({ componenttypename: item['componenttypename'], value: item['count'] });
                    }
                    if (item['displaystate'] == "Expired") {
                        _this.expiredAssetsData.push({ componenttypename: item['componenttypename'], value: item['count'] });
                    }
                    if (item['displaystate'] == "Disrepair") {
                        _this.disrepairAssetsData.push({ componenttypename: item['componenttypename'], value: item['count'] });
                    }
                    if (item['displaystate'] == "Donation") {
                        _this.outAssetsData.push({ componenttypename: item['componenttypename'], value: item['count'] });
                    }
                    if (item['displaystate'] == "In Repair") {
                        _this.inrepairAssetsData.push({ componenttypename: item['componenttypename'], value: item['count'] });
                    }
                }
            } //end for
            _this.validatePeriphericalStates();
            _this.inStorePeriphericalChart();
        });
        this._dashboardService.searchLifetime()
            .subscribe(function (res) {
            //console.log(res);
            _this.workstationLifetimeinUse = res['query_in_use'];
            _this.workstationLifetimeInStore = res['query_in_store'];
        });
        this._dashboardService.serversCount()
            .subscribe(function (res) {
            var x = res['message'];
            //console.log(x[1]);
            for (var _a = 0, x_1 = x; _a < x_1.length; _a++) {
                var item = x_1[_a];
                //console.log(item['count']);
                if (item['displaystate'] == "In Store") {
                    _this.serversInStore = item['count'];
                }
                if (item['displaystate'] == "In Use") {
                    _this.serversInUse = item['count'];
                }
            }
        });
    };
    DashboardComponent.prototype.getCrosscheck = function () {
        var _this = this;
        this._dashboardService.crossCheck()
            .subscribe(function (res) {
            var x = res['message'];
            var y = x[0];
            console.table(y['diff']);
            if (y['diff'] == '1') {
                _this.crosscheckValidation = 'CrossCheck up to Date';
                _this.boolCrosscheckValidation = true;
            }
            else {
                _this.crosscheckValidation = 'UPDATE CROSSCHECK';
                _this.boolCrosscheckValidation2 = true;
            }
        });
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
        var myChart = new __WEBPACK_IMPORTED_MODULE_1_chart_js__["Chart"](document.getElementById('myChart'), {
            type: 'bar',
            data: {
                labels: ["Docking Station", "Headset", "Keyboard", "Monitor", "Mouse", "Ups", "Workstations"],
                datasets: [
                    {
                        label: "In Store",
                        backgroundColor: "#00334d",
                        data: this.inStoreAssetsDataflag
                    }, {
                        label: "In Use",
                        backgroundColor: "#006699",
                        data: this.inUseAssetsDataflag
                    },
                    {
                        label: "In Repair",
                        backgroundColor: "#0099e6",
                        data: this.inrepairAssetsDataflag
                    }, {
                        label: "Disrepair",
                        backgroundColor: "#33bbff",
                        data: this.disrepairAssetsDataflag
                    },
                    {
                        label: "Expired",
                        backgroundColor: "#80d4ff",
                        data: this.expiredAssetsDataflag
                    }, {
                        label: "Donation",
                        backgroundColor: "#cceeff",
                        data: this.outAssetsDataflag
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
                        label: "Quantity",
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
    DashboardComponent.prototype.validatePeriphericalStates = function () {
        var xExpireDocking = 0;
        var xExpireheadsets = 0;
        var xExpireKeyboard = 0;
        var xExpireMonitor = 0;
        var xExpireMouse = 0;
        var xExpireUPS = 0;
        var xExpireWorkstation = 0;
        var flag = 0;
        for (var _a = 0, _b = this.expiredAssetsData; _a < _b.length; _a++) {
            var item = _b[_a];
            if (item['componenttypename'] == 'Docking Station') {
                xExpireDocking = item['value'];
            }
            if (item['componenttypename'] == 'Headset') {
                xExpireheadsets = item['value'];
            }
            if (item['componenttypename'] == 'Keyboard') {
                xExpireKeyboard = item['value'];
            }
            if (item['componenttypename'] == 'Monitor') {
                xExpireMonitor = item['value'];
            }
            if (item['componenttypename'] == 'Mouse') {
                xExpireMouse = item['value'];
            }
            if (item['componenttypename'] == 'UPS') {
                xExpireUPS = item['value'];
            }
            if (item['componenttypename'] == 'Workstation') {
                xExpireWorkstation = item['value'];
            }
        }
        //console.log('###### Expire Array ####');
        //console.log(xExpireDocking,xExpireheadsets, xExpireKeyboard, xExpireMonitor, xExpireMouse, xExpireUPS, xExpireWorkstation )
        this.expiredAssetsDataflag.push(xExpireDocking, xExpireheadsets, xExpireKeyboard, xExpireMonitor, xExpireMouse, xExpireUPS, xExpireWorkstation);
        var xInStoreDocking = 0;
        var xInStoreheadsets = 0;
        var xInStoreKeyboard = 0;
        var xInStoreMonitor = 0;
        var xInStoreMouse = 0;
        var xInStoreUPS = 0;
        var xInStoreWorkstation = 0;
        for (var _c = 0, _d = this.inStoreAssetsData; _c < _d.length; _c++) {
            var item = _d[_c];
            if (item['componenttypename'] == 'Docking Station') {
                xInStoreDocking = item['value'];
            }
            if (item['componenttypename'] == 'Headset') {
                xInStoreheadsets = item['value'];
            }
            if (item['componenttypename'] == 'Keyboard') {
                xInStoreKeyboard = item['value'];
            }
            if (item['componenttypename'] == 'Monitor') {
                xInStoreMonitor = item['value'];
            }
            if (item['componenttypename'] == 'Mouse') {
                xInStoreMouse = item['value'];
            }
            if (item['componenttypename'] == 'UPS') {
                xInStoreUPS = item['value'];
            }
            if (item['componenttypename'] == 'Workstation') {
                xInStoreWorkstation = item['value'];
            }
        }
        //console.log('###### InStore Array ####');
        //console.log(xInStoreDocking,xInStoreheadsets, xInStoreKeyboard, xInStoreMonitor, xInStoreMouse, xInStoreUPS, xInStoreWorkstation )
        this.inStoreAssetsDataflag.push(xInStoreDocking, xInStoreheadsets, xInStoreKeyboard, xInStoreMonitor, xInStoreMouse, xInStoreUPS, xInStoreWorkstation);
        var xInUseDocking = 0;
        var xInUseheadsets = 0;
        var xInUseKeyboard = 0;
        var xInUseMonitor = 0;
        var xInUseMouse = 0;
        var xInUseUPS = 0;
        var xInUseWorkstation = 0;
        for (var _e = 0, _f = this.inUseAssetsData; _e < _f.length; _e++) {
            var item = _f[_e];
            if (item['componenttypename'] == 'Docking Station') {
                xInUseDocking = item['value'];
            }
            if (item['componenttypename'] == 'Headset') {
                xInUseheadsets = item['value'];
            }
            if (item['componenttypename'] == 'Keyboard') {
                xInUseKeyboard = item['value'];
            }
            if (item['componenttypename'] == 'Monitor') {
                xInUseMonitor = item['value'];
            }
            if (item['componenttypename'] == 'Mouse') {
                xInUseMouse = item['value'];
            }
            if (item['componenttypename'] == 'UPS') {
                xInUseUPS = item['value'];
            }
            if (item['componenttypename'] == 'Workstation') {
                xInUseWorkstation = item['value'];
            }
        }
        //console.log('###### InUse Array ####');
        //console.log(xInUseDocking,xInUseheadsets, xInUseKeyboard, xInUseMonitor, xInUseMouse, xInUseUPS, xInUseWorkstation )
        this.inUseAssetsDataflag.push(xInUseDocking, xInUseheadsets, xInUseKeyboard, xInUseMonitor, xInUseMouse, xInUseUPS, xInUseWorkstation);
        var xDisrepairDocking = 0;
        var xDisrepairheadsets = 0;
        var xDisrepairKeyboard = 0;
        var xDisrepairMonitor = 0;
        var xDisrepairMouse = 0;
        var xDisrepairUPS = 0;
        var xDisrepairWorkstation = 0;
        for (var _g = 0, _h = this.disrepairAssetsData; _g < _h.length; _g++) {
            var item = _h[_g];
            if (item['componenttypename'] == 'Docking Station') {
                xDisrepairDocking = item['value'];
            }
            if (item['componenttypename'] == 'Headset') {
                xDisrepairheadsets = item['value'];
            }
            if (item['componenttypename'] == 'Keyboard') {
                xDisrepairKeyboard = item['value'];
            }
            if (item['componenttypename'] == 'Monitor') {
                xDisrepairMonitor = item['value'];
            }
            if (item['componenttypename'] == 'Mouse') {
                xDisrepairMouse = item['value'];
            }
            if (item['componenttypename'] == 'UPS') {
                xDisrepairUPS = item['value'];
            }
            if (item['componenttypename'] == 'Workstation') {
                xDisrepairWorkstation = item['value'];
            }
        }
        //console.log('###### Disrepair Array ####');
        //console.log(xDisrepairDocking,xDisrepairheadsets, xDisrepairKeyboard, xDisrepairMonitor, xDisrepairMouse, xDisrepairUPS, xDisrepairWorkstation )
        this.disrepairAssetsDataflag.push(xDisrepairDocking, xDisrepairheadsets, xDisrepairKeyboard, xDisrepairMonitor, xDisrepairMouse, xDisrepairUPS, xDisrepairWorkstation);
        var xOutDocking = 0;
        var xOutheadsets = 0;
        var xOutKeyboard = 0;
        var xOutMonitor = 0;
        var xOutMouse = 0;
        var xOutUPS = 0;
        var xOutWorkstation = 0;
        for (var _j = 0, _k = this.outAssetsData; _j < _k.length; _j++) {
            var item = _k[_j];
            if (item['componenttypename'] == 'Docking Station') {
                xOutDocking = item['value'];
            }
            if (item['componenttypename'] == 'Headset') {
                xOutheadsets = item['value'];
            }
            if (item['componenttypename'] == 'Keyboard') {
                xOutKeyboard = item['value'];
            }
            if (item['componenttypename'] == 'Monitor') {
                xOutMonitor = item['value'];
            }
            if (item['componenttypename'] == 'Mouse') {
                xOutMouse = item['value'];
            }
            if (item['componenttypename'] == 'UPS') {
                xOutUPS = item['value'];
            }
            if (item['componenttypename'] == 'Workstation') {
                xOutWorkstation = item['value'];
            }
        }
        //console.log('###### Out Array ####');
        //console.log(xOutDocking,xOutheadsets, xOutKeyboard, xOutMonitor, xOutMouse, xOutUPS, xOutWorkstation )
        this.outAssetsDataflag.push(xOutDocking, xOutheadsets, xOutKeyboard, xOutMonitor, xOutMouse, xOutUPS, xOutWorkstation);
        var xRepairDocking = 0;
        var xRepairheadsets = 0;
        var xRepairKeyboard = 0;
        var xRepairMonitor = 0;
        var xRepairMouse = 0;
        var xRepairUPS = 0;
        var xRepairWorkstation = 0;
        for (var _l = 0, _m = this.inrepairAssetsData; _l < _m.length; _l++) {
            var item = _m[_l];
            if (item['componenttypename'] == 'Docking Station') {
                xRepairDocking = item['value'];
            }
            if (item['componenttypename'] == 'Headset') {
                xRepairheadsets = item['value'];
            }
            if (item['componenttypename'] == 'Keyboard') {
                xRepairKeyboard = item['value'];
            }
            if (item['componenttypename'] == 'Monitor') {
                xRepairMonitor = item['value'];
            }
            if (item['componenttypename'] == 'Mouse') {
                xRepairMouse = item['value'];
            }
            if (item['componenttypename'] == 'UPS') {
                xRepairUPS = item['value'];
            }
            if (item['componenttypename'] == 'Workstation') {
                xRepairWorkstation = item['value'];
            }
        }
        //console.log('###### Repair Array ####');
        //console.log(xRepairDocking,xRepairheadsets, xRepairKeyboard, xRepairMonitor, xRepairMouse, xRepairUPS, xRepairWorkstation )
        this.inrepairAssetsDataflag.push(xRepairDocking, xRepairheadsets, xRepairKeyboard, xRepairMonitor, xRepairMouse, xRepairUPS, xRepairWorkstation);
    }; //end Function
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__["a" /* CookieService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer{\r\n  \r\n    position:relative;\r\n    left:0px;\r\n    bottom:0px;\r\n    height:15;\r\n    width:100%;\r\n    padding: 5px;\r\n}\r\n\r\n.element a{\r\n    color: #f8f4f4\r\n}\r\n\r\n.element {\r\n    color: #f8f4f4\r\n}\r\n\r\nh1 { color: #7c795d; font-family: 'Trocchi', serif; font-size: 45px; font-weight: normal; line-height: 48px; margin: 0; }\r\n\r\np { color: #4c4a37; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh5 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh2 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh3 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh4 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br><br><br><br><br><br><br><br>\r\n<div class=\"footer\" style=\"heigth: 5px\">\r\n  <footer class=\"mainfooter\" role=\"contentinfo\">\r\n    <!-- <div class=\"footer-top p-y-2\">\r\n      <div class=\"container-fluid\">\r\n        \r\n      </div>\r\n    </div>\r\n    <div class=\"footer-middle\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3 col-sm-6\">\r\n         \r\n          <div class=\"footer-pad\">\r\n            <h4 class=\"element\">Direccion</h4>\r\n            <address>\r\n        <ul class=\"list-unstyled\">\r\n          <li class=\"element\">\r\n           Guanacaste<br>\r\n            Calle 6152<br>\r\n\r\n        </ul>\r\n      </address>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-6\">\r\n          \r\n          <div class=\"footer-pad\">\r\n            <h4 class=\"element\" >Servicios</h4>\r\n            <ul class=\"list-unstyled\">\r\n              <li class=\"element\"><a routerLink=\"#\"></a></li>\r\n              <li class=\"element\"><a routerLink=\"#\">centro de pago</a></li>\r\n              <li class=\"element\"><a routerLink=\"#\">Directorio de contacto</a></li>\r\n   \r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-6\">\r\n          \r\n          <div class=\"footer-pad\">\r\n            <h4 class=\"element\">Informacion del Sitio</h4>\r\n            <ul class=\"list-unstyled\">\r\n              <li class=\"element\"><a routerLink=\"#\">Tutorial del Sitio</a></li>\r\n              <li class=\"element\"><a routerLink=\"#\">Accesibilidad</a></li>\r\n\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-6\">\r\n          \r\n          <div class=\"footer-pad\">\r\n            <h4 class=\"element\" >Departamentos </h4>\r\n            <ul class=\"list-unstyled\">\r\n              <li class=\"element\"><a routerLink=\"#\">Reacreaciones</a></li>\r\n              <li class=\"element\"><a routerLink=\"#\">Trabajadores publicos</a></li>\r\n\r\n              <li class=\"element\">\r\n                <a routerLink=\"#\"></a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </div> -->\r\n    <div class=\"footer-bottom\" style=\"height:22px;\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-8\">\r\n            <!--Footer Bottom-->\r\n            <p class=\"text-xs-center element\" style=\"color:black\">&copy; Copyright 2018 Laureate Education</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n    \r\n</div> "

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

/***/ "../../../../../src/app/license/license-list/license-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/license/license-list/license-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1 class=\"my-4\">\r\n    License List\r\n    <span style=\"color:purple;\">\r\n      <i aria-hidden=\"true\" class=\"fa fa-list-alt\"></i>\r\n    </span>\r\n  </h1>\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"createMode(); openModal(createModal)\">\r\n    Create License\r\n  </button>\r\n  <hr>\r\n  <div>\r\n    <table class=\"table table-hover table-bordered\">\r\n      <thead class=\"table-head\">\r\n        <tr class=\"\">\r\n          <th scope=\"col\">Product Name</th>\r\n          <th scope=\"col\">Licences</th>\r\n          <th scope=\"col\">Product Version</th>\r\n          <th scope=\"col\">Max Users</th>\r\n          <th scope=\"col\">Enable</th>\r\n          <th scope=\"col\">Actions</th>\r\n        </tr>\r\n      </thead>\r\n\r\n      <tbody>\r\n        <tr class=\"select\" *ngFor=\"let item of licenseList\">\r\n          <td [innerHtml]=\"item.name_product\"></td>\r\n          <td [innerHtml]=\"item.licences\"></td>\r\n          <td [innerHtml]=\"item.version_product\"></td>\r\n          <td [innerHtml]=\"item.max_users\"></td>\r\n          <td [innerHtml]=\"item.enable === 1 ? 'True' : 'False'\"></td>\r\n          <td>\r\n            <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\"\r\n              (click)=\"selectLicense(item); editMode(); openModal(createModal)\">Edit</button>\r\n            <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\"\r\n              (click)=\"openModal(showMoreModal); selectLicense(item)\">Show More</button>\r\n            <a class=\"btn btn-sm btn-success\" routerLink=\"{{'/license-workstations/' + item.id_license}}\">\r\n              Assign</a>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <button class=\"btn btn-link\" (click)=\"previous()\" *ngIf=\"offset > 0\">Previous</button>\r\n    <button class=\"btn btn-link\" (click)=\"next()\" *ngIf=\"moreResults\">Next</button>\r\n  </div>\r\n</div>\r\n\r\n<!-- Create Modal -->\r\n<ng-template #createModal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\" *ngIf=\"!isEditing\">Create License</h4>\r\n    <h4 class=\"modal-title pull-left\" *ngIf=\"isEditing\">Edit License</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form [formGroup]=\"licenseForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"form-group\">\r\n        <label>Product Name</label>\r\n        <input type=\"text\" formControlName=\"productName\" class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && controls.productName.errors }\" />\r\n        <div *ngIf=\"submitted && controls.productName.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"controls.productName.errors.required\">Product name required</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label>Licenses</label>\r\n        <input type=\"text\" formControlName=\"licenses\" class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && controls.licenses.errors }\" />\r\n        <div *ngIf=\"submitted && controls.licenses.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"controls.licenses.errors.required\">Licenses required</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label>Vendor</label>\r\n        <input type=\"text\" formControlName=\"vendor\" class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && controls.vendor.errors }\" />\r\n        <div *ngIf=\"submitted && controls.vendor.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"controls.vendor.errors.required\">Vendor required</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label>Adquisition Date</label>\r\n        <input type=\"date\" formControlName=\"adquisitionDate\" class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && controls.adquisitionDate.errors }\" />\r\n        <div *ngIf=\"submitted && controls.adquisitionDate.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"controls.adquisitionDate.errors.required\">Adquisition date required</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label>Expiration Date</label>\r\n        <input type=\"date\" formControlName=\"expirationDate\" class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && controls.expirationDate.errors }\" />\r\n        <div *ngIf=\"submitted && controls.expirationDate.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"controls.expirationDate.errors.required\">Expiration date required</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label>Product Version</label>\r\n        <input type=\"number\" formControlName=\"productVersion\" class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && controls.productVersion.errors }\" />\r\n        <div *ngIf=\"submitted && controls.productVersion.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"controls.productVersion.errors.required\">Product version required</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label>Max Users</label>\r\n        <input type=\"number\" formControlName=\"maxUsers\" class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && controls.maxUsers.errors }\" />\r\n        <div *ngIf=\"submitted && controls.maxUsers.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"controls.maxUsers.errors.required\">Max users required</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label>Accountable</label>\r\n        <input type=\"text\" formControlName=\"accountable\" class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && controls.accountable.errors }\" />\r\n        <div *ngIf=\"submitted && controls.accountable.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"controls.accountable.errors.required\">Accountable required</div>\r\n          <div *ngIf=\"controls.accountable.errors.email\">Accountable have to be an email</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label>Price</label>\r\n        <input type=\"number\" formControlName=\"price\" class=\"form-control\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && controls.price.errors }\" />\r\n        <div *ngIf=\"submitted && controls.price.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"controls.price.errors.required\">Price required</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label>Status</label>\r\n        <select class=\"form-control\" formControlName=\"enable\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && controls.enable.errors }\">\r\n          <option value=\"\">Seleccionar</option>\r\n          <option [value]=\"1\">Enable</option>\r\n          <option [value]=\"0\">Disable</option>\r\n        </select>\r\n        <div *ngIf=\"submitted && controls.enable.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"controls.enable.errors.required\">Por favor, Selecciona el status</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Save</button>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- Show More Modal -->\r\n<ng-template #showMoreModal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Details:</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <table class=\"table table-hover table-bordered\">\r\n      <thead class=\"table-head\">\r\n        <tr class=\"\">\r\n          <th scope=\"col\">Field</th>\r\n          <th scope=\"col\">Value</th>\r\n        </tr>\r\n      </thead>\r\n\r\n      <tbody>\r\n        <tr class=\"select\">\r\n          <td [innerHtml]=\"'Name Product'\"></td>\r\n          <td [innerHtml]=\"license.name_product\"></td>\r\n        </tr>\r\n\r\n        <tr class=\"select\">\r\n          <td [innerHtml]=\"'License'\"></td>\r\n          <td [innerHtml]=\"license.licences\"></td>\r\n        </tr>\r\n\r\n        <tr class=\"select\">\r\n          <td [innerHtml]=\"'Vendor'\"></td>\r\n          <td [innerHtml]=\"license.vendor\"></td>\r\n        </tr>\r\n\r\n        <tr class=\"select\">\r\n          <td [innerHtml]=\"'Adquisition Date'\"></td>\r\n          <td [innerHtml]=\"license.adquisition_date\"></td>\r\n        </tr>\r\n\r\n        <tr class=\"select\">\r\n          <td [innerHtml]=\"'Date Expiration'\"></td>\r\n          <td [innerHtml]=\"license.date_expiration\"></td>\r\n        </tr>\r\n\r\n        <tr class=\"select\">\r\n          <td [innerHtml]=\"'Version Product'\"></td>\r\n          <td [innerHtml]=\"license.version_product\"></td>\r\n        </tr>\r\n\r\n        <tr class=\"select\">\r\n          <td [innerHtml]=\"'Max users'\"></td>\r\n          <td [innerHtml]=\"license.max_users\"></td>\r\n        </tr>\r\n\r\n        <tr class=\"select\">\r\n          <td [innerHtml]=\"'Accountable'\"></td>\r\n          <td [innerHtml]=\"license.accountable\"></td>\r\n        </tr>\r\n\r\n        <tr class=\"select\">\r\n          <td [innerHtml]=\"'Price ($)'\"></td>\r\n          <td [innerHtml]=\"license.price\"></td>\r\n        </tr>\r\n\r\n        <tr class=\"select\">\r\n          <td [innerHtml]=\"'Enable'\"></td>\r\n          <td [innerHtml]=\"license.enable\"></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/license/license-list/license-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LicenseListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_license_service__ = __webpack_require__("../../../../../src/app/license/services/license.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
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






var LicenseListComponent = /** @class */ (function () {
    function LicenseListComponent(licenseService, modalService, cookieService, formBuilder) {
        this.licenseService = licenseService;
        this.modalService = modalService;
        this.cookieService = cookieService;
        this.formBuilder = formBuilder;
        this.privilege = false;
    }
    LicenseListComponent.prototype.ngOnInit = function () {
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
            //this.privilege = true;
            window.location.href = '/login';
        }
        if (this.privilege) {
            this.licenseList = [];
            this.submitted = false;
            this.isEditing = false;
            this.moreResults = true;
            this.limit = 10;
            this.offset = 0;
            this.loadLicenseList();
        }
        else {
            window.location.href = '/login';
        }
    };
    LicenseListComponent.prototype.loadLicenseList = function () {
        var _this = this;
        this.licenseService.getList({
            limit: this.limit,
            offset: this.offset
        }).subscribe(function (data) {
            var newData = data['data'];
            if (newData.length === _this.limit) {
                _this.licenseList = newData;
                _this.moreResults = true;
            }
            if (newData.length < _this.limit && newData.length > 0) {
                _this.licenseList = newData;
                _this.moreResults = false;
            }
            if (newData.length === 0) {
                _this.moreResults = false;
            }
        });
    };
    LicenseListComponent.prototype.createMode = function () {
        this.isEditing = false;
        this.licenseForm = this.formBuilder.group({
            productName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            licenses: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            vendor: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            adquisitionDate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            expirationDate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            productVersion: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            maxUsers: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            accountable: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].email]],
            price: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            enable: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
        });
    };
    LicenseListComponent.prototype.delete = function (licenseId) {
        var _this = this;
        this.licenseService.delete(licenseId).subscribe(function (data) {
            _this.licenseList = _this.licenseList.filter(function (element) {
                return element['id_license'] !== licenseId;
            });
        });
    };
    LicenseListComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    LicenseListComponent.prototype.selectLicense = function (license) {
        this.license = license;
    };
    LicenseListComponent.prototype.editMode = function () {
        this.isEditing = true;
        this.licenseForm = this.formBuilder.group({
            productName: [this.license['name_product'], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            licenses: [this.license['licences'], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            vendor: [this.license['vendor'], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            adquisitionDate: [this.license['adquisition_date'], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            expirationDate: [this.license['date_expiration'], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            productVersion: [this.license['version_product'], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            maxUsers: [this.license['max_users'], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            accountable: [this.license['accountable'], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].email]],
            price: [this.license['price'], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            enable: [this.license['enable'], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
        });
    };
    Object.defineProperty(LicenseListComponent.prototype, "controls", {
        get: function () { return this.licenseForm.controls; },
        enumerable: true,
        configurable: true
    });
    LicenseListComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.licenseForm.invalid) {
            return;
        }
        var params = {
            'name_product': this.licenseForm.value.productName,
            'licences': this.licenseForm.value.licenses,
            'vendor': this.licenseForm.value.vendor,
            'adquisition_date': this.licenseForm.value.adquisitionDate,
            'date_expiration': this.licenseForm.value.expirationDate,
            'version_product': this.licenseForm.value.productVersion,
            'max_users': this.licenseForm.value.maxUsers,
            'accountable': this.licenseForm.value.accountable,
            'price': this.licenseForm.value.price,
            'enable': this.licenseForm.value.enable
        };
        // Edit License
        if (this.isEditing) {
            this.licenseService.update(this.license['id_license'], params).subscribe(function (resp) {
                var newData = resp['data'];
                _this.licenseList = _this.licenseList.map(function (element) {
                    if (element.id_license === newData['id_license']) {
                        return newData;
                    }
                    else {
                        return element;
                    }
                });
                _this.modalRef.hide();
            });
            // Create License
        }
        else {
            this.licenseService.create(params).subscribe(function (resp) {
                _this.licenseList.unshift(resp['data']);
                _this.modalRef.hide();
            });
        }
    };
    LicenseListComponent.prototype.previous = function () {
        this.offset = this.offset - this.limit;
        this.loadLicenseList();
    };
    LicenseListComponent.prototype.next = function () {
        this.offset = this.offset + this.limit;
        this.loadLicenseList();
    };
    LicenseListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-license-list',
            template: __webpack_require__("../../../../../src/app/license/license-list/license-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/license/license-list/license-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_license_service__["a" /* LicenseService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], LicenseListComponent);
    return LicenseListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/license/license-relationship/license-relationship.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/license/license-relationship/license-relationship.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div>\r\n        <h2 class=\"my-4\">\r\n            License Summary\r\n        </h2>\r\n        <div class=\"row\" *ngIf=\"license\">\r\n            <div class=\"col-md-3\">\r\n                Product Name: {{ license['name_product'] }}\r\n            </div>\r\n\r\n            <div class=\"col-md-3\">\r\n                Product Version: {{ license['version_product'] }}\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n                Licences: {{ license['licences'] }}\r\n            </div>\r\n\r\n            <div class=\"col-md-2\">\r\n                Max Users: {{ license['max_users'] }}\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                Assigned to:\r\n                <p *ngIf=\"!users || users.length === 0\">Nobody</p>\r\n                <ul *ngIf=\"users?.length > 0\">\r\n                    <li *ngFor=\"let item of users\">\r\n                        {{'user: ' + item['usuario'] + ' tag: ' + item['tag']}}\r\n                        <span><button class=\"btn btn-link\" (click)=\"remove(item)\">Remove</button></span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <h2 class=\"my-4\">\r\n        Assign License\r\n    </h2>\r\n\r\n    <div>\r\n        <div *ngIf=\"employee\">\r\n            <h5>Selected Employee:</h5>\r\n            <p *ngIf=\"employee\" [innerHtml]=\"employee['EMAIL']\"></p>\r\n            <button *ngIf=\"employee\" type=\"button\" class=\"btn btn-sm\"\r\n                (click)=\"collapseTag.hide(); collapseEmployee.show()\" [attr.aria-expanded]=\"!isEmployeeCollapsed\"\r\n                aria-controls=\"collapseEmployee\">Change Employee\r\n            </button>\r\n\r\n            <hr>\r\n        </div>\r\n\r\n        <div *ngIf=\"tag\">\r\n            <h5>Selected Tag:</h5>\r\n            <p *ngIf=\"tag\" [innerHtml]=\"tag['assettag']\"></p>\r\n            <button *ngIf=\"tag\" type=\"button\" class=\"btn btn-sm\" (click)=\"collapseEmployee.hide(); collapseTag.show()\"\r\n                [attr.aria-expanded]=\"!isTagCollapsed\" aria-controls=\"collapseTag\">Change Tag\r\n            </button>\r\n\r\n            <hr>\r\n        </div>\r\n\r\n        <button *ngIf=\"employee && tag && validate()\" type=\"button\" class=\"btn btn-sm btn-success\"\r\n            (click)=\"save(); collapseEmployee.show()\">Save\r\n        </button>\r\n\r\n        <p *ngIf=\"employee && tag && !validate()\">Usear and tag already assigned</p>\r\n    </div>\r\n\r\n    <div *ngIf=\"license && users?.length >= license['max_users']\">\r\n        <p>Maximum users limit reached</p>\r\n    </div>\r\n\r\n    <div [hidden]=\"!(license && users?.length < license['max_users'])\">\r\n        <div id=\"collapseEmployee\" #collapseEmployee=\"bs-collapse\" [collapse]=\"isEmployeeCollapsed\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                    <h4 class=\"my-4\">\r\n                        Select Employee\r\n                    </h4>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <form class=\"my-4\" [formGroup]=\"searchEmployeeForm\">\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"search\">\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n\r\n            <div>\r\n                <table class=\"table table-hover table-bordered\">\r\n                    <thead class=\"table-head\">\r\n                        <tr class=\"\">\r\n                            <th scope=\"col\">Employee id</th>\r\n                            <th scope=\"col\">Email</th>\r\n                            <th scope=\"col\">First Name</th>\r\n                            <th scope=\"col\">Last Name</th>\r\n                            <th scope=\"col\">Actions</th>\r\n                        </tr>\r\n                    </thead>\r\n\r\n                    <tbody>\r\n                        <tr class=\"select\" *ngFor=\"let item of employees\">\r\n                            <td [innerHtml]=\"item['EMPLOYEE_ID']\"></td>\r\n                            <td [innerHtml]=\"item['EMAIL']\"></td>\r\n                            <td [innerHtml]=\"item['FIRST_NAME']\"></td>\r\n                            <td [innerHtml]=\"item['LAST_NAME']\"></td>\r\n                            <td>\r\n                                <button\r\n                                    class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\"\r\n                                    type=\"button\"\r\n                                    (click)=\"selectEmployee(item); collapseEmployee.hide(); collapseTag.show();\"\r\n                                    [attr.aria-expanded]=\"!isEmployeeCollapsed\" aria-controls=\"collapseEmployee\">\r\n                                    Select\r\n                                </button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n\r\n                <button class=\"btn btn-link\" (click)=\"previousEmployees()\" *ngIf=\"currentPage > 0\">Previous</button>\r\n                <button class=\"btn btn-link\" (click)=\"nextEmployees()\" *ngIf=\"moreResultsEmployees\">Next</button>\r\n            </div>\r\n        </div>\r\n\r\n        <div id=\"collapseTag\" #collapseTag=\"bs-collapse\" [collapse]=\"isTagCollapsed\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                    <h4 class=\"my-4\">\r\n                        Select Tag\r\n                    </h4>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <form class=\"my-4\" [formGroup]=\"tagsForm\">\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"search\">\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n\r\n            <div>\r\n                <table class=\"table table-hover table-bordered\">\r\n                    <thead class=\"table-head\">\r\n                        <tr class=\"\">\r\n                            <th scope=\"col\">Tag</th>\r\n                            <th scope=\"col\">Component Name</th>\r\n                            <th scope=\"col\">Resource Name</th>\r\n                            <th scope=\"col\">Serial LNO</th>\r\n                            <th scope=\"col\">Actions</th>\r\n                        </tr>\r\n                    </thead>\r\n\r\n                    <tbody>\r\n                        <tr class=\"select\" *ngFor=\"let item of tags\">\r\n                            <td [innerHtml]=\"item['assettag']\"></td>\r\n                            <td [innerHtml]=\"item['componentname']\"></td>\r\n                            <td [innerHtml]=\"item['resourcename']\"></td>\r\n                            <td [innerHtml]=\"item['serialno']\"></td>\r\n                            <td>\r\n                                <button\r\n                                    class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\"\r\n                                    type=\"button\" (click)=\"selectTag(item); collapseTag.hide()\"\r\n                                    [attr.aria-expanded]=\"!isTagCollapsed\" aria-controls=\"collapseTag\">\r\n                                    Select\r\n                                </button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n\r\n                <button class=\"btn btn-link\" (click)=\"previousTags()\" *ngIf=\"tagsOffset > 0\">Previous</button>\r\n                <button class=\"btn btn-link\" (click)=\"nextTags()\" *ngIf=\"tagsMoreResults\">Next</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/license/license-relationship/license-relationship.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LicenseRelationshipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_signature_sheet_search_employee_service__ = __webpack_require__("../../../../../src/app/create-signature-sheet/search-employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_license_service__ = __webpack_require__("../../../../../src/app/license/services/license.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jwt_decode__ = __webpack_require__("../../../../jwt-decode/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jwt_decode__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LicenseRelationshipComponent = /** @class */ (function () {
    function LicenseRelationshipComponent(licenseService, searchEmployeeService, route, cookieService, formBuilder) {
        this.licenseService = licenseService;
        this.searchEmployeeService = searchEmployeeService;
        this.route = route;
        this.cookieService = cookieService;
        this.formBuilder = formBuilder;
        this.privilege = false;
    }
    LicenseRelationshipComponent.prototype.ngOnInit = function () {
        var _this = this;
        var val = this.cookieService.get("token");
        if (val) {
            var djtw = __WEBPACK_IMPORTED_MODULE_7_jwt_decode__(val);
            var identity = djtw['identity'];
            for (var _i = 0; _i < identity.length; _i++) {
                if (identity[_i]['privilege'] == 'pdf') {
                    this.privilege = true;
                }
            }
        }
        else {
            //this.privilege = true;
            window.location.href = '/login';
        }
        if (this.privilege) {
            this.licenseId = this.route.snapshot.params['licenseId'];
            this.isEmployeeCollapsed = false;
            this.isTagCollapsed = true;
            this.moreResultsEmployees = true;
            this.currentPage = 0;
            this.searchEmployee = '';
            this.tagsLimit = 10;
            this.tagsOffset = 0;
            this.tagsSearch = '';
            this.tagsMoreResults = true;
            this.licenseService.get(this.licenseId).subscribe(function (data) {
                _this.license = data['data'];
            });
            this.licenseService.getUsers(this.licenseId).subscribe(function (data) {
                _this.users = data['data'];
            });
            this.loadEmployeesData();
            this.loadTagsData();
            this.searchEmployeeForm = this.formBuilder.group({
                search: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
            });
            this.searchEmployeeForm.controls['search'].valueChanges.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* debounceTime */])(500), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* distinctUntilChanged */])()).subscribe(function (value) {
                _this.searchEmployee = value;
                _this.currentPage = 0;
                _this.loadEmployeesData();
            });
            this.tagsForm = this.formBuilder.group({
                search: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
            });
            this.tagsForm.controls['search'].valueChanges.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* debounceTime */])(500), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* distinctUntilChanged */])()).subscribe(function (value) {
                _this.tagsSearch = value;
                _this.tagsOffset = 0;
                _this.loadTagsData();
            });
        }
        else {
            window.location.href = '/login';
        }
        //-------------------------------
    };
    LicenseRelationshipComponent.prototype.loadEmployeesData = function () {
        var _this = this;
        this.searchEmployeeService.searchEmployees(this.currentPage, this.searchEmployee).subscribe(function (data) {
            _this.moreResultsEmployees = data['meta']['more'];
            _this.employees = data['query'];
        });
    };
    LicenseRelationshipComponent.prototype.loadTagsData = function () {
        var _this = this;
        this.licenseService.searchAssetProduct({
            limit: this.tagsLimit,
            offset: this.tagsOffset,
            text: this.tagsSearch
        }).subscribe(function (data) {
            _this.tagsMoreResults = data['meta']['more'];
            _this.tags = data['query'];
        });
    };
    LicenseRelationshipComponent.prototype.selectEmployee = function (employee) {
        this.employee = employee;
    };
    LicenseRelationshipComponent.prototype.selectTag = function (tag) {
        this.tag = tag;
    };
    LicenseRelationshipComponent.prototype.previousEmployees = function () {
        this.currentPage = this.currentPage - 10;
        this.loadEmployeesData();
    };
    LicenseRelationshipComponent.prototype.nextEmployees = function () {
        this.currentPage = this.currentPage + 10;
        this.loadEmployeesData();
    };
    LicenseRelationshipComponent.prototype.previousTags = function () {
        this.tagsOffset = this.tagsOffset - this.tagsLimit;
        this.loadTagsData();
    };
    LicenseRelationshipComponent.prototype.nextTags = function () {
        this.tagsOffset = this.tagsOffset + this.tagsLimit;
        this.loadTagsData();
    };
    LicenseRelationshipComponent.prototype.save = function () {
        var _this = this;
        if (!this.employee['EMAIL'] || !this.tag['assettag']) {
            alert('Not saved. Selected invalid user or tag');
            return;
        }
        var assign = {
            'id_license': this.licenseId,
            'usuario': this.employee['EMAIL'],
            'tag': this.tag['assettag'],
            'enable': 1
        };
        this.licenseService.assign(assign).subscribe(function (data) {
            _this.employee = undefined;
            _this.tag = undefined;
            _this.users.push(data['data']);
        });
    };
    LicenseRelationshipComponent.prototype.remove = function (user) {
        var _this = this;
        this.licenseService.disableUser(user['id_relationship'], { enable: 0 }).subscribe(function (data) {
            _this.users = _this.users.filter(function (element) {
                return element['id_relationship'] !== data['data']['id_relationship'];
            });
        });
    };
    ;
    LicenseRelationshipComponent.prototype.validate = function () {
        var _this = this;
        var finded = this.users.find(function (element) {
            return element['usuario'] === _this.employee['EMAIL'] && element['tag'] === _this.tag['assettag'];
        });
        return finded === undefined;
    };
    LicenseRelationshipComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-license-relationship',
            template: __webpack_require__("../../../../../src/app/license/license-relationship/license-relationship.component.html"),
            styles: [__webpack_require__("../../../../../src/app/license/license-relationship/license-relationship.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_license_service__["a" /* LicenseService */],
            __WEBPACK_IMPORTED_MODULE_4__create_signature_sheet_search_employee_service__["a" /* SearchEmployeeService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], LicenseRelationshipComponent);
    return LicenseRelationshipComponent;
}());



/***/ }),

/***/ "../../../../../src/app/license/license.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LicenseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_collapse__ = __webpack_require__("../../../../ngx-bootstrap/collapse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__license_list_license_list_component__ = __webpack_require__("../../../../../src/app/license/license-list/license-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__license_relationship_license_relationship_component__ = __webpack_require__("../../../../../src/app/license/license-relationship/license-relationship.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reporte_reporte_component__ = __webpack_require__("../../../../../src/app/license/reporte/reporte.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_license_service__ = __webpack_require__("../../../../../src/app/license/services/license.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var LicenseModule = /** @class */ (function () {
    function LicenseModule() {
    }
    LicenseModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["b" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_collapse__["a" /* CollapseModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__license_list_license_list_component__["a" /* LicenseListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__license_relationship_license_relationship_component__["a" /* LicenseRelationshipComponent */],
                __WEBPACK_IMPORTED_MODULE_9__reporte_reporte_component__["a" /* ReporteComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__license_list_license_list_component__["a" /* LicenseListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__license_relationship_license_relationship_component__["a" /* LicenseRelationshipComponent */],
                __WEBPACK_IMPORTED_MODULE_9__reporte_reporte_component__["a" /* ReporteComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services_license_service__["a" /* LicenseService */]
            ]
        })
    ], LicenseModule);
    return LicenseModule;
}());



/***/ }),

/***/ "../../../../../src/app/license/reporte/reporte.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/license/reporte/reporte.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h1 class=\"my-4\">\r\n      Report License\r\n      <span style=\"color:purple;\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-list-alt\"></i>\r\n      </span>\r\n    </h1>\r\n    <!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"createMode(); openModal(createModal)\">\r\n        License enable\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"createMode(); openModal(createModal)\">\r\n        License Diseble\r\n    </button> -->\r\n    <hr>\r\n    <div>\r\n      <table class=\"table table-hover table-bordered\">\r\n        <thead class=\"table-head\">\r\n          <tr class=\"\">\r\n            <th scope=\"col\">Id license</th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Usuario</th>\r\n            <th scope=\"col\">Tag</th>\r\n            <th scope=\"col\">Max users</th>\r\n            <th scope=\"col\">accountable</th>\r\n            <th scope=\"col\">Enable</th>\r\n          </tr>\r\n        </thead>\r\n  \r\n        <tbody>\r\n          <tr class=\"select\" *ngFor=\"let item of reporte\">\r\n            <td [innerHtml]=\"item.id_license\"></td>\r\n            <td [innerHtml]=\"item.license\"></td>\r\n            <td [innerHtml]=\"item.user\"></td>\r\n            <td [innerHtml]=\"item.tag\"></td>\r\n            <td [innerHtml]=\"item.max_user\"></td>\r\n            <td [innerHtml]=\"item.accountable\"></td>\r\n            <td [innerHtml]=\"item.enable === 1 ? 'True' : 'False'\"></td>\r\n            </tr>\r\n        </tbody>\r\n      </table>\r\n      <button class=\"btn btn-link\" (click)=\"previous()\" *ngIf=\"offset > 0\">Previous</button>\r\n    <button class=\"btn btn-link\" (click)=\"next()\" *ngIf=\"more\">Next</button>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/license/reporte/reporte.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReporteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_license_service__ = __webpack_require__("../../../../../src/app/license/services/license.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode__ = __webpack_require__("../../../../jwt-decode/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jwt_decode__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReporteComponent = /** @class */ (function () {
    function ReporteComponent(licenseService, cookieService) {
        this.licenseService = licenseService;
        this.cookieService = cookieService;
        this.privilege = false;
    }
    ReporteComponent.prototype.ngOnInit = function () {
        var val = this.cookieService.get("token");
        if (val) {
            var djtw = __WEBPACK_IMPORTED_MODULE_3_jwt_decode__(val);
            var identity = djtw['identity'];
            for (var _i = 0; _i < identity.length; _i++) {
                if (identity[_i]['privilege'] == 'pdf') {
                    this.privilege = true;
                }
            }
        }
        else {
            //this.privilege = true;
            window.location.href = '/login';
        }
        if (this.privilege) {
            this.reporte = [];
            this.submitted = false;
            this.isEditing = false;
            this.limit = 10;
            this.offset = 0;
            this.more = true;
            this.loadReportList();
        }
        else {
            window.location.href = '/login';
        }
    };
    ReporteComponent.prototype.loadReportList = function () {
        var _this = this;
        this.licenseService.getReport({
            limit: this.limit,
            offset: this.offset
        }).subscribe(function (data) {
            var newData = data['data'];
            if (newData.length === _this.limit) {
                _this.reporte = newData;
                _this.more = true;
            }
            if (newData.length < _this.limit && newData.length > 0) {
                _this.reporte = newData;
                _this.more = false;
            }
            if (newData.length === 0) {
                _this.more = false;
            }
        });
    };
    ReporteComponent.prototype.previous = function () {
        this.offset = this.offset - this.limit;
        this.loadReportList();
    };
    ReporteComponent.prototype.next = function () {
        this.offset = this.offset + this.limit;
        this.loadReportList();
        console.log(this.reporte);
        console.log(this.offset);
        console.log(this.limit);
    };
    ReporteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reporte',
            template: __webpack_require__("../../../../../src/app/license/reporte/reporte.component.html"),
            styles: [__webpack_require__("../../../../../src/app/license/reporte/reporte.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_license_service__["a" /* LicenseService */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]])
    ], ReporteComponent);
    return ReporteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/license/services/license.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LicenseService; });
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


var LicenseService = /** @class */ (function () {
    function LicenseService(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = 'http://hnlnoitinvprod01.hnsc.net/api/v1';
    }
    LicenseService.prototype.get = function (identifier) {
        var url = this.apiUrl + "/license/" + identifier;
        return this.httpClient.get(url);
    };
    LicenseService.prototype.getUsers = function (identifier) {
        var url = this.apiUrl + "/workstations-license/license/" + identifier + "/users";
        return this.httpClient.get(url);
    };
    LicenseService.prototype.create = function (params) {
        var url = this.apiUrl + "/license";
        return this.httpClient.put(url, params);
    };
    LicenseService.prototype.update = function (id, params) {
        var url = this.apiUrl + "/license/" + id;
        return this.httpClient.post(url, params);
    };
    LicenseService.prototype.getList = function (params) {
        var url = this.apiUrl + "/license";
        return this.httpClient.get(url, { params: params });
    };
    LicenseService.prototype.delete = function (licenseId) {
        var url = this.apiUrl + "/license/" + licenseId;
        return this.httpClient.delete(url);
    };
    LicenseService.prototype.assign = function (params) {
        var url = this.apiUrl + "/workstations-license";
        return this.httpClient.put(url, params);
    };
    LicenseService.prototype.disableUser = function (id, params) {
        var url = this.apiUrl + "/workstations-license/" + id;
        return this.httpClient.post(url, params);
    };
    LicenseService.prototype.getReport = function (params) {
        var url = this.apiUrl + "/workstations-license/report";
        return this.httpClient.get(url, { params: params });
    };
    LicenseService.prototype.searchAssetProduct = function (params) {
        var url = this.apiUrl + "/assetProduct";
        return this.httpClient.get(url, { params: params });
    };
    LicenseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], LicenseService);
    return LicenseService;
}());



/***/ }),

/***/ "../../../../../src/app/lifetime-chart/lifetime-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.e {\r\n    background-color: #b9ac15;\r\n}\r\n\r\n\r\n\r\np { color: #4c4a37; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh5 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 20px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh2 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 20px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh3 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 20px; font-weight: 400; line-height: 0px; margin: 0 0 0px; }\r\nh4 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 20px; font-weight: 400; line-height: 32px; margin: 0 0 24px; } */\r\n\r\n\r\n.EdgeButton:hover{\r\n    background-color: #E0F8FF;\r\n}\r\n\r\n\r\n.EdgeButton--secondary-file:hover{\r\n    background-color: #afe0ff;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryii:hover{\r\n    background-color: #E0F8FF;\r\n    color: #1da1f2;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryiii:hover{\r\n    background-color: #DBFCE8;\r\n    /*color: #69C68E;*/\r\n}\r\n\r\n\r\n/*input {\r\n    -moz-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    margin-top: 12px;\r\n    width: 100%;\r\n} */\r\n\r\n\r\n.EdgeButton--secondary {\r\n    background-color: #fff;\r\n    border: 1px solid #1da1f2;\r\n    color: #1da1f2;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryii {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n \r\n}\r\n\r\n\r\n.EdgeButton--secondaryiii {\r\n    background-color: #fff;\r\n    border: 1px solid #69C68E;\r\n    color: #69C68E;\r\n \r\n}\r\n\r\n\r\n.EdgeButton--secondary-file {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n}\r\n\r\n\r\n.EdgeButton--medium {\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n}\r\n\r\n\r\n/*.EdgeButton, .EdgeButton:visited {\r\n    border-radius: 100px;\r\n    box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}*/\r\n\r\n\r\n.EdgeButton {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    line-height: 25px;\r\n    padding: 8px 18px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryiii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n\r\ntextarea, div[contenteditable], .t1-select {\r\n    display: inline-block;\r\n    width: 210px;\r\n    padding: 4px;\r\n    margin: 0;\r\n    outline: 0;\r\n    background-color: #fff;\r\n    border: 1px solid #e6ecf0;\r\n    border-radius: 3px;\r\n}\r\n\r\n\r\nh1 {\r\n    display: block;\r\n    font-size: 2em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nh2 {\r\n    display: block;\r\n    font-size: 1.9em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nh3 {\r\n    display: block;\r\n    font-size: 1.8em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nh4 {\r\n    display: block;\r\n    font-size: 1.7em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nh5 {\r\n    display: block;\r\n    font-size: 1.5em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nbody.ms-windows {\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\n.table-head {\r\n    background-color: rgb(35, 47, 62);\r\n    border-color: rgb(35, 47, 62);\r\n    color: #fff;\r\n}\r\n\r\n\r\np, label, option{\r\n    font-size: 1em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n  }\r\n\r\n\r\noption, select{\r\n    font-size: 0.9em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lifetime-chart/lifetime-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br>\r\n<div class=\"row justify-content-center\">\r\n    <div class=\"form-inline\">\r\n        <h3><span><i class=\"fa fa-table\" aria-hidden=\"true\" style=\"color: cadetblue\"></i></span> Lifetime Table - </h3>\r\n           <div class=\"form-inline\">\r\n            <!-- menor mayor-->\r\n            <select class=\"form-control\" [(ngModel)]=\"GreaterLess\">\r\n              <option value=\"2\" selected>Greater than</option>\r\n              <option value=\"1\">Less than</option>\r\n            </select>\r\n\r\n            -\r\n\r\n            <input type=\"number\" min=\"1\" class=\"form-control\" style=\"width:70px\" [(ngModel)]=\"number\">-\r\n            <select class=\"form-control\" [(ngModel)]=\"state\">\r\n              <option value=\"1\" class=\"\" selected>In Store</option>\r\n              <option value=\"2\" class=\"\">In Use</option>\r\n              <option value=\"3\" class=\"\">Both</option>\r\n            </select>-\r\n\r\n           </div>\r\n           <button type=\"button\" class=\" EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\"  (click)=\"funStorageMoveTable()\">Generate Table</button>\r\n           <pre>   </pre>\r\n           <div class=\"form-inline\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Asset State History\" [(ngModel)]=\"searchInput\" >\r\n              <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\" (click)=\"searchField()\"><span> <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n              </span></button>\r\n           </div>\r\n         </div>\r\n  \r\n  </div>\r\n\r\n  <br><br>\r\n  <div class=\"container\" *ngIf=\"boolGenerateTable\">\r\n    <h3>Result:</h3><br>\r\n      <table class=\"table table-hover table-bordered\">\r\n          <thead class=\"table-head\">\r\n            <tr class=\"\">\r\n              <th scope=\"col\">Lifetime</th>\r\n              <th scope=\"col\">Model</th>\r\n              <th scope=\"col\">State</th>\r\n              <th scope=\"col\">Product Code</th>\r\n              <th scope=\"col\">Service Tag</th>\r\n              \r\n              \r\n              <th scope=\"col\">Acquisition Date</th>\r\n              <th scope=\"col\">Warranty Expiry</th>\r\n              <th scope=\"col\">Owner</th>\r\n              \r\n            </tr>\r\n          </thead>\r\n          <tbody *ngFor=\"let prod of items\">\r\n        \r\n            <tr class=\"select\">\r\n              <td >{{prod.Lifetime}}</td>\r\n              <td>{{prod.Model}}</td>\r\n              <td>{{prod.State}}</td>\r\n              <td>{{prod.Product_Code}}</td>\r\n              <td>{{prod.Service_Tag}}</td>\r\n              <td>{{prod.Acquisition_Date}}</td>\r\n              <td>{{prod.Warranty_Expiry}}</td>\r\n              <th >{{prod.User}}</th>\r\n            </tr>\r\n            \r\n          </tbody>\r\n        \r\n        </table>\r\n           <div class=\"d-flex justify-content-center\">\r\n              <button class=\"btn btn-link\" *ngIf=\"showpreview\" (click)=\"preview()\">Preview</button>\r\n              <button class=\"btn btn-link\"  *ngIf=\"shownext\" (click)=\"generateTable()\">Next</button>\r\n          </div>\r\n          <div class=\"d-flex justify-content-start\" *ngIf=\"shownext\">\r\n              <p>Search Result <strong> Quantity: {{count}} </strong>, cursor {{cursor}} .</p>\r\n          </div> \r\n  </div>\r\n\r\n  <div class=\"container\" *ngIf=\"boolGenerateTable2\">\r\n      <h3>Result:</h3><br>\r\n        <table class=\"table table-hover table-bordered\">\r\n            <thead class=\"thead-dark\">\r\n              <tr class=\"\">\r\n                <th scope=\"col\">Lifetime</th>\r\n                <th scope=\"col\">Model</th>\r\n                <th scope=\"col\">State</th>\r\n                <th scope=\"col\">Product Code</th>\r\n                <th scope=\"col\">Service Tag</th>\r\n                \r\n                \r\n                <th scope=\"col\">Acquisition Date</th>\r\n                <th scope=\"col\">Warranty Expiry</th>\r\n                <th scope=\"col\">Owner</th>\r\n                \r\n              </tr>\r\n            </thead>\r\n            <tbody *ngFor=\"let prod of items2\">\r\n          \r\n              <tr class=\"select\">\r\n                <td >{{prod.Lifetime}}</td>\r\n                <td>{{prod.Model}}</td>\r\n                <td>{{prod.State}}</td>\r\n                <td>{{prod.Product_Code}}</td>\r\n                <td>{{prod.Service_Tag}}</td>\r\n                <td>{{prod.Acquisition_Date}}</td>\r\n                <td>{{prod.Warranty_Expiry}}</td>\r\n                <th >{{prod.User}}</th>\r\n              </tr>\r\n              \r\n            </tbody>\r\n          \r\n          </table>\r\n             <div class=\"d-flex justify-content-center\">\r\n                <button class=\"btn btn-link\" *ngIf=\"showpreview2\" (click)=\"preview2()\">Preview</button>\r\n                <button class=\"btn btn-link\"  *ngIf=\"shownext2\" (click)=\"search()\">Next</button>\r\n            </div>\r\n            <div class=\"d-flex justify-content-start\" *ngIf=\"shownext2\">\r\n                <p>Search Result <strong> Quantity: {{count2}} </strong>, cursor {{cursor2}} .</p>\r\n            </div> \r\n    </div>\r\n\r\n  <!-- <button (click)=\"test()\" class=\"btn\">Test</button> -->"

/***/ }),

/***/ "../../../../../src/app/lifetime-chart/lifetime-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LifetimeChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jwt_decode__ = __webpack_require__("../../../../jwt-decode/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LifetimeChartComponent = /** @class */ (function () {
    function LifetimeChartComponent(_dashboardService, cookieService) {
        this._dashboardService = _dashboardService;
        this.cookieService = cookieService;
        this.privilege = false;
        this.items = [];
        this.GreaterLess = 1;
        this.number = 36;
        this.state = 1;
        this.boolGenerateTable = false;
        this.page = 0;
        this.cursor = 0;
        this.shownext = false;
        this.showpreview = false;
        this.searchInput = '';
        //second table
        this.cursor2 = 0;
        this.boolGenerateTable2 = false;
        this.items2 = [];
        this.shownext2 = false;
        this.showpreview2 = false;
    }
    LifetimeChartComponent.prototype.ngOnInit = function () {
        var val = this.cookieService.get("token");
        if (val) {
            var djtw = __WEBPACK_IMPORTED_MODULE_2_jwt_decode__(val);
            var identity = djtw['identity'];
            for (var _i = 0; _i < identity.length; _i++) {
                if (identity[_i]['privilege'] == 'dashboard') {
                    this.privilege = true;
                }
            }
            if (this.privilege) {
                //this.initialDashboard();
            }
            else {
                window.location.href = '/login';
            }
        }
        else {
            //this.privilege = true;
            window.location.href = '/login';
        }
    };
    LifetimeChartComponent.prototype.generateTable = function () {
        var _this = this;
        //validaciones
        if (this.GreaterLess == 0 || this.state == 0) {
            alert('Empty Fields.!');
        }
        else {
            this.boolGenerateTable = true;
            this._dashboardService.searchLifetimeDetail(this.GreaterLess, this.number, this.state, this.cursor)
                .subscribe(function (res) {
                _this.items = res['query'];
                _this.count = res['count'];
                _this.cursor = res['cursor'];
                _this.more = res['more'];
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
        }
    };
    LifetimeChartComponent.prototype.search = function () {
        var _this = this;
        if (this.searchInput == '') {
            alert('Search Field is empty.!');
        }
        else {
            this.boolGenerateTable2 = true;
            this._dashboardService.searchItemLifetimeDetail(this.cursor2, this.searchInput)
                .subscribe(function (res) {
                if (res['count'] != 0) {
                    _this.items2 = res['query'];
                    _this.count2 = res['count'];
                    _this.cursor2 = res['cursor'];
                    _this.more2 = res['more'];
                    //alert('aqui');
                }
                console.log(res['count']);
                if (res['count'] == 0) {
                    alert("Nothing Found.!");
                    _this.searchInput = '';
                }
                else {
                    if (_this.more2) {
                        _this.shownext2 = true;
                    }
                    else {
                        _this.shownext2 = false;
                    }
                    if (_this.cursor2 == 10) {
                        _this.showpreview2 = false;
                    }
                    else {
                        _this.showpreview2 = true;
                    }
                }
            });
        }
    };
    LifetimeChartComponent.prototype.test = function () {
        alert(this.cursor + ' ' + this.searchInput + this.cursor2);
    };
    LifetimeChartComponent.prototype.preview = function () {
        this.cursor = this.cursor - 20;
        this.generateTable();
        //alert(this.cursor);
    };
    LifetimeChartComponent.prototype.funStorageMoveTable = function () {
        this.boolGenerateTable2 = false;
        this.cursor = 0;
        this.generateTable();
    };
    LifetimeChartComponent.prototype.searchField = function () {
        this.boolGenerateTable = false;
        this.cursor2 = 0;
        this.search();
    };
    LifetimeChartComponent.prototype.preview2 = function () {
        this.cursor2 = this.cursor2 - 20;
        this.search();
        //alert(this.cursor);
    };
    LifetimeChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lifetime-chart',
            template: __webpack_require__("../../../../../src/app/lifetime-chart/lifetime-chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lifetime-chart/lifetime-chart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */]])
    ], LifetimeChartComponent);
    return LifetimeChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lifetime-table/lifetime-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lifetime-table/lifetime-table.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  lifetime-table works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/lifetime-table/lifetime-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LifetimeTableComponent; });
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

var LifetimeTableComponent = /** @class */ (function () {
    function LifetimeTableComponent() {
    }
    LifetimeTableComponent.prototype.ngOnInit = function () {
    };
    LifetimeTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lifetime-table',
            template: __webpack_require__("../../../../../src/app/lifetime-table/lifetime-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lifetime-table/lifetime-table.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LifetimeTableComponent);
    return LifetimeTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/loan-admin/loan-a/loan-a.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*h1 { color: #7c795d; font-family: 'Trocchi', serif; font-size: 45px; font-weight: normal; line-height: 48px; margin: 0; }\r\n\r\np { color: #4c4a37; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh5 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh2 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh3 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh4 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n*/\r\n\r\n\r\n.EdgeButton:hover{\r\n    background-color: #E0F8FF;\r\n}\r\n\r\n\r\n.EdgeButton--secondary-file:hover{\r\n    background-color: #afe0ff;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryii:hover{\r\n    background-color: #E0F8FF;\r\n    color: #1da1f2;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryiii:hover{\r\n    background-color: #DBFCE8;\r\n    /*color: #69C68E;*/\r\n}\r\n\r\n\r\n/*input {\r\n    -moz-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    margin-top: 12px;\r\n    width: 100%;\r\n} */\r\n\r\n\r\n.EdgeButton--secondary {\r\n    background-color: #fff;\r\n    border: 1px solid #1da1f2;\r\n    color: #1da1f2;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryii {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n \r\n}\r\n\r\n\r\n.EdgeButton--secondaryiii {\r\n    background-color: #fff;\r\n    border: 1px solid #69C68E;\r\n    color: #69C68E;\r\n \r\n}\r\n\r\n\r\n.EdgeButton--secondary-file {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n}\r\n\r\n\r\n.EdgeButton--medium {\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n}\r\n\r\n\r\n/*.EdgeButton, .EdgeButton:visited {\r\n    border-radius: 100px;\r\n    box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}*/\r\n\r\n\r\n.EdgeButton {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    line-height: 25px;\r\n    padding: 8px 18px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryiii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n\r\ntextarea, div[contenteditable], .t1-select {\r\n    display: inline-block;\r\n    width: 210px;\r\n    padding: 4px;\r\n    margin: 0;\r\n    outline: 0;\r\n    background-color: #fff;\r\n    border: 1px solid #e6ecf0;\r\n    border-radius: 3px;\r\n}\r\n\r\n\r\nh1 {\r\n    display: block;\r\n    font-size: 2em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nh2 {\r\n    display: block;\r\n    font-size: 1.9em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nh3 {\r\n    display: block;\r\n    font-size: 1.8em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nh4 {\r\n    display: block;\r\n    font-size: 1.7em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nh5 {\r\n    display: block;\r\n    font-size: 1.5em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nbody.ms-windows {\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\n.table-head {\r\n    background-color: rgb(35, 47, 62);\r\n    border-color: rgb(35, 47, 62);\r\n    color: #fff;\r\n}\r\n\r\n\r\np, label, option{\r\n    font-size: 1em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n  }\r\n\r\n\r\noption, select{\r\n    font-size: 0.9em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loan-admin/loan-a/loan-a.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\" *ngIf=\"privilege\">\r\n    \r\n    <h1 class=\"my-4\">Offboarding-Loan Sheets <span style=\"color:blue\"><i class=\"fa fa-user-plus\" aria-hidden=\"true\" (click)=\"siteInformation()\"></i></span><hr>\r\n    <button class=\"\" (click)=\"openErrorModal(errorTemplate)\" id=\"errorModalbtn\" style=\"display:none;\"></button>  \r\n    </h1>\r\n        <div class=\"row\" *ngIf=\"siteInfo\">\r\n\r\n                <!-- Blog Entries Column -->\r\n                <div class=\"col-md-8\">\r\n        \r\n        \r\n                  <!-- Blog Post -->\r\n                  <div class=\"card mb-4\">\r\n                    <img class=\"card-img-top\" [src]=\"fullImagePath\" alt=\"Card image cap\">\r\n                    <div class=\"card-body\">\r\n                      <h2 class=\"card-title\">Some statements</h2>\r\n                      <p class=\"card-text\">\"A loan policy must address key credit decision criteria and underwriting factors such as the purpose of the loan, required financial information, collateral, risk ratings (borrower and facility), pricing, and policy exceptions. It may include metrics that make a particular borrower, industry, or loan type acceptable; for example, the policy may note debt-to-income or specific debt service coverage (DSC) ratios, interest coverage ratios, loan-to-value requirements, or appropriate amortization periods.\"</p>\r\n                      <button class=\"btn btn-info btn-sm\" (click)=\"start()\">Let's Get Started!</button>\r\n                    </div>\r\n                    <div class=\"card-footer text-muted\">\r\n                      Laureate International Universities\r\n                    </div>\r\n                  </div>\r\n        \r\n                </div>\r\n        \r\n                <!-- Sidebar Widgets Column -->\r\n                <div class=\"col-md-4\">\r\n        \r\n\r\n                  <br><br><br>\r\n        \r\n                  <!-- Categories Widget -->\r\n                  <div class=\"card my-4\">\r\n                    <h5 class=\"card-header\">Reminder</h5>\r\n                    <div class=\"card-body\">\r\n                      <div class=\"\">\r\n                        <p>In this section you will not be able to create loan sheets, go create a sheet for that, you can only release the resources of loan sheets already created</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n        \r\n                  <!-- Side Widget -->\r\n                  <div class=\"card my-4\">\r\n                    <h5 class=\"card-header\">Loan Policy</h5>\r\n                    <div class=\"card-body\">\r\n                            The policy should also address postorigination activities, such as ongoing monitoring and credit administration, including postorigination monitoring of loan covenants, obtaining financial information, and assessing the borrower's ongoing ability to service the debt and ultimately repay the loan.\r\n                    </div>\r\n                  </div>\r\n        \r\n                </div>\r\n        \r\n              </div>\r\n              <!-- /.row -->\r\n        \r\n    \r\n <!--   <div>\r\n        <h3>Offboarding-Loan Sheets <span style=\"color:blue\"><i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i></span></h3>\r\n        <p>\"A loan policy must address key credit decision criteria and underwriting factors such as the purpose of the loan, required financial information, collateral, risk ratings (borrower and facility), pricing, and policy exceptions. It may include metrics that make a particular borrower, industry, or loan type acceptable; for example, the policy may note debt-to-income or specific debt service coverage (DSC) ratios, interest coverage ratios, loan-to-value requirements, or appropriate amortization periods. The policy should also address postorigination activities, such as ongoing monitoring and credit administration, including postorigination monitoring of loan covenants, obtaining financial information, and assessing the borrower's ongoing ability to service the debt and ultimately repay the loan.\"</p>\r\n         <br>\r\n        <div class=\"form-group\"> \r\n            <button class=\"btn btn-info btn-sm\" (click)=\"start()\">Let's Get Started!</button>\r\n        </div>\r\n    </div> -->\r\n    <div class=\" col-6\" *ngIf=\"boolfirst\">\r\n        <h3>First-Step select a type <span><i class=\"fa fa-random\" aria-hidden=\"true\"></i></span></h3>\r\n        <div class=\"form-group\">\r\n            <select class=\"form-control\" [(ngModel)]=\"option\">\r\n                    <option value=\"2\">OffBoarding</option>\r\n                    <option value=\"3\">Loan</option>\r\n            </select>\r\n        </div>\r\n        <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\" (click)=\"validate()\">Continue</button>\r\n    </div>\r\n\r\n    <br>\r\n  <!--  <button class=\"btn btn-sm btn-danger\" (click)=\"test()\">Test</button> -->\r\n\r\n\r\n    <ul class=\"list-group\" *ngFor=\"let item of selectemploye\">\r\n        <li class=\"list-group-item list-group-item-success \">{{item.FIRST_NAME}}  {{item.LAST_NAME}} - {{item.EMAIL}}</li>\r\n      \r\n      </ul>\r\n      \r\n\r\n\r\n    <div *ngIf=\"boolemployee\">\r\n        <h3>First-Step select the employee</h3>\r\n         <!-- <ul class=\"list-group\" *ngFor=\"let item of selectemploye\">{{item.FIRST_NAME}} - {{item.LAST_NAME}} - {{item.EMAIL}} </ul> -->\r\n \r\n \r\n \r\n        <app-employee-table (employeevent)=\"selectemploye=$event\"></app-employee-table>\r\n        <div class=\"d-flex justify-content-center\">\r\n                 <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryiii EdgeButton--medium submit js-submit\" (click)=\"backemployee()\">Go Back</button><h4>-</h4>\r\n                 <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryiii EdgeButton--medium submit js-submit\" (click)=\"continueemployee()\">Continue</button>\r\n        </div>    \r\n   </div >\r\n   <br>\r\n   <div class=\"\" *ngIf=\"boolproducts\">\r\n    <h3><b>Loan Signature Sheets</b></h3>\r\n    <br>\r\n    <table class=\"table table-hover table-bordered\">\r\n        <thead class=\"thead-dark\">\r\n          <tr class=\"\">\r\n            <th scope=\"col\">Sheet Id</th>\r\n            <th scope=\"col\">First Name</th>\r\n            <th scope=\"col\">Last Name</th>\r\n            <th scope=\"col\">E-mail</th>\r\n            <th scope=\"col\">Employee ID</th>\r\n            <th scope=\"col\">Date</th>\r\n            <th scope=\"col\">select</th>\r\n           <!-- <th scope=\"col\">Status</th>\r\n            <th scope=\"col\">Last?</th> -->\r\n            \r\n          </tr>\r\n        </thead>\r\n        <tbody *ngFor=\"let product of sheets\">\r\n      \r\n          <tr class=\"select\">\r\n            <th scope=\"row\">{{product.id_signature}}</th>\r\n            <td>{{product.first_name}}</td>\r\n            <td>{{product.last_name}}</td>\r\n            <td>{{product.email}}</td>\r\n            <td>{{product.id_employee}}</td>\r\n            <td>{{product.updated}}</td>\r\n            <td><button class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\" (click)=\"onSelect(product)\" >select</button></td>\r\n          </tr>\r\n      \r\n        </tbody>\r\n      \r\n      </table>\r\n      <div class=\"d-flex justify-content-center\">\r\n          <button class=\"btn btn-link\" *ngIf=\"showpreview\" (click)=\"preview()\">Preview</button>\r\n          <button class=\"btn btn-link\" (click)=\"next()\" *ngIf=\"shownext\">Next</button>\r\n      </div>\r\n\r\n      <div class=\"d-flex justify-content-start\" *ngIf=\"meta\">\r\n          <p>Search Result Quantity: {{meta['count']}}, cursor {{meta['cursor']}} More?  {{meta['more']}}.</p>\r\n      </div>\r\n      <div >\r\n        <ul class=\"list-group\" *ngFor=\"let item of selectLoanSheet\">\r\n            <li class=\"list-group-item list-group-item-info \">{{item.id_signature}} - {{item.email}}</li>\r\n          \r\n          </ul>\r\n      </div>\r\n      <br>\r\n      <div class=\"d-flex justify-content-center\" *ngIf=\"meta\">\r\n        <button class=\"EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit \" (click)=\"openLoanModal(Loantemplate)\">Release Assets</button><br>\r\n    </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"booloffboarding\">\r\n    <h3>Current Signature Sheet Products</h3>\r\n\r\n    <div class=\"\">\r\n          <table class=\"table table-hover table-bordered\">\r\n              <thead class=\"thead-dark\">\r\n                <tr class=\"\">\r\n                    <th scope=\"col\">Sheet Id</th>\r\n                  <th scope=\"col\">CI Name</th>\r\n                  <!-- <th scope=\"col\">CI Type</th> -->\r\n                  <th scope=\"col\">Tag</th>\r\n                  <th scope=\"col\">Serial N°</th>\r\n                  <th scope=\"col\">Model</th>\r\n                  <th scope=\"col\">CIID</th>\r\n                  \r\n                </tr>\r\n              </thead>\r\n              <tbody *ngFor=\"let product of offBoardingProducts\">\r\n            \r\n                <tr class=\"select\">\r\n                  <th scope=\"row\">{{product.id_signature}}</th>\r\n                  <td>{{product.product_name}}</td>\r\n                 <!-- <td>{{product.CI_TYPE}}</td> -->\r\n                  <td>{{product.id_product}}</td>\r\n                  <td>{{product.serial_number}}</td>\r\n                  <td>{{product.model}}</td>\r\n                  <td>{{product.ciid}}</td>\r\n                </tr>\r\n            \r\n              </tbody>\r\n            \r\n            </table>\r\n      </div>\r\n      <br>\r\n      <div class=\"d-flex justify-content-center\">\r\n            <button class=\"EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit \" (click)=\"openOffboardingModal(offboardingTemplate)\">Make Offboarding</button><br>\r\n      </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n<ng-template #template>\r\n    <div class=\"modal-body text-center alert\">\r\n        <p>Are you sure of save this Signature Sheet??</p>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"insertSheet()\" >Yes</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"abort()\" >No</button>\r\n        <div class=\"modal-body alert alert-warning\" role=\"alert\">\r\n                The information will be save and automatically create a pdf file of the sheet, press 'YES', to continue or 'No', to go back.\r\n        </div>\r\n    </div>\r\n\r\n   \r\n</ng-template>\r\n\r\n\r\n<ng-template #Loantemplate>\r\n        <div class=\"modal-header text-center\">\r\n          <h4 class=\"modal-title text-center\">The Following Assests will be modified </h4>\r\n          <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body text-center\">\r\n          <b> Sheet Products: </b>\r\n        </div>\r\n        <div >\r\n            <ul class=\"list-group\" *ngFor=\"let item of modalProducts\">\r\n                <li class=\"list-group-item list-group-item-warning \">{{item.id_product}} - {{item.product_name}} - {{item.model}}</li>\r\n                  \r\n            </ul>\r\n        </div><br>\r\n        <p>The assets state will be change to in store in the asset explorer database, would you like to continue? <span><i class=\"fa fa-question-circle-o\" aria-hidden=\"true\"></i></span></p>\r\n        \r\n        <div class=\"text-center\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\" >YES</button>\r\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"decline()\" >No</button>\r\n        </div>\r\n        <hr>\r\n\r\n</ng-template>\r\n\r\n<ng-template #offboardingTemplate>\r\n        <div class=\"modal-body text-center alert\">\r\n            <p>Are you sure of performing this offboarding? <span><i class=\"fa fa-question-circle-o\" aria-hidden=\"true\"></i></span></p>\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"makeOffboarding()\" >Yes</button>\r\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"decline()\" >No</button>\r\n            <div class=\"modal-body alert alert-warning\" role=\"alert\">\r\n                    The relationships will be deleted and automatically create a pdf file of the offboarding sheet, press 'YES', to continue or 'No', to go back.\r\n            </div>\r\n        </div>\r\n    \r\n       \r\n    </ng-template>\r\n\r\n\r\n    <ng-template #errorTemplate>\r\n        <div class=\"modal-body text-center alert\" >\r\n          <p id=\"errorMessage\">!</p>\r\n          <button class=\"btn btn-info\" (click)=\"modalRef.hide()\">Ok</button><br>\r\n      </div>\r\n      \r\n      </ng-template >"

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
        this.boolfirst = true;
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
        this.siteInfo = false;
        this.boolLoanPending = false;
        this.messegeError = 'More information required.';
        this.fullImagePath = '/assets/images/adult-book-business-297755.jpg';
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
            //this.privilege = true;
            window.location.href = '/login';
        }
    };
    LoanAComponent.prototype.start = function () {
        this.boolfirst = true;
    };
    LoanAComponent.prototype.siteInformation = function () {
        if (this.siteInfo) {
            this.siteInfo = false;
        }
        else {
            this.siteInfo = true;
        }
    };
    LoanAComponent.prototype.validate = function (template) {
        //alert(this.date + "" + this.option );
        if (this.option) {
            this.boolemployee = true;
            this.boolfirst = false;
        }
        else {
            this.messegeError = 'Select Type first!';
            document.getElementById('errorModalbtn').click();
            //alert('Select Type first!');
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
                    console.log(res);
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
                    if (m['id_type'] == 2) {
                        alert('No signature to show');
                        window.location.href = '/loan';
                    }
                    if ((m['id_type'] != 2)) {
                        _this.validation = 1;
                        _this._Service.getUserProducts(x.EMPLOYEE_ID)
                            .subscribe(function (res) {
                            console.log(res);
                            _this.offBoardingProducts = res['SignatureSheetsProducts'];
                            _this.booloffboarding = true;
                            _this.boolemployee = false;
                        });
                    }
                    console.log(res);
                });
            }
        }
        else {
            //alert("Select Employee first.!")
            this.messegeError = 'Select Employee first!';
            document.getElementById('errorModalbtn').click();
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
                    //alert('No products for that sheet');
                    _this.messegeError = 'No products for that sheet';
                    document.getElementById('errorModalbtn').click();
                }
            });
        }
        else {
            //alert("Select a Sheet first");
            this.messegeError = 'Select a sheet first!';
            document.getElementById('errorModalbtn').click();
        }
    };
    LoanAComponent.prototype.confirm = function () {
        var _this = this;
        var x = this.selectLoanSheet[0];
        this._Service.updateOffLoanSheetsProducts(this.modalProducts, x.id_employee, x.id_signature)
            .subscribe(function (res) {
            if (res['message'] == 'Done') {
                alert('Relationships removed');
                window.location.href = '/loan';
            }
            else {
                //alert('Assets already removed');
                _this.messegeError = 'Assets already removed!';
                document.getElementById('errorModalbtn').click();
            }
        });
    };
    LoanAComponent.prototype.decline = function () {
        window.location.href = '/loan';
    };
    LoanAComponent.prototype.openOffboardingModal = function (template) {
        var _this = this;
        //Validar que no tenga hojas de prestamo pendientes.
        var x = this.selectemploye[0];
        //this.searchText = x.EMAIL
        this._Service.searchLoanSignatureSheets(1, x.EMAIL, 10, 3)
            .subscribe(function (res) {
            //console.log("############");
            //console.log(res);
            var y = res['meta'];
            var msg = res['message'];
            if (y) {
                if (y['count'] > 0) {
                    _this.boolLoanPending = true;
                }
                else {
                    _this.boolLoanPending = false;
                }
            }
            else {
                if (msg) {
                    _this.boolLoanPending = false;
                }
            }
            //condicionante si se debe mostrar o no el dialogo de offboarding.
            if (_this.boolLoanPending) {
                _this.messegeError = 'This user have Loan sheets pending, make sure to release then first';
                document.getElementById('errorModalbtn').click();
            }
            else {
                _this.modalRef = _this.modalService.show(template);
            }
        });
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
                            window.location.href = '/loan';
                        }
                        else {
                            alert('Something Wrong');
                            window.location.href = '/loan';
                        }
                    });
                }
                else {
                    alert('Something Wrong');
                    window.location.href = '/loan';
                }
            });
        }
        else {
            //alert('Offboarding Process already done');
            this.messegeError = 'Offboarding process already done';
            document.getElementById('errorModalbtn').click();
        }
    };
    LoanAComponent.prototype.openErrorModal = function (template) {
        this.modalRef = this.modalService.show(template);
        document.getElementById('errorMessage').innerHTML = this.messegeError;
    };
    LoanAComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loan-a',
            template: __webpack_require__("../../../../../src/app/loan-admin/loan-a/loan-a.component.html"),
            styles: [__webpack_require__("../../../../../src/app/loan-admin/loan-a/loan-a.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_2__create_signature_sheet_search_employee_service__["a" /* SearchEmployeeService */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
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
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */]
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
        return this.httpClient.get("http://hnlnoitinvprod01.hnsc.net/getcookie").map(function (result) { return result; });
    };
    LoginService.prototype.test = function () {
        return 'baia baia';
    };
    LoginService.prototype.logout = function () {
        return this.httpClient.get("http://hnlnoitinvprod01.hnsc.net/logout").map(function (result) { return result; });
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
exports.push([module.i, "/*h1 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 45px; font-weight: normal; line-height: 48px; margin: 0; }\r\n\r\np { color: #4c4a37; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh5 { color: #000000; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; } */\r\n\r\n\r\n.EdgeButton:hover{\r\n    background-color: #E0F8FF;\r\n}\r\n\r\n\r\n.EdgeButton--secondary-file:hover{\r\n    background-color: #afe0ff;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryii:hover{\r\n    background-color: #E0F8FF;\r\n    color: #1da1f2;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryiii:hover{\r\n    background-color: #DBFCE8;\r\n    /*color: #69C68E;*/\r\n}\r\n\r\n\r\n/*input {\r\n    -moz-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    margin-top: 12px;\r\n    width: 100%;\r\n} */\r\n\r\n\r\n.EdgeButton--secondary {\r\n    background-color: #fff;\r\n    border: 1px solid #1da1f2;\r\n    color: #1da1f2;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryii {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #1da1f2;\r\n    color: #fff;\r\n \r\n}\r\n\r\n\r\n.EdgeButton--secondaryiii {\r\n    background-color: #fff;\r\n    border: 1px solid #69C68E;\r\n    color: #69C68E;\r\n \r\n}\r\n\r\n\r\n.EdgeButton--secondary-file {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n}\r\n\r\n\r\n.EdgeButton--medium {\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n}\r\n\r\n\r\n/*.EdgeButton, .EdgeButton:visited {\r\n    border-radius: 100px;\r\n    box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}*/\r\n\r\n\r\n.EdgeButton {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    line-height: 25px;\r\n    padding: 8px 18px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryiii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n\r\ntextarea, div[contenteditable], .t1-select {\r\n    display: inline-block;\r\n    width: 210px;\r\n    padding: 4px;\r\n    margin: 0;\r\n    outline: 0;\r\n    background-color: #fff;\r\n    border: 1px solid #e6ecf0;\r\n    border-radius: 3px;\r\n}\r\n\r\n\r\nh1 {\r\n    display: block;\r\n    font-size: 2em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nh2 {\r\n    display: block;\r\n    font-size: 1.9em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nh3 {\r\n    display: block;\r\n    font-size: 1.8em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nh4 {\r\n    display: block;\r\n    font-size: 1.7em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nh5 {\r\n    display: block;\r\n    font-size: 1.5em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nbody.ms-windows {\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\n.table-head {\r\n    background-color: #343a40;\r\n    border-color: #343a40;\r\n    color: #fff;\r\n}\r\n\r\n\r\np, label, option{\r\n    font-size: 1em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n  }\r\n\r\n\r\noption, select{\r\n    font-size: 0.9em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n<br>\r\n    <!-- <div class=\"container\">\r\n      <h1>Welcome To Laureate IT System</h1> <br><br>\r\n      <h5>Welcome to the inventory control system, this application is born as an extension of the asset explorer system, as a personalized complement for the management of signature sheets, real-time information of the main assets of the site as well as immediate report.</h5>\r\n\r\n    </div> -->\r\n\r\n <!--   <button class=\"btn btn-danger\" (click)=\"test2()\">Test</button> -->\r\n <div class=\"container\">\r\n\r\n    <!-- Jumbotron Header -->\r\n    <header class=\"\">\r\n      <h1 class=\"\">Welcome To Laureate IT System! <span style=\"color:#1da1f2;\"><i class=\"fa fa-cogs\" aria-hidden=\"true\"></i></span></h1>\r\n      <!-- <img style=\"height:500px; width:1200px\" class=\"img-fluid\" alt=\"Responsive image\" [src]=\"mainImage\"> -->\r\n    </header>\r\n    <br>\r\n\r\n    <!-- Page Features -->\r\n    <div class=\"row text-center\">\r\n\r\n        <div class=\"col-lg-2 col-md-6 mb-4\">\r\n          <div class=\"card \" style=\"height:300px;\">\r\n          <img class=\"card-img-top\" [src]=\"fullImagePath\" alt=\"Card image cap\" style=\"height : 120px;\">\r\n              <div class=\"card-body\">\r\n                <p class=\"card-title\">Attending Report Generation</p>\r\n              </div>\r\n              <div class=\"\">\r\n                <a href=\"http://reportslno.hnsc.net\" target=\"_blank\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium sbtn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\">GO!</a>\r\n                <p> </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n      <div class=\"col-lg-2 col-md-6 mb-4\">\r\n        <div class=\"card \" style=\"height:300px;\">\r\n          <!-- icono -->\r\n          \r\n          <img class=\"card-img-top\" [src]=\"sharepointImage\" alt=\"Card image cap\" style=\"height: 120px;\">\r\n          <div class=\"card-body\">\r\n            <p class=\"card-title\">HelpdeskIT Sharepoint Site.</p>\r\n            <!-- <p class=\"card-text\"></p>-->\r\n          </div>\r\n          <div class=\"\">\r\n            <a href=\"http://laur.cc/helpdeskit\" target=\"_blank\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\">GO!</a>\r\n            <p> </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"col-lg-2 col-md-6 mb-4\">\r\n          <div class=\"card \" style=\"height:300px;\">\r\n              <img class=\"card-img-top\" [src]=\"footprintsImage\" alt=\"Card image cap\" style=\"height : 120px;\">\r\n            <div class=\"card-body\">\r\n              <p class=\"card-title\">Frontline Ticket System</p>\r\n             <!--> <p class=\"card-text\"></p> -->\r\n             <br>\r\n            </div>\r\n            <div class=\"\">\r\n              <a href=\"https://frontline.nfpondemand.com/\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\" target=\"_blank\">GO!</a>\r\n              <p> </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-lg-2 col-md-6 mb-4\">\r\n            <div class=\"card \" style=\"height:300px;\">\r\n                <img class=\"card-img-top\" [src]=\"kaseyaImage\" alt=\"Card image cap\" style=\"height : 120px;\">\r\n              <div class=\"card-body\">\r\n                <p class=\"card-title\">Kaseya Web Console</p>\r\n                <br>\r\n                \r\n              </div>\r\n              <div class=\"\">\r\n                <a href=\"http://kaseya2.laureate.net\" target=\"_blank\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\">GO!</a>\r\n                <p> </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n            <div class=\"col-lg-2 col-md-6 mb-4\">\r\n                <div class=\"card \" style=\"height:300px;\">\r\n                    <img class=\"card-img-top\" [src]=\"fullImagePath\" alt=\"Card image cap\" style=\"height : 120px;\">\r\n                  <div class=\"card-body\">\r\n                    <p class=\"card-title\">Attending Web Register</p>\r\n                    <br>\r\n                  </div>\r\n                  <div class=\"\">\r\n                    <a href=\"http://laur.cc/lnoattendance\" target=\"_blank\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\">GO!</a>\r\n                    <p> </p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"col-lg-2 col-md-6 mb-4\">\r\n                  <div class=\"card \" style=\"height:300px;\">\r\n                      <img class=\"card-img-top\" [src]=\"fullImagePath\" alt=\"Card image cap\" style=\"height : 120px;\">\r\n                    <div class=\"card-body\">\r\n                      <p class=\"card-title\">VPN Installer Service</p>\r\n                      <br>\r\n                    </div>\r\n                    <div class=\"\">\r\n                      <a href=\"https://balt.remote.laureate.net\" target=\"_blank\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\">GO!</a>\r\n                      <p> </p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n\r\n\r\n  <!--            <div class=\"col-lg-2 col-md-6 mb-4\">\r\n                  <div class=\"card\">\r\n                    <img class=\"card-img-top\" src=\"http://placehold.it/500x325\" alt=\"\">\r\n                    <div class=\"card-body\">\r\n                      <p class=\"card-title\">Card title</p>\r\n                      <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>\r\n                    </div>\r\n                    <div class=\"\">\r\n                      <a href=\"#\" class=\"btn btn-primary\">Find Out More!</a>\r\n                    </div>\r\n                  </div>\r\n                </div> -->\r\n\r\n    </div>\r\n\r\n\r\n    <!-- segundo lote -->\r\n    <div class=\"row text-center\" >\r\n\r\n        <div class=\"col-lg-2 col-md-6 mb-4\">\r\n            <div class=\"card \" style=\"height:300px;\">\r\n                <img class=\"card-img-top\" [src]=\"sharepointImage\" alt=\"Card image cap\" style=\"height : 120px;\">\r\n              <div class=\"card-body\">\r\n                <p class=\"card-title\">Sharepoint architecture</p>\r\n                <br>\r\n              </div>\r\n              <div class=\"\">\r\n                <a href=\"https://laureatena.sharepoint.com/sites/itlno/it-arch/Shared%20Documents/Forms/AllItems.aspx?RootFolder=%2Fsites%2Fitlno%2Fit-arch%2FShared%20Documents%2FIT%20Architecture%2FZoom&FolderCTID=0x0120002A4011C06BDFAB41A7ECE5593132BC5A\" target=\"_blank\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\">GO!</a>\r\n                <p> </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n      <div class=\"col-lg-2 col-md-6 mb-4\">\r\n        <div class=\"card \" style=\"height:300px;\">\r\n          <!-- icono -->\r\n          \r\n          <img class=\"card-img-top\" [src]=\"assetImage\" alt=\"Card image cap\" style=\"height: 120px;\">\r\n          <div class=\"card-body\">\r\n            <p class=\"card-title\">Asset Explorer.</p>\r\n            <br>\r\n            <!-- <p class=\"card-text\"></p>-->\r\n          </div>\r\n          <div class=\"\">\r\n            <a href=\"http://172.20.33.40:8080\" target=\"_blank\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\">GO!</a>\r\n            <p> </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"col-lg-2 col-md-6 mb-4\">\r\n          <div class=\"card \" style=\"height:300px;\">\r\n              <img class=\"card-img-top\" [src]=\"elasticx\" alt=\"Card image cap\" style=\"height : 120px;\">\r\n            <div class=\"card-body\">\r\n              <p> </p>\r\n              <p class=\"card-title\">PBX console</p>\r\n              <br>\r\n             <!--> <p class=\"card-text\"></p> -->\r\n            </div>\r\n            <div class=\"\">\r\n              <a href=\"http://172.20.33.33\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\" target=\"_blank\">GO!</a>\r\n              <p> </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-lg-2 col-md-6 mb-4\">\r\n            <div class=\"card \" style=\"height:300px;\">\r\n                <img class=\"card-img-top\" [src]=\"ricohImage\" alt=\"Card image cap\" style=\"height : 120px;\">\r\n              <div class=\"card-body\">\r\n                <p class=\"card-title\">Printer web console</p>\r\n                <br>\r\n              </div>\r\n              <div class=\"\">\r\n                <a href=\" http://172.20.35.101\" target=\"_blank\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\">GO!</a>\r\n                <p> </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n            <div class=\"col-lg-2 col-md-6 mb-4\">\r\n                <div class=\"card \" style=\"height:300px;\">\r\n                    <img class=\"card-img-top\" [src]=\"zoomImage\" alt=\"Card image cap\" style=\"height : 130px;\">\r\n                  <div class=\"card-body\">\r\n                    <p> </p>\r\n                    <p class=\"card-title\">Zoom console </p>\r\n                    <br>\r\n                  </div>\r\n                  <div class=\"\">\r\n                    <a href=\"https://zoom.us/account/user\" target=\"_blank\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\">GO!</a>\r\n                    <p> </p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"col-lg-2 col-md-6 mb-4\">\r\n                  <div class=\"card \" style=\"height:300px;\">\r\n                      <img class=\"card-img-top\" [src]=\"fullImagePath\" alt=\"Card image cap\" style=\"height : 120px;\">\r\n                    <div class=\"card-body\">\r\n                      <p class=\"card-title\">LOE/Email Password Reset</p>\r\n                    </div>\r\n                    <div class=\"\">\r\n                      <a href=\"http://laur.cc/passwordreset \" target=\"_blank\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\">GO!</a>\r\n                      <p> </p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n\r\n\r\n  <!--            <div class=\"col-lg-2 col-md-6 mb-4\">\r\n                  <div class=\"card\">\r\n                    <img class=\"card-img-top\" src=\"http://placehold.it/500x325\" alt=\"\">\r\n                    <div class=\"card-body\">\r\n                      <p class=\"card-title\">Card title</p>\r\n                      <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>\r\n                    </div>\r\n                    <div class=\"\">\r\n                      <a href=\"#\" class=\"btn btn-primary\">Find Out More!</a>\r\n                    </div>\r\n                  </div>\r\n                </div> -->\r\n\r\n    </div>\r\n\r\n    <!-- 3 -->\r\n\r\n    <div class=\"row text-center\" >\r\n\r\n        <div class=\"col-lg-2 col-md-6 mb-4\">\r\n          </div>\r\n\r\n      <div class=\"col-lg-2 col-md-6 mb-4\">\r\n          <div class=\"card \" style=\"height:300px;\">\r\n              <img class=\"card-img-top\" [src]=\"officeImage\" alt=\"Card image cap\" style=\"height : 120px;\">\r\n            <div class=\"card-body\">\r\n              <p> </p>\r\n              <p class=\"card-title\">Office Web Home</p>\r\n             <!--> <p class=\"card-text\"></p> -->\r\n            </div>\r\n            <div class=\"\">\r\n              <a href=\"http://portal.office.com\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\" target=\"_blank\">GO!</a>\r\n              <p> </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-lg-2 col-md-6 mb-4\">\r\n            <div class=\"card\" style=\"height:300px;\">\r\n                <img class=\"card-img-top\" [src]=\"bitly\" alt=\"Card image cap\" style=\"height : 120px;\">\r\n              <div class=\"card-body\">\r\n                <p> </p>\r\n                <p class=\"card-title\">ShortURL Admin</p>\r\n              </div>\r\n              <div class=\"\">\r\n                <a href=\"http://laur.cc/admin\" target=\"_blank\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\">GO!</a>\r\n                <p> </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-2 col-md-6 mb-4\">\r\n            <div class=\"card\" style=\"height:300px;\">\r\n                <img class=\"card-img-top\" [src]=\"adimage\" alt=\"Card image cap\" style=\"height : 120px;\">\r\n              <div class=\"card-body\">\r\n                <p> </p>\r\n                <p class=\"card-title\">AD Manager</p>\r\n              </div>\r\n              <div class=\"\">\r\n                <a href=\"http://mddcadmin01.loe.corp:8080//logout.do\" target=\"_blank\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\">GO!</a>\r\n                <p> </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-2 col-md-6 mb-4\">\r\n            <div class=\"card\" style=\"height:300px;\">\r\n                <img class=\"card-img-top\" [src]=\"jamfimage\" alt=\"Card image cap\" style=\"height : 120px;\">\r\n              <div class=\"card-body\">\r\n                <p> </p>\r\n                <p class=\"card-title\">JAMF-Safari-Only</p>\r\n              </div>\r\n              <div class=\"\">\r\n                <a href=\"http://jamf.laureate.net:8443\" target=\"_blank\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\">GO!</a>\r\n                <p> </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          \r\n\r\n        \r\n    </div>\r\n   <!--  <button class=\"btn btn-primary\" (click)=\"viewMore()\">View More</button> -->\r\n    <!-- /.row -->\r\n\r\n  </div>\r\n</body>\r\n\r\n"

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
        this.secondRow = false;
        this.thirdRow = false;
        this.fullImagePath = '/assets/images/1248485_300.jpg';
        this.sharepointImage = '/assets/images/shareoint.jpg';
        this.footprintsImage = '/assets/images/footprints.png';
        this.kaseyaImage = '/assets/images/kaseya-logo@2x.png';
        this.assetImage = '/assets/images/405899-manageengine-logo.jpg';
        this.elasticx = '/assets/images/245px-Isotipo-elastix.png';
        this.ricohImage = '/assets/images/61fbTfolvQL.png';
        this.zoomImage = '/assets/images/logo-zoom.png';
        this.bitly = '/assets/images/Logo_bitly.jpg';
        this.officeImage = '/assets/images/office.jpg';
        this.mainImage = '/assets/images/beard-chair-computer-840996.jpg';
        this.adimage = '/assets/images/ad.png';
        this.jamfimage = '/assets/images/jamf.png';
    }
    LoginComponent.prototype.ngOnInit = function () {
        /*if(!this.cookieService.get('user_name')){
          this.router.navigateByUrl('/');
        }*/
        this.login.getCookie().subscribe(function (res) {
            //this.test();
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
    LoginComponent.prototype.viewMore = function () {
        if (this.secondRow) {
            this.thirdRow = true;
        }
        else {
            this.secondRow = true;
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-bitly/main-bitly.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n\r\n/* ###################################################### */\r\n\r\n/*!\r\n * Mobirise v4 theme (https://mobirise.com/)\r\n * Copyright 2017 Mobirise\r\n */\r\n\r\nsection {\r\n  background-color: #eeeeee; }\r\n\r\nsection,\r\n.container,\r\n.container-fluid {\r\n  position: relative;\r\n  word-wrap: break-word; }\r\n\r\na.mbr-iconfont:hover {\r\n  text-decoration: none; }\r\n\r\n.article .lead p, .article .lead ul, .article .lead ol, .article .lead pre, .article .lead blockquote {\r\n  margin-bottom: 0; }\r\n\r\na {\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  cursor: pointer; }\r\n\r\na, a:hover {\r\n    text-decoration: none; }\r\n\r\nfigure {\r\n  margin-bottom: 0; }\r\n\r\nbody {\r\n  color: #232323; }\r\n\r\nh1, h2, h3, h4, h5, h6,\r\n.h1, .h2, .h3, .h4, .h5, .h6,\r\n.display-1, .display-2, .display-3, .display-4 {\r\n  line-height: 1;\r\n  word-break: break-word;\r\n  word-wrap: break-word; }\r\n\r\nb, strong {\r\n  font-weight: bold; }\r\n\r\nblockquote {\r\n  padding: 10px 0 10px 20px;\r\n  position: relative;\r\n  border-left: 2px solid;\r\n  border-color: #ff3366; }\r\n\r\ninput:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active {\r\n  -webkit-transition-delay: 9999s;\r\n          transition-delay: 9999s;\r\n  -webkit-transition-property: background-color, color;\r\n  transition-property: background-color, color; }\r\n\r\ntextarea[type=\"hidden\"] {\r\n  display: none; }\r\n\r\nbody {\r\n  position: relative; }\r\n\r\nsection {\r\n  background-position: 50% 50%;\r\n  background-repeat: no-repeat;\r\n  background-size: cover; }\r\n\r\nsection .mbr-background-video,\r\n  section .mbr-background-video-preview {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0; }\r\n\r\n.hidden {\r\n  visibility: hidden; }\r\n\r\n.mbr-z-index20 {\r\n  z-index: 20; }\r\n\r\n/*! Base colors */\r\n\r\n.mbr-white {\r\n  color: #ffffff; }\r\n\r\n.mbr-black {\r\n  color: #000000; }\r\n\r\n.mbr-bg-white {\r\n  background-color: #ffffff; }\r\n\r\n.mbr-bg-black {\r\n  background-color: #000000; }\r\n\r\n/*! Text-aligns */\r\n\r\n.align-left {\r\n  text-align: left; }\r\n\r\n.align-center {\r\n  text-align: center; }\r\n\r\n.align-right {\r\n  text-align: right; }\r\n\r\n@media (max-width: 767px) {\r\n  .align-left, .align-center, .align-right, .mbr-section-btn, .mbr-section-title {\r\n    text-align: center; } }\r\n\r\n/*! Font-weight  */\r\n\r\n.mbr-light {\r\n  font-weight: 300; }\r\n\r\n.mbr-regular {\r\n  font-weight: 400; }\r\n\r\n.mbr-semibold {\r\n  font-weight: 500; }\r\n\r\n.mbr-bold {\r\n  font-weight: 700; }\r\n\r\n/*! Media  */\r\n\r\n.media-size-item {\r\n  -moz-flex: 1 1 auto;\r\n  -ms-flex: 1 1 auto;\r\n  -o-flex: 1 1 auto;\r\n  -webkit-box-flex: 1;\r\n          flex: 1 1 auto; }\r\n\r\n.media-content {\r\n  -ms-flex-preferred-size: 100%;\r\n      flex-basis: 100%; }\r\n\r\n.media-container-row {\r\n  display: -ms-flexbox;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -ms-flex-direction: row;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  -ms-flex-wrap: wrap;\r\n  flex-wrap: wrap;\r\n  -ms-flex-pack: center;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -ms-flex-line-pack: center;\r\n  align-content: center;\r\n  -ms-flex-align: start;\r\n  -webkit-box-align: start;\r\n          align-items: start; }\r\n\r\n.media-container-row .media-size-item {\r\n    width: 400px; }\r\n\r\n.media-container-column {\r\n  display: -ms-flexbox;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -ms-flex-direction: column;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -ms-flex-wrap: wrap;\r\n  flex-wrap: wrap;\r\n  -ms-flex-pack: center;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -ms-flex-line-pack: center;\r\n  align-content: center;\r\n  -ms-flex-align: stretch;\r\n  -webkit-box-align: stretch;\r\n          align-items: stretch; }\r\n\r\n.media-container-column > * {\r\n    width: 100%; }\r\n\r\n@media (min-width: 992px) {\r\n  .media-container-row {\r\n    -ms-flex-wrap: nowrap;\r\n    flex-wrap: nowrap; } }\r\n\r\nfigure {\r\n  overflow: hidden; }\r\n\r\nfigure[mbr-media-size] {\r\n  -webkit-transition: width 0.1s;\r\n  transition: width 0.1s; }\r\n\r\n.mbr-figure img, .mbr-figure iframe {\r\n  display: block;\r\n  width: 100%; }\r\n\r\n.card {\r\n  background-color: transparent;\r\n  border: none; }\r\n\r\n.card-img {\r\n  text-align: center;\r\n  -ms-flex-negative: 0;\r\n      flex-shrink: 0;\r\n  -webkit-flex-shrink: 0; }\r\n\r\n.media {\r\n  max-width: 100%;\r\n  margin: 0 auto; }\r\n\r\n.mbr-figure {\r\n  -ms-flex-item-align: center;\r\n  -ms-grid-row-align: center;\r\n  -webkit-align-self: center;\r\n  align-self: center; }\r\n\r\n.media-container > div {\r\n  max-width: 100%; }\r\n\r\n.mbr-figure img, .card-img img {\r\n  width: 100%; }\r\n\r\n@media (max-width: 991px) {\r\n  .media-size-item {\r\n    width: auto !important; }\r\n\r\n  .media {\r\n    width: auto; }\r\n\r\n  .mbr-figure {\r\n    width: 100% !important; } }\r\n\r\n/*! Buttons */\r\n\r\n.mbr-section-btn {\r\n  margin-left: -.25rem;\r\n  margin-right: -.25rem;\r\n  font-size: 0; }\r\n\r\nnav .mbr-section-btn {\r\n  margin-left: 0rem;\r\n  margin-right: 0rem; }\r\n\r\n/*! Btn icon margin */\r\n\r\n.btn .mbr-iconfont, .btn.btn-sm .mbr-iconfont {\r\n  cursor: pointer;\r\n  margin-right: 0.5rem; }\r\n\r\n.btn.btn-md .mbr-iconfont, .btn.btn-md .mbr-iconfont {\r\n  margin-right: 0.8rem; }\r\n\r\n.mbr-regular {\r\n  font-weight: 400; }\r\n\r\n.mbr-semibold {\r\n  font-weight: 500; }\r\n\r\n.mbr-bold {\r\n  font-weight: 700; }\r\n\r\n[type=\"submit\"] {\r\n  -webkit-appearance: none; }\r\n\r\n/*! Full-screen */\r\n\r\n.mbr-fullscreen .mbr-overlay {\r\n  min-height: 100vh; }\r\n\r\n.mbr-fullscreen {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  display: -moz-flex;\r\n  display: -ms-flex;\r\n  display: -o-flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-align-items: center;\r\n  min-height: 100vh;\r\n  padding-top: 3rem;\r\n  padding-bottom: 3rem; }\r\n\r\n/*! Map */\r\n\r\n.map {\r\n  height: 25rem;\r\n  position: relative; }\r\n\r\n.map iframe {\r\n    width: 100%;\r\n    height: 100%; }\r\n\r\n/* Form */\r\n\r\n.form-asterisk {\r\n  font-family: initial;\r\n  position: absolute;\r\n  top: -2px;\r\n  font-weight: normal; }\r\n\r\n/*! Scroll to top arrow */\r\n\r\n.mbr-arrow-up {\r\n  bottom: 25px;\r\n  right: 90px;\r\n  position: fixed;\r\n  text-align: right;\r\n  z-index: 5000;\r\n  color: #ffffff;\r\n  font-size: 32px;\r\n  transform: rotate(180deg);\r\n  -webkit-transform: rotate(180deg); }\r\n\r\n.mbr-arrow-up a {\r\n  background: rgba(0, 0, 0, 0.2);\r\n  border-radius: 3px;\r\n  color: #fff;\r\n  display: inline-block;\r\n  height: 60px;\r\n  width: 60px;\r\n  outline-style: none !important;\r\n  position: relative;\r\n  text-decoration: none;\r\n  -webkit-transition: all .3s ease-in-out;\r\n  transition: all .3s ease-in-out;\r\n  cursor: pointer;\r\n  text-align: center; }\r\n\r\n.mbr-arrow-up a:hover {\r\n    background-color: rgba(0, 0, 0, 0.4); }\r\n\r\n.mbr-arrow-up a i {\r\n    line-height: 60px; }\r\n\r\n.mbr-arrow-up-icon {\r\n  display: block;\r\n  color: #fff; }\r\n\r\n.mbr-arrow-up-icon::before {\r\n  content: \"\\203A\";\r\n  display: inline-block;\r\n  font-family: serif;\r\n  font-size: 32px;\r\n  line-height: 1;\r\n  font-style: normal;\r\n  position: relative;\r\n  top: 6px;\r\n  left: -4px;\r\n  -webkit-transform: rotate(-90deg);\r\n  transform: rotate(-90deg); }\r\n\r\n/*! Arrow Down */\r\n\r\n.mbr-arrow {\r\n  position: absolute;\r\n  bottom: 45px;\r\n  left: 50%;\r\n  width: 60px;\r\n  height: 60px;\r\n  cursor: pointer;\r\n  background-color: rgba(80, 80, 80, 0.5);\r\n  border-radius: 50%;\r\n  -webkit-transform: translateX(-50%);\r\n  transform: translateX(-50%); }\r\n\r\n.mbr-arrow > a {\r\n    display: inline-block;\r\n    text-decoration: none;\r\n    outline-style: none;\r\n    -webkit-animation: arrowdown 1.7s ease-in-out infinite;\r\n    animation: arrowdown 1.7s ease-in-out infinite; }\r\n\r\n.mbr-arrow > a > i {\r\n      position: absolute;\r\n      top: -2px;\r\n      left: 15px;\r\n      font-size: 2rem; }\r\n\r\n@keyframes arrowdown {\r\n  0% {\r\n    transform: translateY(0px);\r\n    -webkit-transform: translateY(0px); }\r\n  50% {\r\n    transform: translateY(-5px);\r\n    -webkit-transform: translateY(-5px); }\r\n  100% {\r\n    transform: translateY(0px);\r\n    -webkit-transform: translateY(0px); } }\r\n\r\n@-webkit-keyframes arrowdown {\r\n  0% {\r\n    transform: translateY(0px);\r\n    -webkit-transform: translateY(0px); }\r\n  50% {\r\n    transform: translateY(-5px);\r\n    -webkit-transform: translateY(-5px); }\r\n  100% {\r\n    transform: translateY(0px);\r\n    -webkit-transform: translateY(0px); } }\r\n\r\n@media (max-width: 500px) {\r\n  .mbr-arrow-up {\r\n    left: 50%;\r\n    right: auto;\r\n    transform: translateX(-50%) rotate(180deg);\r\n    -webkit-transform: translateX(-50%) rotate(180deg); } }\r\n\r\n/*Gradients animation*/\r\n\r\n@keyframes gradient-animation {\r\n  from {\r\n    background-position: 0% 100%;\r\n    -webkit-animation-timing-function: ease-in-out;\r\n            animation-timing-function: ease-in-out; }\r\n  to {\r\n    background-position: 100% 0%;\r\n    -webkit-animation-timing-function: ease-in-out;\r\n            animation-timing-function: ease-in-out; } }\r\n\r\n@-webkit-keyframes gradient-animation {\r\n  from {\r\n    background-position: 0% 100%;\r\n    -webkit-animation-timing-function: ease-in-out;\r\n            animation-timing-function: ease-in-out; }\r\n  to {\r\n    background-position: 100% 0%;\r\n    -webkit-animation-timing-function: ease-in-out;\r\n            animation-timing-function: ease-in-out; } }\r\n\r\n.bg-gradient {\r\n  background-size: 200% 200%;\r\n  animation: gradient-animation 5s infinite alternate;\r\n  -webkit-animation: gradient-animation 5s infinite alternate; }\r\n\r\n.menu .navbar-brand {\r\n  display: -webkit-flex; }\r\n\r\n.menu .navbar-brand span {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    display: -webkit-flex; }\r\n\r\n.menu .navbar-brand .navbar-caption-wrap {\r\n    display: -webkit-flex; }\r\n\r\n.menu .navbar-brand .navbar-logo img {\r\n    display: -webkit-flex; }\r\n\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n  .menu .navbar-toggleable-sm .navbar-nav {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox; } }\r\n\r\n@media (min-width: 992px) {\r\n  .menu .navbar-nav.nav-dropdown {\r\n    display: -webkit-flex; }\r\n  .menu .navbar-toggleable-sm .navbar-collapse {\r\n    display: -webkit-flex !important; } }\r\n\r\n@media (max-width: 767px) {\r\n  .menu .navbar-collapse {\r\n    max-height: 80vh; }\r\n  .menu .dropdown-menu {\r\n    max-height: 60vh; } }\r\n\r\n.navbar {\r\n  display: -webkit-flex;\r\n  -webkit-flex-wrap: wrap;\r\n  -webkit-align-items: center;\r\n  -webkit-justify-content: space-between; }\r\n\r\n.navbar-collapse {\r\n  -webkit-flex-basis: 100%;\r\n  -webkit-flex-grow: 1;\r\n  -webkit-align-items: center; }\r\n\r\n.nav-dropdown .link {\r\n  padding: .667em 1.667em !important;\r\n  margin: 0 !important; }\r\n\r\n.nav {\r\n  display: -webkit-flex;\r\n  -webkit-flex-wrap: wrap; }\r\n\r\n.row {\r\n  display: -webkit-flex;\r\n  -webkit-flex-wrap: wrap; }\r\n\r\n.justify-content-center {\r\n  -webkit-justify-content: center; }\r\n\r\n.form-inline {\r\n  display: -webkit-flex;\r\n  -webkit-align-items: center; }\r\n\r\n.card-wrapper {\r\n  -webkit-flex: 1; }\r\n\r\n.carousel-control {\r\n  z-index: 10;\r\n  display: -webkit-flex;\r\n  -webkit-align-items: center;\r\n  -webkit-justify-content: center; }\r\n\r\n.carousel-controls {\r\n  display: -webkit-flex; }\r\n\r\n.media {\r\n  display: -webkit-flex; }\r\n\r\n.jq-selectbox__select {\r\n  padding: 1.07em .5em;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%; }\r\n\r\n.jq-selectbox__dropdown {\r\n  position: absolute;\r\n  top: 100% !important;\r\n  left: 0 !important;\r\n  width: 100% !important; }\r\n\r\n.jq-selectbox__trigger-arrow {\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%); }\r\n\r\n.jq-selectbox li {\r\n  padding: 1.07em .5em; }\r\n\r\n.engine {\r\n\tposition: absolute;\r\n\ttext-indent: -2400px;\r\n\ttext-align: center;\r\n\tpadding: 0;\r\n\ttop: 0;\r\n\tleft: -2400px;\r\n}\r\n\r\nbody {\r\n  font-style: normal;\r\n  line-height: 1.5;\r\n}\r\n\r\n.mbr-section-title {\r\n  font-style: normal;\r\n  line-height: 1.2;\r\n}\r\n\r\n.mbr-section-subtitle {\r\n  line-height: 1.3;\r\n}\r\n\r\n.mbr-text {\r\n  font-style: normal;\r\n  line-height: 1.6;\r\n}\r\n\r\n.display-1 {\r\n  font-family: 'Rubik', sans-serif;\r\n  font-size: 4.25rem;\r\n}\r\n\r\n.display-1 > .mbr-iconfont {\r\n  font-size: 6.8rem;\r\n}\r\n\r\n.display-2 {\r\n  font-family: 'Rubik', sans-serif;\r\n  font-size: 3rem;\r\n}\r\n\r\n.display-2 > .mbr-iconfont {\r\n  font-size: 4.8rem;\r\n}\r\n\r\n.display-4 {\r\n  font-family: 'Rubik', sans-serif;\r\n  font-size: 1rem;\r\n}\r\n\r\n.display-4 > .mbr-iconfont {\r\n  font-size: 1.6rem;\r\n}\r\n\r\n.display-5 {\r\n  font-family: 'Rubik', sans-serif;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.display-5 > .mbr-iconfont {\r\n  font-size: 2.4rem;\r\n}\r\n\r\n.display-7 {\r\n  font-family: 'Rubik', sans-serif;\r\n  font-size: 1rem;\r\n}\r\n\r\n.display-7 > .mbr-iconfont {\r\n  font-size: 1.6rem;\r\n}\r\n\r\n/* ---- Fluid typography for mobile devices ---- */\r\n\r\n/* 1.4 - font scale ratio ( bootstrap == 1.42857 ) */\r\n\r\n/* 100vw - current viewport width */\r\n\r\n/* (48 - 20)  48 == 48rem == 768px, 20 == 20rem == 320px(minimal supported viewport) */\r\n\r\n/* 0.65 - min scale variable, may vary */\r\n\r\n@media (max-width: 768px) {\r\n  .display-1 {\r\n    font-size: 3.4rem;\r\n    font-size: calc( 2.1374999999999997rem + (4.25 - 2.1374999999999997) * ((100vw - 20rem) / (48 - 20)));\r\n    line-height: calc( 1.4 * (2.1374999999999997rem + (4.25 - 2.1374999999999997) * ((100vw - 20rem) / (48 - 20))));\r\n  }\r\n  .display-2 {\r\n    font-size: 2.4rem;\r\n    font-size: calc( 1.7rem + (3 - 1.7) * ((100vw - 20rem) / (48 - 20)));\r\n    line-height: calc( 1.4 * (1.7rem + (3 - 1.7) * ((100vw - 20rem) / (48 - 20))));\r\n  }\r\n  .display-4 {\r\n    font-size: 0.8rem;\r\n    font-size: calc( 1rem + (1 - 1) * ((100vw - 20rem) / (48 - 20)));\r\n    line-height: calc( 1.4 * (1rem + (1 - 1) * ((100vw - 20rem) / (48 - 20))));\r\n  }\r\n  .display-5 {\r\n    font-size: 1.2rem;\r\n    font-size: calc( 1.175rem + (1.5 - 1.175) * ((100vw - 20rem) / (48 - 20)));\r\n    line-height: calc( 1.4 * (1.175rem + (1.5 - 1.175) * ((100vw - 20rem) / (48 - 20))));\r\n  }\r\n}\r\n\r\n/* Buttons */\r\n\r\n.btn {\r\n  font-weight: 500;\r\n  border-width: 2px;\r\n  font-style: normal;\r\n  letter-spacing: 1px;\r\n  margin: .4rem .8rem;\r\n  white-space: normal;\r\n  -webkit-transition: all 0.3s ease-in-out;\r\n  transition: all 0.3s ease-in-out;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  word-break: break-word;\r\n  -webkit-align-items: center;\r\n  -webkit-justify-content: center;\r\n  display: -webkit-inline-flex;\r\n  padding: 1rem 3rem;\r\n  border-radius: 3px;\r\n}\r\n\r\n.btn-sm {\r\n  font-weight: 500;\r\n  letter-spacing: 1px;\r\n  -webkit-transition: all 0.3s ease-in-out;\r\n  transition: all 0.3s ease-in-out;\r\n  padding: 0.6rem 1.5rem;\r\n  border-radius: 3px;\r\n}\r\n\r\n.btn-md {\r\n  font-weight: 500;\r\n  letter-spacing: 1px;\r\n  margin: .4rem .8rem !important;\r\n  -webkit-transition: all 0.3s ease-in-out;\r\n  transition: all 0.3s ease-in-out;\r\n  padding: 1rem 3rem;\r\n  border-radius: 3px;\r\n}\r\n\r\n.btn-lg {\r\n  font-weight: 500;\r\n  letter-spacing: 1px;\r\n  margin: .4rem .8rem !important;\r\n  -webkit-transition: all 0.3s ease-in-out;\r\n  transition: all 0.3s ease-in-out;\r\n  padding: 1.2rem 3.2rem;\r\n  border-radius: 3px;\r\n}\r\n\r\n.bg-primary {\r\n  background-color: #149dcc !important;\r\n}\r\n\r\n.bg-success {\r\n  background-color: #f7ed4a !important;\r\n}\r\n\r\n.bg-info {\r\n  background-color: #82786e !important;\r\n}\r\n\r\n.bg-warning {\r\n  background-color: #879a9f !important;\r\n}\r\n\r\n.bg-danger {\r\n  background-color: #b1a374 !important;\r\n}\r\n\r\n.btn-primary,\r\n.btn-primary:active {\r\n  background-color: #149dcc !important;\r\n  border-color: #149dcc !important;\r\n  color: #ffffff !important;\r\n}\r\n\r\n.btn-primary:hover,\r\n.btn-primary:focus,\r\n.btn-primary.focus,\r\n.btn-primary.active {\r\n  color: #ffffff !important;\r\n  background-color: #0d6786 !important;\r\n  border-color: #0d6786 !important;\r\n}\r\n\r\n.btn-primary.disabled,\r\n.btn-primary:disabled {\r\n  color: #ffffff !important;\r\n  background-color: #0d6786 !important;\r\n  border-color: #0d6786 !important;\r\n}\r\n\r\n.btn-secondary,\r\n.btn-secondary:active {\r\n  background-color: #ff3366 !important;\r\n  border-color: #ff3366 !important;\r\n  color: #ffffff !important;\r\n}\r\n\r\n.btn-secondary:hover,\r\n.btn-secondary:focus,\r\n.btn-secondary.focus,\r\n.btn-secondary.active {\r\n  color: #ffffff !important;\r\n  background-color: #e50039 !important;\r\n  border-color: #e50039 !important;\r\n}\r\n\r\n.btn-secondary.disabled,\r\n.btn-secondary:disabled {\r\n  color: #ffffff !important;\r\n  background-color: #e50039 !important;\r\n  border-color: #e50039 !important;\r\n}\r\n\r\n.btn-info,\r\n.btn-info:active {\r\n  background-color: #82786e !important;\r\n  border-color: #82786e !important;\r\n  color: #ffffff !important;\r\n}\r\n\r\n.btn-info:hover,\r\n.btn-info:focus,\r\n.btn-info.focus,\r\n.btn-info.active {\r\n  color: #ffffff !important;\r\n  background-color: #59524b !important;\r\n  border-color: #59524b !important;\r\n}\r\n\r\n.btn-info.disabled,\r\n.btn-info:disabled {\r\n  color: #ffffff !important;\r\n  background-color: #59524b !important;\r\n  border-color: #59524b !important;\r\n}\r\n\r\n.btn-success,\r\n.btn-success:active {\r\n  background-color: #f7ed4a !important;\r\n  border-color: #f7ed4a !important;\r\n  color: #3f3c03 !important;\r\n}\r\n\r\n.btn-success:hover,\r\n.btn-success:focus,\r\n.btn-success.focus,\r\n.btn-success.active {\r\n  color: #3f3c03 !important;\r\n  background-color: #eadd0a !important;\r\n  border-color: #eadd0a !important;\r\n}\r\n\r\n.btn-success.disabled,\r\n.btn-success:disabled {\r\n  color: #3f3c03 !important;\r\n  background-color: #eadd0a !important;\r\n  border-color: #eadd0a !important;\r\n}\r\n\r\n.btn-warning,\r\n.btn-warning:active {\r\n  background-color: #879a9f !important;\r\n  border-color: #879a9f !important;\r\n  color: #ffffff !important;\r\n}\r\n\r\n.btn-warning:hover,\r\n.btn-warning:focus,\r\n.btn-warning.focus,\r\n.btn-warning.active {\r\n  color: #ffffff !important;\r\n  background-color: #617479 !important;\r\n  border-color: #617479 !important;\r\n}\r\n\r\n.btn-warning.disabled,\r\n.btn-warning:disabled {\r\n  color: #ffffff !important;\r\n  background-color: #617479 !important;\r\n  border-color: #617479 !important;\r\n}\r\n\r\n.btn-danger,\r\n.btn-danger:active {\r\n  background-color: #b1a374 !important;\r\n  border-color: #b1a374 !important;\r\n  color: #ffffff !important;\r\n}\r\n\r\n.btn-danger:hover,\r\n.btn-danger:focus,\r\n.btn-danger.focus,\r\n.btn-danger.active {\r\n  color: #ffffff !important;\r\n  background-color: #8b7d4e !important;\r\n  border-color: #8b7d4e !important;\r\n}\r\n\r\n.btn-danger.disabled,\r\n.btn-danger:disabled {\r\n  color: #ffffff !important;\r\n  background-color: #8b7d4e !important;\r\n  border-color: #8b7d4e !important;\r\n}\r\n\r\n.btn-white {\r\n  color: #333333 !important;\r\n}\r\n\r\n.btn-white,\r\n.btn-white:active {\r\n  background-color: #ffffff !important;\r\n  border-color: #ffffff !important;\r\n  color: #808080 !important;\r\n}\r\n\r\n.btn-white:hover,\r\n.btn-white:focus,\r\n.btn-white.focus,\r\n.btn-white.active {\r\n  color: #808080 !important;\r\n  background-color: #d9d9d9 !important;\r\n  border-color: #d9d9d9 !important;\r\n}\r\n\r\n.btn-white.disabled,\r\n.btn-white:disabled {\r\n  color: #808080 !important;\r\n  background-color: #d9d9d9 !important;\r\n  border-color: #d9d9d9 !important;\r\n}\r\n\r\n.btn-black,\r\n.btn-black:active {\r\n  background-color: #333333 !important;\r\n  border-color: #333333 !important;\r\n  color: #ffffff !important;\r\n}\r\n\r\n.btn-black:hover,\r\n.btn-black:focus,\r\n.btn-black.focus,\r\n.btn-black.active {\r\n  color: #ffffff !important;\r\n  background-color: #0d0d0d !important;\r\n  border-color: #0d0d0d !important;\r\n}\r\n\r\n.btn-black.disabled,\r\n.btn-black:disabled {\r\n  color: #ffffff !important;\r\n  background-color: #0d0d0d !important;\r\n  border-color: #0d0d0d !important;\r\n}\r\n\r\n.btn-primary-outline,\r\n.btn-primary-outline:active {\r\n  background: none;\r\n  border-color: #0b566f;\r\n  color: #0b566f;\r\n}\r\n\r\n.btn-primary-outline:hover,\r\n.btn-primary-outline:focus,\r\n.btn-primary-outline.focus,\r\n.btn-primary-outline.active {\r\n  color: #ffffff;\r\n  background-color: #149dcc;\r\n  border-color: #149dcc;\r\n}\r\n\r\n.btn-primary-outline.disabled,\r\n.btn-primary-outline:disabled {\r\n  color: #ffffff !important;\r\n  background-color: #149dcc !important;\r\n  border-color: #149dcc !important;\r\n}\r\n\r\n.btn-secondary-outline,\r\n.btn-secondary-outline:active {\r\n  background: none;\r\n  border-color: #cc0033;\r\n  color: #cc0033;\r\n}\r\n\r\n.btn-secondary-outline:hover,\r\n.btn-secondary-outline:focus,\r\n.btn-secondary-outline.focus,\r\n.btn-secondary-outline.active {\r\n  color: #ffffff;\r\n  background-color: #ff3366;\r\n  border-color: #ff3366;\r\n}\r\n\r\n.btn-secondary-outline.disabled,\r\n.btn-secondary-outline:disabled {\r\n  color: #ffffff !important;\r\n  background-color: #ff3366 !important;\r\n  border-color: #ff3366 !important;\r\n}\r\n\r\n.btn-info-outline,\r\n.btn-info-outline:active {\r\n  background: none;\r\n  border-color: #4b453f;\r\n  color: #4b453f;\r\n}\r\n\r\n.btn-info-outline:hover,\r\n.btn-info-outline:focus,\r\n.btn-info-outline.focus,\r\n.btn-info-outline.active {\r\n  color: #ffffff;\r\n  background-color: #82786e;\r\n  border-color: #82786e;\r\n}\r\n\r\n.btn-info-outline.disabled,\r\n.btn-info-outline:disabled {\r\n  color: #ffffff !important;\r\n  background-color: #82786e !important;\r\n  border-color: #82786e !important;\r\n}\r\n\r\n.btn-success-outline,\r\n.btn-success-outline:active {\r\n  background: none;\r\n  border-color: #d2c609;\r\n  color: #d2c609;\r\n}\r\n\r\n.btn-success-outline:hover,\r\n.btn-success-outline:focus,\r\n.btn-success-outline.focus,\r\n.btn-success-outline.active {\r\n  color: #3f3c03;\r\n  background-color: #f7ed4a;\r\n  border-color: #f7ed4a;\r\n}\r\n\r\n.btn-success-outline.disabled,\r\n.btn-success-outline:disabled {\r\n  color: #3f3c03 !important;\r\n  background-color: #f7ed4a !important;\r\n  border-color: #f7ed4a !important;\r\n}\r\n\r\n.btn-warning-outline,\r\n.btn-warning-outline:active {\r\n  background: none;\r\n  border-color: #55666b;\r\n  color: #55666b;\r\n}\r\n\r\n.btn-warning-outline:hover,\r\n.btn-warning-outline:focus,\r\n.btn-warning-outline.focus,\r\n.btn-warning-outline.active {\r\n  color: #ffffff;\r\n  background-color: #879a9f;\r\n  border-color: #879a9f;\r\n}\r\n\r\n.btn-warning-outline.disabled,\r\n.btn-warning-outline:disabled {\r\n  color: #ffffff !important;\r\n  background-color: #879a9f !important;\r\n  border-color: #879a9f !important;\r\n}\r\n\r\n.btn-danger-outline,\r\n.btn-danger-outline:active {\r\n  background: none;\r\n  border-color: #7a6e45;\r\n  color: #7a6e45;\r\n}\r\n\r\n.btn-danger-outline:hover,\r\n.btn-danger-outline:focus,\r\n.btn-danger-outline.focus,\r\n.btn-danger-outline.active {\r\n  color: #ffffff;\r\n  background-color: #b1a374;\r\n  border-color: #b1a374;\r\n}\r\n\r\n.btn-danger-outline.disabled,\r\n.btn-danger-outline:disabled {\r\n  color: #ffffff !important;\r\n  background-color: #b1a374 !important;\r\n  border-color: #b1a374 !important;\r\n}\r\n\r\n.btn-black-outline,\r\n.btn-black-outline:active {\r\n  background: none;\r\n  border-color: #000000;\r\n  color: #000000;\r\n}\r\n\r\n.btn-black-outline:hover,\r\n.btn-black-outline:focus,\r\n.btn-black-outline.focus,\r\n.btn-black-outline.active {\r\n  color: #ffffff;\r\n  background-color: #333333;\r\n  border-color: #333333;\r\n}\r\n\r\n.btn-black-outline.disabled,\r\n.btn-black-outline:disabled {\r\n  color: #ffffff !important;\r\n  background-color: #333333 !important;\r\n  border-color: #333333 !important;\r\n}\r\n\r\n.btn-white-outline,\r\n.btn-white-outline:active,\r\n.btn-white-outline.active {\r\n  background: none;\r\n  border-color: #ffffff;\r\n  color: #ffffff;\r\n}\r\n\r\n.btn-white-outline:hover,\r\n.btn-white-outline:focus,\r\n.btn-white-outline.focus {\r\n  color: #333333;\r\n  background-color: #ffffff;\r\n  border-color: #ffffff;\r\n}\r\n\r\n.text-primary {\r\n  color: #149dcc !important;\r\n}\r\n\r\n.text-secondary {\r\n  color: #ff3366 !important;\r\n}\r\n\r\n.text-success {\r\n  color: #f7ed4a !important;\r\n}\r\n\r\n.text-info {\r\n  color: #82786e !important;\r\n}\r\n\r\n.text-warning {\r\n  color: #879a9f !important;\r\n}\r\n\r\n.text-danger {\r\n  color: #b1a374 !important;\r\n}\r\n\r\n.text-white {\r\n  color: #ffffff !important;\r\n}\r\n\r\n.text-black {\r\n  color: #000000 !important;\r\n}\r\n\r\na.text-primary:hover,\r\na.text-primary:focus {\r\n  color: #0b566f !important;\r\n}\r\n\r\na.text-secondary:hover,\r\na.text-secondary:focus {\r\n  color: #cc0033 !important;\r\n}\r\n\r\na.text-success:hover,\r\na.text-success:focus {\r\n  color: #d2c609 !important;\r\n}\r\n\r\na.text-info:hover,\r\na.text-info:focus {\r\n  color: #4b453f !important;\r\n}\r\n\r\na.text-warning:hover,\r\na.text-warning:focus {\r\n  color: #55666b !important;\r\n}\r\n\r\na.text-danger:hover,\r\na.text-danger:focus {\r\n  color: #7a6e45 !important;\r\n}\r\n\r\na.text-white:hover,\r\na.text-white:focus {\r\n  color: #b3b3b3 !important;\r\n}\r\n\r\na.text-black:hover,\r\na.text-black:focus {\r\n  color: #4d4d4d !important;\r\n}\r\n\r\n.alert-success {\r\n  background-color: #70c770;\r\n}\r\n\r\n.alert-info {\r\n  background-color: #82786e;\r\n}\r\n\r\n.alert-warning {\r\n  background-color: #879a9f;\r\n}\r\n\r\n.alert-danger {\r\n  background-color: #b1a374;\r\n}\r\n\r\n.mbr-section-btn a.btn:not(.btn-form) {\r\n  border-radius: 100px;\r\n}\r\n\r\n.mbr-section-btn a.btn:not(.btn-form):hover,\r\n.mbr-section-btn a.btn:not(.btn-form):focus {\r\n  -webkit-box-shadow: none !important;\r\n          box-shadow: none !important;\r\n}\r\n\r\n.mbr-section-btn a.btn:not(.btn-form):hover,\r\n.mbr-section-btn a.btn:not(.btn-form):focus {\r\n  box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.2) !important;\r\n  -webkit-box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.2) !important;\r\n}\r\n\r\n.mbr-gallery-filter li a {\r\n  border-radius: 100px !important;\r\n}\r\n\r\n.mbr-gallery-filter li.active .btn {\r\n  background-color: #149dcc;\r\n  border-color: #149dcc;\r\n  color: #ffffff;\r\n}\r\n\r\n.mbr-gallery-filter li.active .btn:focus {\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n}\r\n\r\n.nav-tabs .nav-link {\r\n  border-radius: 100px !important;\r\n}\r\n\r\n.btn-form {\r\n  border-radius: 0;\r\n}\r\n\r\n.btn-form:hover {\r\n  cursor: pointer;\r\n}\r\n\r\na,\r\na:hover {\r\n  color: #149dcc;\r\n}\r\n\r\n.mbr-plan-header.bg-primary .mbr-plan-subtitle,\r\n.mbr-plan-header.bg-primary .mbr-plan-price-desc {\r\n  color: #b4e6f8;\r\n}\r\n\r\n.mbr-plan-header.bg-success .mbr-plan-subtitle,\r\n.mbr-plan-header.bg-success .mbr-plan-price-desc {\r\n  color: #ffffff;\r\n}\r\n\r\n.mbr-plan-header.bg-info .mbr-plan-subtitle,\r\n.mbr-plan-header.bg-info .mbr-plan-price-desc {\r\n  color: #beb8b2;\r\n}\r\n\r\n.mbr-plan-header.bg-warning .mbr-plan-subtitle,\r\n.mbr-plan-header.bg-warning .mbr-plan-price-desc {\r\n  color: #ced6d8;\r\n}\r\n\r\n.mbr-plan-header.bg-danger .mbr-plan-subtitle,\r\n.mbr-plan-header.bg-danger .mbr-plan-price-desc {\r\n  color: #dfd9c6;\r\n}\r\n\r\n/* Scroll to top button*/\r\n\r\n.scrollToTop_wraper {\r\n  display: none;\r\n}\r\n\r\n#scrollToTop a i:before {\r\n  content: '';\r\n  position: absolute;\r\n  height: 40%;\r\n  top: 25%;\r\n  background: #fff;\r\n  width: 2px;\r\n  left: calc(50% - 1px);\r\n}\r\n\r\n#scrollToTop a i:after {\r\n  content: '';\r\n  position: absolute;\r\n  display: block;\r\n  border-top: 2px solid #fff;\r\n  border-right: 2px solid #fff;\r\n  width: 40%;\r\n  height: 40%;\r\n  left: 30%;\r\n  bottom: 30%;\r\n  transform: rotate(135deg);\r\n  -webkit-transform: rotate(135deg);\r\n}\r\n\r\n/* Others*/\r\n\r\n.note-check a[data-value=Rubik] {\r\n  font-style: normal;\r\n}\r\n\r\n.mbr-arrow a {\r\n  color: #ffffff;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .mbr-arrow {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.form-control-label {\r\n  position: relative;\r\n  cursor: pointer;\r\n  margin-bottom: .357em;\r\n  padding: 0;\r\n}\r\n\r\n.alert {\r\n  color: #ffffff;\r\n  border-radius: 0;\r\n  border: 0;\r\n  font-size: .875rem;\r\n  line-height: 1.5;\r\n  margin-bottom: 1.875rem;\r\n  padding: 1.25rem;\r\n  position: relative;\r\n}\r\n\r\n.alert.alert-form::after {\r\n  background-color: inherit;\r\n  bottom: -7px;\r\n  content: \"\";\r\n  display: block;\r\n  height: 14px;\r\n  left: 50%;\r\n  margin-left: -7px;\r\n  position: absolute;\r\n  transform: rotate(45deg);\r\n  width: 14px;\r\n  -webkit-transform: rotate(45deg);\r\n}\r\n\r\n.form-control {\r\n  background-color: #f5f5f5;\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n  color: #565656;\r\n  font-family: 'Rubik', sans-serif;\r\n  font-size: 1rem;\r\n  line-height: 0.5;\r\n  min-height: 0.5em;\r\n}\r\n\r\n.form-control > .mbr-iconfont {\r\n  font-size: 1.6rem;\r\n}\r\n\r\n.form-control,\r\n.form-control:focus {\r\n  border: 1px solid #e8e8e8;\r\n}\r\n\r\n.form-active .form-control:invalid {\r\n  border-color: red;\r\n}\r\n\r\n.mbr-overlay {\r\n  background-color: #000;\r\n  bottom: 0;\r\n  left: 0;\r\n  opacity: .5;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  z-index: 0;\r\n  pointer-events: none;\r\n}\r\n\r\nblockquote {\r\n  font-style: italic;\r\n  padding: 10px 0 10px 20px;\r\n  font-size: 1.09rem;\r\n  position: relative;\r\n  border-color: #149dcc;\r\n  border-width: 3px;\r\n}\r\n\r\nul,\r\nol,\r\npre,\r\nblockquote {\r\n  margin-bottom: 2.3125rem;\r\n}\r\n\r\npre {\r\n  background: #f4f4f4;\r\n  padding: 10px 24px;\r\n  white-space: pre-wrap;\r\n}\r\n\r\n.inactive {\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  pointer-events: none;\r\n  -webkit-user-drag: none;\r\n  user-drag: none;\r\n}\r\n\r\n.mbr-section__comments .row {\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-justify-content: center;\r\n}\r\n\r\n/* Forms */\r\n\r\n.mbr-form .btn {\r\n  margin: .4rem 0;\r\n}\r\n\r\n.mbr-form .input-group-btn a.btn {\r\n  border-radius: 100px !important;\r\n}\r\n\r\n.mbr-form .input-group-btn a.btn:hover {\r\n  -webkit-box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.2);\r\n          box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.mbr-form .input-group-btn button[type=\"submit\"] {\r\n  border-radius: 100px !important;\r\n  padding: 1rem 3rem;\r\n}\r\n\r\n.mbr-form .input-group-btn button[type=\"submit\"]:hover {\r\n  -webkit-box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.2);\r\n          box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.form2 .form-control {\r\n  border-top-left-radius: 100px;\r\n  border-bottom-left-radius: 100px;\r\n}\r\n\r\n.form2 .input-group-btn a.btn {\r\n  border-top-left-radius: 0 !important;\r\n  border-bottom-left-radius: 0 !important;\r\n}\r\n\r\n.form2 .input-group-btn button[type=\"submit\"] {\r\n  border-top-left-radius: 0 !important;\r\n  border-bottom-left-radius: 0 !important;\r\n}\r\n\r\n.form3 input[type=\"email\"] {\r\n  border-radius: 100px !important;\r\n}\r\n\r\n@media (max-width: 349px) {\r\n  .form2 input[type=\"email\"] {\r\n    border-radius: 100px !important;\r\n  }\r\n  .form2 .input-group-btn a.btn {\r\n    border-radius: 100px !important;\r\n  }\r\n  .form2 .input-group-btn button[type=\"submit\"] {\r\n    border-radius: 100px !important;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .btn {\r\n    font-size: .75rem !important;\r\n  }\r\n  .btn .mbr-iconfont {\r\n    font-size: 1rem !important;\r\n  }\r\n}\r\n\r\n/* Social block */\r\n\r\n.btn-social {\r\n  font-size: 20px;\r\n  border-radius: 50%;\r\n  padding: 0;\r\n  width: 44px;\r\n  height: 44px;\r\n  line-height: 44px;\r\n  text-align: center;\r\n  position: relative;\r\n  border: 2px solid #c0a375;\r\n  border-color: #149dcc;\r\n  color: #232323;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-social i {\r\n  top: 0;\r\n  line-height: 44px;\r\n  width: 44px;\r\n}\r\n\r\n.btn-social:hover {\r\n  color: #fff;\r\n  background: #149dcc;\r\n}\r\n\r\n.btn-social + .btn {\r\n  margin-left: .1rem;\r\n}\r\n\r\n/* Footer */\r\n\r\n.mbr-footer-content li::before,\r\n.mbr-footer .mbr-contacts li::before {\r\n  background: #149dcc;\r\n}\r\n\r\n.mbr-footer-content li a:hover,\r\n.mbr-footer .mbr-contacts li a:hover {\r\n  color: #149dcc;\r\n}\r\n\r\n.footer3 input[type=\"email\"],\r\n.footer4 input[type=\"email\"] {\r\n  border-radius: 100px !important;\r\n}\r\n\r\n.footer3 .input-group-btn a.btn,\r\n.footer4 .input-group-btn a.btn {\r\n  border-radius: 100px !important;\r\n}\r\n\r\n.footer3 .input-group-btn button[type=\"submit\"],\r\n.footer4 .input-group-btn button[type=\"submit\"] {\r\n  border-radius: 100px !important;\r\n}\r\n\r\n/* Headers*/\r\n\r\n.header13 .form-inline input[type=\"email\"],\r\n.header14 .form-inline input[type=\"email\"] {\r\n  border-radius: 100px;\r\n}\r\n\r\n.header13 .form-inline input[type=\"text\"],\r\n.header14 .form-inline input[type=\"text\"] {\r\n  border-radius: 100px;\r\n}\r\n\r\n.header13 .form-inline input[type=\"tel\"],\r\n.header14 .form-inline input[type=\"tel\"] {\r\n  border-radius: 100px;\r\n}\r\n\r\n.header13 .form-inline a.btn,\r\n.header14 .form-inline a.btn {\r\n  border-radius: 100px;\r\n}\r\n\r\n.header13 .form-inline button,\r\n.header14 .form-inline button {\r\n  border-radius: 100px !important;\r\n}\r\n\r\n.offset-1 {\r\n  margin-left: 8.33333%;\r\n}\r\n\r\n.offset-2 {\r\n  margin-left: 16.66667%;\r\n}\r\n\r\n.offset-3 {\r\n  margin-left: 25%;\r\n}\r\n\r\n.offset-4 {\r\n  margin-left: 33.33333%;\r\n}\r\n\r\n.offset-5 {\r\n  margin-left: 41.66667%;\r\n}\r\n\r\n.offset-6 {\r\n  margin-left: 50%;\r\n}\r\n\r\n.offset-7 {\r\n  margin-left: 58.33333%;\r\n}\r\n\r\n.offset-8 {\r\n  margin-left: 66.66667%;\r\n}\r\n\r\n.offset-9 {\r\n  margin-left: 75%;\r\n}\r\n\r\n.offset-10 {\r\n  margin-left: 83.33333%;\r\n}\r\n\r\n.offset-11 {\r\n  margin-left: 91.66667%;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .offset-sm-0 {\r\n    margin-left: 0%;\r\n  }\r\n  .offset-sm-1 {\r\n    margin-left: 8.33333%;\r\n  }\r\n  .offset-sm-2 {\r\n    margin-left: 16.66667%;\r\n  }\r\n  .offset-sm-3 {\r\n    margin-left: 25%;\r\n  }\r\n  .offset-sm-4 {\r\n    margin-left: 33.33333%;\r\n  }\r\n  .offset-sm-5 {\r\n    margin-left: 41.66667%;\r\n  }\r\n  .offset-sm-6 {\r\n    margin-left: 50%;\r\n  }\r\n  .offset-sm-7 {\r\n    margin-left: 58.33333%;\r\n  }\r\n  .offset-sm-8 {\r\n    margin-left: 66.66667%;\r\n  }\r\n  .offset-sm-9 {\r\n    margin-left: 75%;\r\n  }\r\n  .offset-sm-10 {\r\n    margin-left: 83.33333%;\r\n  }\r\n  .offset-sm-11 {\r\n    margin-left: 91.66667%;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .offset-md-0 {\r\n    margin-left: 0%;\r\n  }\r\n  .offset-md-1 {\r\n    margin-left: 8.33333%;\r\n  }\r\n  .offset-md-2 {\r\n    margin-left: 16.66667%;\r\n  }\r\n  .offset-md-3 {\r\n    margin-left: 25%;\r\n  }\r\n  .offset-md-4 {\r\n    margin-left: 33.33333%;\r\n  }\r\n  .offset-md-5 {\r\n    margin-left: 41.66667%;\r\n  }\r\n  .offset-md-6 {\r\n    margin-left: 50%;\r\n  }\r\n  .offset-md-7 {\r\n    margin-left: 58.33333%;\r\n  }\r\n  .offset-md-8 {\r\n    margin-left: 66.66667%;\r\n  }\r\n  .offset-md-9 {\r\n    margin-left: 75%;\r\n  }\r\n  .offset-md-10 {\r\n    margin-left: 83.33333%;\r\n  }\r\n  .offset-md-11 {\r\n    margin-left: 91.66667%;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .offset-lg-0 {\r\n    margin-left: 0%;\r\n  }\r\n  .offset-lg-1 {\r\n    margin-left: 8.33333%;\r\n  }\r\n  .offset-lg-2 {\r\n    margin-left: 16.66667%;\r\n  }\r\n  .offset-lg-3 {\r\n    margin-left: 25%;\r\n  }\r\n  .offset-lg-4 {\r\n    margin-left: 33.33333%;\r\n  }\r\n  .offset-lg-5 {\r\n    margin-left: 41.66667%;\r\n  }\r\n  .offset-lg-6 {\r\n    margin-left: 50%;\r\n  }\r\n  .offset-lg-7 {\r\n    margin-left: 58.33333%;\r\n  }\r\n  .offset-lg-8 {\r\n    margin-left: 66.66667%;\r\n  }\r\n  .offset-lg-9 {\r\n    margin-left: 75%;\r\n  }\r\n  .offset-lg-10 {\r\n    margin-left: 83.33333%;\r\n  }\r\n  .offset-lg-11 {\r\n    margin-left: 91.66667%;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .offset-xl-0 {\r\n    margin-left: 0%;\r\n  }\r\n  .offset-xl-1 {\r\n    margin-left: 8.33333%;\r\n  }\r\n  .offset-xl-2 {\r\n    margin-left: 16.66667%;\r\n  }\r\n  .offset-xl-3 {\r\n    margin-left: 25%;\r\n  }\r\n  .offset-xl-4 {\r\n    margin-left: 33.33333%;\r\n  }\r\n  .offset-xl-5 {\r\n    margin-left: 41.66667%;\r\n  }\r\n  .offset-xl-6 {\r\n    margin-left: 50%;\r\n  }\r\n  .offset-xl-7 {\r\n    margin-left: 58.33333%;\r\n  }\r\n  .offset-xl-8 {\r\n    margin-left: 66.66667%;\r\n  }\r\n  .offset-xl-9 {\r\n    margin-left: 75%;\r\n  }\r\n  .offset-xl-10 {\r\n    margin-left: 83.33333%;\r\n  }\r\n  .offset-xl-11 {\r\n    margin-left: 91.66667%;\r\n  }\r\n}\r\n\r\n.navbar-toggler {\r\n  -webkit-align-self: flex-start;\r\n  -ms-flex-item-align: start;\r\n  align-self: flex-start;\r\n  padding: 0.25rem 0.75rem;\r\n  font-size: 1.25rem;\r\n  line-height: 1;\r\n  background: transparent;\r\n  border: 1px solid transparent;\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.navbar-toggler:focus,\r\n.navbar-toggler:hover {\r\n  text-decoration: none;\r\n}\r\n\r\n.navbar-toggler-icon {\r\n  display: inline-block;\r\n  width: 1.5em;\r\n  height: 1.5em;\r\n  vertical-align: middle;\r\n  content: \"\";\r\n  background: no-repeat center center;\r\n  background-size: 100% 100%;\r\n}\r\n\r\n.navbar-toggler-left {\r\n  position: absolute;\r\n  left: 1rem;\r\n}\r\n\r\n.navbar-toggler-right {\r\n  position: absolute;\r\n  right: 1rem;\r\n}\r\n\r\n@media (max-width: 575px) {\r\n  .navbar-toggleable .navbar-nav .dropdown-menu {\r\n    position: static;\r\n    float: none;\r\n  }\r\n  .navbar-toggleable > .container {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .navbar-toggleable {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: row;\r\n    flex-direction: row;\r\n    -ms-flex-wrap: nowrap;\r\n    flex-wrap: nowrap;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n  }\r\n  .navbar-toggleable .navbar-nav {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: row;\r\n    flex-direction: row;\r\n  }\r\n  .navbar-toggleable .navbar-nav .nav-link {\r\n    padding-right: .5rem;\r\n    padding-left: .5rem;\r\n  }\r\n  .navbar-toggleable > .container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: nowrap;\r\n    flex-wrap: nowrap;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n  }\r\n  .navbar-toggleable .navbar-collapse {\r\n    display: -webkit-box !important;\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n    width: 100%;\r\n  }\r\n  .navbar-toggleable .navbar-toggler {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .navbar-toggleable-sm .navbar-nav .dropdown-menu {\r\n    position: static;\r\n    float: none;\r\n  }\r\n  .navbar-toggleable-sm > .container {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .navbar-toggleable-sm {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: row;\r\n    flex-direction: row;\r\n    -ms-flex-wrap: nowrap;\r\n    flex-wrap: nowrap;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n  }\r\n  .navbar-toggleable-sm .navbar-nav {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: row;\r\n    flex-direction: row;\r\n  }\r\n  .navbar-toggleable-sm .navbar-nav .nav-link {\r\n    padding-right: .5rem;\r\n    padding-left: .5rem;\r\n  }\r\n  .navbar-toggleable-sm > .container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: nowrap;\r\n    flex-wrap: nowrap;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n  }\r\n  .navbar-toggleable-sm .navbar-collapse {\r\n    display: none;\r\n    width: 100%;\r\n  }\r\n  .navbar-toggleable-sm .navbar-toggler {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (max-width: 991px) {\r\n  .navbar-toggleable-md .navbar-nav .dropdown-menu {\r\n    position: static;\r\n    float: none;\r\n  }\r\n  .navbar-toggleable-md > .container {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .navbar-toggleable-md {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: row;\r\n    flex-direction: row;\r\n    -ms-flex-wrap: nowrap;\r\n    flex-wrap: nowrap;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n  }\r\n  .navbar-toggleable-md .navbar-nav {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: row;\r\n    flex-direction: row;\r\n  }\r\n  .navbar-toggleable-md .navbar-nav .nav-link {\r\n    padding-right: .5rem;\r\n    padding-left: .5rem;\r\n  }\r\n  .navbar-toggleable-md > .container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: nowrap;\r\n    flex-wrap: nowrap;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n  }\r\n  .navbar-toggleable-md .navbar-collapse {\r\n    display: -webkit-box !important;\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n    width: 100%;\r\n  }\r\n  .navbar-toggleable-md .navbar-toggler {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (max-width: 1199px) {\r\n  .navbar-toggleable-lg .navbar-nav .dropdown-menu {\r\n    position: static;\r\n    float: none;\r\n  }\r\n  .navbar-toggleable-lg > .container {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .navbar-toggleable-lg {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: row;\r\n    flex-direction: row;\r\n    -ms-flex-wrap: nowrap;\r\n    flex-wrap: nowrap;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n  }\r\n  .navbar-toggleable-lg .navbar-nav {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: row;\r\n    flex-direction: row;\r\n  }\r\n  .navbar-toggleable-lg .navbar-nav .nav-link {\r\n    padding-right: .5rem;\r\n    padding-left: .5rem;\r\n  }\r\n  .navbar-toggleable-lg > .container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: nowrap;\r\n    flex-wrap: nowrap;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n  }\r\n  .navbar-toggleable-lg .navbar-collapse {\r\n    display: -webkit-box !important;\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n    width: 100%;\r\n  }\r\n  .navbar-toggleable-lg .navbar-toggler {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.navbar-toggleable-xl {\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n  -ms-flex-direction: row;\r\n  flex-direction: row;\r\n  -ms-flex-wrap: nowrap;\r\n  flex-wrap: nowrap;\r\n  -webkit-box-align: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n}\r\n\r\n.navbar-toggleable-xl .navbar-nav .dropdown-menu {\r\n  position: static;\r\n  float: none;\r\n}\r\n\r\n.navbar-toggleable-xl > .container {\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n}\r\n\r\n.navbar-toggleable-xl .navbar-nav {\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n  -ms-flex-direction: row;\r\n  flex-direction: row;\r\n}\r\n\r\n.navbar-toggleable-xl .navbar-nav .nav-link {\r\n  padding-right: .5rem;\r\n  padding-left: .5rem;\r\n}\r\n\r\n.navbar-toggleable-xl > .container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: nowrap;\r\n  flex-wrap: nowrap;\r\n  -webkit-box-align: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n}\r\n\r\n.navbar-toggleable-xl .navbar-collapse {\r\n  display: -webkit-box !important;\r\n  display: -ms-flexbox !important;\r\n  display: flex !important;\r\n  width: 100%;\r\n}\r\n\r\n.navbar-toggleable-xl .navbar-toggler {\r\n  display: none;\r\n}\r\n\r\n.card-img {\r\n  width: auto;\r\n}\r\n\r\n.menu .navbar.collapsed:not(.beta-menu) {\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.carousel-item.active,\r\n.carousel-item-next,\r\n.carousel-item-prev {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.note-air-layout .dropup .dropdown-menu,\r\n.note-air-layout .navbar-fixed-bottom .dropdown .dropdown-menu {\r\n  bottom: initial !important;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: auto;\r\n  min-height: 100vh;\r\n}\r\n\r\n.dropup .dropdown-toggle::after {\r\n  display: none;\r\n}\r\n\r\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\r\n  .card-wrapper {\r\n    -webkit-box-flex: 1!important;\r\n        -ms-flex: auto!important;\r\n            flex: auto!important;\r\n  }\r\n}\r\n\r\n.jq-selectbox li:hover,\r\n.jq-selectbox li.selected {\r\n  background-color: #149dcc;\r\n  color: #ffffff;\r\n}\r\n\r\n.jq-selectbox .jq-selectbox__trigger-arrow {\r\n  border-top-color: contrast(currentColor, #000000, #ffffff, 30%);\r\n}\r\n\r\n.jq-selectbox:hover .jq-selectbox__trigger-arrow {\r\n  border-top-color: #149dcc;\r\n}\r\n\r\n.cid-rJ2yeFHWxk {\r\n  padding-top: 90px;\r\n  padding-bottom: 90px;\r\n  background-color: #f9f9f9;\r\n}\r\n\r\n.cid-rJ2yeFHWxk .mbr-section-subtitle {\r\n  color: #767676;\r\n}\r\n\r\n.cid-rJ2yeFHWxk .container-table {\r\n  margin: 0 auto;\r\n}\r\n\r\n.cid-rJ2yeFHWxk .scroll {\r\n  overflow-x: auto;\r\n  padding: 0;\r\n}\r\n\r\n.cid-rJ2yeFHWxk .dataTables_wrapper {\r\n  display: block;\r\n}\r\n\r\n.cid-rJ2yeFHWxk .dataTables_wrapper .search {\r\n  margin-bottom: .5rem;\r\n}\r\n\r\n.cid-rJ2yeFHWxk .dataTables_wrapper .table {\r\n  overflow-x: auto;\r\n}\r\n\r\n.cid-rJ2yeFHWxk table {\r\n  width: 100% !important;\r\n  margin-top: 6px;\r\n  border: 1px solid #cccccc;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.cid-rJ2yeFHWxk table th {\r\n  border-top: none;\r\n  -webkit-transition: all .2s;\r\n  transition: all .2s;\r\n  border-bottom: none;\r\n}\r\n\r\n.cid-rJ2yeFHWxk table th:hover {\r\n  background: #cccccc;\r\n  color: #000000;\r\n}\r\n\r\n.cid-rJ2yeFHWxk table td {\r\n  border-top: 1px solid #cccccc;\r\n}\r\n\r\n.cid-rJ2yeFHWxk table.table {\r\n  background: #ffffff;\r\n}\r\n\r\n.cid-rJ2yeFHWxk .dataTables_filter {\r\n  text-align: right;\r\n  margin-bottom: .5rem;\r\n}\r\n\r\n.cid-rJ2yeFHWxk .dataTables_filter label {\r\n  display: inline;\r\n  white-space: normal !important;\r\n}\r\n\r\n.cid-rJ2yeFHWxk .dataTables_filter input {\r\n  display: inline;\r\n  width: auto;\r\n  margin-left: .5rem;\r\n  border-radius: 100px;\r\n  padding-left: 1rem;\r\n}\r\n\r\n.cid-rJ2yeFHWxk .dataTables_info {\r\n  padding-bottom: 1rem;\r\n  padding-top: 1rem;\r\n  white-space: normal !important;\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .cid-rJ2yeFHWxk .dataTables_filter {\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n@media (max-width: 350px) {\r\n  .cid-rJ2yeFHWxk .dataTables_filter {\r\n    text-align: center;\r\n  }\r\n  .cid-rJ2yeFHWxk .dataTables_filter input {\r\n    width: 100% !important;\r\n    margin-left: 0 !important;\r\n  }\r\n}\r\n\r\n.cid-rJ2yl9Pehs {\r\n  padding-top: 90px;\r\n  padding-bottom: 90px;\r\n  background-color: #ffffff;\r\n}\r\n\r\n.cid-rJ2yl9Pehs .mbr-section-subtitle {\r\n  color: #767676;\r\n}\r\n\r\n.cid-rJ2yl9Pehs .formoid {\r\n  margin: auto;\r\n}\r\n\r\n.cid-rJ2yl9Pehs .form-control {\r\n  padding-left: 1.5rem;\r\n  padding-right: 1.5rem;\r\n}\r\n\r\n.cid-rJ2yl9Pehs .input-group-btn .btn {\r\n  padding-top: 1rem;\r\n  padding-bottom: 1rem;\r\n  margin: 0 !important;\r\n}\r\n\r\n.cid-rJ2yl9Pehs a:not([href]):not([tabindex]) {\r\n  color: #fff;\r\n}\r\n\r\n.cid-rJ2yl9Pehs a.btn-white:not([href]):not([tabindex]) {\r\n  color: #333;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .cid-rJ2yl9Pehs .mbr-form .row {\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n  .cid-rJ2yl9Pehs .form-group,\r\n  .cid-rJ2yl9Pehs .input-group-btn,\r\n  .cid-rJ2yl9Pehs .input-group-btn .btn {\r\n    max-width: 300px;\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media (min-width: 769px) {\r\n  .cid-rJ2yl9Pehs .mbr-form .row > * {\r\n    padding: 0 0.5rem;\r\n  }\r\n}\r\n\r\n.cid-rJ2ypcZjyd {\r\n  padding-top: 60px;\r\n  padding-bottom: 60px;\r\n  background-color: #f9f9f9;\r\n}\r\n\r\n.cid-rJ2ypcZjyd p {\r\n  color: #767676;\r\n}\r\n\r\n.cid-rJ2ypcZjyd .mbr-section-subtitle {\r\n  color: #767676;\r\n}\r\n\r\n.cid-rJ2ypcZjyd .accordion-content {\r\n  -ms-flex-preferred-size: 100%;\r\n      flex-basis: 100%;\r\n  -webkit-flex-basis: 100%;\r\n}\r\n\r\n.cid-rJ2ypcZjyd .panel-group {\r\n  width: 100%;\r\n}\r\n\r\n.cid-rJ2ypcZjyd .card {\r\n  border-radius: 0px;\r\n  margin-bottom: -1px;\r\n}\r\n\r\n.cid-rJ2ypcZjyd .card .card-header {\r\n  border-radius: 0px;\r\n  border: 0px;\r\n  padding: 0;\r\n}\r\n\r\n.cid-rJ2ypcZjyd .card .card-header a.panel-title {\r\n  margin-bottom: 0;\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  display: block;\r\n  text-decoration: none !important;\r\n  margin-top: -1px;\r\n  line-height: normal;\r\n}\r\n\r\n.cid-rJ2ypcZjyd .card .card-header a.panel-title:focus {\r\n  text-decoration: none !important;\r\n}\r\n\r\n.cid-rJ2ypcZjyd .card .card-header a.panel-title h4 {\r\n  padding: 1.3rem 2rem;\r\n  border: 1px solid #dfdfdf;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.cid-rJ2ypcZjyd .card .card-header a.panel-title h4 .sign {\r\n  padding-right: 1rem;\r\n}\r\n\r\n.cid-rJ2ypcZjyd .mbr-figure {\r\n  -webkit-align-self: flex-start;\r\n  -ms-flex-item-align: start;\r\n      align-self: flex-start;\r\n  padding-left: 4rem;\r\n}\r\n\r\n@media (max-width: 991px) {\r\n  .cid-rJ2ypcZjyd .mbr-figure {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n    padding-top: 2rem;\r\n  }\r\n}\r\n\r\n/*\r\n*\r\n* ==========================================\r\n* CUSTOM UTIL CLASSES\r\n* ==========================================\r\n*\r\n*/\r\n\r\n.file-upload input[type='file'] {\r\n  display: none;\r\n}\r\n\r\n/*\r\n*\r\n* ==========================================\r\n* FOR DEMO PURPOSES\r\n* ==========================================\r\n*\r\n*/\r\n\r\n.rounded-lg {\r\n  border-radius: 1rem;\r\n  margin-top: 0em;\r\n\r\n}\r\n\r\n.custom-file-label.rounded-pill {\r\n  border-radius: 50rem;\r\n  margin-top: 0em;\r\n}\r\n\r\n.custom-file-label.rounded-pill::after {\r\n  border-radius: 0 50rem 50rem 0;\r\n  margin-top: 0em;\r\n}\r\n\r\n.form-number-jz{\r\n  width: 6em !important;\r\n  height: 2em !important;\r\n  margin-left: 1em !important;\r\n}\r\n\r\n.EdgeButton:hover{\r\n  background-color: #E0F8FF;\r\n}\r\n\r\n.EdgeButton--secondary-file:hover{\r\n  background-color: #afe0ff;\r\n}\r\n\r\n.EdgeButton--secondaryii:hover{\r\n  background-color: #E0F8FF;\r\n  color: #1da1f2;\r\n}\r\n\r\n.EdgeButton--secondaryiii:hover{\r\n  background-color: #DBFCE8;\r\n  color: #69C68E;\r\n}\r\n\r\n/*input {\r\n  -moz-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n  margin-top: 12px;\r\n  width: 100%;\r\n} */\r\n\r\n.EdgeButton--secondary {\r\n  background-color: #fff;\r\n  border: 1px solid #1da1f2;\r\n  color: #1da1f2;\r\n}\r\n\r\n.EdgeButton--secondaryii {\r\n  background-color: #1da1f2;\r\n  border: 1px solid #fff;\r\n  color: #fff;\r\n\r\n}\r\n\r\n.EdgeButton--secondaryiii {\r\n  background-color: #69C68E;\r\n  border: 1px solid #fff;\r\n  color: #fff;\r\n\r\n}\r\n\r\n.EdgeButton--secondary-file {\r\n  background-color: #1da1f2;\r\n  border: 1px solid #fff;\r\n  color: #fff;\r\n}\r\n\r\n.EdgeButton--medium {\r\n  font-size: 14px;\r\n  line-height: 20px;\r\n  padding: 6px 16px;\r\n}\r\n\r\n.EdgeButton {\r\n  border-radius: 100px;\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n  cursor: pointer;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  line-height: 20px;\r\n  padding: 8px 18px;\r\n  position: relative;\r\n  text-align: end;\r\n  white-space: nowrap;\r\n}\r\n\r\n.btn-jz{\r\n\r\n  font-weight: 200;\r\n  border-width: 1px;\r\n  font-style: normal;\r\n  letter-spacing: 1px;\r\n  margin: 0.1rem .1rem;\r\n  white-space: normal;\r\n  -webkit-transition: all 0.3s ease-in-out;\r\n  transition: all 0.3s ease-in-out;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  word-break: break-word;\r\n  -webkit-align-items: center;\r\n  -webkit-justify-content: center;\r\n  display: -webkit-inline-flex;\r\n  padding: 0.5rem 0.5rem;\r\n  border-radius: 4px;\r\n\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-bitly/main-bitly.component.html":
/***/ (function(module, exports) {

module.exports = "\n<body *ngIf=\"boolToken\">\n\n        <section id=\"top-1\" class=\"engine\"><a href=\"\">Mobirise Website Builder</a> v4.9.6</section>\n        <section class=\"section-table cid-rJ2yeFHWxk\" id=\"table1-0\">\n      \n        \n        \n        <div class=\"container container-table\">\n            <h2 class=\"mbr-section-title mbr-fonts-style align-center pb-3 display-2\">\n                    Update Bitly Short URL's <span style=\"color:rgb(0, 89, 255)\"><i class=\"fa fa-cloud-upload\" aria-hidden=\"true\" ></i></span>\n            </h2>\n            <h3 class=\"mbr-section-subtitle mbr-fonts-style align-center pb-5 mbr-light display-5\">\n                    The integration with Bitly allows us to create and update multiple short URL's just by uploading an excel file, see the instructions section if you have questions..     \n            </h3>\n\n            \n\n          </div>\n      </section>\n      \n      <section class=\"engine\"><a href=\"\">website creation software</a></section>\n      <section class=\"mbr-section form3 cid-rJ2yl9Pehs\" id=\"form3-1\">\n            <div class=\"container\">\n                    <div class=\"row justify-content-center\">\n                        <div class=\"title col-12 col-lg-8\">\n                            <h2 class=\"align-center pb-2 mbr-fonts-style display-2\">\n                                Upload your file\n                            </h2>\n                            <h3 class=\"mbr-section-subtitle align-center pb-5 mbr-light mbr-fonts-style display-5\">\n                                Remember it has to be a XLS file\n                            </h3>\n                        </div>\n                    </div>\n            \n                    <div class=\"row py-2 justify-content-center\">\n                        <div class=\"col-12 col-lg-6  col-md-8 \" data-form-type=\"formoid\">\n                            <form action=\"https://mobirise.com/\" method=\"POST\" class=\"mbr-form form-with-styler\" data-form-title=\"Mobirise Form\"><input type=\"hidden\" name=\"email\" data-form-email=\"true\" value=\"HGFHkU6gks4B8wmiOEj2vM7jBOPPHCto+PupSXsBIftnmongKtIgEaGvTyNXcM4ioVPgiY6bOPVp+CSYs1HqIcGIiIPL/TpbMAAeQVLW9fj79f9hyHa7R+m0TrSneXrM\">\n                                <div class=\"row\">\n                                    <div hidden=\"hidden\" data-form-alert=\"\" class=\"alert alert-success col-12\">Thanks for filling out the form!</div>\n                                    <div hidden=\"hidden\" data-form-alert-danger=\"\" class=\"alert alert-danger col-12\">\n                                    </div>\n                                </div>\n                                <div class=\"dragArea row\">\n                                    <!-- <div class=\"form-group col\" data-for=\"email\">\n                                        <input type=\"email\" name=\"email\" placeholder=\"Email\" data-form-field=\"Email\" required=\"required\" class=\"form-control display-7\" id=\"email-form3-1\">\n                                    </div> -->\n                                    <div class=\"form-group col\" data-for=\"email\">\n                                            <div class=\"custom-file overflow-hidden rounded-pill mb-5\" >\n                                                    <input id=\"customFile\" type=\"file\" class=\"custom-file-input rounded-pill\" (change)=\"onFileSelected($event)\">\n                                                    <label for=\"customFile\" class=\"custom-file-label rounded-pill\">Choose file</label>\n                                                  </div>\n                                    </div>\n                                    <div class=\"col-auto input-group-btn\">\n                                        <button type=\"submit\" class=\"btn btn-primary  display-4\" (click)=\"readData1()\">RUN</button>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n\n                    <div class=\"row py-2 justify-content-center\">\n                            <div class=\"\">\n                                    <div class=\"d-flex justify-content-xl-start\" *ngIf=\"boolProgressBar\">\n                                            <progress-bar style=\"width: 36em\" [progress]=GetBarValue() name=\"pbar\" [color]=\"'#488aff'\">\n                                            </progress-bar>\n                                            \n                                        </div>\n                                        <p class=\"row py-2 justify-content-center\" *ngIf=\"boolProgressBar\">Success Records: {{SuccessRecords}}    Failed Records: {{totalErrors}}</p>\n                            </div>\n                    </div>\n                    <div class=\"row py-2 justify-content-center\">\n                           \n                    </div>\n                    <div class=\"row justify-content-center\" *ngIf=\"boolProgressBar\">\n                        <div class=\"form-inline \">\n                            <h5>Malfunction Report</h5>\n                            <input type=\"number\" [(ngModel)]=\"showNumber\" min=\"10\" max=\"100\" class=\"form-control form-number-jz\">\n                            <button class=\"EdgeButton EdgeButton--secondary EdgeButton--medium\" style=\"margin-left: 0.5em\" (click)=\"find()\">Find</button>\n\n                        </div>\n\n                    </div>\n                    <div class=\"row py-2 justify-content-center\" *ngIf=\"boolProgressBar\">\n                        \n                            <div *ngIf=\"boolProgressBar\" class=\"\">\n                                    <table class=\"table table-hover table-bordered\">\n                                            <thead class=\"table-head\">\n                                              <tr class=\"\">\n                                                <th scope=\"col\">Row number</th>\n                                                <th scope=\"col\">Error Message</th>\n                                                <th scope=\"col\">Description</th>\n                                                <th scope=\"col\">Long URL</th>\n                                                <th scope=\"col\">Short URL</th>\n                                               <!-- <th scope=\"col\">Status</th>\n                                                <th scope=\"col\">Last?</th> -->\n                                                \n                                              </tr>\n                                            </thead>\n                                             <tbody *ngFor=\"let product of errorArrayFlag\">\n                                          \n                                              <tr class=\"select\">\n                                                <td>{{product.Row}}</td>\n                                                <th scope=\"row\">{{product.error}}</th>\n                                                <td>{{product.description}}</td>\n                                                <td>{{product.long_url}}</td>\n                                                <td>{{product.short_url}}</td>\n                                              </tr>\n                                          \n                                            </tbody> \n                                          \n                                          </table>\n                            </div>\n                    </div>\n\n                    \n                </div> \n                <div class=\"row py-2 justify-content-center\">\n                        <nav aria-label=\"Page navigation example\">\n                                <ul class=\"pagination\">\n                                  \n                                  <li class=\"page-item\" *ngFor=\"let x of paginationPages\" value=\"{{x.val}}\" ><button style=\"color: rgb(0, 89, 255)\" value=\"{{x.val}}\" id=\"{{x.val}}\" class=\"btn-jz btn-light\" (click)=\"getValue(x.val)\" >{{x.val}}</button></li>  \n                                </ul>\n                              </nav>\n                </div>\n          \n      </section>\n      \n      <section class=\"accordion2 cid-rJ2ypcZjyd\" id=\"accordion2-2\">\n      \n          \n      \n      \n          \n          <div class=\"container\">\n              <div class=\"media-container-row pt-5\">\n                  <div class=\"accordion-content\">\n                      <h1 class=\"mbr-section-title align-center pb-3 mbr-fonts-style display-2\">\n                        Indications\n                      </h1>\n                      \n                      <div id=\"bootstrap-accordion_2\" class=\"panel-group accordionStyles accordion pt-5 mt-3\" role=\"tablist\" aria-multiselectable=\"true\">\n                        <div class=\"card\" (click)=\"changeCollapseOne()\">\n                            <div class=\"card-header\" role=\"tab\" id=\"headingTwo\" >\n                                <a role=\"button\" class=\"collapsed panel-title text-black\" data-toggle=\"collapse\" data-core=\"\" aria-expanded=\"false\" aria-controls=\"collapse2\" >\n                                    <h4 class=\"mbr-fonts-style mbr-fonts-style display-5\">\n                                      <span><i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i></span> <span class=\"sign mbr-iconfont mbri-arrow-down inactive\"></span> How do I set the data?\n                                    </h4>\n                                </a>\n                                \n                            </div>\n                            <div id=\"collapse2_2\" class=\"panel-collapse noScroll\" role=\"tabpanel\" aria-labelledby=\"headingTwo\" data-parent=\"#bootstrap-accordion_2\" *ngIf=\"collapsedOne\">\n                                <div class=\"panel-body p-4\">\n                                    <p class=\"mbr-fonts-style panel-text display-7\">\n                                        The document must contain 3 headings one of DESCRPTION, LONGURL and SHORTURL in capital letters without spaces, under these must go the information to modify in bitly.</p>\n                                </div>\n                            </div>\n                        </div>\n                      \n                              <div class=\"card\" (click)=\"changeCollapseTwo()\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"headingTwo\" >\n                                      <a role=\"button\" class=\"collapsed panel-title text-black\" data-toggle=\"collapse\" data-core=\"\" aria-expanded=\"false\" aria-controls=\"collapse2\" >\n                                          <h4 class=\"mbr-fonts-style mbr-fonts-style display-5\">\n                                            <span><i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i></span> <span class=\"sign mbr-iconfont mbri-arrow-down inactive\"></span> What considerations should I take?\n                                          </h4>\n                                      </a>\n                                      \n                                  </div>\n                                  <div id=\"collapse2_2\" class=\"panel-collapse noScroll\" role=\"tabpanel\" aria-labelledby=\"headingTwo\" data-parent=\"#bootstrap-accordion_2\" *ngIf=\"collapsedTwo\">\n                                      <div class=\"panel-body p-4\">\n                                          <p class=\"mbr-fonts-style panel-text display-7\">\n                                            It must be a single sheet, no matter its name, it must be a document with .XLS extension, the data must be complete without blank spaces or it will fail.</p>\n                                      </div>\n                                  </div>\n                              </div>\n                      \n                              <div class=\"card\" (click)=\"changeCollapsetree()\">\n                                <div class=\"card-header\" role=\"tab\" id=\"headingTwo\" >\n                                    <a role=\"button\" class=\"collapsed panel-title text-black\" data-toggle=\"collapse\" data-core=\"\" aria-expanded=\"false\" aria-controls=\"collapse2\" >\n                                        <h4 class=\"mbr-fonts-style mbr-fonts-style display-5\">\n                                          <span><i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i></span> <span class=\"sign mbr-iconfont mbri-arrow-down inactive\"></span> What if something goes wrong?\n                                        </h4>\n                                    </a>\n                                    \n                                </div>\n                                <div id=\"collapse2_2\" class=\"panel-collapse noScroll\" role=\"tabpanel\" aria-labelledby=\"headingTwo\" data-parent=\"#bootstrap-accordion_2\" *ngIf=\"collapsedTree\">\n                                    <div class=\"panel-body p-4\">\n                                        <p class=\"mbr-fonts-style panel-text display-7\">\n                                            After loading the file and pressing RUN, it will show a progress bar and a table with the possible inconsistencies in the data where it will show the URLS that could not be completed and the reason for this, in this case modify the faults and try again.</p>\n                                    </div>\n                                </div>\n                            </div>\n                      \n                              \n                      \n                              \n                      \n                              \n                      </div>\n                  </div>\n                  <div class=\"mbr-figure\" style=\"width: 155%;\">\n                          <img [src]=\"mainImage\" alt=\"template\">\n                        </div>\n                    </div>\n                    <button class=\"btn-sm btn-primary\" style=\"margin-top:0.8em\" (click)=\"getTemplate()\" >Download Template</button>\n          </div>\n\n\n      </section>\n</body>\n\n\n<!-- <section>\n    <div class=\"container p-5\">\n\n      <div class=\"row mb-5 text-center text-white\">\n        <div class=\"col-lg-10 mx-auto\">\n          <h1 class=\"display-4\">File upload button </h1>\n          <p class=\"lead\">Build a simple file upload button using Bootstrap 4.</p>\n        </div>\n      </div>\n \n  \n  \n      <div class=\"row\">\n        <div class=\"col-lg-5 mx-auto\">\n          <div class=\"p-5 bg-white shadow rounded-lg\"><img src=\"https://res.cloudinary.com/mhmd/image/upload/v1557366994/img_epm3iz.png\" alt=\"\" width=\"200\" class=\"d-block mx-auto mb-4 rounded-pill\">\n  \n     \n  \n            <h6 class=\"text-center mb-4 text-muted\">\n              You can use default Bootstrap file upload\n            </h6>\n  \n            <div class=\"custom-file overflow-hidden rounded-pill mb-5\">\n              <input id=\"customFile\" type=\"file\" class=\"custom-file-input rounded-pill\">\n              <label for=\"customFile\" class=\"custom-file-label rounded-pill\">Choose file</label>\n            </div>\n       \n  \n            <h6 class=\"text-center mb-4 text-muted\">\n              Or a custom button that launches file browser\n            </h6>\n  \n            <label for=\"fileUpload\" class=\"file-upload btn btn-primary btn-block rounded-pill shadow\"><i class=\"fa fa-upload mr-2\"></i>Browse for file ...\n                          <input id=\"fileUpload\" type=\"file\">\n                      </label>\n       \n  \n          </div>\n        </div>\n      </div>\n    </div>\n  </section>  -->\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/main-bitly/main-bitly.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainBitlyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xlsx__ = __webpack_require__("../../../../xlsx/xlsx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_signature_sheet_search_employee_service__ = __webpack_require__("../../../../../src/app/create-signature-sheet/search-employee.service.ts");
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






var MainBitlyComponent = /** @class */ (function () {
    function MainBitlyComponent(_bitlyApiService, cookieService, _Service) {
        this._bitlyApiService = _bitlyApiService;
        this.cookieService = cookieService;
        this._Service = _Service;
        this.selectedFile = null;
        this.ReadedRecords = [];
        this.Domain = 'laur.cc';
        this.GroupGuid = '';
        this.Title = '';
        this.Tags = [];
        this.Deeplinks = [];
        this.BearerToken = '';
        this.boolToken = false;
        this.value = '55';
        this.boolProgressBar = false;
        this.BarValue = 0;
        this.RecordValueToBar = 0;
        this.SuccessRecords = 0;
        this.count = 0;
        this.isCollapsed = false;
        this.collapsedOne = false;
        this.collapsedTwo = false;
        this.collapsedTree = false;
        this.showNumber = 10;
        this.boolPagination = 10;
        this.privilege = false;
        this.errorArray = [];
        this.paginationPages = [];
        this.errorArrayFlag = [];
        this.mainImage = '/assets/images/template_xls_file.png';
    }
    MainBitlyComponent.prototype.ngOnInit = function () {
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
            //this.privilege = true;
            window.location.href = '/login';
        }
        if (this.privilege) {
            if (this.cookieService.get('btoken')) {
                this.boolToken = true;
                this.CallBitlyServiceGetGroupGuid();
            }
            else {
                // console.error('Token Not Found');
                window.location.href = '/blogin';
            }
        }
        else {
            window.location.href = '/login';
        }
    };
    MainBitlyComponent.prototype.CalculateErros = function () {
        var newArray = [];
        newArray = this.errorArray.filter(function (error, index, self) {
            return index === self.findIndex(function (t) { return (t.Row === error.Row); });
        });
        this.totalErrors = newArray.length;
        //this.SuccessRecords = this.ReadedRecords.length - this.totalErrors;
    };
    MainBitlyComponent.prototype.CallBiltyServiceCreateBitlink = function () {
        var _this = this;
        if (this.GroupGuid == '') {
            alert('guid vacio');
        }
        else {
            this.ReadedRecords.forEach(function (obj) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                var customParam_1, b, a, a, a;
                return __generator(this, function (_a) {
                    if (obj.LONGURL && obj.SHORTURL) {
                        this.CustomBitlink = this.RemoveCharacters(obj.SHORTURL, 1);
                        this.LongUrl = this.RemoveCharacters(obj.LONGURL, 2);
                        // console.log('custom ' + this.CustomBitlink);
                        // console.log('Long ' + this.LongUrl);
                        if (this.CustomBitlink != 'error' && this.LongUrl != 'error') {
                            customParam_1 = this.CustomBitlink;
                            this._bitlyApiService.CreateBiltink(this.Domain, obj.DESCRIPTION, this.GroupGuid, obj.LONGURL, this.cookieService.get('btoken'))
                                .subscribe(function (result) {
                                // // console.log('post');
                                // console.log(result)
                                // // console.log(result['created_at']);
                                if (result['created_at']) {
                                    var Res = (JSON.stringify(result));
                                    _this.BitlinkId = (JSON.parse(Res)).id;
                                    // console.log(this.CustomBitlink);
                                    _this.CallBitlyServiceRedirectBitlink(_this.BitlinkId, customParam_1);
                                    _this.SuccessRecords += 1;
                                    _this.BarValue = _this.RecordValueToBar + _this.BarValue;
                                    _this.GetBarValue();
                                }
                                else {
                                    var a = {
                                        'Row': obj.__rowNum__ + 1,
                                        'description': obj.DESCRIPTION,
                                        'short_url': obj.SHORTURL,
                                        'long_url': obj.LONGURL,
                                        'error': result['message']
                                    };
                                    if (_this.errorArrayFlag.length < 10) {
                                        _this.errorArrayFlag.push(a);
                                    }
                                    _this.errorArray.push(a);
                                    _this.BarValue = _this.RecordValueToBar + _this.BarValue;
                                    // // console.log('get value 2');
                                    _this.GetBarValue();
                                }
                                // // console.table(this.errorArray);
                            });
                        }
                        else {
                            if (this.CustomBitlink === 'error') {
                                b = {
                                    'Row': obj.__rowNum__ + 1,
                                    'description': obj.DESCRIPTION,
                                    'short_url': obj.SHORTURL,
                                    'long_url': obj.LONGURL,
                                    'error': 'Incorrect Short URL'
                                };
                                if (this.errorArrayFlag.length < 10) {
                                    this.errorArrayFlag.push(b);
                                }
                                this.errorArray.push(b);
                                this.BarValue = this.RecordValueToBar + this.BarValue;
                                // // console.log('get value 3');
                                this.GetBarValue();
                                // // //console.log(this.errorArray);
                            }
                            if (this.LongUrl === 'error') {
                                a = {
                                    'Row': obj.__rowNum__ + 1,
                                    'description': obj.DESCRIPTION,
                                    'short_url': obj.SHORTURL,
                                    'long_url': obj.LONGURL,
                                    'error': 'Incorrect Long URL'
                                };
                                if (this.errorArrayFlag.length < 10) {
                                    this.errorArrayFlag.push(a);
                                }
                                this.errorArray.push(a);
                                this.BarValue = this.RecordValueToBar + this.BarValue;
                                // // console.log('get value 4');
                                this.GetBarValue();
                            }
                        }
                    }
                    else {
                        if (!obj.LONGURL) {
                            a = {
                                'Row': obj.__rowNum__ + 1,
                                'description': obj.DESCRIPTION,
                                'short_url': obj.SHORTURL,
                                'long_url': obj.LONGURL,
                                'error': 'Missing LONGURL'
                            };
                            if (this.errorArrayFlag.length < 10) {
                                this.errorArrayFlag.push(a);
                            }
                            this.errorArray.push(a);
                        }
                        if (!obj.SHORTURL) {
                            a = {
                                'Row': obj.__rowNum__ + 1,
                                'description': obj.DESCRIPTION,
                                'short_url': obj.SHORTURL,
                                'long_url': obj.LONGURL,
                                'error': 'Missing SHORTURL'
                            };
                            if (this.errorArrayFlag.length < 10) {
                                this.errorArrayFlag.push(a);
                            }
                            this.errorArray.push(a);
                        }
                        // // console.log('get value 5');
                        this.BarValue = this.RecordValueToBar + this.BarValue;
                        this.GetBarValue();
                    }
                    return [2 /*return*/];
                });
            }); });
        }
        this.CalculateErros();
        this.pagination();
    };
    MainBitlyComponent.prototype.CallBiltyServiceGetBitlinkInfo = function () {
        this._bitlyApiService.GetBitlinkInfo(this.BitlinkLoaded, this.cookieService.get('btoken'))
            .subscribe(function (result) {
            // // console.log(result);
        });
    };
    MainBitlyComponent.prototype.CallBitlyServiceRedirectBitlink = function (BitlinkId1, CustomBitlink2) {
        var _this = this;
        this._bitlyApiService.RedirectBitlink(BitlinkId1, CustomBitlink2, this.cookieService.get('btoken'))
            .subscribe(function (result) { return __awaiter(_this, void 0, void 0, function () {
            var Res;
            return __generator(this, function (_a) {
                Res = (JSON.stringify(result));
                return [2 /*return*/];
            });
        }); });
    };
    MainBitlyComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
        this.uploadedFile = true;
    };
    MainBitlyComponent.prototype.readData1 = function () {
        var _this = this;
        this.BarValue = 0;
        this.errorArray = [];
        this.errorArrayFlag = [];
        this.totalErrors = 0;
        this.SuccessRecords = 0;
        // tslint:disable-next-line:only-arrow-functions
        if (!this.selectedFile) {
            alert("No file selected");
        }
        else {
            this.readData().then(function (res) {
                _this.ReadedRecords = res;
                //alert(this.ReadedRecords.length);
                if (_this.ReadedRecords.length > 0) {
                    if (_this.ReadedRecords[0].DESCRIPTION && _this.ReadedRecords[0].SHORTURL && _this.ReadedRecords[0].LONGURL) {
                        _this.boolProgressBar = true;
                        _this.RecordValueToBar = 100 / _this.ReadedRecords.length;
                        _this.CallBiltyServiceCreateBitlink();
                    }
                    else {
                        alert('File format incorrect');
                    }
                }
                else {
                    alert('The selected file is empty');
                }
                //alert('valor a sumar ' + this.RecordValueToBar);
                // // console.log(resolve.length);
                // // resolve.forEach(obj => console.log(obj));
            });
        }
    };
    MainBitlyComponent.prototype.readData = function () {
        var reader = new FileReader();
        var workbook;
        var XLRowObject;
        var jsonObject = null;
        var TotalRecords;
        reader.readAsBinaryString(this.selectedFile);
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line:only-arrow-functions
            reader.onload = function () {
                //  alert(reader.result);
                var data = reader.result;
                workbook = Object(__WEBPACK_IMPORTED_MODULE_1_xlsx__["read"])(data, { type: 'binary' });
                // // console.log(workbook);
                // tslint:disable-next-line:only-arrow-functions
                workbook.SheetNames.forEach(function (sheetName) {
                    // Here is your object
                    XLRowObject = __WEBPACK_IMPORTED_MODULE_1_xlsx__["utils"].sheet_to_json(workbook.Sheets[sheetName]);
                    jsonObject = JSON.stringify(XLRowObject);
                    // //console.log(typeof(XLRowObject.length));
                    resolve(XLRowObject);
                });
            };
        });
    };
    // removes whitespace and http//
    MainBitlyComponent.prototype.RemoveCharacters = function (Url, val) {
        if (val === 1) {
            if (Url.startsWith('http://laur.cc/')) {
                var NewUrl = Url.slice(7);
                return NewUrl.replace(/\s/g, '');
            }
            else {
                return "error";
            }
        }
        else {
            if (Url.startsWith('https://') || Url.startsWith('http://')) {
                return Url.replace(/\s/g, '');
            }
            else {
                return "error";
            }
        }
    };
    MainBitlyComponent.prototype.CallBitlyServiceGetGroupGuid = function () {
        var _this = this;
        // alert('Domain' + this.Domain +  this.cookieService.get('btoken') );
        this._bitlyApiService.GetGroupGuid(this.cookieService.get('btoken')).subscribe(function (result) {
            var tmp = JSON.stringify(result);
            var x = result['groups'];
            x.forEach(function (element) {
                if (element['name'] == 'IT OPS') {
                    _this.GroupGuid = element['guid'];
                    // // console.log(' GUID = ' + this.GroupGuid);
                }
            });
        });
    };
    MainBitlyComponent.prototype.GetBarValue = function () {
        return this.BarValue;
    };
    MainBitlyComponent.prototype.changeCollapseOne = function () {
        if (this.collapsedOne) {
            this.collapsedOne = false;
        }
        else {
            this.collapsedOne = true;
        }
    };
    MainBitlyComponent.prototype.changeCollapseTwo = function () {
        if (this.collapsedTwo) {
            this.collapsedTwo = false;
        }
        else {
            this.collapsedTwo = true;
        }
    };
    MainBitlyComponent.prototype.changeCollapsetree = function () {
        if (this.collapsedTree) {
            this.collapsedTree = false;
        }
        else {
            this.collapsedTree = true;
        }
    };
    MainBitlyComponent.prototype.find = function () {
        console.table(this.errorArrayFlag);
        this.pagination();
        this.getValue(0);
        console.log(this.paginationPages);
    };
    MainBitlyComponent.prototype.pagination = function () {
        this.paginationPages = [];
        this.boolPagination = this.showNumber;
        var total = this.errorArray.length;
        var section = total / this.showNumber;
        for (var _i = 0; _i < section; _i++) {
            var x = {
                'val': _i
            };
            this.paginationPages.push(x);
        }
    };
    MainBitlyComponent.prototype.getValue = function (x) {
        if (this.boolPagination == this.showNumber) {
            console.log(this.errorArray);
            var min = x * this.showNumber;
            var max = min + this.showNumber;
            this.errorArrayFlag = [];
            for (var i = min; i < max; i++) {
                if (i < this.errorArray.length) {
                    this.errorArrayFlag.push(this.errorArray[i]);
                }
            }
        }
        else {
            this.pagination();
        }
    };
    MainBitlyComponent.prototype.getTemplate = function () {
        var x = 'bitly_template';
        if (this.boolToken) {
            var url = "http://hnlnoitinvprod01.hnsc.net/xls/" + x;
            window.location.href = url;
        }
        else {
            alert('Template Removed');
        }
    };
    MainBitlyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-bitly',
            template: __webpack_require__("../../../../../src/app/main-bitly/main-bitly.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-bitly/main-bitly.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_4__create_signature_sheet_search_employee_service__["a" /* SearchEmployeeService */]])
    ], MainBitlyComponent);
    return MainBitlyComponent;
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
        return this.httpClient.get("http://hnlnoitinvprod01.hnsc.net/api/v1/roles").map(function (result) { return result; });
    };
    ManagementService.prototype.getPrivilegesbyRoles = function (role) {
        return this.httpClient.get("http://hnlnoitinvprod01.hnsc.net/api/v1/roles_x_privileges/" + role).map(function (result) { return result; });
    };
    ManagementService.prototype.postUseradmin = function (email, rol) {
        return this.httpClient.post("http://hnlnoitinvprod01.hnsc.net/api/v1/usersadmins", {
            'user_name': email,
            'id_role': rol
        }).map(function (result) { return result; });
    };
    ManagementService.prototype.postNewRolePrivileges = function (name, privileges_) {
        return this.httpClient.post("http://hnlnoitinvprod01.hnsc.net/api/v1/roles", {
            'rol_name': name,
            'privileges': JSON.stringify(privileges_)
        }).map(function (result) { return result; });
    };
    ManagementService.prototype.getSystemUsers = function () {
        return this.httpClient.get("http://hnlnoitinvprod01.hnsc.net/api/v1/usersadmins").map(function (result) { return result; });
    };
    ManagementService.prototype.deleteUser = function (user_name, id) {
        return this.httpClient.put("http://hnlnoitinvprod01.hnsc.net/api/v1/usersadmins", {
            'user_name': user_name,
            'id_role': id
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
exports.push([module.i, ".navbar-custom {\r\n    background-color:    #000000   ;\r\n    height: 4.5em;\r\n}\r\n\r\n/* change the brand and text color */\r\n\r\n.navbar-custom .navbar-brand,\r\n.navbar-custom .navbar-text {\r\n    color: rgba(255,255,255,.8);\r\n}\r\n\r\n/* change the link color */\r\n\r\n.navbar-custom .navbar-nav .nav-link {\r\n    color:  #fdfefe ;\r\n}\r\n\r\n.navbar {\r\n    background-color: rgb(35, 47, 62) !important;\r\n}\r\n\r\n/* change the color of active or hovered links */\r\n\r\n.navbar-custom .nav-item.active .nav-link,\r\n.navbar-custom .nav-item:hover .nav-link {\r\n    color: #ff821c;\r\n}\r\n\r\n/* for dropdown only - change the color of droodown */\r\n\r\n.navbar-custom .dropdown-menu {\r\n    background-color: #ff5500;\r\n}\r\n\r\n.navbar-custom .dropdown-item {\r\n    color: #ffffff;\r\n}\r\n\r\n.navbar-custom .dropdown-item:hover,\r\n.navbar-custom .dropdown-item:focus {\r\n    color: #333333;\r\n    background-color: rgba(255,255,255,.5);\r\n}\r\n\r\n.nav-title{\r\n    font-size: 1.5em;\r\n    color : #fdfefe ;\r\n}\r\n\r\n/*h1 { color: #7c795d; font-family: 'Trocchi', serif; font-size: 45px; font-weight: normal; line-height: 48px; margin: 0; }\r\n\r\np { color: #4c4a37; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh5 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh2 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh3 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh4 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; } */\r\n\r\n.EdgeButton:hover{\r\n    background-color: #E0F8FF;\r\n}\r\n\r\n.EdgeButton--secondary-file:hover{\r\n    background-color: #afe0ff;\r\n}\r\n\r\n.EdgeButton--secondaryii:hover{\r\n    background-color: #E0F8FF;\r\n    color: #1da1f2;\r\n}\r\n\r\n.EdgeButton--secondaryiii:hover{\r\n    background-color: #DBFCE8;\r\n    /*color: #69C68E;*/\r\n}\r\n\r\n.nav-drop:hover{\r\n    color: rgb(35, 47, 62);\r\n}\r\n\r\n/*input {\r\n    -moz-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    margin-top: 12px;\r\n    width: 100%;\r\n} */\r\n\r\n.EdgeButton--secondary {\r\n    background-color: #fff;\r\n    border: 1px solid #1da1f2;\r\n    color: #1da1f2;\r\n}\r\n\r\n.EdgeButton--secondaryii {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n \r\n}\r\n\r\n.EdgeButton--secondaryiii {\r\n    background-color: #fff;\r\n    border: 1px solid #69C68E;\r\n    color: #69C68E;\r\n \r\n}\r\n\r\n.EdgeButton--secondary-file {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n}\r\n\r\n.EdgeButton--medium {\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n}\r\n\r\n/*.EdgeButton, .EdgeButton:visited {\r\n    border-radius: 100px;\r\n    box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}*/\r\n\r\n.EdgeButton {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    line-height: 25px;\r\n    padding: 8px 18px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n.EdgeButton--secondaryii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n.EdgeButton--secondaryiii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\ntextarea, div[contenteditable], .t1-select {\r\n    display: inline-block;\r\n    width: 210px;\r\n    padding: 4px;\r\n    margin: 0;\r\n    outline: 0;\r\n    background-color: #fff;\r\n    border: 1px solid #e6ecf0;\r\n    border-radius: 3px;\r\n}\r\n\r\nh1 {\r\n    display: block;\r\n    font-size: 2em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh2 {\r\n    display: block;\r\n    font-size: 1.9em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh3 {\r\n    display: block;\r\n    font-size: 1.8em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh4 {\r\n    display: block;\r\n    font-size: 1.7em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh5 {\r\n    display: block;\r\n    font-size: 1.5em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nbody.ms-windows {\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n.table-head {\r\n    background-color: rgb(35, 47, 62);\r\n    border-color: rgb(35, 47, 62);\r\n    color: #fff;\r\n}\r\n\r\np, label, option{\r\n    font-size: 1em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n  }\r\n\r\noption, select{\r\n    font-size: 0.9em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n  }\r\n\r\n.dropdown-menu{\r\n    background-color: rgb(35, 47, 62);\r\n    border-color: rgb(35, 47, 62);\r\n  }\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <a routerLink=\"/\" class=\"navbar-brand nav-title\">IT Inventory <span><i class=\"fa fa-home\"\r\n        aria-hidden=\"true\"></i></span></a>\r\n\r\n  <div class=\"collapse navbar-collapse justify-content-md-center\" id=\"navbarsExample08\">\r\n    <ul class=\"navbar-nav\">\r\n      <div *ngIf=\"privilegeDashboard\">\r\n\r\n        <li class=\"nav-item dropdown\" *ngIf=\"privilegeDashboard\">\r\n          <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n            (click)=\"dropd()\">\r\n            Dashboard <span><i class=\"fa fa-signal\" aria-hidden=\"true\"></i></span>\r\n          </a>\r\n          <div class=\"dropdown-menu show\" aria-labelledby=\"navbarDropdown\" *ngIf=\"dropdown\">\r\n            <a class=\"dropdown-item nav-link nav-drop\" routerLink=\"dashboard\" style=\"color:#86888c\"\r\n              (click)=\"dropd()\">Dashboard </a>\r\n            <a class=\"dropdown-item nav-link\" routerLink=\"tables\" style=\"color:#86888c\" (click)=\"dropd()\">Asset Moves\r\n            </a>\r\n            <a class=\"dropdown-item nav-link\" routerLink=\"lifetime\" style=\"color:#86888c\" (click)=\"dropd()\">Lifetime\r\n              Table</a>\r\n            <!--<a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                   <div class=\"dropdown-divider\"></div>\r\n                  <a class=\"dropdown-item\" href=\"#\">Something else here</a> -->\r\n          </div>\r\n        </li>\r\n      </div>\r\n      <li class=\"nav-item\" *ngIf=\"privilegeCreate\">\r\n        <a class=\"nav-link\" routerLink=\"newsheet\">Create Inventory Sheet <span><i class=\"fa fa-file-text-o\"\r\n              aria-hidden=\"true\"></i></span></a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"privilegeUpdtae\">\r\n        <a class=\"nav-link\" routerLink=\"updatesheet\">Update Inventory Sheet <span><i class=\"fa fa-wrench\"\r\n              aria-hidden=\"true\"></i></span></a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"privilegeLoan\">\r\n        <a class=\"nav-link\" routerLink=\"loan\">Offboarding-Loan <span><i class=\"fa fa-plane\"\r\n              aria-hidden=\"true\"></i></span></a>\r\n      </li>\r\n      <div *ngIf=\"privilegePdf\">\r\n        <li class=\"nav-item dropdown\" *ngIf=\"privilegePdf\">\r\n          <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n            (click)=\"dropdPdf()\">\r\n            Pdf <span><i class=\"fa fa-file-pdf-o\" aria-hidden=\"true\"></i></span>\r\n          </a>\r\n          <div class=\"dropdown-menu show\" aria-labelledby=\"navbarDropdown\" *ngIf=\"dropdownPdf_\">\r\n            <a class=\"dropdown-item\" routerLink=\"pdf\" (click)=\"dropdPdf()\" style=\"color:#86888c\">PDF</a>\r\n            <a class=\"dropdown-item\" routerLink=\"loansheets\" (click)=\"dropdPdf()\" style=\"color:#86888c\">Loan Sheets</a>\r\n          </div>\r\n        </li>\r\n\r\n      </div>\r\n\r\n      <div *ngIf=\"privilegePdf\">\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n            (click)=\"dropdLicences()\">\r\n            Other Features <span><i class=\"fa fa-list-alt\" aria-hidden=\"true\"></i></span> \r\n          </a>\r\n          <div class=\"dropdown-menu show\" aria-labelledby=\"navbarDropdown\" *ngIf=\"dropdownLicences\">\r\n            <a class=\"dropdown-item nav-link nav-drop\" routerLink=\"license-list\" style=\"color:#86888c\"\r\n              (click)=\"dropdLicences()\">Licences </a>\r\n            <a class=\"dropdown-item nav-link\" routerLink=\"report\" style=\"color:#86888c\" (click)=\"dropdLicences()\">Report License</a>\r\n            <a class=\"dropdown-item nav-link\" routerLink=\"mainbitly\" style=\"color:#86888c\" (click)=\"dropdLicences()\">Bitly</a>\r\n            </div>\r\n        </li>\r\n      </div>\r\n\r\n\r\n      <li class=\"nav-item \" *ngIf=\"privilegeAdmin\">\r\n        <a class=\"nav-link\" routerLink=\"admin\">User Management <span><i class=\"fa fa-unlock-alt\"\r\n              aria-hidden=\"true\"></i></span></a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"nav-item d-flex flex-row-reverse\">\r\n    <button class=\"btn-sm btn btn-outline-info\" (click)=\"Logout()\">Logout <span><i class=\"fa fa-sign-out\"\r\n          aria-hidden=\"true\"></i></span></button>\r\n  </div>\r\n</nav>\r\n\r\n\r\n\r\n\r\n<div *ngIf=\"loggedInPending\">\r\n  <nav class=\"navbar navbar-expand-sm navbar-custom\">\r\n    <div class=\"d-flex justify-content-center\">\r\n      <h3 class=\"d-flex justify-content-center\" style=\"color: #ebebeb\"> IT Inventory System.!</h3>\r\n    </div>\r\n\r\n  </nav>\r\n</div>"

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
        this.dropdown = false;
        this.dropdownPdf_ = false;
        this.dropdownLicences = false;
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
        //comentar la funcion dev only al deployar;
        //this.devOnly();
        //descomentar al deployar;
        var val = this.cookieService.get("token");
        var djtw = __WEBPACK_IMPORTED_MODULE_3_jwt_decode__(val);
        console.log(djtw);
        console.log("up");
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
        //
    };
    NavBarComponent.prototype.Logout = function () {
        var _this = this;
        //destruir ss python
        this.loginService.logout()
            .subscribe(function (res) {
            _this.cookieService.deleteAll();
            window.location.href = '/login';
        });
        this.cookieService.deleteAll();
        var url = "http://hnlnoitinvprod01.hnsc.net/logout";
        window.location.href = url;
    };
    NavBarComponent.prototype.dropd = function () {
        if (this.dropdown) {
            this.dropdown = false;
        }
        else {
            this.dropdown = true;
        }
    };
    NavBarComponent.prototype.dropdPdf = function () {
        if (this.dropdownPdf_) {
            this.dropdownPdf_ = false;
        }
        else {
            this.dropdownPdf_ = true;
        }
    };
    NavBarComponent.prototype.dropdLicences = function () {
        if (this.dropdownLicences) {
            this.dropdownLicences = false;
        }
        else {
            this.dropdownLicences = true;
        }
    };
    NavBarComponent.prototype.devOnly = function () {
        //OJO manejo de los permisos del nav bar se removeran solo para el ambiente de desarrollo comentar lo de abajo y descomentar lo de arriba. 
        //comentar desde aqui
        this.privilegeDashboard = true;
        this.privilegeAdmin = true;
        this.privilegeCreate = true;
        this.privilegeLoan = true;
        this.privilegePdf = true;
        this.privilegeReports = true;
        this.privilegeUpdtae = true;
        //alert("Done");
        //hasta aqui.
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pdf/loan-assets/loan-assets.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*h1 { color: #7c795d; font-family: 'Trocchi', serif; font-size: 45px; font-weight: normal; line-height: 48px; margin: 0; }\r\n\r\np { color: #4c4a37; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh5 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh2 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh3 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh4 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; } */\r\n\r\n\r\n.EdgeButton:hover{\r\n    background-color: #E0F8FF;\r\n}\r\n\r\n\r\n.EdgeButton--secondary-file:hover{\r\n    background-color: #afe0ff;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryii:hover{\r\n    background-color: #E0F8FF;\r\n    color: #1da1f2;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryiii:hover{\r\n    background-color: #DBFCE8;\r\n    /*color: #69C68E;*/\r\n}\r\n\r\n\r\n/*input {\r\n    -moz-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    margin-top: 12px;\r\n    width: 100%;\r\n} */\r\n\r\n\r\n.EdgeButton--secondary {\r\n    background-color: #fff;\r\n    border: 1px solid #1da1f2;\r\n    color: #1da1f2;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryii {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n \r\n}\r\n\r\n\r\n.EdgeButton--secondaryiii {\r\n    background-color: #fff;\r\n    border: 1px solid #69C68E;\r\n    color: #69C68E;\r\n \r\n}\r\n\r\n\r\n.EdgeButton--secondary-file {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n}\r\n\r\n\r\n.EdgeButton--medium {\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n}\r\n\r\n\r\n/*.EdgeButton, .EdgeButton:visited {\r\n    border-radius: 100px;\r\n    box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}*/\r\n\r\n\r\n.EdgeButton {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    line-height: 25px;\r\n    padding: 8px 18px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryiii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n\r\ntextarea, div[contenteditable], .t1-select {\r\n    display: inline-block;\r\n    width: 210px;\r\n    padding: 4px;\r\n    margin: 0;\r\n    outline: 0;\r\n    background-color: #fff;\r\n    border: 1px solid #e6ecf0;\r\n    border-radius: 3px;\r\n}\r\n\r\n\r\nh1 {\r\n    display: block;\r\n    font-size: 2em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nh2 {\r\n    display: block;\r\n    font-size: 1.9em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nh3 {\r\n    display: block;\r\n    font-size: 1.8em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nh4 {\r\n    display: block;\r\n    font-size: 1.7em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nh5 {\r\n    display: block;\r\n    font-size: 1.5em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nbody.ms-windows {\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\n.table-head {\r\n    background-color: rgb(35, 47, 62);\r\n    border-color: rgb(35, 47, 62);\r\n    color: #fff;\r\n}\r\n\r\n\r\np, label, option{\r\n    font-size: 1em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n  }\r\n\r\n\r\noption, select{\r\n    font-size: 0.9em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pdf/loan-assets/loan-assets.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\" *ngIf=\"privilege\">\r\n    <h1 class=\"my-4\">Loan Products <span style=\"color: #0074FF;\" ><i class=\"fa fa-handshake-o\" aria-hidden=\"true\"></i></span></h1>\r\n\r\n    <div class=\"\">\r\n        <div class=\"form-inline d-flex justify-content-end\">\r\n            <div class=\"form-group\">\r\n               <div style=\"margin-right: .5em\">\r\n                <select class=\"form-control\"  [(ngModel)]=\"status_option\">\r\n                  <option value=\"1\">1. On Loan</option>\r\n                  <option value=\"2\">2. Returned</option>\r\n                  <option value=\"3\" selected> All Products</option>\r\n                </select>\r\n\r\n             </div>\r\n\r\n                <input type=\"text\" placeholder=\"Search\" class=\"form-control\" [(ngModel)]=\"search\">\r\n                <button class=\"EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\" (click)=\"find()\">Find</button>\r\n        \r\n            </div>\r\n        \r\n          </div><br>\r\n\r\n        <table class=\"table table-hover table-bordered\">\r\n            <thead class=\"table-head\">\r\n              <tr class=\"\">\r\n                <th scope=\"col\">Id Signature</th>\r\n                <th scope=\"col\">TAG</th>\r\n                <th scope=\"col\">Product Name</th>\r\n                <th scope=\"col\">Return Date</th>\r\n                <th scope=\"col\">Email</th>\r\n                <th scope=\"col\">Status</th>\r\n               <!-- <th scope=\"col\">Status</th>\r\n                <th scope=\"col\">Last?</th> -->\r\n                \r\n              </tr>\r\n            </thead>\r\n            <tbody *ngFor=\"let product of sheets\">\r\n          \r\n              <tr class=\"select\">\r\n                <th scope=\"row\">{{product.id_signature}}</th>\r\n                <td>{{product.id_product}}</td>\r\n                <td>{{product.product_name}}</td>\r\n                <td>{{product.updated}}</td>\r\n                <td>{{product.email}}</td>\r\n                <td>{{product.status}}</td>\r\n              </tr>\r\n          \r\n            </tbody>\r\n          \r\n          </table>\r\n          <div class=\"d-flex justify-content-center\">\r\n              <button class=\"btn btn-link\" *ngIf=\"showpreview\" (click)=\"preview()\" >Preview</button>\r\n              <button class=\"btn btn-link\" *ngIf=\"shownext\" (click)=\"next()\">Next</button>\r\n          </div>\r\n\r\n           <div class=\"d-flex justify-content-start\">\r\n              <p>Search Result Quantity: {{count}}, cursor {{cursor}} More?  {{meta_}}.</p>\r\n          </div>\r\n         \r\n    </div>\r\n <!-- <p>   \r\n    loan-assets works!\r\n    <button class=\"btn btn-danger\" (click)=\"test()\">Dennis</button>\r\n  </p> -->\r\n  \r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pdf/loan-assets/loan-assets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanAssetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_signature_sheet_search_employee_service__ = __webpack_require__("../../../../../src/app/create-signature-sheet/search-employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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






var LoanAssetsComponent = /** @class */ (function () {
    function LoanAssetsComponent(_Service, httpClient, cookieService, router) {
        this._Service = _Service;
        this.httpClient = httpClient;
        this.cookieService = cookieService;
        this.router = router;
        this.privilege = false;
        this.status_option = "3";
        this.page = 1;
        this.sheets = [];
        this.meta = [];
        this.shownext = false;
        this.showpreview = false;
        this.count = 0;
        this.more = false;
        this.meta_ = false;
    }
    LoanAssetsComponent.prototype.ngOnInit = function () {
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
            //this.privilege = true;
            window.location.href = '/login';
        }
        if (this.privilege) {
            this.find();
        }
        else {
            window.location.href = '/login';
        }
    };
    LoanAssetsComponent.prototype.next = function () {
        var _this = this;
        if (!this.search) {
            this.search = "";
        }
        this._Service.searchLoanProducts(this.search, this.page, 10, this.status_option)
            .subscribe(function (res) {
            //console.log(res);
            if (res['products']) {
                var x = res['products'];
                _this.cursor = res['cursor'];
                _this.sheets = x;
                _this.page = _this.page + 1;
                _this.count = res['count'];
            }
            //console.log(this.sheets)
            if (!res['products']) {
                alert('Nothing Found');
                _this.search = '';
                //this.shownext = false;
                //this.showpreview = false;
            }
            else {
                //si no hay nada sustituye los elementos existentes por un null
                if (res['more']) {
                    _this.shownext = true;
                    _this.meta_ = true;
                }
                else {
                    _this.shownext = false;
                    _this.meta_ = false;
                }
                if (res['cursor'] == 11) {
                    _this.showpreview = false;
                }
                else {
                    _this.showpreview = true;
                }
            }
        });
    };
    LoanAssetsComponent.prototype.searchSheet = function (event) {
        this.search = event.target.value;
    };
    LoanAssetsComponent.prototype.test = function () {
        alert("Hola dennis");
    };
    LoanAssetsComponent.prototype.find = function () {
        this.page = 1;
        this.next();
    };
    LoanAssetsComponent.prototype.preview = function () {
        this.page = this.page - 2;
        this.next();
    };
    LoanAssetsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loan-assets',
            template: __webpack_require__("../../../../../src/app/pdf/loan-assets/loan-assets.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pdf/loan-assets/loan-assets.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__create_signature_sheet_search_employee_service__["a" /* SearchEmployeeService */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], LoanAssetsComponent);
    return LoanAssetsComponent;
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
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
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
exports.push([module.i, "/*h1 { color: #7c795d; font-family: 'Trocchi', serif; font-size: 45px; font-weight: normal; line-height: 48px; margin: 0; }\r\n\r\np { color: #4c4a37; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh5 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh2 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh3 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh4 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\n/* color a select file \r\n.file-select:hover{\r\n    color: #DF013A;\r\n} */\r\n\r\n.EdgeButton:hover{\r\n    background-color: #E0F8FF;\r\n}\r\n\r\n.EdgeButton--secondary-file:hover{\r\n    background-color: #afe0ff;\r\n}\r\n\r\n.EdgeButton--secondaryii:hover{\r\n    background-color: #E0F8FF;\r\n    color: #1da1f2;\r\n}\r\n\r\n.EdgeButton--secondaryiii:hover{\r\n    background-color: #DBFCE8;\r\n    color: #69C68E;\r\n}\r\n\r\n/*input {\r\n    -moz-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    margin-top: 12px;\r\n    width: 100%;\r\n} */\r\n\r\n.EdgeButton--secondary {\r\n    background-color: #fff;\r\n    border: 1px solid #1da1f2;\r\n    color: #1da1f2;\r\n}\r\n\r\n.EdgeButton--secondaryii {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n \r\n}\r\n\r\n.EdgeButton--secondaryiii {\r\n    background-color: #69C68E;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n \r\n}\r\n\r\n.EdgeButton--secondary-file {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n}\r\n\r\n.EdgeButton--medium {\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n}\r\n\r\n/*.EdgeButton, .EdgeButton:visited {\r\n    border-radius: 100px;\r\n    box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}*/\r\n\r\n.EdgeButton {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    line-height: 25px;\r\n    padding: 8px 18px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n.EdgeButton--secondaryii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n.EdgeButton--secondaryiii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\ntextarea, div[contenteditable], .t1-select {\r\n    display: inline-block;\r\n    width: 210px;\r\n    padding: 4px;\r\n    margin: 0;\r\n    outline: 0;\r\n    background-color: #fff;\r\n    border: 1px solid #e6ecf0;\r\n    border-radius: 3px;\r\n}\r\n\r\nh1 {\r\n    display: block;\r\n    font-size: 2em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh2 {\r\n    display: block;\r\n    font-size: 1.9em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh3 {\r\n    display: block;\r\n    font-size: 1.8em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh4 {\r\n    display: block;\r\n    font-size: 1.7em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh5 {\r\n    display: block;\r\n    font-size: 1.5em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nbody.ms-windows {\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n.table-head {\r\n    background-color: rgb(35, 47, 62);\r\n    border-color: rgb(35, 47, 62);\r\n    color: #fff;\r\n}\r\n\r\np, label, option{\r\n    font-size: 1em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n  }\r\n\r\noption, select{\r\n    font-size: 0.9em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pdf/pdfs/pdfs.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\" *ngIf=\"privilege\">\r\n    <h1 class=\"my-4\">PDF Signature Sheet <span style=\"color:red;\" ><i class=\"fa fa-file-pdf-o\" aria-hidden=\"true\" (click)=\"siteInformation()\"></i></span>\r\n\r\n    </h1>\r\n        <div class=\"row\" *ngIf=\"siteInfo\">\r\n\r\n                <!-- Blog Entries Column -->\r\n                <div class=\"col-md-8\">\r\n        \r\n        \r\n                  <!-- Blog Post -->\r\n                  <div class=\"card mb-4\">\r\n                      <br>\r\n                    <img class=\"card-img-top\" [src]=\"fullImagePath\" alt=\"Card image cap\">\r\n                    <div class=\"card-body\">\r\n                      <h2 class=\"card-title\">Some statements</h2>\r\n                      <p class=\"card-text\">\"The Portable Document Format (PDF) is a file format developed in the 1990s to present documents, including text formatting and images, in a manner independent of application software, hardware, and operating systems. Based on the PostScript language, each PDF file encapsulates a complete description of a fixed-layout flat document, including the text, fonts, vector graphics, raster images and other information needed to display it. PDF was standardized as an open format, ISO 32000, in 2008, and does not require any royalties for its implementation.\"</p>\r\n                     <!-- <button class=\"btn btn-info btn-sm\" (click)=\"start()\">Let's Get Started!</button> -->\r\n                    </div>\r\n                    <div class=\"card-footer text-muted\">\r\n                      Laureate International Universities\r\n                    </div>\r\n                  </div>\r\n        \r\n                </div>\r\n        \r\n                <!-- Sidebar Widgets Column -->\r\n                <div class=\"col-md-4\">\r\n        \r\n\r\n                  <br><br><br>\r\n        \r\n                  <!-- Categories Widget -->\r\n                  <div class=\"card my-4\">\r\n                    <h5 class=\"card-header\">Reminder</h5>\r\n                    <div class=\"card-body\">\r\n                      <div class=\"\">\r\n                        <p>Here you can search PDF, load the signed sheets and see the record of the sheets</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n        \r\n                  <!-- Side Widget -->\r\n                  <div class=\"card my-4\">\r\n                    <h5 class=\"card-header\">Loan Policy</h5>\r\n                    <div class=\"card-body\">\r\n                            Today, PDF files may contain a variety of content besides flat text and graphics including logical structuring elements, interactive elements such as annotations and form-fields, layers, rich media (including video content) and three dimensional objects using U3D or PRC, and various other data formats. The PDF specification also provides for encryption and digital signatures, file attachments and metadata to enable workflows requiring these features.\"\r\n                    </div>\r\n                  </div>\r\n        \r\n                </div>\r\n        \r\n              </div>\r\n\r\n\r\n    <div *ngIf=\"findPdfBool\" [@slideInOut]>\r\n       <!-- <h3>PDF Signature Sheet <span style=\"color:red;\"><i class=\"fa fa-file-pdf-o\" aria-hidden=\"true\"></i></span></h3>\r\n        <p>\"The Portable Document Format (PDF) is a file format developed in the 1990s to present documents, including text formatting and images, in a manner independent of application software, hardware, and operating systems. Based on the PostScript language, each PDF file encapsulates a complete description of a fixed-layout flat document, including the text, fonts, vector graphics, raster images and other information needed to display it. PDF was standardized as an open format, ISO 32000, in 2008, and does not require any royalties for its implementation.\r\n\r\n            Today, PDF files may contain a variety of content besides flat text and graphics including logical structuring elements, interactive elements such as annotations and form-fields, layers, rich media (including video content) and three dimensional objects using U3D or PRC, and various other data formats. The PDF specification also provides for encryption and digital signatures, file attachments and metadata to enable workflows requiring these features.\"</p>\r\n        --> <hr>\r\n        <div >\r\n            <div class=\"form-group\">\r\n              <h4>Find PDF <span><i class=\"fa fa-search\" aria-hidden=\"true\"></i></span> <span style=\"color:red;\"><i class=\"fa fa-file-pdf-o\" aria-hidden=\"true\"></i></span></h4>\r\n              <label for=\"text-input\">Please select the Signature sheet in the table below</label>\r\n                <input disabled type=\"text\" id=\"text-input\" class=\"form-control\" [(ngModel)]=\"text\">\r\n            </div>\r\n        </div>\r\n    \r\n        <button class=\"btn EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\" (click)=\"searchPdf()\" tooltip=\"Vivamus sagittis\">Look for original pdf.!</button>\r\n        <button class=\"btn EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\" (click)=\"searchScannedPdf()\">Look for scanned pdf.!</button>\r\n        <div class=\"container\" *ngIf=\"boolpdfroute\">\r\n          <p>In case download does not start please contact a IT Agent</p>\r\n    \r\n        </div><br>\r\n    </div> <hr>\r\n    <div class=\"\">\r\n        <h3>Historical Signature Sheet Table <span><i class=\"fa fa-history\" aria-hidden=\"true\"></i></span></h3>\r\n        <div class=\"form-inline d-flex justify-content-end\">\r\n            <div class=\"form-group\">\r\n               <div style=\"margin-right: 0.5em\">\r\n                <select class=\"form-control\" [(ngModel)]=\"sheet_option\">\r\n                  <option value=\"1\">Onboarding</option>\r\n                  <option value=\"2\">Offboarding</option>\r\n                  <option value=\"3\">Loan</option>\r\n                  <option value=\"4\">Updates</option>\r\n                  <option value=\"5\" selected>All Sheets</option>\r\n                </select>\r\n\r\n                <select class=\"form-control\" [(ngModel)]=\"status_option\">\r\n                  <option value=\"1\">On Loan</option>\r\n                  <option value=\"2\" selected> Returned</option>\r\n                </select>\r\n\r\n             </div>\r\n\r\n                <input type=\"text\" placeholder=\"Search\" class=\"form-control\" (keyup)=\"searchSheet($event)\">\r\n                <button class=\"EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\" (click)=\"find()\" style=\"margin-left: 0.5em\">Find</button>\r\n               <!-- <input type=\"submit\" class=\"EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\" value=\"Iniciar sesión\"> -->\r\n                \r\n            </div>\r\n        \r\n          </div><br>\r\n\r\n        <table class=\"table table-hover table-bordered\">\r\n            <thead class=\"table-head\">\r\n              <tr class=\"\">\r\n                <th scope=\"col\">Sheet Id</th>\r\n                <th scope=\"col\">First Name</th>\r\n                <th scope=\"col\">Last Name</th>\r\n                <th scope=\"col\">E-mail</th>\r\n                <th scope=\"col\">Employee ID</th>\r\n                <th scope=\"col\">Date</th>\r\n                <th scope=\"col\">select</th>\r\n                <th scope=\"col\"></th>\r\n               <!-- <th scope=\"col\">Status</th>\r\n                <th scope=\"col\">Last?</th> -->\r\n                \r\n              </tr>\r\n            </thead>\r\n            <tbody *ngFor=\"let product of sheets\">\r\n          \r\n              <tr class=\"select\">\r\n                <th scope=\"row\">{{product.id_signature}}</th>\r\n                <td>{{product.first_name}}</td>\r\n                <td>{{product.last_name}}</td>\r\n                <td>{{product.email}}</td>\r\n                <td>{{product.id_employee}}</td>\r\n                <td>{{product.updated}}</td>\r\n                <td><button class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\" (click)=\"onSelect(product)\" >select</button></td>\r\n                <td><button class=\"btn btn-sm EdgeButton EdgeButton--secondaryiii EdgeButton--medium submit js-submit\" (click)=\"onselectUpload(product)\">upload</button></td>\r\n              \r\n\r\n              </tr>\r\n          \r\n            </tbody>\r\n          \r\n          </table>\r\n          <div class=\"d-flex justify-content-center\">\r\n              <button class=\"btn btn-link\" *ngIf=\"showpreview\" (click)=\"preview()\">Preview</button>\r\n              <button class=\"btn btn-link\" (click)=\"next()\" *ngIf=\"shownext\">Next</button>\r\n          </div>\r\n\r\n          <div class=\"d-flex justify-content-start\" *ngIf=\"meta\">\r\n              <p>Search Result Quantity: {{meta['count']}}, cursor {{meta['cursor']}} More?  {{meta['more']}}.</p>\r\n          </div>\r\n         <!-- {{search}} - {{sheet_option}} - {{status_option}}- {{text}} -->\r\n\r\n        <!-- <button class=\"btn btn-danger\" [disabled]=\"disable_flag == 0\" (click)=\"disable()\">Test</button> -->\r\n    </div>\r\n<!--    <div><br>\r\n        <div class=\"form-group\">\r\n          <h4>Find PDF <span><i class=\"fa fa-search\" aria-hidden=\"true\"></i></span> <span style=\"color:red;\"><i class=\"fa fa-file-pdf-o\" aria-hidden=\"true\"></i></span></h4>\r\n          <label for=\"text-input\">Please Enter the Signature pdf name, this is id of the sheet join with the employee id number</label>\r\n            <input disabled type=\"text\" id=\"text-input\" class=\"form-control\" [(ngModel)]=\"text\">\r\n        </div>\r\n    </div>\r\n\r\n    <button class=\"btn btn-info\" (click)=\"searchPdf()\">Look for original pdf.!</button>\r\n    <button class=\"btn btn-info\" (click)=\"searchScannedPdf()\">Look for scanned pdf.!</button>\r\n    <div class=\"container\" *ngIf=\"boolpdfroute\">\r\n      <p>In case download does not start please contact a IT Agent</p>\r\n\r\n    </div><br><br> -->\r\n    \r\n    <div *ngIf=\"readyUpload\" id=\"upload_div\" class=\"\">\r\n        <hr>\r\n        <h4 class=\"row d-flex justify-content-start\">Upload Pdf File. <span style=\"color:rgb(0, 119, 255)\"><i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i></span></h4>\r\n        <label for=\"pdf-input\" class=\"row d-flex justify-content-start\">The File will be bound to the user selected. </label>\r\n        <div class=\"row d-flex justify-content-start\">\r\n            <input disabled type=\"text\" id=\"pdf-input\" class=\"form-control\" [(ngModel)]=\"pdfFile\" > \r\n        </div>\r\n        <div class=\"row d-flex justify-content-start file-select\" style=\"padding-top:0.5em;\">\r\n            <label for=\"file-upload\" class=\"btn EdgeButton EdgeButton--secondary-file EdgeButton--medium submit js-submit\"  >\r\n                <i class=\"fa fa-hand-o-up file-select\"></i> <span class=\"file-select\">Select File</span> \r\n            </label>\r\n            <input type=\"file\" id=\"file-upload\" (change)=\"onFileSelected($event)\" class=\"from-control\" size=\"60\" style=\"display:none;\">\r\n            <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryiii \" (click)=\"onUpload()\" >upload</button>\r\n        </div>\r\n\r\n    </div>\r\n\r\n   <!-- <button class=\"btn btn-danger\" (click)=\"test()\">Test</button> -->\r\n\r\n      <button class=\"\" (click)=\"openModal(template)\" id=\"modal\" style=\"display:none\"></button>\r\n  \r\n    <ng-template #template>\r\n      <div class=\"modal-body text-center alert\" >\r\n        <p id=\"errorMessage\">!</p>\r\n        <button class=\"btn btn-info\" (click)=\"modalRef.hide()\">Ok</button><br>\r\n    </div>\r\n    \r\n    </ng-template >\r\n    \r\n</div>\r\n\r\n\r\n<!-- style=\"border:1px solid #ccc; display:inline-block; cursor:pointer;\" -->"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
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
    function PdfsComponent(_Service, httpClient, cookieService, router, modalService) {
        this._Service = _Service;
        this.httpClient = httpClient;
        this.cookieService = cookieService;
        this.router = router;
        this.modalService = modalService;
        this.boolpdfroute = false;
        this.selectedFile = null;
        //table params
        this.page = 1;
        this.limit = 10;
        this.searchText = "";
        this.readyUpload = false;
        this.sheet_option = "5";
        this.status_option = "1";
        //service response
        this.sheets = [];
        this.meta = [];
        this.shownext = false;
        this.showpreview = false;
        this.privilege = false;
        this.siteInfo = false;
        this.disable_flag = 1;
        this.messegeError = 'More information required';
        this.fileUploadedflag = false;
        this.findPdfBool = false;
        this.fullImagePath = '/assets/images/advice-advise-advisor-7096.jpg';
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
            //this.privilege = true;
            window.location.href = '/login';
        }
        if (this.privilege) {
            this._Service.searchSignatureSheets(this.page, this.searchText, this.limit, this.sheet_option, this.status_option)
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
        //alert(this.option);
        console.log(this.sheet_option + ' ' + this.status_option);
    };
    PdfsComponent.prototype.siteInformation = function () {
        if (this.siteInfo) {
            this.siteInfo = false;
        }
        else {
            this.siteInfo = true;
        }
    };
    PdfsComponent.prototype.searchPdf = function () {
        if (this.text) {
            this.boolpdfroute = true;
            this.url = "http://hnlnoitinvprod01.hnsc.net/pdf/" + this.text;
            window.location.href = this.url;
        }
        else {
            this.messegeError = 'Select a sheet First.!';
            document.getElementById('modal').click();
        }
    };
    PdfsComponent.prototype.searchScannedPdf = function () {
        var _this = this;
        if (this.text) {
            this._Service.pdf_validation(this.pdf_id)
                .subscribe(function (res) {
                if (res['message'] == 'Yes') {
                    _this.boolpdfroute = true;
                    _this.url = "http://hnlnoitinvprod01.hnsc.net/scannedpdf/" + _this.text;
                    window.location.href = _this.url;
                }
                else {
                    //alert('No file to show');
                    _this.messegeError = 'No file to show';
                    document.getElementById('modal').click();
                }
            });
        }
        else {
            this.messegeError = 'Select a sheet First';
            document.getElementById('modal').click();
        }
    };
    PdfsComponent.prototype.searchSheet = function (event) {
        this.search = event.target.value;
    };
    PdfsComponent.prototype.onSelect = function (selectedItem) {
        this.findPdfBool = true;
        var x = {
            'ID_SIGNATURE': selectedItem.id_signature,
            'EMPLOYEE_ID': selectedItem.id_employee,
        };
        var pdfname = x['ID_SIGNATURE'] + x['EMPLOYEE_ID'];
        this.text = pdfname;
        this.pdf_id = x['ID_SIGNATURE'];
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
        this.pdf_id = x['ID_SIGNATURE'];
        this.pdfFile = pdfname;
        this.readyUpload = true;
        //console.log(this.pdf_id);
    };
    PdfsComponent.prototype.next = function () {
        var _this = this;
        if (this.search) {
            this.search = this.search;
        }
        else {
            this.search = "";
        }
        if (this.sheet_option != '3') {
            this.status_option = '1';
        }
        this._Service.searchSignatureSheets(this.page, this.search, this.limit, this.sheet_option, this.status_option)
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
        this.fileUploadedflag = true;
    };
    PdfsComponent.prototype.onUpload = function () {
        var _this = this;
        if (this.fileUploadedflag) {
            this._Service.pdf_validation(this.pdf_id)
                .subscribe(function (res) {
                console.log(res['message']);
                if (res['message'] == 'Yes') {
                    _this.messegeError = 'Image already Uploaded';
                    document.getElementById('modal').click();
                    //alert('Image already Uploaded');
                }
                else {
                    _this._Service.pdf_image_insert(_this.pdf_id, _this.pdfFile)
                        .subscribe(function (res) {
                        console.log(res);
                        //alert();
                        if (res['message'] == 'Done') {
                            //alert('Cargar archivo terminar');
                            //alert(this.pdfFile);
                            var fd = new FormData();
                            fd.append('pdf', _this.selectedFile, _this.selectedFile.name);
                            _this.httpClient.post("http://hnlnoitinvprod01.hnsc.net/upload/" + _this.pdfFile, fd)
                                .subscribe(function (result) {
                                if (result['message'] == 'Done') {
                                    window.location.href = '/pdf';
                                }
                            });
                        }
                        else {
                            _this.messegeError = 'Something Wrong';
                            document.getElementById('modal').click();
                        }
                    });
                }
            });
        }
        else {
            this.messegeError = 'No file Chosen';
            document.getElementById('modal').click();
        }
    };
    PdfsComponent.prototype.disable = function () {
        this.disable_flag = 0;
    };
    PdfsComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
        document.getElementById('errorMessage').innerHTML = this.messegeError;
    };
    PdfsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pdfs',
            template: __webpack_require__("../../../../../src/app/pdf/pdfs/pdfs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pdf/pdfs/pdfs.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["i" /* trigger */])('slideInOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["g" /* style */])({ transform: 'translateY(-100%)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["e" /* animate */])('200ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["g" /* style */])({ transform: 'translateY(0%)' }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["e" /* animate */])('200ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["g" /* style */])({ transform: 'translateY(-100%)' }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__create_signature_sheet_search_employee_service__["a" /* SearchEmployeeService */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["a" /* BsModalService */]])
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
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */]
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
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
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
exports.push([module.i, "/*h1 { color: #7c795d; font-family: 'Trocchi', serif; font-size: 45px; font-weight: normal; line-height: 48px; margin: 0; }\r\n\r\np { color: #4c4a37; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh5 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh2 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh3 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh4 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }¨*/\r\n\r\n\r\n.EdgeButton:hover{\r\n    background-color: #E0F8FF;\r\n}\r\n\r\n\r\n.EdgeButton--secondary-file:hover{\r\n    background-color: #afe0ff;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryii:hover{\r\n    background-color: #E0F8FF;\r\n    color: #1da1f2;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryiii:hover{\r\n    background-color: #DBFCE8;\r\n    /*color: #69C68E;*/\r\n}\r\n\r\n\r\n.EdgeButton--secondaryiv:hover{\r\n    background-color: #ffc6c6;\r\n    /*color: #69C68E;*/\r\n}\r\n\r\n\r\n.EdgeButton--secondaryiv {\r\n    background-color: #fff;\r\n    border: 1px solid #db4646;\r\n    color: #db4646;\r\n \r\n}\r\n\r\n\r\n/*input {\r\n    -moz-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    margin-top: 12px;\r\n    width: 100%;\r\n} */\r\n\r\n\r\n.EdgeButton--secondary {\r\n    background-color: #fff;\r\n    border: 1px solid #1da1f2;\r\n    color: #1da1f2;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryii {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n \r\n}\r\n\r\n\r\n.EdgeButton--secondaryiii {\r\n    background-color: #fff;\r\n    border: 1px solid #69C68E;\r\n    color: #69C68E;\r\n \r\n}\r\n\r\n\r\n.EdgeButton--secondary-file {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n}\r\n\r\n\r\n.EdgeButton--medium {\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n}\r\n\r\n\r\n/*.EdgeButton, .EdgeButton:visited {\r\n    border-radius: 100px;\r\n    box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}*/\r\n\r\n\r\n.EdgeButton {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    line-height: 25px;\r\n    padding: 8px 18px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryiii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n\r\ntextarea, div[contenteditable], .t1-select {\r\n    display: inline-block;\r\n    width: 210px;\r\n    padding: 4px;\r\n    margin: 0;\r\n    outline: 0;\r\n    background-color: #fff;\r\n    border: 1px solid #e6ecf0;\r\n    border-radius: 3px;\r\n}\r\n\r\n\r\nh1 {\r\n    display: block;\r\n    font-size: 2em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nh2 {\r\n    display: block;\r\n    font-size: 1.9em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nh3 {\r\n    display: block;\r\n    font-size: 1.8em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nh4 {\r\n    display: block;\r\n    font-size: 1.7em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nh5 {\r\n    display: block;\r\n    font-size: 1.5em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nbody.ms-windows {\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\n.table-head {\r\n    background-color: rgb(35, 47, 62);\r\n    border-color: rgb(35, 47, 62);\r\n    color: #fff;\r\n}\r\n\r\n\r\np, label, option{\r\n    font-size: 1em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n  }\r\n\r\n\r\noption, select{\r\n    font-size: 0.9em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/update-signature-sheet/updatesheet/updatesheet.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\" *ngIf=\"privilege\">\r\n    <h1 class=\"my-4\">Update Signature Sheet <span style=\"color:red;\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"(click)=\"siteInformation()\"></i></span><hr>\r\n\r\n    </h1>\r\n        <div class=\"row\" *ngIf=\"siteInfo\">\r\n\r\n                <!-- Blog Entries Column -->\r\n                <div class=\"col-md-8\">\r\n        \r\n        \r\n                  <!-- Blog Post -->\r\n                  <div class=\"card mb-4\">\r\n                    <img class=\"card-img-top\" [src]=\"fullImagePath\" alt=\"Card image cap\">\r\n                    <div class=\"card-body\">\r\n                      <h2 class=\"card-title\">Some statements</h2>\r\n                      <p class=\"card-text\">\"Once created the initial sheet we can update in this module, removing products from the sheet and adding new if we want this will generate a new sheet and the previous one will become part of the historical\"</p>\r\n                      <button class=\"btn btn-info btn-sm\" (click)=\"start()\">Let's Get Started!</button>\r\n                    </div>\r\n                    <div class=\"card-footer text-muted\">\r\n                      Laureate International Universities\r\n                    </div>\r\n                  </div>\r\n        \r\n                </div>\r\n        \r\n                <!-- Sidebar Widgets Column -->\r\n                <div class=\"col-md-4\">\r\n        \r\n\r\n                  <br><br><br>\r\n        \r\n                  <!-- Categories Widget -->\r\n                  <div class=\"card my-4\">\r\n                    <h5 class=\"card-header\">Reminder</h5>\r\n                    <div class=\"card-body\">\r\n                      <div class=\"\">\r\n                        <p>The processes of adding and removing are independent, it is not necessary to do both but at least one</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n        \r\n                  <!-- Side Widget -->\r\n                  <div class=\"card my-4\">\r\n                    <h5 class=\"card-header\">Loan Policy</h5>\r\n                    <div class=\"card-body\">\r\n                            The policy should also address postorigination activities, such as ongoing monitoring and credit administration, including postorigination monitoring of loan covenants, obtaining financial information, and assessing the borrower's ongoing ability to service the debt and ultimately repay the loan.\r\n                    </div>\r\n                  </div>\r\n        \r\n                </div>\r\n        \r\n              </div>\r\n    <div>\r\n       <!-- <h3>Update Signature Sheet <span style=\"color:yellowgreen\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></span></h3>\r\n        <p>\"Offboarding is understood here as a software-supported process in personnel and identity management, which ensures the safe deactivation and documentation of the access rights of employees who have been relieved, thus preventing data misuse and theft. As part of computer security, the process will also ensure that access privileges are revoked when a person leaves, and may also cover other issues such as the recovery of equipment, keys and credit cards to ensure that security integrity be maintained.\"</p>\r\n         <br>\r\n        <div class=\"form-group\"> \r\n            <button class=\"btn btn-info btn-sm\" (click)=\"start()\">Let's Get Started!</button>\r\n        </div> -->\r\n    </div>\r\n    <div class=\" col-6\" *ngIf=\"boolfirst\">\r\n        <h3> Select a type <span><i class=\"fa fa-calendar\" aria-hidden=\"true\" style=\"color:red;\"></i></span></h3>\r\n        <div class=\"form-group\">\r\n            <select class=\"form-control\" [(ngModel)]=\"option\">\r\n            <!--        <option value=\"2\">Offboarding</option> -->\r\n                    <option value=\"4\" selected>update</option>\r\n            </select>\r\n        </div>\r\n        <!-- <div class=\"form-group\">\r\n            <input type=\"Date\" class=\"form-control\" [(ngModel)]=\"date\">\r\n        </div> -->\r\n        <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\" (click)=\"validate()\">Continue</button>\r\n    </div>\r\n    <ul class=\"list-group\" *ngFor=\"let item of selectemploye\">\r\n        <li class=\"list-group-item list-group-item-success \">{{item.FIRST_NAME}}  {{item.LAST_NAME}} - {{item.EMAIL}} - {{item.EMPLOYEE_ID}}</li>\r\n      \r\n      </ul>\r\n\r\n\r\n    <div *ngIf=\"boolemployee\">\r\n         <h3>Second-Step select the employee <span><i class=\"fa fa-users\" aria-hidden=\"true\"></i></span></h3>\r\n          <!-- <ul class=\"list-group\" *ngFor=\"let item of selectemploye\">{{item.FIRST_NAME}} - {{item.LAST_NAME}} - {{item.EMAIL}} </ul> -->\r\n  \r\n  \r\n  \r\n         <app-employee-table (employeevent)=\"selectemploye=$event\"></app-employee-table>\r\n         <div class=\"d-flex justify-content-center\">\r\n                  <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryiii EdgeButton--medium submit js-submit\" (click)=\"backemployee()\">Go Back</button><h4>-</h4>\r\n                  <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryiii EdgeButton--medium submit js-submit\" (click)=\"continueemployee(procesValidationtemplate)\">Continue</button>\r\n         </div>    \r\n    </div >\r\n       \r\n    <div *ngIf=\"currentproducts\">\r\n        <app-user-products [parentData]=\"selectemploye\" (productremovesevent)=\"productremovesevent=$event\" (currentproductrevent)=\"selectproducts=$event\"></app-user-products>\r\n         <div class=\"d-flex justify-content-center\">\r\n            <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryiii EdgeButton--medium submit js-submit\" (click)=\"backemployee()\" >Go Back</button><h4>-</h4>\r\n            <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryiii EdgeButton--medium submit js-submit\" (click)=\"continueprods()\">Add Product</button> \r\n        </div> \r\n    </div>\r\n\r\n    <div *ngIf=\"boolproducts\" >\r\n        <app-product-list (productsevent)=\"productsevent=$event\"></app-product-list>\r\n        <!--<button class=\"btn btn-info \" (click)=\"backproducts()\">Go Back</button> -->\r\n        <div class=\"d-flex justify-content-center\">\r\n                <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryiii EdgeButton--medium submit js-submit\" (click)=\"backproducts()\">Go Back</button>\r\n        </div>  \r\n    </div>\r\n\r\n    \r\n    <br><br><br><br>\r\n    \r\n    <div *ngIf=\"boolproducts\" class=\"d-flex justify-content-center\">\r\n            <!-- <button class=\"btn btn-link btn-lg\" (click)=\"createSignatureSheet()\"></button> -->\r\n            <button class=\"EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\" (click)=\"openModal(template)\">Save & Update Signature Sheet</button><br>\r\n        </div><br>\r\n    <div *ngIf=\"confirmation\" class=\"alert\" role=\"alert\">\r\n            <h4 class=\"alert-heading\">Are you sure of update this Signature Sheet?</h4>\r\n            <p>The information will be save and automatically download a pdf file of the sheet, press 'YES', to continue or 'No', to go back.</p>\r\n            <div class=\"d-flex justify-content-start\">\r\n                <button class=\"btn btn-info btn-sm \" (click)=\"updateSheet()\" >YES</button><p>-</p>\r\n                <button class=\"btn btn-info btn-sm \" (click)=\"abort()\"> NO</button>\r\n            </div>\r\n            <hr>\r\n            <p class=\"mb-0\">-LAUREATE IT-</p>\r\n        </div>\r\n    <!-- <button class=\"btn\" (click)=\"testAlert()\">Testbutton</button>  -->\r\n\r\n</div>\r\n<!-- <button (click)=\"testx()\">test</button> -->\r\n\r\n<ng-template #template>\r\n    <div class=\"modal-body text-center alert\">\r\n        <p>Are you sure of save this Signature Sheet?? <span><i class=\"fa fa-question-circle-o\" aria-hidden=\"true\"></i></span></p>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateSheet()\" [disabled]=\"disable_flag == 0\">Yes</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"abort()\" >No</button>\r\n        <div class=\"modal-body alert \" role=\"alert\">\r\n                    The information will be update and automatically create a pdf file of the sheet, press 'YES', to continue or 'No', to go back.\r\n        </div>\r\n    </div>\r\n    \r\n       \r\n</ng-template>\r\n\r\n<ng-template #procesValidationtemplate>\r\n        <div class=\"modal-body text-center alert \">\r\n            <p>It is not possible to Create this sheet.! <span><i class=\"fa fa-times\" aria-hidden=\"true\"></i></span></p>\r\n            <button class=\"btn btn-danger\" (click)=\"ok()\">Ok</button><br>\r\n            <div class=\"modal-body alert \" role=\"alert\">\r\n                    Verify that the user has an onboarding sheet, or does not have an offboarding sheet\r\n            </div>\r\n        </div>\r\n        \r\n           \r\n    </ng-template>\r\n\r\n"

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
        this.boolfirst = true;
        //data a enviar
        this.selectemploye = [];
        this.productsevent = [];
        this.option = 4;
        this.confirmation = false;
        //updating
        this.userprod = "BVB";
        this.currentproducts = false;
        this.selectproducts = [];
        this.productremovesevent = [];
        this.privilege = false;
        this.validation = 0;
        this.siteInfo = false;
        this.disable_flag = 1;
        this.fullImagePath = '/assets/images/blurred-background-close-up-coffee-cup-908284.jpg';
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
            //this.privilege = true;
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
    UpdatesheetComponent.prototype.siteInformation = function () {
        if (this.siteInfo) {
            this.siteInfo = false;
        }
        else {
            this.siteInfo = true;
        }
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
        if (this.selectproducts) {
            //alert("No esta definido");
            console.log(this.selectproducts);
            if (this.selectproducts.length == 0) {
                alert('Nothing to remove? Select Remove Nothing to Continue.!');
                console.log(this.selectproducts);
            }
            else {
                this.currentproducts = false;
                this.boolproducts = true;
                this.boolemployee = false;
            }
        }
        else {
            this.selectproducts = [];
            console.log(this.selectproducts);
            this.currentproducts = false;
            this.boolproducts = true;
            this.boolemployee = false;
        }
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
        this.disable_flag = 0;
        var l = this.selectproducts.length;
        var x = this.selectemploye[0];
        if ((this.productremovesevent.length != 0 || this.productsevent.length != 0) && x) {
            this._searchEmployees.updateSheet(this.option, x.EMPLOYEE_ID, x.FIRST_NAME, x.LAST_NAME, x.EMAIL)
                .subscribe(function (result) {
                //alert("Preparing to update..");
                console.log(result);
                if (result['message'] == "Signature Sheet correctly inserted") {
                    _this._searchEmployees.updateSignatureSheet(_this.productremovesevent, _this.productsevent, _this.selectproducts, _this.selectemploye, _this.option, _this.selectemploye[0]['EMPLOYEE_ID'])
                        .subscribe(function (result) {
                        console.log(result);
                        alert("updated");
                        window.location.href = '/updatesheet';
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__create_signature_sheet_search_employee_service__["a" /* SearchEmployeeService */], __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], UpdatesheetComponent);
    return UpdatesheetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/update-signature-sheet/user-products/user-products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*h1 { color: #7c795d; font-family: 'Trocchi', serif; font-size: 45px; font-weight: normal; line-height: 48px; margin: 0; }\r\n\r\np { color: #4c4a37; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh5 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh2 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh3 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh4 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; } */\r\n\r\n.EdgeButton:hover{\r\n    background-color: #E0F8FF;\r\n}\r\n\r\n.EdgeButton--secondary-file:hover{\r\n    background-color: #afe0ff;\r\n}\r\n\r\n.EdgeButton--secondaryii:hover{\r\n    background-color: #E0F8FF;\r\n    color: #1da1f2;\r\n}\r\n\r\n.EdgeButton--secondaryiii:hover{\r\n    background-color: #ffc6c6;\r\n    color: #db4646\r\n    /*color: #69C68E;*/\r\n}\r\n\r\n.EdgeButton--secondaryiv:hover{\r\n    background-color: #ffc6c6;\r\n    color: #db4646\r\n    /*color: #69C68E;*/\r\n}\r\n\r\n/*input {\r\n    -moz-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    margin-top: 12px;\r\n    width: 100%;\r\n} */\r\n\r\n.EdgeButton--secondary {\r\n    background-color: #fff;\r\n    border: 1px solid #1da1f2;\r\n    color: #1da1f2;\r\n}\r\n\r\n.EdgeButton--secondaryii {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n \r\n}\r\n\r\n.EdgeButton--secondaryiii {\r\n    background-color: #db4646;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n \r\n}\r\n\r\n.EdgeButton--secondaryiv {\r\n    background-color: #fff;\r\n    border: 1px solid #db4646;\r\n    color: #db4646;\r\n \r\n}\r\n\r\n.EdgeButton--secondary-file {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n}\r\n\r\n.EdgeButton--medium {\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n}\r\n\r\n/*.EdgeButton, .EdgeButton:visited {\r\n    border-radius: 100px;\r\n    box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}*/\r\n\r\n.EdgeButton {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    line-height: 25px;\r\n    padding: 8px 18px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n.EdgeButton--secondaryii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n.EdgeButton--secondaryiii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\ntextarea, div[contenteditable], .t1-select {\r\n    display: inline-block;\r\n    width: 210px;\r\n    padding: 4px;\r\n    margin: 0;\r\n    outline: 0;\r\n    background-color: #fff;\r\n    border: 1px solid #e6ecf0;\r\n    border-radius: 3px;\r\n}\r\n\r\nh1 {\r\n    display: block;\r\n    font-size: 2em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh2 {\r\n    display: block;\r\n    font-size: 1.9em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh3 {\r\n    display: block;\r\n    font-size: 1.8em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh4 {\r\n    display: block;\r\n    font-size: 1.7em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh5 {\r\n    display: block;\r\n    font-size: 1.5em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nbody.ms-windows {\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n.table-head {\r\n    background-color: #343a40;\r\n    border-color: #343a40;\r\n    color: #fff;\r\n}\r\n\r\np, label, option{\r\n    font-size: 1em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n  }\r\n\r\noption, select{\r\n    font-size: 0.9em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/update-signature-sheet/user-products/user-products.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\">\r\n    <h3>Current products:</h3>\r\n\r\n    <div class=\"\">\r\n          <table class=\"table table-hover table-bordered\">\r\n              <thead class=\"table-head\">\r\n                <tr class=\"\">\r\n                    <th scope=\"col\">Sheet Id</th>\r\n                  <th scope=\"col\">CI Name</th>\r\n                  <!-- <th scope=\"col\">CI Type</th> -->\r\n                  <th scope=\"col\">Tag</th>\r\n                  <th scope=\"col\">Serial N°</th>\r\n                  <th scope=\"col\">Model</th>\r\n                  <th scope=\"col\">CIID</th>\r\n                  <th scope=\"col\">Remove?</th>\r\n                  \r\n                </tr>\r\n              </thead>\r\n              <tbody *ngFor=\"let product of currentproducts\">\r\n            \r\n                <tr class=\"select\">\r\n                  <th scope=\"row\">{{product.id_signature}}</th>\r\n                  <td>{{product.product_name}}</td>\r\n                 <!-- <td>{{product.CI_TYPE}}</td> -->\r\n                  <td>{{product.id_product}}</td>\r\n                  <td>{{product.serial_number}}</td>\r\n                  <td>{{product.model}}</td>\r\n                  <td>{{product.ciid}}</td>\r\n                  <td><button class=\"btn btn-sm EdgeButton EdgeButton--secondaryiv EdgeButton--medium submit js-submit\" (click)=\"onRemove(product)\" >Rmv</button></td>\r\n                </tr>\r\n            \r\n              </tbody>\r\n            \r\n            </table>\r\n      </div>\r\n      \r\n      <div class=\"container\">\r\n          <h5>Items to remove</h5>\r\n          <div class=\"container\">\r\n            <ul class=\"list-group\" *ngFor=\"let product of selectproducts\">\r\n                <li class=\"list-group-item list-group-item-danger \">Name: {{product.product_name}} - Code: {{product.id_product}} - Serial Number: {{product.serial_number}} - CIID: {{product.ciid}}</li>\r\n            \r\n              </ul>\r\n              \r\n        </div>\r\n        <br>\r\n        <div class=\"container d-flex justify-content-end\">\r\n            <button type=\"button\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\" (click)=\"rollback()\"> <- Rollback</button> -\r\n            <button type=\"button\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryiii EdgeButton--medium submit js-submit\" (click)=\"noChanges()\"> Remove Nothing</button>\r\n        </div>\r\n        <br>\r\n      </div> \r\n      \r\n</div>\r\n"

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

module.exports = "<br>\r\n<div class=\"container\" *ngIf=\"privilege\">\r\n    \r\n    <div>\r\n        <h1>Roles-Privileges Admin <span style=\"color:orangered;\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i></span></h1><hr>\r\n        <p>\"Users, roles and permissions are key components of website security, and they're of major importance in Drupal as well. Users are the people, roles are their functions, and permissions define what authorizations those functions have. Setting these up incorrectly can compromise your website's security.\"</p>\r\n        <br>\r\n        <div class=\"form-group\"> \r\n            <button class=\"EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\" (click)=\"start()\">Assign Role to User</button>\r\n            <button class=\"EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\" (click)=\"createRole()\">Create Role!</button>\r\n            <button class=\"EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\" (click)=\"deleteRole()\">Delete User Privilleges</button>\r\n            <button class=\"\" (click)=\"openErrorTemplate(errortemplate)\" id=\"modalError\" style=\"display:none;\"></button>\r\n        </div>\r\n    </div>\r\n    \r\n    <ul class=\"list-group\" *ngFor=\"let item of selectemploye\">\r\n        <li class=\"list-group-item list-group-item-success \">{{item.FIRST_NAME}}  {{item.LAST_NAME}} - {{item.EMAIL}}</li>\r\n        \r\n    </ul>\r\n    \r\n    <div *ngIf=\"boolemployee\">\r\n        <h3>Select the employee</h3>\r\n        <app-employee-table (employeevent)=\"selectemploye=$event\"></app-employee-table>\r\n        <div class=\"d-flex justify-content-center\">\r\n            <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryiii EdgeButton--medium submit js-submit\" (click)=\"backemployee()\">Go Back</button><h4>-</h4>\r\n            <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryiii EdgeButton--medium submit js-submit\" (click)=\"continueroles()\">Continue</button>\r\n        </div>\r\n        \r\n        \r\n    </div>\r\n    <br>\r\n    \r\n    <div class=\"\" *ngIf=\"boolDelete\">\r\n        <div>\r\n            <h3>Remove Privileges <span style=\"color:red\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></span></h3>\r\n            <br>\r\n            <ul class=\"list-group\" *ngFor=\"let item of selectedUser\">\r\n                <li class=\"list-group-item list-group-item-success \">User : {{item.ROLE}} - {{item.USER_NAME}} - {{item.ID}}</li>\r\n                  \r\n            </ul>\r\n            <br>\r\n            <table class=\"table table-hover table-bordered\">\r\n                    <thead class=\"table-head\">\r\n                      <tr class=\"\">\r\n                        <th scope=\"col\">User ID</th>\r\n                        <th scope=\"col\">User Name</th>\r\n                        <th scope=\"col\">Role</th>\r\n                        <th scope=\"col\">select</th>\r\n                       <!-- <th scope=\"col\">Status</th>\r\n                        <th scope=\"col\">Last?</th> -->\r\n                        \r\n                      </tr>\r\n                    </thead>\r\n                    <tbody *ngFor=\"let product of users2\">\r\n                  \r\n                      <tr class=\"select\">\r\n                        <th scope=\"row\">{{product.id}}</th>\r\n                        <td>{{product.name}}</td>\r\n                        <td>{{product.rol}}</td>\r\n                        <td><button class=\"btn btn-sm EdgeButton EdgeButton--secondaryiii EdgeButton--medium submit js-submit\" (click)=\"onSelect(product)\" >select</button></td>\r\n                      </tr>\r\n                  \r\n                    </tbody>\r\n                  \r\n            </table>\r\n\r\n        </div>\r\n        <br>\r\n            <div class=\"d-flex justify-content-center\">\r\n                <button class=\"EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\" style=\"\" (click)=\"removeUser(DeleteUser)\">Remove</button>\r\n\r\n            </div>\r\n    </div>\r\n\r\n  <div *ngIf=\"boolassign\">\r\n    <h3 *ngFor=\"let item of selectemploye\"> Select a role for {{item.FIRST_NAME}}  {{item.LAST_NAME}}</h3>\r\n    <div >\r\n      <select  class=\"form-control\" [(ngModel)]=\"option\">\r\n        <option></option>\r\n        <option *ngFor=\"let item of roles\" [value]=\"item.id_role\" >{{item.id_role}} - {{item.role_name}}</option>\r\n  \r\n      </select>\r\n\r\n    </div>\r\n    <br><br>\r\n    <div class=\"d-flex justify-content-center\">\r\n        <button class=\"EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\" (click)=\"openModal(template)\">Assign Role</button>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"\" *ngIf=\"boolroles\">\r\n      <h3>New Role name <span><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i></span></h3>\r\n    <div class=\"d-flex justify-content-center\">\r\n        <div class=\"col-sm-12\">\r\n            <input type=\"text\" class=\"form-control\" maxlength=\"25\" [(ngModel)]=\"newRoleName\">\r\n\r\n        </div>\r\n\r\n    </div><br>\r\n\r\n    <div class=\"\">\r\n        <h3>Drag & Drop Privileges <span><i class=\"fa fa-hand-paper-o\" aria-hidden=\"true\"></i></span></h3>\r\n\r\n       <div class=\"row\">\r\n        <div class=\"d-flex justify-content-conter\">\r\n\r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"card card-outline-success mb-3\">\r\n                        <div class=\"card-header card-inverse card-success\">\r\n                            Privileges\r\n                            </div>\r\n                        <div class=\"card-block scroll-list\">\r\n                            <div class=\"list-group\">\r\n                                <li class=\"list-group-item list-group-item-action list-group-item-success\" [draggable] *ngFor=\"let item of vegetables\"\r\n                                    [dragClass]=\"'active'\" [dragData]=\"item\" [dragScope]=\"item.type\" [dragEnabled]=\"dragEnabled\">\r\n                                    {{item.name}}\r\n                                </li>\r\n                            </div>\r\n                        </div>\r\n            \r\n                    </div>\r\n            \r\n                </div>\r\n            \r\n                <div class=\"col-sm-12\">\r\n                    <div class=\"card card-outline-primary mb-3\" droppable [dragOverClass]=\"'drag-target-border'\" [dropScope]=\"['fruit', 'vegetable']\"\r\n                        [dragHintClass]=\"'drag-hint'\" (onDrop)=\"onAnyDrop($event)\">\r\n                        <div class=\"card-header card-inverse card-primary\">Selected Privileges</div>\r\n                        <div class=\"card-block scroll-list\">\r\n                            <li *ngFor=\"let item of droppedItems\" class=\"list-group-item\">{{item.name}}</li>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            \r\n             <!-- kkkik!-->\r\n        </div>    \r\n\r\n        \r\n    </div>\r\n    <br>\r\n    <div class=\"d-flex justify-content-center\">\r\n        <button class=\"EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\" (click)=\"openRoleModal(templateRole)\">Create Role</button> \r\n    </div>\r\n    </div>\r\n\r\n    \r\n    <!--  <button class=\"btn btn-danger\" (click)=\"test()\">Test</button> -->\r\n\r\n    \r\n</div>\r\n<ng-template #template>\r\n    <div class=\"modal-body text-center alert \">\r\n        <p>Are you sure to assign this role to this person? <span><i class=\"fa fa-question-circle-o\" aria-hidden=\"true\"></i></span></p>\r\n\r\n        <div class=\"modal-body alert\" role=\"alert\">\r\n            The following permits will be assigned press 'YES', to continue or 'No', to go back.\r\n        </div>\r\n        <div >\r\n            <ul class=\"list-group\" *ngFor=\"let item of privilegesxrol\">\r\n                <li class=\"list-group-item list-group-item-primary \">{{item.privilege}} </li>\r\n                  \r\n            </ul>\r\n        </div><br>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\" >Yes</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"abort()\" >No</button>\r\n    </div>\r\n\r\n   \r\n</ng-template>\r\n\r\n<ng-template #templateRole>\r\n    <div class=\"modal-body text-center alert \">\r\n        <p>Are you sure of creating this new role? <span><i class=\"fa fa-question-circle-o\" aria-hidden=\"true\"></i></span></p>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirmRolePrivileges()\" >Yes</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"abort()\" >No</button>\r\n    </div>\r\n\r\n   \r\n</ng-template>\r\n\r\n<ng-template #DeleteUser>\r\n        <div class=\"modal-body text-center alert \">\r\n            <b><p *ngFor=\"let item of selectedUser\">Delete privileges to {{item.USER_NAME}} <span style=\"color:red\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></span> </p></b>\r\n             <br>\r\n             <p>The privileges will be removed and the user will not be able to enter the system anymore. Are you sure to continue?</p>   \r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirmDeleteUser()\" >Yes</button>\r\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"abort()\" >No</button>\r\n        </div>       \r\n</ng-template>\r\n\r\n\r\n  \r\n<ng-template #errortemplate >\r\n  <div class=\"modal-body text-center alert\" >\r\n    <p id=\"errorMessage\">!</p>\r\n    <button class=\"btn btn-info\" (click)=\"modalRef.hide()\">Ok</button><br>\r\n</div>\r\n\r\n</ng-template >\r\n\r\n<!--\r\n<div class=\"modal fade\" bsModal #staticModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\r\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-static-name\">\r\n  <div class=\"modal-dialog modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 id=\"dialog-static-name\" class=\"modal-title pull-left\">Static modal</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"staticModal.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        This is static modal, backdrop click will not close it.\r\n        Click <b>&times;</b> to close modal.\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n-->"

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
        this.boolDelete = false;
        this.boolfirst = false;
        this.boolemployee = false;
        this.selectemploye = [];
        this.boolroles = false;
        this.boolassign = false;
        this.roles = [];
        this.privilegesxrol = [];
        this.val = 500;
        this.privilege = false;
        this.users = [];
        this.users2 = [];
        this.selectedUser = [];
        this.messegeError = 'More information required';
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
            //this.privilege = true;
            window.location.href = '/login';
        }
    };
    UserAdminComponent.prototype.start = function () {
        this.boolfirst = false;
        this.boolemployee = true;
        this.boolready = false;
        this.boolproducts = false;
        this.boolroles = false;
        this.boolDelete = false;
    };
    /* deleteRole(){
       this.boolroles = false;
       this.boolemployee = false;
       this.managment.getSystemUsers()
       .subscribe(res => {
         this.boolDelete = true;
         this.users = res['p'];
         for (let item of this.users){
           this.users2.push(item['privilege']);
         }
         console.log(this.users);
         console.log(this.users2);
   
       })
   
     } */
    UserAdminComponent.prototype.deleteRole = function () {
        var _this = this;
        if (!this.users2[0]) {
            this.boolroles = false;
            this.boolemployee = false;
            this.boolassign = false;
            this.managment.getSystemUsers()
                .subscribe(function (res) {
                _this.boolDelete = true;
                _this.users = res['p'];
                for (var _a = 0, _b = _this.users; _a < _b.length; _a++) {
                    var item = _b[_a];
                    _this.users2.push(item['privilege']);
                }
            });
        }
        else {
            this.boolroles = false;
            this.boolemployee = false;
            this.boolDelete = true;
            this.boolassign = false;
        }
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
            //alert('Select employee first');
            this.messegeError = "Select employee first";
            document.getElementById("modalError").click();
        }
    };
    UserAdminComponent.prototype.test = function () {
        console.log(this.newRoleName);
    };
    UserAdminComponent.prototype.onSelect = function (selectedItem) {
        var x = {
            'ID': selectedItem.id,
            'USER_NAME': selectedItem.name,
            'ROLE': selectedItem.rol,
        };
        //this.selectedUser = x;
        this.selectedUser.splice(0);
        console.log(x);
        this.selectedUser.push(x);
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
            //alert("Select a Role first");
            this.messegeError = "Select a Role First";
            document.getElementById("modalError").click();
            //this.confirmation = true;
            //alert("The employee does not have Employee Id, please make sure to get all the info ready before proceding");
        }
    };
    UserAdminComponent.prototype.abort = function () {
        window.location.href = '/admin';
    };
    UserAdminComponent.prototype.confirm = function () {
        var _this = this;
        var x = this.selectemploye[0];
        this.managment.postUseradmin(x.EMAIL, this.option).subscribe(function (res) {
            if (res['message'] == 'Item correctly inserted') {
                alert('User Correctly inserted');
                //this.messegeError = "User Correctly inserted";
                //document.getElementById("modalError").click();
                window.location.href = '/admin';
            }
            else {
                //alert('Wrong User try again');
                _this.messegeError = "Invalid user, check email in the Active Directory and that is not a duplicate user";
                document.getElementById("modalError").click();
                //window.location.href = '/admin';
            }
        });
    };
    UserAdminComponent.prototype.createRole = function () {
        this.boolemployee = false;
        this.boolroles = true;
        this.boolDelete = false;
        this.boolassign = false;
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
    /*confirmRolePrivileges(){
      if(this.newRoleName){
        this.managment.postNewRolePrivileges(this.newRoleName, this.droppedItems)
        .subscribe(res =>{
          if(res['message'] == 'Items correctly inserted'){
            //alert('Items correctly inserted');
            this.messegeError = "Items correctly inserted";
            document.getElementById("modalError").click();
            window.location.href = '/admin';
          }else{
            console.log(res);
          }
        })
  
      }else{
        //alert('Set a Role name first.!');
        this.messegeError = "Set a Role name first";
        document.getElementById("modalError").click();
      }
    }*/
    UserAdminComponent.prototype.confirmRolePrivileges = function () {
        if (this.newRoleName && this.droppedItems[0]) {
            //alert("Baia Baia");
            //console.log(this.droppedItems);
            //alert();
            this.managment.postNewRolePrivileges(this.newRoleName, this.droppedItems)
                .subscribe(function (res) {
                if (res['message'] == 'Items correctly inserted') {
                    alert('Items correctly inserted');
                    //this.messegeError = "Items correctly inserted";
                    //document.getElementById("modalError").click();
                    window.location.href = '/admin';
                }
                else {
                    console.log(res);
                }
            });
        }
        else {
            //alert('Set a Role name first.!');
            console.log(this.droppedItems);
            this.messegeError = "Set a Role name first and at least one Privilege";
            document.getElementById("modalError").click();
        }
    };
    UserAdminComponent.prototype.removeUser = function (template) {
        var x = this.selectedUser[0];
        if (x) {
            this.modalRef = this.modalService.show(template);
        }
        else {
            //alert('Select an User.!');
            this.messegeError = "Select an user";
            document.getElementById("modalError").click();
        }
    };
    UserAdminComponent.prototype.confirmDeleteUser = function () {
        var x = this.selectedUser[0];
        this.managment.deleteUser(x.USER_NAME, x.ID)
            .subscribe(function (res) {
            if (res['message'] == 'superuser') {
                alert('Cant Remove this user');
                //this.messegeError = "Can't Remove this user";
                //document.getElementById("modalError").click();
                window.location.href = '/admin';
            }
            if (res['message'] == 'wrong') {
                alert('Something Wrong try again');
                //this.messegeError = "Something wrong try again";
                //document.getElementById("modalError").click();
                window.location.href = '/admin';
            }
            if (res['message'] == 'done') {
                alert('User removed.!');
                //this.messegeError = "User Removed.!";
                //document.getElementById("modalError").click();
                window.location.href = '/admin';
            }
        });
    };
    UserAdminComponent.prototype.openErrorTemplate = function (template) {
        this.modalRef = this.modalService.show(template);
        document.getElementById('errorMessage').innerHTML = this.messegeError;
    };
    UserAdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-admin',
            template: __webpack_require__("../../../../../src/app/user-admin/user-admin.component.html"),
            styles: ["\n  h1 {\n    display: block;\n    font-size: 2em;\n    margin-block-start: 0.67em;\n    margin-block-end: 0.67em;\n    margin-inline-start: 0px;\n    margin-inline-end: 0px;\n    font-weight: bold;\n    font-family: \"Segoe UI\",Arial,sans-serif;\n  }\n\n  h3 {\n    display: block;\n    font-size: 1.8em;\n    margin-block-start: 0.67em;\n    margin-block-end: 0.67em;\n    margin-inline-start: 0px;\n    margin-inline-end: 0px;\n    font-weight: bold;\n    font-family: \"Segoe UI\",Arial,sans-serif;\n  }\n  .EdgeButton:hover{\n    background-color: #E0F8FF;\n  }\n\n  .EdgeButton--secondary-file:hover{\n      background-color: #afe0ff;\n  }\n\n  .EdgeButton--secondaryii:hover{\n      background-color: #E0F8FF;\n      color: #1da1f2;\n  }\n\n  .EdgeButton--secondaryiii:hover{\n      background-color: #DBFCE8;\n      /*color: #69C68E;*/\n  }\n\n\n\n  /*input {\n      -moz-box-sizing: border-box;\n      box-sizing: border-box;\n      margin-top: 12px;\n      width: 100%;\n  } */\n\n\n  .EdgeButton--secondary {\n      background-color: #fff;\n      border: 1px solid #1da1f2;\n      color: #1da1f2;\n  }\n\n  .EdgeButton--secondaryii {\n      background-color: #1da1f2;\n      border: 1px solid #fff;\n      color: #fff;\n  \n  }\n\n  .EdgeButton--secondaryiii {\n      background-color: #fff;\n      border: 1px solid #69C68E;\n      color: #69C68E;\n  \n  }\n\n\n\n  .EdgeButton--secondary-file {\n      background-color: #1da1f2;\n      border: 1px solid #fff;\n      color: #fff;\n  }\n\n\n\n  .EdgeButton--medium {\n      font-size: 14px;\n      line-height: 20px;\n      padding: 6px 16px;\n  }\n\n  /*.EdgeButton, .EdgeButton:visited {\n      border-radius: 100px;\n      box-shadow: none;\n      cursor: pointer;\n      font-size: 14px;\n      font-weight: bold;\n      line-height: 20px;\n      padding: 6px 16px;\n      position: relative;\n      text-align: center;\n      white-space: nowrap;\n  }*/\n\n  .EdgeButton {\n      border-radius: 100px;\n      box-shadow: none;\n      cursor: pointer;\n      font-size: 18px;\n      font-weight: bold;\n      line-height: 25px;\n      padding: 8px 18px;\n      position: relative;\n      text-align: center;\n      white-space: nowrap;\n  }\n\n  .EdgeButton--secondaryii {\n      border-radius: 100px;\n      box-shadow: none;\n      cursor: pointer;\n      font-size: 14px;\n      line-height: 20px;\n      padding: 6px 16px;\n      position: relative;\n      text-align: center;\n      white-space: nowrap;\n  }\n\n  .EdgeButton--secondaryiii {\n      border-radius: 100px;\n      box-shadow: none;\n      cursor: pointer;\n      font-size: 14px;\n      line-height: 20px;\n      padding: 6px 16px;\n      position: relative;\n      text-align: center;\n      white-space: nowrap;\n  }\n\n  .table-head {\n    background-color: rgb(35, 47, 62);\n    border-color: rgb(35, 47, 62);\n    color: #fff;\n  }\n\n  p, label, option{\n    font-size: 1em;\n    font-family: \"Segoe UI\",Arial,sans-serif;\n    color: rgb(101, 119, 134);\n  }\n\n  option, select{\n    font-size: 0.9em;\n    font-family: \"Segoe UI\",Arial,sans-serif;\n    color: rgb(101, 119, 134);\n  }\n\n  "]
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
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map