/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/auth/'

Vue.use(Router)

import users from './users'
import companies from "./companies";
import categories from "./categories";
import posts from "./posts";
import roles from "./roles";
import permissions from "./permissions";
import profile from "./profile";

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [
        {
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            path: '/admin',
            component: () => import(/* webpackChunkName: "admin.main" */'@/layouts/main/Main.vue'),
            redirect:'admin/dashboard',
            children: [
                // =============================================================================
                // Theme Routes
                // =============================================================================
                {
                    path: 'dashboard',
                    name: 'admin',
                    component: () => import(/* webpackChunkName: "admin.dashboard.home" */'@/views/Home.vue'),
                    meta:{
                        authRequired:true,
                        rule: 'editor'
                    }
                },
                ...users,
                ...companies,
                ...categories,
                ...posts,
                ...roles,
                ...permissions,
                ...profile
            ],
        },
        // =============================================================================
        // FULL PAGE LAYOUTS
        // =============================================================================
        {
            path: '/admin',
            component: () => import(/* webpackChunkName: "admin.full-page" */'@/layouts/full-page/FullPage.vue'),
            children: [
                // =============================================================================
                // PAGES
                // =============================================================================
                {
                    path: 'login',
                    name: 'admin.auth.login',
                    component: () => import(/* webpackChunkName: "admin.users.login" */'@/views/pages/Login.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
                {
                    path: 'error-404',
                    name: 'page-error-404',
                    component: () => import(/* webpackChunkName: "admin.404" */'@/views/pages/Error404.vue'),
                    meta: {
                        rule: 'editor'
                    }
                },
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/admin/error-404',
            meta: {
                rule: 'editor'
            }
        }
    ],
})

router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})

router.beforeEach((to, from, next) => {
    if(to.meta.authRequired) {
        if (!auth.isAuthenticated()) {
            router.push({ path: '/admin/login', query: { to: to.path } })
        }
    }
    else{
        if (auth.isAuthenticated()) {
            router.push({ name: 'admin' })
        }
    }

    return next()

});
export default router
