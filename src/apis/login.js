import Cookie from 'js-cookie';
//登录
export const login = (vm, name) =>{
    vm.$axios.request({
        url:'/login/signIn',
        data:{
           userName:vm.formData.user,
           password:vm.formData.password
        },
        method:'post'
    }).then(res=>{
        if(res.data.result == false){
            vm.$Message.warning(res.data.message);
        }else{
            vm.isShowlogDialog = false;
            vm.isLogedIn = false;
            vm.$Message.success('登录成功');
            Cookie.set({
                name: 'userName',
                value: vm.formData.user
            });
            vm.$refs[name].resetFields();
            localStorage.setItem('jwt',res.data.jwt);
        }
    }).catch(err=>{
        window.console.log(err);
    })
}


//注册
export const addUsers = (vm, name) =>{
    vm.$axios.request({
        url:'/login/addUser',
        data:{
           userName:vm.formData.user,
           password:vm.formData.password
        },
        method:'post'
    }).then(res=>{
        if(res.data.result){
            vm.$Message.success('新增用户成功');
            vm.$refs[name].resetFields();
        
        }else{
            vm.$Message.warning(res.data.message);
        }
    }).catch(err=>{
        console.log(err);
    })
}





// 根据JWT获取用户信息
// export const getUserInfo = vm =>{
//     vm.$axios.request({
//         url:'/login/getUserInfo',
//         method:'get',
//         params:{
//             token:localStorage.getItem('jwt')
//         }
//     }).then(res => {
//         window.console.log(res);
//     })
// }