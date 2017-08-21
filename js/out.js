/******/ (function(modules) { // webpackBootstrap
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

eval("document.addEventListener(\"DOMContentLoaded\", function() {\r\n    const btnBuyItem = document.querySelectorAll('.buyItem');\r\n    const basket = document.querySelector('.fa-shopping-cart').firstChild.nextElementSibling;\r\n    let totalPrice = 0;\r\n    let itemCounter = 0;\r\n\r\n    for (let i=0; i<btnBuyItem.length; i++) {\r\n        btnBuyItem[i].addEventListener('click', function() {\r\n            let span = this.parentNode.firstChild.nextElementSibling;\r\n            let price = Number(span.dataset.price);\r\n            totalPrice += price;\r\n            itemCounter++;\r\n            basket.innerText = totalPrice.toFixed(2)+\"zł, prod.( \"+itemCounter+\" )\";\r\n        })\r\n    }\r\n\r\n  });\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixxQkFBcUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLEdBQUciLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgYnRuQnV5SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXlJdGVtJyk7XHJcbiAgICBjb25zdCBiYXNrZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtc2hvcHBpbmctY2FydCcpLmZpcnN0Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgbGV0IHRvdGFsUHJpY2UgPSAwO1xyXG4gICAgbGV0IGl0ZW1Db3VudGVyID0gMDtcclxuXHJcbiAgICBmb3IgKGxldCBpPTA7IGk8YnRuQnV5SXRlbS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGJ0bkJ1eUl0ZW1baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbGV0IHNwYW4gPSB0aGlzLnBhcmVudE5vZGUuZmlyc3RDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgIGxldCBwcmljZSA9IE51bWJlcihzcGFuLmRhdGFzZXQucHJpY2UpO1xyXG4gICAgICAgICAgICB0b3RhbFByaWNlICs9IHByaWNlO1xyXG4gICAgICAgICAgICBpdGVtQ291bnRlcisrO1xyXG4gICAgICAgICAgICBiYXNrZXQuaW5uZXJUZXh0ID0gdG90YWxQcmljZS50b0ZpeGVkKDIpK1wiesWCLCBwcm9kLiggXCIraXRlbUNvdW50ZXIrXCIgKVwiO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);