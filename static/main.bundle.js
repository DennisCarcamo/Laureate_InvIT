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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__dashboard_tables_dashboard_tables_component__ = __webpack_require__("../../../../../src/app/dashboard-tables/dashboard-tables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__lifetime_chart_lifetime_chart_component__ = __webpack_require__("../../../../../src/app/lifetime-chart/lifetime-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__lifetime_table_lifetime_table_component__ = __webpack_require__("../../../../../src/app/lifetime-table/lifetime-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pdf_loan_assets_loan_assets_component__ = __webpack_require__("../../../../../src/app/pdf/loan-assets/loan-assets.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_23__dashboard_tables_dashboard_tables_component__["a" /* DashboardTablesComponent */],
                __WEBPACK_IMPORTED_MODULE_24__lifetime_chart_lifetime_chart_component__["a" /* LifetimeChartComponent */],
                __WEBPACK_IMPORTED_MODULE_25__lifetime_table_lifetime_table_component__["a" /* LifetimeTableComponent */],
                __WEBPACK_IMPORTED_MODULE_26__pdf_loan_assets_loan_assets_component__["a" /* LoanAssetsComponent */],
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
exports.push([module.i, "/*h1 { color: #7c795d; font-family: 'Trocchi', serif; font-size: 45px; font-weight: normal; line-height: 48px; margin: 0; }\r\n\r\np { color: #4c4a37; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh5 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh2 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh3 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh4 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }*/\r\n\r\n.EdgeButton:hover{\r\n    background-color: #E0F8FF;\r\n}\r\n\r\n.EdgeButton--secondary-file:hover{\r\n    background-color: #afe0ff;\r\n}\r\n\r\n.EdgeButton--secondaryii:hover{\r\n    background-color: #E0F8FF;\r\n    color: #1da1f2;\r\n}\r\n\r\n.EdgeButton--secondaryiii:hover{\r\n    background-color: #DBFCE8;\r\n    /*color: #69C68E;*/\r\n}\r\n\r\n/*input {\r\n    -moz-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    margin-top: 12px;\r\n    width: 100%;\r\n} */\r\n\r\n.EdgeButton--secondary {\r\n    background-color: #fff;\r\n    border: 1px solid #1da1f2;\r\n    color: #1da1f2;\r\n}\r\n\r\n.EdgeButton--secondaryii {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n \r\n}\r\n\r\n.EdgeButton--secondaryiii {\r\n    background-color: #fff;\r\n    border: 1px solid #69C68E;\r\n    color: #69C68E;\r\n \r\n}\r\n\r\n.EdgeButton--secondary-file {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n}\r\n\r\n.EdgeButton--medium {\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n}\r\n\r\n/*.EdgeButton, .EdgeButton:visited {\r\n    border-radius: 100px;\r\n    box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}*/\r\n\r\n.EdgeButton {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    line-height: 25px;\r\n    padding: 8px 18px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n.EdgeButton--secondaryii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n.EdgeButton--secondaryiii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\ntextarea, div[contenteditable], .t1-select {\r\n    display: inline-block;\r\n    width: 210px;\r\n    padding: 4px;\r\n    margin: 0;\r\n    outline: 0;\r\n    background-color: #fff;\r\n    border: 1px solid #e6ecf0;\r\n    border-radius: 3px;\r\n}\r\n\r\nh1 {\r\n    display: block;\r\n    font-size: 2em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh2 {\r\n    display: block;\r\n    font-size: 1.9em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh3 {\r\n    display: block;\r\n    font-size: 1.8em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh4 {\r\n    display: block;\r\n    font-size: 1.7em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh5 {\r\n    display: block;\r\n    font-size: 1.5em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nbody.ms-windows {\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n.table-head {\r\n    background-color: #343a40;\r\n    border-color: #343a40;\r\n    color: #fff;\r\n}\r\n\r\np, label, option, small{\r\n    font-size: 1em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n  }\r\n\r\noption, select{\r\n    font-size: 0.9em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-signature-sheet/createsheet/createsheet.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\" *ngIf=\"privilege\">\r\n    <h1 class=\"my-4\">OnBoarding- Loan new Signature Sheet <span style=\"color:rgb(0, 89, 255)\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\" (click)=\"siteInformation()\"></i></span>\r\n        \r\n    </h1><hr>\r\n        <div class=\"row\" *ngIf=\"siteInfo\">\r\n\r\n                <!-- Blog Entries Column -->\r\n                <div class=\"col-md-8\">\r\n        \r\n        \r\n                  <!-- Blog Post -->\r\n                  <div class=\"card mb-4\">\r\n                    <img class=\"card-img-top\" [src]=\"fullImagePath\" alt=\"Card image cap\">\r\n                    <div class=\"card-body\">\r\n                      <h2 class=\"card-title\">Some statements</h2>\r\n                      <p class=\"card-text\">\"The sheet of onboarding is the first sheet that must be created to an employee, it is a process of only addition, where the initial equipment is established with which the user will work, no other process can be done to an employee without his sheet of onboarding.\"</p>\r\n                      <button class=\"btn btn-info btn-sm\" (click)=\"start()\">Let's Get Started!</button>\r\n                    </div>\r\n                    <div class=\"card-footer text-muted\">\r\n                      Laureate International Universities\r\n                    </div>\r\n                  </div>\r\n        \r\n                </div>\r\n        \r\n                <!-- Sidebar Widgets Column -->\r\n                <div class=\"col-md-4\">\r\n        \r\n\r\n                  <br><br><br>\r\n        \r\n                  <!-- Categories Widget -->\r\n                  <div class=\"card my-4\">\r\n                    <h5 class=\"card-header\">Reminder</h5>\r\n                    <div class=\"card-body\">\r\n                      <div class=\"\">\r\n                        <p>In this section you will not be able to create loan sheets, go create a sheet for that, you can only release the resources of loan sheets already created</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n        \r\n                  <!-- Side Widget -->\r\n                  <div class=\"card my-4\">\r\n                    <h5 class=\"card-header\">Loan Policy</h5>\r\n                    <div class=\"card-body\">\r\n                            The policy should also address postorigination activities, such as ongoing monitoring and credit administration, including postorigination monitoring of loan covenants, obtaining financial information, and assessing the borrower's ongoing ability to service the debt and ultimately repay the loan.\r\n                    </div>\r\n                  </div>\r\n        \r\n                </div>\r\n        \r\n              </div>\r\n    \r\n  <!--  <div>\r\n        <h3>OnBoarding- Loan new Signature Sheet <span style=\"color:rgb(0, 89, 255)\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i></span></h3>\r\n        <p>\"Onboarding, also known as organizational socialization, refers to the mechanism through which new employees acquire the necessary knowledge, skills, and behaviors to become effective organizational members and insiders.It is the process of integrating a new employee into the organization and its culture. Tactics used in this process include formal meetings, lectures, videos, printed materials, or computer-based orientations to introduce newcomers to their new jobs and organizations. Research has demonstrated that these socialization techniques lead to positive outcomes for new employees such as higher job satisfaction, better job performance, greater organizational commitment, and reduction in occupational stress and intent to quit.\"</p>\r\n         <br>\r\n        <div class=\"form-group\"> \r\n            <button class=\"btn btn-info btn-sm\" (click)=\"start()\">Let's Get Started!</button>\r\n        </div>\r\n    </div> -->\r\n\r\n    <div class=\" col-6\" *ngIf=\"boolfirst\">\r\n        <h3>First-Step select a type and date <span><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span></h3>\r\n        <div class=\"form-group\">\r\n            <select class=\"form-control\" [(ngModel)]=\"option\">\r\n                    <option value=\"1\">OnBoarding</option>\r\n                    <option value=\"3\">Loan</option>\r\n            </select>\r\n            \r\n    </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"Date\" class=\"form-control\" [(ngModel)]=\"date\">\r\n            <hr>\r\n            <small> <span style=\"color:rgb(255, 102, 0)\"><i class=\"fa fa-bell\" aria-hidden=\"true\"></i></span> Remember, if you do an Onboarding, the date to enter is the start date, but if you make a Loan sheet  the date to enter is the return of the assets.</small>\r\n        </div>\r\n        \r\n        <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\" (click)=\"validate()\">Continue</button>\r\n    </div>\r\n    <ul class=\"list-group\" *ngFor=\"let item of selectemploye\">\r\n        <li class=\"list-group-item list-group-item-success \">{{item.FIRST_NAME}}  {{item.LAST_NAME}} - {{item.EMAIL}}</li>\r\n      \r\n      </ul>\r\n\r\n    <div *ngIf=\"boolemployee\">\r\n        <h3>Second-Step select the employee <span><i class=\"fa fa-users\" aria-hidden=\"true\"></i></span></h3>\r\n        <!-- <ul class=\"list-group\" *ngFor=\"let item of selectemploye\">{{item.FIRST_NAME}} - {{item.LAST_NAME}} - {{item.EMAIL}} </ul> -->\r\n\r\n\r\n\r\n        <app-employee-table (employeevent)=\"selectemploye=$event\"></app-employee-table>\r\n        <div class=\"d-flex justify-content-center\">\r\n                <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryiii EdgeButton--medium submit js-submit\" (click)=\"backemployee()\">Go Back</button><h4>-</h4>\r\n                <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryiii EdgeButton--medium submit js-submit\" (click)=\"continueemployee(procesValidationtemplate)\">Continue</button>\r\n        </div>\r\n\r\n        \r\n    </div>\r\n    \r\n    <!-- <app-type></app-type> -->\r\n\r\n    <div *ngIf=\"boolproducts\" >\r\n        <app-product-list (productsevent)=\"productsevent=$event\"></app-product-list> <br>\r\n        <!--<button class=\"btn btn-info \" (click)=\"backproducts()\">Go Back</button> -->\r\n        <div class=\"d-flex justify-content-center\">\r\n                <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryiii EdgeButton--medium submit js-submit\" (click)=\"backproducts()\">Go Back</button>\r\n        </div>  \r\n    </div>\r\n    <br><br><br><br>\r\n    <div *ngIf=\"boolproducts\" class=\"d-flex justify-content-center\">\r\n        <!-- <button class=\"btn btn-link btn-lg\" (click)=\"createSignatureSheet()\"></button> -->\r\n        <button class=\"EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\" (click)=\"openModal(template)\">Save New Signature Sheet</button><br>\r\n    </div><br>\r\n    <div *ngIf=\"confirmation\" class=\"alert\" role=\"alert\">\r\n        <h5 class=\"alert-heading\">Warning.! <span><i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i></span></h5>\r\n        <p>The employee does not have Employee Id, please make sure to get all the info ready before proceding</p>\r\n        <hr>\r\n    </div>\r\n<!--\r\n    <button class=\"btn\" (click)=\"testalert()\">Botonsito</button> -->\r\n\r\n</div>\r\n\r\n\r\n\r\n<!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">Create template modal</button> -->\r\n     \r\n<ng-template #template>\r\n    <div class=\"modal-body text-center alert\">\r\n        <p>Are you sure of save this Signature Sheet?? <span><i class=\"fa fa-question-circle-o\" aria-hidden=\"true\"></i></span></p>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"insertSheet()\" [disabled]=\"disable_flag == 0\">Yes</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"abort()\" >No</button>\r\n        <div class=\"modal-body alert\" role=\"alert\">\r\n                The information will be save and automatically create a pdf file of the sheet, press 'YES', to continue or 'No', to go back.\r\n        </div>\r\n    </div>\r\n\r\n   \r\n</ng-template>\r\n\r\n<ng-template #procesValidationtemplate>\r\n        <div class=\"modal-body text-center alert alert-info\">\r\n            <p>It is not possible to create this sheet.! <span><i class=\"fa fa-times\" aria-hidden=\"true\"></i></span></p>\r\n            <button class=\"btn btn-danger\" (click)=\"ok()\">Ok</button><br>\r\n            <div class=\"modal-body alert alert-warning\" role=\"alert\">\r\n                    Verify that the user has an onboarding sheet, or does not have an offboarding sheet\r\n            </div>\r\n        </div>\r\n        \r\n           \r\n    </ng-template>\r\n\r\n\r\n"

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
        if (!this.cookieService.get('user_name')) {
            this.router.navigateByUrl('/');
        }
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
        alert(this.option);
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
        this.httpserverurl = 'http://hnlnoitinvprod01.hnsc.netapi/v1/';
    }
    SearchEmployeeService.prototype.getTest = function () {
        return "Hello service";
    };
    SearchEmployeeService.prototype.searchEmployees = function (curso, text) {
        //this.url = 'http://hnlnoitinvprod01.hnsc.net/api/v1/assetusersearch?page='+this.cursor + '&limit=10&text=' + this.search;
        this.url = "http://hnlnoitinvprod01.hnsc.net/api/v1/assetusersearch?page=" + curso + "&limit=10&text=" + text;
        return this.httpClient.get(this.url);
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
        this.httpClient.post("http://hnlnoitinvprod01.hnsc.net/api/v1/signatureproducts", {
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
        return this.httpClient.post(" http://hnlnoitinvprod01.hnsc.net/api/v1/pdfimages", {
            id_signature: id_signature_,
            doc_name: doc_name_
        }).map(function (result) { return result; });
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

module.exports = "\n<br> <br>\n<div class=\"row justify-content-center\">\n    <div class=\"form-inline\">\n        <h3><span><i class=\"fa fa-archive\" aria-hidden=\"true\"></i>\n        </span> Storage Moves -From - To -</h3>\n           <div class=\"form-inline\">\n            <!-- dos calendarios-->\n            <input type=\"Date\" class=\"form-control\" [(ngModel)]=\"datefrom\">-\n            <input type=\"Date\" class=\"form-control\" [(ngModel)]=\"dateto\">-\n           </div>\n           <div class=\"form-group\">\n           </div>\n           <button type=\"button\" class=\"EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\"  (click)=\"funStorageMoveTable()\">Generate Table</button>\n           <pre>   </pre>\n           <div class=\"form-inline\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Asset State History\"  [(ngModel)]=\"searchprod\">\n              <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submi\" (click)=\"searchField()\"><span> <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n              </span></button>\n           </div>\n         </div>\n  \n  </div><br><br>\n<br>\n  <div class=\"container\" *ngIf=\"moveTable\">\n    <h3>Storage Move from <strong>{{datefrom}}</strong> to <strong>{{dateto}}</strong>:</h3><br>\n      <table class=\"table table-hover table-bordered\">\n          <thead class=\"table-head\">\n            <tr class=\"\">\n                <th scope=\"col\">Assettag</th>\n              <th scope=\"col\">Resource Name</th>\n              <th scope=\"col\">State</th>\n              <th scope=\"col\">Prev State</th>\n              <th scope=\"col\">Owner</th>\n              <th scope=\"col\">Date</th>\n              \n            </tr>\n          </thead>\n          <tbody *ngFor=\"let employ of storageMovesItems\">\n        \n            <tr class=\"select\">\n              <th scope=\"row\">{{employ.assettag}}</th>\n              <td>{{employ.resourcename}}</td>\n              <td>{{employ.STATE}}</td>\n              <td>{{employ.PREV}}</td>\n              <td>{{employ.NAME}}</td>\n              <td>{{employ.DATE}}</td>\n            </tr>\n        \n          </tbody>\n        \n        </table>\n           <div class=\"d-flex justify-content-center\">\n              <button class=\"btn btn-link\" *ngIf=\"showpreview\" (click)=\"preview()\">Preview</button>\n              <button class=\"btn btn-link\"  *ngIf=\"shownext\" (click)=\"storageMoveTable()\">Next</button>\n          </div>\n          <div class=\"d-flex justify-content-start\" *ngIf=\"shownext\">\n              <p>Search Result <strong> Quantity: {{count}} </strong>, cursor {{cursor}} .</p>\n          </div> \n  </div>\n\n  <div class=\"container\" *ngIf=\"moveTable2\">\n    <h3>Storage Move for <strong>{{searchprod}}</strong> :</h3><br>\n      <table class=\"table table-hover table-bordered\">\n          <thead class=\"thead-dark\">\n            <tr class=\"\">\n                <th scope=\"col\">Assettag</th>\n              <th scope=\"col\">Resource Name</th>\n              <th scope=\"col\">State</th>\n              <th scope=\"col\">Prev State</th>\n              <th scope=\"col\">Owner</th>\n              <th scope=\"col\">Date</th>\n              \n            </tr>\n          </thead>\n          <tbody *ngFor=\"let employ of storageMovesItems2\">\n        \n            <tr class=\"select\">\n              <th scope=\"row\">{{employ.assettag}}</th>\n              <td>{{employ.resourcename}}</td>\n              <td>{{employ.STATE}}</td>\n              <td>{{employ.PREV}}</td>\n              <td>{{employ.NAME}}</td>\n              <td>{{employ.DATE}}</td>\n            </tr>\n        \n          </tbody>\n        \n        </table>\n           <div class=\"d-flex justify-content-center\">\n              <button class=\"btn btn-link\" *ngIf=\"showpreview2\" (click)=\"preview2()\">Preview</button>\n              <button class=\"btn btn-link\"  *ngIf=\"shownext2\" (click)=\"search()\">Next</button>\n          </div>\n          <div class=\"d-flex justify-content-start\" >\n              <p>Search Result <strong> Quantity: {{count2}} </strong>, cursor {{cursor2}} .</p>\n          </div> \n  </div>\n\n\n <!--  <button class=\"btn btn-primary\" (click)=\"test()\">TEST</button> -->  "

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
        var _this = this;
        if (this.searchprod == '') {
            alert('Search Field is empty.!');
        }
        else {
            /*if(!this.searchTable){
              this.searchTable = true;
              this.searchDateTable = false;
              this.cursor = 0;
            }*/
            this._dashboardService.searchProductState(this.searchprod, this.cursor2)
                .subscribe(function (res) {
                //console.log(res);
                _this.storageMovesItems2 = res['query'];
                _this.meta2 = res['meta'];
                //alert('aqui');
                //console.log(this.meta2);
                _this.count2 = _this.meta2.count;
                _this.cursor2 = _this.meta2.cursor;
                if (_this.meta2.more) {
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
                _this.moveTable2 = true;
            });
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]])
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
        return this.httpClient.get(" http://hnlnoitinvprod01.hnsc.net/api/v1/dashboradserverscount").map(function (result) { return result; });
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

module.exports = "<div *ngIf=\"privilege\">\n\n<div class=\"container\">\n    <br><h2>Dashboard  <span style=\"color:#1da1f2\"><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i></span> <span style=\"color:#69C68E;\"><i class=\"fa fa-pie-chart\" aria-hidden=\"true\"></i></span></h2>\n    <div class=\"row justify-content-center\">\n      <div>\n           <canvas id=\"bar-chart-horizontal\" width=\"1\" height=\"1\"></canvas> \n      </div>\n      <div>\n         <!--  <canvas id=\"doughnut-chart\" width=\"400\" height=\"400\"></canvas>-->\n      </div>\n      <div>\n         <!-- <canvas id=\"doughnut-chart2\" width=\"400\" height=\"400\"></canvas>  -->\n       </div>\n       \n      \n     \n    </div>\n    <div class=\"row\">\n      <br>\n      <div class=\"justify-content-center\">\n         \n        \n    </div>\n    <br>\n\n\n</div>\n\n\n\n</div>\n \n\n<div class=\"row justify-content-center\">\n\n      <div class=\"card border-info mb-3 mx-2\" style=\"width: 19rem;\">\n          <div class=\"card-header\"><span class=\"card-header-dashboard\"> Workstations </span></div>\n          <div class=\"card-body text-secondary\">\n            <h5 class=\"card-title\"> Workstations In Store</h5>\n            <h2>{{ inStoreWorkstationData }}</h2>\n          </div>\n        </div>\n\n        <div class=\"card border-info mb-3 mx-1\" style=\"width: 18rem;\">\n            <div class=\"card-header\">Workstations</div>\n            <div class=\"card-body text-secondary\">\n              <h5 class=\"card-title\"> Workstations In Use</h5>\n              <h2>{{ inUseWorkstationData }}</h2>\n            </div>\n          </div>\n\n          <div class=\"card border-info mb-3 mx-1\" style=\"width: 17rem;\">\n              <div class=\"card-header\">Servers</div>\n              <div class=\"card-body text-secondary\">\n                <h5 class=\"card-title\"> Servers In Use</h5>\n                <h2>{{ serversInUse }}</h2>\n              </div>\n            </div>\n            <div class=\"card border-info mb-3 mx-1\" style=\"width: 17rem;\">\n                <div class=\"card-header\">Servers</div>\n                <div class=\"card-body text-secondary\">\n                  <h5 class=\"card-title\"> Servers In Store</h5>\n                  <h2>{{ serversInStore }}</h2>\n                </div>\n              </div>\n  \n\n  \n</div>\n\n\n<div class=\"row justify-content-center\">\n\n    <div class=\"card border-info mb-3 mx-1\" style=\" max-width: 25rem;  \">\n        <div class=\"card-header\">Peripherals In Storage <span style=\"color:rgb(4, 155, 255)\"><i class=\"fa fa-pie-chart\" aria-hidden=\"true\"></i></span></div>\n        <div class=\"card-body text-secondary\">\n          <h5 class=\"card-title\">Amount of periphericals In Store</h5>\n          <canvas id=\"doughnut-chart\" width=\"400\" height=\"400\"></canvas>\n        </div>\n      </div>\n\n    <div class=\"card border-info mb-3 mx-3\" style=\"max-width: 26rem;\">\n        <div class=\"card-header\">Peripherals In Use <span style=\"color:rgb(4, 155, 255)\"><i class=\"fa fa-pie-chart\" aria-hidden=\"true\"></i></span></div>\n        <div class=\"card-body text-secondary\">\n          <h5 class=\"card-title\">Amount of periphericals In Use </h5>\n          <canvas id=\"doughnut-chart2\" width=\"400\" height=\"400\"></canvas>\n        </div>\n      </div>\n\n\n\n          <div class=\"card border-info mb-3 mx-0\" style=\" max-width: 20rem;   max-height: 40rem; \">\n              <div class=\"card-header\">Storage Move <span style=\"color:green\"><i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i></span></div>\n              <div class=\"card-body text-secondary\">\n                <h5 class=\"card-title\">Last storage asset moves</h5>\n                  <ul *ngFor=\"let item of _statehistory\">\n                    <li>{{item.resourcename}}, {{item.assettag}}, from <b> {{item.Prev}} </b> to <b>{{item.State}}</b></li>\n                  </ul>\n                \n              </div>\n            </div>\n  \n</div>\n<div class=\"row justify-content-center\">\n\n  <div class=\"card border-info mb-3 mx-2\" style=\"width: 36rem;\">\n      <div class=\"card-header\">Lifetime</div>\n      <div class=\"card-body text-secondary\">\n        <h5 class=\"card-title\"> Workstation Lifetime (In Use) <span style=\"color:rgb(15, 146, 15)\"><i class=\"fa fa-battery-half\" aria-hidden=\"true\"></i>\n\n        </span></h5>\n        <h2>{{workstationLifetimeinUse}} </h2>\n      </div>\n    </div>\n\n    <div class=\"card border-info mb-3 mx-1\" style=\"width: 36rem;\">\n        <div class=\"card-header\">Lifetime</div>\n        <div class=\"card-body text-secondary\">\n          <h5 class=\"card-title\"> Workstation Lifetime (In Store) <span style=\"color:rgb(15, 146, 15)\"><i class=\"fa fa-battery-half\" aria-hidden=\"true\"></i>\n\n          </span></h5>\n          <h2>{{workstationLifetimeInStore}} </h2>\n        </div>\n      </div>\n\n</div>\n<!-- query aqui docking es el modelo a seguir -->\n<div class=\"row justify-content-center\">\n    <div class=\"card border-info mb-3 mx-2\" style=\"max-width: 100rem;\">\n        <div class=\"card-header\">All periphericals <span style=\"color:aqua\"><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i></span></div>\n        <div class=\"card-body text-secondary\">\n          <h5 class=\"card-title\">Assets Group by Type and State</h5>\n          <canvas id=\"myChart\" width=\"1105\" height=\"400\"></canvas>\n        </div>\n      </div>\n</div>\n\n\n\n<br>\n<div class=\"row justify-content-center\">\n  <div class=\"form-inline\">\n      <h3>Make your Graphic - </h3>\n            <div class=\"form-inline\">\n              <select class=\"form-control\" [(ngModel)]=\"asset\">\n                <option selected value=\"1\">Workstation</option>\n                <option value=\"2\">Printer</option>\n                <option value=\"3\">Router</option>\n                <option value=\"4\">Switch</option>\n                <option value=\"5\">Scanner</option>\n                <option value=\"6\">Projector</option>\n                <option value=\"7\">Keyboard</option>\n                <option value=\"8\">Software</option>\n                <option value=\"10\">Server</option>\n                <option value=\"13\">Storage Device</option>\n                <option value=\"14\">Smart Phone</option>\n                <option value=\"15\">Tablet</option>\n                <option value=\"304\">Mouse</option>\n                <option value=\"318\">Monitor</option>\n                <option value=\"311\">Docking Station</option>\n                <option value=\"305\">Headset</option>\n                <option value=\"302\">Adapter</option>\n                <option value=\"314\">Case</option>\n                <option value=\"315\">Cell Phone</option>\n                <option value=\"316\">Converter</option>\n                <option value=\"310\">Webcam</option>\n                <option value=\"16\">UPS</option>\n                <option value=\"605\">Modem</option>\n                <option value=\"609\">Data Show</option>\n              </select>-\n            </div>\n            <div class=\"form-group\">\n              <select class=\"form-control\" [(ngModel)]=\"state\" name=\"beia beia\">\n                <option selected value=\"1\">In Store</option>\n                <option value=\"2\">In Use</option>\n              </select>-\n            </div>\n            <button type=\"button\" class=\"EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\"  (click)=\"inStoreWorkstationModels()\">Generate Graphic</button>\n\n          </div>\n\n</div><br><br>\n\n<!--<div class=\"row justify-content-center\">\n  <div class=\"form-inline\">\n      <h3> Storage Moves -From - To -</h3>\n         <div class=\"form-inline\">\n          \n          <input type=\"Date\" class=\"form-control\" [(ngModel)]=\"datefrom\">-\n          <input type=\"Date\" class=\"form-control\" [(ngModel)]=\"dateto\">-\n         </div>\n         <div class=\"form-group\">\n         </div>\n         <button type=\"button\" class=\"btn btn-info\"  (click)=\"storageMoveTable()\">Generate Table</button>\n\n       </div>\n\n</div><br> -->\n<br>\n\n<div class=\" row justify-content-center\" *ngIf=\"allperiphericals\">\n  <div class=\"\">\n      \n  </div>\n    \n</div>\n \n<div class=\"row justify-content-center\">\n    <div *ngIf=\"modelsbool\" class=\"card border-info mb-3 mx-2\" style=\"max-width: 100rem;\">\n        <div class=\"card-header\">All Models <span style=\"color:aqua\"><i class=\"fa fa-line-chart\" aria-hidden=\"true\"></i>\n        </span></div>\n        <div class=\"card-body text-secondary\">\n          <h5 class=\"card-title\">Workstations Group by Models</h5> \n          <canvas id=\"modelChart\" width=\"1105\" height=\"1000\" ></canvas>\n        </div>\n      </div>\n  </div>\n<!-- <br>\n  <div class=\"container\">\n    <h3>Storage Move from {{datefrom}} to {{dateto}}</h3><br>\n      <table class=\"table\">\n          <thead class=\"thead\">\n            <tr class=\"\">\n                <th scope=\"col\">Assettag</th>\n              <th scope=\"col\">Resource Name</th>\n              <th scope=\"col\">State</th>\n              <th scope=\"col\">Prev State</th>\n              <th scope=\"col\">Owner</th>\n              <th scope=\"col\">Date</th>\n              \n            </tr>\n          </thead>\n          <tbody *ngFor=\"let employ of storageMovesItems\">\n        \n            <tr class=\"select\">\n              <th scope=\"row\">{{employ.assettag}}</th>\n              <td>{{employ.resourcename}}</td>\n              <td>{{employ.STATE}}</td>\n              <td>{{employ.PREV}}</td>\n              <td>{{employ.NAME}}</td>\n              <td>{{employ.DATE}}</td>\n            </tr>\n        \n          </tbody>\n        \n        </table>\n           <div class=\"d-flex justify-content-center\">\n              <button class=\"btn btn-link\" *ngIf=\"showpreview\" (click)=\"preview()\">Preview</button>\n              <button class=\"btn btn-link\"  *ngIf=\"shownext\" (click)=\"storageMoveTable()\">Next</button>\n          </div>\n          <div class=\"d-flex justify-content-start\" *ngIf=\"shownext\">\n              <p>Search Result Quantity: {{count}}, cursor {{cursor}} .</p>\n          </div> \n  </div> -->\n\n</div>"

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
        if (this.cookieService.get('user_name')) {
            this.initialDashboard();
        }
        else {
            // alert(this.logged);
            this.router.navigateByUrl('/');
        }
        //comentar los privilegios en producción y qa;
        this.privilege = true;
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
            }
            else {
                window.location.href = '/login';
            }
        }
        else {
            //comentar los privilegios en producción y qa;
            //this.privilege = true;
            //this.initialDashboard();
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
            //console.log('Resultados en variables');
            //console.log('In Use.');
            //console.table(this.inUseAssetsData);
            //console.log('In Store');
            //console.table(this.inStoreAssetsData);
            //console.log('Expired');
            //console.table(this.expiredAssetsData);
            //console.log('disrepair');
            //console.table(this.disrepairAssetsData);
            //console.log('Out');
            //console.table(this.outAssetsData);
            //console.log('Repair');
            //console.table(this.inrepairAssetsData);
            _this.validatePeriphericalStates();
            //console.log("Arreglo in use");
            //console.log(this.inUseAssetsDataflag);
            //console.log("Arreglo in Store");
            //console.log(this.inStoreAssetsDataflag);
            //console.log("Arreglo in Expire");
            //console.log(this.expiredAssetsDataflag);
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

module.exports = "<br><br>\n<div class=\"row justify-content-center\">\n    <div class=\"form-inline\">\n        <h3><span><i class=\"fa fa-table\" aria-hidden=\"true\" style=\"color: cadetblue\"></i></span> Lifetime Table - </h3>\n           <div class=\"form-inline\">\n            <!-- menor mayor-->\n            <select class=\"form-control\" [(ngModel)]=\"GreaterLess\">\n              <option value=\"2\" selected>Greater than</option>\n              <option value=\"1\">Less than</option>\n            </select>\n\n            -\n\n            <input type=\"number\" min=\"1\" class=\"form-control\" style=\"width:70px\" [(ngModel)]=\"number\">-\n            <select class=\"form-control\" [(ngModel)]=\"state\">\n              <option value=\"1\" class=\"\" selected>In Store</option>\n              <option value=\"2\" class=\"\">In Use</option>\n              <option value=\"3\" class=\"\">Both</option>\n            </select>-\n\n           </div>\n           <button type=\"button\" class=\" EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\"  (click)=\"funStorageMoveTable()\">Generate Table</button>\n           <pre>   </pre>\n           <div class=\"form-inline\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search Asset State History\" [(ngModel)]=\"searchInput\" >\n              <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\" (click)=\"searchField()\"><span> <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n              </span></button>\n           </div>\n         </div>\n  \n  </div>\n\n  <br><br>\n  <div class=\"container\" *ngIf=\"boolGenerateTable\">\n    <h3>Result:</h3><br>\n      <table class=\"table table-hover table-bordered\">\n          <thead class=\"table-head\">\n            <tr class=\"\">\n              <th scope=\"col\">Lifetime</th>\n              <th scope=\"col\">Model</th>\n              <th scope=\"col\">State</th>\n              <th scope=\"col\">Product Code</th>\n              <th scope=\"col\">Service Tag</th>\n              \n              \n              <th scope=\"col\">Acquisition Date</th>\n              <th scope=\"col\">Warranty Expiry</th>\n              <th scope=\"col\">Owner</th>\n              \n            </tr>\n          </thead>\n          <tbody *ngFor=\"let prod of items\">\n        \n            <tr class=\"select\">\n              <td >{{prod.Lifetime}}</td>\n              <td>{{prod.Model}}</td>\n              <td>{{prod.State}}</td>\n              <td>{{prod.Product_Code}}</td>\n              <td>{{prod.Service_Tag}}</td>\n              <td>{{prod.Acquisition_Date}}</td>\n              <td>{{prod.Warranty_Expiry}}</td>\n              <th >{{prod.User}}</th>\n            </tr>\n            \n          </tbody>\n        \n        </table>\n           <div class=\"d-flex justify-content-center\">\n              <button class=\"btn btn-link\" *ngIf=\"showpreview\" (click)=\"preview()\">Preview</button>\n              <button class=\"btn btn-link\"  *ngIf=\"shownext\" (click)=\"generateTable()\">Next</button>\n          </div>\n          <div class=\"d-flex justify-content-start\" *ngIf=\"shownext\">\n              <p>Search Result <strong> Quantity: {{count}} </strong>, cursor {{cursor}} .</p>\n          </div> \n  </div>\n\n  <div class=\"container\" *ngIf=\"boolGenerateTable2\">\n      <h3>Result:</h3><br>\n        <table class=\"table table-hover table-bordered\">\n            <thead class=\"thead-dark\">\n              <tr class=\"\">\n                <th scope=\"col\">Lifetime</th>\n                <th scope=\"col\">Model</th>\n                <th scope=\"col\">State</th>\n                <th scope=\"col\">Product Code</th>\n                <th scope=\"col\">Service Tag</th>\n                \n                \n                <th scope=\"col\">Acquisition Date</th>\n                <th scope=\"col\">Warranty Expiry</th>\n                <th scope=\"col\">Owner</th>\n                \n              </tr>\n            </thead>\n            <tbody *ngFor=\"let prod of items2\">\n          \n              <tr class=\"select\">\n                <td >{{prod.Lifetime}}</td>\n                <td>{{prod.Model}}</td>\n                <td>{{prod.State}}</td>\n                <td>{{prod.Product_Code}}</td>\n                <td>{{prod.Service_Tag}}</td>\n                <td>{{prod.Acquisition_Date}}</td>\n                <td>{{prod.Warranty_Expiry}}</td>\n                <th >{{prod.User}}</th>\n              </tr>\n              \n            </tbody>\n          \n          </table>\n             <div class=\"d-flex justify-content-center\">\n                <button class=\"btn btn-link\" *ngIf=\"showpreview2\" (click)=\"preview2()\">Preview</button>\n                <button class=\"btn btn-link\"  *ngIf=\"shownext2\" (click)=\"search()\">Next</button>\n            </div>\n            <div class=\"d-flex justify-content-start\" *ngIf=\"shownext2\">\n                <p>Search Result <strong> Quantity: {{count2}} </strong>, cursor {{cursor2}} .</p>\n            </div> \n    </div>\n\n  <!-- <button (click)=\"test()\" class=\"btn\">Test</button> -->"

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

module.exports = "<p>\n  lifetime-table works!\n</p>\n"

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

module.exports = "<br>\n<div class=\"container\" *ngIf=\"privilege\">\n    \n    <h1 class=\"my-4\">Offboarding-Loan Sheets <span style=\"color:blue\"><i class=\"fa fa-user-plus\" aria-hidden=\"true\" (click)=\"siteInformation()\"></i></span><hr>\n    <button class=\"\" (click)=\"openErrorModal(errorTemplate)\" id=\"errorModalbtn\" style=\"display:none;\"></button>  \n    </h1>\n        <div class=\"row\" *ngIf=\"siteInfo\">\n\n                <!-- Blog Entries Column -->\n                <div class=\"col-md-8\">\n        \n        \n                  <!-- Blog Post -->\n                  <div class=\"card mb-4\">\n                    <img class=\"card-img-top\" [src]=\"fullImagePath\" alt=\"Card image cap\">\n                    <div class=\"card-body\">\n                      <h2 class=\"card-title\">Some statements</h2>\n                      <p class=\"card-text\">\"A loan policy must address key credit decision criteria and underwriting factors such as the purpose of the loan, required financial information, collateral, risk ratings (borrower and facility), pricing, and policy exceptions. It may include metrics that make a particular borrower, industry, or loan type acceptable; for example, the policy may note debt-to-income or specific debt service coverage (DSC) ratios, interest coverage ratios, loan-to-value requirements, or appropriate amortization periods.\"</p>\n                      <button class=\"btn btn-info btn-sm\" (click)=\"start()\">Let's Get Started!</button>\n                    </div>\n                    <div class=\"card-footer text-muted\">\n                      Laureate International Universities\n                    </div>\n                  </div>\n        \n                </div>\n        \n                <!-- Sidebar Widgets Column -->\n                <div class=\"col-md-4\">\n        \n\n                  <br><br><br>\n        \n                  <!-- Categories Widget -->\n                  <div class=\"card my-4\">\n                    <h5 class=\"card-header\">Reminder</h5>\n                    <div class=\"card-body\">\n                      <div class=\"\">\n                        <p>In this section you will not be able to create loan sheets, go create a sheet for that, you can only release the resources of loan sheets already created</p>\n                      </div>\n                    </div>\n                  </div>\n        \n                  <!-- Side Widget -->\n                  <div class=\"card my-4\">\n                    <h5 class=\"card-header\">Loan Policy</h5>\n                    <div class=\"card-body\">\n                            The policy should also address postorigination activities, such as ongoing monitoring and credit administration, including postorigination monitoring of loan covenants, obtaining financial information, and assessing the borrower's ongoing ability to service the debt and ultimately repay the loan.\n                    </div>\n                  </div>\n        \n                </div>\n        \n              </div>\n              <!-- /.row -->\n        \n    \n <!--   <div>\n        <h3>Offboarding-Loan Sheets <span style=\"color:blue\"><i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i></span></h3>\n        <p>\"A loan policy must address key credit decision criteria and underwriting factors such as the purpose of the loan, required financial information, collateral, risk ratings (borrower and facility), pricing, and policy exceptions. It may include metrics that make a particular borrower, industry, or loan type acceptable; for example, the policy may note debt-to-income or specific debt service coverage (DSC) ratios, interest coverage ratios, loan-to-value requirements, or appropriate amortization periods. The policy should also address postorigination activities, such as ongoing monitoring and credit administration, including postorigination monitoring of loan covenants, obtaining financial information, and assessing the borrower's ongoing ability to service the debt and ultimately repay the loan.\"</p>\n         <br>\n        <div class=\"form-group\"> \n            <button class=\"btn btn-info btn-sm\" (click)=\"start()\">Let's Get Started!</button>\n        </div>\n    </div> -->\n    <div class=\" col-6\" *ngIf=\"boolfirst\">\n        <h3>First-Step select a type <span><i class=\"fa fa-random\" aria-hidden=\"true\"></i></span></h3>\n        <div class=\"form-group\">\n            <select class=\"form-control\" [(ngModel)]=\"option\">\n                    <option value=\"2\">OffBoarding</option>\n                    <option value=\"3\">Loan</option>\n            </select>\n        </div>\n        <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\" (click)=\"validate()\">Continue</button>\n    </div>\n\n    <br>\n  <!--  <button class=\"btn btn-sm btn-danger\" (click)=\"test()\">Test</button> -->\n\n\n    <ul class=\"list-group\" *ngFor=\"let item of selectemploye\">\n        <li class=\"list-group-item list-group-item-success \">{{item.FIRST_NAME}}  {{item.LAST_NAME}} - {{item.EMAIL}}</li>\n      \n      </ul>\n      \n\n\n    <div *ngIf=\"boolemployee\">\n        <h3>First-Step select the employee</h3>\n         <!-- <ul class=\"list-group\" *ngFor=\"let item of selectemploye\">{{item.FIRST_NAME}} - {{item.LAST_NAME}} - {{item.EMAIL}} </ul> -->\n \n \n \n        <app-employee-table (employeevent)=\"selectemploye=$event\"></app-employee-table>\n        <div class=\"d-flex justify-content-center\">\n                 <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryiii EdgeButton--medium submit js-submit\" (click)=\"backemployee()\">Go Back</button><h4>-</h4>\n                 <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryiii EdgeButton--medium submit js-submit\" (click)=\"continueemployee()\">Continue</button>\n        </div>    \n   </div >\n   <br>\n   <div class=\"\" *ngIf=\"boolproducts\">\n    <h3><b>Loan Signature Sheets</b></h3>\n    <br>\n    <table class=\"table table-hover table-bordered\">\n        <thead class=\"thead-dark\">\n          <tr class=\"\">\n            <th scope=\"col\">Sheet Id</th>\n            <th scope=\"col\">First Name</th>\n            <th scope=\"col\">Last Name</th>\n            <th scope=\"col\">E-mail</th>\n            <th scope=\"col\">Employee ID</th>\n            <th scope=\"col\">Date</th>\n            <th scope=\"col\">select</th>\n           <!-- <th scope=\"col\">Status</th>\n            <th scope=\"col\">Last?</th> -->\n            \n          </tr>\n        </thead>\n        <tbody *ngFor=\"let product of sheets\">\n      \n          <tr class=\"select\">\n            <th scope=\"row\">{{product.id_signature}}</th>\n            <td>{{product.first_name}}</td>\n            <td>{{product.last_name}}</td>\n            <td>{{product.email}}</td>\n            <td>{{product.id_employee}}</td>\n            <td>{{product.updated}}</td>\n            <td><button class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\" (click)=\"onSelect(product)\" >select</button></td>\n          </tr>\n      \n        </tbody>\n      \n      </table>\n      <div class=\"d-flex justify-content-center\">\n          <button class=\"btn btn-link\" *ngIf=\"showpreview\" (click)=\"preview()\">Preview</button>\n          <button class=\"btn btn-link\" (click)=\"next()\" *ngIf=\"shownext\">Next</button>\n      </div>\n\n      <div class=\"d-flex justify-content-start\" *ngIf=\"meta\">\n          <p>Search Result Quantity: {{meta['count']}}, cursor {{meta['cursor']}} More?  {{meta['more']}}.</p>\n      </div>\n      <div >\n        <ul class=\"list-group\" *ngFor=\"let item of selectLoanSheet\">\n            <li class=\"list-group-item list-group-item-info \">{{item.id_signature}} - {{item.email}}</li>\n          \n          </ul>\n      </div>\n      <br>\n      <div class=\"d-flex justify-content-center\" *ngIf=\"meta\">\n        <button class=\"EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit \" (click)=\"openLoanModal(Loantemplate)\">Release Assets</button><br>\n    </div>\n    </div>\n\n    <div *ngIf=\"booloffboarding\">\n    <h3>Current Signature Sheet Products</h3>\n\n    <div class=\"\">\n          <table class=\"table table-hover table-bordered\">\n              <thead class=\"thead-dark\">\n                <tr class=\"\">\n                    <th scope=\"col\">Sheet Id</th>\n                  <th scope=\"col\">CI Name</th>\n                  <!-- <th scope=\"col\">CI Type</th> -->\n                  <th scope=\"col\">Tag</th>\n                  <th scope=\"col\">Serial N°</th>\n                  <th scope=\"col\">Model</th>\n                  <th scope=\"col\">CIID</th>\n                  \n                </tr>\n              </thead>\n              <tbody *ngFor=\"let product of offBoardingProducts\">\n            \n                <tr class=\"select\">\n                  <th scope=\"row\">{{product.id_signature}}</th>\n                  <td>{{product.product_name}}</td>\n                 <!-- <td>{{product.CI_TYPE}}</td> -->\n                  <td>{{product.id_product}}</td>\n                  <td>{{product.serial_number}}</td>\n                  <td>{{product.model}}</td>\n                  <td>{{product.ciid}}</td>\n                </tr>\n            \n              </tbody>\n            \n            </table>\n      </div>\n      <br>\n      <div class=\"d-flex justify-content-center\">\n            <button class=\"EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit \" (click)=\"openOffboardingModal(offboardingTemplate)\">Make Offboarding</button><br>\n      </div>\n\n    </div>\n\n</div>\n\n\n<ng-template #template>\n    <div class=\"modal-body text-center alert\">\n        <p>Are you sure of save this Signature Sheet??</p>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"insertSheet()\" >Yes</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"abort()\" >No</button>\n        <div class=\"modal-body alert alert-warning\" role=\"alert\">\n                The information will be save and automatically create a pdf file of the sheet, press 'YES', to continue or 'No', to go back.\n        </div>\n    </div>\n\n   \n</ng-template>\n\n\n<ng-template #Loantemplate>\n        <div class=\"modal-header text-center\">\n          <h4 class=\"modal-title text-center\">The Following Assests will be modified </h4>\n          <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body text-center\">\n          <b> Sheet Products: </b>\n        </div>\n        <div >\n            <ul class=\"list-group\" *ngFor=\"let item of modalProducts\">\n                <li class=\"list-group-item list-group-item-warning \">{{item.id_product}} - {{item.product_name}} - {{item.model}}</li>\n                  \n            </ul>\n        </div><br>\n        <p>The assets state will be change to in store in the asset explorer database, would you like to continue? <span><i class=\"fa fa-question-circle-o\" aria-hidden=\"true\"></i></span></p>\n        \n        <div class=\"text-center\">\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\" >YES</button>\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"decline()\" >No</button>\n        </div>\n        <hr>\n\n</ng-template>\n\n<ng-template #offboardingTemplate>\n        <div class=\"modal-body text-center alert\">\n            <p>Are you sure of performing this offboarding? <span><i class=\"fa fa-question-circle-o\" aria-hidden=\"true\"></i></span></p>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"makeOffboarding()\" >Yes</button>\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"decline()\" >No</button>\n            <div class=\"modal-body alert alert-warning\" role=\"alert\">\n                    The relationships will be deleted and automatically create a pdf file of the offboarding sheet, press 'YES', to continue or 'No', to go back.\n            </div>\n        </div>\n    \n       \n    </ng-template>\n\n\n    <ng-template #errorTemplate>\n        <div class=\"modal-body text-center alert\" >\n          <p id=\"errorMessage\">!</p>\n          <button class=\"btn btn-info\" (click)=\"modalRef.hide()\">Ok</button><br>\n      </div>\n      \n      </ng-template >"

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

module.exports = "<body>\n<br>\n    <!-- <div class=\"container\">\n      <h1>Welcome To Laureate IT System</h1> <br><br>\n      <h5>Welcome to the inventory control system, this application is born as an extension of the asset explorer system, as a personalized complement for the management of signature sheets, real-time information of the main assets of the site as well as immediate report.</h5>\n\n    </div> -->\n\n <!--   <button class=\"btn btn-danger\" (click)=\"test2()\">Test</button> -->\n <div class=\"container\">\n\n    <!-- Jumbotron Header -->\n    <header class=\"\">\n      <h1 class=\"\">Welcome To Laureate IT System! <span style=\"color:#1da1f2;\"><i class=\"fa fa-cogs\" aria-hidden=\"true\"></i></span></h1>\n      <!-- <img style=\"height:500px; width:1200px\" class=\"img-fluid\" alt=\"Responsive image\" [src]=\"mainImage\"> -->\n    </header>\n    <br>\n\n    <!-- Page Features -->\n    <div class=\"row text-center\">\n\n        <div class=\"col-lg-2 col-md-6 mb-4\">\n          <div class=\"card \" style=\"height:300px;\">\n          <img class=\"card-img-top\" [src]=\"fullImagePath\" alt=\"Card image cap\" style=\"height : 120px;\">\n              <div class=\"card-body\">\n                <p class=\"card-title\">Attending Report Generation</p>\n              </div>\n              <div class=\"\">\n                <a href=\"http://reportslno.hnsc.net\" target=\"_blank\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium sbtn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\">GO!</a>\n                <p> </p>\n              </div>\n            </div>\n          </div>\n\n      <div class=\"col-lg-2 col-md-6 mb-4\">\n        <div class=\"card \" style=\"height:300px;\">\n          <!-- icono -->\n          \n          <img class=\"card-img-top\" [src]=\"sharepointImage\" alt=\"Card image cap\" style=\"height: 120px;\">\n          <div class=\"card-body\">\n            <p class=\"card-title\">HelpdeskIT Sharepoint Site.</p>\n            <!-- <p class=\"card-text\"></p>-->\n          </div>\n          <div class=\"\">\n            <a href=\"http://laur.cc/helpdeskit\" target=\"_blank\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\">GO!</a>\n            <p> </p>\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"col-lg-2 col-md-6 mb-4\">\n          <div class=\"card \" style=\"height:300px;\">\n              <img class=\"card-img-top\" [src]=\"footprintsImage\" alt=\"Card image cap\" style=\"height : 120px;\">\n            <div class=\"card-body\">\n              <p class=\"card-title\">Frontline Ticket System</p>\n             <!--> <p class=\"card-text\"></p> -->\n             <br>\n            </div>\n            <div class=\"\">\n              <a href=\"https://frontline.nfpondemand.com/\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\" target=\"_blank\">GO!</a>\n              <p> </p>\n            </div>\n          </div>\n        </div>\n\n\n        <div class=\"col-lg-2 col-md-6 mb-4\">\n            <div class=\"card \" style=\"height:300px;\">\n                <img class=\"card-img-top\" [src]=\"kaseyaImage\" alt=\"Card image cap\" style=\"height : 120px;\">\n              <div class=\"card-body\">\n                <p class=\"card-title\">Kaseya Web Console</p>\n                <br>\n                \n              </div>\n              <div class=\"\">\n                <a href=\"http://kaseya2.laureate.net\" target=\"_blank\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\">GO!</a>\n                <p> </p>\n              </div>\n            </div>\n          </div>\n\n\n            <div class=\"col-lg-2 col-md-6 mb-4\">\n                <div class=\"card \" style=\"height:300px;\">\n                    <img class=\"card-img-top\" [src]=\"fullImagePath\" alt=\"Card image cap\" style=\"height : 120px;\">\n                  <div class=\"card-body\">\n                    <p class=\"card-title\">Attending Web Register</p>\n                    <br>\n                  </div>\n                  <div class=\"\">\n                    <a href=\"http://laur.cc/lnoattendance\" target=\"_blank\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\">GO!</a>\n                    <p> </p>\n                  </div>\n                </div>\n              </div>\n\n\n              <div class=\"col-lg-2 col-md-6 mb-4\">\n                  <div class=\"card \" style=\"height:300px;\">\n                      <img class=\"card-img-top\" [src]=\"fullImagePath\" alt=\"Card image cap\" style=\"height : 120px;\">\n                    <div class=\"card-body\">\n                      <p class=\"card-title\">VPN Installer Service</p>\n                      <br>\n                    </div>\n                    <div class=\"\">\n                      <a href=\"https://balt.remote.laureate.net\" target=\"_blank\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\">GO!</a>\n                      <p> </p>\n                    </div>\n                  </div>\n                </div>\n\n\n\n\n  <!--            <div class=\"col-lg-2 col-md-6 mb-4\">\n                  <div class=\"card\">\n                    <img class=\"card-img-top\" src=\"http://placehold.it/500x325\" alt=\"\">\n                    <div class=\"card-body\">\n                      <p class=\"card-title\">Card title</p>\n                      <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>\n                    </div>\n                    <div class=\"\">\n                      <a href=\"#\" class=\"btn btn-primary\">Find Out More!</a>\n                    </div>\n                  </div>\n                </div> -->\n\n    </div>\n\n\n    <!-- segundo lote -->\n    <div class=\"row text-center\" >\n\n        <div class=\"col-lg-2 col-md-6 mb-4\">\n            <div class=\"card \" style=\"height:300px;\">\n                <img class=\"card-img-top\" [src]=\"sharepointImage\" alt=\"Card image cap\" style=\"height : 120px;\">\n              <div class=\"card-body\">\n                <p class=\"card-title\">Sharepoint architecture</p>\n                <br>\n              </div>\n              <div class=\"\">\n                <a href=\"https://laureatena.sharepoint.com/sites/itlno/it-arch/Shared%20Documents/Forms/AllItems.aspx?RootFolder=%2Fsites%2Fitlno%2Fit-arch%2FShared%20Documents%2FIT%20Architecture%2FZoom&FolderCTID=0x0120002A4011C06BDFAB41A7ECE5593132BC5A\" target=\"_blank\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\">GO!</a>\n                <p> </p>\n              </div>\n            </div>\n          </div>\n\n      <div class=\"col-lg-2 col-md-6 mb-4\">\n        <div class=\"card \" style=\"height:300px;\">\n          <!-- icono -->\n          \n          <img class=\"card-img-top\" [src]=\"assetImage\" alt=\"Card image cap\" style=\"height: 120px;\">\n          <div class=\"card-body\">\n            <p class=\"card-title\">Asset Explorer.</p>\n            <br>\n            <!-- <p class=\"card-text\"></p>-->\n          </div>\n          <div class=\"\">\n            <a href=\"http://172.20.33.40:8080\" target=\"_blank\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\">GO!</a>\n            <p> </p>\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"col-lg-2 col-md-6 mb-4\">\n          <div class=\"card \" style=\"height:300px;\">\n              <img class=\"card-img-top\" [src]=\"elasticx\" alt=\"Card image cap\" style=\"height : 120px;\">\n            <div class=\"card-body\">\n              <p> </p>\n              <p class=\"card-title\">PBX console</p>\n              <br>\n             <!--> <p class=\"card-text\"></p> -->\n            </div>\n            <div class=\"\">\n              <a href=\"http://172.20.33.33\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\" target=\"_blank\">GO!</a>\n              <p> </p>\n            </div>\n          </div>\n        </div>\n\n\n        <div class=\"col-lg-2 col-md-6 mb-4\">\n            <div class=\"card \" style=\"height:300px;\">\n                <img class=\"card-img-top\" [src]=\"ricohImage\" alt=\"Card image cap\" style=\"height : 120px;\">\n              <div class=\"card-body\">\n                <p class=\"card-title\">Printer web console</p>\n                <br>\n              </div>\n              <div class=\"\">\n                <a href=\" http://172.20.35.101\" target=\"_blank\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\">GO!</a>\n                <p> </p>\n              </div>\n            </div>\n          </div>\n\n\n            <div class=\"col-lg-2 col-md-6 mb-4\">\n                <div class=\"card \" style=\"height:300px;\">\n                    <img class=\"card-img-top\" [src]=\"zoomImage\" alt=\"Card image cap\" style=\"height : 130px;\">\n                  <div class=\"card-body\">\n                    <p> </p>\n                    <p class=\"card-title\">Zoom console </p>\n                    <br>\n                  </div>\n                  <div class=\"\">\n                    <a href=\"https://zoom.us/account/user\" target=\"_blank\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\">GO!</a>\n                    <p> </p>\n                  </div>\n                </div>\n              </div>\n\n\n              <div class=\"col-lg-2 col-md-6 mb-4\">\n                  <div class=\"card \" style=\"height:300px;\">\n                      <img class=\"card-img-top\" [src]=\"fullImagePath\" alt=\"Card image cap\" style=\"height : 120px;\">\n                    <div class=\"card-body\">\n                      <p class=\"card-title\">LOE/Email Password Reset</p>\n                    </div>\n                    <div class=\"\">\n                      <a href=\"http://laur.cc/passwordreset \" target=\"_blank\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\">GO!</a>\n                      <p> </p>\n                    </div>\n                  </div>\n                </div>\n\n\n\n\n  <!--            <div class=\"col-lg-2 col-md-6 mb-4\">\n                  <div class=\"card\">\n                    <img class=\"card-img-top\" src=\"http://placehold.it/500x325\" alt=\"\">\n                    <div class=\"card-body\">\n                      <p class=\"card-title\">Card title</p>\n                      <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>\n                    </div>\n                    <div class=\"\">\n                      <a href=\"#\" class=\"btn btn-primary\">Find Out More!</a>\n                    </div>\n                  </div>\n                </div> -->\n\n    </div>\n\n    <!-- 3 -->\n\n    <div class=\"row text-center\" >\n\n        <div class=\"col-lg-2 col-md-6 mb-4\">\n          </div>\n\n      <div class=\"col-lg-2 col-md-6 mb-4\">\n          <div class=\"card \" style=\"height:300px;\">\n              <img class=\"card-img-top\" [src]=\"officeImage\" alt=\"Card image cap\" style=\"height : 120px;\">\n            <div class=\"card-body\">\n              <p> </p>\n              <p class=\"card-title\">Office Web Home</p>\n             <!--> <p class=\"card-text\"></p> -->\n            </div>\n            <div class=\"\">\n              <a href=\"http://portal.office.com\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\" target=\"_blank\">GO!</a>\n              <p> </p>\n            </div>\n          </div>\n        </div>\n\n\n        <div class=\"col-lg-2 col-md-6 mb-4\">\n            <div class=\"card\" style=\"height:300px;\">\n                <img class=\"card-img-top\" [src]=\"bitly\" alt=\"Card image cap\" style=\"height : 120px;\">\n              <div class=\"card-body\">\n                <p> </p>\n                <p class=\"card-title\">ShortURL Admin</p>\n              </div>\n              <div class=\"\">\n                <a href=\"http://laur.cc/admin\" target=\"_blank\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\">GO!</a>\n                <p> </p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-2 col-md-6 mb-4\">\n            <div class=\"card\" style=\"height:300px;\">\n                <img class=\"card-img-top\" [src]=\"adimage\" alt=\"Card image cap\" style=\"height : 120px;\">\n              <div class=\"card-body\">\n                <p> </p>\n                <p class=\"card-title\">AD Manager</p>\n              </div>\n              <div class=\"\">\n                <a href=\"http://mddcadmin01.loe.corp:8080//logout.do\" target=\"_blank\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\">GO!</a>\n                <p> </p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-2 col-md-6 mb-4\">\n            <div class=\"card\" style=\"height:300px;\">\n                <img class=\"card-img-top\" [src]=\"jamfimage\" alt=\"Card image cap\" style=\"height : 120px;\">\n              <div class=\"card-body\">\n                <p> </p>\n                <p class=\"card-title\">JAMF-Safari-Only</p>\n              </div>\n              <div class=\"\">\n                <a href=\"http://jamf.laureate.net:8443\" target=\"_blank\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\">GO!</a>\n                <p> </p>\n              </div>\n            </div>\n          </div>\n          \n\n        \n    </div>\n   <!--  <button class=\"btn btn-primary\" (click)=\"viewMore()\">View More</button> -->\n    <!-- /.row -->\n\n  </div>\n</body>\n\n"

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

module.exports = "\r\n\r\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n        <a routerLink=\"/\" class=\"navbar-brand nav-title\">IT Inventory <span><i class=\"fa fa-home\" aria-hidden=\"true\"></i></span></a>\r\n\r\n      <div class=\"collapse navbar-collapse justify-content-md-center\" id=\"navbarsExample08\">\r\n        <ul class=\"navbar-nav\">\r\n          <div *ngIf=\"privilegeDashboard\">\r\n\r\n            <li class=\"nav-item dropdown\" *ngIf=\"privilegeDashboard\">\r\n                <a class=\"nav-link dropdown-toggle\"  id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" (click)=\"dropd()\">\r\n                    Dashboard <span><i class=\"fa fa-signal\" aria-hidden=\"true\"></i></span>\r\n                </a>\r\n                <div class=\"dropdown-menu show\" aria-labelledby=\"navbarDropdown\" *ngIf=\"dropdown\">\r\n                    <a class=\"dropdown-item nav-link nav-drop\" routerLink=\"dashboard\" style=\"color:#86888c\" (click)=\"dropd()\">Dashboard </a> \r\n                    <a class=\"dropdown-item nav-link\" routerLink=\"tables\" style=\"color:#86888c\" (click)=\"dropd()\">Asset Moves </a>\r\n                    <a class=\"dropdown-item nav-link\" routerLink=\"lifetime\" style=\"color:#86888c\" (click)=\"dropd()\">Lifetime Table</a>\r\n                  <!--<a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                   <div class=\"dropdown-divider\"></div>\r\n                  <a class=\"dropdown-item\" href=\"#\">Something else here</a> -->\r\n                </div>\r\n              </li>          \r\n          </div>\r\n            <li class=\"nav-item\" *ngIf=\"privilegeCreate\">\r\n                <a class=\"nav-link\" routerLink=\"newsheet\" >Create Inventory Sheet <span><i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i></span></a>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"privilegeUpdtae\">\r\n                <a class=\"nav-link\" routerLink=\"updatesheet\">Update Inventory Sheet <span><i class=\"fa fa-wrench\" aria-hidden=\"true\"></i></span></a>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"privilegeLoan\">\r\n                  <a class=\"nav-link\" routerLink=\"loan\">Offboarding-Loan <span><i class=\"fa fa-plane\" aria-hidden=\"true\"></i></span></a>\r\n              </li>\r\n              <div *ngIf=\"privilegePdf\">\r\n                  <li class=\"nav-item dropdown\" *ngIf=\"privilegePdf\"> \r\n                      <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" (click)=\"dropdPdf()\" >\r\n                        Pdf <span><i class=\"fa fa-file-pdf-o\" aria-hidden=\"true\"></i></span>\r\n                      </a>\r\n                      <div class=\"dropdown-menu show\" aria-labelledby=\"navbarDropdown\" *ngIf=\"dropdownPdf_\">\r\n                        <a class=\"dropdown-item\" routerLink=\"pdf\" (click)=\"dropdPdf()\" style=\"color:#86888c\" >PDF</a>\r\n                        <a class=\"dropdown-item\" routerLink=\"loansheets\" (click)=\"dropdPdf()\" style=\"color:#86888c\"  >Loan Sheets</a>\r\n                      </div>\r\n                    </li>\r\n\r\n              </div>\r\n          <li class=\"nav-item \" *ngIf=\"privilegeReports\">\r\n              <a class=\"nav-link\" routerLink=\"#\">Reports</a>\r\n          </li>\r\n\r\n          <li class=\"nav-item \" *ngIf=\"privilegeAdmin\">\r\n            <a class=\"nav-link\" routerLink=\"admin\">User Management <span><i class=\"fa fa-unlock-alt\" aria-hidden=\"true\"></i></span></a>\r\n        </li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"nav-item d-flex flex-row-reverse\">\r\n            <button class=\"btn-sm btn btn-outline-info\"(click)=\"Logout()\">Logout <span><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i></span></button>\r\n        </div>\r\n    </nav>\r\n\r\n\r\n\r\n\r\n<div *ngIf=\"loggedInPending\">\r\n        <nav class=\"navbar navbar-expand-sm navbar-custom\">\r\n            <div class=\"d-flex justify-content-center\">\r\n                    <h3 class=\"d-flex justify-content-center\" style=\"color: #ebebeb\"> IT Inventory System.!</h3>\r\n            </div>\r\n                \r\n              </nav>\r\n</div>"

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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
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

module.exports = "<br>\n<div class=\"container\" *ngIf=\"privilege\">\n    <h1 class=\"my-4\">Loan Products <span style=\"color: #0074FF;\" ><i class=\"fa fa-handshake-o\" aria-hidden=\"true\"></i></span></h1>\n\n    <div class=\"\">\n        <div class=\"form-inline d-flex justify-content-end\">\n            <div class=\"form-group\">\n               <div style=\"margin-right: .5em\">\n                <select class=\"form-control\"  [(ngModel)]=\"status_option\">\n                  <option value=\"1\">1. On Loan</option>\n                  <option value=\"2\">2. Returned</option>\n                  <option value=\"3\" selected> All Products</option>\n                </select>\n\n             </div>\n\n                <input type=\"text\" placeholder=\"Search\" class=\"form-control\" [(ngModel)]=\"search\">\n                <button class=\"EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\" (click)=\"find()\">Find</button>\n        \n            </div>\n        \n          </div><br>\n\n        <table class=\"table table-hover table-bordered\">\n            <thead class=\"table-head\">\n              <tr class=\"\">\n                <th scope=\"col\">Id Signature</th>\n                <th scope=\"col\">TAG</th>\n                <th scope=\"col\">Product Name</th>\n                <th scope=\"col\">Return Date</th>\n                <th scope=\"col\">Email</th>\n                <th scope=\"col\">Status</th>\n               <!-- <th scope=\"col\">Status</th>\n                <th scope=\"col\">Last?</th> -->\n                \n              </tr>\n            </thead>\n            <tbody *ngFor=\"let product of sheets\">\n          \n              <tr class=\"select\">\n                <th scope=\"row\">{{product.id_signature}}</th>\n                <td>{{product.id_product}}</td>\n                <td>{{product.product_name}}</td>\n                <td>{{product.updated}}</td>\n                <td>{{product.email}}</td>\n                <td>{{product.status}}</td>\n              </tr>\n          \n            </tbody>\n          \n          </table>\n          <div class=\"d-flex justify-content-center\">\n              <button class=\"btn btn-link\" *ngIf=\"showpreview\" (click)=\"preview()\" >Preview</button>\n              <button class=\"btn btn-link\" *ngIf=\"shownext\" (click)=\"next()\">Next</button>\n          </div>\n\n           <div class=\"d-flex justify-content-start\">\n              <p>Search Result Quantity: {{count}}, cursor {{cursor}} More?  {{meta_}}.</p>\n          </div>\n         \n    </div>\n <!-- <p>   \n    loan-assets works!\n    <button class=\"btn btn-danger\" (click)=\"test()\">Dennis</button>\n  </p> -->\n  \n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/pdf/loan-assets/loan-assets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanAssetsComponent; });
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__create_signature_sheet_search_employee_service__["a" /* SearchEmployeeService */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
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
exports.push([module.i, "/*h1 { color: #7c795d; font-family: 'Trocchi', serif; font-size: 45px; font-weight: normal; line-height: 48px; margin: 0; }\r\n\r\np { color: #4c4a37; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh5 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh2 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh3 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh4 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\n\r\n/* color a select file \r\n.file-select:hover{\r\n    color: #DF013A;\r\n} */\r\n\r\n.EdgeButton:hover{\r\n    background-color: #E0F8FF;\r\n}\r\n\r\n.EdgeButton--secondary-file:hover{\r\n    background-color: #afe0ff;\r\n}\r\n\r\n.EdgeButton--secondaryii:hover{\r\n    background-color: #E0F8FF;\r\n    color: #1da1f2;\r\n}\r\n\r\n.EdgeButton--secondaryiii:hover{\r\n    background-color: #DBFCE8;\r\n    color: #69C68E;\r\n}\r\n\r\n/*input {\r\n    -moz-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    margin-top: 12px;\r\n    width: 100%;\r\n} */\r\n\r\n.EdgeButton--secondary {\r\n    background-color: #fff;\r\n    border: 1px solid #1da1f2;\r\n    color: #1da1f2;\r\n}\r\n\r\n.EdgeButton--secondaryii {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n \r\n}\r\n\r\n.EdgeButton--secondaryiii {\r\n    background-color: #69C68E;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n \r\n}\r\n\r\n.EdgeButton--secondary-file {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n}\r\n\r\n.EdgeButton--medium {\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n}\r\n\r\n/*.EdgeButton, .EdgeButton:visited {\r\n    border-radius: 100px;\r\n    box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}*/\r\n\r\n.EdgeButton {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    line-height: 25px;\r\n    padding: 8px 18px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n.EdgeButton--secondaryii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n.EdgeButton--secondaryiii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\ntextarea, div[contenteditable], .t1-select {\r\n    display: inline-block;\r\n    width: 210px;\r\n    padding: 4px;\r\n    margin: 0;\r\n    outline: 0;\r\n    background-color: #fff;\r\n    border: 1px solid #e6ecf0;\r\n    border-radius: 3px;\r\n}\r\n\r\nh1 {\r\n    display: block;\r\n    font-size: 2em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh2 {\r\n    display: block;\r\n    font-size: 1.9em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh3 {\r\n    display: block;\r\n    font-size: 1.8em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh4 {\r\n    display: block;\r\n    font-size: 1.7em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh5 {\r\n    display: block;\r\n    font-size: 1.5em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nbody.ms-windows {\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n.table-head {\r\n    background-color: rgb(35, 47, 62);\r\n    border-color: rgb(35, 47, 62);\r\n    color: #fff;\r\n}\r\n\r\np, label, option{\r\n    font-size: 1em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n  }\r\n\r\noption, select{\r\n    font-size: 0.9em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pdf/pdfs/pdfs.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\" *ngIf=\"privilege\">\n    <h1 class=\"my-4\">PDF Signature Sheet <span style=\"color:red;\" ><i class=\"fa fa-file-pdf-o\" aria-hidden=\"true\" (click)=\"siteInformation()\"></i></span>\n\n    </h1>\n        <div class=\"row\" *ngIf=\"siteInfo\">\n\n                <!-- Blog Entries Column -->\n                <div class=\"col-md-8\">\n        \n        \n                  <!-- Blog Post -->\n                  <div class=\"card mb-4\">\n                      <br>\n                    <img class=\"card-img-top\" [src]=\"fullImagePath\" alt=\"Card image cap\">\n                    <div class=\"card-body\">\n                      <h2 class=\"card-title\">Some statements</h2>\n                      <p class=\"card-text\">\"The Portable Document Format (PDF) is a file format developed in the 1990s to present documents, including text formatting and images, in a manner independent of application software, hardware, and operating systems. Based on the PostScript language, each PDF file encapsulates a complete description of a fixed-layout flat document, including the text, fonts, vector graphics, raster images and other information needed to display it. PDF was standardized as an open format, ISO 32000, in 2008, and does not require any royalties for its implementation.\"</p>\n                     <!-- <button class=\"btn btn-info btn-sm\" (click)=\"start()\">Let's Get Started!</button> -->\n                    </div>\n                    <div class=\"card-footer text-muted\">\n                      Laureate International Universities\n                    </div>\n                  </div>\n        \n                </div>\n        \n                <!-- Sidebar Widgets Column -->\n                <div class=\"col-md-4\">\n        \n\n                  <br><br><br>\n        \n                  <!-- Categories Widget -->\n                  <div class=\"card my-4\">\n                    <h5 class=\"card-header\">Reminder</h5>\n                    <div class=\"card-body\">\n                      <div class=\"\">\n                        <p>Here you can search PDF, load the signed sheets and see the record of the sheets</p>\n                      </div>\n                    </div>\n                  </div>\n        \n                  <!-- Side Widget -->\n                  <div class=\"card my-4\">\n                    <h5 class=\"card-header\">Loan Policy</h5>\n                    <div class=\"card-body\">\n                            Today, PDF files may contain a variety of content besides flat text and graphics including logical structuring elements, interactive elements such as annotations and form-fields, layers, rich media (including video content) and three dimensional objects using U3D or PRC, and various other data formats. The PDF specification also provides for encryption and digital signatures, file attachments and metadata to enable workflows requiring these features.\"\n                    </div>\n                  </div>\n        \n                </div>\n        \n              </div>\n\n\n    <div *ngIf=\"findPdfBool\" [@slideInOut]>\n       <!-- <h3>PDF Signature Sheet <span style=\"color:red;\"><i class=\"fa fa-file-pdf-o\" aria-hidden=\"true\"></i></span></h3>\n        <p>\"The Portable Document Format (PDF) is a file format developed in the 1990s to present documents, including text formatting and images, in a manner independent of application software, hardware, and operating systems. Based on the PostScript language, each PDF file encapsulates a complete description of a fixed-layout flat document, including the text, fonts, vector graphics, raster images and other information needed to display it. PDF was standardized as an open format, ISO 32000, in 2008, and does not require any royalties for its implementation.\n\n            Today, PDF files may contain a variety of content besides flat text and graphics including logical structuring elements, interactive elements such as annotations and form-fields, layers, rich media (including video content) and three dimensional objects using U3D or PRC, and various other data formats. The PDF specification also provides for encryption and digital signatures, file attachments and metadata to enable workflows requiring these features.\"</p>\n        --> <hr>\n        <div >\n            <div class=\"form-group\">\n              <h4>Find PDF <span><i class=\"fa fa-search\" aria-hidden=\"true\"></i></span> <span style=\"color:red;\"><i class=\"fa fa-file-pdf-o\" aria-hidden=\"true\"></i></span></h4>\n              <label for=\"text-input\">Please select the Signature sheet in the table below</label>\n                <input disabled type=\"text\" id=\"text-input\" class=\"form-control\" [(ngModel)]=\"text\">\n            </div>\n        </div>\n    \n        <button class=\"btn EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\" (click)=\"searchPdf()\" tooltip=\"Vivamus sagittis\">Look for original pdf.!</button>\n        <button class=\"btn EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\" (click)=\"searchScannedPdf()\">Look for scanned pdf.!</button>\n        <div class=\"container\" *ngIf=\"boolpdfroute\">\n          <p>In case download does not start please contact a IT Agent</p>\n    \n        </div><br>\n    </div> <hr>\n    <div class=\"\">\n        <h3>Historical Signature Sheet Table <span><i class=\"fa fa-history\" aria-hidden=\"true\"></i></span></h3>\n        <div class=\"form-inline d-flex justify-content-end\">\n            <div class=\"form-group\">\n               <div style=\"margin-right: 0.5em\">\n                <select class=\"form-control\" [(ngModel)]=\"sheet_option\">\n                  <option value=\"1\">Onboarding</option>\n                  <option value=\"2\">Offboarding</option>\n                  <option value=\"3\">Loan</option>\n                  <option value=\"4\">Updates</option>\n                  <option value=\"5\" selected>All Sheets</option>\n                </select>\n\n                <select class=\"form-control\" [(ngModel)]=\"status_option\">\n                  <option value=\"1\">On Loan</option>\n                  <option value=\"2\" selected> Returned</option>\n                </select>\n\n             </div>\n\n                <input type=\"text\" placeholder=\"Search\" class=\"form-control\" (keyup)=\"searchSheet($event)\">\n                <button class=\"EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\" (click)=\"find()\" style=\"margin-left: 0.5em\">Find</button>\n               <!-- <input type=\"submit\" class=\"EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\" value=\"Iniciar sesión\"> -->\n                \n            </div>\n        \n          </div><br>\n\n        <table class=\"table table-hover table-bordered\">\n            <thead class=\"table-head\">\n              <tr class=\"\">\n                <th scope=\"col\">Sheet Id</th>\n                <th scope=\"col\">First Name</th>\n                <th scope=\"col\">Last Name</th>\n                <th scope=\"col\">E-mail</th>\n                <th scope=\"col\">Employee ID</th>\n                <th scope=\"col\">Date</th>\n                <th scope=\"col\">select</th>\n                <th scope=\"col\"></th>\n               <!-- <th scope=\"col\">Status</th>\n                <th scope=\"col\">Last?</th> -->\n                \n              </tr>\n            </thead>\n            <tbody *ngFor=\"let product of sheets\">\n          \n              <tr class=\"select\">\n                <th scope=\"row\">{{product.id_signature}}</th>\n                <td>{{product.first_name}}</td>\n                <td>{{product.last_name}}</td>\n                <td>{{product.email}}</td>\n                <td>{{product.id_employee}}</td>\n                <td>{{product.updated}}</td>\n                <td><button class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\" (click)=\"onSelect(product)\" >select</button></td>\n                <td><button class=\"btn btn-sm EdgeButton EdgeButton--secondaryiii EdgeButton--medium submit js-submit\" (click)=\"onselectUpload(product)\">upload</button></td>\n              \n\n              </tr>\n          \n            </tbody>\n          \n          </table>\n          <div class=\"d-flex justify-content-center\">\n              <button class=\"btn btn-link\" *ngIf=\"showpreview\" (click)=\"preview()\">Preview</button>\n              <button class=\"btn btn-link\" (click)=\"next()\" *ngIf=\"shownext\">Next</button>\n          </div>\n\n          <div class=\"d-flex justify-content-start\" *ngIf=\"meta\">\n              <p>Search Result Quantity: {{meta['count']}}, cursor {{meta['cursor']}} More?  {{meta['more']}}.</p>\n          </div>\n         <!-- {{search}} - {{sheet_option}} - {{status_option}}- {{text}} -->\n\n        <!-- <button class=\"btn btn-danger\" [disabled]=\"disable_flag == 0\" (click)=\"disable()\">Test</button> -->\n    </div>\n<!--    <div><br>\n        <div class=\"form-group\">\n          <h4>Find PDF <span><i class=\"fa fa-search\" aria-hidden=\"true\"></i></span> <span style=\"color:red;\"><i class=\"fa fa-file-pdf-o\" aria-hidden=\"true\"></i></span></h4>\n          <label for=\"text-input\">Please Enter the Signature pdf name, this is id of the sheet join with the employee id number</label>\n            <input disabled type=\"text\" id=\"text-input\" class=\"form-control\" [(ngModel)]=\"text\">\n        </div>\n    </div>\n\n    <button class=\"btn btn-info\" (click)=\"searchPdf()\">Look for original pdf.!</button>\n    <button class=\"btn btn-info\" (click)=\"searchScannedPdf()\">Look for scanned pdf.!</button>\n    <div class=\"container\" *ngIf=\"boolpdfroute\">\n      <p>In case download does not start please contact a IT Agent</p>\n\n    </div><br><br> -->\n    \n    <div *ngIf=\"readyUpload\" id=\"upload_div\" class=\"\">\n        <hr>\n        <h4 class=\"row d-flex justify-content-start\">Upload Pdf File. <span style=\"color:rgb(0, 119, 255)\"><i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i></span></h4>\n        <label for=\"pdf-input\" class=\"row d-flex justify-content-start\">The File will be bound to the user selected. </label>\n        <div class=\"row d-flex justify-content-start\">\n            <input disabled type=\"text\" id=\"pdf-input\" class=\"form-control\" [(ngModel)]=\"pdfFile\" > \n        </div>\n        <div class=\"row d-flex justify-content-start file-select\" style=\"padding-top:0.5em;\">\n            <label for=\"file-upload\" class=\"btn EdgeButton EdgeButton--secondary-file EdgeButton--medium submit js-submit\"  >\n                <i class=\"fa fa-hand-o-up file-select\"></i> <span class=\"file-select\">Select File</span> \n            </label>\n            <input type=\"file\" id=\"file-upload\" (change)=\"onFileSelected($event)\" class=\"from-control\" size=\"60\" style=\"display:none;\">\n            <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryiii \" (click)=\"onUpload()\" >upload</button>\n        </div>\n\n    </div>\n\n   <!-- <button class=\"btn btn-danger\" (click)=\"test()\">Test</button> -->\n\n      <button class=\"\" (click)=\"openModal(template)\" id=\"modal\" style=\"display:none\"></button>\n  \n    <ng-template #template>\n      <div class=\"modal-body text-center alert\" >\n        <p id=\"errorMessage\">!</p>\n        <button class=\"btn btn-info\" (click)=\"modalRef.hide()\">Ok</button><br>\n    </div>\n    \n    </ng-template >\n    \n</div>\n\n\n<!-- style=\"border:1px solid #ccc; display:inline-block; cursor:pointer;\" -->"

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
                Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["d" /* trigger */])('slideInOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["c" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["b" /* style */])({ transform: 'translateY(-100%)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["a" /* animate */])('200ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["b" /* style */])({ transform: 'translateY(0%)' }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["c" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["a" /* animate */])('200ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_7__angular_animations__["b" /* style */])({ transform: 'translateY(-100%)' }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__create_signature_sheet_search_employee_service__["a" /* SearchEmployeeService */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_modal__["a" /* BsModalService */]])
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
exports.push([module.i, "/*h1 { color: #7c795d; font-family: 'Trocchi', serif; font-size: 45px; font-weight: normal; line-height: 48px; margin: 0; }\r\n\r\np { color: #4c4a37; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh5 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh2 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh3 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh4 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }¨*/\r\n\r\n\r\n.EdgeButton:hover{\r\n    background-color: #E0F8FF;\r\n}\r\n\r\n\r\n.EdgeButton--secondary-file:hover{\r\n    background-color: #afe0ff;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryii:hover{\r\n    background-color: #E0F8FF;\r\n    color: #1da1f2;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryiii:hover{\r\n    background-color: #DBFCE8;\r\n    /*color: #69C68E;*/\r\n}\r\n\r\n\r\n.EdgeButton--secondaryiv:hover{\r\n    background-color: #ffc6c6;\r\n    /*color: #69C68E;*/\r\n}\r\n\r\n\r\n.EdgeButton--secondaryiv {\r\n    background-color: #fff;\r\n    border: 1px solid #db4646;\r\n    color: #db4646;\r\n \r\n}\r\n\r\n\r\n/*input {\r\n    -moz-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    margin-top: 12px;\r\n    width: 100%;\r\n} */\r\n\r\n\r\n.EdgeButton--secondary {\r\n    background-color: #fff;\r\n    border: 1px solid #1da1f2;\r\n    color: #1da1f2;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryii {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n \r\n}\r\n\r\n\r\n.EdgeButton--secondaryiii {\r\n    background-color: #fff;\r\n    border: 1px solid #69C68E;\r\n    color: #69C68E;\r\n \r\n}\r\n\r\n\r\n.EdgeButton--secondary-file {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n}\r\n\r\n\r\n.EdgeButton--medium {\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n}\r\n\r\n\r\n/*.EdgeButton, .EdgeButton:visited {\r\n    border-radius: 100px;\r\n    box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}*/\r\n\r\n\r\n.EdgeButton {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    line-height: 25px;\r\n    padding: 8px 18px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n\r\n.EdgeButton--secondaryiii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n\r\ntextarea, div[contenteditable], .t1-select {\r\n    display: inline-block;\r\n    width: 210px;\r\n    padding: 4px;\r\n    margin: 0;\r\n    outline: 0;\r\n    background-color: #fff;\r\n    border: 1px solid #e6ecf0;\r\n    border-radius: 3px;\r\n}\r\n\r\n\r\nh1 {\r\n    display: block;\r\n    font-size: 2em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nh2 {\r\n    display: block;\r\n    font-size: 1.9em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nh3 {\r\n    display: block;\r\n    font-size: 1.8em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nh4 {\r\n    display: block;\r\n    font-size: 1.7em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nh5 {\r\n    display: block;\r\n    font-size: 1.5em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\nbody.ms-windows {\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n\r\n.table-head {\r\n    background-color: rgb(35, 47, 62);\r\n    border-color: rgb(35, 47, 62);\r\n    color: #fff;\r\n}\r\n\r\n\r\np, label, option{\r\n    font-size: 1em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n  }\r\n\r\n\r\noption, select{\r\n    font-size: 0.9em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/update-signature-sheet/updatesheet/updatesheet.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\" *ngIf=\"privilege\">\n    <h1 class=\"my-4\">Update Signature Sheet <span style=\"color:red;\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"(click)=\"siteInformation()\"></i></span><hr>\n\n    </h1>\n        <div class=\"row\" *ngIf=\"siteInfo\">\n\n                <!-- Blog Entries Column -->\n                <div class=\"col-md-8\">\n        \n        \n                  <!-- Blog Post -->\n                  <div class=\"card mb-4\">\n                    <img class=\"card-img-top\" [src]=\"fullImagePath\" alt=\"Card image cap\">\n                    <div class=\"card-body\">\n                      <h2 class=\"card-title\">Some statements</h2>\n                      <p class=\"card-text\">\"Once created the initial sheet we can update in this module, removing products from the sheet and adding new if we want this will generate a new sheet and the previous one will become part of the historical\"</p>\n                      <button class=\"btn btn-info btn-sm\" (click)=\"start()\">Let's Get Started!</button>\n                    </div>\n                    <div class=\"card-footer text-muted\">\n                      Laureate International Universities\n                    </div>\n                  </div>\n        \n                </div>\n        \n                <!-- Sidebar Widgets Column -->\n                <div class=\"col-md-4\">\n        \n\n                  <br><br><br>\n        \n                  <!-- Categories Widget -->\n                  <div class=\"card my-4\">\n                    <h5 class=\"card-header\">Reminder</h5>\n                    <div class=\"card-body\">\n                      <div class=\"\">\n                        <p>The processes of adding and removing are independent, it is not necessary to do both but at least one</p>\n                      </div>\n                    </div>\n                  </div>\n        \n                  <!-- Side Widget -->\n                  <div class=\"card my-4\">\n                    <h5 class=\"card-header\">Loan Policy</h5>\n                    <div class=\"card-body\">\n                            The policy should also address postorigination activities, such as ongoing monitoring and credit administration, including postorigination monitoring of loan covenants, obtaining financial information, and assessing the borrower's ongoing ability to service the debt and ultimately repay the loan.\n                    </div>\n                  </div>\n        \n                </div>\n        \n              </div>\n    <div>\n       <!-- <h3>Update Signature Sheet <span style=\"color:yellowgreen\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></span></h3>\n        <p>\"Offboarding is understood here as a software-supported process in personnel and identity management, which ensures the safe deactivation and documentation of the access rights of employees who have been relieved, thus preventing data misuse and theft. As part of computer security, the process will also ensure that access privileges are revoked when a person leaves, and may also cover other issues such as the recovery of equipment, keys and credit cards to ensure that security integrity be maintained.\"</p>\n         <br>\n        <div class=\"form-group\"> \n            <button class=\"btn btn-info btn-sm\" (click)=\"start()\">Let's Get Started!</button>\n        </div> -->\n    </div>\n    <div class=\" col-6\" *ngIf=\"boolfirst\">\n        <h3> Select a type <span><i class=\"fa fa-calendar\" aria-hidden=\"true\" style=\"color:red;\"></i></span></h3>\n        <div class=\"form-group\">\n            <select class=\"form-control\" [(ngModel)]=\"option\">\n            <!--        <option value=\"2\">Offboarding</option> -->\n                    <option value=\"4\" selected>update</option>\n            </select>\n        </div>\n        <!-- <div class=\"form-group\">\n            <input type=\"Date\" class=\"form-control\" [(ngModel)]=\"date\">\n        </div> -->\n        <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\" (click)=\"validate()\">Continue</button>\n    </div>\n    <ul class=\"list-group\" *ngFor=\"let item of selectemploye\">\n        <li class=\"list-group-item list-group-item-success \">{{item.FIRST_NAME}}  {{item.LAST_NAME}} - {{item.EMAIL}} - {{item.EMPLOYEE_ID}}</li>\n      \n      </ul>\n\n\n    <div *ngIf=\"boolemployee\">\n         <h3>Second-Step select the employee <span><i class=\"fa fa-users\" aria-hidden=\"true\"></i></span></h3>\n          <!-- <ul class=\"list-group\" *ngFor=\"let item of selectemploye\">{{item.FIRST_NAME}} - {{item.LAST_NAME}} - {{item.EMAIL}} </ul> -->\n  \n  \n  \n         <app-employee-table (employeevent)=\"selectemploye=$event\"></app-employee-table>\n         <div class=\"d-flex justify-content-center\">\n                  <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryiii EdgeButton--medium submit js-submit\" (click)=\"backemployee()\">Go Back</button><h4>-</h4>\n                  <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryiii EdgeButton--medium submit js-submit\" (click)=\"continueemployee(procesValidationtemplate)\">Continue</button>\n         </div>    \n    </div >\n       \n    <div *ngIf=\"currentproducts\">\n        <app-user-products [parentData]=\"selectemploye\" (productremovesevent)=\"productremovesevent=$event\" (currentproductrevent)=\"selectproducts=$event\"></app-user-products>\n         <div class=\"d-flex justify-content-center\">\n            <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryiii EdgeButton--medium submit js-submit\" (click)=\"backemployee()\" >Go Back</button><h4>-</h4>\n            <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryiii EdgeButton--medium submit js-submit\" (click)=\"continueprods()\">Add Product</button> \n        </div> \n    </div>\n\n    <div *ngIf=\"boolproducts\" >\n        <app-product-list (productsevent)=\"productsevent=$event\"></app-product-list>\n        <!--<button class=\"btn btn-info \" (click)=\"backproducts()\">Go Back</button> -->\n        <div class=\"d-flex justify-content-center\">\n                <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryiii EdgeButton--medium submit js-submit\" (click)=\"backproducts()\">Go Back</button>\n        </div>  \n    </div>\n\n    \n    <br><br><br><br>\n    \n    <div *ngIf=\"boolproducts\" class=\"d-flex justify-content-center\">\n            <!-- <button class=\"btn btn-link btn-lg\" (click)=\"createSignatureSheet()\"></button> -->\n            <button class=\"EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\" (click)=\"openModal(template)\">Save & Update Signature Sheet</button><br>\n        </div><br>\n    <div *ngIf=\"confirmation\" class=\"alert\" role=\"alert\">\n            <h4 class=\"alert-heading\">Are you sure of update this Signature Sheet?</h4>\n            <p>The information will be save and automatically download a pdf file of the sheet, press 'YES', to continue or 'No', to go back.</p>\n            <div class=\"d-flex justify-content-start\">\n                <button class=\"btn btn-info btn-sm \" (click)=\"updateSheet()\" >YES</button><p>-</p>\n                <button class=\"btn btn-info btn-sm \" (click)=\"abort()\"> NO</button>\n            </div>\n            <hr>\n            <p class=\"mb-0\">-LAUREATE IT-</p>\n        </div>\n    <!-- <button class=\"btn\" (click)=\"testAlert()\">Testbutton</button>  -->\n\n</div>\n<!-- <button (click)=\"testx()\">test</button> -->\n\n<ng-template #template>\n    <div class=\"modal-body text-center alert\">\n        <p>Are you sure of save this Signature Sheet?? <span><i class=\"fa fa-question-circle-o\" aria-hidden=\"true\"></i></span></p>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateSheet()\" [disabled]=\"disable_flag == 0\">Yes</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"abort()\" >No</button>\n        <div class=\"modal-body alert \" role=\"alert\">\n                    The information will be update and automatically create a pdf file of the sheet, press 'YES', to continue or 'No', to go back.\n        </div>\n    </div>\n    \n       \n</ng-template>\n\n<ng-template #procesValidationtemplate>\n        <div class=\"modal-body text-center alert \">\n            <p>It is not possible to Create this sheet.! <span><i class=\"fa fa-times\" aria-hidden=\"true\"></i></span></p>\n            <button class=\"btn btn-danger\" (click)=\"ok()\">Ok</button><br>\n            <div class=\"modal-body alert \" role=\"alert\">\n                    Verify that the user has an onboarding sheet, or does not have an offboarding sheet\n            </div>\n        </div>\n        \n           \n    </ng-template>\n\n"

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
exports.push([module.i, "/*h1 { color: #7c795d; font-family: 'Trocchi', serif; font-size: 45px; font-weight: normal; line-height: 48px; margin: 0; }\r\n\r\np { color: #4c4a37; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 32px; margin: 0 0 24px; }\r\n\r\nh5 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh2 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh3 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; }\r\nh4 { color: #7c795d; font-family: 'Source Sans Pro', sans-serif; font-size: 28px; font-weight: 400; line-height: 32px; margin: 0 0 24px; } */\r\n\r\n.EdgeButton:hover{\r\n    background-color: #E0F8FF;\r\n}\r\n\r\n.EdgeButton--secondary-file:hover{\r\n    background-color: #afe0ff;\r\n}\r\n\r\n.EdgeButton--secondaryii:hover{\r\n    background-color: #E0F8FF;\r\n    color: #1da1f2;\r\n}\r\n\r\n.EdgeButton--secondaryiii:hover{\r\n    background-color: #ffc6c6;\r\n    color: #db4646\r\n    /*color: #69C68E;*/\r\n}\r\n\r\n.EdgeButton--secondaryiv:hover{\r\n    background-color: #ffc6c6;\r\n    color: #db4646\r\n    /*color: #69C68E;*/\r\n}\r\n\r\n/*input {\r\n    -moz-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    margin-top: 12px;\r\n    width: 100%;\r\n} */\r\n\r\n.EdgeButton--secondary {\r\n    background-color: #fff;\r\n    border: 1px solid #1da1f2;\r\n    color: #1da1f2;\r\n}\r\n\r\n.EdgeButton--secondaryii {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n \r\n}\r\n\r\n.EdgeButton--secondaryiii {\r\n    background-color: #db4646;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n \r\n}\r\n\r\n.EdgeButton--secondaryiv {\r\n    background-color: #fff;\r\n    border: 1px solid #db4646;\r\n    color: #db4646;\r\n \r\n}\r\n\r\n.EdgeButton--secondary-file {\r\n    background-color: #1da1f2;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n}\r\n\r\n.EdgeButton--medium {\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n}\r\n\r\n/*.EdgeButton, .EdgeButton:visited {\r\n    border-radius: 100px;\r\n    box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}*/\r\n\r\n.EdgeButton {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    line-height: 25px;\r\n    padding: 8px 18px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n.EdgeButton--secondaryii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\n.EdgeButton--secondaryiii {\r\n    border-radius: 100px;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    padding: 6px 16px;\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n}\r\n\r\ntextarea, div[contenteditable], .t1-select {\r\n    display: inline-block;\r\n    width: 210px;\r\n    padding: 4px;\r\n    margin: 0;\r\n    outline: 0;\r\n    background-color: #fff;\r\n    border: 1px solid #e6ecf0;\r\n    border-radius: 3px;\r\n}\r\n\r\nh1 {\r\n    display: block;\r\n    font-size: 2em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh2 {\r\n    display: block;\r\n    font-size: 1.9em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh3 {\r\n    display: block;\r\n    font-size: 1.8em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh4 {\r\n    display: block;\r\n    font-size: 1.7em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nh5 {\r\n    display: block;\r\n    font-size: 1.5em;\r\n    -webkit-margin-before: 0.67em;\r\n            margin-block-start: 0.67em;\r\n    -webkit-margin-after: 0.67em;\r\n            margin-block-end: 0.67em;\r\n    -webkit-margin-start: 0px;\r\n       -moz-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n       -moz-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\nbody.ms-windows {\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n}\r\n\r\n.table-head {\r\n    background-color: #343a40;\r\n    border-color: #343a40;\r\n    color: #fff;\r\n}\r\n\r\np, label, option{\r\n    font-size: 1em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n  }\r\n\r\noption, select{\r\n    font-size: 0.9em;\r\n    font-family: \"Segoe UI\",Arial,sans-serif;\r\n    color: rgb(101, 119, 134);\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/update-signature-sheet/user-products/user-products.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n    <h3>Current products:</h3>\n\n    <div class=\"\">\n          <table class=\"table table-hover table-bordered\">\n              <thead class=\"table-head\">\n                <tr class=\"\">\n                    <th scope=\"col\">Sheet Id</th>\n                  <th scope=\"col\">CI Name</th>\n                  <!-- <th scope=\"col\">CI Type</th> -->\n                  <th scope=\"col\">Tag</th>\n                  <th scope=\"col\">Serial N°</th>\n                  <th scope=\"col\">Model</th>\n                  <th scope=\"col\">CIID</th>\n                  <th scope=\"col\">Remove?</th>\n                  \n                </tr>\n              </thead>\n              <tbody *ngFor=\"let product of currentproducts\">\n            \n                <tr class=\"select\">\n                  <th scope=\"row\">{{product.id_signature}}</th>\n                  <td>{{product.product_name}}</td>\n                 <!-- <td>{{product.CI_TYPE}}</td> -->\n                  <td>{{product.id_product}}</td>\n                  <td>{{product.serial_number}}</td>\n                  <td>{{product.model}}</td>\n                  <td>{{product.ciid}}</td>\n                  <td><button class=\"btn btn-sm EdgeButton EdgeButton--secondaryiv EdgeButton--medium submit js-submit\" (click)=\"onRemove(product)\" >Rmv</button></td>\n                </tr>\n            \n              </tbody>\n            \n            </table>\n      </div>\n      \n      <div class=\"container\">\n          <h5>Items to remove</h5>\n          <div class=\"container\">\n            <ul class=\"list-group\" *ngFor=\"let product of selectproducts\">\n                <li class=\"list-group-item list-group-item-danger \">Name: {{product.product_name}} - Code: {{product.id_product}} - Serial Number: {{product.serial_number}} - CIID: {{product.ciid}}</li>\n            \n              </ul>\n              \n        </div>\n        <br>\n        <div class=\"container d-flex justify-content-end\">\n            <button type=\"button\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryii EdgeButton--medium submit js-submit\" (click)=\"rollback()\"> <- Rollback</button> -\n            <button type=\"button\" class=\"btn btn-sm EdgeButton EdgeButton--secondaryiii EdgeButton--medium submit js-submit\" (click)=\"noChanges()\"> Remove Nothing</button>\n        </div>\n        <br>\n      </div> \n      \n</div>\n"

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

module.exports = "<br>\n<div class=\"container\" *ngIf=\"privilege\">\n    \n    <div>\n        <h1>Roles-Privileges Admin <span style=\"color:orangered;\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i></span></h1><hr>\n        <p>\"Users, roles and permissions are key components of website security, and they're of major importance in Drupal as well. Users are the people, roles are their functions, and permissions define what authorizations those functions have. Setting these up incorrectly can compromise your website's security.\"</p>\n        <br>\n        <div class=\"form-group\"> \n            <button class=\"EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\" (click)=\"start()\">Assign Role to User</button>\n            <button class=\"EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\" (click)=\"createRole()\">Create Role!</button>\n            <button class=\"EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\" (click)=\"deleteRole()\">Delete User Privilleges</button>\n            <button class=\"\" (click)=\"openErrorTemplate(errortemplate)\" id=\"modalError\" style=\"display:none;\"></button>\n        </div>\n    </div>\n    \n    <ul class=\"list-group\" *ngFor=\"let item of selectemploye\">\n        <li class=\"list-group-item list-group-item-success \">{{item.FIRST_NAME}}  {{item.LAST_NAME}} - {{item.EMAIL}}</li>\n        \n    </ul>\n    \n    <div *ngIf=\"boolemployee\">\n        <h3>Select the employee</h3>\n        <app-employee-table (employeevent)=\"selectemploye=$event\"></app-employee-table>\n        <div class=\"d-flex justify-content-center\">\n            <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryiii EdgeButton--medium submit js-submit\" (click)=\"backemployee()\">Go Back</button><h4>-</h4>\n            <button class=\"btn btn-sm EdgeButton EdgeButton--secondaryiii EdgeButton--medium submit js-submit\" (click)=\"continueroles()\">Continue</button>\n        </div>\n        \n        \n    </div>\n    <br>\n    \n    <div class=\"\" *ngIf=\"boolDelete\">\n        <div>\n            <h3>Remove Privileges <span style=\"color:red\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></span></h3>\n            <br>\n            <ul class=\"list-group\" *ngFor=\"let item of selectedUser\">\n                <li class=\"list-group-item list-group-item-success \">User : {{item.ROLE}} - {{item.USER_NAME}} - {{item.ID}}</li>\n                  \n            </ul>\n            <br>\n            <table class=\"table table-hover table-bordered\">\n                    <thead class=\"table-head\">\n                      <tr class=\"\">\n                        <th scope=\"col\">User ID</th>\n                        <th scope=\"col\">User Name</th>\n                        <th scope=\"col\">Role</th>\n                        <th scope=\"col\">select</th>\n                       <!-- <th scope=\"col\">Status</th>\n                        <th scope=\"col\">Last?</th> -->\n                        \n                      </tr>\n                    </thead>\n                    <tbody *ngFor=\"let product of users2\">\n                  \n                      <tr class=\"select\">\n                        <th scope=\"row\">{{product.id}}</th>\n                        <td>{{product.name}}</td>\n                        <td>{{product.rol}}</td>\n                        <td><button class=\"btn btn-sm EdgeButton EdgeButton--secondaryiii EdgeButton--medium submit js-submit\" (click)=\"onSelect(product)\" >select</button></td>\n                      </tr>\n                  \n                    </tbody>\n                  \n            </table>\n\n        </div>\n        <br>\n            <div class=\"d-flex justify-content-center\">\n                <button class=\"EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\" style=\"\" (click)=\"removeUser(DeleteUser)\">Remove</button>\n\n            </div>\n    </div>\n\n  <div *ngIf=\"boolassign\">\n    <h3 *ngFor=\"let item of selectemploye\"> Select a role for {{item.FIRST_NAME}}  {{item.LAST_NAME}}</h3>\n    <div >\n      <select  class=\"form-control\" [(ngModel)]=\"option\">\n        <option></option>\n        <option *ngFor=\"let item of roles\" [value]=\"item.id_role\" >{{item.id_role}} - {{item.role_name}}</option>\n  \n      </select>\n\n    </div>\n    <br><br>\n    <div class=\"d-flex justify-content-center\">\n        <button class=\"EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\" (click)=\"openModal(template)\">Assign Role</button>\n    </div>\n  </div>\n\n\n\n  <div class=\"\" *ngIf=\"boolroles\">\n      <h3>New Role name <span><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i></span></h3>\n    <div class=\"d-flex justify-content-center\">\n        <div class=\"col-sm-12\">\n            <input type=\"text\" class=\"form-control\" maxlength=\"25\" [(ngModel)]=\"newRoleName\">\n\n        </div>\n\n    </div><br>\n\n    <div class=\"\">\n        <h3>Drag & Drop Privileges <span><i class=\"fa fa-hand-paper-o\" aria-hidden=\"true\"></i></span></h3>\n\n       <div class=\"row\">\n        <div class=\"d-flex justify-content-conter\">\n\n                <div class=\"col-sm-12\">\n                    <div class=\"card card-outline-success mb-3\">\n                        <div class=\"card-header card-inverse card-success\">\n                            Privileges\n                            </div>\n                        <div class=\"card-block scroll-list\">\n                            <div class=\"list-group\">\n                                <li class=\"list-group-item list-group-item-action list-group-item-success\" [draggable] *ngFor=\"let item of vegetables\"\n                                    [dragClass]=\"'active'\" [dragData]=\"item\" [dragScope]=\"item.type\" [dragEnabled]=\"dragEnabled\">\n                                    {{item.name}}\n                                </li>\n                            </div>\n                        </div>\n            \n                    </div>\n            \n                </div>\n            \n                <div class=\"col-sm-12\">\n                    <div class=\"card card-outline-primary mb-3\" droppable [dragOverClass]=\"'drag-target-border'\" [dropScope]=\"['fruit', 'vegetable']\"\n                        [dragHintClass]=\"'drag-hint'\" (onDrop)=\"onAnyDrop($event)\">\n                        <div class=\"card-header card-inverse card-primary\">Selected Privileges</div>\n                        <div class=\"card-block scroll-list\">\n                            <li *ngFor=\"let item of droppedItems\" class=\"list-group-item\">{{item.name}}</li>\n                        </div>\n                    </div>\n                </div>\n            \n             <!-- kkkik!-->\n        </div>    \n\n        \n    </div>\n    <br>\n    <div class=\"d-flex justify-content-center\">\n        <button class=\"EdgeButton EdgeButton--secondary EdgeButton--medium submit js-submit\" (click)=\"openRoleModal(templateRole)\">Create Role</button> \n    </div>\n    </div>\n\n    \n    <!--  <button class=\"btn btn-danger\" (click)=\"test()\">Test</button> -->\n\n    \n</div>\n<ng-template #template>\n    <div class=\"modal-body text-center alert \">\n        <p>Are you sure to assign this role to this person? <span><i class=\"fa fa-question-circle-o\" aria-hidden=\"true\"></i></span></p>\n\n        <div class=\"modal-body alert\" role=\"alert\">\n            The following permits will be assigned press 'YES', to continue or 'No', to go back.\n        </div>\n        <div >\n            <ul class=\"list-group\" *ngFor=\"let item of privilegesxrol\">\n                <li class=\"list-group-item list-group-item-primary \">{{item.privilege}} </li>\n                  \n            </ul>\n        </div><br>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\" >Yes</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"abort()\" >No</button>\n    </div>\n\n   \n</ng-template>\n\n<ng-template #templateRole>\n    <div class=\"modal-body text-center alert \">\n        <p>Are you sure of creating this new role? <span><i class=\"fa fa-question-circle-o\" aria-hidden=\"true\"></i></span></p>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirmRolePrivileges()\" >Yes</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"abort()\" >No</button>\n    </div>\n\n   \n</ng-template>\n\n<ng-template #DeleteUser>\n        <div class=\"modal-body text-center alert \">\n            <b><p *ngFor=\"let item of selectedUser\">Delete privileges to {{item.USER_NAME}} <span style=\"color:red\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></span> </p></b>\n             <br>\n             <p>The privileges will be removed and the user will not be able to enter the system anymore. Are you sure to continue?</p>   \n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirmDeleteUser()\" >Yes</button>\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"abort()\" >No</button>\n        </div>       \n</ng-template>\n\n\n  \n<ng-template #errortemplate >\n  <div class=\"modal-body text-center alert\" >\n    <p id=\"errorMessage\">!</p>\n    <button class=\"btn btn-info\" (click)=\"modalRef.hide()\">Ok</button><br>\n</div>\n\n</ng-template >\n\n<!--\n<div class=\"modal fade\" bsModal #staticModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\"\n     tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialog-static-name\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 id=\"dialog-static-name\" class=\"modal-title pull-left\">Static modal</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"staticModal.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        This is static modal, backdrop click will not close it.\n        Click <b>&times;</b> to close modal.\n      </div>\n    </div>\n  </div>\n</div>\n\n-->"

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
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map