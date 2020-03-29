export default function (meta) {
    return [
        {
            authRequired:meta.required,
            rule: 'editor',
            breadcrumb: [
                { title: 'Home', url: {name:'home'}  },
                { title: meta.title, url:  {name:meta.url}  },
                { title: 'Edit', active: true },
            ],
            pageTitle: meta.pageTitle,
        }
    ]
}
