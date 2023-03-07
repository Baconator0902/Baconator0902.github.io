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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_signuplogintest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/signuplogintest.js */ \"./src/signuplogintest.js\");\n/* harmony import */ var https_www_gstatic_com_firebasejs_9_17_2_firebase_auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js */ \"https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_signuplogintest_js__WEBPACK_IMPORTED_MODULE_0__, https_www_gstatic_com_firebasejs_9_17_2_firebase_auth_js__WEBPACK_IMPORTED_MODULE_1__]);\n([_src_signuplogintest_js__WEBPACK_IMPORTED_MODULE_0__, https_www_gstatic_com_firebasejs_9_17_2_firebase_auth_js__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\r\n\r\n\r\nconsole.log(_src_signuplogintest_js__WEBPACK_IMPORTED_MODULE_0__.firebaseApp);\r\nconsole.log(_src_signuplogintest_js__WEBPACK_IMPORTED_MODULE_0__.auth);\r\n\r\n function signUp(){\r\n    console.log(\"maybe\");\r\n    var email = document.getElementById(\"email\");\r\n    var password = document.getElementById(\"password1\");\r\n    (0,https_www_gstatic_com_firebasejs_9_17_2_firebase_auth_js__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(_src_signuplogintest_js__WEBPACK_IMPORTED_MODULE_0__.auth, email, password).then((userCredential) => {\r\n// Signed in \r\nconst user = userCredential.user;\r\nconsole.log(user);\r\n// ...\r\n})\r\n.catch((error) => {\r\nconst errorCode = error.code;\r\nconst errorMessage = error.message;\r\nprint(errorMessage);\r\n// ..\r\n});\r\n}\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDeUQ7QUFDeUQ7QUFDbEgsWUFBWSxnRUFBVztBQUN2QixZQUFZLHlEQUFJO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdIQUE4QixDQUFDLHlEQUFJO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWNvbmF0b3IwOTAyLmdpdGh1Yi5pby8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnR7ZmlyZWJhc2VBcHAsIGF1dGh9IGZyb20gJy9zcmMvc2lnbnVwbG9naW50ZXN0LmpzJztcclxuaW1wb3J0e2dldEF1dGgsIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZH0gZnJvbSAnaHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vZmlyZWJhc2Vqcy85LjE3LjIvZmlyZWJhc2UtYXV0aC5qcyc7XHJcbmNvbnNvbGUubG9nKGZpcmViYXNlQXBwKTtcclxuY29uc29sZS5sb2coYXV0aCk7XHJcblxyXG4gZnVuY3Rpb24gc2lnblVwKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIm1heWJlXCIpO1xyXG4gICAgdmFyIGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFwiKTtcclxuICAgIHZhciBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmQxXCIpO1xyXG4gICAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZCkudGhlbigodXNlckNyZWRlbnRpYWwpID0+IHtcclxuLy8gU2lnbmVkIGluIFxyXG5jb25zdCB1c2VyID0gdXNlckNyZWRlbnRpYWwudXNlcjtcclxuY29uc29sZS5sb2codXNlcik7XHJcbi8vIC4uLlxyXG59KVxyXG4uY2F0Y2goKGVycm9yKSA9PiB7XHJcbmNvbnN0IGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XHJcbmNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XHJcbnByaW50KGVycm9yTWVzc2FnZSk7XHJcbi8vIC4uXHJcbn0pO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/signuplogintest.js":
/*!********************************!*\
  !*** ./src/signuplogintest.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"firebaseApp\": () => (/* binding */ firebaseApp)\n/* harmony export */ });\n/* harmony import */ var https_www_gstatic_com_firebasejs_9_17_2_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js */ \"https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js\");\n/* harmony import */ var https_www_gstatic_com_firebasejs_9_17_2_firebase_auth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js */ \"https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([https_www_gstatic_com_firebasejs_9_17_2_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__, https_www_gstatic_com_firebasejs_9_17_2_firebase_auth_js__WEBPACK_IMPORTED_MODULE_1__]);\n([https_www_gstatic_com_firebasejs_9_17_2_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__, https_www_gstatic_com_firebasejs_9_17_2_firebase_auth_js__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\r\n\r\n\r\nconst firebaseApp = (0,https_www_gstatic_com_firebasejs_9_17_2_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__.initializeApp)({\r\n    apiKey: \"AIzaSyCLuVhLzDeQnta9lgl0m1yYgowupdwVTJI\",\r\n    authDomain: \"webmaster-2004-901.firebaseapp.com\",\r\n    databaseURL: \"https://webmaster-2004-901-default-rtdb.firebaseio.com\",\r\n    projectId: \"webmaster-2004-901\",\r\n    storageBucket: \"webmaster-2004-901.appspot.com\",\r\n    messagingSenderId: \"1021143887374\",\r\n    appId: \"1:1021143887374:web:6ed7a05e4b879e3e04565f\",\r\n    measurementId: \"G-E24BYQ72TT\"\r\n});\r\nconst auth = (0,https_www_gstatic_com_firebasejs_9_17_2_firebase_auth_js__WEBPACK_IMPORTED_MODULE_1__.getAuth)(firebaseApp);\r\n\r\n /* function signUp(){\r\n    \r\n     var email = document.getElementById(\"email\");\r\n     var password = document.getElementById(\"password1\");\r\n     createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {\r\n // Signed in \r\n const user = userCredential.user;\r\n console.log(user);\r\n // ...\r\n})\r\n.catch((error) => {\r\n const errorCode = error.code;\r\n const errorMessage = error.message;\r\n // ..\r\n});\r\n }\r\n */\r\n\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2lnbnVwbG9naW50ZXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUY7QUFDeUU7QUFDbEs7QUFDTyxvQkFBb0Isc0dBQWE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDTSxhQUFhLGlHQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhY29uYXRvcjA5MDIuZ2l0aHViLmlvLy4vc3JjL3NpZ251cGxvZ2ludGVzdC5qcz9mMDIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHB9IGZyb20gJ2h0dHBzOi8vd3d3LmdzdGF0aWMuY29tL2ZpcmViYXNlanMvOS4xNy4yL2ZpcmViYXNlLWFwcC5qcyc7XHJcbmltcG9ydHtnZXRBdXRoLCBvbkF1dGhTdGF0ZUNoYW5nZWQsIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCwgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmR9IGZyb20gJ2h0dHBzOi8vd3d3LmdzdGF0aWMuY29tL2ZpcmViYXNlanMvOS4xNy4yL2ZpcmViYXNlLWF1dGguanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZpcmViYXNlQXBwID0gaW5pdGlhbGl6ZUFwcCh7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5Q0x1VmhMekRlUW50YTlsZ2wwbTF5WWdvd3VwZHdWVEpJXCIsXHJcbiAgICBhdXRoRG9tYWluOiBcIndlYm1hc3Rlci0yMDA0LTkwMS5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vd2VibWFzdGVyLTIwMDQtOTAxLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcIndlYm1hc3Rlci0yMDA0LTkwMVwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJ3ZWJtYXN0ZXItMjAwNC05MDEuYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjEwMjExNDM4ODczNzRcIixcclxuICAgIGFwcElkOiBcIjE6MTAyMTE0Mzg4NzM3NDp3ZWI6NmVkN2EwNWU0Yjg3OWUzZTA0NTY1ZlwiLFxyXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLUUyNEJZUTcyVFRcIlxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGF1dGggPSBnZXRBdXRoKGZpcmViYXNlQXBwKTtcclxuXHJcbiAvKiBmdW5jdGlvbiBzaWduVXAoKXtcclxuICAgIFxyXG4gICAgIHZhciBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIik7XHJcbiAgICAgdmFyIHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZDFcIik7XHJcbiAgICAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZCkudGhlbigodXNlckNyZWRlbnRpYWwpID0+IHtcclxuIC8vIFNpZ25lZCBpbiBcclxuIGNvbnN0IHVzZXIgPSB1c2VyQ3JlZGVudGlhbC51c2VyO1xyXG4gY29uc29sZS5sb2codXNlcik7XHJcbiAvLyAuLi5cclxufSlcclxuLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gY29uc3QgZXJyb3JDb2RlID0gZXJyb3IuY29kZTtcclxuIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XHJcbiAvLyAuLlxyXG59KTtcclxuIH1cclxuICovXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/signuplogintest.js\n");

/***/ }),

/***/ "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js":
false,

/***/ "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js":
false

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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && !queue.d) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = 1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && (queue.d = 0);
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;