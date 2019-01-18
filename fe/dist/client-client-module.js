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

var ClientRoutes = [
    {
        path: '',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_0__["ListComponent"]
    }
];


/***/ }),

/***/ "./src/app/client/edit/edit.component.html":
/*!*************************************************!*\
  !*** ./src/app/client/edit/edit.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  edit works!\n</p>\n"

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
    }
    EditComponent.prototype.ngOnInit = function () {
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

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <nav aria-label=\"breadcrumb\">\n                    <ol class=\"breadcrumb\">\n                        <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n                        <li class=\"breadcrumb-item\"><a href=\"#\">Library</a></li>\n                        <li class=\"breadcrumb-item active\" aria-current=\"page\">Data</li>\n                    </ol>\n                </nav>\n\n                <div class=\"card\">\n                    <div class=\"card-header card-header-primary card-header-icon\">\n                        <div class=\"card-icon\">\n                            <i class=\"material-icons\">face</i>\n                        </div>\n                        <p class=\"card-category\">Clients</p>\n                        <h4 class=\"card-title\"><button mat-raised-button class=\"btn btn-primary btn-sm\">New Client</button></h4>\n\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"card-actions\">\n                            <button mat-raised-button type=\"button\" class=\"btn btn-primary btn-sm\">\n                                <i class=\"material-icons\">add_circle</i> New Client\n                            </button>\n                        </div>\n                        <div class=\"toolbar\">\n                            <!--        Here you can write extra buttons/actions for the toolbar              -->\n\n\n                        </div>\n                        <div class=\"material-datatables\">\n                            <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                                <thead>\n                                <tr>\n                                    <th>{{ dataTable.headerRow[0] }}</th>\n                                    <th class=\"disabled-sorting text-right\">{{ dataTable.headerRow[1] }}</th>\n                                </tr>\n                                </thead>\n                                <tfoot>\n                                <tr>\n                                    <th>{{ dataTable.footerRow[0] }}</th>\n                                    <th class=\"text-right\">{{ dataTable.footerRow[1] }}</th>\n                                </tr>\n                                </tfoot>\n                                <tbody>\n                                <tr *ngFor=\"let row of dataTable.dataRows\">\n                                    <td>{{row[0]}}</td>\n                                    <td class=\"text-right\">\n                                        <a href=\"#\" class=\"btn btn-link btn-info btn-just-icon like\"><i class=\"material-icons\">favorite</i></a>\n                                        <a href=\"#\" class=\"btn btn-link btn-warning btn-just-icon edit\"><i class=\"material-icons\">dvr</i></a>\n                                        <a href=\"#\" class=\"btn btn-link btn-danger btn-just-icon remove\"><i class=\"material-icons\">close</i></a>\n                                    </td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <!-- end content-->\n                </div>\n                <!--  end card  -->\n            </div>\n            <!-- end col-md-12 -->\n        </div>\n    </div>\n</div>\n"

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
            dataRows: []
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



/***/ })

}]);
//# sourceMappingURL=client-client-module.js.map