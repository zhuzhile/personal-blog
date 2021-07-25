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
            vm.$Notice.warning({ title: 'Fail',
                                 desc: '重新登录'});
            vm.$refs[name].resetFields();
        }else{
                vm.isShowlogDialog = false;
                vm.isLogedIn = true;
                vm.$Notice.success({
                    render: h => {
                        return h('span', {style:{Zindex: "10001", top: "64px"}}, "登录成功")
                    }
                });
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
            vm.$Notice.success({
                render: h => {
                    return h('span', {style:{Zindex: "10001", top: "64px"}}, "新增用户成功")
                }
            });
            vm.$refs[name].resetFields();
        }else{
            vm.$Notice.warning({ render: h => {
                return h('span', {style:{Zindex: "10001", top: "64px"}}, "该用户已存在")
            }});
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