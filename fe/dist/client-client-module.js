(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-client-module"],{

/***/ "./src/app/client/client.module.ts":
/*!*****************************************!*\
  !*** ./src/app/client/client.module.ts ***!
  \*****************************************/
/*! exports provided: ClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientModule", function() { return ClientModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ "./src/app/client/list/list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client.routing */ "./src/app/client/client.routing.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/client/edit/edit.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ClientModule = /** @class */ (function () {
    function ClientModule() {
    }
    ClientModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_client_routing__WEBPACK_IMPORTED_MODULE_4__["ClientRoutes"]),
            ]
        })
    ], ClientModule);
    return ClientModule;
}());



/***/ }),

/***/ "./src/app/client/client.routing.ts":
/*!******************************************!*\
  !*** ./src/app/client/client.routing.ts ***!
  \******************************************/
/*! exports provided: ClientRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientRoutes", function() { return ClientRoutes; });
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list/list.component */ "./src/app/client/list/list.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/client/edit/edit.component.ts");


var ClientRoutes = [
    {
        path: '',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_0__["ListComponent"]
    },
    {
        path: 'add',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__["EditComponent"]
    },
];


/***/ }),

/***/ "./src/app/client/edit/edit.component.html":
/*!*************************************************!*\
  !*** ./src/app/client/edit/edit.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<shared-page>\n    <ng-container ngProjectAs=\".page-breadcrumbs\">\n        <shared-breadcrumbs [links]=\"breadcrumbLinks\"></shared-breadcrumbs>\n    </ng-container>\n\n    <ng-container ngProjectAs=\".page-header\">\n        <div class=\"card-header card-header-primary card-header-icon\">\n            <div class=\"card-icon\">\n                <i class=\"material-icons\">face</i>\n            </div>\n            <h3 class=\"card-title\">New Client</h3>\n        </div>\n    </ng-container>\n\n    <ng-container ngProjectAs=\".page-body\">\n        <form>\n            <div class=\"col-sm-4\">\n                <mat-form-field class=\"example-full-width\">\n                    <input matInput type=\"text\" placeholder=\"With Floating Label\">\n                </mat-form-field>\n\n            </div>\n        </form>\n    </ng-container>\n</shared-page>"

/***/ }),

/***/ "./src/app/client/edit/edit.component.ts":
/*!***********************************************!*\
  !*** ./src/app/client/edit/edit.component.ts ***!
  \***********************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_breadcrumb_breadcrumb_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/breadcrumb/breadcrumb-link */ "./src/app/shared/breadcrumb/breadcrumb-link.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditComponent = /** @class */ (function () {
    function EditComponent() {
        this.breadcrumbLinks = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        this.breadcrumbLinks = [
            new _shared_breadcrumb_breadcrumb_link__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbLink"]('Clients', false, ['/clients']),
            new _shared_breadcrumb_breadcrumb_link__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbLink"]('New Client', true),
        ];
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/client/edit/edit.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/client/list/list.component.html":
/*!*************************************************!*\
  !*** ./src/app/client/list/list.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<shared-page>\n    <ng-container ngProjectAs=\".page-header\">\n        <div class=\"card-header card-header-primary card-header-icon\">\n            <div class=\"card-icon\">\n                <i class=\"material-icons\">face</i>\n            </div>\n            <shared-card-header-add-btn [icon]=\"'add'\" [text]=\"'New Client'\" [link]=\"['/clients/add']\"></shared-card-header-add-btn>\n        </div>\n    </ng-container>\n\n    <ng-container ngProjectAs=\".page-body\">\n        <div class=\"material-datatables\">\n            <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\"\n                   cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                <thead>\n                <tr>\n                    <th>{{ dataTable.headerRow[0] }}</th>\n                    <th class=\"disabled-sorting text-right\">{{ dataTable.headerRow[1] }}</th>\n                </tr>\n                </thead>\n                <tfoot>\n                <tr>\n                    <th>{{ dataTable.footerRow[0] }}</th>\n                    <th class=\"text-right\">{{ dataTable.footerRow[1] }}</th>\n                </tr>\n                </tfoot>\n                <tbody>\n                <tr *ngFor=\"let row of dataTable.dataRows\">\n                    <td>{{row[0]}}</td>\n                    <td class=\"text-right\">\n                        <a href=\"#\" class=\"btn btn-link btn-info btn-just-icon like\"><i\n                                class=\"material-icons\">favorite</i></a>\n                        <a href=\"#\" class=\"btn btn-link btn-warning btn-just-icon edit\"><i\n                                class=\"material-icons\">dvr</i></a>\n                        <a href=\"#\" class=\"btn btn-link btn-danger btn-just-icon remove\"><i\n                                class=\"material-icons\">close</i></a>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </ng-container>\n\n</shared-page>\n"

/***/ }),

/***/ "./src/app/client/list/list.component.ts":
/*!***********************************************!*\
  !*** ./src/app/client/list/list.component.ts ***!
  \***********************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListComponent = /** @class */ (function () {
    function ListComponent() {
    }
    ListComponent.prototype.ngOnInit = function () {
        this.dataTable = {
            headerRow: ['Name', 'Actions'],
            footerRow: ['Name', 'Actions'],
            dataRows: [
                ["allen", "edit"],
                ["mariah", "edit"]
            ]
        };
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/client/list/list.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb-link.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb-link.ts ***!
  \******************************************************/
/*! exports provided: BreadcrumbLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbLink", function() { return BreadcrumbLink; });
var BreadcrumbLink = /** @class */ (function () {
    function BreadcrumbLink(title, isActive, routerLink) {
        if (isActive === void 0) { isActive = true; }
        this.title = title;
        this.isActive = isActive;
        this.routerLink = routerLink;
    }
    return BreadcrumbLink;
}());



/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.ts ***!
  \***********************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
        this.links = [];
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BreadcrumbComponent.prototype, "links", void 0);
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'shared-breadcrumbs',
            template: "\n    <nav aria-label=\"breadcrumb\">\n      <ol class=\"breadcrumb\">\n        <li *ngFor=\"let l of links;\" class=\"breadcrumb-item\" [ngClass]=\"{'active': l.isActive}\">\n          <a *ngIf=\"l.isActive == false; else nonLink\" [routerLink]=\"l.routerLink\">\n            {{l.title}}\n          </a>\n          <ng-template #nonLink>\n            {{l.title}}\n          </ng-template>\n        </li>\n        \n      </ol>\n    </nav>\n  ",
            styles: []
        })
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/shared/card-header/add-btn/add-btn.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/card-header/add-btn/add-btn.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBtnComponent", function() { return AddBtnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddBtnComponent = /** @class */ (function () {
    function AddBtnComponent() {
        this.link = [];
    }
    AddBtnComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AddBtnComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AddBtnComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AddBtnComponent.prototype, "link", void 0);
    AddBtnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'shared-card-header-add-btn',
            template: "\n        <p class=\"text-right mt-1\">\n            <a class=\"btn btn-primary btn-round btn-sm\" [routerLink]=\"link\">\n                <i class=\"material-icons\">{{icon}}</i> {{text}}\n            </a>\n        </p>\n    ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], AddBtnComponent);
    return AddBtnComponent;
}());



/***/ }),

/***/ "./src/app/shared/card-header/card-header.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/card-header/card-header.component.ts ***!
  \*************************************************************/
/*! exports provided: CardHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardHeaderComponent", function() { return CardHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardHeaderComponent = /** @class */ (function () {
    function CardHeaderComponent() {
    }
    CardHeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardHeaderComponent.prototype, "icon", void 0);
    CardHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'shared-card-header',
            template: "\n    <div class=\"card-header card-header-primary card-header-icon\">\n      <div class=\"card-icon\">\n        <i class=\"material-icons\">{{icon}}</i>\n      </div>\n      <ng-content>\n        \n      </ng-content>\n\n    </div>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], CardHeaderComponent);
    return CardHeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/page/page.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/page/page.component.ts ***!
  \***********************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageComponent = /** @class */ (function () {
    function PageComponent() {
    }
    PageComponent.prototype.ngOnInit = function () {
    };
    PageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'shared-page',
            template: "\n        <div class=\"main-content\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <ng-content select=\".page-breadcrumbs\"></ng-content>\n                        <div class=\"card\">\n                            <ng-content select=\".page-header\">\n                                \n                            </ng-content>\n                            <div class=\"card-body\">\n                                <ng-content select=\".page-body\"></ng-content>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], PageComponent);
    return PageComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/shared/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/page.component */ "./src/app/shared/page/page.component.ts");
/* harmony import */ var _card_header_card_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card-header/card-header.component */ "./src/app/shared/card-header/card-header.component.ts");
/* harmony import */ var _card_header_add_btn_add_btn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-header/add-btn/add-btn.component */ "./src/app/shared/card-header/add-btn/add-btn.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"], _page_page_component__WEBPACK_IMPORTED_MODULE_3__["PageComponent"], _card_header_card_header_component__WEBPACK_IMPORTED_MODULE_4__["CardHeaderComponent"], _card_header_add_btn_add_btn_component__WEBPACK_IMPORTED_MODULE_5__["AddBtnComponent"]],
            exports: [
                _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"],
                _page_page_component__WEBPACK_IMPORTED_MODULE_3__["PageComponent"],
                _card_header_card_header_component__WEBPACK_IMPORTED_MODULE_4__["CardHeaderComponent"],
                _card_header_add_btn_add_btn_component__WEBPACK_IMPORTED_MODULE_5__["AddBtnComponent"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=client-client-module.js.map