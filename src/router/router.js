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
                component: articleManagement => import(/*webpackChunkName: "ArticleManagement"*/'@/views/article-management/articleManagement')
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
            component: commentManagement => import(/*webpackChunkName: "commentManagement"*/'@/views/comment-management/comment-management')
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
                component: aboutWriter => import(/*webpackChunkName: "aboutWriter"*/'@/views/about-writer/aboutWriter')
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
                component: markdownEidtor => import(/*webpackChunkName: "markdownEidtor"*/'@/views/markdown-editor/markdown-editor')
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
            component: articleDetail => import(/*webpackChunkName: "articleDetail"*/'@/views/article-detail/articleDetail')
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
            component: personalCenter => import(/*webpackChunkName: "PersonalInfoCenter"*/'@/views/personal-center/personalCenter'),
            children:[
                {
                    path:'personalInfo',
                    name:'personalInfo',
                    component: personalInfo => import(/*webpackChunkName: "personalInfo"*/'@/views/personal-center/components/personal-info/personalInfo')
                },
                {
                    path:'updateAvatar',
                    name:'updateAvatar',
                    component: updateAvatar => import(/* webpackChunkName: "updateAvatar"*/'@/views/personal-center/components/update-avatar/updateAvatar')
                },
                {
                    path:'updatePassword',
                    name:'updatePassword',
                    component: updatePassword => import(/* webpackChunkName: "updatePassword"*/'@/views/personal-center/components/update-password/updatePassword')
                },
                {
                    path:'completeInfo',
                    name:'completeInfo',
                    component: completeInfo => import(/* webpackChunkName: "completeInfo"*/"@/views/personal-center/components/complete-info/completeInfo")
                },
                {
                    path:'myCollection',
                    name:"myCollection",
                    component: myCollection => import(/* webpackChunkName: "myCollection"*/'@/views/personal-center/components/my-collection/myCollection')
                }
            ]
        }
    ]
}

