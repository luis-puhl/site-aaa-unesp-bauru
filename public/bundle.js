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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  config: {
    apiKey: "AIzaSyAP3Ad6_c_YZwUMWXEixUU4Uulg_jKV0HE",
    authDomain: "aaa-unesp-bauru.firebaseapp.com",
    databaseURL: "https://aaa-unesp-bauru.firebaseio.com",
    projectId: "aaa-unesp-bauru",
    storageBucket: "aaa-unesp-bauru.appspot.com",
    messagingSenderId: "69608239635"
  },
  getGestoesObservable: function() {
    if (!this.gestoesObservable) {
      console.log('init gestoesObservable');
      this.gestoesObservable = Rx.Observable
        .fromEvent(this.database.ref('gestoes/'), 'value')
        .map(snapshot => snapshot.val())
        // update da img quando o servidor de imagens responder
        // .map(gestao => storage.ref(gestao.img).getDownloadURL().then(url => gestao.img = url));
    }
    return this.gestoesObservable;
  },
  gestoes: [],
  init: function () {
    // Initialize Firebase
    firebase.initializeApp(this.config);
    this.database = firebase.database();
    this.storage = firebase.storage();
    this.gestoesObservable();
  }
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_index_js__ = __webpack_require__(5);

 


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__atletica_tile_vue_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__atletica_modal_vue_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__atletica_modal_vue_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__atletica_modal_vue_js__);



/* unused harmony default export */ var _unused_webpack_default_export = ({
  AtleticaTileComponent: __WEBPACK_IMPORTED_MODULE_0__atletica_tile_vue_js__["a" /* default */],
  AtleticaModalComponent: __WEBPACK_IMPORTED_MODULE_1__atletica_modal_vue_js___default.a,
});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'atletica-tile',
  props: ['gestao'],
  template: `
<div class="col-sm-6 grid-item tile-gestao">
  <a v-bind:href="'#modal-' + gestao.id" class="grid-link" data-toggle="modal">
    <div class="grid-caption">
      <div class="grid-caption-content">
        <i class="fa fa-search-plus fa-3x"></i>
      </div>
    </div>
    <img v-bind:src="gestao.img" class="img-responsive" v-bind:alt="gestao.img">
    <h3 class="grid-title">{{ gestao.nome }}</h3>
  </a>
</div>`,
});


/***/ }),
/* 4 */
/***/ (function(module, exports) {

Vue.component('atletica-modal', {
	props: ['item'],
	template: `
<div class="portfolio-modal modal fade" v-bind:id="'modal-' + item.id" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-content">
		<div class="close-modal" data-dismiss="modal">
			<div class="lr">
				<div class="rl">
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-lg-offset-2">
					<div class="modal-body">
						<h2>{{ item.nome }}</h2>
						<hr class="star-primary">
						<img v-bind:src=" item.img " class="img-responsive img-centered" alt="">

						<div v-html="compiledMarkdown"></div>

						<button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
`,
	computed: {
		compiledMarkdown: function () {
			return marked(this.item.conteudoModal, { sanitize: true })
		}
	},
});


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freelancer_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freelancer_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__freelancer_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebase_service_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__atletica_vue_app_js__ = __webpack_require__(7);




document.addEventListener('loadend', () => __WEBPACK_IMPORTED_MODULE_2__atletica_vue_app_js__["a" /* default */].init());


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); // End of use strict


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_service_js__ = __webpack_require__(0);
/**
 * Essas depencias estão no `index.html`
 *
import Vue from 'vue/dist/vue.common.js';
import firebase from 'firebase/firebase.js';
import 'firebase/firebase-app.js';
import 'firebase/firebase-auth.js';
import 'firebase/firebase-database.js';
import 'firebase/firebase-storage.js';
// */



const AtleticaVueApp = {
  gestoesApp: new Vue({
    el: '#gestoes',
    data: {
      gestoes: [],
      init: function() {
        __WEBPACK_IMPORTED_MODULE_0__firebase_service_js__["a" /* default */].init();
        __WEBPACK_IMPORTED_MODULE_0__firebase_service_js__["a" /* default */].getGestoesObservable().subscribe(
          gestoes => {this.gestoes = gestoes ; console.log(gestoes);}
        );
      },
    }
  })
};

/* harmony default export */ __webpack_exports__["a"] = (AtleticaVueApp);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWNjMWU5NzA2MjdkZGE1NTdmZjciLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZpcmViYXNlLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F0bGV0aWNhLXRpbGUudnVlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2F0bGV0aWNhLW1vZGFsLnZ1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ZyZWVsYW5jZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2F0bGV0aWNhLXZ1ZS1hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM1QkE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGVBQWU7QUFDNUM7QUFDQTtBQUNBOzs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsaUJBQWlCO0FBQzVEO0FBQ0EsRUFBRTtBQUNGLENBQUM7Ozs7Ozs7Ozs7OztBQ2xDRDtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNKQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsQ0FBQyxVQUFVOzs7Ozs7OztBQ2hDWDtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isd0JBQXdCO0FBQzlDO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIOztBQUVBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDFjYzFlOTcwNjI3ZGRhNTU3ZmY3IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNvbmZpZzoge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeUFQM0FkNl9jX1lad1VNV1hFaXhVVTRVdWxnX2pLVjBIRVwiLFxyXG4gICAgYXV0aERvbWFpbjogXCJhYWEtdW5lc3AtYmF1cnUuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL2FhYS11bmVzcC1iYXVydS5maXJlYmFzZWlvLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcImFhYS11bmVzcC1iYXVydVwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJhYWEtdW5lc3AtYmF1cnUuYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjY5NjA4MjM5NjM1XCJcclxuICB9LFxyXG4gIGdldEdlc3RvZXNPYnNlcnZhYmxlOiBmdW5jdGlvbigpIHtcclxuICAgIGlmICghdGhpcy5nZXN0b2VzT2JzZXJ2YWJsZSkge1xuICAgICAgY29uc29sZS5sb2coJ2luaXQgZ2VzdG9lc09ic2VydmFibGUnKTtcclxuICAgICAgdGhpcy5nZXN0b2VzT2JzZXJ2YWJsZSA9IFJ4Lk9ic2VydmFibGVcclxuICAgICAgICAuZnJvbUV2ZW50KHRoaXMuZGF0YWJhc2UucmVmKCdnZXN0b2VzLycpLCAndmFsdWUnKVxyXG4gICAgICAgIC5tYXAoc25hcHNob3QgPT4gc25hcHNob3QudmFsKCkpXHJcbiAgICAgICAgLy8gdXBkYXRlIGRhIGltZyBxdWFuZG8gbyBzZXJ2aWRvciBkZSBpbWFnZW5zIHJlc3BvbmRlclxyXG4gICAgICAgIC8vIC5tYXAoZ2VzdGFvID0+IHN0b3JhZ2UucmVmKGdlc3Rhby5pbWcpLmdldERvd25sb2FkVVJMKCkudGhlbih1cmwgPT4gZ2VzdGFvLmltZyA9IHVybCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZ2VzdG9lc09ic2VydmFibGU7XHJcbiAgfSxcclxuICBnZXN0b2VzOiBbXSxcclxuICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKHRoaXMuY29uZmlnKTtcclxuICAgIHRoaXMuZGF0YWJhc2UgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG4gICAgdGhpcy5zdG9yYWdlID0gZmlyZWJhc2Uuc3RvcmFnZSgpO1xyXG4gICAgdGhpcy5nZXN0b2VzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9maXJlYmFzZS1zZXJ2aWNlLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAnLi9jb21wb25lbnRzL2luZGV4LmpzJztcclxuaW1wb3J0ICcuL2pzL2luZGV4LmpzJzsgXHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBBdGxldGljYVRpbGVDb21wb25lbnQgZnJvbSAnLi9hdGxldGljYS10aWxlLnZ1ZS5qcyc7XHJcbmltcG9ydCBBdGxldGljYU1vZGFsQ29tcG9uZW50IGZyb20gJy4vYXRsZXRpY2EtbW9kYWwudnVlLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBBdGxldGljYVRpbGVDb21wb25lbnQsXHJcbiAgQXRsZXRpY2FNb2RhbENvbXBvbmVudCxcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2F0bGV0aWNhLXRpbGUnLFxuICBwcm9wczogWydnZXN0YW8nXSxcbiAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJjb2wtc20tNiBncmlkLWl0ZW0gdGlsZS1nZXN0YW9cIj5cbiAgPGEgdi1iaW5kOmhyZWY9XCInI21vZGFsLScgKyBnZXN0YW8uaWRcIiBjbGFzcz1cImdyaWQtbGlua1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1jYXB0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1jYXB0aW9uLWNvbnRlbnRcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zZWFyY2gtcGx1cyBmYS0zeFwiPjwvaT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxpbWcgdi1iaW5kOnNyYz1cImdlc3Rhby5pbWdcIiBjbGFzcz1cImltZy1yZXNwb25zaXZlXCIgdi1iaW5kOmFsdD1cImdlc3Rhby5pbWdcIj5cbiAgICA8aDMgY2xhc3M9XCJncmlkLXRpdGxlXCI+e3sgZ2VzdGFvLm5vbWUgfX08L2gzPlxuICA8L2E+XG48L2Rpdj5gLFxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9hdGxldGljYS10aWxlLnZ1ZS5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJWdWUuY29tcG9uZW50KCdhdGxldGljYS1tb2RhbCcsIHtcclxuXHRwcm9wczogWydpdGVtJ10sXHJcblx0dGVtcGxhdGU6IGBcclxuPGRpdiBjbGFzcz1cInBvcnRmb2xpby1tb2RhbCBtb2RhbCBmYWRlXCIgdi1iaW5kOmlkPVwiJ21vZGFsLScgKyBpdGVtLmlkXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuXHQ8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImNsb3NlLW1vZGFsXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImxyXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInJsXCI+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLWxnLTggY29sLWxnLW9mZnNldC0yXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxyXG5cdFx0XHRcdFx0XHQ8aDI+e3sgaXRlbS5ub21lIH19PC9oMj5cclxuXHRcdFx0XHRcdFx0PGhyIGNsYXNzPVwic3Rhci1wcmltYXJ5XCI+XHJcblx0XHRcdFx0XHRcdDxpbWcgdi1iaW5kOnNyYz1cIiBpdGVtLmltZyBcIiBjbGFzcz1cImltZy1yZXNwb25zaXZlIGltZy1jZW50ZXJlZFwiIGFsdD1cIlwiPlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiB2LWh0bWw9XCJjb21waWxlZE1hcmtkb3duXCI+PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+PGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT4gQ2xvc2U8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuXHRjb21wdXRlZDoge1xyXG5cdFx0Y29tcGlsZWRNYXJrZG93bjogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gbWFya2VkKHRoaXMuaXRlbS5jb250ZXVkb01vZGFsLCB7IHNhbml0aXplOiB0cnVlIH0pXHJcblx0XHR9XHJcblx0fSxcclxufSk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvYXRsZXRpY2EtbW9kYWwudnVlLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAnLi9mcmVlbGFuY2VyLmpzJztcclxuaW1wb3J0ICcuL2ZpcmViYXNlLXNlcnZpY2UuanMnO1xyXG5pbXBvcnQgQXRsZXRpY2FWdWVBcHAgZnJvbSAnLi9hdGxldGljYS12dWUtYXBwLmpzJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlbmQnLCAoKSA9PiBBdGxldGljYVZ1ZUFwcC5pbml0KCkpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBGcmVlbGFuY2VyIFRoZW1lIEphdmFTY3JpcHRcblxuKGZ1bmN0aW9uKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjsgLy8gU3RhcnQgb2YgdXNlIHN0cmljdFxuXG4gICAgLy8galF1ZXJ5IGZvciBwYWdlIHNjcm9sbGluZyBmZWF0dXJlIC0gcmVxdWlyZXMgalF1ZXJ5IEVhc2luZyBwbHVnaW5cbiAgICAkKCcucGFnZS1zY3JvbGwgYScpLmJpbmQoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgdmFyICRhbmNob3IgPSAkKHRoaXMpO1xuICAgICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAoJCgkYW5jaG9yLmF0dHIoJ2hyZWYnKSkub2Zmc2V0KCkudG9wIC0gNTApXG4gICAgICAgIH0sIDEyNTAsICdlYXNlSW5PdXRFeHBvJyk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICAvLyBIaWdobGlnaHQgdGhlIHRvcCBuYXYgYXMgc2Nyb2xsaW5nIG9jY3Vyc1xuICAgICQoJ2JvZHknKS5zY3JvbGxzcHkoe1xuICAgICAgICB0YXJnZXQ6ICcubmF2YmFyLWZpeGVkLXRvcCcsXG4gICAgICAgIG9mZnNldDogNTFcbiAgICB9KTtcblxuICAgIC8vIENsb3NlcyB0aGUgUmVzcG9uc2l2ZSBNZW51IG9uIE1lbnUgSXRlbSBDbGlja1xuICAgICQoJy5uYXZiYXItY29sbGFwc2UgdWwgbGkgYScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJy5uYXZiYXItdG9nZ2xlOnZpc2libGUnKS5jbGljaygpO1xuICAgIH0pO1xuXG4gICAgLy8gT2Zmc2V0IGZvciBNYWluIE5hdmlnYXRpb25cbiAgICAkKCcjbWFpbk5hdicpLmFmZml4KHtcbiAgICAgICAgb2Zmc2V0OiB7XG4gICAgICAgICAgICB0b3A6IDEwMFxuICAgICAgICB9XG4gICAgfSlcblxufSkoalF1ZXJ5KTsgLy8gRW5kIG9mIHVzZSBzdHJpY3RcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2ZyZWVsYW5jZXIuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiAqIEVzc2FzIGRlcGVuY2lhcyBlc3TDo28gbm8gYGluZGV4Lmh0bWxgXHJcbiAqXHJcbmltcG9ydCBWdWUgZnJvbSAndnVlL2Rpc3QvdnVlLmNvbW1vbi5qcyc7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9maXJlYmFzZS5qcyc7XHJcbmltcG9ydCAnZmlyZWJhc2UvZmlyZWJhc2UtYXBwLmpzJztcclxuaW1wb3J0ICdmaXJlYmFzZS9maXJlYmFzZS1hdXRoLmpzJztcclxuaW1wb3J0ICdmaXJlYmFzZS9maXJlYmFzZS1kYXRhYmFzZS5qcyc7XHJcbmltcG9ydCAnZmlyZWJhc2UvZmlyZWJhc2Utc3RvcmFnZS5qcyc7XHJcbi8vICovXHJcblxyXG5pbXBvcnQgRmlyZWJhc2VTZXJ2aWNlIGZyb20gJy4vZmlyZWJhc2Utc2VydmljZS5qcyc7XHJcblxyXG5jb25zdCBBdGxldGljYVZ1ZUFwcCA9IHtcclxuICBnZXN0b2VzQXBwOiBuZXcgVnVlKHtcclxuICAgIGVsOiAnI2dlc3RvZXMnLFxyXG4gICAgZGF0YToge1xyXG4gICAgICBnZXN0b2VzOiBbXSxcclxuICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgRmlyZWJhc2VTZXJ2aWNlLmluaXQoKTtcclxuICAgICAgICBGaXJlYmFzZVNlcnZpY2UuZ2V0R2VzdG9lc09ic2VydmFibGUoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICBnZXN0b2VzID0+IHt0aGlzLmdlc3RvZXMgPSBnZXN0b2VzIDsgY29uc29sZS5sb2coZ2VzdG9lcyk7fVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSlcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF0bGV0aWNhVnVlQXBwO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9hdGxldGljYS12dWUtYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=