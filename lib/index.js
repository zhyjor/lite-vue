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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * 将一个对象的某个属性转换为可观测属性
 * @param {Object} obj 对象
 * @param {String} key 对象的key
 * @param {Any} val 对应key的value
 * @returns {*}
 */
function defineReactive(obj, key, val) {
    Object.defineProperty(obj, key, {
        get() {
            // 触发getter
            console.log(`我的${key}属性被读取了`);
            return val;
        },
        set(newVal) {
            // 触发setter
            console.log(`我的${key}属性被修改了`);
            val = newVal;
        }
    });
}

/**
 * 把一个对象的每一项都转化为可观测对象
 * @param obj 对象
 */
function observable(obj) {
    Object.keys(obj).forEach(key => {
        defineReactive(obj, key, obj[key]);
    });
}

// 计算属性

/**
 * 计算属性的值被更新
 * @param val
 */
function onComputedUpdate(val) {
    console.log(`我的类型是${val}`);
}

function watcher(obj, key, cb) {
    Object.defineProperty(obj, key, {
        get() {
            const val = cb();
            onComputedUpdate(val);
            return val;
        },
        set() {
            console.log('计算属性无法被赋值！');
        }
    });
}

const hero = {
    health: 3000,
    IQ: 150
};

observable(hero);
watcher(hero, 'type', () => {
    return hero.health > 4000 ? '坦克' : '脆皮';
});

hero.type;

hero.health = 5000;

hero.type;

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map