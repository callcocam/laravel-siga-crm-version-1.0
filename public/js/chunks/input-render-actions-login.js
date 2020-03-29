(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["input-render-actions-login"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/form/rows/sections/SectionRenderFields.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/form/rows/sections/SectionRenderFields.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SectionRenderFields",
  props: ['element', 'form'],
  components: {
    InputRenderMultiCheckbox: function InputRenderMultiCheckbox() {
      return __webpack_require__.e(/*! import() | input-render-multi-checkbox */ "input-render-multi-checkbox").then(__webpack_require__.bind(null, /*! @views/pages/form/rows/sections/fields/InputRenderMultiCheckbox */ "./resources/js/src/views/pages/form/rows/sections/fields/InputRenderMultiCheckbox.vue"));
    },
    InputRenderPermissions: function InputRenderPermissions() {
      return __webpack_require__.e(/*! import() | input-render-multi-checkbox */ "input-render-multi-checkbox").then(__webpack_require__.bind(null, /*! @views/pages/form/rows/sections/fields/InputRenderPermissions */ "./resources/js/src/views/pages/form/rows/sections/fields/InputRenderPermissions.vue"));
    },
    InputRenderAvatar: function InputRenderAvatar() {
      return __webpack_require__.e(/*! import() | input-render-avatar */ "input-render-avatar").then(__webpack_require__.bind(null, /*! @views/pages/form/rows/sections/fields/InputRenderAvatar */ "./resources/js/src/views/pages/form/rows/sections/fields/InputRenderAvatar.vue"));
    },
    InputRenderCheckBox: function InputRenderCheckBox() {
      return __webpack_require__.e(/*! import() | input-render-checkbox */ "input-render-checkbox").then(__webpack_require__.bind(null, /*! @views/pages/form/rows/sections/fields/InputRenderCheckBox */ "./resources/js/src/views/pages/form/rows/sections/fields/InputRenderCheckBox.vue"));
    },
    InputRenderRadio: function InputRenderRadio() {
      return __webpack_require__.e(/*! import() | input-render-radio */ "input-render-radio").then(__webpack_require__.bind(null, /*! @views/pages/form/rows/sections/fields/InputRenderRadio */ "./resources/js/src/views/pages/form/rows/sections/fields/InputRenderRadio.vue"));
    },
    InputRenderDate: function InputRenderDate() {
      return Promise.all(/*! import() | input-render-date */[__webpack_require__.e("vendors~input-render-date"), __webpack_require__.e("input-render-date")]).then(__webpack_require__.bind(null, /*! @views/pages/form/rows/sections/fields/InputRenderDate */ "./resources/js/src/views/pages/form/rows/sections/fields/InputRenderDate.vue"));
    },
    InputRenderText: function InputRenderText() {
      return __webpack_require__.e(/*! import() | input-render-text */ "input-render-text").then(__webpack_require__.bind(null, /*! @views/pages/form/rows/sections/fields/InputRenderText */ "./resources/js/src/views/pages/form/rows/sections/fields/InputRenderText.vue"));
    },
    InputRenderCover: function InputRenderCover() {
      return __webpack_require__.e(/*! import() | input-render-cover */ "input-render-cover").then(__webpack_require__.bind(null, /*! @views/pages/form/rows/sections/fields/InputRenderCover */ "./resources/js/src/views/pages/form/rows/sections/fields/InputRenderCover.vue"));
    },
    InputRenderHidden: function InputRenderHidden() {
      return __webpack_require__.e(/*! import() | input-render-hidden */ "input-render-hidden").then(__webpack_require__.bind(null, /*! @views/pages/form/rows/sections/fields/InputRenderHidden */ "./resources/js/src/views/pages/form/rows/sections/fields/InputRenderHidden.vue"));
    },
    InputRenderSelect: function InputRenderSelect() {
      return __webpack_require__.e(/*! import() | input-render-select */ "input-render-select").then(__webpack_require__.bind(null, /*! @views/pages/form/rows/sections/fields/InputRenderSelect */ "./resources/js/src/views/pages/form/rows/sections/fields/InputRenderSelect.vue"));
    },
    InputRenderObjectSelect: function InputRenderObjectSelect() {
      return __webpack_require__.e(/*! import() | input-render-object-select */ "input-render-object-select").then(__webpack_require__.bind(null, /*! @views/pages/form/rows/sections/fields/InputRenderObjectSelect */ "./resources/js/src/views/pages/form/rows/sections/fields/InputRenderObjectSelect.vue"));
    },
    InputRenderQuillEditor: function InputRenderQuillEditor() {
      return Promise.all(/*! import() | input-render-quill-editor */[__webpack_require__.e("vendors~input-render-quill-editor"), __webpack_require__.e("input-render-quill-editor")]).then(__webpack_require__.bind(null, /*! @views/pages/form/rows/sections/fields/InputRenderQuillEditor */ "./resources/js/src/views/pages/form/rows/sections/fields/InputRenderQuillEditor.vue"));
    }
  },
  methods: {
    currentTabComponent: function currentTabComponent(Component) {
      return Component;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/form/rows/sections/SectionRenderFields.vue?vue&type=template&id=5d03a213&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/form/rows/sections/SectionRenderFields.vue?vue&type=template&id=5d03a213& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "vx-row" },
    [
      _vm._l(_vm.element.sections, function(item, index) {
        return [
          _c(_vm.currentTabComponent(item.type), {
            tag: "component",
            attrs: { form: _vm.form, element: item }
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

/***/ "./resources/js/src/views/pages/form/rows/sections/SectionRenderFields.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/pages/form/rows/sections/SectionRenderFields.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SectionRenderFields_vue_vue_type_template_id_5d03a213___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SectionRenderFields.vue?vue&type=template&id=5d03a213& */ "./resources/js/src/views/pages/form/rows/sections/SectionRenderFields.vue?vue&type=template&id=5d03a213&");
/* harmony import */ var _SectionRenderFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionRenderFields.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/form/rows/sections/SectionRenderFields.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SectionRenderFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SectionRenderFields_vue_vue_type_template_id_5d03a213___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SectionRenderFields_vue_vue_type_template_id_5d03a213___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/form/rows/sections/SectionRenderFields.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/form/rows/sections/SectionRenderFields.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/form/rows/sections/SectionRenderFields.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionRenderFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SectionRenderFields.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/form/rows/sections/SectionRenderFields.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionRenderFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/form/rows/sections/SectionRenderFields.vue?vue&type=template&id=5d03a213&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/form/rows/sections/SectionRenderFields.vue?vue&type=template&id=5d03a213& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionRenderFields_vue_vue_type_template_id_5d03a213___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SectionRenderFields.vue?vue&type=template&id=5d03a213& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/form/rows/sections/SectionRenderFields.vue?vue&type=template&id=5d03a213&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionRenderFields_vue_vue_type_template_id_5d03a213___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionRenderFields_vue_vue_type_template_id_5d03a213___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);