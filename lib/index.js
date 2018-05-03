/*!
 * lite-vue v1.0.0 (https://github.com/zhyjor/lite-vue#readme)
 * Copyright 2018, zhyjor
 * ISC license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["easyDialog"] = factory();
	else
		root["easyDialog"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * 订阅者
 */

class Dep {
    constructor() {
        // 用来存放watcher对象的数组
        this.subs = [];
    }

    // subs中添加watcher对象
    addSubs(sub) {
        console.log(this.subs.length);
        this.subs.push(sub);
    }

    // 通知所有的watcher对象更新视图
    notify() {
        this.subs.forEach(sub => {
            sub.update();
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Dep;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Watcher__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Dep__ = __webpack_require__(0);



class Vue {
    constructor(options) {
        this._data = options.data;
        observer(this._data);
        new __WEBPACK_IMPORTED_MODULE_0__Watcher__["a" /* default */]();
        console.log('render~', this._data.test);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Vue;


function observer(value) {
    if (!value || typeof value !== 'object') {
        return;
    }
    Object.keys(value).forEach(key => {
        defineReactive(value, key, value[key]);
    });
}

function defineReactive(obj, key, val) {
    const dep = new __WEBPACK_IMPORTED_MODULE_1__Dep__["a" /* default */]();

    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            dep.addSubs(__WEBPACK_IMPORTED_MODULE_1__Dep__["a" /* default */].target);
            return val;
        },
        set: function reactiveSetter(newVal) {
            if (val === newVal) {
                return;
            }
            dep.notify();
        }
    });
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_Dep__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_Vue__ = __webpack_require__(1);



let o = new __WEBPACK_IMPORTED_MODULE_1__src_Vue__["a" /* default */]({
    data: {
        test: 'I am test'
    }
});

o._data.test = 'hello test1';
o._data.test = 'hello test2';
o._data.test = 'hello test3';
o._data.test = 'hello test4';
o._data.test = 'hello test5';
o._data.test = 'hello test6';

__WEBPACK_IMPORTED_MODULE_0__src_Dep__["a" /* default */].target = null;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dep__ = __webpack_require__(0);


class Watcher {
    constructor() {
        __WEBPACK_IMPORTED_MODULE_0__Dep__["a" /* default */].target = this;
    }

    update() {
        console.log('视图更新了');
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Watcher;


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map