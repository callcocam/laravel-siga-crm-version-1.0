<?php

return [
    'admin'=>[
        'index'=>[
            'icon'=> "ListIcon",
            'route'=> "admin.%s.index",
            'class'=>"h-5 w-5 mr-4 hover:text-primary cursor-pointer",
        ],
        'edit'=>[
            'icon'=> "Edit3Icon",
            'route'=> "admin.%s.edit",
            'class'=>"h-5 w-5 mr-4 hover:text-primary cursor-pointer",
        ],
        'show'=>[
            'function'=> "showRecord",
            'icon'=> "EyeIcon",
            'route'=> "admin.%s.show",
            'class'=>"h-5 w-5 mr-4 hover:text-primary cursor-pointer",
        ],
        'create'=>[
            'function'=> "createRecord",
            'icon'=> "PlusIcon",
            'route'=> "admin.%s.create",
            'class'=>"h-5 w-5 mr-4 hover:text-primary cursor-pointer",
        ],
        'destroy'=>[
            'function'=> "confirmDeleteRecord",
            'icon'=> "Trash2Icon",
            'route'=> "admin.%s.destroy",
            'class'=>"h-5 w-5 mr-4 hover:text-primary cursor-pointer",
        ]
    ]
];
