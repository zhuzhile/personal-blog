export const submitContent = vm =>{
    
    let data = {
        tag: vm.articleCollection?vm.articleCollection:vm.newTag,
        articleContent: vm.markdownContent,
        articleTitle: vm.articleForm.articleTitle,
        articleDescription: vm.articleForm.articleDescription
    };
    console.log('----data', data);
    vm.$axios.request({
        url:'/article/submitContent',
        data,
        method:'post'
    }).then( res => {
        vm.markdownContent = '';
        vm.articleForm.articleDescription = '';
        vm.articleForm.articleTitle = '';
        vm.articleCollection = '';
        vm.newTag = '';
        if(res.data.result){
            vm.$Message.success(res.data.msg);
        }else{
            vm.$Message.warning(res.data.msg);
        }
       
    }).catch(error => {
        console.log('error', error);
    })
}