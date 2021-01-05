var serviceWorkerOption = {
  "assets": [
    "/app.css",
    "/app.js",
    "/app1.js",
    "/runtime.js"
  ]
};
        
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/service-worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/service-worker.js":
/*!*************************************!*\
  !*** ./assets/js/service-worker.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var cacheName = "pwa-lmacode-dev";
var appShellFiles = ['/img/icon_16x16.png', '/img/icon_144x144.png', '/img/icon_512x512.png', '/build/app.js', '/build/app1.js'];
self.addEventListener('install', function (e) {
  console.log('[Service Worker] Install');
  e.waitUntil(caches.open(cacheName).then(function (cache) {
    console.log('[Service Worker] Caching all: app shell and content');
    console.log(appShellFiles);
    return cache.addAll(appShellFiles);
  }));
});
self.addEventListener('fetch', function (e) {
  e.respondWith(caches.match(e.request).then(function (r) {
    console.log('[Service Worker] Fetching resource: ' + e.request.url);
    return r || fetch(e.request).then(function (response) {
      return caches.open(cacheName).then(function (cache) {
        console.log('[Service Worker] Caching new resource: ' + e.request.url);

        if (e.request.url.indexOf('http') === 0) {
          cache.put(e.request, response.clone());
        }

        return response;
      });
    });
  }));
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NlcnZpY2Utd29ya2VyLmpzIl0sIm5hbWVzIjpbImNhY2hlTmFtZSIsImFwcFNoZWxsRmlsZXMiLCJzZWxmIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb25zb2xlIiwibG9nIiwid2FpdFVudGlsIiwiY2FjaGVzIiwib3BlbiIsInRoZW4iLCJjYWNoZSIsImFkZEFsbCIsInJlc3BvbmRXaXRoIiwibWF0Y2giLCJyZXF1ZXN0IiwiciIsInVybCIsImZldGNoIiwicmVzcG9uc2UiLCJpbmRleE9mIiwicHV0IiwiY2xvbmUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFJQSxTQUFTLEdBQUcsaUJBQWhCO0FBQ0EsSUFBS0MsYUFBYSxHQUFHLENBQ2pCLHFCQURpQixFQUVqQix1QkFGaUIsRUFHakIsdUJBSGlCLEVBSWpCLGVBSmlCLEVBS2pCLGdCQUxpQixDQUFyQjtBQVFBQyxJQUFJLENBQUNDLGdCQUFMLENBQXNCLFNBQXRCLEVBQWlDLFVBQUNDLENBQUQsRUFBTztBQUNwQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVksMEJBQVo7QUFDQUYsR0FBQyxDQUFDRyxTQUFGLENBQ0lDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZVCxTQUFaLEVBQXVCVSxJQUF2QixDQUE0QixVQUFDQyxLQUFELEVBQVc7QUFDbkNOLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHFEQUFaO0FBQ0FELFdBQU8sQ0FBQ0MsR0FBUixDQUFZTCxhQUFaO0FBQ0EsV0FBT1UsS0FBSyxDQUFDQyxNQUFOLENBQWFYLGFBQWIsQ0FBUDtBQUNILEdBSkQsQ0FESjtBQU9ILENBVEQ7QUFXQUMsSUFBSSxDQUFDQyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixVQUFDQyxDQUFELEVBQU87QUFDbENBLEdBQUMsQ0FBQ1MsV0FBRixDQUNJTCxNQUFNLENBQUNNLEtBQVAsQ0FBYVYsQ0FBQyxDQUFDVyxPQUFmLEVBQXdCTCxJQUF4QixDQUE2QixVQUFDTSxDQUFELEVBQU87QUFDaENYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHlDQUF1Q0YsQ0FBQyxDQUFDVyxPQUFGLENBQVVFLEdBQTdEO0FBQ0EsV0FBT0QsQ0FBQyxJQUFJRSxLQUFLLENBQUNkLENBQUMsQ0FBQ1csT0FBSCxDQUFMLENBQWlCTCxJQUFqQixDQUFzQixVQUFDUyxRQUFELEVBQWM7QUFDNUMsYUFBT1gsTUFBTSxDQUFDQyxJQUFQLENBQVlULFNBQVosRUFBdUJVLElBQXZCLENBQTRCLFVBQUNDLEtBQUQsRUFBVztBQUMxQ04sZUFBTyxDQUFDQyxHQUFSLENBQVksNENBQTBDRixDQUFDLENBQUNXLE9BQUYsQ0FBVUUsR0FBaEU7O0FBQ0EsWUFBSWIsQ0FBQyxDQUFDVyxPQUFGLENBQVVFLEdBQVYsQ0FBY0csT0FBZCxDQUFzQixNQUF0QixNQUFrQyxDQUF0QyxFQUEwQztBQUN0Q1QsZUFBSyxDQUFDVSxHQUFOLENBQVVqQixDQUFDLENBQUNXLE9BQVosRUFBcUJJLFFBQVEsQ0FBQ0csS0FBVCxFQUFyQjtBQUNIOztBQUNELGVBQU9ILFFBQVA7QUFDSCxPQU5NLENBQVA7QUFPSCxLQVJXLENBQVo7QUFTSCxHQVhELENBREo7QUFjSCxDQWZELEUiLCJmaWxlIjoiLi4vc3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvanMvc2VydmljZS13b3JrZXIuanNcIik7XG4iLCJsZXQgY2FjaGVOYW1lID0gXCJwd2EtbG1hY29kZS1kZXZcIlxubGV0ICBhcHBTaGVsbEZpbGVzID0gW1xuICAgICcvaW1nL2ljb25fMTZ4MTYucG5nJyxcbiAgICAnL2ltZy9pY29uXzE0NHgxNDQucG5nJyxcbiAgICAnL2ltZy9pY29uXzUxMng1MTIucG5nJyxcbiAgICAnL2J1aWxkL2FwcC5qcycsXG4gICAgJy9idWlsZC9hcHAxLmpzJyxcbl1cblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJywgKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZygnW1NlcnZpY2UgV29ya2VyXSBJbnN0YWxsJyk7XG4gICAgZS53YWl0VW50aWwoXG4gICAgICAgIGNhY2hlcy5vcGVuKGNhY2hlTmFtZSkudGhlbigoY2FjaGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbU2VydmljZSBXb3JrZXJdIENhY2hpbmcgYWxsOiBhcHAgc2hlbGwgYW5kIGNvbnRlbnQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFwcFNoZWxsRmlsZXMpXG4gICAgICAgICAgICByZXR1cm4gY2FjaGUuYWRkQWxsKGFwcFNoZWxsRmlsZXMpO1xuICAgICAgICB9KVxuICAgICk7XG59KTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdmZXRjaCcsIChlKSA9PiB7XG4gICAgZS5yZXNwb25kV2l0aChcbiAgICAgICAgY2FjaGVzLm1hdGNoKGUucmVxdWVzdCkudGhlbigocikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tTZXJ2aWNlIFdvcmtlcl0gRmV0Y2hpbmcgcmVzb3VyY2U6ICcrZS5yZXF1ZXN0LnVybCk7XG4gICAgICAgICAgICByZXR1cm4gciB8fCBmZXRjaChlLnJlcXVlc3QpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhY2hlcy5vcGVuKGNhY2hlTmFtZSkudGhlbigoY2FjaGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tTZXJ2aWNlIFdvcmtlcl0gQ2FjaGluZyBuZXcgcmVzb3VyY2U6ICcrZS5yZXF1ZXN0LnVybCk7XG4gICAgICAgICAgICAgICAgICAgIGlmKChlLnJlcXVlc3QudXJsLmluZGV4T2YoJ2h0dHAnKSA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlLnB1dChlLnJlcXVlc3QsIHJlc3BvbnNlLmNsb25lKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICk7XG59KTsiXSwic291cmNlUm9vdCI6IiJ9