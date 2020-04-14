import Cookie from 'js-cookie'

// 提交完整信息
export const submitCompleteInfo = (vm, name)=>{
    vm.$axios.request({
      data:vm.completeInfo,
      url:'/personalCenter/completeUserInfo',
      method:'post'  
    }).then( res => {
        vm.$Message.info('提交成功');
        vm.$refs[name].resetFields();
    }).catch(res => {
        console.log("提交个人完整信息");
    })
}

// 获得完整用户信息
export const getCompleteInfo = vm => {
    vm.$axios.request({
        url:'/personalCenter/getCompleteUserInfo',
        method:'get'
    }).then(res => {
        console.log('getCompleteInfo', res);
        vm.personalInfoForm.nickName = res.data.userInfo.name;
        vm.personalInfoForm.avatarUrl = res.data.userInfo.avatarUrl;
        vm.personalInfoForm.realName = res.data.userInfo.realName;
        vm.personalInfoForm.postName = res.data.userInfo.postName;
        vm.personalInfoForm.education = res.data.userInfo.education;
        vm.personalInfoForm.companyName = res.data.userInfo.companyName;
    }).catch(error => {
        console.log("error", error);
    })
}

// 修改用户头像
export const submitAvatarUrl = vm => {

    vm.$axios.request({
        url:'/personalCenter/submitAvatarUrl',
        method:'post',
        data:{
            avatarUrl:vm.avatarUrl
        }
    }).then( res =>{
        vm.avatarUrl = '';
        vm.$Message.success(res.data.msg)
    }).catch( error =>{
        console.log("error", error);
    })
}

// 修改密码
export const changePassword = vm =>{
    vm.$axios.request({
        url:'personalCenter/changePassword',
        method:'post',
        data:{
            oldPassword:vm.updatePasswordInfo.oldPassword,
            newPassword:vm.updatePasswordInfo.newPassword
        }
    }).then(res =>{
        if(res.data.result == true){
            vm.$Message.success(res.data.msg)
        }else{
            vm.$Message.warning(res.data.msg)
        }
    }).catch(error =>{
        console.log('error', error);
    })

}





