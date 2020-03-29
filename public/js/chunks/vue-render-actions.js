(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-render-actions"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/render/table/CellRenderActions.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/render/table/CellRenderActions.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CellRenderActions',
  "extends": _views_pages_render_AbstractCellRender__WEBPACK_IMPORTED_MODULE_0__["default"],
  data: function data() {
    return {
      action: null
    };
  },
  methods: {
    setFunction: function setFunction(action) {
      this.action = action;
      this[action["function"]]();
    },
    editRecord: function editRecord() {
      this.$router.push(this.action.object)["catch"](function (e) {
        console.log(e);
      });
    },
    showRecord: function showRecord() {
      this.$router.push(this.action.object)["catch"](function (e) {
        console.log(e);
      });
    },
    confirmDeleteRecord: function confirmDeleteRecord() {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "Confirm Delete",
        text: "You are about to delete",
        accept: this.deleteRecord,
        acceptText: "Delete"
      });
    },
    deleteRecord: function deleteRecord() {
      var _this = this;

      /* UnComment below lines for enabling true flow if deleting user */
      this.$store.dispatch("userManagement/removeRecord", this.action).then(function (data) {
        _this.showDeleteSuccess(data);

        _this.$router.push(data.redirect.object);
      })["catch"](function (err) {
        console.error(err);

        _this.showDeleteSuccess(err.response.data, 'danger');
      });
    },
    showDeleteSuccess: function showDeleteSuccess(data) {
      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';
      this.$vs.notify({
        color: color,
        title: data.title,
        text: data.message
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/render/table/CellRenderActions.vue?vue&type=template&id=7b7bd360&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/render/table/CellRenderActions.vue?vue&type=template&id=7b7bd360& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    [
      _vm._l(_vm.element.action, function(action, index) {
        return [
          _c("feather-icon", {
            attrs: { icon: action.icon, svgClasses: action.sgClass },
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.setFunction(action)
              }
            }
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

/***/ "./resources/js/src/views/pages/render/table/CellRenderActions.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/pages/render/table/CellRenderActions.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CellRenderActions_vue_vue_type_template_id_7b7bd360___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CellRenderActions.vue?vue&type=template&id=7b7bd360& */ "./resources/js/src/views/pages/render/table/CellRenderActions.vue?vue&type=template&id=7b7bd360&");
/* harmony import */ var _CellRenderActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CellRenderActions.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/render/table/CellRenderActions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CellRenderActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CellRenderActions_vue_vue_type_template_id_7b7bd360___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CellRenderActions_vue_vue_type_template_id_7b7bd360___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/render/table/CellRenderActions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/render/table/CellRenderActions.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/render/table/CellRenderActions.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRenderActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CellRenderActions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/render/table/CellRenderActions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRenderActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/render/table/CellRenderActions.vue?vue&type=template&id=7b7bd360&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/render/table/CellRenderActions.vue?vue&type=template&id=7b7bd360& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRenderActions_vue_vue_type_template_id_7b7bd360___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CellRenderActions.vue?vue&type=template&id=7b7bd360& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/render/table/CellRenderActions.vue?vue&type=template&id=7b7bd360&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRenderActions_vue_vue_type_template_id_7b7bd360___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRenderActions_vue_vue_type_template_id_7b7bd360___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);