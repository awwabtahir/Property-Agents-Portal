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

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"auth.isLoggedIn()\" class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" routerLink=\"/profile\">Asasa Real Estate</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li *ngIf=\"auth.isLoggedIn()\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/leads\" routerLinkActive=\"active\">Leads</a>\n      </li>\n      <li *ngIf=\"auth.isLoggedIn()\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/inventory\" routerLinkActive=\"active\">Inventory</a>\n      </li>\n      <li *ngIf=\"auth.isLoggedIn() && auth.isAdmin()\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/users\" routerLinkActive=\"active\">Users</a>\n      </li>\n      <li *ngIf=\"auth.isLoggedIn() && !auth.isAgent()\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/options\" routerLinkActive=\"active\">Options</a>\n      </li>\n      <li *ngIf=\"auth.isLoggedIn() && auth.isAdmin()\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/inactive\" routerLinkActive=\"active\">Inactive Leads</a>\n      </li>\n    </ul>\n\n\n    <ul class=\"navbar-nav ml-auto\">\n      <li *ngIf=\"auth.isLoggedIn()\" class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle active\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{ auth.getUserDetails()?.name }}</a>\n        <div class=\"dropdown-menu\">\n          <a class=\"dropdown-item\" routerLink=\"/profile\">Profile</a>\n          <a class=\"dropdown-item\" (click)=\"auth.logout()\">\n            <i class=\"fa fa-sign-out-alt\"></i> Logout</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
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
    function AppComponent(auth) {
        this.auth = auth;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users_profile_profile_component__ = __webpack_require__("../../../../../src/app/users/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__users_register_register_component__ = __webpack_require__("../../../../../src/app/users/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_guard_service__ = __webpack_require__("../../../../../src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__leads_leads_component__ = __webpack_require__("../../../../../src/app/leads/leads.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__leads_add_lead_add_lead_component__ = __webpack_require__("../../../../../src/app/leads/add-lead/add-lead.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__options_options_component__ = __webpack_require__("../../../../../src/app/options/options.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__lead_service__ = __webpack_require__("../../../../../src/app/lead.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__inventory_inventory_component__ = __webpack_require__("../../../../../src/app/inventory/inventory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__leads_edit_lead_edit_lead_component__ = __webpack_require__("../../../../../src/app/leads/edit-lead/edit-lead.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__users_edit_user_edit_user_component__ = __webpack_require__("../../../../../src/app/users/edit-user/edit-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__options_status_status_component__ = __webpack_require__("../../../../../src/app/options/status/status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__leads_inactive_leads_inactive_leads_component__ = __webpack_require__("../../../../../src/app/leads/inactive-leads/inactive-leads.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__users_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'leads', component: __WEBPACK_IMPORTED_MODULE_12__leads_leads_component__["a" /* LeadsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_13__leads_add_lead_add_lead_component__["a" /* AddLeadComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'editlead', component: __WEBPACK_IMPORTED_MODULE_17__leads_edit_lead_edit_lead_component__["a" /* EditLeadComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'editstatus', component: __WEBPACK_IMPORTED_MODULE_20__options_status_status_component__["a" /* StatusComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'inventory', component: __WEBPACK_IMPORTED_MODULE_16__inventory_inventory_component__["a" /* InventoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_18__users_users_component__["a" /* UsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_7__users_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'edituser', component: __WEBPACK_IMPORTED_MODULE_19__users_edit_user_edit_user_component__["a" /* EditUserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'options', component: __WEBPACK_IMPORTED_MODULE_14__options_options_component__["a" /* OptionsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'inactive', component: __WEBPACK_IMPORTED_MODULE_21__leads_inactive_leads_inactive_leads_component__["a" /* InactiveLeadsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_service__["a" /* AuthGuardService */]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__users_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__users_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__leads_leads_component__["a" /* LeadsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__leads_add_lead_add_lead_component__["a" /* AddLeadComponent */],
                __WEBPACK_IMPORTED_MODULE_14__options_options_component__["a" /* OptionsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__inventory_inventory_component__["a" /* InventoryComponent */],
                __WEBPACK_IMPORTED_MODULE_17__leads_edit_lead_edit_lead_component__["a" /* EditLeadComponent */],
                __WEBPACK_IMPORTED_MODULE_18__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_19__users_edit_user_edit_user_component__["a" /* EditUserComponent */],
                __WEBPACK_IMPORTED_MODULE_20__options_status_status_component__["a" /* StatusComponent */],
                __WEBPACK_IMPORTED_MODULE_21__leads_inactive_leads_inactive_leads_component__["a" /* InactiveLeadsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_5_angular_datatables__["b" /* DataTablesModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_11__auth_guard_service__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_15__lead_service__["a" /* LeadService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/');
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthenticationService.prototype.saveToken = function (token, privelege) {
        localStorage.setItem('mean-token', token);
        localStorage.setItem('mean-privelege', privelege);
        this.token = token;
        this.privelege = privelege;
    };
    AuthenticationService.prototype.saveId = function (id) {
        localStorage.setItem('mean-id', id);
        this.id = id;
    };
    AuthenticationService.prototype.getId = function () {
        if (!this.id) {
            this.id = localStorage.getItem('mean-id');
        }
        return this.id;
    };
    AuthenticationService.prototype.getToken = function () {
        if (!this.token) {
            this.token = localStorage.getItem('mean-token');
        }
        return this.token;
    };
    AuthenticationService.prototype.getPrivelege = function () {
        if (!this.privelege) {
            this.privelege = localStorage.getItem('mean-privelege');
        }
        return this.privelege;
    };
    // For user
    AuthenticationService.prototype.getUserDetails = function () {
        var token = this.getToken();
        var payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var user = this.getUserDetails();
        if (user) {
            return user.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.isAdmin = function () {
        var privelege = this.getPrivelege();
        if (privelege == 'ADMIN') {
            return true;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.isAgent = function () {
        var privelege = this.getPrivelege();
        if (privelege == 'AGENT') {
            return true;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.request = function (method, type, template) {
        var _this = this;
        var base;
        if (method === 'post') {
            base = this.http.post("/api/" + type, template);
        }
        else {
            base = this.http.get("/api/" + type, { headers: { Authorization: "Bearer " + this.getToken() } });
        }
        var request = base.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__["a" /* map */])(function (data) {
            if (data.token) {
                if (data.access == 1)
                    data.privelege = 'ADMIN';
                if (data.access == 2)
                    data.privelege = 'AGENT';
                _this.saveToken(data.token, data.privelege);
                _this.saveId(data.id);
            }
            return data;
        }));
        return request;
    };
    // For user 
    AuthenticationService.prototype.register = function (user) {
        return this.request('post', 'register', user);
    };
    AuthenticationService.prototype.login = function (user) {
        return this.request('post', 'login', user);
    };
    AuthenticationService.prototype.profile = function () {
        return this.request('get', 'profile');
    };
    AuthenticationService.prototype.getUsers = function () {
        return this.request('get', 'getUsers');
    };
    AuthenticationService.prototype.updateUser = function (user) {
        return this.request('post', 'updateUser', user);
    };
    // For city
    AuthenticationService.prototype.addCity = function (city) {
        return this.request('post', 'addCity', city);
    };
    AuthenticationService.prototype.getCities = function () {
        return this.request('get', 'getCities');
    };
    // For location
    AuthenticationService.prototype.addLoc = function (location) {
        return this.request('post', 'addLoc', location);
    };
    AuthenticationService.prototype.getLocations = function () {
        return this.request('get', 'getLocations');
    };
    AuthenticationService.prototype.getSubLocations = function () {
        return this.request('get', 'getSubLocations');
    };
    // For property type
    AuthenticationService.prototype.addPropType = function (propType) {
        return this.request('post', 'addPropType', propType);
    };
    AuthenticationService.prototype.getPropTypes = function () {
        return this.request('get', 'getPropTypes');
    };
    // For status type
    AuthenticationService.prototype.addStatusType = function (statusType) {
        return this.request('post', 'addStatusType', statusType);
    };
    AuthenticationService.prototype.updateStatus = function (status) {
        return this.request('post', 'updateStatus', status);
    };
    AuthenticationService.prototype.getStatusTypes = function () {
        return this.request('get', 'getStatusTypes');
    };
    // For lead
    AuthenticationService.prototype.addLead = function (lead) {
        return this.request('post', 'addLead', lead);
    };
    AuthenticationService.prototype.updateLead = function (lead) {
        return this.request('post', 'updateLead', lead);
    };
    AuthenticationService.prototype.getLeads = function () {
        if (this.isAgent()) {
            return this.http.get("/api/getLeads", {
                params: { user_id: this.getId() },
                headers: { Authorization: "Bearer " + this.getToken() }
            });
        }
        return this.request('get', 'getLeads');
    };
    AuthenticationService.prototype.getInventories = function () {
        return this.request('get', 'getInventories');
    };
    // For logout
    AuthenticationService.prototype.logout = function () {
        this.token = '';
        window.localStorage.removeItem('mean-token');
        this.router.navigateByUrl('/');
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/inventory/inventory.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box-head {\r\n    margin: 5px;\r\n    padding: 10px;\r\n    border: 1px solid black;\r\n}\r\n\r\n.px100 {\r\n    width: 100px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/inventory/inventory.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col col-lg-12\">\n  <div class=\"panel panel-default mt-4\">\n    <!-- /.panel-heading -->\n    <div class=\"panel-body\">\n      <p>\n        <b>Inventory Management</b>\n      </p>\n      <div class=\"button-group mb-3\">\n        <button (click)=\"addInventory()\" class=\"btn btn-primary\">Add New</button>\n        <button class=\"btn btn-primary\" (click)=\"toggleSearch()\">More Filters</button>\n      </div>\n      <div id=\"search\" class=\"box-head mb-3\" style=\"display:none;\">\n        <div class=\"container mt-4\">\n\n          <div class=\"form-check form-check-inline\">\n            <input class=\"form-check-input\" (click)=areaChange($event) type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"1\">\n            <label class=\"form-check-label\" for=\"inlineRadio1\">Sq. Feet</label>\n          </div>\n          <div class=\"form-check form-check-inline\">\n            <input class=\"form-check-input\" (click)=areaChange($event) type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"2\">\n            <label class=\"form-check-label\" for=\"inlineRadio2\">Marla</label>\n          </div>\n          <div class=\"form-check form-check-inline\">\n            <input class=\"form-check-input\" (click)=areaChange($event) type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio3\" value=\"3\">\n            <label class=\"form-check-label\" for=\"inlineRadio3\">Kanal</label>\n          </div>\n\n          <br>\n          <br>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n              <h5>Size</h5>\n              <label>\n                Min\n                <input type=\"number\" class=\"px100\" [(ngModel)]=\"minA\" (keyup)=\"filter()\" />\n              </label>\n              <label>\n                Max\n                <input type=\"number\" class=\"px100\" [(ngModel)]=\"maxA\" (keyup)=\"filter()\" />\n              </label>\n            </div>\n\n            <br>\n            <br>\n            <div class=\"form-group col-md-6\">\n              <h5>Price</h5>\n              <label>\n                Min\n                <input type=\"number\" class=\"px100\" [(ngModel)]=\"minD\" (keyup)=\"filter()\" />\n              </label>\n              <label>\n                Max\n                <input type=\"number\" class=\"px100\" [(ngModel)]=\"maxD\" (keyup)=\"filter()\" />\n              </label>\n            </div>\n          </div>\n\n          <div class=\"form-row\">\n\n            <div class=\"formgroup col-md-4\">\n              <label for=\"inputCity\"><b>City</b></label>\n              <select class=\"form-control\" id=\"selectCity\" name=\"cityId\" (change)=\"onCityChange($event.target.value)\">\n                <option value=\"0\" selected>Select city</option>\n                <option *ngFor=\"let city of newcities\" value=\"{{ city?._id }}\">{{ city?.name }}</option>\n              </select>\n            </div>\n\n            <div class=\"formgroup col-md-4\">\n              <label for=\"locId\"><b>Location</b></label>\n              <select class=\"form-control\" id=\"selectLocation\" name=\"locId\" (change)=\"onLocationChange($event.target.value)\">\n                <option value=\"0\" selected>Select location</option>\n                <option *ngFor=\"let loc of newLocations\" value=\"{{ loc?._id }}\">{{ loc?.location }}</option>\n              </select>\n            </div>\n\n            <div class=\"formgroup col-md-4\">\n              <label for=\"inputType\"><b>Type</b></label>\n              <select class=\"form-control\" id=\"selectPropertyType\" name=\"propTypeId\" (change)=\"onTypeChange($event.target.value)\">\n                <option value=\"0\" selected>Select property type</option>\n                <option *ngFor=\"let type of propertytypes\" value=\"{{ type?._id }}\">{{ type?.type }}</option>\n              </select>\n            </div>\n          </div>\n\n          <br>\n          <button class=\"btn btn-info\" (click)=\"resetSearch()\">Reset</button>\n\n        </div>\n      </div>\n\n\n\n\n      <p *ngIf=\"!(resultInventories && sublocations)\">Please wait...</p>\n      <table *ngIf=\"resultInventories && sublocations\" datatable [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-hover\" id=\"datatableId\"\n        [dtOptions]=\"dtOptions\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Location</th>\n            <th>Area</th>\n            <th>Type</th>\n            <th>Demand (Rs)</th>\n            <th>Purpose</th>\n            <th>Beds</th>\n            <th data-priority=\"1\">Operations</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"odd gradeX\" *ngFor=\"let inv of resultInventories\">\n            <td>{{ inv._id }}</td>\n            <td>{{ inv.location }}</td>\n            <td>{{ inv.newarea }}</td>\n            <td>{{ inv.type }}</td>\n            <td>{{ inv.demand }}</td>\n            <td *ngIf=\"inv.purpose == 1\">Sell</td>\n            <td *ngIf=\"inv.purpose == 2\">Buy</td>\n            <td *ngIf=\"inv.purpose == 3\">Rent</td>\n            <td>{{ inv.beds }}</td>\n            <td>\n              <a (click)=\"editLead(inv.leadId)\" class=\"btn btn-sm btn-default\">\n                <i class=\"fas fa-edit\" style=\"font-size:1.2rem\"></i> Edit\n              </a>\n              <a (click)=\"deleteLead(inv.leadId)\" *ngIf=\"auth.isAdmin()\" class=\"btn btn-sm btn-default\">\n                <i class=\"fas fa-trash\" style=\"font-size:1.2rem\"></i>\n              </a>\n            </td>\n          </tr>\n        </tbody>\n\n      </table>\n\n    </div>\n    <!-- /.panel-body -->\n  </div>\n  <!-- /.panel -->\n</div>\n<!-- /.col-lg-12 -->"

/***/ }),

/***/ "../../../../../src/app/inventory/inventory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lead_service__ = __webpack_require__("../../../../../src/app/lead.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InventoryComponent = /** @class */ (function () {
    function InventoryComponent(auth, router, leadService) {
        this.auth = auth;
        this.router = router;
        this.leadService = leadService;
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["a" /* Subject */]();
    }
    InventoryComponent_1 = InventoryComponent;
    InventoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getLeads();
        // this.getPropTypes();
        // this.getLocations();
        // this.getCities();
        // this.getInventories();
        // We need to call the $.fn.dataTable like this because DataTables typings do not have the "ext" property
        $.fn['dataTable'].ext.search.push(function (settings, data, dataIndex) {
            var demand = parseFloat(data[4]); // use data for the demand column
            var area = parseFloat(data[2].split(" ")[0]); // use data for the area column
            if ((!(_this.minA) && area <= _this.maxA) ||
                (_this.minA <= area && !(_this.maxA)) ||
                (_this.minA <= area && area <= _this.maxA)) {
                return true;
            }
            if ((!(_this.minD) && demand <= _this.maxD) ||
                (_this.minD <= demand && !(_this.maxD)) ||
                (_this.minD <= demand && demand <= _this.maxD)) {
                return true;
            }
            if ((!(_this.minA) && !(_this.maxA)) &&
                (!(_this.minD) && !(_this.maxD))) {
                console.log("true");
                return true;
            }
            return false;
        });
        this.dtOptions = {
            responsive: true,
            order: [[0, "desc"]]
        };
    };
    InventoryComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.dtTrigger.next();
        }, 3000);
    };
    InventoryComponent.prototype.resetSearch = function () {
        this.resultInventories = this.inventories;
        this.setInv();
        this.redrawTable();
    };
    InventoryComponent.prototype.redrawTable = function () {
        var _this = this;
        this.datatableElement.dtInstance.then(function (dtInstance) {
            // Destroy the table first
            dtInstance.destroy();
            // Call the dtTrigger to rerender again
            _this.dtTrigger.next();
        });
    };
    InventoryComponent.prototype.filter = function () {
        this.datatableElement.dtInstance.then(function (dtInstance) {
            dtInstance.draw();
        });
    };
    InventoryComponent.prototype.getLeads = function () {
        var _this = this;
        this.auth.getLeads().subscribe(function (leads) {
            _this.leads = leads;
            _this.getPropTypes();
        }, function (err) {
            console.error(err);
        });
    };
    InventoryComponent.prototype.getInventories = function () {
        var _this = this;
        this.auth.getInventories().subscribe(function (inventories) {
            _this.inventories = inventories;
            _this.newinventories = inventories;
            _this.cleaner();
            _this.resultInventories = _this.newinventories;
            _this.setInv();
        }, function (err) {
            console.error(err);
        });
    };
    InventoryComponent.prototype.cleaner = function () {
        for (var i = 0; i < this.newinventories.length; i++) {
            var cur = this.newinventories[i];
            for (var j = 0; j < this.leads.length; j++) {
                if (cur.leadId == this.leads[j]._id) {
                    if (this.leads[j].leadAdminStatus == 0) {
                        this.newinventories.splice(i, 1);
                        console.log("hello");
                        break;
                    }
                    if (this.auth.isAgent) {
                        if (this.leads[j].leadAgentStatus == 0) {
                            this.newinventories.splice(i, 1);
                            break;
                        }
                    }
                }
            }
        }
    };
    InventoryComponent.prototype.getLocations = function () {
        var _this = this;
        this.auth.getLocations().subscribe(function (locations) {
            _this.locations = locations;
            _this.getCities();
            _this.getSubLocations();
        }, function (err) {
            console.error(err);
        });
    };
    InventoryComponent.prototype.onLocationChange = function (id) {
        this.resultInventories = this.newRInventories;
        this.resultInventories = this.resultInventories.filter(function (inventory) {
            return inventory.locationId == id;
        });
        this.setInv();
        this.redrawTable();
    };
    InventoryComponent.prototype.getSubLocations = function () {
        var _this = this;
        this.auth.getSubLocations().subscribe(function (sublocations) {
            _this.sublocations = sublocations;
        }, function (err) {
            console.error(err);
        });
    };
    InventoryComponent.prototype.getPropTypes = function () {
        var _this = this;
        this.auth.getPropTypes().subscribe(function (propertytypes) {
            _this.propertytypes = propertytypes;
            _this.getLocations();
        }, function (err) {
            console.error(err);
        });
    };
    InventoryComponent.prototype.onTypeChange = function (id) {
        this.resultInventories = this.inventories;
        this.resultInventories = this.resultInventories.filter(function (inventory) {
            return inventory.propTypeId == id;
        });
        this.setInv();
        this.redrawTable();
    };
    InventoryComponent.prototype.getCities = function () {
        var _this = this;
        this.auth.getCities().subscribe(function (cities) {
            _this.cities = cities;
            _this.newcities = cities;
            _this.getInventories();
        }, function (err) {
            console.error(err);
        });
    };
    InventoryComponent.prototype.onCityChange = function (id) {
        this.newLocations = this.locations.filter(function (location) {
            return location.cityId == id;
        });
        this.resultInventories = this.inventories;
        this.resultInventories = this.resultInventories.filter(function (inventory) {
            return inventory.cityId == id;
        });
        this.newRInventories = this.resultInventories;
        this.cities = this.newcities;
        this.cities = this.cities.filter(function (city) {
            return city._id == id;
        });
        this.setInv();
        this.redrawTable();
    };
    InventoryComponent.prototype.setInv = function () {
        for (var i = 0; i < this.resultInventories.length; i++) {
            var type;
            for (var j = 0; j < this.propertytypes.length; j++) {
                if (this.propertytypes[j]._id == this.resultInventories[i].propTypeId) {
                    this.resultInventories[i].type = this.propertytypes[j].type;
                    type = this.resultInventories[i].type;
                    break;
                }
            }
            this.resultInventories[i].location = type + " # " + this.resultInventories[i].propNumber + " ,St # " + this.resultInventories[i].street + ", ";
            for (var j = 0; j < this.sublocations.length; j++) {
                if (this.sublocations[j]._id == this.resultInventories[i].sublocationId) {
                    this.resultInventories[i].location += this.sublocations[j].sublocation + ", ";
                    break;
                }
            }
            for (var j = 0; j < this.locations.length; j++) {
                if (this.locations[j]._id == this.resultInventories[i].locationId) {
                    this.resultInventories[i].location += this.locations[j].location + ", ";
                    break;
                }
            }
            for (var j = 0; j < this.cities.length; j++) {
                if (this.cities[j]._id == this.resultInventories[i].cityId) {
                    this.resultInventories[i].location += this.cities[j].name;
                    break;
                }
            }
            if (this.resultInventories[i].areaUnit == 1) {
                this.resultInventories[i].newarea = this.resultInventories[i].area + " " + InventoryComponent_1.areaUnits.ONE;
            }
            if (this.resultInventories[i].areaUnit == 2) {
                this.resultInventories[i].newarea = this.resultInventories[i].area + " " + InventoryComponent_1.areaUnits.TWO;
            }
            if (this.resultInventories[i].areaUnit == 3) {
                this.resultInventories[i].newarea = this.resultInventories[i].area + " " + InventoryComponent_1.areaUnits.THREE;
            }
        }
    };
    InventoryComponent.prototype.viewLead = function (id) {
        for (var i = 0; i < this.leads.length; i++) {
            if (this.leads[i]._id == id) {
                this.leadService.setLead(this.leads[i]);
                if (this.leads[i].clientType == 1) {
                    this.leadService.setClientType(InventoryComponent_1.clientTypes.ONE);
                }
                if (this.leads[i].clientType == 2) {
                    this.leadService.setClientType(InventoryComponent_1.clientTypes.TWO);
                }
            }
        }
        for (var i = 0; i < this.inventories.length; i++) {
            if (this.inventories[i].leadId == id) {
                this.leadService.setInventory(this.inventories[i]);
                for (var j = 0; j < this.cities.length; j++) {
                    if (this.cities[j]._id == this.inventories[i].cityId) {
                        this.leadService.setCity(this.cities[j]);
                    }
                }
                for (var j = 0; j < this.propertytypes.length; j++) {
                    if (this.propertytypes[j]._id == this.inventories[i].propTypeId) {
                        this.leadService.setPropertyType(this.propertytypes[j]);
                    }
                }
                for (var j = 0; j < this.locations.length; j++) {
                    if (this.locations[j]._id == this.inventories[i].locationId) {
                        this.leadService.setLocation(this.locations[j]);
                    }
                }
                if (this.inventories[i].areaUnit == 1) {
                    this.leadService.setAreaUnit(InventoryComponent_1.areaUnits.ONE);
                }
                if (this.inventories[i].areaUnit == 2) {
                    this.leadService.setAreaUnit(InventoryComponent_1.areaUnits.TWO);
                }
                if (this.inventories[i].areaUnit == 3) {
                    this.leadService.setAreaUnit(InventoryComponent_1.areaUnits.THREE);
                }
            }
        }
        if (this.leadService.getLead && this.leadService.getInventory) {
            this.router.navigateByUrl('/viewlead');
        }
    };
    InventoryComponent.prototype.editLead = function (id) {
        for (var i = 0; i < this.leads.length; i++) {
            if (this.leads[i]._id == id) {
                this.leadService.setLead(this.leads[i]);
                break;
            }
        }
        for (var i = 0; i < this.inventories.length; i++) {
            if (this.inventories[i].leadId == id) {
                this.leadService.setInventory(this.inventories[i]);
                break;
            }
        }
        if (this.leadService.getLead && this.leadService.getInventory) {
            this.leadService.setIsLead(false);
            this.router.navigateByUrl('/editlead');
        }
    };
    InventoryComponent.prototype.deleteLead = function (id) {
        for (var i = 0; i < this.inventories.length; i++) {
            if (this.inventories[i].leadId == id) {
                this.inventories.splice(i, 1);
                break;
            }
        }
        var isAdmin;
        if (this.auth.isAdmin)
            isAdmin = true;
        else
            isAdmin = false;
        console.log(isAdmin);
        var status = {
            "sid": 0,
            "lid": id,
            "isAdmin": isAdmin
        };
        this.auth.updateStatus(status).subscribe(function () {
            console.log("success");
        }, function (err) {
            console.error(err);
        });
    };
    InventoryComponent.prototype.addInventory = function () {
        this.leadService.setIsLead(false);
        this.router.navigateByUrl('/add');
    };
    ////////////////////////////////////
    ////////// Search
    ////////////////////////////////////
    InventoryComponent.prototype.toggleSearch = function () {
        var x = document.getElementById("search");
        if (x.style.display === "none") {
            x.style.display = "block";
        }
        else {
            x.style.display = "none";
        }
    };
    InventoryComponent.prototype.areaChange = function (event) {
        var value = event.target.value;
        if (value == 1) {
            this.resultInventories = $.map(this.inventories, function (entry) {
                if (entry.areaUnit == 2) {
                    entry.area = entry.area * 272;
                }
                if (entry.areaUnit == 3) {
                    entry.area = entry.area * 5445;
                }
                entry.area = +parseFloat(entry.area).toFixed(2);
                entry.areaUnit = 1;
                return entry;
            });
            this.setInv();
            this.redrawTable();
        }
        if (value == 2) {
            this.resultInventories = $.map(this.inventories, function (entry) {
                if (entry.areaUnit == 1) {
                    entry.area = entry.area * 0.0037;
                }
                if (entry.areaUnit == 3) {
                    entry.area = entry.area * 20;
                }
                entry.area = +parseFloat(entry.area).toFixed(2);
                entry.areaUnit = 2;
                return entry;
            });
            this.setInv();
            this.redrawTable();
        }
        if (value == 3) {
            this.resultInventories = $.map(this.inventories, function (entry) {
                if (entry.areaUnit == 1) {
                    entry.area = entry.area * 0.00018;
                }
                if (entry.areaUnit == 2) {
                    entry.area = entry.area * 0.05;
                }
                entry.area = +parseFloat(entry.area).toFixed(2);
                entry.areaUnit = 3;
                return entry;
            });
            this.setInv();
            this.redrawTable();
        }
    };
    InventoryComponent.areaUnits = {
        ONE: "Sq. Feet",
        TWO: "Marla",
        THREE: "Kanal"
    };
    InventoryComponent.clientTypes = {
        ONE: "Owner",
        TWO: "Dealer"
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_angular_datatables__["a" /* DataTableDirective */])
    ], InventoryComponent.prototype, "datatableElement", void 0);
    InventoryComponent = InventoryComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-inventory',
            template: __webpack_require__("../../../../../src/app/inventory/inventory.component.html"),
            styles: [__webpack_require__("../../../../../src/app/inventory/inventory.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__lead_service__["a" /* LeadService */]])
    ], InventoryComponent);
    return InventoryComponent;
    var InventoryComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/lead.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeadService; });
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

var LeadService = /** @class */ (function () {
    function LeadService() {
    }
    LeadService.prototype.setLeads = function (leads) {
        this.leads = leads;
    };
    LeadService.prototype.getLeads = function () {
        return this.leads;
    };
    LeadService.prototype.setLead = function (lead) {
        this.lead = lead;
    };
    LeadService.prototype.getLead = function () {
        return this.lead;
    };
    LeadService.prototype.setInventory = function (inventory) {
        this.inventory = inventory;
    };
    LeadService.prototype.getInventory = function () {
        return this.inventory;
    };
    LeadService.prototype.setInventories = function (inventories) {
        this.inventories = inventories;
    };
    LeadService.prototype.getInventories = function () {
        return this.inventories;
    };
    LeadService.prototype.setCity = function (city) {
        this.city = city;
    };
    LeadService.prototype.getCity = function () {
        return this.city;
    };
    LeadService.prototype.setCities = function (cities) {
        this.cities = cities;
    };
    LeadService.prototype.getCities = function () {
        return this.cities;
    };
    LeadService.prototype.setPropertyType = function (propertytype) {
        this.propertytype = propertytype;
    };
    LeadService.prototype.getPropertyType = function () {
        return this.propertytype;
    };
    LeadService.prototype.setPropertyTypes = function (propertytypes) {
        this.propertytypes = propertytypes;
    };
    LeadService.prototype.getPropertyTypes = function () {
        return this.propertytypes;
    };
    LeadService.prototype.setLocation = function (location) {
        this.location = location;
    };
    LeadService.prototype.getLocation = function () {
        return this.location;
    };
    LeadService.prototype.setLocations = function (locations) {
        this.locations = locations;
    };
    LeadService.prototype.getLocations = function () {
        return this.locations;
    };
    LeadService.prototype.setAreaUnit = function (areaUnit) {
        this.areaUnit = areaUnit;
    };
    LeadService.prototype.getAreaUnit = function () {
        return this.areaUnit;
    };
    LeadService.prototype.setClientType = function (clientType) {
        this.clientType = clientType;
    };
    LeadService.prototype.getClientType = function () {
        return this.clientType;
    };
    LeadService.prototype.setUser = function (user) {
        this.user = user;
    };
    LeadService.prototype.getUser = function () {
        return this.user;
    };
    LeadService.prototype.setIsLead = function (isLead) {
        this.isLead = isLead;
    };
    LeadService.prototype.getIsLead = function () {
        return this.isLead;
    };
    LeadService.prototype.setStatusID = function (statusId) {
        this.statusId = statusId;
    };
    LeadService.prototype.getStatusID = function () {
        return this.statusId;
    };
    LeadService.prototype.setLeadID = function (leadId) {
        this.leadId = leadId;
    };
    LeadService.prototype.getLeadID = function () {
        return this.leadId;
    };
    LeadService.prototype.setUserId = function (userId) {
        this.userId = userId;
    };
    LeadService.prototype.getUserId = function () {
        return this.userId;
    };
    LeadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LeadService);
    return LeadService;
}());



/***/ }),

/***/ "../../../../../src/app/leads/add-lead/add-lead.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".purpose {\r\n    margin: 10px;\r\n    margin-right: 10px;\r\n    margin-left: 20px;\r\n    display: inline-block;\r\n}\r\n\r\n.box-head {\r\n    margin: 5px;\r\n    padding: 10px;\r\n    border: 1px solid black;\r\n}\r\n\r\n@media only screen and (min-width: 500px) {\r\n    #inputSize {\r\n        margin-top: 32px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/leads/add-lead/add-lead.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col align-self-center box-head\">\n      <p *ngIf=\"!(users && cities && propTypes && locations)\">Please wait...</p>\n      <form *ngIf=\"users && cities && propTypes && locations\" (submit)=\"addLead()\">\n        <div class=\"form-row\">\n\n          <b class=\"ml-2 mr-2\">Purpose:</b>\n          <div class=\"form-check form-check-inline\">\n            <input class=\"form-check-input\" type=\"radio\" name=\"purpose\" [(ngModel)]=\"lead.purpose\" #purpose=\"ngModel\" id=\"purpose1\" value=\"1\"\n              required>\n            <label class=\"form-check-label\" for=\"purpose1\">\n              Sell\n            </label>\n          </div>\n          <div class=\"form-check form-check-inline\">\n            <input class=\"form-check-input\" type=\"radio\" name=\"purpose\" [(ngModel)]=\"lead.purpose\" #purpose=\"ngModel\" id=\"purpose2\" value=\"2\">\n            <label class=\"form-check-label\" for=\"purpose2\">\n              Buy\n            </label>\n          </div>\n          <div class=\"form-check form-check-inline\">\n            <input class=\"form-check-input\" type=\"radio\" name=\"purpose\" [(ngModel)]=\"lead.purpose\" #purpose=\"ngModel\" id=\"purpose3\" value=\"3\">\n            <label class=\"form-check-label\" for=\"purpose3\">\n              Rent\n            </label>\n          </div>\n\n        </div>\n        <p *ngIf=\"!(purpose.touched || purpose.dirty)\" style=\"color:blue\">\n          <b>Step 1: Select the purpose</b>\n        </p>\n\n        <div class=\"form-row\">\n          <!-- Get city names here -->\n          <div class=\"form-group col-md-6\">\n            <label for=\"inputCity\"></label>\n            <select class=\"form-control\" id=\"selectCity\" name=\"cityId\" [(ngModel)]=\"lead.cityId\" #cityId=\"ngModel\" (change)=\"onChange($event.target.value)\"\n              required>\n              <option value=\"0\" selected>Select city</option>\n              <option *ngFor=\"let city of cities\" value=\"{{ city?._id }}\">{{ city?.name }}</option>\n            </select>\n            <p *ngIf=\"!(cityId.touched || cityId.dirty)\" style=\"color:blue\">\n              <b>Step 2: Select the city</b>\n            </p>\n          </div>\n\n          <!-- Get Property Types here -->\n          <div class=\"form-group col-md-6\">\n            <label for=\"inputType\"></label>\n            <select class=\"form-control\" id=\"selectPropertyType\" name=\"propTypeId\" [(ngModel)]=\"lead.propTypeId\" #propTypeId=\"ngModel\"\n              required>\n              <option value=\"0\" selected>Select property type</option>\n              <option *ngFor=\"let type of propTypes\" value=\"{{ type?._id }}\">{{ type?.type }}</option>\n            </select>\n            <p *ngIf=\"!(propTypeId.touched || propTypeId.dirty)\" style=\"color:blue\">\n              <b>Step 3: Select the property type</b>\n            </p>\n          </div>\n\n        </div>\n        <div class=\"form-row\">\n\n          <!-- Get Locations here -->\n          <div class=\"form-group col-md-6\">\n            <label for=\"locId\">Select location</label>\n            <select class=\"form-control\" id=\"selectLocation\" name=\"locId\" [(ngModel)]=\"lead.locationId\" #locId=\"ngModel\" (change)=\"onLocChange($event.target.value)\"\n              required>\n              <option value=\"0\" selected>Select location</option>\n              <option *ngFor=\"let loc of newLocations\" value=\"{{ loc?._id }}\">{{ loc?.location }}</option>\n            </select>\n            <select *ngIf=\"isLocation\" class=\"form-control mt-2\" id=\"selectSubLocation\" name=\"sublocId\" [(ngModel)]=\"lead.sublocationId\">\n              <option value=\"0\" selected>Select Sub Location</option>\n              <option *ngFor=\"let sloc of newSubLocations\" value=\"{{ sloc?._id }}\">{{ sloc?.sublocation }}</option>\n            </select>\n            <p *ngIf=\"!(locId.touched || locId.dirty)\" style=\"color:blue\">\n              <b>Step 4: Select the location</b>\n            </p>\n          </div>\n\n          <div class=\"form-group col-md-3\">\n            <label for=\"propNumber\">{{ getPropertyType }} #</label>\n            <input type=\"text\" class=\"form-control\" name=\"propNumber\" [(ngModel)]=\"lead.propNumber\" #propNumber=\"ngModel\" required id=\"inputPropNumber\"\n              placeholder=\"{{ getPropertyType }} #\">\n            <p *ngIf=\"!propNumber.valid\" style=\"color:blue\">\n              <b>Step 5: Enter {{ getPropertyType }} number</b>\n            </p>\n          </div>\n\n          <div class=\"form-group col-md-3\">\n            <label for=\"street\">Street #</label>\n            <input type=\"text\" class=\"form-control\" name=\"street\" [(ngModel)]=\"lead.street\" #street=\"ngModel\" required id=\"inputStreet\"\n              placeholder=\"Street #\">\n            <p *ngIf=\"!street.valid\" style=\"color:blue\">\n              <b>Step 6: Enter street number (optional)</b>\n            </p>\n          </div>\n\n        </div>\n        <div class=\"form-row\">\n\n          <div class=\"form-group col-md-6\">\n            <label for=\"inputDemand\">Demand (Rs)</label>\n            <input type=\"text\" class=\"form-control\" name=\"demand\" [(ngModel)]=\"lead.demand\" #demand=\"ngModel\" required id=\"inputDemand\">\n            <p *ngIf=\"!demand.valid\" style=\"color:blue\">\n              <b>Step 7: Enter demand</b>\n            </p>\n          </div>\n\n          <div class=\"form-group col-md-3\">\n            <label for=\"inputArea\">Land Area</label>\n            <input type=\"text\" class=\"form-control\" name=\"area\" [(ngModel)]=\"lead.area\" #area=\"ngModel\" required id=\"inputArea\">\n            <p *ngIf=\"!area.valid\" style=\"color:blue\">\n              <b>Step 8: Enter area</b>\n            </p>\n          </div>\n\n          <div class=\"form-group col-md-3\">\n            <select id=\"inputSize\" class=\"form-control\" name=\"areaUnit\" [(ngModel)]=\"lead.areaUnit\">\n              <option value=\"1\" selected>Sq. Feet</option>\n              <option value=\"2\">Marla</option>\n              <option value=\"3\">Kanal</option>\n            </select>\n          </div>\n\n        </div>\n        <div class=\"form-row\">\n\n          <div class=\"form-group col-md-6\">\n            <label for=\"inputBeds\">No. of beds</label>\n            <input type=\"text\" class=\"form-control\" name=\"beds\" [(ngModel)]=\"lead.beds\" #beds=\"ngModel\" required id=\"inputBeds\">\n            <p *ngIf=\"!beds.valid\" style=\"color:blue\">\n              <b>Optional: Enter number of beds</b>\n            </p>\n          </div>\n\n          <div class=\"form-group col-md-6\">\n            <label *ngIf=\"isLead\" for=\"inputCmt\">Comment</label>\n            <input *ngIf=\"isLead\" type=\"text\" class=\"form-control\" name=\"cmt\" [(ngModel)]=\"lead.cmt\" id=\"inputCmt\">\n          </div>\n\n        </div>\n        <hr>\n        <h6>Client Details</h6>\n        <div class=\"form-row\">\n\n          <div class=\"form-group col-md-6\">\n            <input type=\"text\" class=\"form-control\" name=\"clientName\" [(ngModel)]=\"lead.clientName\" #clientName=\"ngModel\" required id=\"inputName\"\n              placeholder=\"Client Name\">\n            <p *ngIf=\"!clientName.valid\" style=\"color:blue\">\n              <b>Step 9: Enter client name</b>\n            </p>\n          </div>\n\n          <div class=\"form-group col-md-6\">\n            <select id=\"inputClientType\" name=\"clientType\" [(ngModel)]=\"lead.clientType\" #clientType=\"ngModel\" class=\"form-control\">\n              <option value=\"0\" selected>Select client type</option>\n              <option value=\"1\">Owner</option>\n              <option value=\"2\">Dealer</option>\n            </select>\n            <p *ngIf=\"!(clientType.touched || clientType.dirty)\" style=\"color:blue\">\n              <b>Step 10: Select the client type</b>\n            </p>\n          </div>\n\n        </div>\n\n        <div class=\"form-row\">\n\n          <div class=\"form-group col-md-6\">\n            <input type=\"text\" class=\"form-control\" name=\"phoneNumber\" [(ngModel)]=\"lead.phoneNumber\" #phoneNumber=\"ngModel\" required\n              id=\"inputPhone\" placeholder=\"Phone #\">\n            <p *ngIf=\"!phoneNumber.valid\" style=\"color:blue\">\n              <b>Step 11: Enter client phone number</b>\n            </p>\n          </div>\n\n          <div class=\"form-group col-md-6\">\n            <select *ngIf=\"isLead\" id=\"selectAgent\" name=\"assignedTo\" [(ngModel)]=\"lead.assignedTo\" class=\"form-control\">\n              <option value=\"0\" selected>Not assigned to any agent</option>\n              <option *ngFor=\"let user of users\" value=\"{{ user?._id }}\">{{ user?.name }}</option>\n            </select>\n          </div>\n\n        </div>\n\n        <div class=\"text-left\">\n          <button type=\"submit\" class=\"btn btn-success\">Save</button>\n        </div>\n\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/leads/add-lead/add-lead.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddLeadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lead_service__ = __webpack_require__("../../../../../src/app/lead.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddLeadComponent = /** @class */ (function () {
    function AddLeadComponent(auth, router, LeadService) {
        this.auth = auth;
        this.router = router;
        this.LeadService = LeadService;
        this.isLocation = false;
        /////////////////////////////////////////////////////////
        // For Lead
        // Add Lead
        this.lead = {
            purpose: 1,
            cityId: 0,
            locationId: 0,
            sublocationId: 0,
            propTypeId: 0,
            propNumber: null,
            street: null,
            demand: null,
            area: null,
            areaUnit: 1,
            beds: 0,
            clientName: null,
            clientType: 0,
            phoneNumber: null,
            assignedTo: 0,
            leadAdminStatus: 0,
            leadAgentStatus: 0,
            cmt: null
        };
    }
    AddLeadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.profile().subscribe(function (user) {
            _this.LeadService.setUserId(user._id);
        }, function (err) {
            console.error(err);
        });
        this.getCities();
        this.getLocations();
        this.getSubLocations();
        this.getPropTypes();
        this.getUsers();
        this.getIsLead();
        this.getStatusTypes();
    };
    AddLeadComponent.prototype.getIsLead = function () {
        this.isLead = this.LeadService.getIsLead();
    };
    AddLeadComponent.prototype.getCities = function () {
        var _this = this;
        this.auth.getCities().subscribe(function (cities) {
            _this.cities = cities;
        }, function (err) {
            console.error(err);
        });
    };
    AddLeadComponent.prototype.onChange = function (id) {
        this.newLocations = this.locations.filter(function (locations) {
            return locations.cityId == id;
        });
    };
    AddLeadComponent.prototype.getLocations = function () {
        var _this = this;
        this.auth.getLocations().subscribe(function (locations) {
            _this.locations = locations;
        }, function (err) {
            console.error(err);
        });
    };
    AddLeadComponent.prototype.onLocChange = function (id) {
        this.isLocation = true;
        this.newSubLocations = this.sublocations.filter(function (sublocations) {
            return sublocations.locationId == id;
        });
    };
    AddLeadComponent.prototype.getSubLocations = function () {
        var _this = this;
        this.auth.getSubLocations().subscribe(function (sublocations) {
            _this.sublocations = sublocations;
        }, function (err) {
            console.error(err);
        });
    };
    AddLeadComponent.prototype.getPropTypes = function () {
        var _this = this;
        this.auth.getPropTypes().subscribe(function (propTypes) {
            _this.propTypes = propTypes;
        }, function (err) {
            console.error(err);
        });
    };
    Object.defineProperty(AddLeadComponent.prototype, "getPropertyType", {
        get: function () {
            for (var j = 0; j < this.propTypes.length; j++) {
                if (this.propTypes[j]._id == this.lead.propTypeId) {
                    return this.propTypes[j].type;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    AddLeadComponent.prototype.getStatusTypes = function () {
        var _this = this;
        this.auth.getStatusTypes().subscribe(function (statusTypes) {
            _this.statusTypes = statusTypes;
            _this.setStatusType();
        }, function (err) {
            console.error(err);
        });
    };
    AddLeadComponent.prototype.setStatusType = function () {
        for (var j = 0; j < this.statusTypes.length; j++) {
            if (this.statusTypes[j].type == "Added") {
                this.lead.leadAdminStatus = this.statusTypes[j]._id;
                console.log(this.lead.leadAdminStatus);
            }
            if (this.statusTypes[j].type == "Assigned") {
                this.lead.leadAgentStatus = this.statusTypes[j]._id;
                console.log(this.lead.leadAgentStatus);
            }
        }
    };
    AddLeadComponent.prototype.getUsers = function () {
        var _this = this;
        this.auth.getUsers().subscribe(function (unfiltered_users) {
            _this.users = unfiltered_users.filter(function (unfiltered_user) {
                return unfiltered_user.access !== 3;
            });
        }, function (err) {
            console.error(err);
        });
    };
    AddLeadComponent.prototype.addLead = function () {
        var _this = this;
        if (this.lead.assignedTo == 0) {
            var userId = this.LeadService.getUserId();
            this.lead.assignedTo = userId;
        }
        this.auth.addLead(this.lead).subscribe(function () {
            if (_this.isLead)
                _this.router.navigateByUrl('/leads');
            else
                _this.router.navigateByUrl('/inventory');
        }, function (err) {
            console.error(err);
        });
    };
    AddLeadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-add-lead',
            template: __webpack_require__("../../../../../src/app/leads/add-lead/add-lead.component.html"),
            styles: [__webpack_require__("../../../../../src/app/leads/add-lead/add-lead.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__lead_service__["a" /* LeadService */]])
    ], AddLeadComponent);
    return AddLeadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/leads/edit-lead/edit-lead.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".purpose {\r\n    margin: 10px;\r\n    margin-right: 10px;\r\n    margin-left: 20px;\r\n    display: inline-block;\r\n}\r\n\r\n.box-head {\r\n    margin: 5px;\r\n    padding: 10px;\r\n    border: 1px solid black;\r\n}\r\n\r\n@media only screen and (min-width: 500px) {\r\n    #inputSize {\r\n        margin-top: 32px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/leads/edit-lead/edit-lead.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col align-self-center box-head\">\n      <p *ngIf=\"!(users && cities && propTypes && locations)\">Please wait...</p>\n      <form *ngIf=\"users && cities && propTypes && locations\" (submit)=\"updateLead()\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-3\">\n            <label for=\"inputPurpose\">Purpose</label>\n            <select class=\"form-control\" id=\"selectCity\" name=\"purpose\" [(ngModel)]=\"lead.purpose\">\n              <option value=\"1\">Sell</option>\n              <option value=\"2\">Buy</option>\n              <option value=\"3\">Rent</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"form-row\">\n          <!-- Get city names here -->\n          <div class=\"form-group col-md-6\">\n            <label for=\"inputCity\">City</label>\n            <select class=\"form-control\" id=\"selectCity\" name=\"cityId\" [(ngModel)]=\"lead.cityId\" (change)=\"onChange($event.target.value)\">\n              <option *ngFor=\"let city of cities\" value=\"{{ city?._id }}\">{{ city?.name }}</option>\n            </select>\n          </div>\n\n          <!-- Get Property Types here -->\n          <div class=\"form-group col-md-6\">\n            <label for=\"inputType\">Property Type</label>\n            <select class=\"form-control\" id=\"selectPropertyType\" name=\"propTypeId\" [(ngModel)]=\"lead.propTypeId\">\n              <option *ngFor=\"let type of propTypes\" value=\"{{ type?._id }}\">{{ type?.type }}</option>\n            </select>\n          </div>\n\n        </div>\n        <div class=\"form-row\">\n\n          <!-- Get Locations here -->\n          <div class=\"form-group col-md-6\">\n            <label for=\"locId\">Location</label>\n            <select class=\"form-control\" id=\"selectLocation\" name=\"locId\" [(ngModel)]=\"lead.locationId\"  (change)=\"onLocChange($event.target.value)\">\n              <option *ngFor=\"let loc of newLocations\" value=\"{{ loc?._id }}\">{{ loc?.location }}</option>\n            </select>\n            <label for=\"locId\" class=\"mt-2\">Sub Location</label>\n            <select class=\"form-control\" id=\"selectSubLocation\" name=\"sublocId\" [(ngModel)]=\"lead.sublocationId\">\n              <option *ngFor=\"let sloc of newSubLocations\" value=\"{{ sloc?._id }}\">{{ sloc?.sublocation }}</option>\n            </select>\n          </div>\n\n          <div class=\"form-group col-md-3\">\n            <label for=\"propNumber\">Number #</label>\n            <input type=\"text\" class=\"form-control\" name=\"propNumber\" [(ngModel)]=\"lead.propNumber\" id=\"inputPropNumber\" placeholder=\"Number #\">\n          </div>\n\n          <div class=\"form-group col-md-3\">\n            <label for=\"street\">Street #</label>\n            <input type=\"text\" class=\"form-control\" name=\"street\" [(ngModel)]=\"lead.street\" id=\"inputStreet\" placeholder=\"Street #\">\n          </div>\n\n        </div>\n        <div class=\"form-row\">\n\n          <div class=\"form-group col-md-6\">\n            <label for=\"inputDemand\">Demand (Rs)</label>\n            <input type=\"text\" class=\"form-control\" name=\"demand\" [(ngModel)]=\"lead.demand\" id=\"inputDemand\">\n          </div>\n\n          <div class=\"form-group col-md-3\">\n            <label for=\"inputArea\">Land Area</label>\n            <input type=\"text\" class=\"form-control\" name=\"area\" [(ngModel)]=\"lead.area\" id=\"inputArea\">\n          </div>\n\n          <div class=\"form-group col-md-3\">\n            <select id=\"inputSize\" class=\"form-control\" name=\"areaUnit\" [(ngModel)]=\"lead.areaUnit\">\n              <option value=\"1\" selected>Sq. Feet</option>\n              <option value=\"2\">Marla</option>\n              <option value=\"3\">Kanal</option>\n            </select>\n          </div>\n\n        </div>\n        <div class=\"form-row\">\n\n          <div class=\"form-group col-md-6\">\n            <label for=\"inputBeds\">No. of beds</label>\n            <input type=\"text\" class=\"form-control\" name=\"beds\" [(ngModel)]=\"lead.beds\" id=\"inputBeds\">\n          </div>\n\n          <div class=\"form-group col-md-6\">\n            <label *ngIf=\"isLead\" for=\"inputCmt\">Comment</label>\n            <input *ngIf=\"isLead\" type=\"text\" class=\"form-control\" name=\"cmt\" [(ngModel)]=\"lead.cmt\" id=\"inputCmt\">\n          </div>\n\n        </div>\n        <hr>\n        <h6>Client Details</h6>\n        <div class=\"form-row\">\n\n          <div class=\"form-group col-md-6\">\n            <label for=\"selectClientName\">Client Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"clientName\" [(ngModel)]=\"lead.clientName\" id=\"inputName\" placeholder=\"Client Name\">\n          </div>\n\n          <div class=\"form-group col-md-6\">\n            <label for=\"selectClientType\">Client Type</label>\n            <select id=\"inputClientType\" name=\"clientType\" [(ngModel)]=\"lead.clientType\" class=\"form-control\">\n              <option value=\"1\" selected>Owner</option>\n              <option value=\"2\">Dealer</option>\n            </select>\n          </div>\n\n        </div>\n\n        <div class=\"form-row\">\n\n          <div class=\"form-group col-md-6\">\n            <label for=\"selectPhoneNumber\">Phone #</label>\n            <input type=\"text\" class=\"form-control\" name=\"phoneNumber\" [(ngModel)]=\"lead.phoneNumber\" id=\"inputPhone\" placeholder=\"Phone #\">\n          </div>\n\n          <div class=\"form-group col-md-6\">\n            <label *ngIf=\"isLead\" for=\"selectAssignedTo\">Assigned To</label>\n            <select *ngIf=\"isLead\" id=\"selectAgent\" name=\"assignedTo\" [(ngModel)]=\"lead.assignedTo\" class=\"form-control\">\n              <option value=\"0\" selected>Not assigned to any agent</option>\n              <option *ngFor=\"let user of users\" value=\"{{ user?._id }}\">{{ user?.name }}</option>\n            </select>\n          </div>\n\n        </div>\n\n        <div class=\"text-left\">\n          <button type=\"submit\" class=\"btn btn-success\">Update</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/leads/edit-lead/edit-lead.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditLeadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lead_service__ = __webpack_require__("../../../../../src/app/lead.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditLeadComponent = /** @class */ (function () {
    function EditLeadComponent(auth, router, leadService) {
        this.auth = auth;
        this.router = router;
        this.leadService = leadService;
    }
    EditLeadComponent.prototype.getIsLead = function () {
        this.isLead = this.leadService.getIsLead();
    };
    EditLeadComponent.prototype.getCities = function () {
        var _this = this;
        this.auth.getCities().subscribe(function (cities) {
            _this.cities = cities;
        }, function (err) {
            console.error(err);
        });
    };
    EditLeadComponent.prototype.onChange = function (id) {
        this.newLocations = this.locations.filter(function (locations) {
            return locations.cityId == id;
        });
    };
    EditLeadComponent.prototype.getLocations = function () {
        var _this = this;
        this.auth.getLocations().subscribe(function (locations) {
            _this.locations = locations;
            _this.newLocations = locations;
        }, function (err) {
            console.error(err);
        });
    };
    EditLeadComponent.prototype.onLocChange = function (id) {
        this.newSubLocations = this.sublocations.filter(function (sublocations) {
            return sublocations.locationId == id;
        });
    };
    EditLeadComponent.prototype.getSubLocations = function () {
        var _this = this;
        this.auth.getSubLocations().subscribe(function (sublocations) {
            _this.sublocations = sublocations;
            _this.newSubLocations = sublocations;
        }, function (err) {
            console.error(err);
        });
    };
    EditLeadComponent.prototype.getPropTypes = function () {
        var _this = this;
        this.auth.getPropTypes().subscribe(function (propTypes) {
            _this.propTypes = propTypes;
        }, function (err) {
            console.error(err);
        });
    };
    EditLeadComponent.prototype.getUsers = function () {
        var _this = this;
        this.auth.getUsers().subscribe(function (unfiltered_users) {
            _this.users = unfiltered_users.filter(function (unfiltered_user) {
                return unfiltered_user.access !== 3;
            });
        }, function (err) {
            console.error(err);
        });
    };
    EditLeadComponent.prototype.getLead = function () {
        this.lead = this.leadService.getInventory();
        this.lead = Object.assign({}, this.lead, this.leadService.getLead());
        console.log(this.lead);
    };
    EditLeadComponent.prototype.updateLead = function () {
        var _this = this;
        if (this.lead.assignedTo == 0) {
            var userId = this.leadService.getUserId();
            this.lead.assignedTo = userId;
        }
        this.auth.updateLead(this.lead).subscribe(function () {
            if (_this.isLead)
                _this.router.navigateByUrl('/leads');
            else
                _this.router.navigateByUrl('/inventory');
        }, function (err) {
            console.error(err);
        });
    };
    EditLeadComponent.prototype.ngOnInit = function () {
        this.getCities();
        this.getLocations();
        this.getSubLocations();
        this.getPropTypes();
        this.getLead();
        this.getUsers();
        this.getIsLead();
    };
    EditLeadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-lead',
            template: __webpack_require__("../../../../../src/app/leads/edit-lead/edit-lead.component.html"),
            styles: [__webpack_require__("../../../../../src/app/leads/edit-lead/edit-lead.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__lead_service__["a" /* LeadService */]])
    ], EditLeadComponent);
    return EditLeadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/leads/inactive-leads/inactive-leads.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/leads/inactive-leads/inactive-leads.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col col-lg-12\">\n  <div class=\"panel panel-default mt-4\">\n    <!-- /.panel-heading -->\n    <div class=\"panel-body\">\n      <div class=\"button-group mb-3\">\n        <button class=\"btn btn-primary\">Send Promotional Message</button>\n      </div>\n      <p *ngIf=\"!resultLeads\">Please wait...</p>\n      <table *ngIf=\"resultLeads\" datatable class=\"table table-bordered table-hover\" style=\"table-layout:auto;\" [dtOptions]=\"dtOptions\"\n        id=\"datatableId\">\n\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th data-priority=\"1\">Client Name</th>\n            <th>Contact #</th>\n          </tr>\n        </thead>\n\n        <tbody>\n          <tr class=\"odd gradeX\" *ngFor=\"let l of resultLeads\">\n            <td>{{ l._id }}</td>\n            <td style=\"text-transform:capitalize;\">{{ l.clientName.toLowerCase() }}</td>\n            <td>{{ l.phoneNumber }}</td>\n          </tr>\n        </tbody>\n\n        <tfoot>\n            <tr>\n              <th>\n                <input id=\"leadInput21\" type=\"text\" size=\"4\" placeholder=\"ID\" />\n              </th>\n              <th>\n                <input id=\"leadInput21\" type=\"text\" placeholder=\"Client Name\" />\n              </th>\n              <th>\n                <input id=\"leadInput21\" type=\"text\" placeholder=\"Contact\" />\n              </th>\n            </tr>\n          </tfoot>\n          </table>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/leads/inactive-leads/inactive-leads.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InactiveLeadsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lead_service__ = __webpack_require__("../../../../../src/app/lead.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InactiveLeadsComponent = /** @class */ (function () {
    function InactiveLeadsComponent(auth, router, leadService) {
        this.auth = auth;
        this.router = router;
        this.leadService = leadService;
        this.dtOptions = {};
    }
    InactiveLeadsComponent.prototype.ngOnInit = function () {
        this.getLeads();
    };
    InactiveLeadsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.datatableElement.dtInstance.then(function (dtInstance) {
                dtInstance.columns().every(function () {
                    var that = this;
                    $('#leadInput21', this.footer()).on('keyup change', function () {
                        if (that.search() !== this['value']) {
                            that
                                .search(this['value'])
                                .draw();
                        }
                    });
                });
                $('#datatableId tfoot tr').appendTo('#datatableId thead');
            });
        }, 3000);
    };
    InactiveLeadsComponent.prototype.getLeads = function () {
        var _this = this;
        this.auth.getLeads().subscribe(function (leads) {
            _this.rawleads = leads;
            _this.leads = _this.rawleads.filter(function (rawleads) {
                return rawleads.leadAdminStatus == 0;
            });
            _this.resultLeads = _this.leads;
        }, function (err) {
            console.error(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_0_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_angular_datatables__["a" /* DataTableDirective */])
    ], InactiveLeadsComponent.prototype, "datatableElement", void 0);
    InactiveLeadsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: 'app-inactive-leads',
            template: __webpack_require__("../../../../../src/app/leads/inactive-leads/inactive-leads.component.html"),
            styles: [__webpack_require__("../../../../../src/app/leads/inactive-leads/inactive-leads.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__lead_service__["a" /* LeadService */]])
    ], InactiveLeadsComponent);
    return InactiveLeadsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/leads/leads.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/leads/leads.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col col-lg-12\">\n  <div class=\"panel panel-default mt-4\">\n    <!-- /.panel-heading -->\n    <div class=\"panel-body\">\n      <p>\n        <b>Leads Management</b>\n      </p>\n      <div class=\"button-group mb-3\">\n        <button (click)=\"addLead()\" class=\"btn btn-primary\">Add New</button>\n      </div>\n      <p *ngIf=\"!(resultLeads && inventories && cities && propertytypes && locations && users && statusTypes && sublocations)\">Please wait...</p>\n      <table *ngIf=\"resultLeads && inventories && cities && propertytypes && locations && users && statusTypes && sublocations\" datatable class=\"table table-bordered table-hover\"\n        style=\"table-layout:auto;\" [dtOptions]=\"dtOptions\" id=\"datatableId\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th data-priority=\"1\">Lead Information</th>\n            <th>Contact #</th>\n            <th>Type</th>\n            <th>Assigned To</th>\n            <th *ngIf=\"auth.isAdmin()\">Admin Status</th>\n            <th>Agent Status</th>\n            <th data-priority=\"2\">Operations</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"odd gradeX\" *ngFor=\"let l of resultLeads\">\n            <td>{{ l._id }}</td>\n            <td>\n              <u style=\"text-transform:capitalize;\">{{ l.clientName.toLowerCase() }}</u> want to\n              <span *ngIf=\"getInventory(l._id).purpose == 1\">\n                \"sell the {{ getPropertyType(l._id).type }}\"</span>\n              <span *ngIf=\"getInventory(l._id).purpose == 2\">\n                \"buy the {{ getPropertyType(l._id).type }}\"</span>\n              <span *ngIf=\"getInventory(l._id).purpose == 3\">\n                \"rent the {{ getPropertyType(l._id).type }}\"</span>\n              in <span *ngIf=\"getSubLocation(l._id).sublocation\">{{ getSubLocation(l._id).sublocation }},</span> \n              {{ getLocation(l._id).location }}, {{ getCity(l._id).name }}.\n              <br>\n              <b>Area</b>: {{ getInventory(l._id).area }}\n              <span *ngIf=\"getInventory(l._id).areaUnit == 1\">Sq. Feet</span>\n              <span *ngIf=\"getInventory(l._id).areaUnit == 2\">Marla</span>\n              <span *ngIf=\"getInventory(l._id).areaUnit == 3\">Kanal</span>\n              <b>Demand</b>: {{ getInventory(l._id).demand }}\n              <b>{{ getPropertyType(l._id).type }} #</b>: {{ getInventory(l._id).propNumber }}\n              <b>Street</b>: {{ getInventory(l._id).street }} <br>\n              <b>Comment</b>: {{ l.cmt }}\n            </td>\n            <td>{{ l.phoneNumber }}</td>\n\n            <td *ngIf=\"l.clientType == 1\">Owner</td>\n            <td *ngIf=\"l.clientType == 2\">Dealer</td>\n\n            <td>{{ getUser(l.assignedTo).name }}</td>\n\n            <td *ngIf=\"auth.isAdmin()\">{{ getStatusType(l.leadAdminStatus) }}</td>\n            <td>{{ getStatusType(l.leadAgentStatus) }}</td>\n            <td>\n              <a *ngIf=\"auth.isAdmin()\" (click)=\"changeStatus(l.leadAdminStatus, l._id)\" class=\"btn btn-sm btn-default\">\n                <i class=\"fas fa-exchange-alt\" style=\"font-size:1.2rem\"></i>\n              </a>\n              <a *ngIf=\"auth.isAgent()\" (click)=\"changeStatus(l.leadAgentStatus, l._id)\" class=\"btn btn-sm btn-default\">\n                <i class=\"fas fa-exchange-alt\" style=\"font-size:1.2rem\"></i>\n              </a>\n              <a (click)=\"editLead(l._id)\" class=\"btn btn-sm btn-default\">\n                <i class=\"fas fa-edit\" style=\"font-size:1.2rem\"></i>\n              </a>\n              <a (click)=\"deleteLead(l._id)\" class=\"btn btn-sm btn-default\">\n                <i class=\"fas fa-trash\" style=\"font-size:1.2rem\"></i>\n              </a>\n            </td>\n          </tr>\n\n        </tbody>\n\n        <tfoot>\n          <tr>\n            <th>\n              <input id=\"leadInput21\" type=\"text\" size=\"4\" placeholder=\"ID\" />\n            </th>\n            <th>\n              <input id=\"leadInput21\" type=\"text\" placeholder=\"Lead Info\" />\n            </th>\n            <th>\n              <input id=\"leadInput21\" type=\"text\" placeholder=\"Contact\" />\n            </th>\n            <th>\n              <input id=\"leadInput21\" type=\"text\" placeholder=\"Type\" />\n            </th>\n            <th>\n              <input id=\"leadInput21\" type=\"text\" placeholder=\"Assigned To\" />\n            </th>\n            <th *ngIf=\"auth.isAdmin()\">\n              <input id=\"leadInput21\" type=\"text\" placeholder=\"\" />\n            </th>\n            <th>\n              <input id=\"leadInput21\" type=\"text\" placeholder=\"\" />\n            </th>\n            <th>\n              <i class=\"fab fa-searchengin\" style=\"font-size:1.8rem;\"></i>\n            </th>\n          </tr>\n        </tfoot>\n\n      </table>\n\n    </div>\n    <!-- /.panel-body -->\n  </div>\n  <!-- /.panel -->\n</div>\n<!-- /.col-lg-12 -->"

/***/ }),

/***/ "../../../../../src/app/leads/leads.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeadsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lead_service__ = __webpack_require__("../../../../../src/app/lead.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LeadsComponent = /** @class */ (function () {
    function LeadsComponent(auth, router, leadService) {
        this.auth = auth;
        this.router = router;
        this.leadService = leadService;
        this.dtOptions = {};
    }
    LeadsComponent.prototype.ngOnInit = function () {
        this.getInventories();
        this.getLeads();
        this.getCities();
        this.getLocations();
        this.getSubLocations();
        this.getPropTypes();
        this.getStatusTypes();
        this.getUsers();
        this.dtOptions = {
            responsive: true,
            order: [[0, "desc"]]
        };
    };
    LeadsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.datatableElement.dtInstance.then(function (dtInstance) {
                dtInstance.columns().every(function () {
                    var that = this;
                    $('#leadInput21', this.footer()).on('keyup change', function () {
                        if (that.search() !== this['value']) {
                            that
                                .search(this['value'])
                                .draw();
                        }
                    });
                });
                $('#datatableId tfoot tr').appendTo('#datatableId thead');
            });
        }, 3000);
    };
    LeadsComponent.prototype.getLeads = function () {
        var _this = this;
        this.auth.getLeads().subscribe(function (leads) {
            _this.rawleads = leads.filter(function (leads) {
                return leads.assignedTo !== "0";
            });
            _this.leads = _this.rawleads.filter(function (rawleads) {
                return rawleads.leadAdminStatus !== 0;
            });
            if (_this.auth.isAgent) {
                _this.leads = _this.leads.filter(function (leads) {
                    return leads.leadAgentStatus !== 0;
                });
            }
            _this.resultLeads = _this.leads;
            _this.leadService.setLeads(_this.leads);
        }, function (err) {
            console.error(err);
        });
    };
    LeadsComponent.prototype.getInventories = function () {
        var _this = this;
        this.auth.getInventories().subscribe(function (inventories) {
            _this.inventories = inventories;
            _this.leadService.setInventories(_this.inventories);
        }, function (err) {
            console.error(err);
        });
    };
    LeadsComponent.prototype.getInventory = function (id) {
        for (var i = 0; i < this.inventories.length; i++) {
            if (this.inventories[i].leadId == id) {
                return this.inventories[i];
            }
        }
        console.log("invalid -> " + id);
    };
    LeadsComponent.prototype.getCities = function () {
        var _this = this;
        this.auth.getCities().subscribe(function (cities) {
            _this.cities = cities;
            _this.leadService.setCities(_this.cities);
        }, function (err) {
            console.error(err);
        });
    };
    LeadsComponent.prototype.getCity = function (id) {
        for (var j = 0; j < this.cities.length; j++) {
            if (this.cities[j]._id == this.getInventory(id).cityId) {
                return this.cities[j];
            }
        }
    };
    LeadsComponent.prototype.getPropTypes = function () {
        var _this = this;
        this.auth.getPropTypes().subscribe(function (propertytypes) {
            _this.propertytypes = propertytypes;
            _this.leadService.setPropertyTypes(_this.propertytypes);
        }, function (err) {
            console.error(err);
        });
    };
    LeadsComponent.prototype.getStatusTypes = function () {
        var _this = this;
        this.auth.getStatusTypes().subscribe(function (statusTypes) {
            _this.statusTypes = statusTypes;
        }, function (err) {
            console.error(err);
        });
    };
    LeadsComponent.prototype.getStatusType = function (id) {
        for (var i = 0; i < this.statusTypes.length; i++) {
            if (this.statusTypes[i]._id == id) {
                return this.statusTypes[i].type;
            }
        }
    };
    LeadsComponent.prototype.getPropertyType = function (id) {
        for (var j = 0; j < this.propertytypes.length; j++) {
            if (this.propertytypes[j]._id == this.getInventory(id).propTypeId) {
                return this.propertytypes[j];
            }
        }
    };
    LeadsComponent.prototype.getLocations = function () {
        var _this = this;
        this.auth.getLocations().subscribe(function (locations) {
            _this.locations = locations;
            _this.leadService.setLocations(_this.locations);
        }, function (err) {
            console.error(err);
        });
    };
    LeadsComponent.prototype.getLocation = function (id) {
        for (var j = 0; j < this.locations.length; j++) {
            if (this.locations[j]._id == this.getInventory(id).locationId) {
                return this.locations[j];
            }
        }
    };
    LeadsComponent.prototype.getSubLocations = function () {
        var _this = this;
        this.auth.getSubLocations().subscribe(function (sublocations) {
            _this.sublocations = sublocations;
        }, function (err) {
            console.error(err);
        });
    };
    LeadsComponent.prototype.getSubLocation = function (id) {
        for (var j = 0; j < this.sublocations.length; j++) {
            if (this.sublocations[j]._id == this.getInventory(id).sublocationId) {
                return this.sublocations[j];
            }
        }
        return false;
    };
    LeadsComponent.prototype.getUsers = function () {
        var _this = this;
        this.auth.getUsers().subscribe(function (users) {
            _this.users = users;
        }, function (err) {
            console.error(err);
        });
    };
    LeadsComponent.prototype.getUser = function (id) {
        for (var j = 0; j < this.users.length; j++) {
            if (this.users[j]._id == id) {
                return this.users[j];
            }
        }
    };
    LeadsComponent.prototype.changeStatus = function (statusID, leadID) {
        this.leadService.setStatusID(statusID);
        this.leadService.setLeadID(leadID);
        this.router.navigateByUrl('/editstatus');
    };
    LeadsComponent.prototype.editLead = function (id) {
        for (var i = 0; i < this.leads.length; i++) {
            if (this.leads[i]._id == id) {
                this.leadService.setLead(this.leads[i]);
                break;
            }
        }
        for (var i = 0; i < this.inventories.length; i++) {
            if (this.inventories[i].leadId == id) {
                this.leadService.setInventory(this.inventories[i]);
                break;
            }
        }
        if (this.leadService.getLead && this.leadService.getInventory) {
            this.leadService.setIsLead(true);
            this.router.navigateByUrl('/editlead');
        }
    };
    LeadsComponent.prototype.deleteLead = function (id) {
        for (var i = 0; i < this.leads.length; i++) {
            if (this.leads[i]._id == id) {
                this.leads.splice(i, 1);
                break;
            }
        }
        var isAdmin;
        if (this.auth.isAdmin())
            isAdmin = true;
        if (this.auth.isAgent())
            isAdmin = false;
        var status;
        if (isAdmin) {
            status = {
                "sid": 0,
                "lid": id,
                "isAdmin": isAdmin
            };
        }
        else {
            status = {
                "sid": 6,
                "lid": id,
                "isAdmin": isAdmin
            };
        }
        this.auth.updateStatus(status).subscribe(function () {
            console.log("success");
        }, function (err) {
            console.error(err);
        });
    };
    LeadsComponent.prototype.addLead = function () {
        this.leadService.setIsLead(true);
        this.router.navigateByUrl('/add');
    };
    LeadsComponent.areaUnits = {
        ONE: "Sq. Feet",
        TWO: "Marla",
        THREE: "Kanal"
    };
    LeadsComponent.clientTypes = {
        ONE: "Owner",
        TWO: "Dealer"
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_angular_datatables__["a" /* DataTableDirective */])
    ], LeadsComponent.prototype, "datatableElement", void 0);
    LeadsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-leads',
            template: __webpack_require__("../../../../../src/app/leads/leads.component.html"),
            styles: [__webpack_require__("../../../../../src/app/leads/leads.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__lead_service__["a" /* LeadService */]])
    ], LeadsComponent);
    return LeadsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login-component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid {\r\n    background-image: url(\"https://s-media-cache-ak0.pinimg.com/originals/16/06/9b/16069b7e763dfa96c9390be8028ddc2c.jpg\");\r\n\tbackground-size: cover;\r\n    background-attachment: fixed;\r\n    min-height: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.login {\r\n    border: 2px solid #000;\r\n\tborder-radius: 15px;\r\n\t-webkit-box-shadow: 7px 7px 15px rgba(0,0,0,0.6);\r\n\t        box-shadow: 7px 7px 15px rgba(0,0,0,0.6);\r\n\tmargin-top: 14%;\r\n\topacity: 0.85;\r\n\tpadding: 15px;\r\n    background-color: black;\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <div class=\"row\">\n    \n    <div class=\"col-md-6 col-md-offset-3 mx-auto login\">\n\n      <h1 class=\"form-signin-heading\">Sign in</h1>\n  \n      <form (submit)=\"login()\">\n        <div class=\"form-group\">\n          <label for=\"email\">Email address</label>\n          <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"credentials.email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Sign in!</button>\n      </form>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
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



var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.credentials).subscribe(function () {
            _this.router.navigateByUrl('/profile');
        }, function (err) {
            console.error(err);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login-component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/options/options.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mb-4\">\n  <!-- \n  Manage Cities \n  - add city\n  - edit city\n  - delete city\n-->\n  <div class=\"alert alert-success mt-3\">\n    <b>Cities</b>\n  </div>\n  <div class=\"row\">\n    <div class=\"col mt-3\">\n      <p>\n        <b>Add New City</b>\n      </p>\n      <form (submit)=\"addCity()\">\n\n        <!-- New city name is entered in this input -->\n        <div class=\"form-group\">\n          <input type=\"text\" name=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Enter city\" [(ngModel)]=\"city.name\">\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-primary\">Add City</button>\n      </form>\n    </div>\n    <div class=\"col mt-3\">\n      <p>\n        <b>Added Cities</b>\n      </p>\n      <form>\n\n        <!-- Get city names here for editing -->\n        <div class=\"form-group\">\n          <select class=\"form-control\" id=\"selectCity\" name=\"cityId\">\n            <option *ngFor=\"let city of cities\" value=\"{{ city?._id }}\">{{ city?.name }}</option>\n          </select>\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-primary\">Edit</button>\n        <button type=\"submit\" class=\"btn btn-danger\">Delete</button>\n      </form>\n    </div>\n  </div>\n\n  <!-- \n  Manage Locations \n  - add Location\n  - edit Location\n  - delete Location\n-->\n  <div class=\"alert alert-success mt-3\">\n    <b>Locations</b>\n  </div>\n  <div class=\"row\">\n    <div class=\"col mt-3\">\n      <p>\n        <b>Add New Location</b>\n      </p>\n      <form (submit)=\"addLoc()\">\n\n        <!-- City names are get here to add location -->\n        <div class=\"form-group\">\n          <select class=\"form-control\" id=\"selectCity\" name=\"cityId\" [(ngModel)]=\"location.cityId\">\n            <option *ngFor=\"let city of cities\" value=\"{{ city?._id }}\">{{ city?.name }}</option>\n          </select>\n        </div>\n\n        <!-- New location will be entered here -->\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" name=\"location\" id=\"inputLocation\" placeholder=\"Enter location\" [(ngModel)]=\"location.location\">\n        </div>\n\n        <!-- New location will be entered here -->\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" name=\"sublocation\" id=\"inputSubLocation\" placeholder=\"Enter sub location\" [(ngModel)]=\"location.sublocation\">\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-primary\">Add Location</button>\n      </form>\n    </div>\n    <div class=\"col mt-3\">\n      <p>\n        <b>Added Locations</b>\n      </p>\n      <form>\n\n        <!-- Get city names here for editing location -->\n        <div class=\"form-group\">\n          <select class=\"form-control\" id=\"selectCity\" name=\"cityId\" (change)=\"onChange($event.target.value)\">\n            <option *ngFor=\"let city of cities\" value=\"{{ city?._id }}\">{{ city?.name }}</option>\n          </select>\n        </div>\n\n        <!-- Location is get here for editing and deleting -->\n        <div class=\"form-group\">\n          <select class=\"form-control\" id=\"selectLocation\" name=\"locId\" (change)=\"onLocChange($event.target.value)\">\n            <option *ngFor=\"let loc of newLocations\" value=\"{{ loc?._id }}\">{{ loc?.location }}</option>\n          </select>\n        </div>\n\n        <div class=\"form-group\">\n          <select class=\"form-control\" id=\"selectSubLocation\" name=\"locId\">\n            <option *ngFor=\"let sloc of newSubLocations\" value=\"{{ sloc?._id }}\">{{ sloc?.sublocation }}</option>\n          </select>\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-primary\">Edit</button>\n        <button type=\"submit\" class=\"btn btn-danger\">Delete</button>\n      </form>\n    </div>\n  </div>\n\n  <!-- \n  Manage Property Types\n-->\n  <div class=\"alert alert-success mt-3\">\n    <b>Property Types</b>\n  </div>\n  <div class=\"row\">\n    <div class=\"col mt-3\">\n      <p>\n        <b>Add New Type</b>\n      </p>\n      <form (submit)=\"addPropType()\">\n\n        <!-- New property type is entered here for adding in DB -->\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" name=\"type\" id=\"inputType\" placeholder=\"Enter property type\" [(ngModel)]=\"propType.type\">\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-primary\">Add Property Type</button>\n      </form>\n    </div>\n    <div class=\"col mt-3\">\n      <p>\n        <b>Added Types</b>\n      </p>\n      <form>\n\n        <!-- Property type is get here for editing and deleting -->\n        <div class=\"form-group\">\n          <select class=\"form-control\" id=\"selectPropertyType\" name=\"propTypeId\">\n            <option *ngFor=\"let type of propTypes\" value=\"{{ type?._id }}\">{{ type?.type }}</option>\n          </select>\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-primary\">Edit</button>\n        <button type=\"submit\" class=\"btn btn-danger\">Delete</button>\n      </form>\n    </div>\n  </div>\n\n  <!-- \n  Manage Status Types\n-->\n  <div class=\"alert alert-success mt-3\">\n    <b>Status Types</b>\n  </div>\n  <div class=\"row\">\n    <div class=\"col mt-3\">\n      <p>\n        <b>Add New Status</b>\n      </p>\n      <form (submit)=\"addStatusType()\">\n\n        <!-- New status type is entered here for adding in DB -->\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" name=\"type\" id=\"inputType\" placeholder=\"Enter status type\" [(ngModel)]=\"statusType.type\">\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-primary\">Add Status Type</button>\n      </form>\n    </div>\n    <div class=\"col mt-3\">\n      <p>\n        <b>Added Status</b>\n      </p>\n      <form>\n\n        <!-- Status type is get here for editing and deleting -->\n        <div class=\"form-group\">\n          <select class=\"form-control\" id=\"selectStatusType\" name=\"statusTypeId\">\n            <option *ngFor=\"let type of statusTypes\" value=\"{{ type?._id }}\">{{ type?.type }}</option>\n          </select>\n        </div>\n      </form>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/options/options.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
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



var OptionsComponent = /** @class */ (function () {
    /////////////////////////////////////////////////////////
    function OptionsComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        /***************
         For city operations
        *****************/
        // For adding city
        this.city = {
            name: ''
        };
        ///////////////////////////////////////////////
        /***************
         For location operations
        *****************/
        // For adding location & sub-locations
        this.location = {
            cityId: 0,
            location: '',
            sublocation: ''
        };
        ///////////////////////////////////////////////
        /***************
         For property type operations
        *****************/
        // Adding property type
        this.propType = {
            type: ""
        };
        /////////////////////////////////////////////////////////
        ///////////////////////////////////////////////
        /***************
         For status type operations
        *****************/
        // Adding status type
        this.statusType = {
            type: ""
        };
    }
    OptionsComponent.prototype.addCity = function () {
        var _this = this;
        this.auth.addCity(this.city).subscribe(function () {
            _this.getCities();
            _this.router.navigateByUrl('/options');
        }, function (err) {
            console.error(err);
        });
    };
    OptionsComponent.prototype.getCities = function () {
        var _this = this;
        this.auth.getCities().subscribe(function (cities) {
            _this.cities = cities;
        }, function (err) {
            console.error(err);
        });
    };
    OptionsComponent.prototype.onChange = function (id) {
        this.newLocations = this.locations.filter(function (locations) {
            return locations.cityId == id;
        });
    };
    OptionsComponent.prototype.addLoc = function () {
        var _this = this;
        this.auth.addLoc(this.location).subscribe(function () {
            _this.getLocations();
            _this.getSubLocations();
            _this.router.navigateByUrl('/options');
        }, function (err) {
            console.error(err);
        });
    };
    OptionsComponent.prototype.getLocations = function () {
        var _this = this;
        this.auth.getLocations().subscribe(function (locations) {
            _this.locations = locations;
        }, function (err) {
            console.error(err);
        });
    };
    OptionsComponent.prototype.onLocChange = function (id) {
        this.newSubLocations = this.sublocations.filter(function (sublocations) {
            return sublocations.locationId == id;
        });
    };
    OptionsComponent.prototype.getSubLocations = function () {
        var _this = this;
        this.auth.getSubLocations().subscribe(function (sublocations) {
            _this.sublocations = sublocations;
        }, function (err) {
            console.error(err);
        });
    };
    OptionsComponent.prototype.addPropType = function () {
        var _this = this;
        this.auth.addPropType(this.propType).subscribe(function () {
            _this.getPropTypes();
            _this.router.navigateByUrl('/options');
        }, function (err) {
            console.error(err);
        });
    };
    OptionsComponent.prototype.getPropTypes = function () {
        var _this = this;
        this.auth.getPropTypes().subscribe(function (propTypes) {
            _this.propTypes = propTypes;
        }, function (err) {
            console.error(err);
        });
    };
    OptionsComponent.prototype.addStatusType = function () {
        var _this = this;
        this.auth.addStatusType(this.statusType).subscribe(function () {
            _this.getStatusTypes();
            _this.router.navigateByUrl('/options');
        }, function (err) {
            console.error(err);
        });
    };
    OptionsComponent.prototype.getStatusTypes = function () {
        var _this = this;
        this.auth.getStatusTypes().subscribe(function (statusTypes) {
            _this.statusTypes = statusTypes;
        }, function (err) {
            console.error(err);
        });
    };
    OptionsComponent.prototype.ngOnInit = function () {
        this.getCities();
        this.getLocations();
        this.getSubLocations();
        this.getPropTypes();
        this.getStatusTypes();
    };
    OptionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-options',
            template: __webpack_require__("../../../../../src/app/options/options.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], OptionsComponent);
    return OptionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/options/status/status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/options/status/status.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col align-self-center box-head\">\n      <form (submit)=\"updateStatus()\">\n        <div class=\"form-group col-md-3 mt-3\">\n          <label for=\"status\">Change Status</label>\n          <select class=\"form-control\" id=\"selectStatus\" name=\"statusId\" [(ngModel)]=\"statusID\">\n              <option *ngFor=\"let type of statusTypes\" value=\"{{ type?._id }}\">{{ type?.type }}</option>\n          </select>\n        </div>\n\n        <div class=\"text-left ml-3\">\n            <button type=\"submit\" class=\"btn btn-success\">Update & Go Back</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/options/status/status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lead_service__ = __webpack_require__("../../../../../src/app/lead.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StatusComponent = /** @class */ (function () {
    function StatusComponent(auth, router, leadService) {
        this.auth = auth;
        this.router = router;
        this.leadService = leadService;
    }
    StatusComponent.prototype.ngOnInit = function () {
        this.getStatus();
        this.getStatusTypes();
        this.getLead();
        this.setIsAdmin();
    };
    StatusComponent.prototype.setIsAdmin = function () {
        if (this.auth.isAdmin())
            this.isAdmin = true;
        if (this.auth.isAgent())
            this.isAdmin = false;
    };
    StatusComponent.prototype.getStatus = function () {
        this.statusID = this.leadService.getStatusID();
    };
    StatusComponent.prototype.getLead = function () {
        this.leadID = this.leadService.getLeadID();
    };
    StatusComponent.prototype.getStatusTypes = function () {
        var _this = this;
        this.auth.getStatusTypes().subscribe(function (statusTypes) {
            _this.statusTypes = statusTypes.filter(function (statusTypes) {
                return statusTypes._id !== 0;
            });
        }, function (err) {
            console.error(err);
        });
    };
    StatusComponent.prototype.updateStatus = function () {
        var _this = this;
        var status = {
            "sid": this.statusID,
            "lid": this.leadID,
            "isAdmin": this.isAdmin
        };
        this.auth.updateStatus(status).subscribe(function () {
            _this.router.navigateByUrl('/leads');
        }, function (err) {
            console.error(err);
        });
    };
    StatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-status',
            template: __webpack_require__("../../../../../src/app/options/status/status.component.html"),
            styles: [__webpack_require__("../../../../../src/app/options/status/status.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__lead_service__["a" /* LeadService */]])
    ], StatusComponent);
    return StatusComponent;
}());



/***/ }),

/***/ "../../../../../src/app/users/edit-user/edit-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/edit-user/edit-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-md-6\" class=\"mt-4\">\n      <form (submit)=\"updateUser()\">\n        <div class=\"form-group\">\n          <label for=\"name\">Full name</label>\n          <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Enter name\" [(ngModel)]=\"credentials.name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"email\">Email address</label>\n          <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"credentials.email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"contact\">Contact #</label>\n          <input type=\"text\" class=\"form-control\" name=\"contact\" placeholder=\"Enter phone number\" [(ngModel)]=\"credentials.phone\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"contact\">Location</label>\n          <input type=\"text\" class=\"form-control\" name=\"location\" placeholder=\"Enter location of user\" [(ngModel)]=\"credentials.location\">\n        </div>\n        <div class=\"form-group\">\n          <p>User Access</p>\n          <select class=\"form-control\" id=\"selectAccess\" name=\"access\" [(ngModel)]=\"credentials.access\">\n            <option value=\"1\">Admin</option>\n            <option value=\"2\">Agent</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <p>Status</p>\n          <select class=\"form-control\" id=\"selectAccess\" name=\"status\" [(ngModel)]=\"credentials.status\">\n            <option value=\"1\">Active</option>\n            <option value=\"2\">Inactive</option>\n          </select>\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-default\">Update User!</button>\n      </form>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/users/edit-user/edit-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lead_service__ = __webpack_require__("../../../../../src/app/lead.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(auth, router, leadService) {
        this.auth = auth;
        this.router = router;
        this.leadService = leadService;
    }
    EditUserComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    EditUserComponent.prototype.getUser = function () {
        this.credentials = this.leadService.getUser();
    };
    EditUserComponent.prototype.updateUser = function () {
        var _this = this;
        console.log(this.credentials);
        this.auth.updateUser(this.credentials).subscribe(function () {
            _this.router.navigateByUrl('/users');
        }, function (err) {
            console.error(err);
        });
    };
    EditUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'app-edit-user',
            template: __webpack_require__("../../../../../src/app/users/edit-user/edit-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/edit-user/edit-user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__lead_service__["a" /* LeadService */]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/users/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n * Globals\r\n */\r\n\r\n/* Links */\r\n\r\na,\r\na:focus,\r\na:hover {\r\n  color: #fff;\r\n}\r\n\r\n/* Custom default button */\r\n\r\n.btn-secondary,\r\n.btn-secondary:hover,\r\n.btn-secondary:focus {\r\n  color: #333;\r\n  text-shadow: none; /* Prevent inheritance from `body` */\r\n  background-color: #fff;\r\n  border: .05rem solid #fff;\r\n}\r\n\r\n/*\r\n * Base structure\r\n */\r\n\r\n.profile {\r\n  height: 92%;\r\n  background-color: #333;\r\n  display: -ms-flexbox;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -ms-flex-pack: center;\r\n  -webkit-box-pack: center;\r\n  justify-content: center;\r\n  color: #fff;\r\n  text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);\r\n  -webkit-box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);\r\n          box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);\r\n}\r\n\r\n.cover-container {\r\n  max-width: 42em;\r\n}\r\n\r\n/*\r\n * Header\r\n */\r\n\r\n.masthead {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.masthead-brand {\r\n  margin-bottom: 0;\r\n}\r\n\r\n/*\r\n * Cover\r\n */\r\n\r\n.cover {\r\n  padding: 0 1.5rem;\r\n}\r\n\r\n.cover .btn-lg {\r\n  padding: .75rem 1.25rem;\r\n  font-weight: 700;\r\n}\r\n\r\n/*\r\n * Footer\r\n */\r\n\r\n.mastfoot {\r\n  color: rgba(255, 255, 255, .5);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile\">\n  <div class=\"cover-container d-flex h-100 p-3 mx-auto flex-column text-center\">\n\n    <main role=\"main\" class=\"inner cover\">\n      <h1 class=\"cover-heading\">Welcome {{ details?.name }}</h1>\n\n      <p *ngIf=\"details?.access == 1\" class=\"lead\">\n        <b>Acct Type:</b> Admin\n        <br>\n        <b>Email:</b> {{ details?.email }}\n        <br>\n        <b>Phone:</b> {{ details?.phone }}\n      </p>\n      <p *ngIf=\"details?.access == 2\" class=\"lead\">\n        <b>Acct Type:</b> Agent\n        <br>\n        <b>Email:</b> {{ details?.email }}\n        <br>\n        <b>Phone:</b> {{ details?.phone }}\n      </p>\n\n      <p class=\"lead\">\n        <a routerLink=\"/leads\" class=\"btn btn-lg btn-secondary\">View Leads</a>\n      </p>\n    </main>\n\n    <footer class=\"mastfoot mt-auto\">\n      <div class=\"inner\">\n        <p>Created for Marwat Associates</p>\n      </div>\n    </footer>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/users/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lead_service__ = __webpack_require__("../../../../../src/app/lead.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth, leadService) {
        this.auth = auth;
        this.leadService = leadService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.profile().subscribe(function (user) {
            _this.details = user;
            _this.leadService.setUserId(_this.details._id);
        }, function (err) {
            console.error(err);
        });
        this.getInventories();
        this.getLeads();
        this.getCities();
        this.getLocations();
        this.getPropTypes();
    };
    ProfileComponent.prototype.getLeads = function () {
        var _this = this;
        this.auth.getLeads().subscribe(function (leads) {
            _this.leads = leads;
            _this.leadService.setLeads(_this.leads);
        }, function (err) {
            console.error(err);
        });
    };
    ProfileComponent.prototype.getInventories = function () {
        var _this = this;
        this.auth.getInventories().subscribe(function (inventories) {
            _this.inventories = inventories;
            _this.leadService.setInventories(_this.inventories);
        }, function (err) {
            console.error(err);
        });
    };
    ProfileComponent.prototype.getCities = function () {
        var _this = this;
        this.auth.getCities().subscribe(function (cities) {
            _this.cities = cities;
            _this.leadService.setCities(_this.cities);
        }, function (err) {
            console.error(err);
        });
    };
    ProfileComponent.prototype.getPropTypes = function () {
        var _this = this;
        this.auth.getPropTypes().subscribe(function (propertytypes) {
            _this.propertytypes = propertytypes;
            _this.leadService.setPropertyTypes(_this.propertytypes);
        }, function (err) {
            console.error(err);
        });
    };
    ProfileComponent.prototype.getLocations = function () {
        var _this = this;
        this.auth.getLocations().subscribe(function (locations) {
            _this.locations = locations;
            _this.leadService.setLocations(_this.locations);
        }, function (err) {
            console.error(err);
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/users/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__lead_service__["a" /* LeadService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/users/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-md-6\" class=\"mt-4\">\n      <form (submit)=\"register()\">\n        <div class=\"form-group\">\n          <label for=\"name\">Full name</label>\n          <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Enter name\" [(ngModel)]=\"credentials.name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"email\">Email address</label>\n          <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"credentials.email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"contact\">Contact #</label>\n          <input type=\"text\" class=\"form-control\" name=\"contact\" placeholder=\"Enter phone number\" [(ngModel)]=\"credentials.phone\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"contact\">Location</label>\n          <input type=\"text\" class=\"form-control\" name=\"location\" placeholder=\"Enter location of user\" [(ngModel)]=\"credentials.location\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\">\n        </div>\n        <div class=\"form-group\">\n          <p>User Access</p>\n          <div class=\"form-check form-check-inline\">\n            <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"credentials.access\" name=\"access\" id=\"inlineRadio1\" value=\"1\">\n            <label class=\"form-check-label\" for=\"access\">Admin</label>\n          </div>\n          <div class=\"form-check form-check-inline\">\n            <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"credentials.access\" name=\"access\" id=\"inlineRadio2\" value=\"2\">\n            <label class=\"form-check-label\" for=\"access\">Agent</label>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <p>Status</p>\n          <div class=\"form-check form-check-inline\">\n            <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"credentials.status\" name=\"status\" id=\"inlineRadio1\" value=\"1\">\n            <label class=\"form-check-label\" for=\"status\">Active</label>\n          </div>\n          <div class=\"form-check form-check-inline\">\n            <input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"credentials.status\" name=\"status\" id=\"inlineRadio2\" value=\"2\">\n            <label class=\"form-check-label\" for=\"status\">Inactive</label>\n          </div>\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-default\">Add User!</button>\n      </form>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/users/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
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



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {
            email: '',
            name: '',
            password: '',
            phone: '',
            location: '',
            access: 2,
            status: 1
        };
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.auth.register(this.credentials).subscribe(function () {
            _this.router.navigateByUrl('/users');
        }, function (err) {
            console.error(err);
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/users/register/register.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col col-lg-12\">\n    <div class=\"panel panel-default mt-4\">\n      <!-- /.panel-heading -->\n      <div class=\"panel-body\">\n        <button class=\"btn btn-info btn-sm mb-3\" routerLink=\"/register\">Add new user</button>\n        <button class=\"btn btn-info btn-sm mb-3\">Send Message</button>\n          <p *ngIf=\"!users\">Please wait...</p>\n          <table *ngIf=\"users\" datatable=\"ng\" class=\"table table-bordered table-hover\" id=\"datatableId\" [dtOptions]=\"dtOptions\">\n            <thead>\n              <tr>\n                <th>User ID</th>\n                <th>Full Name</th>\n                <th>Contact #</th>\n                <th>Location</th>\n                <th>Email Address</th>\n                <th>Access</th>\n                <th>Status</th>\n                <th>Operations</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr class=\"odd gradeX\" *ngFor=\"let u of users\">\n                <td>{{ u._id.substr(u._id.length - 4) }}</td>\n                <td>{{ u.name }}</td>\n                <td>{{ u.phone }}</td>\n                <td>{{ u.location }}</td>\n                <td>{{ u.email }}</td>\n  \n                <td *ngIf=\"u.access == 1\">Admin</td>\n                <td *ngIf=\"u.access == 2\">Agent</td>\n                <td *ngIf=\"u.access == 3\">Editor</td>\n  \n                <td *ngIf=\"u.status == 1\">Active</td>\n                <td *ngIf=\"u.status == 2\">Inactive</td>\n                <td>\n                  <a (click)=\"editUser(u._id)\" class=\"btn btn-sm btn-default\">\n                    <i class=\"fas fa-edit\" style=\"font-size:1.2rem\"></i> Edit\n                  </a>\n                </td>\n              </tr>\n  \n            </tbody>\n\n            <tfoot>\n              <tr>\n                <th><input id=\"userInput21\" type=\"text\" placeholder=\"Search ID\" /></th>\n                <th><input id=\"userInput21\" type=\"text\" placeholder=\"Search Name\" /></th>\n                <th><input id=\"userInput21\" type=\"text\" placeholder=\"Search Contact\" /></th>\n                <th><input id=\"userInput21\" type=\"text\" placeholder=\"Search Location\" /></th>\n                <th><input id=\"userInput21\" type=\"text\" placeholder=\"Search Email\" /></th>\n                <th><input id=\"userInput21\" type=\"text\" placeholder=\"Search Access\" /></th>\n                <th><input id=\"userInput21\" type=\"text\" placeholder=\"Search Status\" /></th>\n                <th><i class=\"fab fa-searchengin\" style=\"font-size:1.8rem;\"></i></th>\n              </tr>\n            </tfoot>\n\n          </table>\n  \n      </div>\n      <!-- /.panel-body -->\n    </div>\n    <!-- /.panel -->\n  </div>\n  <!-- /.col-lg-12 -->"

/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lead_service__ = __webpack_require__("../../../../../src/app/lead.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersComponent = /** @class */ (function () {
    function UsersComponent(auth, router, leadService) {
        this.auth = auth;
        this.router = router;
        this.leadService = leadService;
        this.dtOptions = {};
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.dtOptions = {
            responsive: true
        };
    };
    UsersComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.datatableElement.dtInstance.then(function (dtInstance) {
                dtInstance.columns().every(function () {
                    var that = this;
                    $('#userInput21', this.footer()).on('keyup change', function () {
                        if (that.search() !== this['value']) {
                            that
                                .search(this['value'])
                                .draw();
                        }
                    });
                    $('#datatableId tfoot tr').appendTo('#datatableId thead');
                });
            });
        }, 3000);
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.auth.getUsers().subscribe(function (users) {
            _this.users = users;
        }, function (err) {
            console.error(err);
        });
    };
    UsersComponent.prototype.editUser = function (id) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i]._id == id) {
                this.leadService.setUser(this.users[i]);
                break;
            }
        }
        if (this.leadService.getUser) {
            this.router.navigateByUrl("/edituser");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_0_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_angular_datatables__["a" /* DataTableDirective */])
    ], UsersComponent.prototype, "datatableElement", void 0);
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__lead_service__["a" /* LeadService */]])
    ], UsersComponent);
    return UsersComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
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