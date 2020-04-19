import Cookie from 'js-cookie';
import {getSplitArticleInfo} from '@/apis/articleManagement.js'
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
            vm.$refs[name].resetFields();
        }else{
            // getSplitArticleInfo(vm).then(res => {
                vm.isShowlogDialog = false;
                vm.isLogedIn = true;
                vm.$Message.success('登录成功');
                console.log('------isLogedIn', vm.isLogedIn);
                Cookie.set('userName', vm.formData.user);
                vm.userName = Cookie.get('userName');
                if(vm.formData.user === 'BeMount'){
                    vm.updateMenuList();
                    // vm.$store.commit('updateMenuList');
                }else{
                    vm.updateUserMenuList();
                }
                console.log('Cookie', Cookie.get('userName'))
                vm.$refs[name].resetFields();
                localStorage.setItem('jwt',res.data.jwt);
                // vm.$router.go(0);
                vm.reload();
                // });
           
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