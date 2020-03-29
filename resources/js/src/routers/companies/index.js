const companies = [
    {
        path: 'companies',
        name: 'admin.companies.index',
        component: () => import(/* webpackChunkName: "admin.companies.index" */'@/views/pages/Index.vue'),
        redirect:'companies/listar',
        children: [
            {
                path: 'listar',
                name: 'admin.companies.list',
                component: () => import(/* webpackChunkName: "admin.companies.list" */'@/views/pages/AbstractPages.vue'),
                meta:{
                    authRequired:true,
                    rule: 'editor',
                    breadcrumb: [
                        { title: 'Home', url: 'home' },
                        { title: 'Company'  },
                        { title: 'Listar', active: true },
                    ],
                    pageTitle: 'Company List',
                }
            },
            {
                path: ':id/edit',
                name: 'admin.companies.edit',
                component: () => import(/* webpackChunkName: "admin.companies.edit" */'@/views/pages/AbstractForm.vue'),
                meta:{
                    authRequired:true,
                    rule: 'editor',
                    breadcrumb: [
                        { title: 'Home', url: 'home' },
                        { title: 'Company', url:  {name:'admin.companies.edit'} },
                        { title: 'Edit', active: true },
                    ],
                    pageTitle: 'Company List',
                }
            },
            {
                path: ':id/show',
                name: 'admin.companies.show',
                component: () => import(/* webpackChunkName: "admin.companies.show" */'@/views/pages/AbstractShow.vue'),
                meta:{
                    authRequired:true,
                    rule: 'editor',
                    breadcrumb: [
                        { title: 'Home', url: {name:'home'}  },
                        { title: 'Companies', url:  {name:'admin.companies.list'}  },
                        { title: 'Edit', active: true },
                    ],
                    pageTitle: 'Companies Show',
                }
            },
            {
                path: 'create',
                name: 'admin.companies.create',
                component: () => import(/* webpackChunkName: "admin.companies.create" */'@/views/pages/AbstractForm.vue'),
                meta:{
                    authRequired:true,
                    rule: 'editor',
                    breadcrumb: [
                        { title: 'Home', url: {name:'home'}  },
                        { title: 'Companys', url:  {name:'admin.companies.list'}  },
                        { title: 'Create', active: true },
                    ],
                    pageTitle: 'Companys Create',
                }
            },
        ],
        meta:{
            authRequired:true,
            rule: 'editor',
            breadcrumb: [
                { title: 'Home', url: 'home' },
                { title: 'Company' },
                { title: 'List', active: true },
            ],
            pageTitle: 'Company List',
        }
    }]
export default companies
