import Home from '@/views/Home.vue';

export const appRouters = [
    {
        path:'/articleManagement',
        name:'articleManagement',
        title:'文章管理',
        icon:'ios-map-outline',
        component: Home,
        children:[
            {
                path:'index',
                name:'articleManagementIndex',
                component: articleManagement => import('@/views/article-management/articleManagement')
            }
        ]
        
    },
    {
     path:'/commentManagement',
     name:'commentManagement',
     title:'评论管理',
     icon:'md-hand',
     access:2,
     component:Home,
     children:[
        {
            path:'index',
            name:'commentManagementIndex',
            component: commentManagement => import('@/views/comment-management/comment-management')
        }
     ]
    },
    {
        path:'/aboutWriter',
        name:'aboutWriter',
        title:'作者相关',
        icon:'ios-paper-plane-outline',
        component:Home,
        children:[
            {
                path:'index',
                name:'aboutWriterIndex',
                component: aboutWriter => import('@/views/about-writer/aboutWriter')
            }
        ] 
    },
    {
        path:'/markdown-editor',
        name:'markdownEditor',
        title:'markdown编辑',
        icon:'md-brush',
        access: 1,
        component:Home,
        children:[
            {
                path:'index',
                name:'markdowEditorIndex',
                component: markdownEidtor => import('@/views/markdown-editor/markdown-editor')
            }
        ]

    }
]


export const articleDetailRouter = {
    path:"/articleDetail",
    name:'articleDetail',
    component:Home,
    children:[
        {
            path:'/index',
            name:'articleDetailIndex',
            component: articleDetail => import('@/views/article-detail/articleDetail')
        }
    ]
}

export const otherRouters = {
    path:'/',
    component:Home,
    name:'Home',
    redirect:'/articleManagement/index',
    children:[
        {
            path:'personalCenter',
            name:'personalCenter',
            title:'个人中心',
            redirect:'/personalCenter/personalInfo',
            component: personalCenter => import('@/views/personal-center/personalCenter'),
            children:[
                {
                    path:'personalInfo',
                    name:'personalInfo',
                    component: personalInfo => import('@/views/personal-center/components/personal-info/personalInfo')
                },
                {
                    path:'updateAvatar',
                    name:'updateAvatar',
                    component: updateAvatar => import('@/views/personal-center/components/update-avatar/updateAvatar')
                },
                {
                    path:'updatePassword',
                    name:'updatePassword',
                    component: updatePassword => import('@/views/personal-center/components/update-password/updatePassword')
                },
                {
                    path:'completeInfo',
                    name:'completeInfo',
                    component: completeInfo => import("@/views/personal-center/components/complete-info/completeInfo")
                },
                {
                    path:'myCollection',
                    name:"myCollection",
                    component: myCollection => import('@/views/personal-center/components/my-collection/myCollection')
                }
            ]
        }
    ]
}

