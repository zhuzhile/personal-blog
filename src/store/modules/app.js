const app = {
    state:{
        menuList:[]
    },
    mutations:{
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