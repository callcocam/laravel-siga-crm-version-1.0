(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-render-link"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/render/CellRenderLink.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/render/CellRenderLink.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_pages_render_AbstractCellRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @views/pages/render/AbstractCellRender */ "./resources/js/src/views/pages/render/AbstractCellRender.vue");
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CellRenderLink',
  "extends": _views_pages_render_AbstractCellRender__WEBPACK_IMPORTED_MODULE_0__["default"],
  computed: {
    url: function url() {
      return "/apps/user/user-view/268"; // Below line will be for actual product
      // Currently it's commented due to demo purpose - Above url is for demo purpose
      // return "/apps/user/user-view/" + this.params.data.id
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/render/CellRenderLink.vue?vue&type=template&id=9e68df74&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/render/CellRenderLink.vue?vue&type=template&id=9e68df74& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "flex items-center" },
    [
      _c(
        "router-link",
        {
          staticClass: "text-inherit hover:text-primary",
          attrs: { to: _vm.url },
          on: {
            click: function($event) {
              $event.stopPropagation()
              $event.preventDefault()
            }
          }
        },
        [_vm._v(_vm._s(_vm.element[_vm.headers.name]))]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/render/CellRenderLink.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/pages/render/CellRenderLink.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CellRenderLink_vue_vue_type_template_id_9e68df74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CellRenderLink.vue?vue&type=template&id=9e68df74& */ "./resources/js/src/views/pages/render/CellRenderLink.vue?vue&type=template&id=9e68df74&");
/* harmony import */ var _CellRenderLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CellRenderLink.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/render/CellRenderLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CellRenderLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CellRenderLink_vue_vue_type_template_id_9e68df74___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CellRenderLink_vue_vue_type_template_id_9e68df74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/render/CellRenderLink.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/render/CellRenderLink.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/render/CellRenderLink.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRenderLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CellRenderLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/render/CellRenderLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRenderLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/render/CellRenderLink.vue?vue&type=template&id=9e68df74&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/render/CellRenderLink.vue?vue&type=template&id=9e68df74& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRenderLink_vue_vue_type_template_id_9e68df74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CellRenderLink.vue?vue&type=template&id=9e68df74& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/render/CellRenderLink.vue?vue&type=template&id=9e68df74&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRenderLink_vue_vue_type_template_id_9e68df74___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRenderLink_vue_vue_type_template_id_9e68df74___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);