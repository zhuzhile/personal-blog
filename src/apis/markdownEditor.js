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


export const getAllTagInfo = vm =>{
    vm.$axios.request({
        url:'/article/getAllArticleInfo',
        method:'get'
    }).then(res => {
        res.data.articleInfo.forEach((element, index) => {
            if(element.tag){
                vm.tags.push(element.tag);
                for(let i = 0;i < index;i++){
                    if(element.tag === res.data.articleInfo[i].tag){
                        vm.tags.pop();
                        break;
                    }
                }
            }
        });
    }).catch(error => {
        console.log("error", error);
    })

}

