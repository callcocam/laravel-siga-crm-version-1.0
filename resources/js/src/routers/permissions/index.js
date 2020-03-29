const permissions = [
    {
        path: 'permissions',
        name: 'admin.permissions.index',
        component: () => import(/* webpackChunkName: "admin.permissions.index" */'@/views/pages/Index.vue'),
        redirect:'permissions/listar',
        children: [
            {
                path: 'listar',
                name: 'admin.permissions.list',
                component: () => import(/* webpackChunkName: "admin.permissions.list" */'@/views/pages/AbstractPages.vue'),
                meta:{
                    authRequired:true,
                    rule: 'editor',
                    breadcrumb: [
                        { title: 'Home', url: 'home' },
                        { title: 'Permission'  },
                        { title: 'Listar', active: true },
                    ],
                    pageTitle: 'Permission List',
                }
            },
            {
                path: ':id/edit',
                name: 'admin.permissions.edit',
                component: () => import(/* webpackChunkName: "admin.permissions.edit" */'@/views/pages/AbstractForm.vue'),
                meta:{
                    authRequired:true,
                    rule: 'editor',
                    breadcrumb: [
                        { title: 'Home', url: 'home' },
                        { title: 'Permission', url:  {name:'admin.permissions.list'} },
                        { title: 'Edit', active: true },
                    ],
                    pageTitle: 'Permission List',
                }
            },
            {
                path: ':id/show',
                name: 'admin.permissions.show',
                component: () => import(/* webpackChunkName: "admin.permissions.show" */'@/views/pages/AbstractShow.vue'),
                meta:{
                    authRequired:true,
                    rule: 'editor',
                    breadcrumb: [
                        { title: 'Home', url: {name:'home'}  },
                        { title: 'Permissions', url:  {name:'admin.permissions.list'}  },
                        { title: 'Edit', active: true },
                    ],
                    pageTitle: 'Permissions Show',
                }
            },
            {
                path: 'create',
                name: 'admin.permissions.create',
                component: () => import(/* webpackChunkName: "admin.permissions.create" */'@/views/pages/AbstractForm.vue'),
                meta:{
                    authRequired:true,
                    rule: 'editor',
                    breadcrumb: [
                        { title: 'Home', url: {name:'home'}  },
                        { title: 'Permissions', url:  {name:'admin.permissions.list'}  },
                        { title: 'Create', active: true },
                    ],
                    pageTitle: 'Permissions Create',
                }
            },
        ],
        meta:{
            authRequired:true,
            rule: 'editor',
            breadcrumb: [
                { title: 'Home', url: 'home' },
                { title: 'Permission' },
                { title: 'List', active: true },
            ],
            pageTitle: 'Permission List',
        }
    }]
export default permissions
