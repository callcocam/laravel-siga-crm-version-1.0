const profile = [
    {
        path: 'profile',
        name: 'admin.auth.index',
        component: () => import(/* webpackChunkName: "admin.roles.index" */'@/views/pages/Index.vue'),
        redirect:'profile/view',
        children: [
            {
                path: 'view',
                name: 'admin.auth.profile',
                component: () => import(/* webpackChunkName: "admin.auth.profile" */'@/views/pages/Profile.vue'),
                meta:{
                    authRequired:true,
                    rule: 'editor',
                    breadcrumb: [
                        { title: 'Home', url: 'home' },
                        { title: 'Profile'  },
                        { title: 'View', active: true },
                    ],
                    pageTitle: 'Profile',
                }
            },
            {
                path: 'logout',
                name: 'admin.auth.logout',
                component: () => import(/* webpackChunkName: "admin.users.logout" */'@/views/pages/Logout'),
                meta: {
                    authRequired:true,
                    rule: 'editor',
                    breadcrumb: [
                        { title: 'Home', url: 'home' },
                        { title: 'Logout'  },
                        { title: 'Off', active: true },
                    ],
                    pageTitle: 'Logout',
                }
            },

        ]
    }]
export default profile
