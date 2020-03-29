/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
    SET_DATA(state, data) {
        console.log(data)
        state.rows = data.rows
    },
    SET_HEADER(state, data) {
        state.headers = data.headers
    },
    SET_ACTIONS(state, data) {
        state.actions = data.actions
    },
    SET_QUERY(state, data) {
        state.query = data.query
    },
    SET_OPTIONS(state, data) {
        state.options = data.options
    },
    SET_TITLE(state, data) {
        state.title = data.title
    },
    SET_CELLRENDERFRAMEWORK(state, data) {
        state.cellRendererFramework = data.cellRendererFramework
    },
    REMOVE_RECORD(state, itemId) {
        const userIndex = state.rows.findIndex((u) => u.id == itemId)
        state.rows.splice(userIndex, 1)
    },
}
