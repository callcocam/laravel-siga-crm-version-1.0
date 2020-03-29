const roles = [
    {
        path: 'roles',
        name: 'admin.roles.index',
        component: () => import(/* webpackChunkName: "admin.roles.index" */'@/views/pages/Index.vue'),
        redirect:'roles/listar',
        children: [
            {
                path: 'listar',
                name: 'admin.roles.list',
                component: () => import(/* webpackChunkName: "admin.roles.list" */'@/views/pages/AbstractPages.vue'),
                meta:{
                    authRequired:true,
                    rule: 'editor',
                    breadcrumb: [
                        { title: 'Home', url: 'home' },
                        { title: 'Role'  },
                        { title: 'Listar', active: true },
                    ],
                    pageTitle: 'Role List',
                }
            },
            {
                path: ':id/edit',
                name: 'admin.roles.edit',
                component: () => import(/* webpackChunkName: "admin.roles.edit" */'@/views/pages/AbstractForm.vue'),
                meta:{
                    authRequired:true,
                    rule: 'editor',
                    breadcrumb: [
                        { title: 'Home', url: 'home' },
                        { title: 'Role', url:  {name:'admin.roles.list'} },
                        { title: 'Edit', active: true },
                    ],
                    pageTitle: 'Role List',
                }
            },
            {
                path: ':id/show',
                name: 'admin.roles.show',
                component: () => import(/* webpackChunkName: "admin.roles.show" */'@/views/pages/AbstractShow.vue'),
                meta:{
                    authRequired:true,
                    rule: 'editor',
                    breadcrumb: [
                        { title: 'Home', url: {name:'home'}  },
                        { title: 'Roles', url:  {name:'admin.roles.list'}  },
                        { title: 'Edit', active: true },
                    ],
                    pageTitle: 'Roles Show',
                }
            },
            {
                path: 'create',
                name: 'admin.roles.create',
                component: () => import(/* webpackChunkName: "admin.roles.create" */'@/views/pages/AbstractForm.vue'),
                meta:{
                    authRequired:true,
                    rule: 'editor',
                    breadcrumb: [
                        { title: 'Home', url: {name:'home'}  },
                        { title: 'Roles', url:  {name:'admin.roles.list'}  },
                        { title: 'Create', active: true },
                    ],
                    pageTitle: 'Roles Create',
                }
            },
        ],
        meta:{
            authRequired:true,
            rule: 'editor',
            breadcrumb: [
                { title: 'Home', url: 'home' },
                { title: 'Role' },
                { title: 'List', active: true },
            ],
            pageTitle: 'Role List',
        }
    }]
export default roles
