(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["section-render-fielads"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/form/rows/RowRenderDefault.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/form/rows/RowRenderDefault.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
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
 // import { EventBus } from '@/plugins/event-bus.js';

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "RowRenderDefault",
  props: ['element'],
  data: function data() {
    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_0__["Form"]({})
    };
  },
  components: {
    SectionRenderFields: function SectionRenderFields() {
      return __webpack_require__.e(/*! import() | input-render-actions */ "input-render-actions").then(__webpack_require__.bind(null, /*! @views/pages/form/rows/sections/SectionRenderFields */ "./resources/js/src/views/pages/form/rows/sections/SectionRenderFields.vue"));
    },
    SectionRenderActions: function SectionRenderActions() {
      return __webpack_require__.e(/*! import() | input-render-actions */ "input-render-actions").then(__webpack_require__.bind(null, /*! @views/pages/form/rows/sections/SectionRenderActions */ "./resources/js/src/views/pages/form/rows/sections/SectionRenderActions.vue"));
    },
    SectionRenderPermissions: function SectionRenderPermissions() {
      return __webpack_require__.e(/*! import() | input-render-actions */ "input-render-actions").then(__webpack_require__.bind(null, /*! @views/pages/form/rows/sections/SectionRenderPermissions */ "./resources/js/src/views/pages/form/rows/sections/SectionRenderPermissions.vue"));
    }
  },
  methods: {
    setFom: function setFom(item) {
      var _this = this;

      if (item) {
        if (item.sections) {
          Object.values(item.sections).map(function (value) {
            if (value.type) {
              _this.form[value.name] = value.value;
            }
          });
        }
      }

      return item;
    },
    currentTabComponent: function currentTabComponent(Component) {
      return Component;
    },
    auto_save: function auto_save() {
      this.$refs.vuaxyForm.submit();
    },
    save_changes: function save_changes() {
      var _this2 = this;

      if (!this.element.route) {
        this.$vs.notify({
          color: 'danger',
          title: 'Opss!!',
          text: 'Nenhuma rota valida foi passada, para enviar a requisição!!'
        });
        return;
      }

      var path = this.element.route.path; // EventBus.$off('changeFile',()=>{});

      this.loading = false;
      this.openLoadingInDiv();
      this.form.post(path).then(function (_ref) {
        var data = _ref.data;

        _this2.$vs.notify({
          color: 'success',
          title: data.title,
          text: data.text
        });

        _this2.$vs.loading.close('#div-with-loading > .con-vs-loading');

        _this2.loading = true;

        if (!_this2.$route.params.id) {
          if (data.redirect) {
            _this2.$router.push(data.redirect.object);
          }
        }
      })["catch"](function (err) {
        _this2.loading = true;

        _this2.$vs.loading.close('#div-with-loading > .con-vs-loading');
      });
    },
    openLoadingContained: function openLoadingContained() {
      this.$vs.loading({
        background: this.backgroundLoading,
        color: this.colorLoading,
        container: "#button-with-loading",
        scale: 0.45
      });
    },
    openLoadingInDiv: function openLoadingInDiv() {
      this.$vs.loading({
        container: '#div-with-loading',
        scale: 0.6
      });
    }
  },
  mounted: function mounted() {//EventBus.$on('changeFile', data=>{
    //     this.save_changes()
    //  });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/form/rows/RowRenderDefault.vue?vue&type=template&id=f125c55e&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/form/rows/RowRenderDefault.vue?vue&type=template&id=f125c55e& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "vs-con-loading__container",
      attrs: { id: "div-with-loading" }
    },
    [
      _c(
        "form",
        {
          ref: "vuaxyForm",
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.save_changes($event)
            },
            keydown: function($event) {
              return _vm.form.onKeydown($event)
            }
          }
        },
        [
          _vm._l(_vm.element.rows, function(item, index) {
            return [
              _c(_vm.currentTabComponent(item.name), {
                tag: "component",
                attrs: { form: _vm.form, element: _vm.setFom(item) }
              })
            ]
          }),
          _vm._v(" "),
          _vm.element.route
            ? _c("SectionRenderActions", {
                attrs: { form: _vm.form, element: _vm.element }
              })
            : _vm._e()
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/form/rows/RowRenderDefault.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/pages/form/rows/RowRenderDefault.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RowRenderDefault_vue_vue_type_template_id_f125c55e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RowRenderDefault.vue?vue&type=template&id=f125c55e& */ "./resources/js/src/views/pages/form/rows/RowRenderDefault.vue?vue&type=template&id=f125c55e&");
/* harmony import */ var _RowRenderDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RowRenderDefault.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/form/rows/RowRenderDefault.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RowRenderDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RowRenderDefault_vue_vue_type_template_id_f125c55e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RowRenderDefault_vue_vue_type_template_id_f125c55e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/form/rows/RowRenderDefault.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/form/rows/RowRenderDefault.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/form/rows/RowRenderDefault.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RowRenderDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RowRenderDefault.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/form/rows/RowRenderDefault.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RowRenderDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/form/rows/RowRenderDefault.vue?vue&type=template&id=f125c55e&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/form/rows/RowRenderDefault.vue?vue&type=template&id=f125c55e& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RowRenderDefault_vue_vue_type_template_id_f125c55e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RowRenderDefault.vue?vue&type=template&id=f125c55e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/form/rows/RowRenderDefault.vue?vue&type=template&id=f125c55e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RowRenderDefault_vue_vue_type_template_id_f125c55e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RowRenderDefault_vue_vue_type_template_id_f125c55e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);