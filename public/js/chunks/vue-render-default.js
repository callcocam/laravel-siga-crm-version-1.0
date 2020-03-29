(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-render-default"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/render/show/ShowRenderDefault.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/render/show/ShowRenderDefault.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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
  name: "ShowRenderDefault",
  "extends": _views_pages_render_AbstractCellRender__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/render/show/ShowRenderDefault.vue?vue&type=template&id=d78bc2e0&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/render/show/ShowRenderDefault.vue?vue&type=template&id=d78bc2e0&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "mt-base", attrs: { "no-shadow": "", "card-border": "" } },
    [
      _c("div", { staticClass: "vx-row" }, [
        _c(
          "div",
          { staticClass: "vx-col w-full" },
          [
            _c("vs-navbar", { staticClass: "nabarx" }, [
              _c("div", { attrs: { slot: "title" }, slot: "title" }, [
                _c(
                  "span",
                  { staticClass: "font-medium text-lg leading-none" },
                  [_vm._v(_vm._s(_vm.usersTitle))]
                )
              ])
            ]),
            _vm._v(" "),
            _c("vs-divider")
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.data
        ? _c("div", { staticClass: "block overflow-x-auto" }, [
            _c(
              "table",
              { staticClass: "w-full" },
              [
                _vm._l(_vm.headers, function(header, item_index) {
                  return [
                    header.hidden_show
                      ? [
                          _c("tr", { key: item_index }, [
                            _c("td", { staticClass: "font-semibold" }, [
                              _vm._v(_vm._s(header.name))
                            ]),
                            _vm._v(" "),
                            header.cellRendererFramework
                              ? _c(
                                  "td",
                                  { staticClass: "font-semibold" },
                                  [
                                    _c(
                                      _vm.currentTabComponent(
                                        header.cellRendererFramework
                                      ),
                                      {
                                        tag: "component",
                                        attrs: {
                                          element: _vm.data,
                                          headers: header
                                        }
                                      }
                                    )
                                  ],
                                  1
                                )
                              : _c("td", [
                                  _vm._v(_vm._s(_vm.data[header.name]))
                                ])
                          ])
                        ]
                      : _vm._e()
                  ]
                })
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "vx-col w-full flex",
                attrs: { id: "account-manage-buttons" }
              },
              [
                _c(
                  "vs-button",
                  {
                    staticClass: "mr-4",
                    attrs: {
                      "icon-pack": "feather",
                      to: _vm.data.action.edit.object,
                      icon: "icon-edit"
                    }
                  },
                  [_vm._v(_vm._s(_vm.$t("Edit")))]
                ),
                _vm._v(" "),
                _c(
                  "vs-button",
                  {
                    staticClass: "mr-4",
                    attrs: {
                      type: "border",
                      color: "danger",
                      "icon-pack": "feather",
                      icon: "icon-trash"
                    },
                    on: { click: _vm.confirmDeleteRecord }
                  },
                  [_vm._v(_vm._s(_vm.$t("Delete")))]
                ),
                _vm._v(" "),
                _c(
                  "vs-button",
                  {
                    attrs: {
                      "icon-pack": "feather",
                      color: "warning",
                      to: _vm.usersOptions.redirect.object,
                      icon: "icon-list"
                    }
                  },
                  [_vm._v(_vm._s(_vm.$t("Back")))]
                )
              ],
              1
            )
          ])
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/render/show/ShowRenderDefault.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/pages/render/show/ShowRenderDefault.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShowRenderDefault_vue_vue_type_template_id_d78bc2e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowRenderDefault.vue?vue&type=template&id=d78bc2e0&scoped=true& */ "./resources/js/src/views/pages/render/show/ShowRenderDefault.vue?vue&type=template&id=d78bc2e0&scoped=true&");
/* harmony import */ var _ShowRenderDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowRenderDefault.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/render/show/ShowRenderDefault.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShowRenderDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowRenderDefault_vue_vue_type_template_id_d78bc2e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShowRenderDefault_vue_vue_type_template_id_d78bc2e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d78bc2e0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/render/show/ShowRenderDefault.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/render/show/ShowRenderDefault.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/render/show/ShowRenderDefault.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowRenderDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowRenderDefault.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/render/show/ShowRenderDefault.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowRenderDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/render/show/ShowRenderDefault.vue?vue&type=template&id=d78bc2e0&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/render/show/ShowRenderDefault.vue?vue&type=template&id=d78bc2e0&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowRenderDefault_vue_vue_type_template_id_d78bc2e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowRenderDefault.vue?vue&type=template&id=d78bc2e0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/render/show/ShowRenderDefault.vue?vue&type=template&id=d78bc2e0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowRenderDefault_vue_vue_type_template_id_d78bc2e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowRenderDefault_vue_vue_type_template_id_d78bc2e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);