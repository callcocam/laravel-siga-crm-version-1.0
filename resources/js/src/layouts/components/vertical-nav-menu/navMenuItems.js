/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
    {
        url: "/admin/dashboard",
        name: "Home",
        slug: "home",
        icon: "HomeIcon",
    },
    {
        url: null, // You can omit this
        name: "Operational",
        slug: "admin",
        icon: "LockIcon",
        i18n: "Operational",
        submenu: [
            {
                url: "/admin/companies/listar",
                name: "Companies",
                slug: "companies",
                icon: "UserIcon",
            },
            {
                url: "/admin/users/listar",
                name: "Users",
                slug: "users",
                icon: "UserIcon",
            },
            {
                url: "/admin/permissions/listar",
                name: "Permissions",
                slug: "permissions",
                icon: "LockIcon",
            },
            {
                url: "/admin/roles/listar",
                name: "Roles",
                slug: "roles",
                icon: "LockIcon",
            },
        ]
    },
    {
        url: null, // You can omit this
        name: "Blog",
        slug: "admin",
        icon: "MessageCircleIcon",
        i18n: "Blog",
        submenu: [
            {
                url: "/admin/categories/listar",
                name: "Categories",
                slug: "categories",
                icon: "UserIcon",
            },
            {
                url: "/admin/posts/listar",
                name: "Posts",
                slug: "posts",
                icon: "UserIcon",
            },
        ]
    },
    {
        url: "/admin/auth/logout",
        name: "Logout",
        slug: "logout",
        icon: "LogOutIcon",
    },

]
