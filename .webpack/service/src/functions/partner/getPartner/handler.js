/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/partner/getPartner/handler.ts":
/*!*****************************************************!*\
  !*** ./src/functions/partner/getPartner/handler.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var $libs_lambda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! $libs/lambda */ \"./src/libs/lambda.ts\");\n/* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! $utils/index */ \"./src/utils/index.ts\");\n\r\n\r\n\r\nconst getPartner = async (event) => {\r\n    const { partnerId } = event.pathParameters;\r\n    return (0,$utils_index__WEBPACK_IMPORTED_MODULE_2__.returnedLambdaResponse)({ hello: partnerId }, 200);\r\n};\r\nconst main = (0,$libs_lambda__WEBPACK_IMPORTED_MODULE_1__.middyfy)(getPartner);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL3BhcnRuZXIvZ2V0UGFydG5lci9oYW5kbGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlbGVzcy1iYWNrLy4vc3JjL2Z1bmN0aW9ucy9wYXJ0bmVyL2dldFBhcnRuZXIvaGFuZGxlci50cz8wY2MyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcclxuaW1wb3J0IHR5cGUgeyBBUElHYXRld2F5UHJveHlFdmVudCwgQVBJR2F0ZXdheVByb3h5UmVzdWx0LCAgfSBmcm9tIFwiYXdzLWxhbWJkYVwiXHJcbmltcG9ydCB7IG1pZGR5ZnkgfSBmcm9tICckbGlicy9sYW1iZGEnO1xyXG5pbXBvcnQgeyBMYW1iZGFSZXNwb25zZSB9IGZyb20gJyR0eXBlcy9pbmRleCc7XHJcbmltcG9ydCB7IHJldHVybmVkTGFtYmRhUmVzcG9uc2UgfSBmcm9tICckdXRpbHMvaW5kZXgnO1xyXG5cclxuY29uc3QgZ2V0UGFydG5lciAgPWFzeW5jIChldmVudDogQVBJR2F0ZXdheVByb3h5RXZlbnQpOiBQcm9taXNlPExhbWJkYVJlc3BvbnNlPiA9PiB7XHJcbiAgY29uc3Qge3BhcnRuZXJJZH0gPSBldmVudC5wYXRoUGFyYW1ldGVyc1xyXG4gIHJldHVybiByZXR1cm5lZExhbWJkYVJlc3BvbnNlKHtoZWxsbzpwYXJ0bmVySWR9LDIwMClcclxuICBcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBtYWluID0gbWlkZHlmeShnZXRQYXJ0bmVyKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/partner/getPartner/handler.ts\n");

/***/ }),

/***/ "./src/libs/lambda.ts":
/*!****************************!*\
  !*** ./src/libs/lambda.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middyfy\": () => (/* binding */ middyfy)\n/* harmony export */ });\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @middy/core */ \"@middy/core\");\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_middy_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @middy/http-json-body-parser */ \"@middy/http-json-body-parser\");\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nconst middyfy = (handler) => {\r\n    return _middy_core__WEBPACK_IMPORTED_MODULE_0___default()(handler).use(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default()());\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9sYW1iZGEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmVsZXNzLWJhY2svLi9zcmMvbGlicy9sYW1iZGEudHM/NmIyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWlkZHkgZnJvbSBcIkBtaWRkeS9jb3JlXCJcclxuaW1wb3J0IG1pZGR5SnNvbkJvZHlQYXJzZXIgZnJvbSBcIkBtaWRkeS9odHRwLWpzb24tYm9keS1wYXJzZXJcIlxyXG5cclxuZXhwb3J0IGNvbnN0IG1pZGR5ZnkgPSAoaGFuZGxlcikgPT4ge1xyXG4gIHJldHVybiBtaWRkeShoYW5kbGVyKS51c2UobWlkZHlKc29uQm9keVBhcnNlcigpKVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/lambda.ts\n");

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"returnedLambdaResponse\": () => (/* binding */ returnedLambdaResponse)\n/* harmony export */ });\nconst returnedLambdaResponse = (body, statusCode) => {\r\n    return {\r\n        headers: {\r\n            'Access-Control-Allow-Origin': '*',\r\n        },\r\n        statusCode: statusCode,\r\n        body: JSON.stringify(body),\r\n    };\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlbGVzcy1iYWNrLy4vc3JjL3V0aWxzL2luZGV4LnRzP2QyNTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGFtYmRhUmVzcG9uc2UgfSBmcm9tICcuLy4uL3R5cGVzL2luZGV4JztcclxuZXhwb3J0IGNvbnN0IHJldHVybmVkTGFtYmRhUmVzcG9uc2U9IChib2R5IDpvYmplY3Qsc3RhdHVzQ29kZSA6bnVtYmVyKSA6IExhbWJkYVJlc3BvbnNlID0+e1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RhdHVzQ29kZTogc3RhdHVzQ29kZSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgICAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/index.ts\n");

/***/ }),

/***/ "@middy/core":
/*!******************************!*\
  !*** external "@middy/core" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@middy/core");

/***/ }),

/***/ "@middy/http-json-body-parser":
/*!***********************************************!*\
  !*** external "@middy/http-json-body-parser" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-json-body-parser");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/partner/getPartner/handler.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;