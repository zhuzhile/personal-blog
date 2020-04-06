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
            component: personalCenter => import('@/views/personal-center/personalCenter')
        }
    ]
}

