/*=========================================================================================
  File Name: moduleAuthActions.js
  Description: Auth Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from "@/http/axios/"

import router from '@/routers/router'

export default {
    // JWT
    loginJWT({ commit }, data) {
        localStorage.setItem("accessToken", data.accessToken)
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('tokenExpiry', new Date(data.exp * 1000).toString());
        // Update user details
        commit('UPDATE_USER_INFO', data.userData, {root: true})
        // Set bearer token in axios
        commit("SET_BEARER", data.accessToken)
        // Navigate User to homepage
        router.push(router.currentRoute.query.to || {name:'admin'})
    },
    fetchAccessToken() {
        return new Promise((resolve) => {
            axios.post("/api/v1/admin/refresh", {accessToken: localStorage.getItem("accessToKen")}).then(response => { resolve(response) })
        })
    }
}
