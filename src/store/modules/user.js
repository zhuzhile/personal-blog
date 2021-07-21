const user = {
    state:{
        avatarUrl:'',
        name:''
    },
    mutations:{
        initAvatarUrl(state, payLoad){
            state.avatarUrl =  payLoad.url;
        },
        initUserName(state, payLoad){
            state.name = payLoad.name;
        }
    },
    actions:{

    }
}
export default user