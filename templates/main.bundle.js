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
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
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

module.exports = "<!--The content below is only a placeholder and can be replaced.\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n\n-->\n\n<app-nav-bar></app-nav-bar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__create_signature_sheet_create_signature_sheet_module__["a" /* CreateSignatureSheetModule */],
                __WEBPACK_IMPORTED_MODULE_10__update_signature_sheet_update_signature_sheet_module__["a" /* UpdateSignatureSheetModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__create_signature_sheet_search_employee_service__["a" /* SearchEmployeeService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/create-signature-sheet/create-signature-sheet.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateSignatureSheetModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__employee_table_employee_table_component__ = __webpack_require__("../../../../../src/app/create-signature-sheet/employee-table/employee-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createsheet_createsheet_component__ = __webpack_require__("../../../../../src/app/create-signature-sheet/createsheet/createsheet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__type_type_component__ = __webpack_require__("../../../../../src/app/create-signature-sheet/type/type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_list_product_list_component__ = __webpack_require__("../../../../../src/app/create-signature-sheet/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__selected_products_selected_products_component__ = __webpack_require__("../../../../../src/app/create-signature-sheet/selected-products/selected-products.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CreateSignatureSheetModule = /** @class */ (function () {
    function CreateSignatureSheetModule() {
    }
    CreateSignatureSheetModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__employee_table_employee_table_component__["a" /* EmployeeTableComponent */],
                __WEBPACK_IMPORTED_MODULE_4__createsheet_createsheet_component__["a" /* CreatesheetComponent */],
                __WEBPACK_IMPORTED_MODULE_5__type_type_component__["a" /* TypeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__product_list_product_list_component__["a" /* ProductListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__selected_products_selected_products_component__["a" /* SelectedProductsComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__employee_table_employee_table_component__["a" /* EmployeeTableComponent */],
                __WEBPACK_IMPORTED_MODULE_4__createsheet_createsheet_component__["a" /* CreatesheetComponent */],
                __WEBPACK_IMPORTED_MODULE_5__type_type_component__["a" /* TypeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__product_list_product_list_component__["a" /* ProductListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__selected_products_selected_products_component__["a" /* SelectedProductsComponent */]
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-signature-sheet/createsheet/createsheet.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n    \n    <div>\n        <h3>OnBoarding- Loan new Signature Sheet</h3>\n        <p>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</p>\n         <br>\n        <div class=\"form-group\"> \n            <button class=\"btn btn-info btn-sm\" (click)=\"start()\">Let's Get Started!</button>\n        </div>\n    </div>\n\n\n    <div class=\" col-6\" *ngIf=\"boolfirst\">\n        <h3>First-Step select a type and date</h3>\n        <div class=\"form-group\">\n            <select class=\"form-control\" [(ngModel)]=\"option\">\n                    <option value=\"1\">OnBoarding</option>\n                    <option value=\"3\">Loan</option>\n            </select>\n        </div>\n        <div class=\"form-group\">\n            <input type=\"Date\" class=\"form-control\" [(ngModel)]=\"date\">\n        </div>\n        <button class=\"btn btn-info d-flex justify-content-center btn-sm\" (click)=\"validate()\">Continue</button>\n    </div>\n    <ul class=\"list-group\" *ngFor=\"let item of selectemploye\">\n        <li class=\"list-group-item list-group-item-success \">{{item.FIRST_NAME}}  {{item.LAST_NAME}} - {{item.EMAIL}}</li>\n      \n      </ul>\n\n    <div *ngIf=\"boolemployee\">\n        <h3>Second-Step select the employee</h3>\n        <!-- <ul class=\"list-group\" *ngFor=\"let item of selectemploye\">{{item.FIRST_NAME}} - {{item.LAST_NAME}} - {{item.EMAIL}} </ul> -->\n\n\n\n        <app-employee-table (employeevent)=\"selectemploye=$event\"></app-employee-table>\n        <div class=\"d-flex justify-content-center\">\n                <button class=\"btn btn-info btn-sm\" (click)=\"backemployee()\">Go Back</button><h4>-</h4>\n                <button class=\"btn btn-info btn-sm\" (click)=\"continueemployee()\">Continue</button>\n        </div>\n\n        \n    </div>\n    \n    <!-- <app-type></app-type> -->\n\n    <div *ngIf=\"boolproducts\" >\n        <app-product-list (productsevent)=\"productsevent=$event\"></app-product-list>\n        <!--<button class=\"btn btn-info \" (click)=\"backproducts()\">Go Back</button> -->\n        <div class=\"d-flex justify-content-center\">\n                <button class=\"btn btn-info btn-sm\" (click)=\"backproducts()\">Go Back</button>\n        </div>  \n    </div>\n    <br><br><br><br>\n    <div *ngIf=\"boolproducts\" class=\"d-flex justify-content-center\">\n        <!-- <button class=\"btn btn-link btn-lg\" (click)=\"createSignatureSheet()\"></button> -->\n        <button class=\"btn btn-primary btn-lg\" (click)=\"confirm()\">Save & Download</button><br>\n    </div>\n    <div *ngIf=\"confirmation\" class=\"alert alert-warning\" role=\"alert\">\n        <h4 class=\"alert-heading\">Are you sure of save this Signature Sheet?</h4>\n        <p>The information will be save and automatically download a pdf file of the sheet, press 'YES', to continue or 'No', to go back.</p>\n        <div class=\"d-flex justify-content-start\">\n            <button class=\"btn btn-info btn-sm \" (click)=\"insertSheet()\" >YES</button><p>-</p>\n            <button class=\"btn btn-info btn-sm \"> NO</button>\n        </div>\n        <hr>\n        <p class=\"mb-0\">-LAUREATE IT-</p>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/create-signature-sheet/createsheet/createsheet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatesheetComponent; });
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



var CreatesheetComponent = /** @class */ (function () {
    function CreatesheetComponent(httpClient, searchEmployeeService) {
        this.httpClient = httpClient;
        this.searchEmployeeService = searchEmployeeService;
        this.boolemployee = false;
        this.boolproducts = false;
        this.boolready = false;
        this.boolfirst = false;
        //data a enviar
        this.selectemploye = [];
        this.productsevent = [];
        this.confirmation = false;
    }
    CreatesheetComponent.prototype.ngOnInit = function () {
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
    CreatesheetComponent.prototype.continueemployee = function () {
        //faltan los ifs;
        this.boolemployee = false;
        this.boolproducts = true;
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
    CreatesheetComponent.prototype.insertSheet = function () {
        var x = this.selectemploye[0];
        var response;
        var l = this.productsevent.length;
        if (x && (l != 0)) {
            this.searchEmployeeService.insertSignatureSheet(this.option, x.EMPLOYEE_ID, x.FIRST_NAME, x.LAST_NAME, x.EMAIL)
                .subscribe(function (data) { return response = data; });
            //alert(response);
            alert("Response alert");
            //pendiente aun #### 
            this.createSignatureSheet(x, this.productsevent);
            alert('SIgnature sheet successfully created.!!');
        }
        else {
            alert('Make sure to select a employee and at least one Product');
        }
        window.location.href = '/newsheet';
    };
    CreatesheetComponent.prototype.createSignatureSheet = function (x, y) {
        var user = this.selectemploye[0];
        var response = this.searchEmployeeService.saveRelationships(x, y);
        //alert(response);
    };
    CreatesheetComponent.prototype.confirm = function () {
        this.confirmation = true;
    };
    CreatesheetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-createsheet',
            template: __webpack_require__("../../../../../src/app/create-signature-sheet/createsheet/createsheet.component.html"),
            styles: [__webpack_require__("../../../../../src/app/create-signature-sheet/createsheet/createsheet.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__search_employee_service__["a" /* SearchEmployeeService */]])
    ], CreatesheetComponent);
    return CreatesheetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/create-signature-sheet/employee-table/employee-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".select :hover{\r\n    background-color: rgb(168, 213, 235);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-signature-sheet/employee-table/employee-table.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n      \n \n<br><div  class=\"\">\n  <!-- <h4>Search the Employee</h4> -->\n  <form class=\"form-inline d-flex justify-content-end\">\n    <div class=\"form-group\">\n        <input type=\"text\" placeholder=\"Search\" class=\"form-control\" (keyup)=\"searchEmployee($event)\">\n        <button class=\"btn btn-info\" (click)=\"find()\">Find Employee</button><br>\n\n    </div>\n\n  </form>\n</div><br>\n<table class=\"table\">\n  <thead class=\"thead-dark\">\n    <tr class=\"\">\n        <th scope=\"col\">Id</th>\n      <th scope=\"col\">Employeeid</th>\n      <th scope=\"col\">Firstname</th>\n      <th scope=\"col\">Last name</th>\n      <th scope=\"col\">e-mail</th>\n      <th scope=\"col\">Department</th>\n      <th scope=\"col\">Site</th>\n\n      <th scope=\"col\">Select</th>\n      \n    </tr>\n  </thead>\n  <tbody *ngFor=\"let employ of employees\">\n\n    <tr class=\"select\">\n      <th scope=\"row\">{{employ.ID}}</th>\n      <td>{{employ.EMPLOYEE_ID}}</td>\n      <td>{{employ.FIRST_NAME}}</td>\n      <td>{{employ.LAST_NAME}}</td>\n      <td>{{employ.EMAIL}}</td>\n      <td>{{employ.DEPARTMENT}}</td>\n      <td>{{employ.SITE}} </td>\n\n      <td><button class=\"btn btn-primary btn-sm\" (click)=\"onSelect(employ)\">Select</button></td>\n    </tr>\n\n  </tbody>\n\n</table>\n  <div class=\"d-flex justify-content-center\">\n      <button class=\"btn btn-link\" *ngIf=\"showpreview\" (click)=\"preview()\">Preview</button>\n      <button class=\"btn btn-link\" (click)=\"searchEmployees()\" *ngIf=\"shownext\">Next</button>\n  </div>\n  <div class=\"d-flex justify-content-start\" *ngIf=\"showmeta\">\n      <p>Search Result Quantity: {{count}}, cursor {{cursor}} More?  {{more}}.</p>\n  </div>\n\n<!-- <button (click)=\"getEmployees()\" class=\"btn\">Employees</button> -->\n\n</div>\n\n\n<!--\n<br>\n<div>\n    <input type=\"text\" class=\"form-control col-3\" placeholder=\"Search \" id=\"search\">\n</div>\n\n\n\n </div>\n-->\n"

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
        this.employeevent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        //this.url = 'http://127.0.0.1:5000/api/v1/assetusersearch?page='+this.cursor + '&limit=10&text=' + this.search;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], EmployeeTableComponent.prototype, "employeevent", void 0);
    EmployeeTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-signature-sheet/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" container-fluid\">\n    <h3>Select the products</h3>\n  <div class=\"\">\n    <br><div  class=\"d-flex justify-content-end\">\n        <form class=\"form-inline\">\n          <div class=\"form-group\">\n              <input type=\"text\" placeholder=\"Search\" class=\"form-control\" (keyup)=\"textproduct($event)\">\n              <button class=\"btn btn-info\" (click)=\"find()\">Find Products</button><br>\n      \n          </div>\n      \n        </form>\n      </div><br>\n      \n      <table class=\"table\">\n          <thead class=\"thead-dark\">\n            <tr class=\"\">\n                <th scope=\"col\">Id</th>\n              <th scope=\"col\">CI Name</th>\n              <th scope=\"col\">CI Type</th>\n              <th scope=\"col\">Product Code</th>\n              <th scope=\"col\">Serial N°</th>\n              <th scope=\"col\">Model</th>\n              <th scope=\"col\">State</th>\n              <th scope=\"col\"></th>\n              <th scope=\"col\"></th>\n              \n            </tr>\n          </thead>\n          <tbody *ngFor=\"let product of allProducts\">\n        \n            <tr class=\"select\">\n              <th scope=\"row\">{{product.ID}}</th>\n              <td>{{product.CI_NAME}}</td>\n              <td>{{product.CI_TYPE}}</td>\n              <td>{{product.PRODUCT_CODE}}</td>\n              <td>{{product.SERIAL_NUMBER}}</td>\n              <td>{{product.MODEL}}</td>\n              <td>{{product.STATE}}</td>\n              <td><button class=\"btn btn-primary btn-sm\" (click)=\"onSelect(product)\">Add</button></td>\n              <td><button class=\"btn btn-danger btn-sm\" (click)=\"onRemove(product)\" >Rmv</button></td>\n            </tr>\n        \n          </tbody>\n        \n        </table>\n        <div class=\"d-flex justify-content-center\">\n            <button class=\"btn btn-link\" *ngIf=\"showpreview\" (click)=\"preview()\">Preview</button>\n            <button class=\"btn btn-link\" (click)=\"searchProducts()\" *ngIf=\"shownext\">Next</button>\n        </div>\n        <div class=\"d-flex justify-content-start\" *ngIf=\"showmeta\">\n            <p>Search Result Quantity: {{count}}, cursor {{cursor}} More?  {{more}}.</p>\n        </div>\n  </div>\n\n  <div *ngIf=\"bool\">\n      <!--   <app-list [parentData]=\"oneItem\"></app-list> -->\n      <app-selected-products [parentData]=\"selectproducts\"></app-selected-products>\n  </div>\n\n</div>\n"

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
        //public empref: any = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
        this.ref = [];
        this.selectproducts = [];
        this.productsevent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.var = 2;
        //public max;
        //public min;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ProductListComponent.prototype, "productsevent", void 0);
    ProductListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
    }
    SearchEmployeeService.prototype.getTest = function () {
        return "Hello service";
    };
    SearchEmployeeService.prototype.searchEmployees = function (curso, text) {
        //this.url = 'http://127.0.0.1:5000/api/v1/assetusersearch?page='+this.cursor + '&limit=10&text=' + this.search;
        this.url = "http://127.0.0.1:5000/api/v1/assetusersearch?page=" + curso + "&limit=10&text=" + text;
        return this.httpClient.get(this.url);
        //alert(this.url);
        //this.httpClient.get<elementos>(this.url).subscribe((data) => this.data = data.query );
        //alert(this.data);
        //return this.data;
        /*   .subscribe(
             (data) => {
               this.data = data;
               this.employees = data.query;
               this.answer[0] = data.query;
       
               this.meta = data.meta;
               this.answer[1] = data.meta;
       
               this.count = this.meta.count;
               this.cursor = this.meta.cursor;
               this.more = this.meta.more;
               this.showmeta = true;
       
               //console.log(this.employees);
       
               if(this.more){
                 this.shownext = true;
               }else{
                 this.shownext = false;
               }
       
               if(this.cursor == 10){
                 this.showpreview = false
               }
               else{
                 this.showpreview = true;
               }
               //alert( this.cursor );
               //let answer: any = [];
               //this.answer[0] = this.employees;
               //this.answer[1] = this.meta;
               this.answer[2] = this.shownext;
               this.answer[3] = this.showpreview;
               this.answer[4] = this.showmeta;
               this.answer[5] = this.count;
               this.answer[6] = this.cursor;
               this.answer[7] = this.more;
               console.log(this.employees);
               
               
              }
              
             
              )
       
       
              console.log(this.meta);
              return (this.answer);
              //return(this.employees)*/
    };
    SearchEmployeeService.prototype.insertSignatureSheet = function (option, id, f_name, l_name, email) {
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
    SearchEmployeeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
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
exports.push([module.i, ".col{\r\n    height: 2em;\r\n    width: 3em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-signature-sheet/selected-products/selected-products.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"\">\n    <ul class=\"list-group\" *ngFor=\"let product of parentData\">\n        <li class=\"list-group-item list-group-item-success \">Name: {{product.CI_NAME}} - Code: {{product.PRODUCT_CODE}} - Serial Number: {{product.SERIAL_NUMBER}} - CI Type: {{product.CI_TYPE}}</li>\n      \n      </ul>\n</div>\n"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SelectedProductsComponent.prototype, "parentData", void 0);
    SelectedProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-signature-sheet/type/type.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  \n   <!--  <button (click)=\"getTypes()\">Types</button>\n  \n  <table class=\"table table-bordered\">\n    <thead class=\"thead-light\">\n      <tr class=\"\">\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">Address</th>\n        <th scope=\"col\">Phone</th>\n        <th scope=\"col\">Terms</th>\n        <th scope=\"col\">Select</th>\n      </tr>\n    </thead>\n    <tbody *ngFor=\"let type of types\">\n  \n      <tr class=\"select\">\n        <th scope=\"row\">{{type.name}}</th>\n        <td>{{type.address}}</td>\n        <td>{{type.phone}}</td>\n        <td>{{type.terms}}</td>\n        <td><button class=\"btn btn-success\">Select</button></td>\n      </tr>\n  \n    </tbody>\n  </table> -->\n\n  <h3>Select a Type</h3>\n    <div class=\"col-5\">\n        <button (click)=\"getTypes()\" class=\"btn btn-info\">Get Types</button>\n        <select class=\"form-control\" [(ngModel)]=\"option\" >\n              <option *ngFor=\"let type of types\" value=\"{{type.id_type}}\" >{{type.name}}</option>\n        \n        </select>\n    </div>\n    <button (click)=\"verify()\">v</button>\n \n  \n  </div>"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-type',
            template: __webpack_require__("../../../../../src/app/create-signature-sheet/type/type.component.html"),
            styles: [__webpack_require__("../../../../../src/app/create-signature-sheet/type/type.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TypeComponent);
    return TypeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer{\r\n    background-color: #1a1a1a;\r\n    position:fixed;\r\n    left:0px;\r\n    bottom:0px;\r\n    height:15;\r\n    width:100%;\r\n    padding: 5px;\r\n}\r\n\r\n.element a{\r\n    color: #f8f4f4\r\n}\r\n\r\n.element {\r\n    color: #f8f4f4\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br><br><br><br><br><br><br><br><br><br>\n<div class=\"footer\">\n  <footer class=\"mainfooter\" role=\"contentinfo\">\n    <div class=\"footer-top p-y-2\">\n      <div class=\"container-fluid\">\n        \n      </div>\n    </div>\n    <div class=\"footer-middle\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3 col-sm-6\">\n          <!--Column1-->\n          <div class=\"footer-pad\">\n            <h4 class=\"element\">Direccion</h4>\n            <address>\n        <ul class=\"list-unstyled\">\n          <li class=\"element\">\n                      Guanacaste<br>\n            Calle 6152<br>\n            4568<br>\n            735<br>\n          </li>\n          <li class=\"element\">\n            Phone: 0\n          </li>\n        </ul>\n      </address>\n          </div>\n        </div>\n        <div class=\"col-md-3 col-sm-6\">\n          <!--Column1-->\n          <div class=\"footer-pad\">\n            <h4 class=\"element\" >Servicios</h4>\n            <ul class=\"list-unstyled\">\n              <li class=\"element\"><a routerLink=\"#\"></a></li>\n              <li class=\"element\"><a routerLink=\"#\">centro de pago</a></li>\n              <li class=\"element\"><a routerLink=\"#\">Directorio de contacto</a></li>\n              <li class=\"element\"><a routerLink=\"#\">Solicitudes</a></li>\n              <li class=\"element\"><a routerLink=\"#\">Noticias</a></li>\n              <li class=\"element\"><a routerLink=\"#\">FAQs</a></li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"col-md-3 col-sm-6\">\n          <!--Column1-->\n          <div class=\"footer-pad\">\n            <h4 class=\"element\">Informacion del Sitio</h4>\n            <ul class=\"list-unstyled\">\n              <li class=\"element\"><a routerLink=\"#\">Tutorial del Sitio</a></li>\n              <li class=\"element\"><a routerLink=\"#\">Accesibilidad</a></li>\n              <li class=\"element\"><a routerLink=\"#\">Informacion</a></li>\n              <li class=\"element\"><a routerLink=\"#\">Politicas de privacidad</a></li>\n              <li class=\"element\"><a routerLink=\"#\">FAQs</a></li>\n              <li class=\"element\"><a routerLink=\"#\">Contactanos</a></li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"col-md-3 col-sm-6\">\n          <!--Column1-->\n          <div class=\"footer-pad\">\n            <h4 class=\"element\" >Departamentos </h4>\n            <ul class=\"list-unstyled\">\n              <li class=\"element\"><a routerLink=\"#\">Reacreaciones</a></li>\n              <li class=\"element\"><a routerLink=\"#\">Trabajadores publicos</a></li>\n              <li class=\"element\"><a routerLink=\"#\">Seguridad</a></li>\n              <li class=\"element\"><a routerLink=\"#\">Soporte</a></li>\n              <li class=\"element\"><a routerLink=\"#\">LLamanos</a></li>\n              <li class=\"element\">\n                <a routerLink=\"#\"></a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    </div>\n    <div class=\"footer-bottom\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <!--Footer Bottom-->\n            <p class=\"text-xs-center element\">&copy; Copyright 2017 - Tegucigalpa City.  All rights reserved.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n    \n</div> "

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-custom {\r\n    background-color: #ba4a00;\r\n    height: 4.5em;\r\n}\r\n\r\n/* change the brand and text color */\r\n\r\n.navbar-custom .navbar-brand,\r\n.navbar-custom .navbar-text {\r\n    color: rgba(255,255,255,.8);\r\n}\r\n\r\n/* change the link color */\r\n\r\n.navbar-custom .navbar-nav .nav-link {\r\n    color: rgba(255,255,255,.5);\r\n}\r\n\r\n/* change the color of active or hovered links */\r\n\r\n.navbar-custom .nav-item.active .nav-link,\r\n.navbar-custom .nav-item:hover .nav-link {\r\n    color: #140101;\r\n}\r\n\r\n/* for dropdown only - change the color of droodown */\r\n\r\n.navbar-custom .dropdown-menu {\r\n    background-color: #ff5500;\r\n}\r\n\r\n.navbar-custom .dropdown-item {\r\n    color: #ffffff;\r\n}\r\n\r\n.navbar-custom .dropdown-item:hover,\r\n.navbar-custom .dropdown-item:focus {\r\n    color: #333333;\r\n    background-color: rgba(255,255,255,.5);\r\n}\r\n\r\n.nav-title{\r\n    font-size: 1.5em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-custom\">\n  <a routerLink=\"/\" class=\"navbar-brand nav-title\">IT Inventory</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCustom\">\n      <i class=\"fa fa-bars fa-lg py-1 text-white\"></i>\n  </button>\n  <div class=\"navbar-collapse collapse\" id=\"navbarCustom\">\n      <ul class=\"navbar-nav\">\n          <li class=\"nav-item active\">\n              <a class=\"nav-link\" routerLink=\"#\">Home</a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"newsheet\">Create Signature Sheet</a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"#\">Update Signature Sheet</a>\n          </li>\n          <li class=\"nav-item dropdown\">\n              <a class=\"nav-link dropdown-toggle\" routerLink=\"#\" id=\"navbarDropdown\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                Dropdown\n              </a>\n              <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                  <a class=\"dropdown-item\" href=\"#\">Action</a>\n                  <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                  <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n              </div>\n          </li>\n      </ul>\n      <span>logo</span>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
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

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav-bar',
            template: __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UpdateSignatureSheetModule = /** @class */ (function () {
    function UpdateSignatureSheetModule() {
    }
    UpdateSignatureSheetModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__updatesheet_updatesheet_component__["a" /* UpdatesheetComponent */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__updatesheet_updatesheet_component__["a" /* UpdatesheetComponent */],
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/update-signature-sheet/updatesheet/updatesheet.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  updatesheet works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/update-signature-sheet/updatesheet/updatesheet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatesheetComponent; });
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

var UpdatesheetComponent = /** @class */ (function () {
    function UpdatesheetComponent() {
    }
    UpdatesheetComponent.prototype.ngOnInit = function () {
    };
    UpdatesheetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-updatesheet',
            template: __webpack_require__("../../../../../src/app/update-signature-sheet/updatesheet/updatesheet.component.html"),
            styles: [__webpack_require__("../../../../../src/app/update-signature-sheet/updatesheet/updatesheet.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UpdatesheetComponent);
    return UpdatesheetComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map