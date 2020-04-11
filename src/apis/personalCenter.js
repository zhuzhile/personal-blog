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

