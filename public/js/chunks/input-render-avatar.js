(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["input-render-avatar"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/form/rows/sections/fields/AbstractField.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/form/rows/sections/fields/AbstractField.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AbstractField",
  props: ['element', 'form']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/form/rows/sections/fields/InputRenderAvatar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/form/rows/sections/fields/InputRenderAvatar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AbstractField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractField */ "./resources/js/src/views/pages/form/rows/sections/fields/AbstractField.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "InputRenderAvatar",
  "extends": _AbstractField__WEBPACK_IMPORTED_MODULE_0__["default"],
  methods: {
    update_avatar: function update_avatar() {// You can update avatar Here
      // For reference you can check dataList example
      // We haven't integrated it here, because data isn't saved in DB
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/form/rows/sections/fields/InputRenderAvatar.vue?vue&type=template&id=185468d4&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/form/rows/sections/fields/InputRenderAvatar.vue?vue&type=template&id=185468d4&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "vx-col w-full" }, [
    _c("div", { staticClass: "flex items-start flex-col sm:flex-row" }, [
      _c("img", {
        staticClass: "mr-8 rounded h-24 w-24",
        attrs: { src: _vm.element.value }
      }),
      _vm._v(" "),
      _c(
        "div",
        [
          _c("p", { staticClass: "text-lg font-medium mb-2 mt-4 sm:mt-0" }, [
            _vm._v(_vm._s(_vm.element.name))
          ]),
          _vm._v(" "),
          _c("input", {
            ref: "update_avatar_input",
            staticClass: "hidden",
            attrs: { type: "file", accept: "image/*" },
            on: { change: _vm.update_avatar }
          }),
          _vm._v(" "),
          _c("vs-button", { staticClass: "mr-4 mb-4" }, [
            _vm._v("Change Avatar")
          ]),
          _vm._v(" "),
          _c("vs-button", { attrs: { type: "border", color: "danger" } }, [
            _vm._v("Remove Avatar")
          ])
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/form/rows/sections/fields/AbstractField.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/pages/form/rows/sections/fields/AbstractField.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AbstractField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractField.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/form/rows/sections/fields/AbstractField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _AbstractField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/form/rows/sections/fields/AbstractField.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/form/rows/sections/fields/AbstractField.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/form/rows/sections/fields/AbstractField.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AbstractField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AbstractField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/form/rows/sections/fields/AbstractField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AbstractField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/form/rows/sections/fields/InputRenderAvatar.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/pages/form/rows/sections/fields/InputRenderAvatar.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputRenderAvatar_vue_vue_type_template_id_185468d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputRenderAvatar.vue?vue&type=template&id=185468d4&scoped=true& */ "./resources/js/src/views/pages/form/rows/sections/fields/InputRenderAvatar.vue?vue&type=template&id=185468d4&scoped=true&");
/* harmony import */ var _InputRenderAvatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputRenderAvatar.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/form/rows/sections/fields/InputRenderAvatar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InputRenderAvatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InputRenderAvatar_vue_vue_type_template_id_185468d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InputRenderAvatar_vue_vue_type_template_id_185468d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "185468d4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/form/rows/sections/fields/InputRenderAvatar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/form/rows/sections/fields/InputRenderAvatar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/form/rows/sections/fields/InputRenderAvatar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputRenderAvatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InputRenderAvatar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/form/rows/sections/fields/InputRenderAvatar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputRenderAvatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/form/rows/sections/fields/InputRenderAvatar.vue?vue&type=template&id=185468d4&scoped=true&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/form/rows/sections/fields/InputRenderAvatar.vue?vue&type=template&id=185468d4&scoped=true& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputRenderAvatar_vue_vue_type_template_id_185468d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InputRenderAvatar.vue?vue&type=template&id=185468d4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/form/rows/sections/fields/InputRenderAvatar.vue?vue&type=template&id=185468d4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputRenderAvatar_vue_vue_type_template_id_185468d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputRenderAvatar_vue_vue_type_template_id_185468d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);