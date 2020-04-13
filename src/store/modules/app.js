const app = {
    state:{
        menuList:[]
    },
    mutations:{
        // 以游客身份登入或者尚未登录
        initMenuList(state, router){
            router.forEach(element => {
                if(!element.access){
                    state.menuList.push(element);
                }
            });
        },
        // 以管理员的角色登录
        updateMenuList(state, router){
            console.log("something");
            console.log(router);
            state.menuList = router;
            console.log(state.menuList);
        }
    },
    actions:{

    }
}

export default app;