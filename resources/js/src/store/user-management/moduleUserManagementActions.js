/*=========================================================================================
  File Name: moduleCalendarActions.js
  Description: Calendar Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from "@/http/axios/"
export default {
    all({ commit }, data) {
        commit('SET_DATA', [])
        commit('SET_HEADER',[])
        commit('SET_ACTIONS',[])
        commit('SET_QUERY',[])
        commit('SET_OPTIONS',[])
        const {path, query} = data

        return new Promise((resolve, reject) => {
            axios.get(`/api/v1${path.replace('/listar','')}`, {
                params:query
            }).then((response) => {
                commit('SET_DATA', response.data);
                commit('SET_HEADER', response.data);
                commit('SET_ACTIONS', response.data);
                commit('SET_QUERY', response.data);
                commit('SET_OPTIONS', response.data);

                    resolve(response)
                })
                .catch((error) => { reject(error) })
        })
    },
    find({commit}, data) {
        commit('SET_DATA', [])
        commit('SET_HEADER', [])
        commit('SET_TITLE', [])
        commit('SET_OPTIONS', [])
        commit('SET_ACTIONS', [])
        const {path, query} = data

        return new Promise((resolve, reject) => {
            axios.get(`/api/v1${path.replace('/show','')}`, {
                params:query
            }).then((response) => {

                commit('SET_DATA', response.data);
                commit('SET_HEADER', response.data);
                commit('SET_TITLE', response.data);
                commit('SET_OPTIONS', response.data);
                commit('SET_ACTIONS', response.data);
                commit('SET_CELLRENDERFRAMEWORK', response.data);

                resolve(response)
            })
                .catch((error) => { reject(error) })
        })
    },
    profileJWT({ commit },data) {
        commit('SET_DATA', [])
        commit('SET_HEADER', [])
        return new Promise((resolve) => {
            axios.get("/api/v1/admin/profile").then(response => {
                commit('SET_DATA', response.data);
                commit('SET_HEADER', response.data);
                commit('SET_TITLE', response.data);
                commit('SET_CELLRENDERFRAMEWORK', response.data);
                resolve(response)
            })
        })
    },
    removeRecord({ commit }, data) {
        const {api, id} = data
        return new Promise((resolve, reject) => {
            axios.delete(api)
                .then((response) => {
                    commit('REMOVE_RECORD', id)
                    resolve(response.data)
                })
                .catch((error) => { reject(error) })
        })
    }
}
