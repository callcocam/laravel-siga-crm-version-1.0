const posts = [
    {
        path: 'posts',
        name: 'admin.posts.index',
        component: () => import(/* webpackChunkName: "admin.post.index" */'@/views/pages/Index.vue'),
        redirect:'posts/listar',
        children: [
            {
                path: 'listar',
                name: 'admin.posts.list',
                component: () => import(/* webpackChunkName: "admin.post.list" */'@/views/pages/AbstractPages.vue'),
                meta:{
                    authRequired:true,
                    rule: 'editor',
                    breadcrumb: [
                        { title: 'Home', url: 'home' },
                        { title: 'Post'  },
                        { title: 'Listar', active: true },
                    ],
                    pageTitle: 'Post List',
                }
            },
            {
                path: ':id/edit',
                name: 'admin.posts.edit',
                component: () => import(/* webpackChunkName: "admin.post.edit" */'@/views/pages/AbstractForm.vue'),
                meta:{
                    authRequired:true,
                    rule: 'editor',
                    breadcrumb: [
                        { title: 'Home', url: 'home' },
                        { title: 'Post', url:  {name:'admin.posts.list'} },
                        { title: 'Edit', active: true },
                    ],
                    pageTitle: 'Post List',
                }
            },
            {
                path: ':id/show',
                name: 'admin.posts.show',
                component: () => import(/* webpackChunkName: "admin.post.show" */'@/views/pages/AbstractShow.vue'),
                meta:{
                    authRequired:true,
                    rule: 'editor',
                    breadcrumb: [
                        { title: 'Home', url: {name:'home'}  },
                        { title: 'Posts', url:  {name:'admin.posts.list'}  },
                        { title: 'Edit', active: true },
                    ],
                    pageTitle: 'Post Show',
                }
            },
            {
                path: 'create',
                name: 'admin.posts.create',
                component: () => import(/* webpackChunkName: "admin.posts.create" */'@/views/pages/AbstractForm.vue'),
                meta:{
                    authRequired:true,
                    rule: 'editor',
                    breadcrumb: [
                        { title: 'Home', url: {name:'home'}  },
                        { title: 'Categories', url:  {name:'admin.posts.list'}  },
                        { title: 'Create', active: true },
                    ],
                    pageTitle: 'Categories Create',
                }
            },
        ],
        meta:{
            authRequired:true,
            rule: 'editor',
            breadcrumb: [
                { title: 'Home', url: 'home' },
                { title: 'Post' },
                { title: 'List', active: true },
            ],
            pageTitle: 'Post List',
        }
    }]
export default posts
