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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
        this.deps = [];
    }

    depend() {
        if (Dep.target && this.deps.indexOf(Dep.target) === -1) {
            this.deps.push(Dep.target);
        }
    }

    // 通知所有的watcher对象更新视图
    notify() {
        this.deps.forEach(dep => {
            dep();
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Dep;


Dep.target = null;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dep__ = __webpack_require__(0);


class Observable {
    constructor(obj) {
        return this.walk(obj);
    }

    walk(obj) {
        const keys = Object.keys(obj);
        keys.forEach(key => {
            this.defineReactive(obj, key, obj[key]);
        });
        return obj;
    }

    defineReactive(obj, key, val) {
        const dep = new __WEBPACK_IMPORTED_MODULE_0__Dep__["a" /* default */]();
        Object.defineProperty(obj, key, {
            get() {
                dep.depend();
                return val;
            },
            set(newVal) {
                val = newVal;
                dep.notify();
            }
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Observable;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dep__ = __webpack_require__(0);


class Watcher {
    constructor(obj, key, cb, onComputedUpdate) {
        this.obj = obj;
        this.key = key;
        this.cb = cb;
        this.onComputedUpdate = onComputedUpdate;
        return this.defineComputed();
    }

    defineComputed() {
        const self = this;
        const onDepUpdated = () => {
            const val = self.cb();
            this.onComputedUpdate(val);
        };
        Object.defineProperty(self.obj, self.key, {
            get() {
                __WEBPACK_IMPORTED_MODULE_0__Dep__["a" /* default */].target = onDepUpdated;
                const val = self.cb();
                __WEBPACK_IMPORTED_MODULE_0__Dep__["a" /* default */].target = null;
                return val;
            },
            set() {
                console.error('计算属性无法被赋值');
            }
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Watcher;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_Watcher__ = __webpack_require__(2);



const hero = new __WEBPACK_IMPORTED_MODULE_0__src_Observable__["a" /* default */]({
    health: 3000,
    IQ: 150
});

new __WEBPACK_IMPORTED_MODULE_1__src_Watcher__["a" /* default */](hero, 'type', () => {
    return hero.health > 4000 ? '坦克' : '脆皮';
}, val => {
    console.log(`我的类型是${val}`);
});

// console.log(`英雄初始类型：${hero.type}`)

hero.health = 5000;

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map