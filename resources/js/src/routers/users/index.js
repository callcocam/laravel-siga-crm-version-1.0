const users = [
    {
        path: 'users',
        name: 'admin.users.index',
        component: () => import(/* webpackChunkName: "admin.users.index" */'@/views/pages/Index.vue'),
        redirect:'users/listar',
        children: [
            {
                path: 'listar',
                name: 'admin.users.list',
                component: () => import(/* webpackChunkName: "admin.users.list" */'@/views/pages/AbstractPages.vue'),
                meta:{
                    authRequired:true,
                    rule: 'editor',
                    breadcrumb: [
                        { title: 'Home', url: {name:'home'} },
                        { title: 'User'  },
                        { title: 'Listar', active: true },
                    ],
                    pageTitle: 'User List',
                }
            },
            {
                path: ':id/edit',
                name: 'admin.users.edit',
                component: () => import(/* webpackChunkName: "admin.users.edit" */'@/views/pages/AbstractForm.vue'),
                meta:{
                    authRequired:true,
                    rule: 'editor',
                    breadcrumb: [
                        { title: 'Home', url: {name:'home'}  },
                        { title: 'User', url:  {name:'admin.users.list'}  },
                        { title: 'Edit', active: true },
                    ],
                    pageTitle: 'User List',
                }
            },
            {
                path: ':id/show',
                name: 'admin.users.show',
                component: () => import(/* webpackChunkName: "admin.users.show" */'@/views/pages/AbstractShow.vue'),
                meta:{
                    authRequired:true,
                    rule: 'editor',
                    breadcrumb: [
                        { title: 'Home', url: {name:'home'}  },
                        { title: 'User', url:  {name:'admin.users.list'}  },
                        { title: 'Edit', active: true },
                    ],
                    pageTitle: 'User Show',
                }
            },
            {
                path: 'create',
                name: 'admin.users.create',
                component: () => import(/* webpackChunkName: "admin.users.create" */'@/views/pages/AbstractForm.vue'),
                meta:{
                    authRequired:true,
                    rule: 'editor',
                    breadcrumb: [
                        { title: 'Home', url: {name:'home'}  },
                        { title: 'Users', url:  {name:'admin.users.list'}  },
                        { title: 'Create', active: true },
                    ],
                    pageTitle: 'Users Create',
                }
            },
        ],
        meta:{
            authRequired:true,
            rule: 'editor',
            breadcrumb: [
                { title: 'Home', url: {name:'home'} },
                { title: 'User' },
                { title: 'List', active: true },
            ],
            pageTitle: 'User List',
        }
    }]
export default users
