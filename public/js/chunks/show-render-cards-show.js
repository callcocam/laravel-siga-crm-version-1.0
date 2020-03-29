(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["show-render-cards-show"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/show/AbstractShowRender.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/show/AbstractShowRender.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AbstractShowRender",
  components: {
    ShowRenderCard: function ShowRenderCard() {
      return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @views/pages/show/ShowRenderCard */ "./resources/js/src/views/pages/show/ShowRenderCard.vue"));
    },
    ShowRenderRows: function ShowRenderRows() {
      return __webpack_require__.e(/*! import() | show-render-rows */ "show-render-rows").then(__webpack_require__.bind(null, /*! @views/pages/show/rows/ShowRenderRows */ "./resources/js/src/views/pages/show/rows/ShowRenderRows.vue"));
    },
    ShowRenderCols: function ShowRenderCols() {
      return __webpack_require__.e(/*! import() | show-render-cols */ "show-render-cols").then(__webpack_require__.bind(null, /*! @views/pages/show/rows/cols/ShowRenderCols */ "./resources/js/src/views/pages/show/rows/cols/ShowRenderCols.vue"));
    },
    ShowRenderItem: function ShowRenderItem() {
      return __webpack_require__.e(/*! import() | show-render-items */ "show-render-items").then(__webpack_require__.bind(null, /*! @views/pages/show/rows/cols/items/ShowRenderItem */ "./resources/js/src/views/pages/show/rows/cols/items/ShowRenderItem.vue"));
    },
    ShowRenderAvatar: function ShowRenderAvatar() {
      return __webpack_require__.e(/*! import() | show-render-avatar */ "show-render-avatar").then(__webpack_require__.bind(null, /*! @views/pages/show/rows/cols/ShowRenderAvatar */ "./resources/js/src/views/pages/show/rows/cols/ShowRenderAvatar.vue"));
    }
  },
  props: ['element'],
  methods: {
    currentTabComponent: function currentTabComponent(Component) {
      return Component;
    },
    setClass: function setClass(cl) {
      return "vx-col lg:w-1/".concat(cl, " w-full");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/show/ShowRenderCard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/show/ShowRenderCard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_pages_show_AbstractShowRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @views/pages/show/AbstractShowRender */ "./resources/js/src/views/pages/show/AbstractShowRender.vue");
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ShowRenderCard",
  "extends": _views_pages_show_AbstractShowRender__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/show/ShowRenderCard.vue?vue&type=template&id=3cfbe2b0&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/show/ShowRenderCard.vue?vue&type=template&id=3cfbe2b0&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vx-card",
    { staticClass: "mb-base", attrs: { title: "Account" } },
    [
      _vm._l(_vm.element.content, function(content, content_index) {
        return [
          _c(_vm.currentTabComponent(content.name), {
            key: content_index,
            tag: "component",
            attrs: { element: content }
          })
        ]
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/show/AbstractShowRender.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/pages/show/AbstractShowRender.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AbstractShowRender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractShowRender.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/show/AbstractShowRender.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _AbstractShowRender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/show/AbstractShowRender.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/show/AbstractShowRender.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/show/AbstractShowRender.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AbstractShowRender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AbstractShowRender.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/show/AbstractShowRender.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AbstractShowRender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/show/ShowRenderCard.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/pages/show/ShowRenderCard.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShowRenderCard_vue_vue_type_template_id_3cfbe2b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowRenderCard.vue?vue&type=template&id=3cfbe2b0&scoped=true& */ "./resources/js/src/views/pages/show/ShowRenderCard.vue?vue&type=template&id=3cfbe2b0&scoped=true&");
/* harmony import */ var _ShowRenderCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowRenderCard.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/show/ShowRenderCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShowRenderCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowRenderCard_vue_vue_type_template_id_3cfbe2b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShowRenderCard_vue_vue_type_template_id_3cfbe2b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3cfbe2b0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/show/ShowRenderCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/show/ShowRenderCard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/pages/show/ShowRenderCard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowRenderCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowRenderCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/show/ShowRenderCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowRenderCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/show/ShowRenderCard.vue?vue&type=template&id=3cfbe2b0&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/show/ShowRenderCard.vue?vue&type=template&id=3cfbe2b0&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowRenderCard_vue_vue_type_template_id_3cfbe2b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowRenderCard.vue?vue&type=template&id=3cfbe2b0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/show/ShowRenderCard.vue?vue&type=template&id=3cfbe2b0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowRenderCard_vue_vue_type_template_id_3cfbe2b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowRenderCard_vue_vue_type_template_id_3cfbe2b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);