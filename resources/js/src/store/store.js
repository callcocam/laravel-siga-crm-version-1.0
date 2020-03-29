/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex)

import moduleAuth from './auth/moduleAuth.js'
import moduleUserManagement from "./user-management/moduleUserManagement";

export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    modules: {
        // todo: moduleTodo,
        // calendar: moduleCalendar,
        // chat: moduleChat,
        // email: moduleEmail,
        auth: moduleAuth,
        userManagement: moduleUserManagement
    },
    //strict: process.env.NODE_ENV !== 'production'
    strict:false
})
