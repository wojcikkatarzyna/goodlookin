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

eval("document.addEventListener(\"DOMContentLoaded\", function() {\r\n\r\n    // add price and number of chosen product to basket\r\n    const btnBuyItem = document.querySelectorAll('.buyItem');\r\n    const basket = document.querySelector('.fa-shopping-cart').firstChild.nextElementSibling;\r\n    let totalPrice = 0;\r\n    let itemCounter = 0;\r\n\r\n    for (let i=0; i<btnBuyItem.length; i++) {\r\n        btnBuyItem[i].addEventListener('click', function(e) {\r\n            e.preventDefault();\r\n            let span = this.parentNode.firstChild.nextElementSibling;\r\n            let price = Number(span.dataset.price);\r\n            totalPrice += price;\r\n            itemCounter++;\r\n            basket.innerText = totalPrice.toFixed(2)+\" zł, prod. ( \"+itemCounter+\" )\";\r\n        })\r\n    }\r\n\r\n    //mobile menu\r\n    const hamburger = document.querySelector('.hamburger');\r\n    const nav = document.querySelector('nav');\r\n\r\n    hamburger.addEventListener('click', function(e) {\r\n        e.preventDefault();\r\n        nav.classList.toggle('showMobileMenu');\r\n    })\r\n\r\n    //searchBox\r\n    const search = document.querySelector('.search');\r\n    const magnifier = search.querySelector('div.magnifier');\r\n    const searchBox = search.querySelector('input');\r\n\r\n    document.querySelector('div.fa').addEventListener('click', function(e) {\r\n        e.preventDefault();\r\n        magnifier.classList.toggle('hideSearchBox');\r\n        searchBox.classList.toggle('hideSearchBox');\r\n    })\r\n\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixxQkFBcUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIC8vIGFkZCBwcmljZSBhbmQgbnVtYmVyIG9mIGNob3NlbiBwcm9kdWN0IHRvIGJhc2tldFxyXG4gICAgY29uc3QgYnRuQnV5SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXlJdGVtJyk7XHJcbiAgICBjb25zdCBiYXNrZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtc2hvcHBpbmctY2FydCcpLmZpcnN0Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgbGV0IHRvdGFsUHJpY2UgPSAwO1xyXG4gICAgbGV0IGl0ZW1Db3VudGVyID0gMDtcclxuXHJcbiAgICBmb3IgKGxldCBpPTA7IGk8YnRuQnV5SXRlbS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGJ0bkJ1eUl0ZW1baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgbGV0IHNwYW4gPSB0aGlzLnBhcmVudE5vZGUuZmlyc3RDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgIGxldCBwcmljZSA9IE51bWJlcihzcGFuLmRhdGFzZXQucHJpY2UpO1xyXG4gICAgICAgICAgICB0b3RhbFByaWNlICs9IHByaWNlO1xyXG4gICAgICAgICAgICBpdGVtQ291bnRlcisrO1xyXG4gICAgICAgICAgICBiYXNrZXQuaW5uZXJUZXh0ID0gdG90YWxQcmljZS50b0ZpeGVkKDIpK1wiIHrFgiwgcHJvZC4gKCBcIitpdGVtQ291bnRlcitcIiApXCI7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL21vYmlsZSBtZW51XHJcbiAgICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyJyk7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKTtcclxuXHJcbiAgICBoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdzaG93TW9iaWxlTWVudScpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvL3NlYXJjaEJveFxyXG4gICAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaCcpO1xyXG4gICAgY29uc3QgbWFnbmlmaWVyID0gc2VhcmNoLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5tYWduaWZpZXInKTtcclxuICAgIGNvbnN0IHNlYXJjaEJveCA9IHNlYXJjaC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5mYScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBtYWduaWZpZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZVNlYXJjaEJveCcpO1xyXG4gICAgICAgIHNlYXJjaEJveC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlU2VhcmNoQm94Jyk7XHJcbiAgICB9KVxyXG5cclxufSk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);