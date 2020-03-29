(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-render-table-filter-master-detail"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/render/table/MasterDetailRender.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/render/table/MasterDetailRender.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_pages_AbstractTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @views/pages/AbstractTemplate */ "./resources/js/src/views/pages/AbstractTemplate.vue");
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
  name: "MasterDetailRender",
  "extends": _views_pages_AbstractTemplate__WEBPACK_IMPORTED_MODULE_0__["default"],
  props: {
    rows: {
      type: [Array, Object],
      "default": null
    },
    headers: {
      type: [Array, Object],
      "default": null
    }
  },
  methods: {
    currentTabComponent: function currentTabComponent(Component) {
      return Component;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/render/table/MasterDetailRender.vue?vue&type=template&id=5213fc3e&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/render/table/MasterDetailRender.vue?vue&type=template&id=5213fc3e&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "con-expand-users w-full" },
    [
      _vm.headers.cover
        ? [
            _c(
              "div",
              {
                staticClass: "con-btns-user flex items-center justify-between"
              },
              [
                _c(
                  "div",
                  { staticClass: "con-userx flex items-center justify-start" },
                  [
                    _c("vs-avatar", {
                      attrs: {
                        badge: _vm.rows.id,
                        size: "45px",
                        src: _vm.rows.cover
                      }
                    }),
                    _vm._v(" "),
                    _vm.rows.name
                      ? [_c("span", [_vm._v(_vm._s(_vm.rows.name))])]
                      : _vm._e()
                  ],
                  2
                )
              ]
            )
          ]
        : _vm._e(),
      _vm._v(" "),
      _c(
        "vs-list",
        [
          _vm._l(_vm.headers, function(header, index) {
            return [
              header.hidden_detail
                ? [
                    header.cellRendererFramework
                      ? [
                          _c(
                            "vs-list-item",
                            {
                              key: index,
                              attrs: {
                                "icon-pack": "feather",
                                icon: header.icone,
                                title: header.label
                              }
                            },
                            [
                              _c(
                                _vm.currentTabComponent(
                                  header.cellRendererFramework
                                ),
                                {
                                  tag: "component",
                                  attrs: {
                                    element: _vm.rows,
                                    row: _vm.rows,
                                    headers: header,
                                    header: header
                                  }
                                }
                              )
                            ],
                            1
                          )
                        ]
                      : [
                          _vm.rows[header.name] == typeof "string"
                            ? [
                                _c("vs-list-item", {
                                  key: index,
                                  attrs: {
                                    "icon-pack": "feather",
                                    icon: header.icone,
                                    title: header.label,
                                    subtitle: _vm.rows[header.name]
                                  }
                                })
                              ]
                            : _vm._e()
                        ]
                  ]
                : _vm._e()
            ]
          })
        ],
        2
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/render/table/MasterDetailRender.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/pages/render/table/MasterDetailRender.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MasterDetailRender_vue_vue_type_template_id_5213fc3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MasterDetailRender.vue?vue&type=template&id=5213fc3e&scoped=true& */ "./resources/js/src/views/pages/render/table/MasterDetailRender.vue?vue&type=template&id=5213fc3e&scoped=true&");
/* harmony import */ var _MasterDetailRender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MasterDetailRender.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/render/table/MasterDetailRender.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MasterDetailRender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MasterDetailRender_vue_vue_type_template_id_5213fc3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MasterDetailRender_vue_vue_type_template_id_5213fc3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5213fc3e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/render/table/MasterDetailRender.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/render/table/MasterDetailRender.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/render/table/MasterDetailRender.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MasterDetailRender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MasterDetailRender.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/render/table/MasterDetailRender.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MasterDetailRender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/render/table/MasterDetailRender.vue?vue&type=template&id=5213fc3e&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/render/table/MasterDetailRender.vue?vue&type=template&id=5213fc3e&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MasterDetailRender_vue_vue_type_template_id_5213fc3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MasterDetailRender.vue?vue&type=template&id=5213fc3e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/render/table/MasterDetailRender.vue?vue&type=template&id=5213fc3e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MasterDetailRender_vue_vue_type_template_id_5213fc3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MasterDetailRender_vue_vue_type_template_id_5213fc3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);