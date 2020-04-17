export const getAllArticleInfo = vm =>{
    vm.$axios.request({
        url:'/article/getAllArticleInfo',
        method:'get'
    }).then(res => {
        res.data.articleInfo.forEach(element => {
            vm.articles.push(element);
        });
    }).catch(error => {
        console.log("error", error);
    })
}