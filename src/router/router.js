import Home from '@/views/Home.vue';

export const appRouters = [
    {
        path:'/articleManagement',
        name:'articleManagement',
        title:'文章管理',
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
        path:'/aboutWriter',
        name:'aboutWriter',
        title:'作者相关',
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
        title:'富文本编辑',
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

export const otherRouters = {
    path:'/',
    component:Home,
    name:'Home',
    // redirect:'/personalCenter',
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

