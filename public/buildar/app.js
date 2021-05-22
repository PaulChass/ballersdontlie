(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$":
/*!*****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j|t)sx?$ ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(stimulus__WEBPACK_IMPORTED_MODULE_12__.Controller);



/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)

console.log('Hello encore'); // start the Stimulus application


console.log('Hello encore');


if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('.ty-compact-list1').length > 3) {
  jquery__WEBPACK_IMPORTED_MODULE_2___default()('.ty-compact-list1:gt(5)').hide();
  jquery__WEBPACK_IMPORTED_MODULE_2___default()('.show-more1').show();
}

jquery__WEBPACK_IMPORTED_MODULE_2___default()('.show-more1').on('click', function () {
  //toggle elements with class .ty-compact-list that their index is bigger than 2
  jquery__WEBPACK_IMPORTED_MODULE_2___default()('.ty-compact-list1:gt(5)').toggle(); //change text of show more element just for demonstration purposes to this demo

  jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).text() === 'Voir plus' ? jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).html('<td>Voir moins</td>') : jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).html('<td>Voir plus</td>');
});

if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('.ty-compact-list2').length > 3) {
  jquery__WEBPACK_IMPORTED_MODULE_2___default()('.ty-compact-list2:gt(5)').hide();
  jquery__WEBPACK_IMPORTED_MODULE_2___default()('.show-more2').show();
}

jquery__WEBPACK_IMPORTED_MODULE_2___default()('.show-more2').on('click', function () {
  //toggle elements with class .ty-compact-list that their index is bigger than 2
  jquery__WEBPACK_IMPORTED_MODULE_2___default()('.ty-compact-list2:gt(5)').toggle(); //change text of show more element just for demonstration purposes to this demo

  jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).text() === 'Voir plus' ? jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).html('<td>Voir moins</td>') : jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).html('<td>Voir plus</td>');
});

if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('.ty-compact-list3').length > 3) {
  jquery__WEBPACK_IMPORTED_MODULE_2___default()('.ty-compact-list3:gt(5)').hide();
  jquery__WEBPACK_IMPORTED_MODULE_2___default()('.show-more3').show();
}

jquery__WEBPACK_IMPORTED_MODULE_2___default()('.show-more3').on('click', function () {
  //toggle elements with class .ty-compact-list that their index is bigger than 2
  jquery__WEBPACK_IMPORTED_MODULE_2___default()('.ty-compact-list3:gt(5)').toggle(); //change text of show more element just for demonstration purposes to this demo

  jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).text() === 'Voir plus' ? jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).html('<td>Voir moins</td>') : jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).html('<td>Voir plus</td>');
});

if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('.ty-compact-list4').length > 3) {
  jquery__WEBPACK_IMPORTED_MODULE_2___default()('.ty-compact-list4:gt(5)').hide();
  jquery__WEBPACK_IMPORTED_MODULE_2___default()('.show-more4').show();
}

jquery__WEBPACK_IMPORTED_MODULE_2___default()('.show-more4').on('click', function () {
  //toggle elements with class .ty-compact-list that their index is bigger than 2
  jquery__WEBPACK_IMPORTED_MODULE_2___default()('.ty-compact-list4:gt(5)').toggle(); //change text of show more element just for demonstration purposes to this demo

  jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).text() === 'Voir plus' ? jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).html('<td>Voir moins</td>') : jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).html('<td>Voir plus</td>');
}); //// BOUTONS VOIR PLUS 
//this will execute on page load(to be more specific when document ready event occurs)

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$"));

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ob-bca252"], () => (__webpack_exec__("./assets/app.js")));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3M/M2ZiYSJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiJCIsImxlbmd0aCIsImhpZGUiLCJzaG93Iiwib24iLCJ0b2dnbGUiLCJ0ZXh0IiwiaHRtbCIsImFwcCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBJOzs7Ozs7Ozs7Ozs7Ozs7QUN0QkEsaUVBQWU7QUFDZixDQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNERCx1QkFBdUIsMkJBQTJCLDJFQUEyRSxrQ0FBa0MsbUJBQW1CLEdBQUcsRUFBRSxPQUFPLGtDQUFrQyw4SEFBOEgsR0FBRyxFQUFFLHFCQUFxQjs7QUFFalU7QUFDQTtBQUNOO0FBQ0o7QUFDUztBQUNoQjtBQUNZO0FBQ0Y7QUFDRDtBQUNBO0FBQ0Q7QUFDVzs7QUFFekQsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUU7O0FBRTNULDZEQUE2RCxzRUFBc0UsOERBQThELG9CQUFvQjs7QUFFck4sMENBQTBDLCtEQUErRCwyRUFBMkUsRUFBRSx5RUFB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LENBQTZCSyxNQUE3QixHQUZzQyxDQUd0Qzs7QUFDQUwsK0NBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU0sSUFBUixPQUFtQixXQUFuQixHQUFpQ04sNkNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU8sSUFBUixDQUFhLHFCQUFiLENBQWpDLEdBQXVFUCw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTyxJQUFSLENBQWEsb0JBQWIsQ0FBdkU7QUFDRCxDQUxEOztBQU9BLElBQUlQLDZDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QkMsTUFBdkIsR0FBZ0MsQ0FBcEMsRUFBdUM7QUFDckNELCtDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QkUsSUFBN0I7QUFDQUYsK0NBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJHLElBQWpCO0FBQ0Q7O0FBRURILDZDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCSSxFQUFqQixDQUFvQixPQUFwQixFQUE2QixZQUFXO0FBQ3RDO0FBQ0FKLCtDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QkssTUFBN0IsR0FGc0MsQ0FHdEM7O0FBQ0FMLCtDQUFDLENBQUMsSUFBRCxDQUFELENBQVFNLElBQVIsT0FBbUIsV0FBbkIsR0FBaUNOLDZDQUFDLENBQUMsSUFBRCxDQUFELENBQVFPLElBQVIsQ0FBYSxxQkFBYixDQUFqQyxHQUF1RVAsNkNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU8sSUFBUixDQUFhLG9CQUFiLENBQXZFO0FBQ0QsQ0FMRCxFLENBVUY7QUFDQSxzRjs7Ozs7Ozs7Ozs7Ozs7OztDQzFFQTs7QUFDTyxJQUFNQyxHQUFHLEdBQUdDLDBFQUFnQixDQUFDQywwSUFBRCxDQUE1QixDOzs7Ozs7Ozs7Ozs7QUNIUCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuKGp8dClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMucmVmbGVjdC5jb25zdHJ1Y3QuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuY3JlYXRlLmpzXCI7XG5pbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5kZXNjcmlwdGlvbi5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC50by1zdHJpbmcuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuaXRlcmF0b3IuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuaXRlcmF0b3IuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pdGVyYXRvci5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuaXRlcmF0b3IuanNcIjtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnc3RpbXVsdXMnO1xuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cblxudmFyIF9kZWZhdWx0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29udHJvbGxlcikge1xuICBfaW5oZXJpdHMoX2RlZmF1bHQsIF9Db250cm9sbGVyKTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKF9kZWZhdWx0KTtcblxuICBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgX2RlZmF1bHQpO1xuXG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKF9kZWZhdWx0LCBbe1xuICAgIGtleTogXCJjb25uZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBfZGVmYXVsdDtcbn0oQ29udHJvbGxlcik7XG5cbmV4cG9ydCB7IF9kZWZhdWx0IGFzIGRlZmF1bHQgfTsiLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuY29uc29sZS5sb2coJ0hlbGxvIGVuY29yZScpO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuY29uc29sZS5sb2coJ0hlbGxvIGVuY29yZScpO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5cblxuXG5pZiAoJCgnLnR5LWNvbXBhY3QtbGlzdDEnKS5sZW5ndGggPiAzKSB7XG4gICAgJCgnLnR5LWNvbXBhY3QtbGlzdDE6Z3QoNSknKS5oaWRlKCk7XG4gICAgJCgnLnNob3ctbW9yZTEnKS5zaG93KCk7XG4gIH1cbiAgXG4gICQoJy5zaG93LW1vcmUxJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgLy90b2dnbGUgZWxlbWVudHMgd2l0aCBjbGFzcyAudHktY29tcGFjdC1saXN0IHRoYXQgdGhlaXIgaW5kZXggaXMgYmlnZ2VyIHRoYW4gMlxuICAgICQoJy50eS1jb21wYWN0LWxpc3QxOmd0KDUpJykudG9nZ2xlKCk7XG4gICAgLy9jaGFuZ2UgdGV4dCBvZiBzaG93IG1vcmUgZWxlbWVudCBqdXN0IGZvciBkZW1vbnN0cmF0aW9uIHB1cnBvc2VzIHRvIHRoaXMgZGVtb1xuICAgICQodGhpcykudGV4dCgpID09PSAnVm9pciBwbHVzJyA/ICQodGhpcykuaHRtbCgnPHRkPlZvaXIgbW9pbnM8L3RkPicpIDogJCh0aGlzKS5odG1sKCc8dGQ+Vm9pciBwbHVzPC90ZD4nKTtcbiAgfSk7XG5cblxuXG4gIGlmICgkKCcudHktY29tcGFjdC1saXN0MicpLmxlbmd0aCA+IDMpIHtcbiAgICAkKCcudHktY29tcGFjdC1saXN0MjpndCg1KScpLmhpZGUoKTtcbiAgICAkKCcuc2hvdy1tb3JlMicpLnNob3coKTtcbiAgfVxuICBcbiAgJCgnLnNob3ctbW9yZTInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAvL3RvZ2dsZSBlbGVtZW50cyB3aXRoIGNsYXNzIC50eS1jb21wYWN0LWxpc3QgdGhhdCB0aGVpciBpbmRleCBpcyBiaWdnZXIgdGhhbiAyXG4gICAgJCgnLnR5LWNvbXBhY3QtbGlzdDI6Z3QoNSknKS50b2dnbGUoKTtcbiAgICAvL2NoYW5nZSB0ZXh0IG9mIHNob3cgbW9yZSBlbGVtZW50IGp1c3QgZm9yIGRlbW9uc3RyYXRpb24gcHVycG9zZXMgdG8gdGhpcyBkZW1vXG4gICAgJCh0aGlzKS50ZXh0KCkgPT09ICdWb2lyIHBsdXMnID8gJCh0aGlzKS5odG1sKCc8dGQ+Vm9pciBtb2luczwvdGQ+JykgOiAkKHRoaXMpLmh0bWwoJzx0ZD5Wb2lyIHBsdXM8L3RkPicpO1xuICB9KTtcblxuXG4gIGlmICgkKCcudHktY29tcGFjdC1saXN0MycpLmxlbmd0aCA+IDMpIHtcbiAgICAkKCcudHktY29tcGFjdC1saXN0MzpndCg1KScpLmhpZGUoKTtcbiAgICAkKCcuc2hvdy1tb3JlMycpLnNob3coKTtcbiAgfVxuICBcbiAgJCgnLnNob3ctbW9yZTMnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAvL3RvZ2dsZSBlbGVtZW50cyB3aXRoIGNsYXNzIC50eS1jb21wYWN0LWxpc3QgdGhhdCB0aGVpciBpbmRleCBpcyBiaWdnZXIgdGhhbiAyXG4gICAgJCgnLnR5LWNvbXBhY3QtbGlzdDM6Z3QoNSknKS50b2dnbGUoKTtcbiAgICAvL2NoYW5nZSB0ZXh0IG9mIHNob3cgbW9yZSBlbGVtZW50IGp1c3QgZm9yIGRlbW9uc3RyYXRpb24gcHVycG9zZXMgdG8gdGhpcyBkZW1vXG4gICAgJCh0aGlzKS50ZXh0KCkgPT09ICdWb2lyIHBsdXMnID8gJCh0aGlzKS5odG1sKCc8dGQ+Vm9pciBtb2luczwvdGQ+JykgOiAkKHRoaXMpLmh0bWwoJzx0ZD5Wb2lyIHBsdXM8L3RkPicpO1xuICB9KTtcblxuICBpZiAoJCgnLnR5LWNvbXBhY3QtbGlzdDQnKS5sZW5ndGggPiAzKSB7XG4gICAgJCgnLnR5LWNvbXBhY3QtbGlzdDQ6Z3QoNSknKS5oaWRlKCk7XG4gICAgJCgnLnNob3ctbW9yZTQnKS5zaG93KCk7XG4gIH1cbiAgXG4gICQoJy5zaG93LW1vcmU0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgLy90b2dnbGUgZWxlbWVudHMgd2l0aCBjbGFzcyAudHktY29tcGFjdC1saXN0IHRoYXQgdGhlaXIgaW5kZXggaXMgYmlnZ2VyIHRoYW4gMlxuICAgICQoJy50eS1jb21wYWN0LWxpc3Q0Omd0KDUpJykudG9nZ2xlKCk7XG4gICAgLy9jaGFuZ2UgdGV4dCBvZiBzaG93IG1vcmUgZWxlbWVudCBqdXN0IGZvciBkZW1vbnN0cmF0aW9uIHB1cnBvc2VzIHRvIHRoaXMgZGVtb1xuICAgICQodGhpcykudGV4dCgpID09PSAnVm9pciBwbHVzJyA/ICQodGhpcykuaHRtbCgnPHRkPlZvaXIgbW9pbnM8L3RkPicpIDogJCh0aGlzKS5odG1sKCc8dGQ+Vm9pciBwbHVzPC90ZD4nKTtcbiAgfSk7XG5cblxuXG5cbi8vLy8gQk9VVE9OUyBWT0lSIFBMVVMgXG4vL3RoaXMgd2lsbCBleGVjdXRlIG9uIHBhZ2UgbG9hZCh0byBiZSBtb3JlIHNwZWNpZmljIHdoZW4gZG9jdW1lbnQgcmVhZHkgZXZlbnQgb2NjdXJzKVxuXG5cblxuXG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuKGp8dClzeD8kL1xuKSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9