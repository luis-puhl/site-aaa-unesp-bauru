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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_atletica_vue_app_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_atletica_vue_app_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__js_atletica_vue_app_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_freelancer_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_freelancer_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__js_freelancer_js__);




/***/ }),
/* 1 */
/***/ (function(module, exports) {

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

let gestoes = [];

Vue.component('gestao-item', {
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


var gestoesApp = new Vue({
	el: '#gestoes',
	data: {
		gestoes: [],
	}
})


// Initialize Firebase
var config = {
	apiKey: "AIzaSyAP3Ad6_c_YZwUMWXEixUU4Uulg_jKV0HE",
	authDomain: "aaa-unesp-bauru.firebaseapp.com",
	databaseURL: "https://aaa-unesp-bauru.firebaseio.com",
	projectId: "aaa-unesp-bauru",
	storageBucket: "aaa-unesp-bauru.appspot.com",
	messagingSenderId: "69608239635"
};
firebase.initializeApp(config);

var database = firebase.database();
var storage = firebase.storage();

let gestoesRef = firebase.database().ref('gestoes/');
gestoesRef.on('value', function(snapshot) {
	gestoes = snapshot.val();
	gestoes.map(
		gestao => storage.ref(gestao.img).getDownloadURL().then(url => gestao.img = url)
	);
	gestoesApp.gestoes = gestoes;
});


/***/ }),
/* 2 */
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


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTAxZGM2ZWE2YmM3MDc1MjcyZmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hdGxldGljYS12dWUtYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mcmVlbGFuY2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixlQUFlO0FBQzFDO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksYUFBYTtBQUN6QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGlCQUFpQjtBQUM1RDtBQUNBLEVBQUU7QUFDRixDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7QUMvRkQ7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLENBQUMsVUFBVSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlMDFkYzZlYTZiYzcwNzUyNzJmZSIsImltcG9ydCAnLi9qcy9hdGxldGljYS12dWUtYXBwLmpzJztcclxuaW1wb3J0ICcuL2pzL2ZyZWVsYW5jZXIuanMnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuICogRXNzYXMgZGVwZW5jaWFzIGVzdMOjbyBubyBgaW5kZXguaHRtbGBcclxuICpcclxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUvZGlzdC92dWUuY29tbW9uLmpzJztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2ZpcmViYXNlLmpzJztcclxuaW1wb3J0ICdmaXJlYmFzZS9maXJlYmFzZS1hcHAuanMnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmViYXNlLWF1dGguanMnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmViYXNlLWRhdGFiYXNlLmpzJztcclxuaW1wb3J0ICdmaXJlYmFzZS9maXJlYmFzZS1zdG9yYWdlLmpzJztcclxuLy8gKi9cclxuXHJcbmxldCBnZXN0b2VzID0gW107XHJcblxyXG5WdWUuY29tcG9uZW50KCdnZXN0YW8taXRlbScsIHtcclxuXHRwcm9wczogWydnZXN0YW8nXSxcclxuXHR0ZW1wbGF0ZTogYFxyXG48ZGl2IGNsYXNzPVwiY29sLXNtLTYgZ3JpZC1pdGVtIHRpbGUtZ2VzdGFvXCI+XHJcblx0PGEgdi1iaW5kOmhyZWY9XCInI21vZGFsLScgKyBnZXN0YW8uaWRcIiBjbGFzcz1cImdyaWQtbGlua1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJncmlkLWNhcHRpb25cIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImdyaWQtY2FwdGlvbi1jb250ZW50XCI+XHJcblx0XHRcdFx0PGkgY2xhc3M9XCJmYSBmYS1zZWFyY2gtcGx1cyBmYS0zeFwiPjwvaT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxpbWcgdi1iaW5kOnNyYz1cImdlc3Rhby5pbWdcIiBjbGFzcz1cImltZy1yZXNwb25zaXZlXCIgdi1iaW5kOmFsdD1cImdlc3Rhby5pbWdcIj5cclxuXHRcdDxoMyBjbGFzcz1cImdyaWQtdGl0bGVcIj57eyBnZXN0YW8ubm9tZSB9fTwvaDM+XHJcblx0PC9hPlxyXG48L2Rpdj5gLFxyXG59KTtcclxuXHJcblZ1ZS5jb21wb25lbnQoJ2F0bGV0aWNhLW1vZGFsJywge1xyXG5cdHByb3BzOiBbJ2l0ZW0nXSxcclxuXHR0ZW1wbGF0ZTogYFxyXG48ZGl2IGNsYXNzPVwicG9ydGZvbGlvLW1vZGFsIG1vZGFsIGZhZGVcIiB2LWJpbmQ6aWQ9XCInbW9kYWwtJyArIGl0ZW0uaWRcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG5cdDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiY2xvc2UtbW9kYWxcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibHJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicmxcIj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbGctOCBjb2wtbGctb2Zmc2V0LTJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHJcblx0XHRcdFx0XHRcdDxoMj57eyBpdGVtLm5vbWUgfX08L2gyPlxyXG5cdFx0XHRcdFx0XHQ8aHIgY2xhc3M9XCJzdGFyLXByaW1hcnlcIj5cclxuXHRcdFx0XHRcdFx0PGltZyB2LWJpbmQ6c3JjPVwiIGl0ZW0uaW1nIFwiIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmUgaW1nLWNlbnRlcmVkXCIgYWx0PVwiXCI+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHYtaHRtbD1cImNvbXBpbGVkTWFya2Rvd25cIj48L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj48aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPiBDbG9zZTwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG5cdGNvbXB1dGVkOiB7XHJcblx0XHRjb21waWxlZE1hcmtkb3duOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBtYXJrZWQodGhpcy5pdGVtLmNvbnRldWRvTW9kYWwsIHsgc2FuaXRpemU6IHRydWUgfSlcclxuXHRcdH1cclxuXHR9LFxyXG59KTtcclxuXHJcblxyXG52YXIgZ2VzdG9lc0FwcCA9IG5ldyBWdWUoe1xyXG5cdGVsOiAnI2dlc3RvZXMnLFxyXG5cdGRhdGE6IHtcclxuXHRcdGdlc3RvZXM6IFtdLFxyXG5cdH1cclxufSlcclxuXHJcblxyXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbnZhciBjb25maWcgPSB7XHJcblx0YXBpS2V5OiBcIkFJemFTeUFQM0FkNl9jX1lad1VNV1hFaXhVVTRVdWxnX2pLVjBIRVwiLFxyXG5cdGF1dGhEb21haW46IFwiYWFhLXVuZXNwLWJhdXJ1LmZpcmViYXNlYXBwLmNvbVwiLFxyXG5cdGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vYWFhLXVuZXNwLWJhdXJ1LmZpcmViYXNlaW8uY29tXCIsXHJcblx0cHJvamVjdElkOiBcImFhYS11bmVzcC1iYXVydVwiLFxyXG5cdHN0b3JhZ2VCdWNrZXQ6IFwiYWFhLXVuZXNwLWJhdXJ1LmFwcHNwb3QuY29tXCIsXHJcblx0bWVzc2FnaW5nU2VuZGVySWQ6IFwiNjk2MDgyMzk2MzVcIlxyXG59O1xyXG5maXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XHJcblxyXG52YXIgZGF0YWJhc2UgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xyXG52YXIgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTtcclxuXHJcbmxldCBnZXN0b2VzUmVmID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ2dlc3RvZXMvJyk7XHJcbmdlc3RvZXNSZWYub24oJ3ZhbHVlJywgZnVuY3Rpb24oc25hcHNob3QpIHtcclxuXHRnZXN0b2VzID0gc25hcHNob3QudmFsKCk7XHJcblx0Z2VzdG9lcy5tYXAoXHJcblx0XHRnZXN0YW8gPT4gc3RvcmFnZS5yZWYoZ2VzdGFvLmltZykuZ2V0RG93bmxvYWRVUkwoKS50aGVuKHVybCA9PiBnZXN0YW8uaW1nID0gdXJsKVxyXG5cdCk7XHJcblx0Z2VzdG9lc0FwcC5nZXN0b2VzID0gZ2VzdG9lcztcclxufSk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2F0bGV0aWNhLXZ1ZS1hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gRnJlZWxhbmNlciBUaGVtZSBKYXZhU2NyaXB0XHJcblxyXG4oZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7IC8vIFN0YXJ0IG9mIHVzZSBzdHJpY3RcclxuXHJcbiAgICAvLyBqUXVlcnkgZm9yIHBhZ2Ugc2Nyb2xsaW5nIGZlYXR1cmUgLSByZXF1aXJlcyBqUXVlcnkgRWFzaW5nIHBsdWdpblxyXG4gICAgJCgnLnBhZ2Utc2Nyb2xsIGEnKS5iaW5kKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyICRhbmNob3IgPSAkKHRoaXMpO1xyXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogKCQoJGFuY2hvci5hdHRyKCdocmVmJykpLm9mZnNldCgpLnRvcCAtIDUwKVxyXG4gICAgICAgIH0sIDEyNTAsICdlYXNlSW5PdXRFeHBvJyk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEhpZ2hsaWdodCB0aGUgdG9wIG5hdiBhcyBzY3JvbGxpbmcgb2NjdXJzXHJcbiAgICAkKCdib2R5Jykuc2Nyb2xsc3B5KHtcclxuICAgICAgICB0YXJnZXQ6ICcubmF2YmFyLWZpeGVkLXRvcCcsXHJcbiAgICAgICAgb2Zmc2V0OiA1MVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ2xvc2VzIHRoZSBSZXNwb25zaXZlIE1lbnUgb24gTWVudSBJdGVtIENsaWNrXHJcbiAgICAkKCcubmF2YmFyLWNvbGxhcHNlIHVsIGxpIGEnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5uYXZiYXItdG9nZ2xlOnZpc2libGUnKS5jbGljaygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gT2Zmc2V0IGZvciBNYWluIE5hdmlnYXRpb25cclxuICAgICQoJyNtYWluTmF2JykuYWZmaXgoe1xyXG4gICAgICAgIG9mZnNldDoge1xyXG4gICAgICAgICAgICB0b3A6IDEwMFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG59KShqUXVlcnkpOyAvLyBFbmQgb2YgdXNlIHN0cmljdFxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9mcmVlbGFuY2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=