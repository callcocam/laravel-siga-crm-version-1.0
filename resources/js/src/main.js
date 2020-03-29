/*=========================================================================================
  File Name: main.js
  Description: main vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import _ from 'lodash'
import * as moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-BR');
window._ = _
window.moment = moment
import Vue from 'vue'
import App from './App.vue'

// Vuesax Component Framework
import Vuesax from 'vuesax'

Vue.use(Vuesax)

// axios
import axios from "axios"
Vue.prototype.$http = axios

Vue.prototype.$eventHub = new Vue();

import AuthPlugin from "./plugins/auth"
Vue.use(AuthPlugin);

// ACL
import acl from './acl/acl'

Vue.mixin(require('./trans'))

// Theme Configurations
import '../themeConfig.js'


// Globally Registered Components
import './globalComponents.js'


// Vue Router
import router from './routers/router'


// Vuex Store
import store from './store/store'

// i18n
import i18n from './i18n/i18n'

// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)


// PrismJS
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'


// Vue select css
// Note: In latest version you have to add it separately
// import 'vue-select/dist/vue-select.css';


Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n,
    acl,
    render: h => h(App)
}).$mount('#app')
