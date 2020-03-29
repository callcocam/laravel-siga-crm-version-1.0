(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["input-render-cover"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/form/rows/sections/fields/InputRenderCover.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/form/rows/sections/fields/InputRenderCover.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AbstractField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractField */ "./resources/js/src/views/pages/form/rows/sections/fields/AbstractField.vue");
/* harmony import */ var object_to_formdata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! object-to-formdata */ "./node_modules/object-to-formdata/dist/index.mjs");
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

 //import { EventBus } from '@/plugins/event-bus.js';

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "InputRenderCover",
  "extends": _AbstractField__WEBPACK_IMPORTED_MODULE_0__["default"],
  methods: {
    remove_file: function remove_file() {
      var _this = this;

      this.form.file = this.element.value;
      this.form.submit('post', this.element.route.remove).then(function (_ref) {
        var data = _ref.data;
        _this.element.value = data.path; ///EventBus.$emit('changeFile', data.path);
        //this.$eventHub.$emit('change-file', data.path);
      });
    },
    confirmDeleteRecord: function confirmDeleteRecord() {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "Por favor confirme",
        text: "Deseja realmente excluir a imagem \"".concat(this.element.value, "\""),
        accept: this.remove_file,
        acceptText: "Excluir"
      });
    },
    update_avatar: function update_avatar(e) {
      var _this2 = this;

      var file = e.target.files[0];
      this.form.file = file;
      this.form.submit('post', this.element.route.upload, {
        // Transform form data to FormData
        transformRequest: [function (data, headers) {
          return Object(object_to_formdata__WEBPACK_IMPORTED_MODULE_1__["objectToFormData"])(data);
        }],
        onUploadProgress: function onUploadProgress(e) {}
      }).then(function (_ref2) {
        var data = _ref2.data;
        _this2.element.value = data.path; //EventBus.$emit('changeFile', data.path);
        //this.$eventHub.$emit('change-file', data.path);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/object-to-formdata/dist/index.mjs":
/*!********************************************************!*\
  !*** ./node_modules/object-to-formdata/dist/index.mjs ***!
  \********************************************************/
/*! exports provided: objectToFormData */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectToFormData", function() { return s; });
var n=function(n){return void 0===n},e=function(n){return Array.isArray(n)},t=function(n){return n&&"number"==typeof n.size&&"string"==typeof n.type&&"function"==typeof n.slice},s=function(o,i,r,f){return(i=i||{}).indices=!n(i.indices)&&i.indices,i.nullsAsUndefineds=!n(i.nullsAsUndefineds)&&i.nullsAsUndefineds,i.booleansAsIntegers=!n(i.booleansAsIntegers)&&i.booleansAsIntegers,r=r||new FormData,n(o)?r:(null===o?i.nullsAsUndefineds||r.append(f,""):"boolean"!=typeof o?e(o)?o.length&&o.forEach(function(n,e){s(n,i,r,f+"["+(i.indices?e:"")+"]")}):o instanceof Date?r.append(f,o.toISOString()):o!==Object(o)||function(n){return t(n)&&"string"==typeof n.name&&("object"==typeof n.lastModifiedDate||"number"==typeof n.lastModified)}(o)||t(o)?r.append(f,o):Object.keys(o).forEach(function(n){var t=o[n];if(e(t))for(;n.length>2&&n.lastIndexOf("[]")===n.length-2;)n=n.substring(0,n.length-2);s(t,i,r,f?f+"["+n+"]":n)}):r.append(f,i.booleansAsIntegers?o?1:0:o),r)};
//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/form/rows/sections/fields/InputRenderCover.vue?vue&type=template&id=7c5c5de8&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/form/rows/sections/fields/InputRenderCover.vue?vue&type=template&id=7c5c5de8&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
      this.element.route
        ? _c(
            "div",
            { staticClass: "mt-6" },
            [
              _c("input", {
                ref: "update_avatar_input",
                staticClass: "hidden",
                attrs: { type: "file", accept: "image/*" },
                on: { change: _vm.update_avatar }
              }),
              _vm._v(" "),
              _c(
                "vs-button",
                {
                  staticClass: "mr-4",
                  attrs: { type: "border" },
                  on: {
                    click: function($event) {
                      return _vm.$refs.update_avatar_input.click()
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.__("Change Avatar")))]
              ),
              _vm._v(" "),
              this.element.route.remove
                ? _c(
                    "vs-button",
                    {
                      attrs: { type: "border", color: "danger" },
                      on: {
                        click: function($event) {
                          return _vm.confirmDeleteRecord()
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.__("Remove Avatar")))]
                  )
                : _vm._e()
            ],
            1
          )
        : _vm._e()
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

/***/ "./resources/js/src/views/pages/form/rows/sections/fields/InputRenderCover.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/pages/form/rows/sections/fields/InputRenderCover.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputRenderCover_vue_vue_type_template_id_7c5c5de8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputRenderCover.vue?vue&type=template&id=7c5c5de8&scoped=true& */ "./resources/js/src/views/pages/form/rows/sections/fields/InputRenderCover.vue?vue&type=template&id=7c5c5de8&scoped=true&");
/* harmony import */ var _InputRenderCover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputRenderCover.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/form/rows/sections/fields/InputRenderCover.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InputRenderCover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InputRenderCover_vue_vue_type_template_id_7c5c5de8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InputRenderCover_vue_vue_type_template_id_7c5c5de8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7c5c5de8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/form/rows/sections/fields/InputRenderCover.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/form/rows/sections/fields/InputRenderCover.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/form/rows/sections/fields/InputRenderCover.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputRenderCover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InputRenderCover.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/form/rows/sections/fields/InputRenderCover.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputRenderCover_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/form/rows/sections/fields/InputRenderCover.vue?vue&type=template&id=7c5c5de8&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/form/rows/sections/fields/InputRenderCover.vue?vue&type=template&id=7c5c5de8&scoped=true& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputRenderCover_vue_vue_type_template_id_7c5c5de8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./InputRenderCover.vue?vue&type=template&id=7c5c5de8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/form/rows/sections/fields/InputRenderCover.vue?vue&type=template&id=7c5c5de8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputRenderCover_vue_vue_type_template_id_7c5c5de8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputRenderCover_vue_vue_type_template_id_7c5c5de8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);