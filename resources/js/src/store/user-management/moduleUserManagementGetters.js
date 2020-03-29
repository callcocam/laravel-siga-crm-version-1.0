/*=========================================================================================
  File Name: moduleCalendarGetters.js
  Description: Calendar Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
    getRows: state => {
        return state.rows
    },
    getHeaders: state => {
        return state.headers
    },
    getOptions: state => {
        return state.options
    },
    getQuery: state => {
        return state.query
    },
    getActions: state => {
        return state.actions
    },
    getTitle: state => {
        if(state.title)
         return state.title

        return state.options.title
    },
    getCellRendererFramework: state => {
        return state.cellRendererFramework
    }
}
