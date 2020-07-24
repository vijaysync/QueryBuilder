(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/addcard/addcard.component.html":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addcard/addcard.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAddcardAddcardComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-icon class=\"cursor\" aria-hidden=\"false\" aria-label=\"Example home icon\" (click)=\"setCondition()\">\n    add\n  </mat-icon>\n  <span class=\"set-position\">New Condition</span>\n\n";
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


      __webpack_exports__["default"] = "<div class=\"container\">\n  <mat-card [ngStyle]=\"{'background-color': '#f7f9fa'}\">\n    <mat-card-title class=\"title\">Node Space test</mat-card-title>\n    <mat-card-content>\n      <app-tab></app-tab>\n    </mat-card-content>\n  </mat-card>\n</div>\n\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/cardlist/cardlist.component.html":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cardlist/cardlist.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCardlistCardlistComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"tab-height\" style=\"overflow: auto;\">\n    <div class=\"add-link set-border\">\n        <!-- <ng-container *ngTemplateOutlet=\"icon; context:{condition: setEnable.newCondition}\"></ng-container> -->\n        <app-addcard [setEnable]=\"setEnable.newCondition\"></app-addcard>\n    </div>\n    <form #temp=\"ngForm\" (ngSubmit)=\"submit(temp)\">\n        <div cdkDropListLockAxis=\"y\" cdkDropList (cdkDropListDropped)=\"drop($event)\">\n            <div *ngFor=\"let item of List;let i=index\" cdkDrag>\n                <div *ngIf=\"operator[i].buttonHide\" mat-stroked-button class=\"condition-margin\"\n                    (click)=\"toggleQuery(i, operator[i].Query.setQuery)\">\n                    <input type=\"button\" name=\"query{{i}}\" class=\"form-control\"\n                        [(ngModel)]=\"operator[i].Query.QueryName\" />\n                </div>\n\n                <div class=\"block\" [ngStyle]=\"{'border-top': item.alert ? '2px solid red' : ''}\">\n                    <ng-container *ngIf=\"item.addIcon else enableQuery\">\n                        <mat-icon *ngIf=\"item.removeIcon else openbrace\" class=\"cursor\" aria-hidden=\"false\"\n                            aria-label=\"Example home icon\" (click)=\"addIcon(i, item.addIcon)\">\n                            add\n                        </mat-icon>\n                        <ng-template #openbrace>\n                            <span class=\"query-margin\">\n                                <a href=\"javascript:void(0)\">&#40;</a>\n                            </span>\n                        </ng-template>\n                    </ng-container>\n                    <ng-template #enableQuery>\n                        <div class=\"query-position\">\n                            <mat-icon (click)=\"setOpenBrace(i, item.addIcon, item.removeIcon, false)\">\n                                block\n                            </mat-icon>\n                            <span class=\"query-margin\"\n                                (click)=\"setOpenBrace(i, item.addIcon, item.removeIcon, true)\">&#40;</span>\n                        </div>\n                    </ng-template>\n\n\n                    <!-- <select (change)=\"select($event, i)\" class=\"selectStyle\">\n              <option *ngFor=\"let ListItem of keyValues; let k=index\" value={{k}}>\n                {{ListItem}}\n              </option>\n            </select> -->\n\n                    <!-- <mat-form-field appearance=\"fill\">\n              <mat-label>Favorite food</mat-label>\n              <mat-select [(value)]=item.selected>\n                <mat-option *ngFor=\"let food of keyValues;let k=index\" value={{k}}>\n                  {{food}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field> -->\n\n\n                    <span *ngIf=\"item.hideVaribale else showInput\"\n                        class=\"set-newmargin\" [ngStyle]=\"{'top': item.addIcon && item.removeIcon ? '11px' : '4px'}\"\n                        (dblclick)=\"activeInput(i)\">\n                        {{item.input || 'variable'+i}}\n                    </span>\n                    <ng-template #showInput>\n                        <div class=\"input-container\">\n                            <input type=\"text\" [(ngModel)]=\"item.input\" name=\"name{{i}}\" class=\"set-input\" />\n                        </div>\n                    </ng-template>\n                    <ng-container *ngIf=\"item.closeIcon else addQuery\">\n                        <mat-icon *ngIf=\"item.closeBrace else close\" class=\"cursor set-right\" aria-hidden=\"false\"\n                            aria-label=\"Example home icon\" (click)=\"closeIcon(i, item.closeIcon)\">\n                            add\n                        </mat-icon>\n                        <ng-template #close>\n                            <span class=\"disable-outline\">\n                                <input type=submit value=\")\" />\n                            </span>\n                        </ng-template>\n                    </ng-container>\n                    <ng-template #addQuery>\n                        <div class=\"close-brace\">\n                            <mat-icon (click)=\"setCloseBrace(i, item.closeIcon, item.closeBrace, false)\">\n                                block\n                            </mat-icon>\n                            <span class=\"query-margin\"\n                                (click)=\"setCloseBrace(i, item.closeIcon, item.closeBrace, true)\">&#41;</span>\n                        </div>\n                    </ng-template>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/description/description.component.html":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/description/description.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDescriptionDescriptionComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"tab-height\">\n    Content 2\n  </div>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab/tab.component.html":
    /*!******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab/tab.component.html ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTabTabComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-tab-group dynamicHeight>\n  <mat-tab label=\"Condition\">\n    <div *ngIf=\"setEnable.isEnable else block\" class=\"tab-height set-margin add-link\">\n      <!-- <ng-container *ngTemplateOutlet=\"icon; context:{condition: setEnable.addCondition}\"></ng-container> -->\n\n      <app-addcard [setEnable]=\"setEnable.addCondition\"> </app-addcard>\n    </div>\n    <ng-template #block>\n\n      <app-cardlist [setEnable]=\"setEnable\" [ArrayList]=\"ArrayList\" [operator]=\"operator\"></app-cardlist>\n\n    </ng-template>\n\n  </mat-tab>\n  <mat-tab label=\"Description\">\n    <app-description></app-description>\n  </mat-tab>\n</mat-tab-group>\n\n\n\n<!-- <ng-template #icon let-enable=\"condition\">\n    <mat-icon class=\"cursor\" aria-hidden=\"false\" aria-label=\"Example home icon\" (click)=\"enable()\">\n      add\n    </mat-icon>\n    <span class=\"set-position\">New Condition</span>\n  </ng-template> -->";
      /***/
    },

    /***/
    "./src/app/addcard/addcard.component.scss":
    /*!************************************************!*\
      !*** ./src/app/addcard/addcard.component.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAddcardAddcardComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZGNhcmQvYWRkY2FyZC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/addcard/addcard.component.ts":
    /*!**********************************************!*\
      !*** ./src/app/addcard/addcard.component.ts ***!
      \**********************************************/

    /*! exports provided: AddcardComponent */

    /***/
    function srcAppAddcardAddcardComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddcardComponent", function () {
        return AddcardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AddcardComponent = /*#__PURE__*/function () {
        function AddcardComponent() {
          var _this = this;

          _classCallCheck(this, AddcardComponent);

          this.setCondition = function () {
            _this.setEnable();
          };
        }

        _createClass(AddcardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AddcardComponent;
      }();

      AddcardComponent.ctorParameters = function () {
        return [];
      };

      AddcardComponent.propDecorators = {
        ArrayList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['ArrayList']
        }],
        operator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['operator']
        }],
        setEnable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['setEnable']
        }],
        addFunction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['TabComponent']
        }]
      };
      AddcardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addcard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./addcard.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/addcard/addcard.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./addcard.component.scss */
        "./src/app/addcard/addcard.component.scss"))["default"]]
      })], AddcardComponent);
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
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


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); //import { QueryBuilderConfig } from 'angular2-query-builder';


      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(viewContainerRef) {
          _classCallCheck(this, AppComponent);

          this.viewContainerRef = viewContainerRef;
          this.clickCount = [];
        }

        _createClass(AppComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
            //Add 'implements AfterViewInit' to the class.
            debugger;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {//console.log(this.viewContainerRef.createEmbeddedView(this.temp), 'template', this.newdiv, 'newdiv', this.cont, 'container');
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
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


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/card.js");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/tabs */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/tabs.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/drag-drop.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/esm2015/select.js");
      /* harmony import */


      var _tab_tab_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./tab/tab.component */
      "./src/app/tab/tab.component.ts");
      /* harmony import */


      var _addcard_addcard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./addcard/addcard.component */
      "./src/app/addcard/addcard.component.ts");
      /* harmony import */


      var _cardlist_cardlist_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./cardlist/cardlist.component */
      "./src/app/cardlist/cardlist.component.ts");
      /* harmony import */


      var _description_description_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./description/description.component */
      "./src/app/description/description.component.ts"); //import { QueryComponent } from './query/query.component';
      //import { QueryBuilderModule } from "angular2-query-builder";


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _tab_tab_component__WEBPACK_IMPORTED_MODULE_13__["TabComponent"], _addcard_addcard_component__WEBPACK_IMPORTED_MODULE_14__["AddcardComponent"], _cardlist_cardlist_component__WEBPACK_IMPORTED_MODULE_15__["CardlistComponent"], _description_description_component__WEBPACK_IMPORTED_MODULE_16__["DescriptionComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__["DragDropModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/cardlist/cardlist.component.scss":
    /*!**************************************************!*\
      !*** ./src/app/cardlist/cardlist.component.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCardlistCardlistComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmRsaXN0L2NhcmRsaXN0LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/cardlist/cardlist.component.ts":
    /*!************************************************!*\
      !*** ./src/app/cardlist/cardlist.component.ts ***!
      \************************************************/

    /*! exports provided: CardlistComponent */

    /***/
    function srcAppCardlistCardlistComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardlistComponent", function () {
        return CardlistComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/drag-drop.js");

      var CardlistComponent = /*#__PURE__*/function () {
        function CardlistComponent() {
          var _this2 = this;

          _classCallCheck(this, CardlistComponent);

          this.toggleQuery = function (index, query) {
            _this2.operator[index].Query.QueryName = query && 'or' || 'and';
            _this2.operator[index].Query.setQuery = !query;
          };

          this.submit = function (e) {};

          this.activeInput = function (index) {
            _this2.List[index].hideVaribale = false;
          };

          this.setOpenBrace = function (index, addIcon, removeIcon, disable) {
            debugger;
            _this2.List[index].addIcon = !addIcon;

            if (disable) {
              _this2.List[index].removeIcon = !removeIcon;
              _this2.List[0].alert = false;
            }
          };

          this.closeIcon = function (index, closeIcon) {
            _this2.List[index].closeIcon = !closeIcon;
          };

          this.addIcon = function (index, addIcon) {
            debugger;
            _this2.List[index].addIcon = !addIcon;
            _this2.setEnable.setPosition = false;
          };

          this.setCloseBrace = function (index, closeIcon, closebrace, diasble) {
            _this2.List[index].closeIcon = !closeIcon;
            if (diasble) _this2.List[index].closeBrace = !closebrace;
          };
        }

        _createClass(CardlistComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "drop",
          value: function drop(event) {
            debugger;
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(this.List, event.previousIndex, event.currentIndex); //moveItemInArray(this.List, event.currentIndex - 1, event.previousIndex);
          }
        }]);

        return CardlistComponent;
      }();

      CardlistComponent.ctorParameters = function () {
        return [];
      };

      CardlistComponent.propDecorators = {
        List: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['ArrayList']
        }],
        operator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['operator']
        }],
        setEnable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['setEnable']
        }]
      };
      CardlistComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cardlist',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./cardlist.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/cardlist/cardlist.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./cardlist.component.scss */
        "./src/app/cardlist/cardlist.component.scss"))["default"]]
      })], CardlistComponent);
      /***/
    },

    /***/
    "./src/app/description/description.component.scss":
    /*!********************************************************!*\
      !*** ./src/app/description/description.component.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppDescriptionDescriptionComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/description/description.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/description/description.component.ts ***!
      \******************************************************/

    /*! exports provided: DescriptionComponent */

    /***/
    function srcAppDescriptionDescriptionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DescriptionComponent", function () {
        return DescriptionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DescriptionComponent = /*#__PURE__*/function () {
        function DescriptionComponent() {
          _classCallCheck(this, DescriptionComponent);
        }

        _createClass(DescriptionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DescriptionComponent;
      }();

      DescriptionComponent.ctorParameters = function () {
        return [];
      };

      DescriptionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-description',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./description.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/description/description.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./description.component.scss */
        "./src/app/description/description.component.scss"))["default"]]
      })], DescriptionComponent);
      /***/
    },

    /***/
    "./src/app/tab/tab.component.scss":
    /*!****************************************!*\
      !*** ./src/app/tab/tab.component.scss ***!
      \****************************************/

    /*! exports provided: default */

    /***/
    function srcAppTabTabComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYi90YWIuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/tab/tab.component.ts":
    /*!**************************************!*\
      !*** ./src/app/tab/tab.component.ts ***!
      \**************************************/

    /*! exports provided: TabComponent */

    /***/
    function srcAppTabTabComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabComponent", function () {
        return TabComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var TabComponent = /*#__PURE__*/function () {
        function TabComponent() {
          var _this3 = this;

          _classCallCheck(this, TabComponent);

          this.ArrayList = [{
            addIcon: true,
            buttonToggle: false,
            closeBrace: true,
            inputHide: false,
            hideVaribale: true,
            removeIcon: true,
            closeIcon: true,
            input: '',
            alert: false,
            selected: ''
          }];
          this.operator = [{
            buttonHide: false,
            Query: {
              QueryName: 'and',
              setQuery: true
            }
          }];

          this.addCondition = function () {
            _this3.setEnable.isEnable = false;
            console.log('hi old'); //this.keyValues = Object.keys(this.query.mockData[0])
          };

          this.newCondition = function () {
            _this3.ArrayList.push({
              addIcon: true,
              buttonToggle: false,
              closeBrace: true,
              inputHide: false,
              hideVaribale: true,
              removeIcon: true,
              closeIcon: true,
              input: '',
              alert: false,
              selected: ''
            });

            _this3.operator.push({
              buttonHide: true,
              Query: {
                QueryName: 'and',
                setQuery: true
              }
            });
          }; // toggleQuery = (index: number, query: boolean) => {
          //   this.operator[index].Query.QueryName = query && 'or' || 'and';
          //   this.operator[index].Query.setQuery = !query;
          // }


          this.setEnable = {
            isEnable: true,
            EnableIcon: false,
            setPosition: true,
            newCondition: this.newCondition,
            addCondition: this.addCondition
          };
        }

        _createClass(TabComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TabComponent;
      }();

      TabComponent.ctorParameters = function () {
        return [];
      };

      TabComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab/tab.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab.component.scss */
        "./src/app/tab/tab.component.scss"))["default"]]
      })], TabComponent);
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
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

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


      var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! hammerjs */
      "./node_modules/hammerjs/hammer.js");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
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
      /*! /home/ad.msystechnologies.com/vpackiam/Downloads/query-builder/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map