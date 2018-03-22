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

module.exports = "\r\n\r\n<app-nav-bar></app-nav-bar>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__share_module_share_module_module__ = __webpack_require__("../../../../../src/app/share-module/share-module.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pdf_pdf_module_pdf_module_module__ = __webpack_require__("../../../../../src/app/pdf/pdf-module/pdf-module.module.ts");
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
                __WEBPACK_IMPORTED_MODULE_10__update_signature_sheet_update_signature_sheet_module__["a" /* UpdateSignatureSheetModule */],
                __WEBPACK_IMPORTED_MODULE_11__share_module_share_module_module__["a" /* ShareModuleModule */],
                __WEBPACK_IMPORTED_MODULE_12__pdf_pdf_module_pdf_module_module__["a" /* PdfModuleModule */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createsheet_createsheet_component__ = __webpack_require__("../../../../../src/app/create-signature-sheet/createsheet/createsheet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__type_type_component__ = __webpack_require__("../../../../../src/app/create-signature-sheet/type/type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__share_module_share_module_module__ = __webpack_require__("../../../../../src/app/share-module/share-module.module.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__share_module_share_module_module__["a" /* ShareModuleModule */]
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-signature-sheet/createsheet/createsheet.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\">\r\n    \r\n    <div>\r\n        <h3>OnBoarding- Loan new Signature Sheet</h3>\r\n        <p>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</p>\r\n         <br>\r\n        <div class=\"form-group\"> \r\n            <button class=\"btn btn-info btn-sm\" (click)=\"start()\">Let's Get Started!</button>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\" col-6\" *ngIf=\"boolfirst\">\r\n        <h3>First-Step select a type and date</h3>\r\n        <div class=\"form-group\">\r\n            <select class=\"form-control\" [(ngModel)]=\"option\">\r\n                    <option value=\"1\">OnBoarding</option>\r\n                    <option value=\"3\">Loan</option>\r\n            </select>\r\n    </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"Date\" class=\"form-control\" [(ngModel)]=\"date\">\r\n        </div>\r\n        <button class=\"btn btn-info d-flex justify-content-center btn-sm\" (click)=\"validate()\">Continue</button>\r\n    </div>\r\n    <ul class=\"list-group\" *ngFor=\"let item of selectemploye\">\r\n        <li class=\"list-group-item list-group-item-success \">{{item.FIRST_NAME}}  {{item.LAST_NAME}} - {{item.EMAIL}}</li>\r\n      \r\n      </ul>\r\n\r\n    <div *ngIf=\"boolemployee\">\r\n        <h3>Second-Step select the employee</h3>\r\n        <!-- <ul class=\"list-group\" *ngFor=\"let item of selectemploye\">{{item.FIRST_NAME}} - {{item.LAST_NAME}} - {{item.EMAIL}} </ul> -->\r\n\r\n\r\n\r\n        <app-employee-table (employeevent)=\"selectemploye=$event\"></app-employee-table>\r\n        <div class=\"d-flex justify-content-center\">\r\n                <button class=\"btn btn-info btn-sm\" (click)=\"backemployee()\">Go Back</button><h4>-</h4>\r\n                <button class=\"btn btn-info btn-sm\" (click)=\"continueemployee()\">Continue</button>\r\n        </div>\r\n\r\n        \r\n    </div>\r\n    \r\n    <!-- <app-type></app-type> -->\r\n\r\n    <div *ngIf=\"boolproducts\" >\r\n        <app-product-list (productsevent)=\"productsevent=$event\"></app-product-list>\r\n        <!--<button class=\"btn btn-info \" (click)=\"backproducts()\">Go Back</button> -->\r\n        <div class=\"d-flex justify-content-center\">\r\n                <button class=\"btn btn-info btn-sm\" (click)=\"backproducts()\">Go Back</button>\r\n        </div>  \r\n    </div>\r\n    <br><br><br><br>\r\n    <div *ngIf=\"boolproducts\" class=\"d-flex justify-content-center\">\r\n        <!-- <button class=\"btn btn-link btn-lg\" (click)=\"createSignatureSheet()\"></button> -->\r\n        <button class=\"btn btn-primary btn-lg\" (click)=\"confirm()\">Save & Download</button><br>\r\n    </div>\r\n    <div *ngIf=\"confirmation\" class=\"alert alert-warning\" role=\"alert\">\r\n        <h4 class=\"alert-heading\">Are you sure of save this Signature Sheet?</h4>\r\n        <p>The information will be save and automatically download a pdf file of the sheet, press 'YES', to continue or 'No', to go back.</p>\r\n        <div class=\"d-flex justify-content-start\">\r\n            <button class=\"btn btn-info btn-sm \" (click)=\"insertSheet()\" >YES</button><p>-</p>\r\n            <button class=\"btn btn-info btn-sm \" (click)=\"abort()\"> NO</button>\r\n        </div>\r\n        <hr>\r\n        <p class=\"mb-0\">-LAUREATE IT-</p>\r\n    </div>\r\n\r\n</div>\r\n"

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
            this.searchEmployeeService.insertSignatureSheet(this.option, x.EMPLOYEE_ID, x.FIRST_NAME, x.LAST_NAME, x.EMAIL, this.date)
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
    CreatesheetComponent.prototype.abort = function () {
        window.location.href = '/newsheet';
    };
    CreatesheetComponent.prototype.testalert = function () {
        alert(this.date);
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

module.exports = "\r\n<div class=\"container-fluid\">\r\n      \r\n \r\n<br><div  class=\"\">\r\n  <!-- <h4>Search the Employee</h4> -->\r\n  <form class=\"form-inline d-flex justify-content-end\">\r\n    <div class=\"form-group\">\r\n        <input type=\"text\" placeholder=\"Search\" class=\"form-control\" (keyup)=\"searchEmployee($event)\">\r\n        <button class=\"btn btn-info\" (click)=\"find()\">Find Employee</button><br>\r\n\r\n    </div>\r\n\r\n  </form>\r\n</div><br>\r\n<table class=\"table\">\r\n  <thead class=\"thead-dark\">\r\n    <tr class=\"\">\r\n        <th scope=\"col\">Id</th>\r\n      <th scope=\"col\">Employeeid</th>\r\n      <th scope=\"col\">Firstname</th>\r\n      <th scope=\"col\">Last name</th>\r\n      <th scope=\"col\">e-mail</th>\r\n      <th scope=\"col\">Department</th>\r\n      <th scope=\"col\">Site</th>\r\n\r\n      <th scope=\"col\">Select</th>\r\n      \r\n    </tr>\r\n  </thead>\r\n  <tbody *ngFor=\"let employ of employees\">\r\n\r\n    <tr class=\"select\">\r\n      <th scope=\"row\">{{employ.ID}}</th>\r\n      <td>{{employ.EMPLOYEE_ID}}</td>\r\n      <td>{{employ.FIRST_NAME}}</td>\r\n      <td>{{employ.LAST_NAME}}</td>\r\n      <td>{{employ.EMAIL}}</td>\r\n      <td>{{employ.DEPARTMENT}}</td>\r\n      <td>{{employ.SITE}} </td>\r\n\r\n      <td><button class=\"btn btn-primary btn-sm\" (click)=\"onSelect(employ)\">Select</button></td>\r\n    </tr>\r\n\r\n  </tbody>\r\n\r\n</table>\r\n  <div class=\"d-flex justify-content-center\">\r\n      <button class=\"btn btn-link\" *ngIf=\"showpreview\" (click)=\"preview()\">Preview</button>\r\n      <button class=\"btn btn-link\" (click)=\"searchEmployees()\" *ngIf=\"shownext\">Next</button>\r\n  </div>\r\n  <div class=\"d-flex justify-content-start\" *ngIf=\"showmeta\">\r\n      <p>Search Result Quantity: {{count}}, cursor {{cursor}} More?  {{more}}.</p>\r\n  </div>\r\n\r\n<!-- <button (click)=\"getEmployees()\" class=\"btn\">Employees</button> -->\r\n\r\n</div>\r\n\r\n\r\n<!--\r\n<br>\r\n<div>\r\n    <input type=\"text\" class=\"form-control col-3\" placeholder=\"Search \" id=\"search\">\r\n</div>\r\n\r\n\r\n\r\n </div>\r\n-->\r\n"

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
        this.url = 'http://172.20.33.50:8080/api/v1/assetexplorerusers/' + this.cont;
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
        //this.url = 'http://172.20.33.50:8080/api/v1/assetusersearch?page='+this.cursor + '&limit=10&text=' + this.search;
        this.url = "http://172.20.33.50:8080/api/v1/assetusersearch?page=" + this.cursor + "&limit=10&text=" + this.search;
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
        this.productsevent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        this.url = 'http://172.20.33.50:8080/api/v1/assetproductsearch?page=' + this.cursor + '&limit=10&text=' + this.product + '&status=In Store';
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
        this.httpserverurl = 'http://172.20.33.50:8080/api/v1/';
    }
    SearchEmployeeService.prototype.getTest = function () {
        return "Hello service";
    };
    SearchEmployeeService.prototype.searchEmployees = function (curso, text) {
        //this.url = 'http://172.20.33.50:8080/api/v1/assetusersearch?page='+this.cursor + '&limit=10&text=' + this.search;
        this.url = "http://172.20.33.50:8080/api/v1/assetusersearch?page=" + curso + "&limit=10&text=" + text;
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
    SearchEmployeeService.prototype.insertSignatureSheet = function (option, id, f_name, l_name, email, date) {
        var answ;
        var url = "http://172.20.33.50:8080/api/v1/signaturesheets?id_type=" + option + "&id_employee=" + id + "&first_name=" + f_name + "&last_name=" + l_name + "&email=" + email + "&updated=" + date;
        return this.httpClient.post(url, {});
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
        var url = "http://172.20.33.50:8080/api/v1/signaturesheets?id_type=" + option + "&id_employee=" + id + "&first_name=" + f_name + "&last_name=" + l_name + "&email=" + email;
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
        this.httpClient.post("http://172.20.33.50:8080/api/v1/signatureproducts", {
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
        return this.httpClient.get("http://172.20.33.50:8080/api/v1/signatureproduct/" + id_employee).map(function (result) { return result; });
    };
    SearchEmployeeService.prototype.updateSignatureSheet = function (pr, pa, cp, userinfo, typ, id_employee) {
        return this.httpClient.put("http://172.20.33.50:8080/api/v1/signatureproduct/" + id_employee, {
            Products_to_remove: JSON.stringify(pr),
            Products_to_add: JSON.stringify(pa),
            current_products: JSON.stringify(cp),
            type: typ,
            user_info: JSON.stringify(userinfo)
        }).map(function (result) { return result; });
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
        this.httpClient.get('http://172.20.33.50:8080/api/v1/types')
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

module.exports = "<br><br><br><br><br><br><br><br><br><br><br>\r\n<div class=\"footer\">\r\n  <footer class=\"mainfooter\" role=\"contentinfo\">\r\n    <div class=\"footer-top p-y-2\">\r\n      <div class=\"container-fluid\">\r\n        \r\n      </div>\r\n    </div>\r\n    <div class=\"footer-middle\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3 col-sm-6\">\r\n         \r\n          <div class=\"footer-pad\">\r\n            <h4 class=\"element\">Direccion</h4>\r\n            <address>\r\n        <ul class=\"list-unstyled\">\r\n          <li class=\"element\">\r\n           Guanacaste<br>\r\n            Calle 6152<br>\r\n\r\n        </ul>\r\n      </address>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-6\">\r\n          \r\n          <div class=\"footer-pad\">\r\n            <h4 class=\"element\" >Servicios</h4>\r\n            <ul class=\"list-unstyled\">\r\n              <li class=\"element\"><a routerLink=\"#\"></a></li>\r\n              <li class=\"element\"><a routerLink=\"#\">centro de pago</a></li>\r\n              <li class=\"element\"><a routerLink=\"#\">Directorio de contacto</a></li>\r\n   \r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-6\">\r\n          \r\n          <div class=\"footer-pad\">\r\n            <h4 class=\"element\">Informacion del Sitio</h4>\r\n            <ul class=\"list-unstyled\">\r\n              <li class=\"element\"><a routerLink=\"#\">Tutorial del Sitio</a></li>\r\n              <li class=\"element\"><a routerLink=\"#\">Accesibilidad</a></li>\r\n\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-6\">\r\n          \r\n          <div class=\"footer-pad\">\r\n            <h4 class=\"element\" >Departamentos </h4>\r\n            <ul class=\"list-unstyled\">\r\n              <li class=\"element\"><a routerLink=\"#\">Reacreaciones</a></li>\r\n              <li class=\"element\"><a routerLink=\"#\">Trabajadores publicos</a></li>\r\n\r\n              <li class=\"element\">\r\n                <a routerLink=\"#\"></a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </div> \r\n    <div class=\"footer-bottom\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <!--Footer Bottom-->\r\n            <p class=\"text-xs-center element\">&copy; Copyright 2017 - Tegucigalpa City.  All rights reserved.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n    \r\n</div> "

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

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-custom\">\r\n  <a routerLink=\"/\" class=\"navbar-brand nav-title\">IT Inventory</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCustom\">\r\n      <i class=\"fa fa-bars fa-lg py-1 text-white\"></i>\r\n  </button>\r\n  <div class=\"navbar-collapse collapse\" id=\"navbarCustom\">\r\n      <ul class=\"navbar-nav\">\r\n          <li class=\"nav-item \">\r\n              <a class=\"nav-link\" routerLink=\"/\">Home /</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"newsheet\">Create Signature Sheet /</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"updatesheet\">Update Signature Sheet /</a>\r\n          </li>\r\n          <li class=\"nav-item \">\r\n            <a class=\"nav-link\" routerLink=\"pdf\"> Pdf /</a>\r\n        </li>\r\n        <li class=\"nav-item \">\r\n            <a class=\"nav-link\" routerLink=\"#\">Reports /</a>\r\n        </li>\r\n          <li class=\"nav-item dropdown\">\r\n              <a class=\"nav-link dropdown-toggle\" routerLink=\"#\" id=\"navbarDropdown\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                Dropdown\r\n              </a>\r\n              <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n                  <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n              </div>\r\n          </li>\r\n      </ul>\r\n  </div>\r\n</nav>"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pdf/pdfs/pdfs.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n    <div>\n        <h3>PDF Signature Sheet</h3>\n        <p>\"The Portable Document Format (PDF) is a file format developed in the 1990s to present documents, including text formatting and images, in a manner independent of application software, hardware, and operating systems. Based on the PostScript language, each PDF file encapsulates a complete description of a fixed-layout flat document, including the text, fonts, vector graphics, raster images and other information needed to display it. PDF was standardized as an open format, ISO 32000, in 2008, and does not require any royalties for its implementation.\n\n            Today, PDF files may contain a variety of content besides flat text and graphics including logical structuring elements, interactive elements such as annotations and form-fields, layers, rich media (including video content) and three dimensional objects using U3D or PRC, and various other data formats. The PDF specification also provides for encryption and digital signatures, file attachments and metadata to enable workflows requiring these features.\"</p>\n         <br>\n    </div>\n<!--\n    <div class=\"\">\n        <h3>Historical Signature Sheet Table</h3>\n        <table class=\"table\">\n            <thead class=\"thead-dark\">\n              <tr class=\"\">\n                <th scope=\"col\">Sheet Id</th>\n                <th scope=\"col\">First Name</th>\n                <th scope=\"col\">Last Name</th>\n                <th scope=\"col\">E-mail N°</th>\n                <th scope=\"col\">Employee ID</th>\n               -- <th scope=\"col\">Status</th>\n                <th scope=\"col\">Last?</th> \n                \n              </tr>\n            </thead>\n            <tbody *ngFor=\"let product of currentproducts\">\n          \n              <tr class=\"select\">\n                <th scope=\"row\">{{product.id_signature}}</th>\n                <td>{{product.first_name}}</td>\n                <td>{{product.last_name}}</td>\n                <td>{{product.email}}</td>\n                <td>{{product.id_employee}}</td>\n                <td><button class=\"btn btn-danger btn-sm\" (click)=\"onRemove(product)\" >select</button></td>\n              </tr>\n          \n            </tbody>\n          \n          </table>\n    </div>\n  -->\n    <div>\n        <div class=\"form-group\">\n          <label for=\"text-input\">Please Enter the Signature pdf name, this is id of the sheet join with the employee id number</label>\n            <input type=\"text\" id=\"text-input\" class=\"form-control\" [(ngModel)]=\"text\">\n        </div>\n    </div>\n\n    <button class=\"btn btn-info\" (click)=\"searchPdf()\">Look for pdf.!</button>\n    <div class=\"container\" *ngIf=\"boolpdfroute\">\n      <p>In case download does not start copy the following url in the browser {{url}}</p>\n\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/pdf/pdfs/pdfs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_signature_sheet_search_employee_service__ = __webpack_require__("../../../../../src/app/create-signature-sheet/search-employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
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
    function PdfsComponent(_Service, httpClient) {
        this._Service = _Service;
        this.httpClient = httpClient;
        this.boolpdfroute = false;
    }
    PdfsComponent.prototype.ngOnInit = function () {
    };
    PdfsComponent.prototype.test = function () {
        alert(this.text);
    };
    PdfsComponent.prototype.searchPdf = function () {
        this.boolpdfroute = true;
        this.url = "http://172.20.33.50:8080/pdf/" + this.text;
        window.location.href = this.url;
    };
    PdfsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pdfs',
            template: __webpack_require__("../../../../../src/app/pdf/pdfs/pdfs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pdf/pdfs/pdfs.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__create_signature_sheet_search_employee_service__["a" /* SearchEmployeeService */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__share_module_share_module_module__["a" /* ShareModuleModule */]
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/update-signature-sheet/updatesheet/updatesheet.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n    <div>\n        <h3>Update Signature Sheet</h3>\n        <p>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</p>\n         <br>\n        <div class=\"form-group\"> \n            <button class=\"btn btn-info btn-sm\" (click)=\"start()\">Let's Get Started!</button>\n        </div>\n    </div>\n\n    <div class=\" col-6\" *ngIf=\"boolfirst\">\n        <h3>First-Step select a type and date</h3>\n        <div class=\"form-group\">\n            <select class=\"form-control\" [(ngModel)]=\"option\">\n                    <option value=\"2\">Offboarding</option>\n                    <option value=\"4\">update</option>\n            </select>\n        </div>\n        <!-- <div class=\"form-group\">\n            <input type=\"Date\" class=\"form-control\" [(ngModel)]=\"date\">\n        </div> -->\n        <button class=\"btn btn-info d-flex justify-content-center btn-sm\" (click)=\"validate()\">Continue</button>\n    </div>\n    <ul class=\"list-group\" *ngFor=\"let item of selectemploye\">\n        <li class=\"list-group-item list-group-item-success \">{{item.FIRST_NAME}}  {{item.LAST_NAME}} - {{item.EMAIL}} - {{item.EMPLOYEE_ID}}</li>\n      \n      </ul>\n\n\n    <div *ngIf=\"boolemployee\">\n         <h3>Second-Step select the employee</h3>\n          <!-- <ul class=\"list-group\" *ngFor=\"let item of selectemploye\">{{item.FIRST_NAME}} - {{item.LAST_NAME}} - {{item.EMAIL}} </ul> -->\n  \n  \n  \n         <app-employee-table (employeevent)=\"selectemploye=$event\"></app-employee-table>\n         <div class=\"d-flex justify-content-center\">\n                  <button class=\"btn btn-info btn-sm\" (click)=\"backemployee()\">Go Back</button><h4>-</h4>\n                  <button class=\"btn btn-info btn-sm\" (click)=\"continueemployee()\">Continue</button>\n         </div>    \n    </div >\n       \n    <div *ngIf=\"currentproducts\">\n        <app-user-products [parentData]=\"selectemploye\" (productremovesevent)=\"productremovesevent=$event\" (currentproductrevent)=\"selectproducts=$event\"></app-user-products>\n         <div class=\"d-flex justify-content-center\">\n            <button class=\"btn btn-info btn-sm\" (click)=\"backemployee()\" >Go Back</button><h4>-</h4>\n            <button class=\"btn btn-info btn-sm\" (click)=\"continueprods()\">Add Product</button> \n        </div> \n    </div>\n\n    <div *ngIf=\"boolproducts\" >\n        <app-product-list (productsevent)=\"productsevent=$event\"></app-product-list>\n        <!--<button class=\"btn btn-info \" (click)=\"backproducts()\">Go Back</button> -->\n        <div class=\"d-flex justify-content-center\">\n                <button class=\"btn btn-info btn-sm\" (click)=\"backproducts()\">Go Back</button>\n        </div>  \n    </div>\n\n    \n    <br><br><br><br>\n    \n    <div *ngIf=\"boolproducts\" class=\"d-flex justify-content-center\">\n            <!-- <button class=\"btn btn-link btn-lg\" (click)=\"createSignatureSheet()\"></button> -->\n            <button class=\"btn btn-primary btn-lg\" (click)=\"confirm()\">Save & Download</button><br>\n        </div><br>\n    <div *ngIf=\"confirmation\" class=\"alert alert-warning\" role=\"alert\">\n            <h4 class=\"alert-heading\">Are you sure of update this Signature Sheet?</h4>\n            <p>The information will be save and automatically download a pdf file of the sheet, press 'YES', to continue or 'No', to go back.</p>\n            <div class=\"d-flex justify-content-start\">\n                <button class=\"btn btn-info btn-sm \" (click)=\"updateSheet()\" >YES</button><p>-</p>\n                <button class=\"btn btn-info btn-sm \" (click)=\"abort()\"> NO</button>\n            </div>\n            <hr>\n            <p class=\"mb-0\">-LAUREATE IT-</p>\n        </div>\n    <button class=\"btn\" (click)=\"testAlert()\">Testbutton</button> \n\n</div>"

/***/ }),

/***/ "../../../../../src/app/update-signature-sheet/updatesheet/updatesheet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatesheetComponent; });
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


var UpdatesheetComponent = /** @class */ (function () {
    function UpdatesheetComponent(_searchEmployees) {
        this._searchEmployees = _searchEmployees;
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
    }
    UpdatesheetComponent.prototype.ngOnInit = function () {
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
    UpdatesheetComponent.prototype.continueemployee = function () {
        //faltan los ifs;
        this.boolemployee = false;
        //this.boolproducts = true;
        //console.log(this.selectemploye);
        this.currentproducts = true;
        //request de productos en la hoja utilizando el select employee
    };
    UpdatesheetComponent.prototype.continueprods = function () {
        /*let x = this.selectemploye[0];
        this._searchEmployees.getUserProducts(this.selectemploye[0]['EMPLOYEE_ID'])
        .subscribe(res => {
           let x = res['SignatureSheetsProducts'];
           this.currentproducts = x;
           console.log(this.currentproducts);
           console.log(x);
           //this.currentproducts = this.selectproducts;
         })*/
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
                alert("Preparing to update..");
                console.log(result);
                if (result['message'] == "Signature Sheet correctly inserted") {
                    _this._searchEmployees.updateSignatureSheet(_this.productremovesevent, _this.productsevent, _this.selectproducts, _this.selectemploye, _this.option, _this.selectemploye[0]['EMPLOYEE_ID'])
                        .subscribe(function (result) {
                        console.log(result);
                        alert("updated");
                    });
                }
            });
            //alert(response);
            //this._searchEmployees.updateSignatureSheet(this.productremovesevent,this.productsevent, this.selectproducts,this.selectemploye,this.option,this.selectemploye[0]['EMPLOYEE_ID'])
            //.subscribe(result =>{
            // console.log(result);
            // alert("updated");
            //})
        }
        else {
            alert("make sure to select employee and products correctly");
        }
    };
    UpdatesheetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-updatesheet',
            template: __webpack_require__("../../../../../src/app/update-signature-sheet/updatesheet/updatesheet.component.html"),
            styles: [__webpack_require__("../../../../../src/app/update-signature-sheet/updatesheet/updatesheet.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__create_signature_sheet_search_employee_service__["a" /* SearchEmployeeService */]])
    ], UpdatesheetComponent);
    return UpdatesheetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/update-signature-sheet/user-products/user-products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

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
        this.productremovesevent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.currentproductrevent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], UserProductsComponent.prototype, "parentData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], UserProductsComponent.prototype, "productremovesevent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], UserProductsComponent.prototype, "currentproductrevent", void 0);
    UserProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-products',
            template: __webpack_require__("../../../../../src/app/update-signature-sheet/user-products/user-products.component.html"),
            styles: [__webpack_require__("../../../../../src/app/update-signature-sheet/user-products/user-products.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__create_signature_sheet_search_employee_service__["a" /* SearchEmployeeService */]])
    ], UserProductsComponent);
    return UserProductsComponent;
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