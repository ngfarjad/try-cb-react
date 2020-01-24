function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/+cart/cart.component.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/+cart/cart.component.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCartCartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    <button type=\"button\" class=\"btn btn-xs btn-danger\" (click)=\"clearCart()\">\n        <i class=\"glyphicon glyphicon-remove-circle\"></i> Clear Cart</button>\n</div>\n<div>\n    <table class=\"table table-striped\">\n        <thead>\n            <tr>\n                <th>Airline</th>\n                <th>Flight</th>\n                <th>Departure</th>\n                <th>From</th>\n                <th>To</th>\n                <th>Price</th>\n                <th>Reservation</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let row of cart\">\n                <td>{{row.name}}</td>\n                <td>{{row.flight}}</td>\n                <td>{{row.date}}</td>\n                <td>{{row.sourceairport | uppercase}}</td>\n                <td>{{row.destinationairport | uppercase}}</td>\n                <td>${{row.price}}</td>\n                <td>\n                    <button class=\"btn btn-xs btn-primary\" type=\"button\" (click)=\"book(row)\">Book</button>\n                    <button class=\"btn btn-xs btn-primary btn-danger\" type=\"button\" (click)=\"remove(row)\" title=\"remove\"><i class=\"glyphicon glyphicon-remove-circle\"></i></button>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n<div *ngIf=\"error\" class=\"bg-danger text-danger\">Error: {{error | json}}</div>\n<div *ngIf=\"added\" class=\"bg-success\">Added: {{added | json }}</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/+home/home.component.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/+home/home.component.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <div class=\"container-fluid panel-container\">\n                        <div class=\"col-xs-6 text-left\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-12\">\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xs-12\">\n                                    <small><strong>Find a Flight</strong></small>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel-body\">\n                    <div class=\"col-sm-12\">\n                        <form class=\"form-horizontal\" role=\"form\" name=\"travelForm\" novalidate>\n                            <div class=\"form-group\">\n                                <label class=\"col-sm-3 control-label\">AIRPORT OR CITY</label>\n                                <div class=\"col-sm-9\">\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">From</span>\n                                        <input [(ngModel)]=\"from\"\n                                             [ngModelOptions]=\"{standalone: true}\"\n                                             [typeahead]=\"getFromAirport()\"\n                                             (typeaheadLoading)=\"changeTypeaheadLoading($event)\"\n                                             (typeaheadNoResults)=\"changeTypeaheadNoResults($event)\"\n                                             (typeaheadOnSelect)=\"typeaheadOnSelect($event)\"\n                                             [typeaheadOptionsLimit]=\"10\"\n                                             [typeaheadOptionField]=\"'airportname'\"\n                                             [typeaheadWaitMs]=\"500\"\n                                             placeholder=\"Locations loaded with timeout\"\n                                             class=\"input-sm form-control\">\n                                        <span class=\"input-group-addon \">To</span>\n                                        <input [(ngModel)]=\"to\"\n                                             [ngModelOptions]=\"{standalone: true}\"\n                                             [typeahead]=\"getToAirport()\"\n                                             (typeaheadLoading)=\"changeTypeaheadLoading($event)\"\n                                             (typeaheadNoResults)=\"changeTypeaheadNoResults($event)\"\n                                             (typeaheadOnSelect)=\"typeaheadOnSelect($event)\"\n                                             [typeaheadOptionsLimit]=\"10\"\n                                             [typeaheadOptionField]=\"'airportname'\"\n                                             [typeaheadWaitMs]=\"500\"\n                                             placeholder=\"Locations loaded with timeout\"\n                                             class=\"input-sm form-control\">\n                                    </div>\n                                    <div *ngIf=\"typeaheadLoading===true\">\n                                      <i class=\"glyphicon glyphicon-refresh ng-hide\" ></i>\n                                    </div>\n                                    <div *ngIf=\"typeaheadNoResults===true\" class=\"\">\n                                      <i class=\"glyphicon glyphicon-remove\" style=\"font-size:8px\"></i> No Results Found\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"col-sm-3 control-label\">TRAVEL DATES</label>\n                                <div class=\"col-sm-9\">\n                                    <div class=\"input-daterange\" id=\"datepicker\">\n                                        <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">Leave</span>\n                                            <input type=\"text\" class=\"input-sm form-control\" name=\"start\" id=\"leaveDate\" [(ngModel)]=\"leaves\"\n                                                 [ngModelOptions]=\"{standalone: true}\"\n                                                placeholder=\"travel date (mm/dd/YYYY)\" />\n                                            <span class=\"input-group-addon\" id=\"retSpan\">Return</span>\n                                            <input type=\"text\" class=\"input-sm form-control\" id=\"retDate\" [(ngModel)]=\"returns\"\n                                                 [ngModelOptions]=\"{standalone: true}\" placeholder=\"optional return date (mm/dd/YYYY)\" />\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <button class=\"btn btn-primary pull-right btn-sm\" type=\"button\" (click)=\"findFlights(from, to, leaves, returns)\">\n                                        Find Flights\n                                    </button>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n                <div class=\"panel-footer panel-default clearfix\"><div class=\"row pull-right\">\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-4\"></div>\n    </div>\n  </div>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"panel panel-default\" *ngIf=\"outboundData\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">Available Outbound Leg Flights </h3>\n            </div>\n            <div class=\"panel-body\">\n                <h4>{{from}} -> {{to}}</h4>\n                <table class=\"table table-striped\">\n                    <thead>\n                        <tr>\n                            <th>Airline</th>\n                            <th>Flight</th>\n                            <th>Departure</th>\n                            <th>From</th>\n                            <th>To</th>\n                            <th>Aircraft</th>\n                            <th>Price</th>\n                            <th>Reservation</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let row of outboundData\">\n                            <td>{{row.name}}</td>\n                            <td>{{row.flight}}</td>\n                            <td>{{row.utc}}</td>\n                            <td>{{row.sourceairport | uppercase}}</td>\n                            <td>{{row.destinationairport | uppercase}}</td>\n                            <td>{{row.equipment}}</td>\n                            <td>${{row.price}}</td>\n                            <td>\n                                <button class=\"btn btn-xs btn-primary\" [disabled]=\"inCart(row)\" type=\"button\" (click)=\"choose(row, leaves)\">\n                                    Choose\n                                </button>\n                                <i class=\"glyphicon glyphicon-check text-success\" *ngIf=\"inCart(row)\"></i>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class=\"panel-footer\">\n            </div>\n        </div>\n        <div class=\"panel panel-default\" *ngIf=\"inboundData\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">Available Return Leg Flights </h3>\n            </div>\n            <div class=\"panel-body\">\n                <h4>{{to}} -> {{from}}</h4>\n                <table class=\"table table-striped\">\n                    <thead>\n                        <tr>\n                            <th>Airline</th>\n                            <th>Flight</th>\n                            <th>Departure</th>\n                            <th>From</th>\n                            <th>To</th>\n                            <th>Aircraft</th>\n                            <th>Price</th>\n                            <th>Reservation</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let row of inboundData\">\n                            <td>{{row.name}}</td>\n                            <td>{{row.flight}}</td>\n                            <td>{{row.utc}}</td>\n                            <td>{{row.sourceairport | uppercase}}</td>\n                            <td>{{row.destinationairport | uppercase}}</td>\n                            <td>{{row.equipment}}</td>\n                            <td>${{row.price}}</td>\n                            <td>\n                                <button class=\"btn btn-xs btn-primary\" type=\"button\" (click)=\"choose(row, returns)\">\n                                    Choose\n                                </button>\n                                <i class=\"glyphicon glyphicon-check text-success\" *ngIf=\"inCart(row)\"></i>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div class=\"panel-footer\">\n            </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/+hotels/hotels.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/+hotels/hotels.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHotelsHotelsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n      <h3>Find Hotels</h3>\n  </div>\n  <div class=\"panel-body\">\n  <form [formGroup]=\"hotelForm\"\n        (ngSubmit)=\"findHotels(hotelForm.value)\"\n        class=\"form-inline\"\n        [class.has-error]=\"!hotelForm.valid\">\n\n    <div class=\"form-group\">\n      <label for=\"descriptionInput\">Description</label>\n      <input type=\"text\"\n             id=\"descriptionInput\"\n             placeholder=\"optional keyword\"\n             formControlName=\"description\"\n             class=\"form-control\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"locationInput\">Location</label>\n      <input type=\"text\"\n             id=\"locationInput\"\n             placeholder=\"eg. 'London', 'France'...\"\n             formControlName=\"location\"\n             class=\"form-control\">\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-primary btn-sm\">Find Hotels</button>\n  </form>\n</div>\n</div>\n\n<div class=\"panel panel-default\" *ngIf=\"data\">\n    <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Matching Hotels</h3>\n    </div>\n    <div class=\"panel-body\">\n        <div *ngIf=\"data.length == 0\">\n            No matching Hotels\n        </div>\n        <table *ngIf=\"data.length > 0\" class=\"table table-striped\">\n            <thead>\n                <tr>\n                    <th>Name</th>\n                    <th>Address</th>\n                    <th>Description</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let line of data\">\n                    <td class=\"header\">{{line.name}}</td>\n                    <td>{{line.address}}</td>\n                    <td>{{line.description}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <div class=\"panel-footer\">\n        <span *ngIf=\"data.length\">\n        {{data.length}} matching hotels.</span>\n    </div>\n</div>\n\n<div class=\"has-error\" *ngIf=\"error\">\n    <div class=\"help-block\">There was an error (<a data-toggle=\"collapse\" data-target=\"#errorDetail\">click for details</a>)\n    </div>\n\n    <div id=\"errorDetail\" class=\"collapse\">{{error | json}}</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/+login/login.component.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/+login/login.component.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"panel\">\n      <div class=\"panel-heading\">\n        <img src=\"assets/CBTravel.LOGO.png\">\n      </div>\n      <div class=\"panel-body\">\n        <form role=\"form\" class=\"form-signin\" name=\"loginForm\" novalidate>\n        <h3 class=\"form-signin-heading\" [hidden]=\"!isNew\">Pleaze Take a Moment to Create an Account</h3>\n        <h3 class=\"form-signin-heading\" [hidden]=\"isNew\">Please Enter Your Username and Password</h3>\n        <div class=\"alert alert-warning\" role=\"alert\" [hidden]=\"!loginError\">{{loginError | json}}</div>\n        <input type=\"text\" placeholder=\"Please Enter Your Email Address\" required [(ngModel)]=\"username\" (keyup)=\"loginError=null\" name=\"username\" class=\"form-control\" />\n        <input type=\"password\" placeholder=\"Enter a password\" required=\"\" [(ngModel)]=\"password\" (keyup)=\"loginError=null\" class=\"form-control\" name=\"password\" />\n        <label class=\"checkbox\">\n          <input #newUser type=\"checkbox\" checked (change)=\"isNew=newUser.checked\" />New User\n        </label>\n        <button type=\"button\" class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"!username || !password\" (click)=\"login(username, password, isNew)\">Sign in</button>\n        </form>\n      </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/+user/user.component.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/+user/user.component.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Flights booked for {{user}}:</h3>\n    </div>\n    <div class=\"panel-body\">\n        <div *ngIf=\"booked && booked.length == 0\">\n            <h3>{{user}}, you have no booked flights</h3>\n            <p>\n                <a [routerLink]=\"[ '/home']\"><i class=\"glyphicon glyphicon-send\"></i>&nbsp;search flights</a>\n                or\n                <a [routerLink]=\"[ '/cart']\"><i class=\"glyphicon glyphicon-shopping-cart\"></i>&nbsp;purchase flights in the cart\n              </a>.\n            </p>\n        </div>\n        <table *ngIf=\"booked && booked.length > 0\" class=\"table table-striped\">\n            <thead>\n                <tr>\n                    <th>Description</th>\n                    <th>Date</th>\n                    <th>From</th>\n                    <th>To</th>\n                    <th>Price</th>\n                    <th>Booked Via</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let b of booked\">\n                    <td>{{b.name}} {{b.flight}}</td>\n                    <td>{{b.date}}</td>\n                    <td>{{b.sourceairport}}</td>\n                    <td>{{b.destinationairport}}</td>\n                    <td>${{b.price}}</td>\n                    <td>{{b.bookedon}}</td>\n                </tr>\n            </tbody>\n        </table>\n        <div *ngIf=\"error\" class=\"bg-danger text-danger\"><h4>Error: </h4><span class=\"help-text\">{{error}}</span></div>\n    </div>\n    <div class=\"panel-footer\"></div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <app-narration></app-narration>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\" [hidden]=\"!authService.isAuthenticated()\" >\n                    <div class=\"container-fluid panel-container\">\n                        <div class=\"col-xs-6 text-left\">\n                            <div class=\"row\">\n                                <div class=\"col-xs-12\">\n                                    <img src=\"assets/CBTravel.LOGO.png\">\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-xs-12\">\n                                    <small [hidden]=\"!authService.isAuthenticated()\"><strong></strong></small>\n                                </div>\n                            </div>\n                        </div>\n                        <app-navbar></app-navbar>\n                    </div>\n                </div>\n                <div class=\"panel-body\">\n                  <router-outlet></router-outlet>\n                </div>\n                <div class=\"panel-footer panel-default clearfix\"><div class=\"row pull-right\">\n                    <img src=\"assets/poweredBy.01.png\"/>\n                    <code>try-cb-frontend</code> version <code>2.0.1</code></div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-4\"></div>\n    </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/narration.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/narration.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedNarrationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"model\">\n<div class=\"narration\" *ngIf=\"!collapsed\">(<a (click)=\"toggleCollapse()\">Show Narration</a>)</div>\n<div class=\"container col-md-12\" *ngIf=\"collapsed\">\n<div class=\"panel panel-default narration\">\n    <div class=\"panel-heading narration\">\n        <span class=\"panel-title\">Narration (<a (click)=\"toggleCollapse()\">hide</a>/<a (click)=\"clear()\">clear</a>)</span>\n    </div>\n    <div class=\"panel-body console\">\n        <ul>\n            <li *ngFor=\"let narration of model\">\n                <div class=\"clickable\" *ngIf=\"narration.step != separator\" (click)=\"select(narration)\">\n                <span class=\"bullet\" [class.selected]=\"narration == selected\">&gt;</span><span class=\"bullet selected\" *ngIf=\"narration == selected\">&gt;</span><span *ngIf=\"narration != selected\">&nbsp;</span> <span class=\"desc\">{{narration.step}}</span></div>\n\n                <div *ngIf=\"narration.step == separator\"><br/>--[ {{narration.narration}} ]--</div>\n            </li>\n        </ul>\n    </div>\n    <div class=\"panel-body\">\n        <div *ngIf=\"selected\" class=\"explanation help-block\">{{selected.narration}}\n            <span *ngIf=\"showExpandPre && expandedPre\">(<a (click)=\"expandPre() \" title=\"collapse\">-</a>)</span>\n            <span *ngIf=\"showExpandPre && !expandedPre\">(<a (click)=\"expandPre()\" title=\"show all\">+</a>)</span>\n            <pre *ngIf=\"selected.pre\" [class.expanded]=\"expandedPre\" (click)=\"expandPre()\">{{selected.pre}}</pre>\n        </div>\n        <div class=\"help-block\" *ngIf=\"!selected\">Click on a step above for an explanation</div>\n    </div>\n</div>\n</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [hidden]=\"!authService.isAuthenticated()\" class=\"col-xs-6\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 text-right\">\n      <small>LOGGED IN AS:</small>\n      {{utilityService.getUser()}}\n      <a href = \"#\" (click)=\"authService.deAuthenticate()\">| LOGOUT</a>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12 text-right\">\n      <Small>SHOPPING CART:</Small> {{utilityService.getCart().length}} items\n      <small>($ {{getCost()}})</small>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12 text-right\">\n      <a class=\"btn btn-default\" [routerLink]=\"[ '/home']\">\n        <i class=\"glyphicon glyphicon-send\">\n        </i>\n      </a>\n      <a class=\"btn btn-default\" [routerLink]=\"[ '/cart']\">\n        <i class=\"glyphicon glyphicon-shopping-cart\">\n        </i>\n      </a>\n      <a class=\"btn btn-default\" [routerLink]=\"[ '/user']\">\n        <i class=\"glyphicon glyphicon-user\">\n        </i>\n      </a>\n      <a class=\"btn btn-default\" [routerLink]=\"[ '/hotels']\">\n        <i class=\"glyphicon glyphicon-globe\">\n        </i>\n      </a>\n\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/+cart/cart.component.ts":
  /*!*****************************************!*\
    !*** ./src/app/+cart/cart.component.ts ***!
    \*****************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared/index.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CartComponent =
    /*#__PURE__*/
    function () {
      function CartComponent(authService, utility, narrationService) {
        _classCallCheck(this, CartComponent);

        this.authService = authService;
        this.narrationService = narrationService;
        this.utility = utility;
        this.cart = utility.getCart();
      }

      _createClass(CartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "createFakeBooking",
        value: function createFakeBooking() {
          var fake = {
            "name": "Fake Flight",
            "date": "6/23/2016 11:11:11",
            "sourceairport": "CDG",
            "destinationairport": "SFO"
          };
          this.cart = this.utility.getCart();
          this.cart.push(fake);
          localStorage.setItem("cart", JSON.stringify(this.cart));
          this.narrationService.addSeparator("CART");
          this.narrationService.addPre("Added fake element to cart", "Nothing was transmitted to the server", JSON.stringify(fake));
        }
      }, {
        key: "book",
        value: function book(flight) {
          var _this = this;

          this.narrationService.addSeparator("CART: Booking");
          var flights = {
            "flights": [flight]
          };
          var user = this.utility.getUser();
          var url = "/api/user/" + user + "/flights";
          this.narrationService.addPre("Authenticated POST to " + url, "The payload was:", JSON.stringify(flights));
          return this.utility.makePostRequest(url, [], flights, true).then(function (response) {
            var data = _shared__WEBPACK_IMPORTED_MODULE_1__["UtilityService"].extractData(response);

            var narration = _shared__WEBPACK_IMPORTED_MODULE_1__["UtilityService"].extractNarration(response);

            _this.remove(flight);

            _this.added = data.added;
            _this.error = null;

            _this.narrationService.add("Booking stored in the backend", narration);

            _this.narrationService.add("SUCCESS", "");
          }, function (error) {
            _this.added = null;
            _this.error = error;

            _this.narrationService.addPre("ERROR", "", error);
          });
        }
      }, {
        key: "remove",
        value: function remove(flight) {
          this.cart.splice(this.cart.indexOf(flight), 1);
          localStorage.setItem("cart", JSON.stringify(this.cart));
        }
      }, {
        key: "clearCart",
        value: function clearCart() {
          this.cart = [];
          localStorage.setItem("cart", JSON.stringify(this.cart));
        }
      }]);

      return CartComponent;
    }();

    CartComponent.ctorParameters = function () {
      return [{
        type: _shared__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }, {
        type: _shared__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]
      }, {
        type: _shared__WEBPACK_IMPORTED_MODULE_1__["NarrationService"]
      }];
    };

    CartComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-cart',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./cart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/+cart/cart.component.html")).default
    }), __metadata("design:paramtypes", [_shared__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _shared__WEBPACK_IMPORTED_MODULE_1__["UtilityService"], _shared__WEBPACK_IMPORTED_MODULE_1__["NarrationService"]])], CartComponent);
    /***/
  },

  /***/
  "./src/app/+cart/index.ts":
  /*!********************************!*\
    !*** ./src/app/+cart/index.ts ***!
    \********************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppCartIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _cart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./cart.component */
    "./src/app/+cart/cart.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return _cart_component__WEBPACK_IMPORTED_MODULE_0__["CartComponent"];
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    /***/

  },

  /***/
  "./src/app/+home/home.component.ts":
  /*!*****************************************!*\
    !*** ./src/app/+home/home.component.ts ***!
    \*****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared/index.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(auth, utility, narrationService) {
        _classCallCheck(this, HomeComponent);

        this.to = '';
        this.from = '';
        this.leaves = '';
        this.returns = null;
        this.typeaheadLoading = false;
        this.typeaheadNoResults = false;
        this.narrationService = narrationService;
        this.auth = auth;
        this.utility = utility;
        this.choosen = [];
      }

      _createClass(HomeComponent, [{
        key: "getContext",
        value: function getContext() {
          return this;
        }
      }, {
        key: "getToAirport",
        value: function getToAirport() {
          var _this2 = this;

          return this.utility.makeGetRequestObs("/api/airports?search=" + this.to, []).map(function (result) {
            var data = _shared__WEBPACK_IMPORTED_MODULE_1__["UtilityService"].extractData(result);

            var narration = _shared__WEBPACK_IMPORTED_MODULE_1__["UtilityService"].extractNarration(result);

            _this2.narrationService.addPre("N1QL typeahead for To = " + _this2.to, "The following N1QL query was executed on the server:", narration[0]);

            return data;
          }).timeout(500);
        }
      }, {
        key: "getFromAirport",
        value: function getFromAirport() {
          var _this3 = this;

          return this.utility.makeGetRequestObs("/api/airports?search=" + this.from, []).map(function (result) {
            var data = _shared__WEBPACK_IMPORTED_MODULE_1__["UtilityService"].extractData(result);

            var narration = _shared__WEBPACK_IMPORTED_MODULE_1__["UtilityService"].extractNarration(result);

            _this3.narrationService.addPre("N1QL typeahead for From = " + _this3.from, "The following N1QL query was executed on the server:", narration[0]);

            return data;
          }).timeout(500);
        }
      }, {
        key: "changeTypeaheadLoading",
        value: function changeTypeaheadLoading(e) {
          this.typeaheadLoading = e;
        }
      }, {
        key: "changeTypeaheadNoResults",
        value: function changeTypeaheadNoResults(e) {
          this.typeaheadNoResults = e;
        }
      }, {
        key: "typeaheadOnSelect",
        value: function typeaheadOnSelect(e) {
          console.log("Selected value: ".concat(e.item));
        }
      }, {
        key: "findFlights",
        value: function findFlights(from, to, leaves, returns) {
          var _this4 = this;

          var narrationUrl = "/api/flightPaths/" + from + "/" + to + "?leave=" + leaves;
          this.narrationService.addSeparator("HOME: Find Flight");
          this.narrationService.add("Outbound leg GET to " + narrationUrl, "");
          this.utility.makeGetRequestObs("/api/flightPaths", [from, to], "leave=" + leaves).map(function (response) {
            return response.json();
          }).subscribe(function (val) {
            _this4.outboundData = val.data; //we expect 2 context requests

            if (val.context.length == 2) {
              _this4.narrationService.addPre("Outbound leg N1QL query 1 executed in the backend", "The following N1QL query was executed in the backend:", val.context[0]);

              _this4.narrationService.addPre("Outbound leg N1QL query 2 executed in the backend", "The following N1QL query was executed in the backend:", val.context[1]);

              _this4.narrationService.add("Outbound leg SUCCESS", "Found " + val.data.length + " matching outbound flights");
            } else {
              _this4.narrationService.fallbackPre(2, "Outbound leg SUCCESS (found " + val.data.length + " matching outbound flights)", val.context);
            }
          }, function (error) {
            _this4.outboundData = null;

            _this4.narrationService.addPre("Outbound leg ERROR", "finding outbound flights: ", JSON.stringify(error));
          });

          if (returns) {
            var _narrationUrl = "/api/flightPaths/" + to + "/" + from + "?leave=" + returns;

            this.narrationService.add("Return leg GET to " + _narrationUrl, "");
            this.utility.makeGetRequestObs("/api/flightPaths", [to, from], "leave=" + returns).map(function (response) {
              return response.json();
            }).subscribe(function (val) {
              _this4.inboundData = val.data; //we expect 2 context requests

              if (val.context.length == 2) {
                _this4.narrationService.addPre("Return leg N1QL query 1 executed in the backend", "The following N1QL query was executed in the backend:", val.context[0]);

                _this4.narrationService.addPre("Return leg N1QL query 2 executed in the backend", "The following N1QL query was executed in the backend:", val.context[1]);

                _this4.narrationService.add("Return leg SUCCESS", "Found " + val.data.length + " matching return flights");
              } else {
                _this4.narrationService.fallbackPre(2, "Return legSUCCESS (found " + val.data.length + " matching return flights)", val.context);
              }
            }, function (error) {
              _this4.inboundData = null;

              _this4.narrationService.addPre("Return leg ERROR", "finding return flights: ", JSON.stringify(error));
            });
          }
        }
      }, {
        key: "choose",
        value: function choose(row, date) {
          this.choosen.push(row);
          var cart = this.utility.getCart();
          cart.push({
            "name": row.name,
            "flight": row.flight,
            "price": row.price,
            "date": date + " " + row.utc,
            "sourceairport": row.sourceairport,
            "destinationairport": row.destinationairport
          });
          localStorage.setItem("cart", JSON.stringify(cart));
        }
      }, {
        key: "inCart",
        value: function inCart(row) {
          return this.choosen.indexOf(row) != -1;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _shared__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }, {
        type: _shared__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]
      }, {
        type: _shared__WEBPACK_IMPORTED_MODULE_1__["NarrationService"]
      }];
    };

    HomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-home',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/+home/home.component.html")).default
    }), __metadata("design:paramtypes", [_shared__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _shared__WEBPACK_IMPORTED_MODULE_1__["UtilityService"], _shared__WEBPACK_IMPORTED_MODULE_1__["NarrationService"]])], HomeComponent);
    /***/
  },

  /***/
  "./src/app/+home/index.ts":
  /*!********************************!*\
    !*** ./src/app/+home/index.ts ***!
    \********************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/+home/home.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"];
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    /***/

  },

  /***/
  "./src/app/+hotels/hotels.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/+hotels/hotels.component.ts ***!
    \*********************************************/

  /*! exports provided: HotelsComponent */

  /***/
  function srcAppHotelsHotelsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HotelsComponent", function () {
      return HotelsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/utility.service */
    "./src/app/shared/utility.service.ts");
    /* harmony import */


    var _shared_narration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/narration.service */
    "./src/app/shared/narration.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var HotelsComponent =
    /*#__PURE__*/
    function () {
      function HotelsComponent(fb, utility, narrationService) {
        _classCallCheck(this, HotelsComponent);

        this.hotelForm = fb.group({
          'description': [''],
          'location': ['']
        });
        this.utility = utility;
        this._narrations = narrationService;
      }

      _createClass(HotelsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "findHotels",
        value: function findHotels(value) {
          var _this5 = this;

          var location = value.location;
          var description = value.description;
          var url = "/api/hotel/";
          var hasDescription = description != null && description != "";
          var hasLocation = location != null && location != "";

          if (hasDescription && hasLocation) {
            url = url + description + "/" + location + "/";
          } else if (hasLocation) {
            url = url + "*/" + location + "/";
          } else if (hasDescription) {
            url = url + description + "/";
          }

          this._narrations.addSeparator("HOTEL: Find Hotels");

          this._narrations.add("GET to " + url, "");

          this.utility.makeGetRequestObs(url, []).map(function (response) {
            return response.json();
          }).subscribe(function (val) {
            _this5.data = val.data;
            _this5.error = null; //we expect 2 context requests

            if (val.context.length == 2) {
              _this5._narrations.addPre("FTS query executed in the backend", "The following FTS query was executed in the backend:", val.context[0]);

              _this5._narrations.addPre("Subdocument query executed in the backend", "The following subdocument fetch was executed in the backend:", val.context[1]);

              _this5._narrations.add("SUCCESS", "Found " + _this5.data.length + " matching hotels");
            } else {
              _this5._narrations.fallbackPre(2, "SUCCESS (found " + _this5.data.length + " matching hotels)", val.context);
            }
          }, function (error) {
            _this5.data = null;
            _this5.error = error;

            _this5._narrations.addPre("ERROR", "There was an error:", JSON.stringify(_this5.error, null, 2));
          });
        }
      }]);

      return HotelsComponent;
    }();

    HotelsComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _shared_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]
      }, {
        type: _shared_narration_service__WEBPACK_IMPORTED_MODULE_3__["NarrationService"]
      }];
    };

    HotelsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-hotels',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./hotels.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/+hotels/hotels.component.html")).default
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _shared_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"], _shared_narration_service__WEBPACK_IMPORTED_MODULE_3__["NarrationService"]])], HotelsComponent);
    /***/
  },

  /***/
  "./src/app/+hotels/index.ts":
  /*!**********************************!*\
    !*** ./src/app/+hotels/index.ts ***!
    \**********************************/

  /*! exports provided: HotelsComponent */

  /***/
  function srcAppHotelsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _hotels_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./hotels.component */
    "./src/app/+hotels/hotels.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HotelsComponent", function () {
      return _hotels_component__WEBPACK_IMPORTED_MODULE_0__["HotelsComponent"];
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    /***/

  },

  /***/
  "./src/app/+login/index.ts":
  /*!*********************************!*\
    !*** ./src/app/+login/index.ts ***!
    \*********************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/+login/login.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"];
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    /***/

  },

  /***/
  "./src/app/+login/login.component.ts":
  /*!*******************************************!*\
    !*** ./src/app/+login/login.component.ts ***!
    \*******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(authService, router) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.isNew = true;
        this.router = router;
      }

      _createClass(LoginComponent, [{
        key: "login",
        value: function login(email, password, isNew) {
          var _this6 = this;

          if (isNew) {
            this.authService.register(email, password).then(function (result) {
              _this6.router.navigateByUrl("/home");
            }, function (error) {
              _this6.loginError = error;
              _this6.password = null;
            });
          } else {
            this.authService.login(email, password).then(function (result) {
              _this6.router.navigateByUrl("/home");
            }, function (error) {
              _this6.loginError = error;
              _this6.username = null;
              _this6.password = null;
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _shared__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LoginComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-login',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/+login/login.component.html")).default
    }), __metadata("design:paramtypes", [_shared__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/+user/index.ts":
  /*!********************************!*\
    !*** ./src/app/+user/index.ts ***!
    \********************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppUserIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./user.component */
    "./src/app/+user/user.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return _user_component__WEBPACK_IMPORTED_MODULE_0__["UserComponent"];
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    /***/

  },

  /***/
  "./src/app/+user/user.component.ts":
  /*!*****************************************!*\
    !*** ./src/app/+user/user.component.ts ***!
    \*****************************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared/index.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var UserComponent =
    /*#__PURE__*/
    function () {
      function UserComponent(authService, utilityService) {
        _classCallCheck(this, UserComponent);

        this.authService = authService;
        this.utility = utilityService;
      }

      _createClass(UserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.user = this.utility.getUser();
          this.utility.makeGetRequestObs("/api/user", [this.user, "flights"], null, true).map(function (response) {
            return response.json();
          }).subscribe(function (val) {
            _this7.booked = val.data;
            console.log("found booked flights: " + val.data);
          }, function (error) {
            _this7.booked = null;
            _this7.error = error;
          });
        }
      }]);

      return UserComponent;
    }();

    UserComponent.ctorParameters = function () {
      return [{
        type: _shared__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }, {
        type: _shared__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]
      }];
    };

    UserComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-user',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/+user/user.component.html")).default
    }), __metadata("design:paramtypes", [_shared__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _shared__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]])], UserComponent);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared */
    "./src/app/shared/index.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppComponent = function AppComponent(router, authService) {
      _classCallCheck(this, AppComponent);

      this.authService = authService;
      this.router = router;
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _shared__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-root',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.guards.auth.ts":
  /*!************************************!*\
    !*** ./src/app/app.guards.auth.ts ***!
    \************************************/

  /*! exports provided: OnlyLoggedInGuard */

  /***/
  function srcAppAppGuardsAuthTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnlyLoggedInGuard", function () {
      return OnlyLoggedInGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/auth.service */
    "./src/app/shared/auth.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var OnlyLoggedInGuard =
    /*#__PURE__*/
    function () {
      function OnlyLoggedInGuard(authService, router) {
        _classCallCheck(this, OnlyLoggedInGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(OnlyLoggedInGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.authService.isAuthenticated()) {
            return true;
          } else {
            this.router.navigateByUrl('/login');
            return false;
          }
        }
      }]);

      return OnlyLoggedInGuard;
    }();

    OnlyLoggedInGuard.ctorParameters = function () {
      return [{
        type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    OnlyLoggedInGuard = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], OnlyLoggedInGuard);
    /***/
  },

  /***/
  "./src/app/app.guards.notlogged.ts":
  /*!*****************************************!*\
    !*** ./src/app/app.guards.notlogged.ts ***!
    \*****************************************/

  /*! exports provided: OnlyNotLoggedInGuard */

  /***/
  function srcAppAppGuardsNotloggedTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnlyNotLoggedInGuard", function () {
      return OnlyNotLoggedInGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/auth.service */
    "./src/app/shared/auth.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var OnlyNotLoggedInGuard =
    /*#__PURE__*/
    function () {
      function OnlyNotLoggedInGuard(authService, router) {
        _classCallCheck(this, OnlyNotLoggedInGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(OnlyNotLoggedInGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (!this.authService.isAuthenticated()) {
            return true;
          } else {
            this.router.navigateByUrl('/home');
            return false;
          }
        }
      }]);

      return OnlyNotLoggedInGuard;
    }();

    OnlyNotLoggedInGuard.ctorParameters = function () {
      return [{
        type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    OnlyNotLoggedInGuard = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], OnlyNotLoggedInGuard);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/typeahead */
    "./node_modules/ngx-bootstrap/typeahead/fesm2015/ngx-bootstrap-typeahead.js");
    /* harmony import */


    var _app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.routes */
    "./src/app/app.routes.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var _app_guards_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.guards.auth */
    "./src/app/app.guards.auth.ts");
    /* harmony import */


    var _app_guards_notlogged__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.guards.notlogged */
    "./src/app/app.guards.notlogged.ts");
    /* harmony import */


    var _home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./+home */
    "./src/app/+home/index.ts");
    /* harmony import */


    var _login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./+login */
    "./src/app/+login/index.ts");
    /* harmony import */


    var _user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./+user */
    "./src/app/+user/index.ts");
    /* harmony import */


    var _cart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./+cart */
    "./src/app/+cart/index.ts");
    /* harmony import */


    var _hotels__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./+hotels */
    "./src/app/+hotels/index.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _shared__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _shared__WEBPACK_IMPORTED_MODULE_7__["NarrationComponent"], _home__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _login__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _user__WEBPACK_IMPORTED_MODULE_12__["UserComponent"], _cart__WEBPACK_IMPORTED_MODULE_13__["CartComponent"], _hotels__WEBPACK_IMPORTED_MODULE_14__["HotelsComponent"]],
      imports: [_app_routes__WEBPACK_IMPORTED_MODULE_5__["routing"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"], ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_4__["TypeaheadModule"]],
      providers: [_shared__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _shared__WEBPACK_IMPORTED_MODULE_7__["UtilityService"], _shared__WEBPACK_IMPORTED_MODULE_7__["NarrationService"], _app_guards_auth__WEBPACK_IMPORTED_MODULE_8__["OnlyLoggedInGuard"], _app_guards_notlogged__WEBPACK_IMPORTED_MODULE_9__["OnlyNotLoggedInGuard"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.routes.ts":
  /*!*******************************!*\
    !*** ./src/app/app.routes.ts ***!
    \*******************************/

  /*! exports provided: routing */

  /***/
  function srcAppAppRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routing", function () {
      return routing;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./+home */
    "./src/app/+home/index.ts");
    /* harmony import */


    var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./+login */
    "./src/app/+login/index.ts");
    /* harmony import */


    var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./+user */
    "./src/app/+user/index.ts");
    /* harmony import */


    var _cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./+cart */
    "./src/app/+cart/index.ts");
    /* harmony import */


    var _hotels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./+hotels */
    "./src/app/+hotels/index.ts");
    /* harmony import */


    var _app_guards_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.guards.auth */
    "./src/app/app.guards.auth.ts");
    /* harmony import */


    var _app_guards_notlogged__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.guards.notlogged */
    "./src/app/app.guards.notlogged.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var routes = [{
      path: '',
      component: _home__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
      canActivate: [_app_guards_auth__WEBPACK_IMPORTED_MODULE_6__["OnlyLoggedInGuard"]]
    }, {
      path: 'home',
      component: _home__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
      canActivate: [_app_guards_auth__WEBPACK_IMPORTED_MODULE_6__["OnlyLoggedInGuard"]]
    }, {
      path: 'login',
      component: _login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
      canActivate: [_app_guards_notlogged__WEBPACK_IMPORTED_MODULE_7__["OnlyNotLoggedInGuard"]]
    }, {
      path: 'user',
      component: _user__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
      canActivate: [_app_guards_auth__WEBPACK_IMPORTED_MODULE_6__["OnlyLoggedInGuard"]]
    }, {
      path: 'cart',
      component: _cart__WEBPACK_IMPORTED_MODULE_4__["CartComponent"],
      canActivate: [_app_guards_auth__WEBPACK_IMPORTED_MODULE_6__["OnlyLoggedInGuard"]]
    }, {
      path: 'hotels',
      component: _hotels__WEBPACK_IMPORTED_MODULE_5__["HotelsComponent"],
      canActivate: [_app_guards_auth__WEBPACK_IMPORTED_MODULE_6__["OnlyLoggedInGuard"]]
    }];

    var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);
    /***/

  },

  /***/
  "./src/app/index.ts":
  /*!**************************!*\
    !*** ./src/app/index.ts ***!
    \**************************/

  /*! exports provided: AppComponent, AppModule */

  /***/
  function srcAppIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"];
    });
    /* harmony import */


    var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.module */
    "./src/app/app.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"];
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    /***/

  },

  /***/
  "./src/app/shared/angular2-jwt.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/angular2-jwt.ts ***!
    \****************************************/

  /*! exports provided: AuthConfig, AuthHttp, JwtHelper, tokenNotExpired */

  /***/
  function srcAppSharedAngular2JwtTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthConfig", function () {
      return AuthConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthHttp", function () {
      return AuthHttp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtHelper", function () {
      return JwtHelper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tokenNotExpired", function () {
      return tokenNotExpired;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/Observable */
    "./node_modules/rxjs-compat/_esm2015/Observable.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    /**
     * Sets up the authentication configuration.
     */


    var AuthConfig =
    /*#__PURE__*/
    function () {
      function AuthConfig() {
        var _this8 = this;

        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, AuthConfig);

        this.headerName = config.headerName || 'Authorization';

        if (config.headerPrefix) {
          this.headerPrefix = config.headerPrefix + ' ';
        } else if (config.noTokenScheme) {
          this.headerPrefix = '';
        } else {
          this.headerPrefix = 'Bearer ';
        }

        this.tokenName = config.tokenName || 'id_token';
        this.noJwtError = config.noJwtError || false;

        this.tokenGetter = config.tokenGetter || function () {
          return localStorage.getItem(_this8.tokenName);
        };

        this.globalHeaders = config.globalHeaders || [];
        this.noTokenScheme = config.noTokenScheme || false;
      }

      _createClass(AuthConfig, [{
        key: "getConfig",
        value: function getConfig() {
          return {
            headerName: this.headerName,
            headerPrefix: this.headerPrefix,
            tokenName: this.tokenName,
            tokenGetter: this.tokenGetter,
            noJwtError: this.noJwtError,
            noTokenScheme: this.noTokenScheme,
            globalHeaders: this.globalHeaders
          };
        }
      }]);

      return AuthConfig;
    }();
    /**
     * Allows for explicit authenticated HTTP requests.
     */


    var AuthHttp =
    /*#__PURE__*/
    function () {
      function AuthHttp(options, http) {
        var _this9 = this;

        _classCallCheck(this, AuthHttp);

        this.http = http;
        this._config = options.getConfig();
        this.tokenStream = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (obs) {
          obs.next(_this9._config.tokenGetter());
        });
      }

      _createClass(AuthHttp, [{
        key: "setGlobalHeaders",
        value: function setGlobalHeaders(headers, request) {
          headers.forEach(function (header) {
            var key = Object.keys(header)[0];
            var headerValue = header[key];
            request.headers.set(key, headerValue);
          });
        }
      }, {
        key: "request",
        value: function request(url, options) {
          var request;
          var globalHeaders = this._config.globalHeaders;

          if (!tokenNotExpired(null, this._config.tokenGetter())) {
            if (!this._config.noJwtError) {
              return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (obs) {
                obs.error(new Error('No JWT present'));
              });
            } else {
              request = this.http.request(url, options);
            }
          } else if (typeof url === 'string') {
            var reqOpts = options || {};

            if (!reqOpts.headers) {
              reqOpts.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
            }

            if (globalHeaders) {
              this.setGlobalHeaders(globalHeaders, reqOpts);
            }

            reqOpts.headers.set(this._config.headerName, this._config.headerPrefix + this._config.tokenGetter());
            request = this.http.request(url, reqOpts);
          } else {
            var req = url;

            if (!req.headers) {
              req.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
            }

            if (globalHeaders) {
              this.setGlobalHeaders(globalHeaders, req);
            }

            req.headers.set(this._config.headerName, this._config.headerPrefix + this._config.tokenGetter());
            request = this.http.request(req);
          }

          return request;
        }
      }, {
        key: "requestHelper",
        value: function requestHelper(requestArgs, additionalOptions) {
          var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"](requestArgs);

          if (additionalOptions) {
            options = options.merge(additionalOptions);
          }

          return this.request(new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Request"](options));
        }
      }, {
        key: "get",
        value: function get(url, options) {
          return this.requestHelper({
            url: url,
            method: _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestMethod"].Get
          }, options);
        }
      }, {
        key: "post",
        value: function post(url, body, options) {
          return this.requestHelper({
            url: url,
            body: body,
            method: _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestMethod"].Post
          }, options);
        }
      }, {
        key: "put",
        value: function put(url, body, options) {
          return this.requestHelper({
            url: url,
            body: body,
            method: _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestMethod"].Put
          }, options);
        }
      }, {
        key: "delete",
        value: function _delete(url, options) {
          return this.requestHelper({
            url: url,
            method: _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestMethod"].Delete
          }, options);
        }
      }, {
        key: "patch",
        value: function patch(url, body, options) {
          return this.requestHelper({
            url: url,
            body: body,
            method: _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestMethod"].Patch
          }, options);
        }
      }, {
        key: "head",
        value: function head(url, options) {
          return this.requestHelper({
            url: url,
            method: _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestMethod"].Head
          }, options);
        }
      }]);

      return AuthHttp;
    }();

    AuthHttp.ctorParameters = function () {
      return [{
        type: AuthConfig
      }, {
        type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]
      }];
    };

    AuthHttp = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [AuthConfig, _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])], AuthHttp);
    /**
     * Helper class to decode and find JWT expiration.
     */

    var JwtHelper =
    /*#__PURE__*/
    function () {
      function JwtHelper() {
        _classCallCheck(this, JwtHelper);
      }

      _createClass(JwtHelper, [{
        key: "urlBase64Decode",
        value: function urlBase64Decode(str) {
          var output = str.replace(/-/g, '+').replace(/_/g, '/');

          switch (output.length % 4) {
            case 0:
              {
                break;
              }

            case 2:
              {
                output += '==';
                break;
              }

            case 3:
              {
                output += '=';
                break;
              }

            default:
              {
                throw 'Illegal base64url string!';
              }
          }

          return decodeURIComponent(escape(window.atob(output))); //polyfill https://github.com/davidchambers/Base64.js
        }
      }, {
        key: "decodeToken",
        value: function decodeToken(token) {
          console.log("DEBUG JWT:", token);
          var parts = token.split('.');

          if (parts.length !== 3) {
            throw new Error('JWT must have 3 parts');
          }

          var decoded = this.urlBase64Decode(parts[1]);

          if (!decoded) {
            throw new Error('Cannot decode the token');
          }

          return JSON.parse(decoded);
        }
      }, {
        key: "getTokenExpirationDate",
        value: function getTokenExpirationDate(token) {
          var decoded;
          decoded = this.decodeToken(token);

          if (typeof decoded.exp === "undefined") {
            return null;
          }

          var date = new Date(0); // The 0 here is the key, which sets the date to the epoch

          date.setUTCSeconds(decoded.exp);
          return date;
        }
      }, {
        key: "isTokenExpired",
        value: function isTokenExpired(token, offsetSeconds) {
          var date = this.getTokenExpirationDate(token);
          offsetSeconds = offsetSeconds || 0;

          if (date === null) {
            return false;
          } // Token expired?


          return !(date.valueOf() > new Date().valueOf() + offsetSeconds * 1000);
        }
      }]);

      return JwtHelper;
    }();

    JwtHelper = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], JwtHelper);
    /**
     * Checks for presence of token and that token hasn't expired.
     * For use with the @CanActivate router decorator and NgIf
     */

    function tokenNotExpired() {
      var tokenName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'id_token';
      var jwt = arguments.length > 1 ? arguments[1] : undefined;
      var token = jwt || localStorage.getItem(tokenName);
      var jwtHelper = new JwtHelper();
      return token && !jwtHelper.isTokenExpired(token, null);
    }
    /***/

  },

  /***/
  "./src/app/shared/auth.service.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/auth.service.ts ***!
    \****************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppSharedAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./utility.service */
    "./src/app/shared/utility.service.ts");
    /* harmony import */


    var _narration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./narration.service */
    "./src/app/shared/narration.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _md5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./md5 */
    "./src/app/shared/md5.ts");
    /* harmony import */


    var _angular2_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./angular2-jwt */
    "./src/app/shared/angular2-jwt.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(utility, narrationService) {
        _classCallCheck(this, AuthService);

        this.utility = utility;
        this.narrationService = narrationService;
        this.jwt = new _angular2_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelper"]();
      }

      _createClass(AuthService, [{
        key: "isAuthenticated",
        value: function isAuthenticated() {
          if (!localStorage.getItem("user") || localStorage.getItem("user") == "") {
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "login",
        value: function login(email, password) {
          var _this10 = this;

          return new Promise(function (resolve, reject) {
            _this10.utility.makePostRequest("/api/user/login", [], {
              "user": email,
              "password": Object(_md5__WEBPACK_IMPORTED_MODULE_4__["md5"])(password)
            }).then(function (res) {
              var result = _utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"].extractData(res);

              if (result.token && _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].jwtEnabled) {
                try {
                  var decodedToken = _this10.jwt.decodeToken(result.token);

                  localStorage.setItem("user", decodedToken.user);
                  localStorage.setItem("token", result.token);
                  resolve();
                } catch (e) {
                  reject("Backend created account but returned a malformed token: " + e);
                }
              } else if (result.token) {
                var user = _this10.jwt.urlBase64Decode(result.token);

                localStorage.setItem("user", user);
                localStorage.setItem("token", result.token);
                resolve();
              } else {
                console.log("DEBUG: login failure, got " + JSON.stringify(result));
                reject("No token found in login response");
              }
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "register",
        value: function register(email, password) {
          var _this11 = this;

          var cUser = {
            user: email,
            password: password
          };
          return new Promise(function (resolve, reject) {
            _this11.utility.makePostRequest("/api/user/signup", [], cUser).then(function (res) {
              var result = _utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"].extractData(res);

              var narration = _utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"].extractNarration(res);

              _this11.narrationService.addPre("Account Created", "The account for " + email + " was created on the server", narration[0]);

              if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].jwtEnabled && result && result.token) {
                try {
                  var decodedToken = _this11.jwt.decodeToken(result.token);

                  localStorage.setItem("user", decodedToken.user);
                  localStorage.setItem("token", result.token);
                  resolve();
                } catch (e) {
                  reject("Backend created account but returned a malformed token: " + e);
                }
              } else if (result && result.token) {
                var user = _this11.jwt.urlBase64Decode(result.token);

                localStorage.setItem("user", user);
                localStorage.setItem("token", result.token);
                resolve();
              } else {
                console.log("DEBUG: registration failure, got " + JSON.stringify(result));
                reject("Registration Failure");
              }
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "deAuthenticate",
        value: function deAuthenticate() {
          localStorage.clear();
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]
      }, {
        type: _narration_service__WEBPACK_IMPORTED_MODULE_2__["NarrationService"]
      }];
    };

    AuthService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"], _narration_service__WEBPACK_IMPORTED_MODULE_2__["NarrationService"]])], AuthService);
    /***/
  },

  /***/
  "./src/app/shared/index.ts":
  /*!*********************************!*\
    !*** ./src/app/shared/index.ts ***!
    \*********************************/

  /*! exports provided: AuthService, UtilityService, NavbarComponent, NarrationComponent, Narration, NarrationService */

  /***/
  function srcAppSharedIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/shared/auth.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"];
    });
    /* harmony import */


    var _utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./utility.service */
    "./src/app/shared/utility.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UtilityService", function () {
      return _utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"];
    });
    /* harmony import */


    var _navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./navbar.component */
    "./src/app/shared/navbar.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return _navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"];
    });
    /* harmony import */


    var _narration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./narration.component */
    "./src/app/shared/narration.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NarrationComponent", function () {
      return _narration_component__WEBPACK_IMPORTED_MODULE_3__["NarrationComponent"];
    });
    /* harmony import */


    var _narration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./narration.service */
    "./src/app/shared/narration.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Narration", function () {
      return _narration_service__WEBPACK_IMPORTED_MODULE_4__["Narration"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NarrationService", function () {
      return _narration_service__WEBPACK_IMPORTED_MODULE_4__["NarrationService"];
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    /***/

  },

  /***/
  "./src/app/shared/md5.ts":
  /*!*******************************!*\
    !*** ./src/app/shared/md5.ts ***!
    \*******************************/

  /*! exports provided: md5 */

  /***/
  function srcAppSharedMd5Ts(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "md5", function () {
      return md5;
    }); // Taken from https://github.com/killmenot/webtoolkit.md5


    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var md5 = function md5(string) {
      function RotateLeft(lValue, iShiftBits) {
        return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
      }

      function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = lX & 0x80000000;
        lY8 = lY & 0x80000000;
        lX4 = lX & 0x40000000;
        lY4 = lY & 0x40000000;
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);

        if (lX4 & lY4) {
          return lResult ^ 0x80000000 ^ lX8 ^ lY8;
        }

        if (lX4 | lY4) {
          if (lResult & 0x40000000) {
            return lResult ^ 0xC0000000 ^ lX8 ^ lY8;
          } else {
            return lResult ^ 0x40000000 ^ lX8 ^ lY8;
          }
        } else {
          return lResult ^ lX8 ^ lY8;
        }
      }

      function F(x, y, z) {
        return x & y | ~x & z;
      }

      function G(x, y, z) {
        return x & z | y & ~z;
      }

      function H(x, y, z) {
        return x ^ y ^ z;
      }

      function I(x, y, z) {
        return y ^ (x | ~z);
      }

      function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
      }

      ;

      function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
      }

      ;

      function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
      }

      ;

      function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
      }

      ;

      function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;

        while (lByteCount < lMessageLength) {
          lWordCount = (lByteCount - lByteCount % 4) / 4;
          lBytePosition = lByteCount % 4 * 8;
          lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
          lByteCount++;
        }

        lWordCount = (lByteCount - lByteCount % 4) / 4;
        lBytePosition = lByteCount % 4 * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | 0x80 << lBytePosition;
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
      }

      ;

      function WordToHex(lValue) {
        var WordToHexValue = "",
            WordToHexValue_temp = "",
            lByte,
            lCount;

        for (lCount = 0; lCount <= 3; lCount++) {
          lByte = lValue >>> lCount * 8 & 255;
          WordToHexValue_temp = "0" + lByte.toString(16);
          WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }

        return WordToHexValue;
      }

      ;

      function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {
          var c = string.charCodeAt(n);

          if (c < 128) {
            utftext += String.fromCharCode(c);
          } else if (c > 127 && c < 2048) {
            utftext += String.fromCharCode(c >> 6 | 192);
            utftext += String.fromCharCode(c & 63 | 128);
          } else {
            utftext += String.fromCharCode(c >> 12 | 224);
            utftext += String.fromCharCode(c >> 6 & 63 | 128);
            utftext += String.fromCharCode(c & 63 | 128);
          }
        }

        return utftext;
      }

      ;
      var x = Array();
      var k, AA, BB, CC, DD, a, b, c, d;
      var S11 = 7,
          S12 = 12,
          S13 = 17,
          S14 = 22;
      var S21 = 5,
          S22 = 9,
          S23 = 14,
          S24 = 20;
      var S31 = 4,
          S32 = 11,
          S33 = 16,
          S34 = 23;
      var S41 = 6,
          S42 = 10,
          S43 = 15,
          S44 = 21;
      string = Utf8Encode(string);
      x = ConvertToWordArray(string);
      a = 0x67452301;
      b = 0xEFCDAB89;
      c = 0x98BADCFE;
      d = 0x10325476;

      for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
      }

      var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
      return temp.toLowerCase();
    };
    /***/

  },

  /***/
  "./src/app/shared/narration.component.css":
  /*!************************************************!*\
    !*** ./src/app/shared/narration.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedNarrationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a {\n    cursor: pointer;\n    color: blue;\n    font-size: small;\n    font-family: monospace;\n}\n\ndiv.narration {\n    background-color: lightyellow;\n    color: black;\n}\n\ndiv.narration pre {\n    max-height: 100px;\n    overflow: auto;\n}\n\ndiv.narration pre.expanded {\n    max-height: none;\n}\n\ndiv.console {\n    background-color: black;\n    font-family: monospace;\n    color: white;\n    height: 110px;\n    overflow-y: scroll;\n}\n\ndiv.console li {\n    list-style-type: none;\n}\n\ndiv.console div.clickable {\n    cursor: pointer;\n}\n\ndiv.console div.clickable:hover {\n    color: yellow;\n}\n\ndiv.console li span.bullet {\n    font-weight: bold;\n}\n\ndiv.console li span.bullet.selected {\n    color: yellow;\n    text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hcnJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbmFycmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xufVxuXG5kaXYubmFycmF0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHllbGxvdztcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbmRpdi5uYXJyYXRpb24gcHJlIHtcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuZGl2Lm5hcnJhdGlvbiBwcmUuZXhwYW5kZWQge1xuICAgIG1heC1oZWlnaHQ6IG5vbmU7XG59XG5cbmRpdi5jb25zb2xlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuZGl2LmNvbnNvbGUgbGkge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuZGl2LmNvbnNvbGUgZGl2LmNsaWNrYWJsZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5kaXYuY29uc29sZSBkaXYuY2xpY2thYmxlOmhvdmVyIHtcbiAgICBjb2xvcjogeWVsbG93O1xufVxuXG5kaXYuY29uc29sZSBsaSBzcGFuLmJ1bGxldCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmRpdi5jb25zb2xlIGxpIHNwYW4uYnVsbGV0LnNlbGVjdGVkIHtcbiAgICBjb2xvcjogeWVsbG93O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/narration.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/narration.component.ts ***!
    \***********************************************/

  /*! exports provided: NarrationComponent */

  /***/
  function srcAppSharedNarrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NarrationComponent", function () {
      return NarrationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _narration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./narration.service */
    "./src/app/shared/narration.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var NarrationComponent =
    /*#__PURE__*/
    function () {
      function NarrationComponent(sharedService) {
        _classCallCheck(this, NarrationComponent);

        this.collapsed = true;
        this._sharedService = sharedService;
      }

      _createClass(NarrationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.model = this._sharedService.dataArray;
          this.separator = this._sharedService.separatorKeyword;
          this.selected = this.model[0];
        }
      }, {
        key: "select",
        value: function select(n) {
          this.selected = n;
          this.expandedPre = false;
          this.showExpandPre = n.pre && n.pre.split(/\r\n|\r|\n/).length > 4;
        }
      }, {
        key: "toggleCollapse",
        value: function toggleCollapse() {
          this.collapsed = !this.collapsed;
        }
      }, {
        key: "expandPre",
        value: function expandPre() {
          this.expandedPre = !this.expandedPre;
        }
      }, {
        key: "clear",
        value: function clear() {
          this._sharedService.clear();

          this.expandedPre = false;
          this.selected = null;
        }
      }]);

      return NarrationComponent;
    }();

    NarrationComponent.ctorParameters = function () {
      return [{
        type: _narration_service__WEBPACK_IMPORTED_MODULE_1__["NarrationService"]
      }];
    };

    NarrationComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-narration',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./narration.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/narration.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./narration.component.css */
      "./src/app/shared/narration.component.css")).default]
    }), __metadata("design:paramtypes", [_narration_service__WEBPACK_IMPORTED_MODULE_1__["NarrationService"]])], NarrationComponent);
    /***/
  },

  /***/
  "./src/app/shared/narration.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/narration.service.ts ***!
    \*********************************************/

  /*! exports provided: Narration, NarrationService */

  /***/
  function srcAppSharedNarrationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Narration", function () {
      return Narration;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NarrationService", function () {
      return NarrationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var Narration = function Narration(s, n, pre) {
      _classCallCheck(this, Narration);

      this.step = s;
      this.narration = n;
      this.pre = pre ? pre : null;
    };

    ;

    var NarrationService =
    /*#__PURE__*/
    function () {
      function NarrationService() {
        _classCallCheck(this, NarrationService);

        this.dataArray = [];
        this.separatorKeyword = "SEPARATOR";
      }

      _createClass(NarrationService, [{
        key: "clear",
        value: function clear() {
          this.dataArray.length = 0;
        }
      }, {
        key: "add",
        value: function add(step, details) {
          this.dataArray.push(new Narration(step, details));
        }
      }, {
        key: "addPre",
        value: function addPre(step, details, pre) {
          this.dataArray.push(new Narration(step, details, pre));
        }
      }, {
        key: "addSeparator",
        value: function addSeparator(transactionTitle) {
          this.dataArray.push(new Narration(this.separatorKeyword, transactionTitle));
        }
      }, {
        key: "fallbackPre",
        value: function fallbackPre(expectedPreCount, genericMessage, realPre) {
          var i = 1;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = realPre[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var ctx = _step.value;
              this.addPre(genericMessage + " (note: expected " + expectedPreCount + " backend queries but got " + realPre.length + ", " + i++ + "/" + realPre.length + ")", "A query was executed in the backend:", ctx);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }]);

      return NarrationService;
    }();

    NarrationService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], NarrationService);
    /***/
  },

  /***/
  "./src/app/shared/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppSharedNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/shared/auth.service.ts");
    /* harmony import */


    var _utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./utility.service */
    "./src/app/shared/utility.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(authService, utilityService, router) {
        _classCallCheck(this, NavbarComponent);

        this.authService = authService;
        this.utilityService = utilityService;
        this.router = router;
      }

      _createClass(NavbarComponent, [{
        key: "getCost",
        value: function getCost() {
          var cost = 0;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = this.utilityService.getCart()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var flight = _step2.value;
              if (flight.price) cost = cost + flight.price;
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          return cost;
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }, {
        type: _utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    NavbarComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-navbar',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar.component.html")).default
    }), __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/shared/utility.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/utility.service.ts ***!
    \*******************************************/

  /*! exports provided: UtilityService */

  /***/
  function srcAppSharedUtilityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilityService", function () {
      return UtilityService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/Rx */
    "./node_modules/rxjs-compat/_esm2015/Rx.js");
    /* harmony import */


    var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/add/operator/do */
    "./node_modules/rxjs-compat/_esm2015/add/operator/do.js");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var UtilityService_1;

    var UtilityService = UtilityService_1 =
    /*#__PURE__*/
    function () {
      function UtilityService(http) {
        _classCallCheck(this, UtilityService);

        this.http = http;
      }

      _createClass(UtilityService, [{
        key: "makePostRequest",
        value: function makePostRequest(url, params, body) {
          var _this12 = this;

          var authenticate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          var fullUrl = window.location.protocol + "//" + window.location.host + url;

          if (params && params.length > 0) {
            fullUrl = fullUrl + "/" + params.join("/");
          }

          console.log("DEBUG: POST FULL URL:", fullUrl, " BODY:", JSON.stringify(body));
          return new Promise(function (resolve, reject) {
            var requestHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
            requestHeaders.append("Content-Type", "application/json");

            if (authenticate) {
              var token = _this12.getToken();

              if (token) requestHeaders.append('Authorization', 'Bearer ' + token);
            }

            _this12.http.request(new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Request"]({
              method: _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestMethod"].Post,
              url: fullUrl,
              body: JSON.stringify(body),
              headers: requestHeaders
            })).subscribe(function (success) {
              console.log("DEBUG: POST RESPONSE:", fullUrl, ":", success.json());
              resolve(success);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "makeGetRequestObs",
        value: function makeGetRequestObs(url, params, searchParams, authenticate) {
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json'
          });

          if (authenticate) {
            var token = this.getToken();
            if (token) headers.append('Authorization', 'Bearer ' + token);
          }

          var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: headers
          });
          var fullUrl = url;

          if (params && params.length > 0) {
            fullUrl = fullUrl + "/" + params.join("/");
          }

          if (searchParams) {
            var urlSearchParams = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["URLSearchParams"](searchParams);
            options.search = urlSearchParams;
          }

          console.log("DEBUG: GET FULL URL:", fullUrl);
          return this.http.get(fullUrl, options).do(function (success) {
            console.log("DEBUG: GET RESPONSE:", fullUrl, ":", success.json());
          }, function (error) {
            console.log("DEBUG: GET ERROR:", fullUrl, ":", error);
          }).catch(UtilityService_1.extractError);
        }
      }, {
        key: "makeGetRequest",
        value: function makeGetRequest(url, params) {
          var obs = this.makeGetRequestObs(url, params);
          return new Promise(function (resolve, reject) {
            obs.subscribe(function (success) {
              resolve(success);
            }, function (error) {
              reject(error);
            });
          });
        }
      }, {
        key: "getUser",
        value: function getUser() {
          var user = localStorage.getItem("user");

          if (user) {
            return user;
          }

          return null;
        }
      }, {
        key: "getToken",
        value: function getToken() {
          var token = localStorage.getItem("token");

          if (token) {
            return token;
          }

          return null;
        }
      }, {
        key: "getCart",
        value: function getCart() {
          var cart = localStorage.getItem("cart");

          if (cart) {
            return JSON.parse(cart);
          }

          return [];
        }
      }], [{
        key: "extractData",
        value: function extractData(res) {
          var body = res.json();
          return body.data || {};
        }
      }, {
        key: "extractNarration",
        value: function extractNarration(res) {
          var body = res.json();
          return body.context || [];
        }
      }, {
        key: "extractError",
        value: function extractError(res) {
          var body = res.json();

          if (body.failure) {
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(body.failure);
          }

          if (body.message) {
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(body.message);
          }

          return rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(body);
        }
      }]);

      return UtilityService;
    }();

    UtilityService.ctorParameters = function () {
      return [{
        type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]
      }];
    };

    UtilityService = UtilityService_1 = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])], UtilityService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var environment = {
      production: false,
      jwtEnabled: true
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _polyfills_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./polyfills.ts */
    "./src/polyfills.ts");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/ */
    "./src/app/index.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app___WEBPACK_IMPORTED_MODULE_4__["AppModule"]);
    /***/
  },

  /***/
  "./src/polyfills.ts":
  /*!**************************!*\
    !*** ./src/polyfills.ts ***!
    \**************************/

  /*! no exports provided */

  /***/
  function srcPolyfillsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var core_js_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! core-js/es/symbol */
    "./node_modules/core-js/es/symbol/index.js");
    /* harmony import */


    var core_js_es_symbol__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var core_js_es_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! core-js/es/object */
    "./node_modules/core-js/es/object/index.js");
    /* harmony import */


    var core_js_es_object__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_es_object__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var core_js_es_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! core-js/es/function */
    "./node_modules/core-js/es/function/index.js");
    /* harmony import */


    var core_js_es_function__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_es_function__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var core_js_es_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! core-js/es/parse-int */
    "./node_modules/core-js/es/parse-int.js");
    /* harmony import */


    var core_js_es_parse_int__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_es_parse_int__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var core_js_es_parse_float__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! core-js/es/parse-float */
    "./node_modules/core-js/es/parse-float.js");
    /* harmony import */


    var core_js_es_parse_float__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_es_parse_float__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var core_js_es_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! core-js/es/number */
    "./node_modules/core-js/es/number/index.js");
    /* harmony import */


    var core_js_es_number__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_es_number__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var core_js_es_math__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! core-js/es/math */
    "./node_modules/core-js/es/math/index.js");
    /* harmony import */


    var core_js_es_math__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_es_math__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var core_js_es_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! core-js/es/string */
    "./node_modules/core-js/es/string/index.js");
    /* harmony import */


    var core_js_es_string__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_es_string__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var core_js_es_date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! core-js/es/date */
    "./node_modules/core-js/es/date/index.js");
    /* harmony import */


    var core_js_es_date__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_es_date__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var core_js_es_array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! core-js/es/array */
    "./node_modules/core-js/es/array/index.js");
    /* harmony import */


    var core_js_es_array__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_es_array__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var core_js_es_regexp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! core-js/es/regexp */
    "./node_modules/core-js/es/regexp/index.js");
    /* harmony import */


    var core_js_es_regexp__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_es_regexp__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var core_js_es_map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! core-js/es/map */
    "./node_modules/core-js/es/map/index.js");
    /* harmony import */


    var core_js_es_map__WEBPACK_IMPORTED_MODULE_11___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_es_map__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var core_js_es_set__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! core-js/es/set */
    "./node_modules/core-js/es/set/index.js");
    /* harmony import */


    var core_js_es_set__WEBPACK_IMPORTED_MODULE_12___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_es_set__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var core_js_es_reflect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! core-js/es/reflect */
    "./node_modules/core-js/es/reflect/index.js");
    /* harmony import */


    var core_js_es_reflect__WEBPACK_IMPORTED_MODULE_13___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_es_reflect__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! zone.js/dist/zone */
    "./node_modules/zone.js/dist/zone-evergreen.js");
    /* harmony import */


    var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_14___default =
    /*#__PURE__*/
    __webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_14__);

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }; // This file includes polyfills needed by Angular 2 and is loaded before
    // the app. You can add your own extra polyfills to this file.

    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/ericbishard/dev/sandbox/try-cb-frontend/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map