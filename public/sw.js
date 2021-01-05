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
var appShellFiles = ['/pwa.html', '/img/icon_16x16.png', '/img/icon_144x144.png', '/img/icon_512x512.png', '/build/app.js'];
self.addEventListener('install', function (e) {
  console.log('[Service Worker] Install');
  e.waitUntil(caches.open(cacheName).then(function (cache) {
    console.log('[Service Worker] Caching all: app shell and content');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NlcnZpY2Utd29ya2VyLmpzIl0sIm5hbWVzIjpbImNhY2hlTmFtZSIsImFwcFNoZWxsRmlsZXMiLCJzZWxmIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb25zb2xlIiwibG9nIiwid2FpdFVudGlsIiwiY2FjaGVzIiwib3BlbiIsInRoZW4iLCJjYWNoZSIsImFkZEFsbCIsInJlc3BvbmRXaXRoIiwibWF0Y2giLCJyZXF1ZXN0IiwiciIsInVybCIsImZldGNoIiwicmVzcG9uc2UiLCJpbmRleE9mIiwicHV0IiwiY2xvbmUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFJQSxTQUFTLEdBQUcsaUJBQWhCO0FBQ0EsSUFBS0MsYUFBYSxHQUFHLENBQ2pCLFdBRGlCLEVBRWpCLHFCQUZpQixFQUdqQix1QkFIaUIsRUFJakIsdUJBSmlCLEVBS2pCLGVBTGlCLENBQXJCO0FBUUFDLElBQUksQ0FBQ0MsZ0JBQUwsQ0FBc0IsU0FBdEIsRUFBaUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3BDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWjtBQUNBRixHQUFDLENBQUNHLFNBQUYsQ0FDSUMsTUFBTSxDQUFDQyxJQUFQLENBQVlULFNBQVosRUFBdUJVLElBQXZCLENBQTRCLFVBQUNDLEtBQUQsRUFBVztBQUNuQ04sV0FBTyxDQUFDQyxHQUFSLENBQVkscURBQVo7QUFDQSxXQUFPSyxLQUFLLENBQUNDLE1BQU4sQ0FBYVgsYUFBYixDQUFQO0FBQ0gsR0FIRCxDQURKO0FBTUgsQ0FSRDtBQVVBQyxJQUFJLENBQUNDLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFVBQUNDLENBQUQsRUFBTztBQUNsQ0EsR0FBQyxDQUFDUyxXQUFGLENBQ0lMLE1BQU0sQ0FBQ00sS0FBUCxDQUFhVixDQUFDLENBQUNXLE9BQWYsRUFBd0JMLElBQXhCLENBQTZCLFVBQUNNLENBQUQsRUFBTztBQUNoQ1gsV0FBTyxDQUFDQyxHQUFSLENBQVkseUNBQXVDRixDQUFDLENBQUNXLE9BQUYsQ0FBVUUsR0FBN0Q7QUFDQSxXQUFPRCxDQUFDLElBQUlFLEtBQUssQ0FBQ2QsQ0FBQyxDQUFDVyxPQUFILENBQUwsQ0FBaUJMLElBQWpCLENBQXNCLFVBQUNTLFFBQUQsRUFBYztBQUM1QyxhQUFPWCxNQUFNLENBQUNDLElBQVAsQ0FBWVQsU0FBWixFQUF1QlUsSUFBdkIsQ0FBNEIsVUFBQ0MsS0FBRCxFQUFXO0FBQzFDTixlQUFPLENBQUNDLEdBQVIsQ0FBWSw0Q0FBMENGLENBQUMsQ0FBQ1csT0FBRixDQUFVRSxHQUFoRTs7QUFDQSxZQUFJYixDQUFDLENBQUNXLE9BQUYsQ0FBVUUsR0FBVixDQUFjRyxPQUFkLENBQXNCLE1BQXRCLE1BQWtDLENBQXRDLEVBQTBDO0FBQ3RDVCxlQUFLLENBQUNVLEdBQU4sQ0FBVWpCLENBQUMsQ0FBQ1csT0FBWixFQUFxQkksUUFBUSxDQUFDRyxLQUFULEVBQXJCO0FBQ0g7O0FBQ0QsZUFBT0gsUUFBUDtBQUNILE9BTk0sQ0FBUDtBQU9ILEtBUlcsQ0FBWjtBQVNILEdBWEQsQ0FESjtBQWNILENBZkQsRSIsImZpbGUiOiIuLi9zdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9qcy9zZXJ2aWNlLXdvcmtlci5qc1wiKTtcbiIsImxldCBjYWNoZU5hbWUgPSBcInB3YS1sbWFjb2RlLWRldlwiXG5sZXQgIGFwcFNoZWxsRmlsZXMgPSBbXG4gICAgJy9wd2EuaHRtbCcsXG4gICAgJy9pbWcvaWNvbl8xNngxNi5wbmcnLFxuICAgICcvaW1nL2ljb25fMTQ0eDE0NC5wbmcnLFxuICAgICcvaW1nL2ljb25fNTEyeDUxMi5wbmcnLFxuICAgICcvYnVpbGQvYXBwLmpzJyxcbl1cblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJywgKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZygnW1NlcnZpY2UgV29ya2VyXSBJbnN0YWxsJyk7XG4gICAgZS53YWl0VW50aWwoXG4gICAgICAgIGNhY2hlcy5vcGVuKGNhY2hlTmFtZSkudGhlbigoY2FjaGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbU2VydmljZSBXb3JrZXJdIENhY2hpbmcgYWxsOiBhcHAgc2hlbGwgYW5kIGNvbnRlbnQnKTtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZS5hZGRBbGwoYXBwU2hlbGxGaWxlcyk7XG4gICAgICAgIH0pXG4gICAgKTtcbn0pO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2ZldGNoJywgKGUpID0+IHtcbiAgICBlLnJlc3BvbmRXaXRoKFxuICAgICAgICBjYWNoZXMubWF0Y2goZS5yZXF1ZXN0KS50aGVuKChyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW1NlcnZpY2UgV29ya2VyXSBGZXRjaGluZyByZXNvdXJjZTogJytlLnJlcXVlc3QudXJsKTtcbiAgICAgICAgICAgIHJldHVybiByIHx8IGZldGNoKGUucmVxdWVzdCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FjaGVzLm9wZW4oY2FjaGVOYW1lKS50aGVuKChjYWNoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW1NlcnZpY2UgV29ya2VyXSBDYWNoaW5nIG5ldyByZXNvdXJjZTogJytlLnJlcXVlc3QudXJsKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoKGUucmVxdWVzdC51cmwuaW5kZXhPZignaHR0cCcpID09PSAwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGUucHV0KGUucmVxdWVzdCwgcmVzcG9uc2UuY2xvbmUoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgKTtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=