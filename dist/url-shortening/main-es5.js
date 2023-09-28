function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./$$_lazy_route_resource lazy recursive":
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

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-header></app-header>\n<app-home></app-home>\n<app-footer></app-footer>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
    \***********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<footer id=\"footer\">\n  <img class=\"logo\" src=\"/assets/images/logo.svg\" alt=\"\" />\n  <div class=\"box-items features\">\n    <h3>Features</h3>\n    <ul class=\"list\">\n      <li>Link Shortening</li>\n      <li>Branded Links</li>\n      <li>Analytics</li>\n    </ul>\n  </div>\n  <div class=\"box-items resources\">\n    <h3>Resources</h3>\n    <ul class=\"list\">\n      <li>Blog</li>\n      <li>Developers</li>\n      <li>Support</li>\n    </ul>\n  </div>\n  <div class=\"box-items company\">\n    <h3>Company</h3>\n    <ul class=\"list\">\n      <li>About</li>\n      <li>Our Team</li>\n      <li>Careers</li>\n      <li>Contact</li>\n    </ul>\n  </div>\n  <div class=\"networks\">\n        <img src=\"/assets/images/icon-facebook.svg\" alt=\"Ícone facebook\">\n    <img src=\"/assets/images/icon-twitter.svg\" alt=\"Ícone twitter\">\n    <img src=\"/assets/images/icon-pinterest.svg\" alt=\"Ícone pinterest\">\n    <img src=\"/assets/images/icon-instagram.svg\" alt=\"Ícone instagram\">\n  </div>\n</footer>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
    \***********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<header id=\"header\">\n  <div class=\"container\">\n    <div class=\"items-logo-box\">\n      <img src=\"/assets/images/logo.svg\" alt=\"Logo Shortly\" />\n      <ul class=\"list\">\n        <li>Features</li>\n        <li>Pricing</li>\n        <li>Resources</li>\n      </ul>\n    </div>\n    <div class=\"buttons-box\">\n      <svg\n      (click)=\"showHideMenu()\"\n      \n        xmlns=\"http://www.w3.org/2000/svg\"\n        height=\"1.6em\"\n        viewBox=\"0 0 448 512\"\n      >\n        <path \n          d=\"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z\"\n        />\n      </svg>\n      <button class=\"login\">Login</button>\n      <button class=\"signup\">Sign Up</button>\n    </div>\n  </div>\n\n  <div class=\"menu\" [ngClass]=\"openMenu ? 'openMenu' : ''\">\n    <ul class=\"list\">\n      <li>Features</li>\n      <li>Pricing</li>\n      <li>Resources</li>\n    </ul>\n    <hr>\n    <button class=\"login\">Login</button>\n      <button class=\"signup\">Sign Up</button>\n  </div>\n</header>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<main id=\"main\">\n  <div class=\"container\">\n    <div class=\"content\">\n      <h1>More than just shorter links</h1>\n      <p>\n        Build your brand’s recognition and get detailed insights on how your\n        links are performing.\n      </p>\n      <button class=\"button\">Get started</button>\n    </div>\n    <img src=\"/assets/images/illustration-working.svg\" alt=\"\" />\n  </div>\n\n  <div id=\"url-container\">\n    <div class=\"container\">\n      <div class=\"input-box\">\n        <input type=\"text\" placeholder=\"Shorten a link here...\" />\n        <button class=\"button\">Shorten it!</button>\n      </div>\n\n      <div class=\"list\">\n        <span>https://www.frontendmentor.io/home</span>\n        <div class=\"link-shortening-btn\">\n          <span>https://www.sdlk</span>\n          <button>{{ copiedLink ? \"Copied!\" : \"Copy\" }}</button>\n        </div>\n      </div>\n\n      <section id=\"advanced-statistics-container\">\n        <h2>Advanced Statistics</h2>\n        <p class=\"section-preview\">\n          Track how your links are performing across the web with our advanced\n          statistics dashboard.\n        </p>\n        <div class=\"statistics-container\">\n          <div class=\"line\"></div>\n          <div class=\"card-statistics recognition\">\n            <div class=\"img-box\"></div>\n            <h3>Brand Recognition</h3>\n            <p>\n              Boost your brand recognition with each click. Generic links don’t\n              mean a thing. Branded links help instil confidence in your\n              content.\n            </p>\n          </div>\n          <div class=\"card-statistics detailed-records\">\n            <div class=\"img-box\"></div>\n            <h3>Detailed Records</h3>\n            <p>\n              Gain insights into who is clicking your links. Knowing when and\n              where people engage with your content helps inform better\n              decisions.\n            </p>\n          </div>\n          <div class=\"card-statistics customizable\">\n            <div class=\"img-box\"></div>\n            <h3>Fully Customizable</h3>\n            <p>\n              Improve brand awareness and content discoverability through\n              customizable links, supercharging audience engagement.\n            </p>\n          </div>\n        </div>\n      </section>\n    </div>\n    \n    <section id=\"boost-your-links-container\">\n      <h2>Boost your links today</h2>\n      <button class=\"button\">Get Started</button>\n    </section>\n  </div>\n</main>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/shortening-url/shortening-url.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shortening-url/shortening-url.component.html ***!
    \***************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShorteningUrlShorteningUrlComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "";

    /***/
  },

  /***/"./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/
  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
      return _extendStatics(d, b);
    };
    function __extends(d, b) {
      _extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return _assign.apply(this, arguments);
    };
    function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }
    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }
    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
        f,
        y,
        t,
        g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }
    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }
    function __exportStar(m, exports) {
      for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
        r,
        ar = [],
        e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    }
    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
      return ar;
    }
    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
      return r;
    }
    ;
    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;
      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }
    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }
    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
        i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }
    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    }
    ;
    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result["default"] = mod;
      return result;
    }
    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }
      return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }
      privateMap.set(receiver, value);
      return value;
    }

    /***/
  },

  /***/"./src/app/app-routing.module.ts":
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
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var routes = [];
    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);

    /***/
  },

  /***/"./src/app/app.component.scss":
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

  /***/"./src/app/app.component.ts":
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
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);
      this.title = 'url-shortening';
    });
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./app.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./app.component.scss */"./src/app/app.component.scss"))["default"]]
    })], AppComponent);

    /***/
  },

  /***/"./src/app/app.module.ts":
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
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app-routing.module */"./src/app/app-routing.module.ts");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./components/home/home.component */"./src/app/components/home/home.component.ts");
    /* harmony import */
    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./components/header/header.component */"./src/app/components/header/header.component.ts");
    /* harmony import */
    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./components/footer/footer.component */"./src/app/components/footer/footer.component.ts");
    /* harmony import */
    var _components_shortening_url_shortening_url_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./components/shortening-url/shortening-url.component */"./src/app/components/shortening-url/shortening-url.component.ts");
    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _components_shortening_url_shortening_url_component__WEBPACK_IMPORTED_MODULE_8__["ShorteningUrlComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);

    /***/
  },

  /***/"./src/app/components/footer/footer.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/footer/footer.component.scss ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "#footer {\n  width: 100%;\n  padding: 4em;\n  background-color: var(--verydarkviolet);\n  color: var(--white);\n  display: flex;\n  justify-content: space-around;\n}\n#footer .logo {\n  width: 130px;\n  height: 40px;\n  -webkit-filter: invert(1);\n          filter: invert(1);\n}\n#footer .box-items {\n  display: flex;\n  flex-direction: column;\n}\n#footer .box-items h3 {\n  margin-bottom: 1em;\n}\n#footer .box-items .list {\n  display: flex;\n  flex-direction: column;\n  row-gap: 0.5em;\n}\n#footer .box-items .list li {\n  cursor: pointer;\n  list-style-type: none;\n}\n#footer .box-items .list li:hover {\n  color: var(--cyan);\n}\n#footer .networks {\n  display: flex;\n  -moz-column-gap: 1.2em;\n       column-gap: 1.2em;\n}\n#footer .networks img {\n  height: 30px;\n  cursor: pointer;\n}\n@media screen and (max-width: 375px) {\n  #footer {\n    padding: 3em;\n    flex-direction: column;\n    align-items: center;\n  }\n  #footer .logo {\n    width: 130px;\n    height: 35px;\n    -webkit-filter: invert(1);\n            filter: invert(1);\n  }\n  #footer .box-items {\n    align-items: center;\n    margin-top: 2.5em;\n  }\n  #footer .box-items .list {\n    align-items: center;\n  }\n  #footer .networks {\n    margin-top: 2.5em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXEFOR1VMQVJcXHVybC1zaG9ydGVuaW5nL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FDQ0Y7QURDRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQ0NKO0FERUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNBSjtBREVJO0VBQ0Usa0JBQUE7QUNBTjtBREdJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0ROO0FER007RUFDRSxlQUFBO0VBQ0EscUJBQUE7QUNEUjtBREdRO0VBQ0Usa0JBQUE7QUNEVjtBRE9FO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO09BQUEsaUJBQUE7QUNMSjtBRE9JO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNMTjtBRFVBO0VBQ0U7SUFDRSxZQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtFQ1BGO0VEU0U7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLHlCQUFBO1lBQUEsaUJBQUE7RUNQSjtFRFVFO0lBQ0UsbUJBQUE7SUFDQSxpQkFBQTtFQ1JKO0VEVUk7SUFDRSxtQkFBQTtFQ1JOO0VEWUU7SUFDRSxpQkFBQTtFQ1ZKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZm9vdGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiA0ZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdmVyeWRhcmt2aW9sZXQpO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcbiAgLmxvZ28ge1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XHJcbiAgfVxyXG5cclxuICAuYm94LWl0ZW1zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5saXN0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgcm93LWdhcDogMC41ZW07XHJcblxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tY3lhbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubmV0d29ya3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGNvbHVtbi1nYXA6IDEuMmVtO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcclxuICAjZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDNlbTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIC5sb2dvIHtcclxuICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC5ib3gtaXRlbXMge1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyLjVlbTtcclxuXHJcbiAgICAgIC5saXN0IHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm5ldHdvcmtzIHtcclxuICAgICAgbWFyZ2luLXRvcDogMi41ZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiNmb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNGVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12ZXJ5ZGFya3Zpb2xldCk7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuI2Zvb3RlciAubG9nbyB7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmaWx0ZXI6IGludmVydCgxKTtcbn1cbiNmb290ZXIgLmJveC1pdGVtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4jZm9vdGVyIC5ib3gtaXRlbXMgaDMge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG4jZm9vdGVyIC5ib3gtaXRlbXMgLmxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICByb3ctZ2FwOiAwLjVlbTtcbn1cbiNmb290ZXIgLmJveC1pdGVtcyAubGlzdCBsaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuI2Zvb3RlciAuYm94LWl0ZW1zIC5saXN0IGxpOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWN5YW4pO1xufVxuI2Zvb3RlciAubmV0d29ya3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2x1bW4tZ2FwOiAxLjJlbTtcbn1cbiNmb290ZXIgLm5ldHdvcmtzIGltZyB7XG4gIGhlaWdodDogMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuICAjZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAzZW07XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gICNmb290ZXIgLmxvZ28ge1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XG4gIH1cbiAgI2Zvb3RlciAuYm94LWl0ZW1zIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDIuNWVtO1xuICB9XG4gICNmb290ZXIgLmJveC1pdGVtcyAubGlzdCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAjZm9vdGVyIC5uZXR3b3JrcyB7XG4gICAgbWFyZ2luLXRvcDogMi41ZW07XG4gIH1cbn0iXX0= */";

    /***/
  },

  /***/"./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/
  /*! exports provided: FooterComponent */
  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }
      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return FooterComponent;
    }();
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./footer.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./footer.component.scss */"./src/app/components/footer/footer.component.scss"))["default"]]
    })], FooterComponent);

    /***/
  },

  /***/"./src/app/components/header/header.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/header/header.component.scss ***!
    \*********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "#header .container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 3em 10em;\n}\n#header .container .items-logo-box {\n  display: flex;\n  align-items: center;\n  justify-content: string;\n  -moz-column-gap: 3em;\n       column-gap: 3em;\n}\n#header .container .items-logo-box ul {\n  display: flex;\n  align-items: center;\n  justify-content: string;\n  -moz-column-gap: 1.5em;\n       column-gap: 1.5em;\n}\n#header .container .items-logo-box ul li {\n  list-style-type: none;\n  font-weight: 700;\n  color: var(--darkgray);\n}\n#header .container .items-logo-box ul li:hover {\n  transition: 0.3s;\n  color: var(--verydarkviolet);\n  cursor: pointer;\n}\n#header .container .buttons-box svg {\n  display: none;\n}\n#header .container .buttons-box button {\n  padding: 0.5em 1.5em;\n  border: none;\n  font-weight: 700;\n  border-radius: 30px;\n  cursor: pointer;\n  background-color: transparent;\n  color: var(--darkgray);\n}\n#header .container .buttons-box .login:hover {\n  transition: 0.3s;\n  color: var(--verydarkviolet);\n}\n#header .container .buttons-box .signup {\n  background-color: var(--cyan);\n  color: var(--white);\n}\n#header .container .buttons-box .signup:hover {\n  transition: 0.3s;\n  background-color: var(--cyanHover);\n}\n#header .menu {\n  display: none;\n}\n@media screen and (max-width: 375px) {\n  #header .container {\n    padding: 2em 1em;\n  }\n  #header .container .items-logo-box ul {\n    display: none;\n  }\n  #header .container .buttons-box svg {\n    display: block;\n    opacity: 0.5;\n  }\n  #header .container .buttons-box button {\n    display: none;\n  }\n  #header .menu {\n    display: flex;\n    align-items: center;\n    justify-content: string;\n    display: none;\n    width: 90vw;\n    flex-direction: column;\n    row-gap: 1em;\n    padding: 2em 1.5em;\n    background-color: var(--darkviolet);\n    position: absolute;\n    top: 5em;\n    left: 5%;\n    border-radius: 10px;\n  }\n  #header .menu hr {\n    width: 100%;\n    border: 1px solid rgba(255, 255, 255, 0.05);\n  }\n  #header .menu .list {\n    display: flex;\n    align-items: center;\n    justify-content: string;\n    flex-direction: column;\n    row-gap: 1.4em;\n    margin-bottom: 10px;\n  }\n  #header .menu .list li {\n    list-style-type: none;\n    font-weight: 700;\n    color: var(--white);\n    cursor: pointer;\n  }\n  #header .menu .list li:hover {\n    transition: 0.3s;\n    color: var(--cyan);\n  }\n  #header .menu button {\n    width: 100%;\n    padding: 0.5em 1.5em;\n    border: none;\n    font-weight: 700;\n    border-radius: 30px;\n    cursor: pointer;\n    color: var(--white);\n    background-color: transparent;\n  }\n  #header .menu .login:hover {\n    color: var(--cyan);\n  }\n  #header .menu .signup {\n    background-color: var(--cyan);\n    color: var(--white);\n  }\n  #header .menu .signup:hover {\n    transition: 0.3s;\n    background-color: var(--cyanHov2er);\n  }\n}\n.openMenu {\n  display: flex !important;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXEFOR1VMQVJcXHVybC1zaG9ydGVuaW5nL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9FO0VBTkEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBS2dCO0VBQ2QsaUJBQUE7QUNKSjtBRE1JO0VBVkYsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBSHNCO0VBYWxCLG9CQUFBO09BQUEsZUFBQTtBQ0ZOO0FESU07RUFkSixhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFIc0I7RUFpQmhCLHNCQUFBO09BQUEsaUJBQUE7QUNBUjtBREVRO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDQVY7QURFVTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FDQVo7QURPTTtFQUNFLGFBQUE7QUNMUjtBRFFNO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0FDTlI7QURTTTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7QUNQUjtBRFVNO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtBQ1JSO0FEVVE7RUFDRSxnQkFBQTtFQUNBLGtDQUFBO0FDUlY7QURjRTtFQUNFLGFBQUE7QUNaSjtBRGdCQTtFQUVJO0lBQ0UsZ0JBQUE7RUNkSjtFRGlCTTtJQUNFLGFBQUE7RUNmUjtFRG9CTTtJQUNFLGNBQUE7SUFDQSxZQUFBO0VDbEJSO0VEcUJNO0lBQ0UsYUFBQTtFQ25CUjtFRHdCRTtJQTVGRixhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFIc0I7SUErRmxCLGFBQUE7SUFDQSxXQUFBO0lBQ0Esc0JBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQ0FBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSxtQkFBQTtFQ3BCSjtFRHNCSTtJQUNFLFdBQUE7SUFDQSwyQ0FBQTtFQ3BCTjtFRHVCSTtJQTlHSixhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFIc0I7SUFpSGhCLHNCQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0VDbkJOO0VEcUJNO0lBQ0UscUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtFQ25CUjtFRHFCUTtJQUNFLGdCQUFBO0lBQ0Esa0JBQUE7RUNuQlY7RUR3Qkk7SUFDRSxXQUFBO0lBQ0Esb0JBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtJQUNBLDZCQUFBO0VDdEJOO0VEMEJNO0lBQ0Usa0JBQUE7RUN4QlI7RUQ0Qkk7SUFDRSw2QkFBQTtJQUNBLG1CQUFBO0VDMUJOO0VENEJNO0lBQ0UsZ0JBQUE7SUFDQSxtQ0FBQTtFQzFCUjtBQUNGO0FEZ0NBO0VBQ0Usd0JBQUE7RUFDQSxZQUFBO0FDOUJGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGZsZXgoJHR5cGVzcGFjZTogc3RyaW5nKSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogJHR5cGVzcGFjZTtcclxufVxyXG5cclxuI2hlYWRlciB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBAaW5jbHVkZSBmbGV4KHNwYWNlLWJldHdlZW4pO1xyXG4gICAgcGFkZGluZzogM2VtIDEwZW07XHJcblxyXG4gICAgLml0ZW1zLWxvZ28tYm94IHtcclxuICAgICAgQGluY2x1ZGUgZmxleCgpO1xyXG4gICAgICBjb2x1bW4tZ2FwOiAzZW07XHJcblxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgQGluY2x1ZGUgZmxleCgpO1xyXG4gICAgICAgIGNvbHVtbi1nYXA6IDEuNWVtO1xyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWRhcmtncmF5KTtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXZlcnlkYXJrdmlvbGV0KTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b25zLWJveCB7XHJcbiAgICAgIHN2ZyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiAwLjVlbSAxLjVlbTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tZGFya2dyYXkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubG9naW46aG92ZXIge1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXZlcnlkYXJrdmlvbGV0KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNpZ251cCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbik7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbkhvdmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tZW51IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gICNoZWFkZXIge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIHBhZGRpbmc6IDJlbSAxZW07XHJcblxyXG4gICAgICAuaXRlbXMtbG9nby1ib3gge1xyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYnV0dG9ucy1ib3gge1xyXG4gICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tZW51IHtcclxuICAgICAgQGluY2x1ZGUgZmxleCgpO1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB3aWR0aDogOTB2dztcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgcm93LWdhcDogMWVtO1xyXG4gICAgICBwYWRkaW5nOiAyZW0gMS41ZW07XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmt2aW9sZXQpO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNWVtO1xyXG4gICAgICBsZWZ0OiA1JTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICAgIGhyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubGlzdCB7XHJcbiAgICAgICAgQGluY2x1ZGUgZmxleCgpO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgcm93LWdhcDogMS40ZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IC4zcztcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWN5YW4pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwLjVlbSAxLjVlbTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubG9naW4ge1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWN5YW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnNpZ251cCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbik7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbkhvdjJlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ub3Blbk1lbnUge1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICB6LWluZGV4OiA5OTk7XHJcbn0iLCIjaGVhZGVyIC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDNlbSAxMGVtO1xufVxuI2hlYWRlciAuY29udGFpbmVyIC5pdGVtcy1sb2dvLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3RyaW5nO1xuICBjb2x1bW4tZ2FwOiAzZW07XG59XG4jaGVhZGVyIC5jb250YWluZXIgLml0ZW1zLWxvZ28tYm94IHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzdHJpbmc7XG4gIGNvbHVtbi1nYXA6IDEuNWVtO1xufVxuI2hlYWRlciAuY29udGFpbmVyIC5pdGVtcy1sb2dvLWJveCB1bCBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWRhcmtncmF5KTtcbn1cbiNoZWFkZXIgLmNvbnRhaW5lciAuaXRlbXMtbG9nby1ib3ggdWwgbGk6aG92ZXIge1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBjb2xvcjogdmFyKC0tdmVyeWRhcmt2aW9sZXQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jaGVhZGVyIC5jb250YWluZXIgLmJ1dHRvbnMtYm94IHN2ZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4jaGVhZGVyIC5jb250YWluZXIgLmJ1dHRvbnMtYm94IGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDAuNWVtIDEuNWVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1kYXJrZ3JheSk7XG59XG4jaGVhZGVyIC5jb250YWluZXIgLmJ1dHRvbnMtYm94IC5sb2dpbjpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGNvbG9yOiB2YXIoLS12ZXJ5ZGFya3Zpb2xldCk7XG59XG4jaGVhZGVyIC5jb250YWluZXIgLmJ1dHRvbnMtYm94IC5zaWdudXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuKTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cbiNoZWFkZXIgLmNvbnRhaW5lciAuYnV0dG9ucy1ib3ggLnNpZ251cDpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW5Ib3Zlcik7XG59XG4jaGVhZGVyIC5tZW51IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgI2hlYWRlciAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAyZW0gMWVtO1xuICB9XG4gICNoZWFkZXIgLmNvbnRhaW5lciAuaXRlbXMtbG9nby1ib3ggdWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgI2hlYWRlciAuY29udGFpbmVyIC5idXR0b25zLWJveCBzdmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuICAjaGVhZGVyIC5jb250YWluZXIgLmJ1dHRvbnMtYm94IGJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAjaGVhZGVyIC5tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzdHJpbmc7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB3aWR0aDogOTB2dztcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHJvdy1nYXA6IDFlbTtcbiAgICBwYWRkaW5nOiAyZW0gMS41ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya3Zpb2xldCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNWVtO1xuICAgIGxlZnQ6IDUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgI2hlYWRlciAubWVudSBociB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbiAgfVxuICAjaGVhZGVyIC5tZW51IC5saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzdHJpbmc7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICByb3ctZ2FwOiAxLjRlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gICNoZWFkZXIgLm1lbnUgLmxpc3QgbGkge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gICNoZWFkZXIgLm1lbnUgLmxpc3QgbGk6aG92ZXIge1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgY29sb3I6IHZhcigtLWN5YW4pO1xuICB9XG4gICNoZWFkZXIgLm1lbnUgYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwLjVlbSAxLjVlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gICNoZWFkZXIgLm1lbnUgLmxvZ2luOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tY3lhbik7XG4gIH1cbiAgI2hlYWRlciAubWVudSAuc2lnbnVwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuKTtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICB9XG4gICNoZWFkZXIgLm1lbnUgLnNpZ251cDpob3ZlciB7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jeWFuSG92MmVyKTtcbiAgfVxufVxuLm9wZW5NZW51IHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk7XG59Il19 */";

    /***/
  },

  /***/"./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/
  /*! exports provided: HeaderComponent */
  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
        this.openMenu = false;
      }
      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showHideMenu",
        value: function showHideMenu() {
          this.openMenu = !this.openMenu;
          console.log("nakcn");
          console.log(this.openMenu);
        }
      }]);
      return HeaderComponent;
    }();
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./header.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./header.component.scss */"./src/app/components/header/header.component.scss"))["default"]]
    })], HeaderComponent);

    /***/
  },

  /***/"./src/app/components/home/home.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/home/home.component.scss ***!
    \*****************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "#main {\n  overflow: hidden;\n}\n#main .container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n#main .container .content {\n  display: flex;\n  flex-direction: column;\n  row-gap: 1em;\n}\n#main .container .content h1 {\n  width: 600px;\n  font-size: 4.5em;\n  color: var(--verydarkviolet);\n  line-height: 2.5cm;\n}\n#main .container .content p {\n  width: 520px;\n  font-size: 1.2em;\n  color: var(--darkgray);\n  margin-top: -15px;\n}\n#main .container .content button {\n  width: 160px;\n  padding: 0.5em 0;\n  border-radius: 30px;\n  margin-top: 1em;\n}\n#main .container img {\n  position: relative;\n  right: -120px;\n}\n#url-container {\n  margin-top: 8em;\n  background-color: var(--gray);\n}\n#url-container .container {\n  flex-direction: column;\n  display: flex;\n}\n#url-container .container .input-box {\n  width: 100%;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5em;\n  padding: 3em;\n  margin-top: -80px;\n  background: url(/assets/images/bg-shorten-desktop.svg) no-repeat;\n  background-size: cover;\n  background-color: var(--darkviolet);\n}\n#url-container .container .input-box input {\n  width: 100%;\n  padding: 1em 1.5em;\n  border-radius: 7px;\n  background-color: var(--white);\n  color: var(--verydarkviolet);\n  border: none;\n}\n#url-container .container .input-box button {\n  width: 210px;\n  padding: 1em;\n  border-radius: 7px;\n}\n#url-container .container .list {\n  display: none;\n}\n#advanced-statistics-container {\n  width: 100%;\n  margin-top: 2em;\n}\n#advanced-statistics-container h2 {\n  text-align: center;\n  margin: 3em 0 0.4em 0;\n  font-size: 2em;\n}\n#advanced-statistics-container .section-preview {\n  width: 530px;\n  color: var(--darkgray);\n  text-align: center;\n  margin: 0 auto;\n}\n#advanced-statistics-container .statistics-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-grow: 1;\n  gap: 1em;\n  margin-top: 6em;\n  position: relative;\n}\n#advanced-statistics-container .statistics-container .line {\n  width: 100%;\n  position: absolute;\n  background-color: var(--cyan);\n  padding: 5px;\n  margin-top: 5em;\n}\n#advanced-statistics-container .statistics-container .recognition .img-box {\n  background: url(/assets/images/icon-brand-recognition.svg);\n}\n#advanced-statistics-container .statistics-container .detailed-records {\n  top: 3em;\n}\n#advanced-statistics-container .statistics-container .detailed-records .img-box {\n  background: url(/assets/images/icon-detailed-records.svg);\n}\n#advanced-statistics-container .statistics-container .customizable {\n  top: 6em;\n}\n#advanced-statistics-container .statistics-container .customizable .img-box {\n  background: url(/assets/images/icon-fully-customizable.svg);\n}\n#advanced-statistics-container .statistics-container .card-statistics {\n  width: 370px;\n  height: 260px;\n  padding: 2em;\n  border-radius: 10px;\n  background-color: var(--white);\n  position: relative;\n}\n#advanced-statistics-container .statistics-container .card-statistics h3 {\n  font-size: 1.2em;\n  margin: 2em 0 0.8em 0;\n}\n#advanced-statistics-container .statistics-container .card-statistics p {\n  width: 300px;\n  font-size: 0.85em;\n  color: var(--darkgray);\n}\n#advanced-statistics-container .statistics-container .card-statistics .img-box {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background-color: var(--darkviolet);\n  background-size: 50%;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  position: absolute;\n  top: -50px;\n}\n#boost-your-links-container {\n  width: 100%;\n  margin-top: 14em;\n  background: url(/assets/images/bg-shorten-desktop.svg) no-repeat;\n  background-size: cover;\n  background-color: var(--darkviolet);\n  padding: 3em 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n#boost-your-links-container h2 {\n  font-size: 2em;\n  color: var(--white);\n}\n#boost-your-links-container button {\n  width: 160px;\n  padding: 0.5em 0;\n  border-radius: 30px;\n  margin-top: 1em;\n}\n@media screen and (max-width: 375px) {\n  #main .container {\n    flex-direction: column-reverse;\n    gap: 3em;\n  }\n  #main .container .content {\n    display: flex;\n    flex-direction: column;\n    row-gap: 2em;\n  }\n  #main .container .content h1 {\n    width: auto;\n    font-size: 2.3em;\n    line-height: 1.1cm;\n    text-align: center;\n  }\n  #main .container .content p {\n    width: auto;\n    font-size: 1em;\n    text-align: center;\n    color: var(--darkgray);\n    margin-top: -15px;\n  }\n  #main .container .content button {\n    width: 180px;\n    padding: 0.8em 0;\n    border-radius: 30px;\n    margin: 0 auto;\n  }\n  #main .container img {\n    position: relative;\n    right: -200px;\n  }\n\n  #url-container {\n    margin-top: 10em;\n    background-color: var(--gray);\n  }\n  #url-container .container {\n    flex-direction: column;\n    display: flex;\n  }\n  #url-container .container .input-box {\n    width: 100%;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 1em;\n    padding: 1.4em;\n    margin-top: -85px;\n    background: url(/assets/images/bg-shorten-mobile.svg) no-repeat;\n    background-size: cover;\n    background-color: var(--darkviolet);\n  }\n  #url-container .container .input-box input,\n#url-container .container .input-box button {\n    width: 100%;\n    padding: 0.6em 1em;\n    border-radius: 7px;\n  }\n  #url-container .container .list {\n    display: none;\n  }\n\n  #advanced-statistics-container {\n    width: 100%;\n    margin-top: 2em;\n  }\n  #advanced-statistics-container h2 {\n    margin: 0;\n    font-size: 1.5em;\n  }\n  #advanced-statistics-container .section-preview {\n    width: auto;\n    font-size: 0.9em;\n  }\n  #advanced-statistics-container .statistics-container {\n    flex-direction: column;\n    gap: 2.5em;\n  }\n  #advanced-statistics-container .statistics-container .line {\n    height: 100%;\n    width: 5px;\n  }\n  #advanced-statistics-container .statistics-container .card-statistics {\n    width: 330px;\n    padding: 1.5em;\n    text-align: center;\n  }\n  #advanced-statistics-container .statistics-container .card-statistics h3 {\n    font-size: 1.2em;\n    margin: 2em 0 0.8em 0;\n  }\n  #advanced-statistics-container .statistics-container .card-statistics p {\n    width: auto;\n    font-size: 0.85em;\n    color: var(--darkgray);\n  }\n  #advanced-statistics-container .statistics-container .card-statistics .img-box {\n    left: calc(50% - 50px);\n  }\n\n  #boost-your-links-container {\n    margin-top: 10em;\n    background: url(/assets/images/bg-shorten-desktop.svg) no-repeat;\n    background-color: var(--darkviolet);\n    background-size: 100% 300%;\n    padding: 6em 0;\n  }\n  #boost-your-links-container h2 {\n    font-size: 1.5em;\n    text-align: center;\n    color: var(--white);\n  }\n  #boost-your-links-container button {\n    width: 180px;\n    border-radius: 30px;\n    margin-top: 1em;\n    padding: 0.8em 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxBTkdVTEFSXFx1cmwtc2hvcnRlbmluZy9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0NKO0FEQ0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQ047QURDTTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUNDUjtBREVNO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ0FSO0FER007RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNEUjtBREtJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FDSE47QURRQTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtBQ0xGO0FET0U7RUFDRSxzQkFBQTtFQUNBLGFBQUE7QUNMSjtBRE9JO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0VBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0FDTE47QURPTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUNMUjtBRFFNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ05SO0FEVUk7RUFDRSxhQUFBO0FDUk47QURhQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDVkY7QURZRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDVko7QURhRTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ1hKO0FEY0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDWko7QURjSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNaTjtBRGdCTTtFQUNFLDBEQUFBO0FDZFI7QURrQkk7RUFDRSxRQUFBO0FDaEJOO0FEa0JNO0VBQ0UseURBQUE7QUNoQlI7QURvQkk7RUFDRSxRQUFBO0FDbEJOO0FEb0JNO0VBQ0UsMkRBQUE7QUNsQlI7QURzQkk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUNwQk47QURzQk07RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FDcEJSO0FEdUJNO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNyQlI7QUR3Qk07RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUN0QlI7QUQ0QkE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnRUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQ3pCRjtBRDJCRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ3pCSjtBRDRCRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQzFCSjtBRDhCQTtFQUVJO0lBQ0UsOEJBQUE7SUFDQSxRQUFBO0VDNUJKO0VEOEJJO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsWUFBQTtFQzVCTjtFRDhCTTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUM1QlI7RUQrQk07SUFDRSxXQUFBO0lBQ0EsY0FBQTtJQUNBLGtCQUFBO0lBQ0Esc0JBQUE7SUFDQSxpQkFBQTtFQzdCUjtFRGdDTTtJQUNFLFlBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsY0FBQTtFQzlCUjtFRGtDSTtJQUNFLGtCQUFBO0lBQ0EsYUFBQTtFQ2hDTjs7RURxQ0E7SUFDRSxnQkFBQTtJQUNBLDZCQUFBO0VDbENGO0VEb0NFO0lBQ0Usc0JBQUE7SUFDQSxhQUFBO0VDbENKO0VEb0NJO0lBQ0UsV0FBQTtJQUNBLHNCQUFBO0lBQ0EsOEJBQUE7SUFDQSxRQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0lBQ0EsK0RBQUE7SUFDQSxzQkFBQTtJQUNBLG1DQUFBO0VDbENOO0VEb0NNOztJQUVFLFdBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VDbENSO0VEc0NJO0lBQ0UsYUFBQTtFQ3BDTjs7RUR5Q0E7SUFDRSxXQUFBO0lBQ0EsZUFBQTtFQ3RDRjtFRHdDRTtJQUNFLFNBQUE7SUFDQSxnQkFBQTtFQ3RDSjtFRHlDRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQ3ZDSjtFRDBDRTtJQUNFLHNCQUFBO0lBQ0EsVUFBQTtFQ3hDSjtFRDBDSTtJQUNFLFlBQUE7SUFDQSxVQUFBO0VDeENOO0VEMkNJO0lBQ0UsWUFBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtFQ3pDTjtFRDJDTTtJQUNFLGdCQUFBO0lBQ0EscUJBQUE7RUN6Q1I7RUQ0Q007SUFDRSxXQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQkFBQTtFQzFDUjtFRDZDTTtJQUNFLHNCQUFBO0VDM0NSOztFRGlEQTtJQUNFLGdCQUFBO0lBQ0EsZ0VBQUE7SUFDQSxtQ0FBQTtJQUNBLDBCQUFBO0lBQ0EsY0FBQTtFQzlDRjtFRGdERTtJQUNFLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQzlDSjtFRGlERTtJQUNFLFlBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQy9DSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHJvdy1nYXA6IDFlbTtcclxuXHJcbiAgICAgIGgxIHtcclxuICAgICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiA0LjVlbTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdmVyeWRhcmt2aW9sZXQpO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyLjVjbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgd2lkdGg6IDUyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmtncmF5KTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMC41ZW0gMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgcmlnaHQ6IC0xMjBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiN1cmwtY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiA4ZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLmlucHV0LWJveCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGdhcDogMS41ZW07XHJcbiAgICAgIHBhZGRpbmc6IDNlbTtcclxuICAgICAgbWFyZ2luLXRvcDogLTgwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9iZy1zaG9ydGVuLWRlc2t0b3Auc3ZnKSBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmt2aW9sZXQpO1xyXG5cclxuICAgICAgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDFlbSAxLjVlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS12ZXJ5ZGFya3Zpb2xldCk7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAyMTBweDtcclxuICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3Qge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuI2FkdmFuY2VkLXN0YXRpc3RpY3MtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAyZW07XHJcblxyXG4gIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogM2VtIDAgMC40ZW0gMDtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tcHJldmlldyB7XHJcbiAgICB3aWR0aDogNTMwcHg7XHJcbiAgICBjb2xvcjogdmFyKC0tZGFya2dyYXkpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICAuc3RhdGlzdGljcy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBnYXA6IDFlbTtcclxuICAgIG1hcmdpbi10b3A6IDZlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAubGluZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN5YW4pO1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVlbTtcclxuICAgIH1cclxuXHJcbiAgICAucmVjb2duaXRpb24ge1xyXG4gICAgICAuaW1nLWJveCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb24tYnJhbmQtcmVjb2duaXRpb24uc3ZnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kZXRhaWxlZC1yZWNvcmRzIHtcclxuICAgICAgdG9wOiAzZW07XHJcblxyXG4gICAgICAuaW1nLWJveCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb24tZGV0YWlsZWQtcmVjb3Jkcy5zdmcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmN1c3RvbWl6YWJsZSB7XHJcbiAgICAgIHRvcDogNmVtO1xyXG5cclxuICAgICAgLmltZy1ib3gge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29uLWZ1bGx5LWN1c3RvbWl6YWJsZS5zdmcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtc3RhdGlzdGljcyB7XHJcbiAgICAgIHdpZHRoOiAzNzBweDtcclxuICAgICAgaGVpZ2h0OiAyNjBweDtcclxuICAgICAgcGFkZGluZzogMmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgIG1hcmdpbjogMmVtIDAgMC44ZW0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrZ3JheSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pbWctYm94IHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya3Zpb2xldCk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTUwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiNib29zdC15b3VyLWxpbmtzLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMTRlbTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWFnZXMvYmctc2hvcnRlbi1kZXNrdG9wLnN2Zykgbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya3Zpb2xldCk7XHJcbiAgcGFkZGluZzogM2VtIDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBwYWRkaW5nOiAwLjVlbSAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgI21haW4ge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgICAgZ2FwOiAzZW07XHJcblxyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHJvdy1nYXA6IDJlbTtcclxuXHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICBmb250LXNpemU6IDIuM2VtO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMWNtO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWRhcmtncmF5KTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuOGVtIDA7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICByaWdodDogLTIwMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAjdXJsLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMGVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XHJcblxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAuaW5wdXQtYm94IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBnYXA6IDFlbTtcclxuICAgICAgICBwYWRkaW5nOiAxLjRlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtODVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWFnZXMvYmctc2hvcnRlbi1tb2JpbGUuc3ZnKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrdmlvbGV0KTtcclxuXHJcbiAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMC42ZW0gMWVtO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmxpc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICNhZHZhbmNlZC1zdGF0aXN0aWNzLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDJlbTtcclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIH1cclxuXHJcbiAgICAuc2VjdGlvbi1wcmV2aWV3IHtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnN0YXRpc3RpY3MtY29udGFpbmVyIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgZ2FwOiAyLjVlbTtcclxuXHJcbiAgICAgIC5saW5lIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQtc3RhdGlzdGljcyB7XHJcbiAgICAgICAgd2lkdGg6IDMzMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEuNWVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgIG1hcmdpbjogMmVtIDAgMC44ZW0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuODVlbTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrZ3JheSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW1nLWJveCB7XHJcbiAgICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDUwcHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgI2Jvb3N0LXlvdXItbGlua3MtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDEwZW07XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWFnZXMvYmctc2hvcnRlbi1kZXNrdG9wLnN2Zykgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya3Zpb2xldCk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMzAwJTtcclxuICAgIHBhZGRpbmc6IDZlbSAwO1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgICBwYWRkaW5nOiAwLjhlbSAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIjbWFpbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4jbWFpbiAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuI21haW4gLmNvbnRhaW5lciAuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHJvdy1nYXA6IDFlbTtcbn1cbiNtYWluIC5jb250YWluZXIgLmNvbnRlbnQgaDEge1xuICB3aWR0aDogNjAwcHg7XG4gIGZvbnQtc2l6ZTogNC41ZW07XG4gIGNvbG9yOiB2YXIoLS12ZXJ5ZGFya3Zpb2xldCk7XG4gIGxpbmUtaGVpZ2h0OiAyLjVjbTtcbn1cbiNtYWluIC5jb250YWluZXIgLmNvbnRlbnQgcCB7XG4gIHdpZHRoOiA1MjBweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgY29sb3I6IHZhcigtLWRhcmtncmF5KTtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG59XG4jbWFpbiAuY29udGFpbmVyIC5jb250ZW50IGJ1dHRvbiB7XG4gIHdpZHRoOiAxNjBweDtcbiAgcGFkZGluZzogMC41ZW0gMDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuI21haW4gLmNvbnRhaW5lciBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAtMTIwcHg7XG59XG5cbiN1cmwtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogOGVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5KTtcbn1cbiN1cmwtY29udGFpbmVyIC5jb250YWluZXIge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuI3VybC1jb250YWluZXIgLmNvbnRhaW5lciAuaW5wdXQtYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxLjVlbTtcbiAgcGFkZGluZzogM2VtO1xuICBtYXJnaW4tdG9wOiAtODBweDtcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL2JnLXNob3J0ZW4tZGVza3RvcC5zdmcpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya3Zpb2xldCk7XG59XG4jdXJsLWNvbnRhaW5lciAuY29udGFpbmVyIC5pbnB1dC1ib3ggaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMWVtIDEuNWVtO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgY29sb3I6IHZhcigtLXZlcnlkYXJrdmlvbGV0KTtcbiAgYm9yZGVyOiBub25lO1xufVxuI3VybC1jb250YWluZXIgLmNvbnRhaW5lciAuaW5wdXQtYm94IGJ1dHRvbiB7XG4gIHdpZHRoOiAyMTBweDtcbiAgcGFkZGluZzogMWVtO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG4jdXJsLWNvbnRhaW5lciAuY29udGFpbmVyIC5saXN0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2FkdmFuY2VkLXN0YXRpc3RpY3MtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDJlbTtcbn1cbiNhZHZhbmNlZC1zdGF0aXN0aWNzLWNvbnRhaW5lciBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAzZW0gMCAwLjRlbSAwO1xuICBmb250LXNpemU6IDJlbTtcbn1cbiNhZHZhbmNlZC1zdGF0aXN0aWNzLWNvbnRhaW5lciAuc2VjdGlvbi1wcmV2aWV3IHtcbiAgd2lkdGg6IDUzMHB4O1xuICBjb2xvcjogdmFyKC0tZGFya2dyYXkpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuI2FkdmFuY2VkLXN0YXRpc3RpY3MtY29udGFpbmVyIC5zdGF0aXN0aWNzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC1ncm93OiAxO1xuICBnYXA6IDFlbTtcbiAgbWFyZ2luLXRvcDogNmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jYWR2YW5jZWQtc3RhdGlzdGljcy1jb250YWluZXIgLnN0YXRpc3RpY3MtY29udGFpbmVyIC5saW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3lhbik7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLXRvcDogNWVtO1xufVxuI2FkdmFuY2VkLXN0YXRpc3RpY3MtY29udGFpbmVyIC5zdGF0aXN0aWNzLWNvbnRhaW5lciAucmVjb2duaXRpb24gLmltZy1ib3gge1xuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbi1icmFuZC1yZWNvZ25pdGlvbi5zdmcpO1xufVxuI2FkdmFuY2VkLXN0YXRpc3RpY3MtY29udGFpbmVyIC5zdGF0aXN0aWNzLWNvbnRhaW5lciAuZGV0YWlsZWQtcmVjb3JkcyB7XG4gIHRvcDogM2VtO1xufVxuI2FkdmFuY2VkLXN0YXRpc3RpY3MtY29udGFpbmVyIC5zdGF0aXN0aWNzLWNvbnRhaW5lciAuZGV0YWlsZWQtcmVjb3JkcyAuaW1nLWJveCB7XG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9pY29uLWRldGFpbGVkLXJlY29yZHMuc3ZnKTtcbn1cbiNhZHZhbmNlZC1zdGF0aXN0aWNzLWNvbnRhaW5lciAuc3RhdGlzdGljcy1jb250YWluZXIgLmN1c3RvbWl6YWJsZSB7XG4gIHRvcDogNmVtO1xufVxuI2FkdmFuY2VkLXN0YXRpc3RpY3MtY29udGFpbmVyIC5zdGF0aXN0aWNzLWNvbnRhaW5lciAuY3VzdG9taXphYmxlIC5pbWctYm94IHtcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL2ljb24tZnVsbHktY3VzdG9taXphYmxlLnN2Zyk7XG59XG4jYWR2YW5jZWQtc3RhdGlzdGljcy1jb250YWluZXIgLnN0YXRpc3RpY3MtY29udGFpbmVyIC5jYXJkLXN0YXRpc3RpY3Mge1xuICB3aWR0aDogMzcwcHg7XG4gIGhlaWdodDogMjYwcHg7XG4gIHBhZGRpbmc6IDJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jYWR2YW5jZWQtc3RhdGlzdGljcy1jb250YWluZXIgLnN0YXRpc3RpY3MtY29udGFpbmVyIC5jYXJkLXN0YXRpc3RpY3MgaDMge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW46IDJlbSAwIDAuOGVtIDA7XG59XG4jYWR2YW5jZWQtc3RhdGlzdGljcy1jb250YWluZXIgLnN0YXRpc3RpY3MtY29udGFpbmVyIC5jYXJkLXN0YXRpc3RpY3MgcCB7XG4gIHdpZHRoOiAzMDBweDtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIGNvbG9yOiB2YXIoLS1kYXJrZ3JheSk7XG59XG4jYWR2YW5jZWQtc3RhdGlzdGljcy1jb250YWluZXIgLnN0YXRpc3RpY3MtY29udGFpbmVyIC5jYXJkLXN0YXRpc3RpY3MgLmltZy1ib3gge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya3Zpb2xldCk7XG4gIGJhY2tncm91bmQtc2l6ZTogNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNTBweDtcbn1cblxuI2Jvb3N0LXlvdXItbGlua3MtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDE0ZW07XG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9iZy1zaG9ydGVuLWRlc2t0b3Auc3ZnKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmt2aW9sZXQpO1xuICBwYWRkaW5nOiAzZW0gMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4jYm9vc3QteW91ci1saW5rcy1jb250YWluZXIgaDIge1xuICBmb250LXNpemU6IDJlbTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cbiNib29zdC15b3VyLWxpbmtzLWNvbnRhaW5lciBidXR0b24ge1xuICB3aWR0aDogMTYwcHg7XG4gIHBhZGRpbmc6IDAuNWVtIDA7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgI21haW4gLmNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIGdhcDogM2VtO1xuICB9XG4gICNtYWluIC5jb250YWluZXIgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICByb3ctZ2FwOiAyZW07XG4gIH1cbiAgI21haW4gLmNvbnRhaW5lciAuY29udGVudCBoMSB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgZm9udC1zaXplOiAyLjNlbTtcbiAgICBsaW5lLWhlaWdodDogMS4xY207XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gICNtYWluIC5jb250YWluZXIgLmNvbnRlbnQgcCB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrZ3JheSk7XG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIH1cbiAgI21haW4gLmNvbnRhaW5lciAuY29udGVudCBidXR0b24ge1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBwYWRkaW5nOiAwLjhlbSAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgI21haW4gLmNvbnRhaW5lciBpbWcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogLTIwMHB4O1xuICB9XG5cbiAgI3VybC1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDEwZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XG4gIH1cbiAgI3VybC1jb250YWluZXIgLmNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gICN1cmwtY29udGFpbmVyIC5jb250YWluZXIgLmlucHV0LWJveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiAxZW07XG4gICAgcGFkZGluZzogMS40ZW07XG4gICAgbWFyZ2luLXRvcDogLTg1cHg7XG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL2JnLXNob3J0ZW4tbW9iaWxlLnN2Zykgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya3Zpb2xldCk7XG4gIH1cbiAgI3VybC1jb250YWluZXIgLmNvbnRhaW5lciAuaW5wdXQtYm94IGlucHV0LFxuI3VybC1jb250YWluZXIgLmNvbnRhaW5lciAuaW5wdXQtYm94IGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMC42ZW0gMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgfVxuICAjdXJsLWNvbnRhaW5lciAuY29udGFpbmVyIC5saXN0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgI2FkdmFuY2VkLXN0YXRpc3RpY3MtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAyZW07XG4gIH1cbiAgI2FkdmFuY2VkLXN0YXRpc3RpY3MtY29udGFpbmVyIGgyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgfVxuICAjYWR2YW5jZWQtc3RhdGlzdGljcy1jb250YWluZXIgLnNlY3Rpb24tcHJldmlldyB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgfVxuICAjYWR2YW5jZWQtc3RhdGlzdGljcy1jb250YWluZXIgLnN0YXRpc3RpY3MtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMi41ZW07XG4gIH1cbiAgI2FkdmFuY2VkLXN0YXRpc3RpY3MtY29udGFpbmVyIC5zdGF0aXN0aWNzLWNvbnRhaW5lciAubGluZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA1cHg7XG4gIH1cbiAgI2FkdmFuY2VkLXN0YXRpc3RpY3MtY29udGFpbmVyIC5zdGF0aXN0aWNzLWNvbnRhaW5lciAuY2FyZC1zdGF0aXN0aWNzIHtcbiAgICB3aWR0aDogMzMwcHg7XG4gICAgcGFkZGluZzogMS41ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gICNhZHZhbmNlZC1zdGF0aXN0aWNzLWNvbnRhaW5lciAuc3RhdGlzdGljcy1jb250YWluZXIgLmNhcmQtc3RhdGlzdGljcyBoMyB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBtYXJnaW46IDJlbSAwIDAuOGVtIDA7XG4gIH1cbiAgI2FkdmFuY2VkLXN0YXRpc3RpY3MtY29udGFpbmVyIC5zdGF0aXN0aWNzLWNvbnRhaW5lciAuY2FyZC1zdGF0aXN0aWNzIHAge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMC44NWVtO1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrZ3JheSk7XG4gIH1cbiAgI2FkdmFuY2VkLXN0YXRpc3RpY3MtY29udGFpbmVyIC5zdGF0aXN0aWNzLWNvbnRhaW5lciAuY2FyZC1zdGF0aXN0aWNzIC5pbWctYm94IHtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDUwcHgpO1xuICB9XG5cbiAgI2Jvb3N0LXlvdXItbGlua3MtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMGVtO1xuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9iZy1zaG9ydGVuLWRlc2t0b3Auc3ZnKSBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya3Zpb2xldCk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDMwMCU7XG4gICAgcGFkZGluZzogNmVtIDA7XG4gIH1cbiAgI2Jvb3N0LXlvdXItbGlua3MtY29udGFpbmVyIGgyIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICB9XG4gICNib29zdC15b3VyLWxpbmtzLWNvbnRhaW5lciBidXR0b24ge1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBwYWRkaW5nOiAwLjhlbSAwO1xuICB9XG59Il19 */";

    /***/
  },

  /***/"./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/
  /*! exports provided: HomeComponent */
  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }
      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return HomeComponent;
    }();
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./home.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./home.component.scss */"./src/app/components/home/home.component.scss"))["default"]]
    })], HomeComponent);

    /***/
  },

  /***/"./src/app/components/shortening-url/shortening-url.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/components/shortening-url/shortening-url.component.scss ***!
    \*************************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsShorteningUrlShorteningUrlComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcnRlbmluZy11cmwvc2hvcnRlbmluZy11cmwuY29tcG9uZW50LnNjc3MifQ== */";

    /***/
  },

  /***/"./src/app/components/shortening-url/shortening-url.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/shortening-url/shortening-url.component.ts ***!
    \***********************************************************************/
  /*! exports provided: ShorteningUrlComponent */
  /***/
  function srcAppComponentsShorteningUrlShorteningUrlComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ShorteningUrlComponent", function () {
      return ShorteningUrlComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var ShorteningUrlComponent = /*#__PURE__*/function () {
      function ShorteningUrlComponent() {
        _classCallCheck(this, ShorteningUrlComponent);
      }
      _createClass(ShorteningUrlComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return ShorteningUrlComponent;
    }();
    ShorteningUrlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shortening-url',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./shortening-url.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/shortening-url/shortening-url.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./shortening-url.component.scss */"./src/app/components/shortening-url/shortening-url.component.scss"))["default"]]
    })], ShorteningUrlComponent);

    /***/
  },

  /***/"./src/environments/environment.ts":
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
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    // This file can be replaced during build by using the `fileReplacements` array.
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

  /***/"./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/platform-browser-dynamic */"./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app/app.module */"./src/app/app.module.ts");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./environments/environment */"./src/environments/environment.ts");
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });

    /***/
  },

  /***/0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__( /*! C:\ANGULAR\url-shortening\src\main.ts */"./src/main.ts");

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map