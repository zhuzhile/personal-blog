import {appRouters} from '@/router/router.js';


const app = {
    state:{
        menuList:[],
        routers:appRouters
        // otherRouter:[],  
    },
    mutations:{
        // 以游客身份登入或者尚未登录
        initMenuList(state, router){
            state.menuList && (state.menuList = []);
            
            router.forEach(element => {
                if(!element.access){
                    state.menuList.push(element);
                }
            });
        },

        // 以管理员的角色登录
        updateMenuList(state){
            state.menuList = state.routers;
        },

        //给文章评论管理的权限
        updateUserMenuList(state){
            state.routers.forEach(element => {
                if(element.access == 2){
                    state.menuList.push(element);
                }
            })
        } 

    },
    actions:{

    }
}

export default app;