const categories = [
    {
        path: 'categories',
        name: 'admin.categories.index',
        component: () => import(/* webpackChunkName: "admin.categories.index" */'@/views/pages/Index'),
        redirect:'categories/listar',
        children: [
            {
                path: 'listar',
                name: 'admin.categories.list',
                component: () => import(/* webpackChunkName: "admin.categories.list" */'@/views/pages/AbstractPages'),
                meta:{
                    authRequired:true,
                    rule: 'editor',
                    breadcrumb: [
                        { title: 'Home', url: 'home' },
                        { title: 'Category'  },
                        { title: 'Listar', active: true },
                    ],
                    pageTitle: 'Category List',
                }
            },
            {
                path: ':id/edit',
                name: 'admin.categories.edit',
                component: () => import(/* webpackChunkName: "admin.categories.edit" */'@/views/pages/AbstractForm'),
                meta:{
                    authRequired:true,
                    rule: 'editor',
                    breadcrumb: [
                        { title: 'Home', url: 'home' },
                        { title: 'Category', url:  {name:'admin.categories.list'} },
                        { title: 'Edit', active: true },
                    ],
                    pageTitle: 'Category List',
                }
            },
            {
                path: ':id/show',
                name: 'admin.categories.show',
                component: () => import(/* webpackChunkName: "admin.categories.show" */'@/views/pages/AbstractShow'),
                meta:{
                    authRequired:true,
                    rule: 'editor',
                    breadcrumb: [
                        { title: 'Home', url: {name:'home'}  },
                        { title: 'Categories', url:  {name:'admin.categories.list'}  },
                        { title: 'Edit', active: true },
                    ],
                    pageTitle: 'Categories Show',
                }
            },
            {
                path: 'create',
                name: 'admin.categories.create',
                component: () => import(/* webpackChunkName: "admin.categories.create" */'@/views/pages/AbstractForm'),
                meta:{
                    authRequired:true,
                    rule: 'editor',
                    breadcrumb: [
                        { title: 'Home', url: {name:'home'}  },
                        { title: 'Categories', url:  {name:'admin.categories.list'}  },
                        { title: 'Create', active: true },
                    ],
                    pageTitle: 'Categories Create',
                }
            },
        ]
    }]
export default categories
