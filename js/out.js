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

eval("document.addEventListener(\"DOMContentLoaded\", function() {\r\n\r\n    // add price and number of chosen product to basket\r\n    const btnBuyItem = document.querySelectorAll('.buyItem');\r\n    const basket = document.querySelector('.basket span');\r\n    const mobileBasket = document.querySelector('.basket p');\r\n    let totalPrice = 0;\r\n    let itemCounter = 0;\r\n\r\n    for (let i=0; i<btnBuyItem.length; i++) {\r\n        btnBuyItem[i].addEventListener('click', function(e) {\r\n            e.preventDefault();\r\n            let span = this.parentNode.firstChild.nextElementSibling;\r\n            let price = Number(span.dataset.price);\r\n            totalPrice += price;\r\n            itemCounter++;\r\n            basket.innerText = totalPrice.toFixed(2)+\" zł, prod. ( \"+itemCounter+\" )\";\r\n            mobileBasket.innerText = \"( \"+itemCounter+\" )\";\r\n        })\r\n    }\r\n\r\n    //mobile menu\r\n    const hamburger = document.querySelector('.hamburger');\r\n    const nav = document.querySelector('nav');\r\n\r\n    hamburger.addEventListener('click', function(e) {\r\n        e.preventDefault();\r\n        nav.classList.toggle('showMobileMenu');\r\n    })\r\n\r\n    //searchBox\r\n    const search = document.querySelector('.search');\r\n    const magnifier = search.querySelector('div.magnifier');\r\n    const searchBox = search.querySelector('input');\r\n\r\n    document.querySelector('div.fa').addEventListener('click', function(e) {\r\n        e.preventDefault();\r\n        magnifier.classList.toggle('hideSearchBox');\r\n        searchBox.classList.toggle('hideSearchBox');\r\n    })\r\n\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxDQUFDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAvLyBhZGQgcHJpY2UgYW5kIG51bWJlciBvZiBjaG9zZW4gcHJvZHVjdCB0byBiYXNrZXRcclxuICAgIGNvbnN0IGJ0bkJ1eUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV5SXRlbScpO1xyXG4gICAgY29uc3QgYmFza2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhc2tldCBzcGFuJyk7XHJcbiAgICBjb25zdCBtb2JpbGVCYXNrZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0IHAnKTtcclxuICAgIGxldCB0b3RhbFByaWNlID0gMDtcclxuICAgIGxldCBpdGVtQ291bnRlciA9IDA7XHJcblxyXG4gICAgZm9yIChsZXQgaT0wOyBpPGJ0bkJ1eUl0ZW0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBidG5CdXlJdGVtW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGxldCBzcGFuID0gdGhpcy5wYXJlbnROb2RlLmZpcnN0Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICBsZXQgcHJpY2UgPSBOdW1iZXIoc3Bhbi5kYXRhc2V0LnByaWNlKTtcclxuICAgICAgICAgICAgdG90YWxQcmljZSArPSBwcmljZTtcclxuICAgICAgICAgICAgaXRlbUNvdW50ZXIrKztcclxuICAgICAgICAgICAgYmFza2V0LmlubmVyVGV4dCA9IHRvdGFsUHJpY2UudG9GaXhlZCgyKStcIiB6xYIsIHByb2QuICggXCIraXRlbUNvdW50ZXIrXCIgKVwiO1xyXG4gICAgICAgICAgICBtb2JpbGVCYXNrZXQuaW5uZXJUZXh0ID0gXCIoIFwiK2l0ZW1Db3VudGVyK1wiIClcIjtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vbW9iaWxlIG1lbnVcclxuICAgIGNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXInKTtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xyXG5cclxuICAgIGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3dNb2JpbGVNZW51Jyk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vc2VhcmNoQm94XHJcbiAgICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoJyk7XHJcbiAgICBjb25zdCBtYWduaWZpZXIgPSBzZWFyY2gucXVlcnlTZWxlY3RvcignZGl2Lm1hZ25pZmllcicpO1xyXG4gICAgY29uc3Qgc2VhcmNoQm94ID0gc2VhcmNoLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmZhJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIG1hZ25pZmllci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlU2VhcmNoQm94Jyk7XHJcbiAgICAgICAgc2VhcmNoQm94LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGVTZWFyY2hCb3gnKTtcclxuICAgIH0pXHJcblxyXG59KTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);