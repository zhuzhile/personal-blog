export const getAllArticleInfo = vm =>{
    vm.$axios.request({
        url:'/article/getAllArticleInfo',
        method:'get'
    }).then(res => {
        let color = ['error','primary','success','yellow','orange'];
        res.data.articleInfo.forEach((element, index) => {
            vm.articles.push(element);
            // console.log(element);
            if(element.tag){
                vm.tags.push({tagName:element.tag,tagColor:color[index%5]});
            }
        });
        // console.log(vm.tags);
    }).catch(error => {
        console.log("error", error);
    })

}

export const updateArticleList = (vm, tag) =>{
    vm.$axios.request({
        url:'/article/updateArticleList',
        method:'get',
        params:{
            tag
        }
    }).then(res => {
        vm.articles.splice(0);
        console.log(vm.articles);
        res.data.articleInfo.forEach(element => {
            vm.articles.push(element);
        })
        // console.log(res);
    }).catch( error => {
        console.log('error', error);
    })
}