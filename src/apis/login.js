import Cookie from 'js-cookie';
import {getAvatarUrl} from '@/apis/personalCenter.js';

//登录
export const login = (vm, name) =>{
    vm.$axios.request({
        url:'/login/signIn',
        data:{
           userName:vm.formData.user.toLowerCase(),
           password:vm.formData.password
        },
        method:'post'
    }).then(res=>{
        if(res.data.result == false){
            vm.$Message.warning(res.data.message);
            vm.$refs[name].resetFields();
        }else{
                vm.isShowlogDialog = false;
                vm.isLogedIn = true;
                vm.$Message.success({content: 'Tips for manual closing',
                duration: 30,
                closable: true});
                Cookie.set('userName', vm.formData.user,{ expires: 1 });
                vm.userName = Cookie.get('userName');
                if(vm.formData.user.toLowerCase() === 'bemount'){
                    vm.updateMenuList();
                }else{
                    vm.updateUserMenuList();
                }

                vm.$refs[name].resetFields();
                localStorage.setItem('jwt',res.data.jwt);
                getAvatarUrl(vm);
                vm.reload();
        }
    }).catch(err=>{
        console.log(err);
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